import { RiPhoneFill, RiMailFill,  RiLinkedinFill, RiExternalLinkLine, RiFileDownloadLine } from 'react-icons/ri'
import Link from 'next/link'
import Skills from '../components/Skills'
export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Blog() {
    return (
        <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
            <div className="p-4">
                <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 text-5xl pb-2">
                    The Resumé
                </div>
                <div className="text-xl">
                    Here&apos;s everything notable that I&apos;ve done so far in my life. It&apos;s not much yet, but hopefully it&apos;ll grow as I learn.
                </div>
            </div>
            <div className="md:flex pt-10 justify-center mb-10 md:px-32 space-y-10 md:space-y-0">
                <div className="md:ml-10 md:mr-10 space-y-8">
                    <div className="space-y-4">
                        <div className="text-2xl font-bold tracking-widest mb-4 text-center">
                            Contact
                        </div>
                        <div className="text-lg space-y-2">
                            <div className="flex space-x-4 justify-end text-right">
                                <div>
                                    203-608-0400
                                </div>
                                <RiPhoneFill className="h-7 w-7"/>
                            </div>
                            <div className="flex space-x-4 justify-end text-right">
                                <div>
                                    Kanishq0106@gmail.com
                                </div>
                                <RiMailFill className="h-7 w-7"/>
                            </div>
                            <div className="flex space-x-4 justify-end text-right">
                                <div>
                                    <a className="hover:text-starOrange underline" href="https://www.linkedin.com/in/kanishqk/">
                                    Kanishq Kancharla
                                    </a>
                                </div>
                                <RiLinkedinFill className="h-7 w-7"/>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Education
                        </div>
                        <div className="text-lg">
                            <div className="space-x-4 justify-end text-right space-y-2">
                                <div className="uppercase">Class of 2023</div>
                                <div className="italic">Pomperaug High School</div>
                                <div className="italic">Southbury, CT</div>
                                <div className="space-y-2">
                                    <div className="uppercase font-bold">Relevant Coursework</div>
                                    <div className="italic">AP Computer Science A</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Notable Experience
                        </div>
                        <div className="text-lg space-y-2">
                            <div className="flex justify-end text-right">
                                <a className="flex space-x-4 hover:text-starOrange underline" href="https://cyberagent.newhaven.edu">
                                    <div className="">GenCyber Agent Academy of 2021</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange underline space-x-4" href="https://drive.google.com/file/d/1dmKuJKRBELlbHfDqQTDDFL7jngQHlzYw/view?usp=sharing">
                                    <div className="">Coursera Certifications</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange underline space-x-4" href="https://www.joinsaturn.com">
                                    <div className="">Saturn Ambassador</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange underline space-x-4" href="https://www.istartvalley.org">
                                    <div className="">iStart Valley Internship</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange underline space-x-4" href="https://www.kumon.com">
                                    <div className="">Kumon Math &amp; Reading</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Skills
                        </div>
                        <Skills text="Collaboration" value={6} max={7} type="social"/>
                        <Skills text="Piano" value={4} max={7} type="social"/>
                        <Skills text="Public Speaking" value={6} max={7} type="social"/>
                        <Skills text="ReactJS" value={5} max={7} type="technical"/>
                        <Skills text="Java" value={6} max={7} type="technical"/>
                        <Skills text="REST API&apos;s" value={4} max={7} type="technical"/>
                    </div>
                </div>
                <div className="mr-10 ml-10 space-y-8">
                    <div className="space-y-3">
                        <div className="text-2xl font-bold tracking-widest text-center">About</div>
                        <div className="text-lg">Hey! My name is Kanishq and I&apos;m a junior in high school, and I want to build a career in computer science. I&apos;m a passionate person, and I have the drive to reach my own goals.
                             I&apos;m ambitious and I have a strong work ethic to complete a project that I&apos;ve started.</div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-center flex">
                            <div className="text-2xl font-bold px-10 py-2 tracking-widest bg-lighterOrange mx-auto">
                                Volunteer Experience
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase font-bold text-lg">
                                Robotics Assistant
                            </div>
                            <div className="italic text-lg">
                                Memorial Middle School / October 2019 - June 2021
                            </div>
                            <div className="ml-3 text-lg">
                                <div>&bull; Helped middle schoolers design and program a robot for the VEX IQ Robotics Competition of 2020</div>
                                <div>&bull; Helped middle schoolers research ideas to pitch to the judges.</div>
                                <div>&bull; Designed logos and team videos</div>
                            </div>
                            <div className="uppercase font-bold text-lg">
                                Kumon Grader
                            </div>
                            <div className="italic text-lg">
                                Kumon / July 2018 - August 2018
                            </div>
                            <div className="ml-3 text-lg">
                                &bull; Graded worksheets in the Kumon Math &amp; Reading program
                            </div>
                            <div className="uppercase font-bold text-lg">
                                Volunteer Teacher
                            </div>
                            <div className="italic text-lg">
                                Chinmaya Mission / September 2018 - June 2021
                            </div>
                            <div className="ml-3 text-lg">
                                <div>&bull; Taught science to students in grades 1-5 for 6 months</div>
                                <div>&bull; Taught Python to students in grades 6-8 for 3 months</div>
                                <div>&bull; Taught Arduino to students in grades 6-8 for 6 months, twice</div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="text-center flex">
                            <div className="text-2xl font-bold px-10 py-2 tracking-widest bg-lighterOrange mx-auto">
                                Extracurriculars
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase font-bold text-lg">Leadership Roles</div>
                            <div className="ml-6 text-lg">
                                <div>&bull; Table Tennis - President - 4 years</div>
                                <div>&bull; Robotics - Programming Captain - 5 years</div>
                                <div>&bull; Debate - Helper - 2 years</div>
                            </div>
                            <div className="text-lg">
                                <div>&bull; Science Bowl - Member - 5 years</div>
                                <div>&bull; Science Olympiad - Member - 5 years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 flex justify-center space-x-4">
                <a href='/IliosResume.pdf' download="ResumeKanishq" className="flex border-2 border-starOrange text-starOrange font-bold rounded-md p-3 hover:bg-starOrange hover:text-white transition-all ease-in-out duration-300">
                    <RiFileDownloadLine className="h-6 w-6 mr-2"/>
                    Download Resumé
                </a>
                <Link href="/">
                    <a className="bg-starOrange text-white font-bold rounded-md p-3 hover:bg-yellow-500 transition-all ease-in-out duration-100">←Back to Home</a>
                </Link>
            </div>
        </div>
    )
}