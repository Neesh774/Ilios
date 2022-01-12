import {
  RiPhoneFill,
  RiMailFill,
  RiLinkedinFill,
  RiExternalLinkLine,
  RiFileDownloadLine,
} from "react-icons/ri";
import Link from "next/link";
import Skills from "../components/Skills";
import MetaTags from "../components/MetaTags";
export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const projects = [
  {
    name: "Monad",
    description: "Share and discover code snippets",
    link: "https://monad.ilioslabs.dev",
    tags: ["React", "Next.js", "TypeScript", "Supabase", "SEO"],
  },
  {
    name: "Bubble",
    description: "A minimalistic text editor",
    link: "https://bubble.ilioslabs.dev",
    tags: ["React", "Next.js", "TypeScript", "WYSIWYG"],
  },
  {
    name: "Ilios",
    description: "My portfolio website",
    link: "https://neesh.ilioslabs.dev",
    tags: ["React", "Next.js", "TypeScript", "SEO", "TailwindCSS"],
  },
  {
    name: "Codetta",
    description: "A code compiling Discord Bot",
    link: "https://github.com/Neesh774/Codetta",
    tags: ["Discord.js", "Node", "TypeScript", "API"]
  },
  {
    name: "Toast",
    description: "A text editor",
    link: "",
    tags: ["Discord.js", "Node", "TypeScript", "Canvas"]
  }
];

