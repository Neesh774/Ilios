import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetServerSideProps } from "next";
import { useRef } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MetaTags from "../components/MetaTags";
import Nav from "../components/Nav";
import Projects from "../components/Projects/Projects";
import { notionClient } from "../utils/client";

const IndexPage = ({
  featured,
  projects,
}: {
  featured: PageObjectResponse[];
  projects: PageObjectResponse[];
}) => {
  const bodyArea = useRef(null);
  return (
    <>
      <MetaTags title="Kanishq Kancharla" description="" />
      <main className="bg-background-800">
        <Nav />
        <div
          className="pb-12 pt-20 px-8 md:pb-12 md:pt-36 md:px-24 lg:pb-16 lg:pt-48 lg:px-36 xl:py-72 xl:px-60 flex flex-col gap-40 overflow-hidden"
          ref={bodyArea}
        >
          <Hero />
          <About bodyArea={bodyArea} />
          <Projects featured={featured} projects={projects} />
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { results: featured } = await notionClient.databases.query({
    database_id: process.env.NOTION_DB_ID as string,
    filter: {
      property: "Featured",
      checkbox: {
        equals: true,
      },
    },
  });
  const { results: projects } = await notionClient.databases.query({
    database_id: process.env.NOTION_DB_ID as string,
    filter: {
      and: [
        {
          property: "Featured",
          checkbox: {
            equals: false,
          },
        },
        {
          property: "Status",
          select: {
            equals: "Finished",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  return {
    props: {
      featured,
      projects,
    },
  };
};
