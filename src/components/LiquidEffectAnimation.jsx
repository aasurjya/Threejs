"use client";

import { useEffect, useRef } from "react";

const createCanvasId = () =>
  `liquid-canvas-${Math.random().toString(36).slice(2, 9)}`;

const createVideoId = () =>
  `liquid-video-${Math.random().toString(36).slice(2, 9)}`;

const LiquidEffectAnimation = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const canvasIdRef = useRef(createCanvasId());
  const videoIdRef = useRef(createVideoId());

  useEffect(() => {
    if (!canvasRef.current) return;

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
      const canvas = document.getElementById('${canvasIdRef.current}');
      const video = document.getElementById('${videoIdRef.current}');
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (canvas && video && !prefersReducedMotion) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
        const app = LiquidBackground(canvas);

        try {
          canvas.style.background = 'transparent';
          if (app?.three?.renderer) {
            app.three.renderer.setClearColor(0x000000, 0);
            if (typeof app.three.renderer.setClearAlpha === 'function') {
              app.three.renderer.setClearAlpha(0);
            }
          }
        } catch (e) {}

        const ensureVideoPlays = () => {
          try {
            const playPromise = video.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
          } catch (e) {}
        };

        if (!video.src) {
          video.src = '/models/fish.mp4';
        }

        if (video.readyState >= 2) {
          ensureVideoPlays();
        } else {
          video.addEventListener('canplay', ensureVideoPlays, { once: true });
        }

        const placeholder =
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO7+v3sAAAAASUVORK5CYII=';

        app.liquidPlane.material.metalness = 0.75;
        app.liquidPlane.material.roughness = 0.25;
        app.liquidPlane.uniforms.displacementScale.value = isMobile ? 3 : 5;
        app.setRain(false);

        const updateUvScale = () => {
          if (!app?.three?.size || !app?.liquidPlane?.uniforms?.uvMapScale?.value) return;

          const viewportRatio = app.three.size.ratio || 1;
          const srcW = video.videoWidth || video.width || 1;
          const srcH = video.videoHeight || video.height || 1;
          const srcRatio = srcW / srcH;

          if (!isFinite(srcRatio) || srcRatio <= 0) {
            app.liquidPlane.uniforms.uvMapScale.value.set(1, 1);
            return;
          }

          if (viewportRatio < srcRatio) {
            app.liquidPlane.uniforms.uvMapScale.value.set(viewportRatio / srcRatio, 1);
          } else {
            app.liquidPlane.uniforms.uvMapScale.value.set(1, srcRatio / viewportRatio);
          }
        };

        video.addEventListener(
          'loadedmetadata',
          () => {
            if (video.videoWidth && video.videoHeight) {
              video.width = video.videoWidth;
              video.height = video.videoHeight;
            }
            updateUvScale();
          },
          { once: true }
        );

        (async () => {
          try {
            await app.loadImage(placeholder);
            const tex = app.liquidPlane?.material?.map;
            if (!tex) return;

            tex.image = video;
            tex.generateMipmaps = false;
            tex.minFilter = 1006;
            tex.magFilter = 1006;
            tex.flipY = false;
            tex.colorSpace = 'srgb';
            tex.needsUpdate = true;

            const originalOnBeforeRender =
              typeof app.three.onBeforeRender === 'function' ? app.three.onBeforeRender : () => {};
            app.three.onBeforeRender = (state) => {
              if (video.readyState >= 2) tex.needsUpdate = true;
              originalOnBeforeRender(state);
            };

            const originalOnAfterResize =
              typeof app.three.onAfterResize === 'function' ? app.three.onAfterResize : () => {};
            app.three.onAfterResize = (size) => {
              originalOnAfterResize(size);
              updateUvScale();
            };

            updateUvScale();
          } catch (e) {
            console.warn('Liquid video texture setup failed', e);
          }
        })();

        window.__liquidApp = app;
      }
    `;

    document.body.appendChild(script);

    return () => {
      if (window.__liquidApp && typeof window.__liquidApp.dispose === "function") {
        window.__liquidApp.dispose();
        delete window.__liquidApp;
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const baseClass =
    "fixed inset-0 m-0 w-full h-full touch-none overflow-hidden pointer-events-none";
  const containerClass = className
    ? `${baseClass} ${className}`
    : baseClass;

  return (
    <div className={containerClass} style={{ fontFamily: '"Montserrat", serif' }}>
      <video
        id={videoIdRef.current}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/models/fish.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <canvas
        ref={canvasRef}
        id={canvasIdRef.current}
        className="absolute inset-0 w-full h-full z-10"
      />
    </div>
  );
};

export default LiquidEffectAnimation;
