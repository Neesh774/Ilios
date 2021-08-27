/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Languages from '../components/Languages'
import Socials from '../components/Socials'
import Projects from '../components/Projects'
import {Typewriter} from 'typewriting-react'
import {getDatabase, queryDatabaseTime} from '../lib/notion'

export default function Home({posts}){
  const avatarURL = "https://media.discordapp.net/attachments/834443815205077032/878728732234358784/image0.jpg?width=536&height=536";
  return (
    <>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-20">
        <div className="sm:text-center">
          <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi, I'm</span>{' '}
            <span className="block text-starOrange xl:inline">Kanishq</span>
          </div>
          <div className="mt-3 text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="xl:inline font-typewriter">I'm a&nbsp;</span>
            <span className="font-typewriter inline sm:text-2xl md:text-3xl">
              <Typewriter words={['developer', 'pianist', 'tennis player', 'student']}/>
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
      <div id="about" className="bg-lightOrange text-center">
        <div className="md:px-32 md:p-12 space-y-4 mx-auto py-6">
          <div className= "text-2xl font-bold tracking-tight px-4">
            Nice to meet you!
          </div>
          <div className="px-4">
            Ever since I was a kid, I've loved programming. Now, I've been coding for over 6 years, and I'm just a junior in high school! I love solving difficult problems and learning new languages.
          </div>
          <div className=" flex">
            <Languages />
          </div>
          <div className="flex">
            <Socials />
          </div>
        </div>
      </div>
      <div className="text-center" id="projects">
        <div className="md-px-32 md:p-12 space-y-4 mx-auto pt-6">
          <div className="text-3xl font-bold px-4">
            Recent Work
          </div>
          <div className="text-lg px-4">
            I've worked on quite a few projects in the past 6 years. Here are the latest!
          </div>
          <div className="mx-10">
            <Projects posts={[posts]}/>
          </div>
        </div>
      </div>
      <div className="mt-5 bg-lightOrange relative">
        <div className="bg-gray-800 text-center mx-16 rounded-xl text-white absolute bottom-1/2 drop-shadow-2xl">
          <div className="lg:px-10 px-5 py-10 lg:grid lg:grid-cols-3 lg:space-x-15 space-y-8 lg:space-y-0">
            <div className="text-starOrange font-extrabold text-2xl">Want to work together?</div>
            <div className="text-lg">Let's have a chat. Contact me on Discord or Linkedin.</div>
              <a href="https://discord.gg/4Hd8MxuJkv" className="border-2 rounded-full px-4 py-2 lg:mx-auto border-starOrange hover:bg-starOrange transition-all ease-in-out duration-300 text-center">
                <div className="px-4 py-1">
                  Let's go
                </div>
              </a>
          </div>
        </div>
        <div className="py-20 px-40">
          <div className="text-center text-white text-xl">

          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const database = await queryDatabaseTime();
  return {
    props: {
      posts: database,
    },
        // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
