/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import MetaTags from '../components/MetaTags'
import {Typewriter} from 'typewriting-react'
const Home: NextPage = () => {
  const avatarURL = "https://media.discordapp.net/attachments/834443815205077032/878728732234358784/image0.jpg?width=536&height=536";
  return (
    <>
      <MetaTags/> 
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-20">
        <div className="sm:text-center">
          <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi, I'm</span>{' '}
            <span className="block text-starOrange xl:inline">Kanishq</span>
          </div>
          <div className="mt-3 text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="xl:inline font-typewriter">I'm a&nbsp;</span>
            <span className="font-typewriter inline sm:text-2xl md:text-3xl">
              <Typewriter words={['developer', 'software engineer', 'pianist', 'tennis player', 'student']}/>
            </span>
          </div>
        </div>
        <div className="mt-32 mx-auto">
          <img
            className="w-60 h-60 rounded-full mx-auto sm:animate-bounce"
            src={avatarURL}
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Home
