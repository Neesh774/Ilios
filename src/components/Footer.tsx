import { useRouter } from "next/router";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import Button from "./Button";
import IconButton from "./IconButton";

const Footer = () => {
  const router = useRouter();
  return (
    <footer className="flex flex-row fixed bottom-0 left-0 right-0 -z-10 h-64 bg-background-900">
      <div className="md:w-3/5 mx-auto my-10">
        <h3 className="text-3xl text-text-200 font-semibold">
          Kanishq Kancharla
        </h3>
        <p className="text-text-500 flex flex-row items-center">
          Made with
          <BsFillSuitHeartFill className="inline-block text-secondary-200 mx-2 w-3 h-3" />
        </p>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row mt-4 justify-between">
          <div className="flex flex-row gap-2">
            <IconButton
              onClick={() => router.push("https://github.com/Neesh774")}
            >
              <FiGithub />
            </IconButton>
            <IconButton
              onClick={() =>
                router.push("https://www.linkedin.com/in/kanishqk/")
              }
            >
              <FiLinkedin />
            </IconButton>
            <IconButton
              onClick={() => router.push("https://twitter.com/Neesh774")}
            >
              <FiTwitter />
            </IconButton>
            <IconButton
              onClick={() => router.push("mailto:Kanishq0106@gmail.com")}
            >
              <FiMail />
            </IconButton>
          </div>
          {/* <Button>Resume</Button> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
