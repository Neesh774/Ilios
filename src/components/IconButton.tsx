import * as React from "react";
import { IconType } from "react-icons";
import { motion, AnimationProps, EventInfo } from "framer-motion";
import Icon from "./Icon";

const IconButton = (
  props: { children: React.ReactElement; onClick?: () => {} } & AnimationProps
) => {
  return (
    <motion.button
      {...props}
      className="border-2 rounded-lg border-highlight cursor-pointer hover:bg-highlightTint"
      onClick={props.onClick}
    >
      <Icon>
        <props.children.type />
      </Icon>
    </motion.button>
  );
};

export default IconButton;
