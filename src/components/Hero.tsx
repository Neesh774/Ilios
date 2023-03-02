import * as React from "react";
import Icon from "./Icon";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import IconButton from "./IconButton";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "./Button";

const Hero = () => {
  const router = useRouter();
  const item = {
    hidden: { translateY: 20, opacity: 0 },
    show: {
      translateY: 0,
      opacity: 1,
      transition: {
        velocity: 30,
        duration: 0.6,
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
      className="flex flex-col gap-6 h-[50vh]"
      initial="hidden"
      animate="show"
      variants={parentItem}
    >
      <motion.p variants={item} className="font-mono text-md text-highlight">
        Hi, I'm
      </motion.p>
      <motion.h1
        variants={item}
        className="font-serif text-text-100 text-4xl md:text-6xl xl:text-8xl font-semibold"
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
        className="text-text-300 md:w-3/5 lg:w-4/5 md:text-xl font-body"
      >
        I'm {(new Date().getFullYear() - 2006).toString()} years old, and I want
        to use computers to build solutions to real-world problems.
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
        <IconButton
          variants={buttonItem}
          onClick={() => router.push("https://github.com/Neesh774")}
        >
          <FiGithub />
        </IconButton>
        <IconButton
          variants={buttonItem}
          onClick={() => router.push("https://www.linkedin.com/in/kanishqk/")}
        >
          <FiLinkedin />
        </IconButton>
        <IconButton
          variants={buttonItem}
          onClick={() => router.push("https://twitter.com/Neesh774")}
        >
          <FiTwitter />
        </IconButton>
        <IconButton
          variants={buttonItem}
          onClick={() => router.push("mailto:Kanishq0106@gmail.com")}
        >
          <FiMail />
        </IconButton>
      </motion.div>
      <motion.div
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        initial={{
          translateY: 20,
          opacity: 0,
        }}
        transition={{
          delay: 1.6,
        }}
      >
        <Button onClick={() => router.push("/blog")}>Check out my blog</Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
