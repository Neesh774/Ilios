import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { getNotionColor } from "../../utils/color";

export default function RichText({
  text,
  className,
}: {
  text: RichTextItemResponse[];
  className?: string;
}) {
  return (
    <div>
      {text.map((text, i) => (
        <span
          key={i}
          className={`${className ? className + " " : ""}${
            text.annotations.bold ? "font-bold " : ""
          }${text.annotations.italic ? "italic " : ""}${
            text.annotations.strikethrough ? "line-through " : ""
          }${text.annotations.underline ? "underline " : ""}${
            text.annotations.code
              ? "bg-zinc-100 dark:bg-zinc-900 p-1 rounded"
              : ""
          }${
            text.annotations.color
              ? getNotionColor(
                  text.annotations.color.split("_")[0],
                  !text.annotations.color.endsWith("background")
                ) +
                (text.href
                  ? " hover:!bg-transparent transition-colors duration-300"
                  : "")
              : ""
          }`}
        >
          {text.href ? (
            <a href={text.href} className="styled-link break-all bg-clip-text">
              {text.plain_text}
            </a>
          ) : (
            <>{text.plain_text}</>
          )}
        </span>
      ))}
    </div>
  );
}
