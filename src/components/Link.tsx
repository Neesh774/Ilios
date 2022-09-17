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
    <NextLink href={href}>
      <a className="styled-link">{children}</a>
    </NextLink>
  );
};

export default Link;
