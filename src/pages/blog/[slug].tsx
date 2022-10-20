import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { GetStaticPaths, GetStaticProps } from "next";
import MetaTags from "../../components/MetaTags";
import { notionClient } from "../../utils/client";
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
    fallback: false,
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
  };
};
