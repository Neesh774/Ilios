import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { FiGithub, FiStar } from "react-icons/fi";
import { SiDevpost } from "react-icons/si";
import Button from "../../components/Button";
import MetaTags from "../../components/MetaTags";
import { notionClient } from "../../utils/client";
import { notionColor } from "../../utils/color";
import formatTime from "../../utils/formatTime";
import { Project as ProjectType } from "../../utils/types";

export default function Projects({ projects }: { projects: ProjectType[] }) {
  const router = useRouter();
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

  const row = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    show: (i: number) => ({
      opacity: 0.6,
      translateY: 0,
      transition: {
        duration: i * 0.05,
      },
    }),
  };
  return (
    <>
      <MetaTags
        title="Projects | Kanishq Kancharla"
        description="Here are all of the projects I've worked on over the years."
      />
      <div className="pb-4 pt-6 px-8 border-b-[1px] border-text-500 mb-96 md:mb-72 md:pt-8 md:px-12 lg:pb-6 lg:pt-28 lg:px-36 xl:py-36 xl:pb-16 xl:px-60 2xl:px-[20%] flex flex-col gap-20 overflow-hidden">
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          animate="show"
          variants={parentItem}
        >
          <motion.h1
            variants={item}
            className="font-serif text-text-100/90 text-4xl md:text-4xl xl:text-6xl font-semibold"
          >
            Projects
          </motion.h1>
          <motion.h1
            variants={item}
            className="font-mono text-highlight text-sm md:text-base lg:text-lg"
          >
            Here are all of the projects I've worked on over the years.
          </motion.h1>
          <motion.div className="flex flex-row gap-2" variants={item}>
            <Link href="https://github.com/Neesh774" passHref>
              <Button className="flex flex-row gap-2 items-center flex-nowrap">
                <FiGithub className="h-6 w-6" />
                Github
              </Button>
            </Link>
            <Link href="https://devpost.com/kanishq0106" passHref>
              <Button className="flex flex-row gap-2 items-center flex-nowrap">
                <SiDevpost className="h-6 w-6" />
                Devpost
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <div>
          <div className="grid grid-cols-4 md:grid-cols-6 mb-4 select-none">
            <span className="text-left col-span-2 px-4 text-xl text-text-300/50 font-medium font-serif">
              Title
            </span>
            <span className="text-left col-span-3 text-xl text-text-300/50 font-medium font-serif hidden lg:block">
              Tags
            </span>
            <span className="text-right col-span-1 px-4 text-xl text-text-300/50 font-medium font-serif">
              Date
            </span>
          </div>
          <motion.div
            transition={{
              staggerChildren: 0.1,
              delayChildren: 0.8,
            }}
          >
            {projects &&
              projects.map((project, i) => {
                return (
                  <Link
                    key={i}
                    href={`/projects/${project.properties.Name.title[0].plain_text}`}
                  >
                    <motion.div
                      variants={row}
                      custom={i}
                      animate="show"
                      initial="hidden"
                      className="rounded-lg px-1 py-2 bg-transparent grid grid-cols-4 md:grid-cols-6 cursor-pointer opacity-60 scale-100 hover:!opacity-100 hover:!scale-105 transition-all hover:duration-100 duration-300"
                    >
                      <div className="text-text-100/70 px-4 col-span-2 font-semibold font-serif text-xl flex flex-row gap-2 items-center">
                        {project.properties.Name.title[0].plain_text}
                        {project.properties.Featured.checkbox && (
                          <FiStar className="inline-block text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-row flex-wrap gap-2 col-span-3 hidden md:flex">
                        {project.properties.Technologies.multi_select.map(
                          (tag) => (
                            <span
                              className="px-2 font-mono py-1 h-7 flex items-center bg-background-900 rounded-md text-sm"
                              style={{ color: notionColor(tag.color) }}
                            >
                              {tag.name}
                            </span>
                          )
                        )}
                      </div>
                      <div className="text-sm text-highlight font-mono flex flex-row gap-2 justify-end whitespace-nowrap">
                        {formatTime(project.properties.Date.date.start)}
                        {project.properties.Date.date.end && (
                          <>
                            <span>&mdash;</span>
                            {formatTime(project.properties.Date.date.end)}
                          </>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { results: projects } = await notionClient.databases.query({
    database_id: process.env.NOTION_PROJECTS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Date",
      },
    ],
  });
  return {
    props: {
      projects,
    },
  };
};
