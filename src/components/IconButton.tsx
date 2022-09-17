import * as React from "react";
import { IconType } from "react-icons";
import Icon from "./Icon";
const IconButton = React.forwardRef(
  ({ children }: { children: React.ReactElement }, ref: any) => {
    return (
      <button
        ref={ref}
        className="border-2 rounded-lg border-highlight cursor-pointer hover:-translate-y-4 hover:shadow-lg transition-all duration-300 hover:shadow-highlight/50 active:shadow-md"
      >
        <Icon>
          <children.type />
        </Icon>
      </button>
    );
  }
);

export default IconButton;
