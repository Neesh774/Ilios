import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import useMediaQuery from "../utils/useMediaQuery";
import IconButton from "./IconButton";
import Link from "./Link";
import RichText from "./RichText";
import { useRouter } from "next/router";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";

const Projects = ({
  featured,
  projects,
}: {
  featured: PageObjectResponse[];
  projects: PageObjectResponse[];
}) => {
  const router = useRouter();
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
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        velocity: 30,
      },
    },
  };

  const projectVariants = {
    hidden: (custom: number) => ({
      opacity: 0,
      translateY: 60,
      rotate: custom == 1 ? -4 : 4,
    }),
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      translateY: -100,
    },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        velocity: 30,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      variants={sectionVariants}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4 px-1 md:w-5/6 md:px-0 md:mx-auto"
      id="projects"
    >
      <motion.div variants={childVariants} className="flex flex-col pl-8 mb-4">
        <h1 className="text-text-100 flex flex-row gap-1 text-3xl">
          <a href="#projects" className="text-highlight">
            #
          </a>
          <span className="font-bold">My Projects</span>
        </h1>
        <h3 className="text-text-500 flex flex-row gap-1 text-xl font-semibold pl-2">
          Behold, my stuff...
        </h3>
      </motion.div>
      <div>
        {featured.map((project, i) => {
          const projectTitle =
            project.properties.Name.type == "title"
              ? project.properties.Name.title[0].plain_text
              : "Project";
          const projectLink =
            project.properties.Link.type == "url"
              ? project.properties.Link.url
              : null;
          const githubLink =
            project.properties.Github.type == "url"
              ? project.properties.Github.url
              : null;
          const link = projectLink ?? githubLink ?? "/";

          const parseImage = (image: any) => {
            return image.type == "external"
              ? image.external.url
              : image.file.url;
          };
          const imageUrl =
            project.properties.Photo.type == "files"
              ? parseImage(project.properties.Photo.files[0])
              : "";
          return (
            <motion.div
              custom={i % 2}
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: "some" }}
              variants={projectVariants}
              className={`flex mb-32 relative ${
                i % 2 == 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`flex flex-col gap-4 ${
                  i % 2 == 0 ? "text-start items-start" : "text-end items-end"
                }`}
              >
                <div>
                  <span className="font-mono text-highlight text-xs">
                    Featured
                  </span>
                  <h2 className="font-text font-bold text-3xl text-secondary-100">
                    <a href={link}>
                      {project.properties.Name.type == "title" && (
                        <RichText text={project.properties.Name.title} />
                      )}
                    </a>
                  </h2>
                </div>
                <p className="bg-background-700 shadow-lg text-text-300 font-body text-sm font-[500] px-6 py-4 min-h-fit w-3/5 rounded-[.250rem] z-10">
                  {project.properties.Description.type == "rich_text" && (
                    <RichText text={project.properties.Description.rich_text} />
                  )}
                </p>
                <div className="flex flex-row gap-3">
                  {githubLink && (
                    <IconButton onClick={() => router.push(githubLink)}>
                      <FiGithub />
                    </IconButton>
                  )}
                  {projectLink && (
                    <IconButton onClick={() => router.push(projectLink)}>
                      <FiExternalLink />
                    </IconButton>
                  )}
                </div>
              </div>
              <a href={link}>
                <motion.img
                  className={`absolute w-1/3 object-cover top-32 ${
                    i % 2 == 0 ? "left-1/4" : "right-1/4"
                  }`}
                  variants={imageVariants}
                  initial="hidden"
                  viewport={{ once: true, amount: 0.4 }}
                  whileInView="show"
                  whileHover="hover"
                  src={imageUrl}
                  alt={projectTitle}
                />
              </a>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;