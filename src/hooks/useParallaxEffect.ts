'use client';

import { useEffect, useRef } from 'react';

interface ParallaxElementConfig {
  element: HTMLElement;
  depth: number;
  directionX: number;
  directionY: number;
  movementScale: number;
}

export const useParallaxEffect = () => {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) {
      return;
    }

    // Wait for window to be fully loaded for smooth initialization
    const initializeParallax = () => {
      const parallaxElements = scene.querySelectorAll('.parallax-effect');

      if (parallaxElements.length === 0) {
        // Retry after a short delay
        setTimeout(initializeParallax, 100);
        return;
      }

      const elementConfigs = createElementConfigs(parallaxElements);
      let isAnimating = false;
      let mouseX = scene.offsetWidth / 2;
      let mouseY = scene.offsetHeight / 2;

      // Initialize elements with smooth transitions
      elementConfigs.forEach(({ element }) => {
        element.style.willChange = 'transform';
        element.style.transform = 'translate3d(0px, 0px, 0)';
        element.style.transition = 'transform 0.1s ease-out';
      });

      // Update positions initially
      updateParallaxPositions(elementConfigs, mouseX, mouseY, scene);

      // Throttled mouse move handler for smooth animation
      let lastTime = 0;
      const throttleDelay = 16; // ~60fps

      const handleMouseMove = (event: MouseEvent) => {
        const now = Date.now();

        if (now - lastTime >= throttleDelay) {
          mouseX = event.pageX;
          mouseY = event.pageY;
          lastTime = now;

          if (!isAnimating) {
            requestAnimationFrame(() => {
              updateParallaxPositions(elementConfigs, mouseX, mouseY, scene);
              isAnimating = false;
            });
            isAnimating = true;
          }
        }
      };

      scene.addEventListener('mousemove', handleMouseMove, { passive: true });

      // Return cleanup function
      return () => {
        scene.removeEventListener('mousemove', handleMouseMove);
      };
    };

    // Start parallax after window is loaded for smoothness
    if (document.readyState === 'complete') {
      // Small delay to ensure elements are fully rendered
      setTimeout(initializeParallax, 100);
    } else {
      window.addEventListener('load', () => {
        // Small delay to ensure elements are fully rendered
        setTimeout(initializeParallax, 100);
      });
    }

    // Create configuration objects for each parallax element
    const createElementConfigs = (elements: NodeListOf<Element>): ParallaxElementConfig[] => {
      return Array.from(elements).map((element) => ({
        element: element as HTMLElement,
        depth: parseFloat(element.getAttribute('data-parallax-value') || '1'),
        directionX: parseFloat(element.getAttribute('data-parallax-x') || '1'),
        directionY: parseFloat(element.getAttribute('data-parallax-y') || '1'),
        movementScale: 20, // Reduced for smoother movement
      }));
    };

    // Update parallax positions for all elements with smooth interpolation
    const updateParallaxPositions = (
      elementConfigs: ParallaxElementConfig[],
      mouseX: number,
      mouseY: number,
      scene: HTMLElement,
    ) => {
      const centerX = scene.offsetWidth / 2;
      const centerY = scene.offsetHeight / 2;

      // Calculate relative mouse position (-1 to 1) with smoothing
      const relativeX = Math.max(-1, Math.min(1, (mouseX - centerX) / centerX));
      const relativeY = Math.max(-1, Math.min(1, (mouseY - centerY) / centerY));

      elementConfigs.forEach(({ element, depth, directionX, directionY, movementScale }) => {
        const moveX = relativeX * depth * directionX * movementScale;
        const moveY = relativeY * depth * directionY * movementScale;

        // Use transform3d for hardware acceleration and smoothness
        element.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;
      });
    };

    // Cleanup function
    return () => {
      // Any additional cleanup can be added here
    };
  }, []);

  return sceneRef;
};
