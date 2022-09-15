import { Link as GatsbyLink } from "gatsby";
import * as React from "react";

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <GatsbyLink className="styled-link" to={href}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
