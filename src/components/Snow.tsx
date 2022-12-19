import { useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, Options } from "tsparticles-engine";

export default function Snow() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const particlesInit = async (main: Engine) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const options = {
    particles: {
      move: {
        direction: "bottom",
        enable: true,
        random: false,
        straight: false,
        speed: velocityFactor,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
      },
      size: {
        value: { min: 0.1, max: 2 },
      },
      wobble: {
        distance: 20,
        enable: true,
        speed: {
          min: -5,
          max: 5,
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      // @ts-ignore
      options={options as Options}
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}
