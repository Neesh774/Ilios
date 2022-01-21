import hljs from "highlight.js";

export default function Code({ code }) {
    return (
        <pre className="font-mono py-0.5 px-1 rounded-sm bg-codebg text-sm rounded-2">
            <code className={`language-${code.language} `}>
                <div dangerouslySetInnerHTML={
                    {
                        __html: hljs.highlight(code.text[0].plain_text, { language: code.language }).value
                    }
                } />
            </code>
        </pre>
    )
}