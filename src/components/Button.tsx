import * as React from "react";

const Button = ({
  label,
  size,
  className,
}: {
  label: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}) => {
  return (
    <button
      className={`px-6 py-2 border-2 rounded-md border-highlight text-highlight cursor-pointer hover:bg-highlightTint font-mono text-${
        size ? size : "sm"
      } ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
