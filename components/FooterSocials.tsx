import { RiGithubFill, RiTwitterFill, RiDiscordFill, RiLinkedinBoxFill, RiMailLine  } from 'react-icons/ri'
import type { NextPage } from 'next'

const Languages:NextPage = () => {
    return (
        <div className="md:flex mt-12 animate-fade-in-down mx-auto text-5xl md:space-x-4 space-y-4 md:space-y-0 justify-center">
            <div className="space-x-4 flex justify-center">   
                <a href="https://github.com/Neesh774" className="border-2 border-white rounded-full hover:bg-white">
                    <RiGithubFill className=" text-white hover:text-starOrange transition-all ease-in-out duration-300 rounded-full p-2"/>
                </a>
                <a href="https://twitter.com/Neesh774" className="border-2 border-white rounded-full hover:bg-white">
                    <RiTwitterFill className=" text-white hover:text-starOrange transition-all ease-in-out duration-300 rounded-full p-2"/>
                </a>
                <a href="https://discord.gg/b8ugMm7nvc" className="border-2 border-white rounded-full hover:bg-white"> 
                    <RiDiscordFill className=" text-white hover:text-starOrange transition-all ease-in-out duration-300 rounded-full p-2"/>
                </a>
            </div>
            <div className="space-x-4 flex justify-center">    
                <a href="mailto:kanishq0106@gmail.com" className="border-2 border-white rounded-full hover:bg-white">
                    <RiMailLine className=" text-white hover:text-starOrange transition-all ease-in-out duration-300 rounded-full p-2"/>
                </a>
                <a href="https://www.linkedin.com/in/kanishq-kancharla-390928190/" className="border-2 border-white rounded-full hover:bg-white">
                    <RiLinkedinBoxFill className=" text-white hover:text-starOrange transition-all ease-in-out duration-300 rounded-full p-2"/>
                </a>
            </div>
        </div>
    )
}

export default Languages