import * as React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <main className="p-12 md:p-20 lg:p-40 xl:p-60 bg-background-800">
        <Hero />
      </main>
    </>
  );
};

export default IndexPage;
