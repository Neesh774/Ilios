import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Button from "../Button";
import IconButton from "../IconButton";
import RichText from "../RichText";

const Other = ({ projects }: { projects: PageObjectResponse[] }) => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const projectVariants = {
    hidden: {
      opacity: 0,
      translateY: 30,
    },
    show: (custom: number) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.h1 className="text-3xl text-text-300 font-bold">
        But wait, there's more!
      </motion.h1>
      <motion.h3 className="text-xl text-text-500 font-semibold">
        Here are some of the other cool projects I've worked on.
      </motion.h3>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {projects.map((project, i) => {
          if (!showMore && i > 7) return <></>;
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
              variants={projectVariants}
              key={i}
              custom={i}
              animate="show"
              initial="hidden"
              className="bg-background-700 rounded-md shadow-lg p-4 h-96 flex flex-col gap-2 justify-between"
            >
              <div className="flex flex-col gap-2">
                <a href={link}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 30,
                    }}
                    src={imageUrl}
                    className="rounded-lg object-cover h-36 w-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl text-text-300 font-bold">
                    {projectTitle}
                  </h3>
                  {project.properties.Description.type == "rich_text" && (
                    <p className="text-text-500 text-sm">
                      <RichText
                        text={project.properties.Description.rich_text}
                      />
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap flex-row gap-3">
                  {project.properties.Technologies.type == "multi_select" &&
                    project.properties.Technologies.multi_select.map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="text-highlight font-body font-medium text-xs whitespace-nowrap"
                        >
                          {tech.name}
                        </span>
                      )
                    )}
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
            </motion.div>
          );
        })}
      </div>
      <Button onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default Other;
