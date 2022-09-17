import * as React from "react";
import Icon from "./Icon";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import IconButton from "./IconButton";
import { motion } from "framer-motion";

const Hero = () => {
  const item = {
    hidden: { translateY: 20, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 1,
        velocity: 30,
      },
    },
  };
  const buttonItem = {
    hidden: { translateY: 20, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
    },
  };
  const parentItem = {
    hidden: { translateY: 20, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial="hidden"
      animate="show"
      variants={parentItem}
    >
      <motion.p variants={item} className="font-mono text-md text-highlight">
        Hi, I'm
      </motion.p>
      <motion.h1
        variants={item}
        className="font-serif text-text-100 text-4xl lg:text-6xl xl:text-8xl font-semibold"
      >
        Kanishq Kancharla.
      </motion.h1>
      <motion.h1
        variants={item}
        className="font-serif text-text-200/70 text-3xl lg:text-5xl xl:text-7xl font-semibold"
      >
        I'm a web developer.
      </motion.h1>
      <motion.p
        variants={item}
        className="text-text-300 md:w-3/5 text-xl font-body"
      >
        I'm a {(new Date().getFullYear() - 2006).toString()} year old web
        developer, and I love building awesome websites and apps.
      </motion.p>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="flex flex-row gap-4 mt-4"
      >
        <IconButton variants={buttonItem}>
          <FiGithub />
        </IconButton>
        <IconButton variants={buttonItem}>
          <FiLinkedin />
        </IconButton>
        <IconButton variants={buttonItem}>
          <FiTwitter />
        </IconButton>
        <IconButton variants={buttonItem}>
          <FiMail />
        </IconButton>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
