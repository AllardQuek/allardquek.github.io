import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{ position: "absolute", zIndex: -1 }}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 1250,
              },
            },
            color: {
              value: "#636e72",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            links: {
              enable: true,
              distance: 120,
              opacity: 0.4,
              width: 1,
              shadow: {
                enable: true,
                color: "#e74c3c",
              },
            },
            move: {
              enable: true,
              random: false,
              straight: false,
              bounce: false,
              speed: 2,
              direction: "none",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            opacity: {
              value: 0.5,
              random: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
}

export default Particle;
