import { RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiFlutterFill,   } from 'react-icons/ri'
import { SiNextDotJs, SiJava, SiJavascript, SiPython, SiCsharp } from 'react-icons/si'
import type { NextPage } from 'next'

const Languages:NextPage = () => {
    return (
        <div className="md:flex mt-4 animate-fade-in-down mx-auto text-4xl md:space-x-4 space-y-4 md:space-y-0 ">
            <div className="space-x-4 flex">    
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <RiReactjsFill/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <RiHtml5Fill/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <RiCss3Fill/>
                </div>
            </div>
            <div className="space-x-4 flex">
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <RiFlutterFill/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <SiNextDotJs/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <SiJava/>
                </div>
            </div>
            <div className="space-x-4 flex">
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <SiJavascript/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <SiPython/>
                </div>
                <div className="hover:text-5xl transition-all ease-in-out duration-300">
                    <SiCsharp/>
                </div>
            </div>
            
        </div>
    )
}

export default Languages