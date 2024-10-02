'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// Импорт OrbitControls
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// Импорт gsap для анимаций
import gsap from 'gsap';

const Tour360: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const controlsRef = useRef<OrbitControls>();
  const animationIdRef = useRef<number>();
  const sphereRef = useRef<THREE.Mesh>();
  const isTransitioningRef = useRef<boolean>(false); // Флаг для предотвращения повторных кликов во время перехода

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const container = containerRef.current;

      // Устанавливаем размеры контейнера
      const WIDTH = 800;
      const HEIGHT = 600;
      container.style.width = `${WIDTH}px`;
      container.style.height = `${HEIGHT}px`;

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
      const initialTexture = textureLoader.load('/assets/tour360/1.JPG', () => {
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
      pointMesh.position.set(100, 0, -100); // Настройте позицию по необходимости
      scene.add(pointMesh);

      // Raycaster и вектор мыши для обнаружения кликов
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Функция обработки кликов
      const onClick = (event: MouseEvent) => {
        event.preventDefault();
        if (isTransitioningRef.current) return; // Если уже идет переход, игнорируем клики

        if (renderer.domElement && cameraRef.current) {
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, cameraRef.current);
          const intersects = raycaster.intersectObjects([pointMesh]);

          if (intersects.length > 0) {
            // Точка была нажата, загружаем новый файл с анимацией перехода
            isTransitioningRef.current = true;

            const newTexture = textureLoader.load('/assets/tour360/2.JPG', () => {
              // Создаем новый материал с новой текстурой
              const newMaterial = new THREE.MeshBasicMaterial({
                map: newTexture,
                transparent: true,
                opacity: 0,
              });

              // Создаем новую сферу с новым материалом
              const newSphere = new THREE.Mesh(geometry, newMaterial);
              scene.add(newSphere);

              // Анимируем переход прозрачности
              gsap.to(newMaterial, {
                opacity: 1,
                duration: 1,
                onComplete: () => {
                  // Удаляем старую сферу после перехода
                  scene.remove(sphere);
                  sphere.material.dispose();
                  sphere.geometry.dispose();

                  // Обновляем ссылку на текущую сферу
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
          const width = WIDTH;
          const height = HEIGHT;

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
        margin: '0 auto', // Центрирование контейнера
      }}
    />
  );
};

export default Tour360;
