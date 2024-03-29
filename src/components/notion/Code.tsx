import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import hljs from "highlight.js";

export default function Code({
  code,
}: {
  code: CodeBlockObjectResponse["code"];
}) {
  return (
    <pre className="font-mono pt-6 pr-4 pl-8 pb-8 bg-codebg text-sm rounded-2">
      <code className={`language-${code.language} `}>
        <div
          dangerouslySetInnerHTML={{
            __html: hljs.highlight(code.rich_text[0].plain_text, {
              language: code.language,
            }).value,
          }}
        />
      </code>
    </pre>
  );
}
