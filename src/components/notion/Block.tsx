import {
  BlockObjectResponse,
  ParagraphBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";
import { Fragment } from "react";
import Code from "./Code";

export default function Block({ block }: { block: BlockObjectResponse }) {
  const { type, id } = block;

  switch (block.type) {
    case "paragraph":
      return (
        <>
          <RichText text={block.paragraph.rich_text} />
        </>
      );
    case "heading_1":
      return (
        <div className="text-3xl font-extrabold">
          <RichText text={block.heading_1.rich_text} />
        </div>
      );
    case "heading_2":
      return (
        <div className="text-2xl font-bold">
          <RichText text={block.heading_2.rich_text} />
        </div>
      );
    case "heading_3":
      return (
        <div className="text-xl font-semibold">
          <RichText text={block.heading_3.rich_text} />
        </div>
      );
    case "bulleted_list_item":
      return (
        <li>
          <RichText text={block.bulleted_list_item.rich_text} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li>
          <RichText text={block.numbered_list_item.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input
              type="checkbox"
              id={id}
              defaultChecked={block.to_do.checked}
              disabled
            />{" "}
            <RichText text={block.to_do.rich_text} />
          </label>
        </div>
      );
    case "child_page":
      return <p>{block.child_page.title}</p>;
    case "code":
      return <Code code={block.code} />;
    case "image":
      let url: string;
      if (block.image.type == "external") url = block.image["external"].url;
      else url = block.image["file"].url;
      return <img src={url} alt={"Blog Image"} />;
    default:
      return <p>Unsupported block type: {type}</p>;
  }
}
