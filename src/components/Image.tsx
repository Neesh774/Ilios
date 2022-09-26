import NextImage from "next/image";
import { useState } from "react";
import Loader from "./Loader";

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const Image = (props: React.ComponentProps<typeof NextImage>) => {
  return (
    <div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader />
      </div>
      <NextImage
        {...props}
        className={`${props.className} duration-500 ease-in-out`}
      />
    </div>
  );
};

export default Image;
