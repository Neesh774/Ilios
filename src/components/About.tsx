import * as React from "react";
import { motion } from "framer-motion";
import { useLanyard } from "use-lanyard";
import { useEffect } from "react";
import Link from "./Link";
import Icon from "./Icon";
import { FaDiscord } from "react-icons/fa";
import { useRef } from "react";
import Head from "next/head";

const About = ({ bodyArea }: { bodyArea: any }) => {
  const { data: activity } = useLanyard(
    process.env.NEXT_PUBLIC_DISCORD_ID as string
  );

  const sectionVariants = {
    hidden: {
      opacity: 0,
      translateY: 60,
      rotate: 4,
    },
    show: {
      opacity: 1,
      translateY: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 1,
        velocity: 30,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        variants={sectionVariants}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-row gap-6 w-full"
        id="about"
      >
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-text-100 flex flex-row gap-1 text-3xl">
            <a href="#about" className="text-highlight">
              #
            </a>
            <span className="font-bold">About Me</span>
          </h1>
          <p className="text-zinc-400 text-[1.06rem] font-body">
            Hey there! Welcome to Ilios. My name is Kanishq, and I'm currently a
            senior in high school. I love to create things, and I'm passionate
            about web development. I'm currently working on a few projects, and
            I'm always looking for new opportunities to learn and grow. Most
            recently, I helped organize{" "}
            <Link href="https://hacks.buildergroop.com">a hackathon</Link>.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          {activity && (
            <div className="flex flex-col gap-4">
              <motion.img
                drag
                dragConstraints={bodyArea}
                whileDrag={{ scale: 1.1 }}
                className="w-64 h-64 shadow-lg shadow-background-800/60 rounded-full"
                src={`https://cdn.discordapp.com/avatars/${activity.discord_user.id}/${activity.discord_user.avatar}.png?size=256`}
              />
              {activity.spotify && (
                <div className="flex flex-row items-center justify-center px-3 py-2 rounded-full bg-zinc-900/60 gap-2 text-sm z-10 max-w-72">
                  <img
                    src={activity.spotify.album_art_url}
                    className="w-12 h-12 rounded-full border-[#1db954] border-2"
                  />
                  <div>
                    <h4 className="text-white">{activity.spotify.song}</h4>
                    <h6 className="text-white/40 font-light">
                      {activity.spotify.artist}
                    </h6>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default About;
