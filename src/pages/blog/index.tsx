import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import MetaTags from "../../components/MetaTags";
import { notionClient } from "../../utils/client";
import { notionColor } from "../../utils/color";
import formatTime from "../../utils/formatTime";
import { Blog as BlogType } from "../../utils/types";

export default function Blog({ blogs }: { blogs: BlogType[] }) {
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
        title="Blogs | Kanishq Kancharla"
        description="Sometimes I write about things I learn or work on."
      />
      <div className="pb-4 pt-6 px-8 border-b-[1px] border-text-500 mb-64 md:pt-8 md:px-12 lg:pb-6 lg:pt-28 lg:px-36 xl:py-36 xl:pb-16 xl:px-60 2xl:px-[20%] flex flex-col gap-20 overflow-hidden h-[100vh]">
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
            Blog
          </motion.h1>
          <motion.h1
            variants={item}
            className="font-mono text-highlight text-sm md:text-base lg:text-lg"
          >
            Sometimes I write about things I learn or work on.
          </motion.h1>
        </motion.div>
        <div>
          <div className="grid grid-cols-4 md:grid-cols-6 mb-4 select-none">
            <span className="text-left col-span-3 px-4 text-xl text-text-300/50 font-medium font-serif">
              Title
            </span>
            <span className="text-left col-span-2 text-xl text-text-300/50 font-medium font-serif hidden lg:block">
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
            {blogs &&
              blogs.map((blog, i) => {
                return (
                  <Link
                    key={i}
                    href={`/blog/${blog.properties.Slug.rich_text[0].plain_text}`}
                  >
                    <motion.div
                      variants={row}
                      custom={i}
                      animate="show"
                      initial="hidden"
                      className="rounded-lg px-1 py-2 bg-transparent grid grid-cols-4 md:grid-cols-6 cursor-pointer opacity-60 scale-100 hover:!opacity-100 hover:!scale-105 transition-all hover:duration-100 duration-300"
                    >
                      <div className="text-text-100/70 px-4 col-span-3 font-semibold font-serif text-xl">
                        {blog.properties.Name.title[0].plain_text}
                      </div>
                      <div className="flex-row flex-wrap gap-2 col-span-2 hidden md:flex">
                        {blog.properties.Tags.multi_select.map((tag) => (
                          <span
                            className="px-2 font-mono py-1 h-7 flex items-center bg-background-900 rounded-md text-sm"
                            style={{ color: notionColor(tag.color) }}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm px-4 text-highlight font-mono text-right">
                        {formatTime(blog.properties.Created.created_time)}
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
  const { results: blogs } = await notionClient.databases.query({
    database_id: process.env.NOTION_BLOGS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Created",
      },
    ],
  });
  return {
    props: {
      blogs,
    },
  };
};
