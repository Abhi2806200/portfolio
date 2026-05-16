"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const W = window.innerWidth;
    const H = window.innerHeight;

    /* ── Scene ── */
    const scene = new THREE.Scene();

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
    camera.position.set(0, 0, 30);

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Particles ── */
    const COUNT = isMobile ? 600 : 1400;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: isMobile ? 0.06 : 0.08,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Secondary sparse particles ── */
    const COUNT2 = isMobile ? 200 : 500;
    const positions2 = new Float32Array(COUNT2 * 3);
    for (let i = 0; i < COUNT2; i++) {
      positions2[i * 3]     = (Math.random() - 0.5) * 120;
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    const p2Geo = new THREE.BufferGeometry();
    p2Geo.setAttribute("position", new THREE.BufferAttribute(positions2, 3));
    const p2Mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.18,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(p2Geo, p2Mat));

    /* ── Geometric shapes scattered across the scene ── */
    const shapes: { mesh: THREE.Mesh; speedX: number; speedY: number; floatPhase: number }[] = [];

    const shapeConfigs = [
      { geo: new THREE.IcosahedronGeometry(2.2, 1), pos: [-18, 10, -5], opacity: 0.12 },
      { geo: new THREE.OctahedronGeometry(1.6, 0), pos: [20, -8, -8],   opacity: 0.10 },
      { geo: new THREE.IcosahedronGeometry(1.4, 1), pos: [14, 16, -12], opacity: 0.08 },
      { geo: new THREE.OctahedronGeometry(2.4, 0), pos: [-22, -14, -6], opacity: 0.09 },
      { geo: new THREE.IcosahedronGeometry(1.0, 0), pos: [8, -20, -4],  opacity: 0.10 },
    ];

    for (const cfg of shapeConfigs) {
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: cfg.opacity,
      });
      const mesh = new THREE.Mesh(cfg.geo, mat);
      mesh.position.set(...(cfg.pos as [number, number, number]));
      scene.add(mesh);
      shapes.push({
        mesh,
        speedX: 0.003 + Math.random() * 0.004,
        speedY: 0.002 + Math.random() * 0.003,
        floatPhase: Math.random() * Math.PI * 2,
      });
    }

    /* ── Subtle horizontal grid plane ── */
    const gridGeo = new THREE.PlaneGeometry(160, 160, 30, 30);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.025,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -20;
    scene.add(grid);

    /* ── Mouse tracking ── */
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    /* ── Resize ── */
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ── */
    let rafId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      /* scroll progress: 0 at top, 1 at bottom */
      const scrollMax = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollProgress = window.scrollY / scrollMax;

      /* Particles slowly rotate based on time + scroll */
      particles.rotation.y = t * 0.018 + scrollProgress * 1.2;
      particles.rotation.x = t * 0.008 + scrollProgress * 0.6;

      /* Camera moves down slightly as user scrolls (parallax) */
      const targetCamY = -scrollProgress * 14;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;

      /* Mouse parallax on camera x */
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.015;
      camera.lookAt(0, camera.position.y, 0);

      /* Shapes rotate and float */
      for (const { mesh, speedX, speedY, floatPhase } of shapes) {
        mesh.rotation.x += speedX;
        mesh.rotation.y += speedY;
        /* gentle float */
        mesh.position.y += Math.sin(t * 0.5 + floatPhase) * 0.006;
        /* drift with scroll */
        mesh.rotation.z = scrollProgress * 0.5;
      }

      /* Grid slow drift */
      grid.position.x = Math.sin(t * 0.05) * 4;

      renderer.render(scene, camera);
    };
    tick();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      particleGeo.dispose();
      p2Geo.dispose();
      particleMat.dispose();
      p2Mat.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      for (const { mesh } of shapes) {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      }
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
