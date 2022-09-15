import * as React from "react";
import type { HeadFC } from "gatsby";
import Link from "../components/Link";

const IndexPage = () => {
  return (
    <main className="p-20">
      <Link href="/">Test</Link>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kanishq Kancharla</title>;
