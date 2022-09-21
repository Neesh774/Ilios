import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "./Link";
const RichText = ({ text }: { text: RichTextItemResponse[] }) => {
  if (!text) {
    return <></>;
  }
  return (
    <>
      {text.map((value, i) => {
        if (value.type != "text") return <></>;
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        return (
          <span
            key={i}
            className={[
              bold ? "font-bold" : "",
              code
                ? "font-mono py-0.5 px-1 rounded-sm text-sm bg-background-900 text-secondary"
                : "",
              italic ? "italic" : "",
              strikethrough ? "line-through" : "",
              underline ? "underline" : "",
            ].join(" ")}
            style={color !== "default" ? { color } : {}}
          >
            {text.link ? (
              <Link href={text.link.url}>{text.content}</Link>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export default RichText;
