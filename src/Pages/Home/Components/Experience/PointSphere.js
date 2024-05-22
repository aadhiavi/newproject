import  { useEffect } from 'react';
import * as THREE from 'three';

const PointSphere = () => {
  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create geometry and material for the sphere
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.PointsMaterial({ color: 0xffffff });

    // Create points representing vertices of the sphere
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Set camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere
      points.rotation.x += 0.01;
      points.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default PointSphere;