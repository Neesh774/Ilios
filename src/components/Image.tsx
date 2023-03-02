import NextImage from "next/image";
import { useState } from "react";
import Loader from "./Loader";

const Image = (props: React.ComponentProps<typeof NextImage>) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader />
        </div>
      )}
      <NextImage
        {...props}
        className={`${props.className} duration-500 ease-in-out animate-fade-in`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default Image;
