import { RiPhoneFill, RiMailFill,  RiLinkedinFill, RiExternalLinkLine } from 'react-icons/ri'
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
            <div className="flex pt-10 justify-center">
                <div className="ml-10 space-y-8">
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
                                <a className="block hover:text-starOrange hover:underline" href="https://www.linkedin.com/in/kanishqk/">
                                https://www.linkedin.com/in/kanishqk/
                                </a>
                                <RiLinkedinFill className="h-7 w-7 my-auto"/>
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
                                <a className="flex space-x-4 hover:text-starOrange hover:underline" href="https://cyberagent.newhaven.edu">
                                    <div className="">GenCyber Agent Academy of 2021</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange hover:underline space-x-4" href="https://drive.google.com/file/d/1dmKuJKRBELlbHfDqQTDDFL7jngQHlzYw/view?usp=sharing">
                                    <div className="">Coursera Certifications</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange hover:underline space-x-4" href="https://www.joinsaturn.com">
                                    <div className="">Saturn Ambassador</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange hover:underline space-x-4" href="https://www.istartvalley.org">
                                    <div className="">iStart Valley Internship</div>
                                    <RiExternalLinkLine className="h-7 w-7"/>
                                </a>
                            </div>
                            <div className="flex justify-end text-right">
                                <a className="flex hover:text-starOrange hover:underline space-x-4" href="https://www.kumon.com">
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
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}