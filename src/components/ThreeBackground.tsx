"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particle field
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const colorOptions = [
      new THREE.Color(0x3b82f6), // blue
      new THREE.Color(0x6366f1), // indigo
      new THREE.Color(0x06b6d4), // cyan
      new THREE.Color(0x8b5cf6), // violet
    ];

    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const radius = 2.5 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const col = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      sizes[i] = Math.random() * 2.5 + 0.5;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, d);
          gl_FragColor = vec4(vColor, alpha * 0.85);
        }
      `,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Wireframe sphere
    const sphereGeo = new THREE.SphereGeometry(2.4, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const wireSphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(wireSphere);

    // Outer glow ring
    const ringGeo = new THREE.TorusGeometry(3.5, 0.008, 8, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.2 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    const ring2Geo = new THREE.TorusGeometry(4.0, 0.005, 8, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.1 });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.z = Math.PI / 4;
    scene.add(ring2);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animate
    let frame = 0;
    const animate = () => {
      const raf = requestAnimationFrame(animate);
      frame += 0.003;

      particles.rotation.y = frame * 0.3 + mouseX * 0.15;
      particles.rotation.x = frame * 0.1 + mouseY * 0.1;

      wireSphere.rotation.y = frame * 0.2;
      wireSphere.rotation.x = frame * 0.08;

      ring.rotation.z = frame * 0.4;
      ring2.rotation.y = -frame * 0.3;

      renderer.render(scene, camera);
      return raf;
    };

    const rafId = animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
}
