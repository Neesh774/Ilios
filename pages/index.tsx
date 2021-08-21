/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import MetaTags from '../components/MetaTags'
import {Typewriter} from 'typewriting-react'
const Home: NextPage = () => {
  return (
    <>
      <MetaTags/> 
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-8 sm:px-6 md:mt-8 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi, I'm</span>{' '}
            <span className="block text-starOrange xl:inline">Kanishq</span>
          </h1>
          <h2 className="mt-3 text-4xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-3xl">
            <span className="block xl:inline font-typewriter">I'm a&nbsp;</span>
            <span className="font-typewriter inline sm:text-2xl md:text-3xl">
              <Typewriter words={['developer', 'software engineer', 'pianist', 'tennis player', 'student']}/>
            </span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home
