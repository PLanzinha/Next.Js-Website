"use client";

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async () => {},
    []
  );

  const ballColors = ["#FF5E5E", "#FF7C7C", "#FF9999", "#ffffff", "#008000"];

  const particleOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: {
        value: 500,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value: ballColors,
        animation: {
          enable: true,
          speed: 80,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: { min: 0.8, max: 1 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.2,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      size: {
        value: { min: 2, max: 5 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 1,
          sync: false,
          destroy: "none",
          startValue: "random",
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 1,
        },
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 150,
          duration: 0.4
        }
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles-dots"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
      className="w-full h-full"
    />
  );
};

export default ParticleBackground;