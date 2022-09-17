import { motion } from "framer-motion";

const links = ["contact", "projects", "about"];

const Nav = () => {
  const navVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const linkVariants = {
    hidden: {
      opacity: 0,
      translateY: -40,
      rotate: -30,
    },
    show: {
      opacity: 1,
      translateY: 0,
      rotate: 0,
    },
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className="absolute top-0 mx-auto w-full flex justify-center mt-2"
    >
      <motion.div variants={navVariants} className="flex flex-row gap-8">
        {links.map((link) => (
          <motion.a
            variants={linkVariants}
            className="gap-1 py-1 px-2 flex flex-row font-mono text-sm text-text-100 hover:text-highlight transition-all duration-300"
            href={`#${link}`}
          >
            <span className="text-highlight">#</span>
            <span>{link}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Nav;