export default function Blog() {
  return (
    <>
      <MetaTags title="Neesh's Resumé" description="View Kanishq's Resume" />
      <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
        <div className="p-4">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 text-5xl pb-2">
            The Resumé
          </div>
          <div className="text-xl">
            Here&apos;s everything notable that I&apos;ve done so far in my
            life. It&apos;s not much yet, but hopefully it&apos;ll grow as I
            learn.
          </div>
        </div>
        <div className="md:flex pt-10 justify-center mb-10 md:px-4 space-y-10 md:space-y-0">
          <div className="space-y-8 md:ml-4">
            <div className="space-y-4">
              <div className="text-2xl font-bold tracking-widest mb-4 text-center">
                Contact
              </div>
              <div className="text-lg space-y-2">
                <div className="flex space-x-4 sm:justify-end sm:text-right justify-center text-center">
                  <div>Kanishq0106@gmail.com</div>
                  <RiMailFill className="h-7 w-7" />
                </div>
                <div className="flex space-x-4 sm:justify-end sm:text-right justify-center text-center">
                  <div>
                    <a
                      className="hover:text-starOrange underline"
                      href="https://www.linkedin.com/in/kanishqk/"
                    >
                      Kanishq Kancharla
                    </a>
                  </div>
                  <RiLinkedinFill className="h-7 w-7" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold tracking-widest text-center">
                Education
              </div>
              <div className="text-lg">
                <div className="space-x-4 sm:justify-end sm:text-right justify-center text-center space-y-2">
                  <div className="uppercase">Class of 2023</div>
                  <div className="italic">Pomperaug High School</div>
                  <div className="italic">Southbury, CT</div>
                  <div className="space-y-2">
                    <div className="uppercase font-bold text-gray-800">
                      Relevant Coursework
                    </div>
                    <div className="italic">AP Computer Science A</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold tracking-widest text-center">
                Notable Experience
              </div>
              <div className="text-lg space-y-2 ">
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex space-x-4 hover:text-starOrange underline"
                    href="https://cyberagent.newhaven.edu"
                  >
                    <div className="">GenCyber Agent Academy of 2021</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex hover:text-starOrange underline space-x-4"
                    href="https://drive.google.com/file/d/1dmKuJKRBELlbHfDqQTDDFL7jngQHlzYw/view?usp=sharing"
                  >
                    <div className="">Coursera Certifications</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex hover:text-starOrange underline space-x-4"
                    href="https://www.joinsaturn.com"
                  >
                    <div className="">Saturn Ambassador</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex hover:text-starOrange underline space-x-4"
                    href="https://www.istartvalley.org"
                  >
                    <div className="">iStart Valley Internship</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex hover:text-starOrange underline space-x-4"
                    href="https://www.kumon.com"
                  >
                    <div className="">Kumon Math &amp; Reading</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
                <div className="flex sm:justify-end sm:text-right justify-center text-center">
                  <a
                    className="flex hover:text-starOrange underline space-x-4"
                    href="https://csmta.org/students/music-achievement-program-map/"
                  >
                    <div className="">Music Achievement Program</div>
                    <RiExternalLinkLine className="h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold tracking-widest text-center">
                Skills
              </div>
              <Skills text="Collaboration" value={6} max={7} type="social" />
              <Skills text="Piano" value={4} max={7} type="social" />
              <Skills text="Public Speaking" value={6} max={7} type="social" />
              <Skills text="ReactJS" value={5} max={7} type="technical" />
              <Skills text="Java" value={6} max={7} type="technical" />
              <Skills text="REST API's" value={4} max={7} type="technical" />
            </div>
          </div>
          <div className="mx-4 space-y-8">
            <div className="space-y-3">
              <div className="text-2xl font-bold tracking-widest text-center">
                About
              </div>
              <div className="text-lg">
                Hey! My name is Kanishq and I&apos;m a junior in high school,
                and I want to build a career in computer science. I&apos;m a
                passionate person, and I have the drive to reach my own goals.
                I&apos;m ambitious and I have a strong work ethic to finish what
                I start.
              </div>
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
                  <div>
                    &bull; Helped middle schoolers design and program a robot
                    for the VEX IQ Robotics Competition of 2020
                  </div>
                  <div>
                    &bull; Helped middle schoolers research ideas to pitch to
                    the judges.
                  </div>
                  <div>&bull; Designed logos and team videos</div>
                </div>
                <div className="uppercase font-bold text-lg">Kumon Grader</div>
                <div className="italic text-lg">
                  Kumon / July 2018 - August 2018
                </div>
                <div className="ml-3 text-lg">
                  &bull; Graded worksheets in the Kumon Math &amp; Reading
                  program
                </div>
                <div className="uppercase font-bold text-lg">
                  Volunteer Teacher
                </div>
                <div className="italic text-lg">
                  Chinmaya Mission / September 2018 - June 2021
                </div>
                <div className="ml-3 text-lg">
                  <div>
                    &bull; Taught science to students in grades 1-5 for 6 months
                  </div>
                  <div>
                    &bull; Taught Python to students in grades 6-8 for 3 months
                  </div>
                  <div>
                    &bull; Taught Arduino to students in grades 6-8 for 6
                    months, twice
                  </div>
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
                <div className="uppercase font-bold text-lg">
                  Leadership Roles
                </div>
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
            <div className="space-y-3">
              <div className="text-center flex">
                <div className="text-2xl font-bold px-10 py-2 tracking-widest bg-lighterOrange mx-auto">
                  Developing
                </div>
              </div>
              <div className="space-y-3">
                <div className="uppercase font-bold text-lg">
                  Personal Projects
                </div>
                {projects.map((project) => (
                  <div
                    className="ml-6 text-lg flex justify-between"
                    key={project.name}
                  >
                    <a
                      href={project.link}
                      className="hover:text-starOrange underline"
                    >
                      &bull; {project.name} - {project.description}
                    </a>
                    <div className="flex flex-row gap-2">
                      {project.tags.map((tag) => (
                        <div className="p-1 rounded-sm bg-gray-300 text-gray-800 font-semibold text-sm" key={tag}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 flex justify-center space-x-4">
          <a
            href="/IliosResume.pdf"
            download="ResumeKanishq"
            className="flex border-2 border-starOrange text-starOrange font-bold rounded-md p-3 hover:bg-starOrange hover:text-white transition-all ease-in-out duration-300"
          >
            <RiFileDownloadLine className="h-6 w-6 mr-2" />
            Download Resumé
          </a>
          <Link href="/">
            <a className="bg-starOrange text-white font-bold rounded-md p-3 hover:bg-yellow-500 transition-all ease-in-out duration-100">
              ←Back to Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
