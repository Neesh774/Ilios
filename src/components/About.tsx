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
} from "react-icons/si";
import useMediaQuery from "../utils/useMediaQuery";

const About = ({
  bodyArea,
  activity,
}: {
  bodyArea: any;
  activity: Data | undefined;
}) => {
  const matches = useMediaQuery("(min-width: 768px)");

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
      translateY: 60,
      rotate: matches ? 4 : 0,
    },
    show: {
      opacity: 1,
      translateY: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        velocity: 30,
      },
    },
  };

  const technologies = [
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Svelte", icon: <SiSvelte /> },
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
              Welcome to Ilios.
            </h3>
          </motion.div>
          <motion.p
            variants={childVariants}
            className="text-zinc-400 text-[0.9rem] md:text-[1.06rem] font-body"
          >
            Hey there! My name is Kanishq, and I'm currently a senior in high
            school. I love to create things, and I'm passionate about web
            development. I'm currently working on a few projects, and I'm always
            looking for new opportunities to learn and grow. Most recently, I
            helped organize{" "}
            <Link href="https://hacks.buildergroop.com">a hackathon</Link>.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="text-zinc-400 text-[0.9rem] md:text-[1.06rem] font-body"
          >
            I focus on creating projects that are actually useful and help
            people like{" "}
            <Link href="https://bubble.ilioslabs.dev">this website</Link> to
            help me keep notes on my computer, but I also make cool things like{" "}
            <Link href="https://github.com/Neesh774/Scholar">this program</Link>
            to keep me up-to-date with my assignments. Here are some of the
            technologies I've been working with recently:
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
              <motion.img
                drag
                dragConstraints={bodyArea}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.05}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true, amount: 0.6 }}
                className="lg:w-64 lg:h-64 md:w-48 md:h-48 w-32 h-32 shadow-lg shadow-background-800/60 z-40 rounded-full"
                src={`https://cdn.discordapp.com/avatars/${activity.discord_user.id}/${activity.discord_user.avatar}.png?size=256`}
              />
              {activity.spotify && (
                <div className="flex flex-row items-center justify-center px-3 py-2 rounded-full bg-zinc-900/60 gap-2 text-sm z-50 max-w-md">
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
