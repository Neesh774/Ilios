import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetServerSideProps } from "next";
import { useRef } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MetaTags from "../components/MetaTags";
import Nav from "../components/Nav";
import Projects from "../components/projects/Projects";
import { notionClient } from "../utils/client";
import Contact from "../components/Contact";
import { useLanyard } from "use-lanyard";
import Footer from "../components/Footer";

const IndexPage = ({
  featured,
  projects,
}: {
  featured: PageObjectResponse[];
  projects: PageObjectResponse[];
}) => {
  const bodyArea = useRef(null);
  const { data: activity } = useLanyard(
    process.env.NEXT_PUBLIC_DISCORD_ID as string
  );

  return (
    <>
      <MetaTags
        title="Kanishq Kancharla"
        description="Welcome to Ilios Labs."
      />
      <div
        className="pb-12 pt-20 px-8 border-b-[1px] border-text-500 mb-96 md:mb-72 md:pb-12 md:pt-36 md:px-24 lg:pb-16 lg:pt-48 lg:px-36 xl:py-72 xl:px-60 2xl:px-[20%] flex flex-col gap-40 overflow-hidden"
        ref={bodyArea}
      >
        <Hero />
        <About activity={activity} bodyArea={bodyArea} />
        <Projects featured={featured} projects={projects} />
        <Contact activity={activity} />
      </div>
    </>
  );
};

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { results: featured } = await notionClient.databases.query({
    database_id: process.env.NOTION_PROJECTS_ID as string,
    filter: {
      property: "Featured",
      checkbox: {
        equals: true,
      },
    },
  });
  const { results: projects } = await notionClient.databases.query({
    database_id: process.env.NOTION_PROJECTS_ID as string,
    page_size: 10,
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
  });
  return {
    props: {
      featured,
      projects,
    },
  };
};
