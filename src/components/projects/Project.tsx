import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import Image from "../Image";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Icon from "../Icon";
import IconButton from "../IconButton";
import RichText from "../notion/RichText";

const Project = forwardRef(
  ({ project }: { project: PageObjectResponse }, ref: any) => {
    const router = useRouter();

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
      return image.type == "external" ? image.external.url : image.file.url;
    };
    const imageUrl =
      project.properties.Photo.type == "files"
        ? parseImage(project.properties.Photo.files[0])
        : "";
    return (
      <div
        className="flex flex-col lg:flex-row bg-background-700 rounded-lg absolute top-2 left-0 right-0 max-w-full select-none"
        ref={ref}
      >
        <div className="relative lg:w-3/5 h-40 lg:h-64 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg pointer-events-none">
          <Image
            layout="fill"
            src={imageUrl}
            alt={projectTitle}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col lg:w-2/5 p-4 gap-2 justify-between h-56 lg:h-auto">
          <div>
            <h2 className="font-bold text-xl text-secondary-100">
              <a href={link}>{projectTitle}</a>
            </h2>
            <div className="text-text-400 text-sm">
              {project.properties.Description.type == "rich_text" && (
                <RichText text={project.properties.Description.rich_text} />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-wrap gap-3 justify-start">
              {project.properties.Technologies.type == "multi_select" &&
                project.properties.Technologies.multi_select.map((tech, i) => (
                  <span
                    key={i}
                    className="text-text-500 font-mono font-medium text-xs cursor-default"
                  >
                    {tech.name}
                  </span>
                ))}
            </div>
            <div className="flex flex-row gap-3">
              {githubLink && (
                <Icon>
                  <FiGithub
                    className="text-text-500 hover:text-highlight"
                    onClick={() => router.push(githubLink)}
                  />
                </Icon>
              )}
              {projectLink && (
                <Icon>
                  <FiExternalLink
                    className="text-text-500 hover:text-highlight"
                    onClick={() => router.push(projectLink)}
                  />
                </Icon>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Project;
