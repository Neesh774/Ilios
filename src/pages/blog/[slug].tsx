import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import { FiArrowLeft } from "react-icons/fi";
import MetaTags from "../../components/MetaTags";
import Block from "../../components/notion/Block";
import { notionClient } from "../../utils/client";
import { notionColor } from "../../utils/color";
import formatTime from "../../utils/formatTime";
import { Blog } from "../../utils/types";

export default function BlogPage({
  page,
  blocks,
}: {
  page: Blog;
  blocks: BlockObjectResponse[];
}) {
  return (
    <>
      <MetaTags
        title={`${page.properties.Name.title[0].plain_text} | Kanishq Kancharla`}
        description={page.properties.Description.rich_text[0].plain_text}
      />
      <div className="pb-4 pt-6 border-b-[1px] border-text-500 mb-64 md:pt-8 lg:pb-6 lg:pt-28 xl:py-36 xl:pb-16 overflow-hidden min-h-[100vh]">
        <div className=" w-4/5 md:w-2/5 2xl:w-84 mx-auto flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 text-highlight group">
              <FiArrowLeft className="group-hover:-translate-x-1 transition-all duration-100" />
              <a href="/blog" className="text-sm font-mono">
                Back to Blog
              </a>
            </div>
            <div className="text-sm text-highlight font-mono">
              {formatTime(page.properties.Created.created_time)}
            </div>
            <h1 className="text-4xl font-bold text-text-200">
              {page.properties.Name.title[0].plain_text}
            </h1>
            <div className="flex flex-row flex-wrap gap-2">
              {page.properties.Tags.multi_select.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 font-mono py-1 h-7 max-w-fit flex items-center bg-background-900 rounded-md text-sm"
                  style={{ color: notionColor(tag.color) }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 text-text-300 font-body text-lg">
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
  const { results: blogs } = (await notionClient.databases.query({
    database_id: process.env.NOTION_BLOGS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Created",
      },
    ],
  })) as unknown as { results: Blog[] };
  return {
    paths: blogs.map((blog) => ({
      params: {
        slug: blog.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { results: blogs } = (await notionClient.databases.query({
    database_id: process.env.NOTION_BLOGS_ID as string,
    sorts: [
      {
        direction: "descending",
        property: "Created",
      },
    ],
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  })) as unknown as { results: Blog[] };
  if (!blogs.length) {
    return {
      props: { 404: true },
      notFound: true,
      revalidate: 100,
    };
  }

  const blocks = (
    await notionClient.blocks.children.list({
      block_id: blogs[0].id,
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
      page: blogs[0],
      blocks: blocksWithChildren,
    },
    revalidate: 100,
  };
};
