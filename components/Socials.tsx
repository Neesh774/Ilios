import {
  RiGithubFill,
  RiTwitterFill,
  RiDiscordFill,
  RiLinkedinBoxFill,
  RiStackOverflowFill,
  RiMailLine,
} from "react-icons/ri";
import type { NextPage } from "next";

const Socials: NextPage = () => {
  return (
    <div className="md:flex animate-fade-in-down mx-auto text-4xl md:space-x-4 space-y-4 md:space-y-0">
      <div className="space-x-4 flex">
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://github.com/Neesh774"
        >
          <RiGithubFill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://twitter.com/Neesh774"
        >
          <RiTwitterFill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://discord.gg/b8ugMm7nvc"
        >
          <RiDiscordFill />
        </a>
      </div>
      <div className="space-x-4 flex">
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="mailto:kanishq0106@gmail.com"
        >
          <RiMailLine />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.linkedin.com/in/kanishq-kancharla-390928190/"
        >
          <RiLinkedinBoxFill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://stackoverflow.com/users/8162892/neesh?tab=profile"
        >
          <RiStackOverflowFill />
        </a>
      </div>
    </div>
  );
};

export default Socials;
