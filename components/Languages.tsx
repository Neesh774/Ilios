import {
  RiReactjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiNextDotJs,
  SiJava,
  SiJavascript,
  SiPython,
  SiCsharp,
} from "react-icons/si";
import type { NextPage } from "next";

const Languages: NextPage = () => {
  return (
    <div className="md:flex mt-4 animate-fade-in-down mx-auto text-4xl md:space-x-4 space-y-4 md:space-y-0">
      <div className="space-x-4 flex h-12">
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://reactjs.org"
        >
          <RiReactjsFill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.w3schools.com/html/html_intro.asp"
        >
          <RiHtml5Fill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.w3schools.com/Css/css_intro.asp"
        >
          <RiCss3Fill />
        </a>
      </div>
      <div className="space-x-4 flex h-12">
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://flutter.dev"
        >
          <RiFlutterFill />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://nextjs.org"
        >
          <SiNextDotJs />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.java.com/en/"
        >
          <SiJava />
        </a>
      </div>
      <div className="space-x-4 flex h-12">
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.w3schools.com/js/js_intro.asp"
        >
          <SiJavascript />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.python.org"
        >
          <SiPython />
        </a>
        <a
          className="sm:hover:text-5xl transition-all ease-in-out duration-300"
          href="https://www.w3schools.com/cs/cs_intro.php"
        >
          <SiCsharp />
        </a>
      </div>
    </div>
  );
};

export default Languages;
