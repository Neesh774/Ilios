import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const links = ["about", "projects", "contact"];

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [flat, setFlat] = useState(true);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    return scrollY.onChange(() => {
      // set visible if scrolly is going up
      if (scrollY.get() > scrollY.getPrevious()) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      if (scrollYProgress.get() + scrollYProgress.getVelocity() > 0.1) {
        setFlat(false);
      } else {
        setFlat(true);
        setHidden(false);
      }
    });
  }, []);

  const navVariants = {
    hidden: { opacity: 0, translateY: -40 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        bounce: 0.8,
        stiffness: 100,
      },
    },
  };
  const linkVariants = {
    hidden: {
      opacity: 0,
      translateY: -40,
      rotate: -30,
    },
    initial: {
      opacity: 0,
      translateY: -40,
    },
    show: (custom: number) => ({
      opacity: 1,
      translateY: 0,
      rotate: 0,
      transition: {
        delay: custom * 0.1 + 1.1,
      },
    }),
    load: {
      opacity: 1,
      translateY: 0,
    },
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate={hidden ? "hidden" : "show"}
      className={`py-2 pt-8 sticky -top-6 mx-auto w-full flex justify-center bg-background-800 transition-shadow duration-700 z-50 ${
        !flat ? "shadow-lg" : ""
      }`}
    >
      <div className="flex flex-row gap-4 md:gap-8">
        {links.map((link, i) => (
          <motion.a
            key={i}
            variants={linkVariants}
            animate="show"
            initial="hidden"
            custom={i}
            className="gap-1 py-1 px-2 flex flex-row font-mono text-sm text-text-100 hover:text-highlight transition-all duration-300"
            href={`#${link}`}
          >
            <span className="text-highlight">#</span>
            <span>{link}</span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Nav;
