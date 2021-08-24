import { Fragment } from "react";
import { getDatabase, getPage, getBlocks, queryDatabase } from "../../lib/notion.js";
import Link from 'next/link'
import ReactTimeAgo from 'react-time-ago'

import Text from '../../components/Text'

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} disabled/>{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (   
    <div className="divide-y-2 divide-gray-500 divide-opacity-60 px-5">
      <div className="mx-5">
        <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 font-extrabold mt-5 mb-2">
          <Text text={page.properties.Name.title} />
          <div className="text-gray-500 font-normal text-sm">
            Created&nbsp;<ReactTimeAgo date={page.properties.Created.created_time} locale="en" />
          </div>
        </div>
        <Link href="/blog">
          <a className="text-lg font-bold">←Back to Blogs</a>
        </Link>
      </div>
      <div className="py-4">
        {blocks.map((block) => (
          <div key={block.id} className="pt-2 md:mx-72 sm:mx-48 mx-4">
            <Fragment>{renderBlock(block)}</Fragment>
          </div>
        ))}
      </div>
      <div className="p-5 flex justify-center">
        <Link href="/blog">
          <a className="bg-starOrange text-white font-bold rounded-md p-3 hover:bg-yellow-500 transition-all ease-in-out duration-100">←Back to Blogs</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(process.env.NOTION_DATABASE_ID);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params;
  const page = await queryDatabase(slug.id);
  const blocks = await getBlocks(page.id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};