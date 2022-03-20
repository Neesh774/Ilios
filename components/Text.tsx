/* eslint-disable react/jsx-key */
const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, i) => {
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
            ? "font-mono py-0.5 px-1 rounded-sm text-code bg-codebg text-sm rounded-2"
            : "",
          italic ? "italic" : "",
          strikethrough ? "line-through" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? (
          <a
            href={text.link.url}
            className="underline hover:text-starOrange transition-all ease-in-out duration-100"
          >
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export default Text;
