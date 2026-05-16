"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(1, 0.28, 160, 20);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Dim outer torus ring for depth
    const ringGeo = new THREE.TorusGeometry(2.2, 0.008, 8, 80);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6b21a8, transparent: true, opacity: 0.3 });
    scene.add(new THREE.Mesh(ringGeo, ringMat));

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMouseMove);

    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      mesh.rotation.x += 0.003 + mouseY * 0.0015;
      mesh.rotation.y += 0.005 + mouseX * 0.0015;
      renderer.render(scene, camera);
    };
    tick();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
}
