import * as React from "react";
import { IconType } from "react-icons/lib";

const Icon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactElement;
}) => {
  return <children.type className="w-5 h-5 m-2 text-highlight" />;
};

export default Icon;
