import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import IconButton from "../IconButton";
import RichText from "../notion/RichText";
import { useRouter } from "next/router";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Carousel from "./Carousel";
import Image from "../Image";
import Button from "../Button";

const Projects = ({
  featured,
  projects,
}: {
  featured: PageObjectResponse[];
  projects: PageObjectResponse[];
}) => {
  const router = useRouter();

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
      rotateX: 90,
    },
    show: {
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.7,
        velocity: 30,
        delay: 0.8,
        duration: 0.8,
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

  const techParentVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 1.2,
      },
    },
  };

  const techVariants = {
    hidden: {
      opacity: 0,
      translateY: -60,
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
              className={`flex mb-20 md:mb-44 relative ${
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
                  <div
                    className={`flex md:items-center md:justify-center gap-2 ${
                      i % 2 == 0
                        ? "flex-col md:flex-row items-start"
                        : "flex-col md:flex-row-reverse items-end"
                    }`}
                  >
                    <h2
                      className={`font-text font-bold text-3xl text-secondary-100 ${
                        i % 2 == 0 ? "mr-4" : "ml-4"
                      }`}
                    >
                      <a href={link}>
                        {project.properties.Name.type == "title" && (
                          <RichText text={project.properties.Name.title} />
                        )}
                      </a>
                    </h2>
                    <motion.div
                      variants={techParentVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ amount: 0.7, once: true }}
                      className={`flex md:flex-row flex-wrap gap-2 ${
                        i % 2 == 0 ? "justify-start" : "justify-end"
                      }`}
                    >
                      {project.properties.Technologies.type == "multi_select" &&
                        project.properties.Technologies.multi_select.map(
                          (tech, i) => (
                            <motion.span
                              key={i}
                              variants={techVariants}
                              className="text-highlight font-body font-medium text-xs bg-background-700 shadow-lg px-2 py-1 rounded-[.250rem] z-10 cursor-default"
                            >
                              {tech.name}
                            </motion.span>
                          )
                        )}
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:contents">
                  <a href={link}>
                    <motion.img
                      className="w-5/6 sm:w-2/3 mx-auto relative sm:top-8 object-cover md:hidden"
                      variants={imageVariants}
                      initial="hidden"
                      viewport={{ once: true, amount: 0.4 }}
                      whileInView="show"
                      src={imageUrl}
                      alt={projectTitle}
                    />
                  </a>
                  <p className="bg-background-700 shadow-lg text-text-300 font-body text-sm font-[500] px-6 py-4 min-h-fit sm:w-4/5 md:min-w-fit xl:max-w-3xl rounded-[.250rem] z-10">
                    {project.properties.Description.type == "rich_text" && (
                      <RichText
                        text={project.properties.Description.rich_text}
                      />
                    )}
                  </p>
                </div>
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
                  style={{ originY: 0 }}
                  className={`absolute w-96 object-cover top-40 lg:top-32 hidden md:block ${
                    i % 2 == 0
                      ? "lg:left-1/4 left-1/3"
                      : "lg:right-1/4 right-1/3"
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
      <div className="bg-background-900 rounded-md justify-center items-center lg:mx-4 flex flex-col py-8 px-8 lg:px-16">
        <h1 className="text-text-300 font-semibold text-2xl">
          But wait, there's more!
        </h1>
        <h3 className="text-text-500 flex flex-row gap-1 text-xl font-semibold pl-2">
          Here's some of the other cool stuff I've worked on.
        </h3>
        <Carousel projects={projects} />
      </div>
      <Button className="w-40 mx-auto" onClick={() => router.push("/projects")}>
        Take a look at the rest of my projects
      </Button>
    </motion.div>
  );
};

export default Projects;
