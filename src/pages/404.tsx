import * as React from "react";
import Link from "../components/Link";

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn&apos;t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link href="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
