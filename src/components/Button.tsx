import { AnimationProps, motion } from "framer-motion";
import * as React from "react";

const Button = (
  props: {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: string;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    onClick?: () => {};
  } & AnimationProps
) => {
  return (
    <motion.button
      {...props}
      className={`px-6 py-2 border-2 min-w-fit rounded-md border-highlight text-highlight cursor-pointer hover:bg-highlightTint font-mono text-${
        props.size ? props.size : "sm"
      } ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
