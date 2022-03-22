/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Languages from "../components/Languages";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import FooterSocials from "../components/FooterSocials";
import { Typewriter } from "typewriting-react";
import { queryDatabaseTime } from "../lib/notion";
import { SiNextDotJs, SiTailwindcss } from "react-icons/si";
import MetaTags from "../components/MetaTags";
import { useEffect, useState } from "react";

export default function Home({ posts, avatarURL }) {
  const [user, setUser] = useState(null);

  return (
    <>
      <MetaTags />
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-20">
        <div className="sm:text-center">
          <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi, I'm</span>{" "}
            <span className="block text-starOrange xl:inline">Kanishq</span>
          </div>
          <div className="mt-3 tracking-tight font-bold text-gray-900 text-2xl sm:text-3xl">
            <span className="xl:inline font-typewriter">I'm a&nbsp;</span>
            <span className="font-typewriter inline">
              <Typewriter
                words={["developer", "pianist", "tennis player", "student"]}
              />
            </span>
          </div>
        </div>
        <div className="mt-16 mb-16 sm:mt-32 mx-auto sm:animate-bounce">
          <img
            className="w-60 h-60 rounded-full mx-auto sm:hover:animate-spin"
            src={avatarURL}
            alt=""
          />
        </div>
      </div>
      <div id="about" className="bg-lightOrange text-center lg:h-80">
        <div className="md:px-32 md:p-12 space-y-4 mx-auto py-6">
          <div className="text-2xl font-bold tracking-tight px-4">
            Nice to meet you!
          </div>
          <div className="px-4">
            Ever since I was a kid, I've loved programming. Now, I've been
            coding for over 6 years, and I'm just a junior in high school! I
            love solving difficult problems and learning new languages.
          </div>
          <div className="flex">
            <Languages />
          </div>
          <div className="flex">
            <Socials />
          </div>
        </div>
      </div>
      <div className="text-center" id="projects">
        <div className="md-px-32 md:p-12 space-y-4 mx-auto pt-6">
          <div className="text-3xl font-bold px-4">Recent Work</div>
          <div className="text-lg px-4">
            I've worked on quite a few projects in the past 6 years. Here are
            the latest!
          </div>
          <div className="mx-10">
            <Projects posts={[posts]} />
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-24 bg-lightOrange relative">
        <div className="bg-gray-800 text-center lg:mx-16 rounded-xl text-white absolute -bottom-1/4 md:bottom-1/2 drop-shadow-2xl m-auto left-4 right-4 lg:left-0 lg:right-0">
          <div className="lg:px-10 lg:py-10 px-5 py-4 md:grid md:grid-cols-3 md:space-x-15 md:items-center space-y-8 md:space-y-0">
            <div className="text-starOrange font-extrabold md:text-2xl text-xl">
              Want to work together?
            </div>
            <div className="md:text-lg">
              Let's have a chat. Contact me on Discord or Linkedin.
            </div>
            <a
              href="https://discord.com/users/297504183282565130"
              className="flex justify-center border-2 rounded-full px-4 py-2 md:mx-auto border-starOrange hover:bg-starOrange transition-all ease-in-out duration-300 text-center h-14"
            >
              <div className="lg:px-4 py-1 px-2">Let's go</div>
            </a>
          </div>
        </div>
        <div className="pb-32 lg:pb-10 lg:py-14 px-40"></div>
      </div>
      <div className="bg-lightOrange pt-24 md:pt-10 lg:pt-4">
        <div className="pb-20 px-2 md:px-40 justify-center">
          <div className="text-center font-extrabold text-2xl lg:text-3xl">
            <div className="mb-4">
              <img
                src="/favicon.svg"
                className="w-20 h-20 mx-auto md:hover:animate-spin"
                alt="star"
              />
              <div className="text-white">ツCheesyNeeshツ#8152</div>
            </div>
            <FooterSocials />
            <div className="font-normal text-white text-lg mb-4 mt-8">
              Handcrafted by me &copy;
            </div>
            <div className="font-light text-white text-sm flex align-middle justify-center">
              Built with &nbsp;
              <a href="https://nextjs.org">
                <SiNextDotJs className="w-5 h-5" />
              </a>
              &nbsp;and&nbsp;
              <a href="https://tailwindcss.com">
                <SiTailwindcss className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const database = await queryDatabaseTime();
  let avatarURL =
    "https://media.discordapp.net/attachments/834443815205077032/878728732234358784/image0.jpg?width=512&height=512";
  fetch("https://api.lanyard.rest/v1/users/297504183282565130").then((res) => {
    res.json().then((data) => {
      avatarURL =
        "https://cdn.discordapp.com/avatars/" +
        data.data.discord_user.id +
        "/" +
        data.data.discord_user.avatar +
        "?size=512";
    });
  });
  return {
    props: {
      posts: database,
      avatarURL: avatarURL,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
