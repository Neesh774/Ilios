import { RiPhoneFill, RiMailFill,  RiLinkedinFill } from 'react-icons/ri'
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
                <div className="ml-10">
                    <div>
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
                    <div>
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Education
                        </div>
                        <div className="text-lg space-y-2">
                            <div className="space-x-4 justify-end text-right">
                                <div className="uppercase">Class of 2023</div>
                                <div className="italic">Pomperaug High School</div>
                                <div className="italic">Southbury, CT</div>
                                <div>
                                    <div className="uppercase font-bold">Relevant Coursework</div>
                                    <div className="italic">AP Computer Science A</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Certification
                        </div>
                        <div className="text-lg space-y-2">
                            <div className="space-x-4 justify-end text-right">
                                <a className="hover:text-starOrange hover:underline" href="https://cyberagent.newhaven.edu">GenCyber Agent Academy of 2021</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold tracking-widest text-center">
                            Skills
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}