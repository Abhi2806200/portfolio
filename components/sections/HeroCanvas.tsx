"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const W = container.clientWidth;
    const H = container.clientHeight;

    /* ── Scene ── */
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080808, isMobile ? 0.022 : 0.018);

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(68, W / H, 0.1, 160);
    camera.position.set(0, 4, 24);

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Wireframe grid floor ── */
    const gridGeo = new THREE.PlaneGeometry(120, 120, 40, 40);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.06,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -8;
    scene.add(grid);

    /* ── Main particle field (cyan) ── */
    const COUNT = isMobile ? 700 : 1600;
    const p1Pos = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      p1Pos[i * 3]     = (Math.random() - 0.5) * 90;
      p1Pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p1Pos[i * 3 + 2] = (Math.random() - 0.5) * 90;
    }
    const p1Geo = new THREE.BufferGeometry();
    p1Geo.setAttribute("position", new THREE.BufferAttribute(p1Pos, 3));
    const p1Mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.07,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles1 = new THREE.Points(p1Geo, p1Mat);
    scene.add(particles1);

    /* ── Secondary particle field (white, sparse) ── */
    const COUNT2 = isMobile ? 300 : 700;
    const p2Pos = new Float32Array(COUNT2 * 3);
    for (let i = 0; i < COUNT2; i++) {
      p2Pos[i * 3]     = (Math.random() - 0.5) * 110;
      p2Pos[i * 3 + 1] = (Math.random() - 0.5) * 55;
      p2Pos[i * 3 + 2] = (Math.random() - 0.5) * 110;
    }
    const p2Geo = new THREE.BufferGeometry();
    p2Geo.setAttribute("position", new THREE.BufferAttribute(p2Pos, 3));
    const p2Mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
    });
    scene.add(new THREE.Points(p2Geo, p2Mat));

    /* ── Central icosahedron (cyan wireframe) ── */
    const icoGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    /* ── Outer shell (purple, counter-rotates) ── */
    const shellGeo = new THREE.IcosahedronGeometry(4.5, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x888888,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    });
    const shell = new THREE.Mesh(shellGeo, shellMat);
    scene.add(shell);

    /* ── Orbital rings ── */
    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(6, 0.018, 6, 100),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 })
    );
    ring1.rotation.x = Math.PI / 2.6;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(7.8, 0.012, 6, 100),
      new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.13 })
    );
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.z = Math.PI / 3.8;
    scene.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(9.5, 0.008, 6, 100),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07 })
    );
    ring3.rotation.x = Math.PI / 4.5;
    ring3.rotation.y = Math.PI / 5;
    scene.add(ring3);

    /* ── Floating data nodes (small spinning boxes) ── */
    const nodeData = Array.from({ length: 10 }, (_, i) => {
      const g = new THREE.OctahedronGeometry(0.22, 0);
      const m = new THREE.Mesh(
        g,
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0xffffff : 0x888888,
          wireframe: true,
          transparent: true,
          opacity: 0.5,
        })
      );
      m.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 14
      );
      scene.add(m);
      return { mesh: m, speed: 0.008 + Math.random() * 0.012, phase: Math.random() * Math.PI * 2 };
    });

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
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* ── Animate ── */
    let rafId: number;
    const clock = new THREE.Clock();

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Core shapes
      ico.rotation.x = t * 0.18;
      ico.rotation.y = t * 0.26;
      shell.rotation.x = -t * 0.12;
      shell.rotation.y = t * 0.19;

      // Rings
      ring1.rotation.y = t * 0.32;
      ring2.rotation.z = -t * 0.28;
      ring3.rotation.y = -t * 0.15;
      ring3.rotation.x = t * 0.1;

      // Particles slow drift
      particles1.rotation.y = t * 0.015;
      particles1.rotation.x = t * 0.008;

      // Floating nodes
      nodeData.forEach(({ mesh, speed, phase }) => {
        mesh.rotation.x += speed;
        mesh.rotation.y += speed * 1.3;
        mesh.position.y += Math.sin(t * 0.6 + phase) * 0.003;
      });

      // Camera mouse parallax (smooth lerp)
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.018;
      camera.position.y += (mouseY * 2 + 4 - camera.position.y) * 0.018;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    tick();

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      [gridGeo, icoGeo, shellGeo, ring1.geometry, ring2.geometry, ring3.geometry, p1Geo, p2Geo]
        .forEach((g) => g.dispose());
      [gridMat, icoMat, shellMat, p1Mat, p2Mat].forEach((m) => m.dispose());
      nodeData.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
