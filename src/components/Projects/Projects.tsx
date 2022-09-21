import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { motion } from "framer-motion";
import useMediaQuery from "../../utils/useMediaQuery";
import IconButton from "../IconButton";
import Link from "../Link";
import RichText from "../RichText";
import { useRouter } from "next/router";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import Featured from "./Featured";
import Other from "./Other";

const Projects = ({
  featured,
  projects,
}: {
  featured: PageObjectResponse[];
  projects: PageObjectResponse[];
}) => {
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

  return (
    <motion.div
      initial="hidden"
      variants={sectionVariants}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4 px-1 w-full lg:w-5/6 md:px-0 md:mx-auto"
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
      <Featured featured={featured} />
      <Other projects={projects} />
    </motion.div>
  );
};

export default Projects;
