import { useRef } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MetaTags from "../components/MetaTags";
import Nav from "../components/Nav";

const IndexPage = () => {
  const bodyArea = useRef(null);
  return (
    <>
      <MetaTags title="Kanishq Kancharla" description="" />
      <main className="bg-background-800  ">
        <Nav />
        <div
          className="py-12 px-6 md:py-20 md:px-12 lg:pb-16 lg:pt-48 lg:px-36 xl:py-72 xl:px-60 flex flex-col gap-80 overflow-hidden"
          ref={bodyArea}
        >
          <Hero />
          <About bodyArea={bodyArea} />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
