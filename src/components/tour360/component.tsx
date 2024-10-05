'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const Tour360: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const controlsRef = useRef<OrbitControls>();
  const animationIdRef = useRef<number>();
  const sphereRef = useRef<THREE.Mesh>();
  const isTransitioningRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const container = containerRef.current;

      // Устанавливаем размеры контейнера динамически в зависимости от устройства
      const WIDTH = container.clientWidth;
      const HEIGHT = container.clientHeight;

      container.style.width = '100%';
      container.style.height = '100vh';

      // Сцена
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Камера
      const camera = new THREE.PerspectiveCamera(
        75,
        WIDTH / HEIGHT,
        0.1,
        1000
      );
      camera.position.set(0, 0, 0.1);
      cameraRef.current = camera;

      // Рендерер
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.setPixelRatio(window.devicePixelRatio);
      rendererRef.current = renderer;

      container.appendChild(renderer.domElement);

      // Управление
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      controlsRef.current = controls;

      controls.minDistance = 0.1;
      controls.maxDistance = 500;

      controls.maxPolarAngle = Math.PI;
      controls.minPolarAngle = 0;

      // Загрузка текстур
      const textureLoader = new THREE.TextureLoader();

      // Начальная текстура
      const initialTexture = textureLoader.load('/assets/tour360/3.JPG', () => {
        renderer.render(scene, camera);
      });

      // Геометрия сферы
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);

      // Начальный материал
      const material = new THREE.MeshBasicMaterial({
        map: initialTexture,
        transparent: true,
        opacity: 1,
      });

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      sphereRef.current = sphere;

      // Добавление кликабельной точки
      const pointGeometry = new THREE.SphereGeometry(5, 32, 32);
      const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);

      // Установка позиции точки
      pointMesh.position.set(100, 0, -100);
      scene.add(pointMesh);

      // Raycaster и вектор мыши для обнаружения кликов
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Функция обработки кликов
      const onClick = (event: MouseEvent) => {
        event.preventDefault();
        if (isTransitioningRef.current) return;

        if (renderer.domElement && cameraRef.current) {
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, cameraRef.current);
          const intersects = raycaster.intersectObjects([pointMesh]);

          if (intersects.length > 0) {
            isTransitioningRef.current = true;

            const newTexture = textureLoader.load('/assets/tour360/1.JPG', () => {
              const newMaterial = new THREE.MeshBasicMaterial({
                map: newTexture,
                transparent: true,
                opacity: 0,
              });

              const newSphere = new THREE.Mesh(geometry, newMaterial);
              scene.add(newSphere);

              gsap.to(newMaterial, {
                opacity: 1,
                duration: 1,
                onComplete: () => {
                  scene.remove(sphere);
                  sphere.material.dispose();
                  sphere.geometry.dispose();

                  sphereRef.current = newSphere;
                  isTransitioningRef.current = false;
                },
              });

              gsap.to(material, {
                opacity: 0,
                duration: 1,
              });
            });
          }
        }
      };

      renderer.domElement.addEventListener('click', onClick);

      // Обработка изменения размера окна
      const handleResize = () => {
        if (cameraRef.current && rendererRef.current) {
          const width = container.clientWidth;
          const height = container.clientHeight;

          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();

          rendererRef.current.setSize(width, height);
        }
      };
      window.addEventListener('resize', handleResize);

      // Анимация
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Очистка при размонтировании компонента
      return () => {
        if (rendererRef.current) {
          rendererRef.current.dispose();
          if (rendererRef.current.domElement) {
            rendererRef.current.domElement.remove();
          }
        }

        if (sceneRef.current) {
          sceneRef.current.traverse((object) => {
            if ((object as THREE.Mesh).geometry) {
              (object as THREE.Mesh).geometry.dispose();
            }
            if ((object as THREE.Mesh).material) {
              const material = (object as THREE.Mesh).material;
              if (Array.isArray(material)) {
                material.forEach((m) => m.dispose());
              } else {
                material.dispose();
              }
            }
          });
        }

        if (controlsRef.current) {
          controlsRef.current.dispose();
        }

        window.removeEventListener('resize', handleResize);
        renderer.domElement.removeEventListener('click', onClick);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100vh',
        margin: '0 auto',
      }}
    />
  );
};

export default Tour360;
