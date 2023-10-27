import * as React from "react";
import { motion } from "framer-motion";
import { Data, useLanyard } from "use-lanyard";
import Link from "./Link";
import {
  SiNextdotjs,
  SiReact,
  SiPython,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiSwift,
} from "react-icons/si";
import Avatar from "../../public/pfp.png";
import useMediaQuery from "../utils/useMediaQuery";
import { useState } from "react";

const About = ({
  bodyArea,
  activity,
}: {
  bodyArea: any;
  activity: Data | undefined;
}) => {
  const matches = useMediaQuery("(min-width: 768px)");
  const [avatarState, setAvatarState] = useState<"idle" | "hover" | "drag">(
    "idle"
  );

  const sectionVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.4,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      translateY: 40,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        velocity: 30,
        duration: 0.6,
      },
    },
  };

  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SwiftUI", icon: <SiSwift /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  return (
    <>
      <div
        className="flex flex-col lg:flex-row gap-12 md:gap-6 w-full"
        id="about"
      >
        <motion.div
          initial="hidden"
          variants={sectionVariants}
          whileInView="show"
          viewport={{ once: true, amount: matches ? 0.6 : 0.1 }}
          className="flex flex-col gap-4 px-1 lg:w-1/2 lg:px-0"
        >
          <motion.div variants={childVariants}>
            <h1 className="text-text-100 flex flex-row gap-1 text-3xl">
              <a href="#about" className="text-highlight">
                #
              </a>
              <span className="font-bold">About Me</span>
            </h1>
            <h3 className="text-text-500 flex flex-row gap-1 text-xl font-semibold">
              Welcome to my website.
            </h3>
          </motion.div>
          <motion.p
            variants={childVariants}
            className="text-zinc-400 text-[0.9rem] md:text-[1.06rem] font-body"
          >
            Hey there! My name is Kanishq, and I'm a 17 y/o CS student /
            frontend engineer / coffee enthusiast. While I'm not playing tennis
            or Overwatch, I love to build things that live on the internet while
            listening to music at dangerously high volumes. I'm based in Boston,
            so{" "}
            <Link href="#contact">
              let me know if you have any cafe recommendations!
            </Link>
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-zinc-400 text-[0.9rem] md:text-[1.06rem] font-body"
          >
            I focus on creating projects that are actually useful and help
            people like{" "}
            <Link href="https://bubble.neesh.page">this website</Link> to help
            me make quick notes, but I also make cool things like{" "}
            <Link href="https://figwig.app">FigWig</Link>
            to keep track of your Figma activity. Check out the tools I've been
            using lately:
          </motion.p>
          <motion.div
            variants={childVariants}
            className="grid grid-rows-3 grid-flow-col gap-4 font-mono px-6 text-xs md:text-sm"
          >
            {technologies.map((tech, i) => (
              <div className="flex flex-row gap-2 items-center" key={i}>
                <div className="text-secondary-300">{tech.icon}</div>
                <div className="text-zinc-400">{tech.name}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="flex justify-center items-center px-4 lg:w-1/2 lg:px-0">
          {activity && (
            <div className="flex flex-col gap-4 justify-center items-center">
              <motion.div
                drag
                dragConstraints={bodyArea}
                dragElastic={0.05}
                onHoverStart={() =>
                  avatarState == "idle" ? setAvatarState("hover") : null
                }
                onDrag={() => setAvatarState("drag")}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                className="lg:w-64 lg:h-64 md:w-48 md:h-48 w-32 h-32 shadow-lg shadow-background-800/60 rounded-full z-40 cursor-pointer relative"
                whileHover={{
                  // wiggle
                  rotate: [2, -2, 2],
                  scale: 1.1,
                  transition: {
                    default: {
                      duration: 0.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                    scale: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                {avatarState == "hover" && (
                  <motion.span
                    initial={{ translateY: 40, rotateZ: 40 }}
                    animate={{ translateY: 0, rotateZ: 0 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className="absolute -top-8 left-[40%] transform origin-bottom-left -z-50 bg-background-600 font-mono text-highlight text-xs rounded-md px-2 py-1"
                  >
                    Try dragging me!
                  </motion.span>
                )}
                <img
                  src="/pfp.jpeg"
                  className="w-full h-full rounded-full pointer-events-none z-20"
                />
              </motion.div>

              {activity.spotify && (
                <div className="flex flex-row pointer-events-none items-center justify-center px-3 py-2 rounded-full bg-zinc-900/60 gap-2 text-sm z-50 max-w-md">
                  <img
                    src={activity.spotify.album_art_url}
                    className="md:w-12 md:h-12 w-10 h-10 rounded-full border-[#1db954] border-2"
                  />
                  <div>
                    <h4 className="text-white text-xs md:text-base">
                      {activity.spotify.song}
                    </h4>
                    <h6 className="text-white/40 font-light text-xs">
                      {activity.spotify.artist}
                    </h6>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
