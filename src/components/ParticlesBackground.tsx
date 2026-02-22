import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
  options={{
    fpsLimit: 60,
    particles: {
      number: { value: 40 },
      size: { value: 2 },
      move: { enable: true, speed: 0.6 },
      opacity: { value: 0.5 },
      links: { enable: true, color: "#2563eb", opacity: 0.3 },
    },
    detectRetina: true,
  }}
/>
  );
}

export default ParticlesBackground;