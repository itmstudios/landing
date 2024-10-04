"use client";
import { useEffect, useRef } from 'react';
import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { LumaSplatsThree } from '@lumaai/luma-web';

interface LumaSceneProps {
  source: string;
}

const LumaScene = ({ source }: LumaSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new WebGLRenderer({ canvas, antialias: false });

    const resizeRendererToDisplaySize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
    };

    resizeRendererToDisplaySize();

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    const loadSplat = async () => {
      const splat = new LumaSplatsThree({
        source,
      });
      scene.add(splat);
    };

    loadSplat().catch((error) => {
      console.error("Error loading LumaSplatsThree model:", error);
    });

    const maxFPS = 30;
    const frameTime = 1000 / maxFPS;
    let lastTime = 0;

    let frameId: number;
    const animate = (time: number) => {
      const deltaTime = time - lastTime;

      if (deltaTime >= frameTime) {
        lastTime = time;
        controls.update();
        renderer.render(scene, camera);
      }

      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    let resizeTimeout: number | undefined;
    const handleResize = () => {
      if (resizeTimeout !== undefined) {
        cancelAnimationFrame(resizeTimeout);
      }
      resizeTimeout = requestAnimationFrame(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        resizeRendererToDisplaySize();
        renderer.render(scene, camera);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      controls.dispose();
      cancelAnimationFrame(frameId);
    };
  }, [source]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default LumaScene;
