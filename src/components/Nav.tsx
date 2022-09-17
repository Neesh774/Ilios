import { motion } from "framer-motion";
import Button from "./Button";

const links = ["about", "projects", "contact"];

const Nav = () => {
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
      whileInView="show"
      className="py-2 sticky mx-auto w-full flex justify-center bg-background-800"
    >
      <div className="flex flex-row gap-8">
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
