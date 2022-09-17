import NextLink from "next/link";
import * as React from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <NextLink className="styled-link" href={href}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
