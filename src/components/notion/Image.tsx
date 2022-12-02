/* eslint-disable @next/next/no-img-element */
import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Project } from "../../utils/types";

export default function Image({
  block,
  alt,
}: {
  block: Project["properties"]["Photo"]["files"];
  alt: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const image = block[0];

  return (
    <div
      className={`imageContainer w-full ${
        isLoading &&
        "bg-slate-200 dark:bg-zinc-800 animate-pulse rounded max-h-20"
      }`}
    >
      <NextImage
        src={image.type === "external" ? image.external.url : image.file.url}
        unoptimized={process.env.NODE_ENV !== "production"}
        layout="fill"
        className={`nextImage object-cover object-center my-8 p-0 rounded-md overflow-hidden ${
          isLoading ? "opacity-0" : ""
        } transition-all duration-500`}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
