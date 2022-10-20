import * as React from "react";
import Link from "../components/Link";

const NotFoundPage = () => {
  return (
    <div className="pb-4 pt-6 px-8 border-b-[1px] border-text-500 mb-64 md:pt-8 md:px-12 lg:pb-6 lg:pt-28 lg:px-36 xl:py-36 xl:pb-16 xl:px-60 2xl:px-[20%] flex flex-col gap-8 overflow-hidden h-[100vh]">
      <div>
        <span className="text-highlight font-mono text-xl">404</span>
        <h1 className="font-serif text-text-100/90 text-4xl md:text-4xl xl:text-6xl font-semibold">
          Page Not Found
        </h1>
      </div>
      <p className="font-body text-text-200/70 text-sm md:text-base lg:text-lg">
        Whoops! Looks like the page you're looking for doesn't exist. <br />
      </p>
      <Link href="/">Go home</Link>.
    </div>
  );
};

export default NotFoundPage;
