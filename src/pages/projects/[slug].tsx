import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "../../components/notion/Image";
import MetaTags from "../../components/MetaTags";
import Block from "../../components/notion/Block";
import { notionClient } from "../../utils/client";
import { notionColor } from "../../utils/color";
import formatTime, { timeRange } from "../../utils/formatTime";
import { Blog, Project } from "../../utils/types";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import RichText from "../../components/notion/RichText";
import IconButton from "../../components/IconButton";
import { useRouter } from "next/router";

export default function BlogPage({
  page,
  blocks,
}: {
  page: Project;
  blocks: BlockObjectResponse[];
}) {
  const router = useRouter();
  return (
    <>
      <MetaTags
        title={`${page.properties.Name.title[0].plain_text} | Kanishq Kancharla`}
        description={page.properties.Description.rich_text[0].plain_text}
      />
      <div className="pb-4 pt-6 border-b-[1px] border-text-500 mb-96 md:mb-72 md:pt-8 lg:pb-6 lg:pt-28 xl:py-36 xl:pb-16 overflow-hidden min-h-[100vh]">
        <div className="w-4/5 md:w-2/5 2xl:w-84 mx-auto flex flex-col gap-10 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 text-highlight group">
              <FiArrowLeft className="group-hover:-translate-x-1 transition-all duration-100" />
              <a href="/projects" className="text-sm font-mono">
                Back to Projects
              </a>
            </div>
            <div className="md:w-4/5 hover:scale-[103%] transition-all duration-150">
              <Image
                block={page.properties.Photo.files}
                alt={page.properties.Name.title[0].plain_text}
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-0">
              <div className="flex flex-col gap-2">
                <div className="text-sm text-highlight font-mono flex flex-row gap-2">
                  {formatTime(page.properties.Date.date.start)}
                  {page.properties.Date.date.end && (
                    <>
                      <span>&mdash;</span>
                      {formatTime(page.properties.Date.date.end)}
                    </>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-text-200">
                  {page.properties.Name.title[0].plain_text}
                </h1>
                <h3 className="text-lg font-semibold text-text-300">Tags</h3>
                <div className="flex flex-row flex-wrap gap-2">
                  {page.properties.Technologies.multi_select.map((tag) => (
                    <span
                      className="px-2 font-mono py-1 h-7 max-w-fit flex items-center bg-background-900 rounded-md text-sm"
                      style={{ color: notionColor(tag.color) }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-text-300">Status</h3>

                <span
                  className="px-2 font-mono py-1 h-7 max-w-fit flex items-center bg-background-900 rounded-md text-sm"
                  style={{
                    color: notionColor(page.properties.Status.select.color),
                  }}
                >
                  {page.properties.Status.select.name}
                </span>
              </div>
              <div className="flex flex-row gap-2 h-fit">
                {page.properties.Github.url && (
                  <IconButton
                    onClick={() => router.push(page.properties.Github.url)}
                  >
                    <FiGithub />
                  </IconButton>
                )}
                {page.properties.Link.url && (
                  <IconButton
                    onClick={() => router.push(page.properties.Link.url)}
                  >
                    <FiExternalLink />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-text-300 font-body text-lg">
            <RichText text={page.properties.Description.rich_text} />
            {blocks.map((block, i) => (
              <Block block={block} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { results: projects } = (await notionClient.databases.query({
    database_id: process.env.NOTION_PROJECTS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Date",
      },
    ],
  })) as unknown as { results: Project[] };
  return {
    paths: projects.map((blog) => ({
      params: {
        slug: blog.properties.Name.title[0].plain_text,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { results: projects } = (await notionClient.databases.query({
    database_id: process.env.NOTION_PROJECTS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Date",
      },
    ],
    filter: {
      property: "Name",
      rich_text: {
        equals: slug,
      },
    },
  })) as unknown as { results: Blog[] };
  if (!projects.length) {
    return {
      props: { 404: true },
      notFound: true,
      revalidate: 100,
    };
  }

  const blocks = (
    await notionClient.blocks.children.list({
      block_id: projects[0].id,
    })
  ).results as Array<BlockObjectResponse>;

  const blockChildren = await Promise.all(
    blocks
      .filter((blocks) => blocks.has_children)
      .map(async (block) => {
        const children = await notionClient.blocks.children.list({
          block_id: block.id,
        });
        return {
          id: block.id,
          children: children.results,
        };
      })
  );

  const blocksWithChildren = blocks.map((block, i) => {
    if (block.has_children && !(block as any)[block.type].children) {
      (block as any)[block.type].children = blockChildren.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page: projects[0],
      blocks: blocksWithChildren,
    },
  };
};
