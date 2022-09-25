import NextImage from "next/image";
import { useState } from "react";

const Image = (props: React.ComponentProps<typeof NextImage>) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <NextImage
        {...props}
        onLoad={() => setIsLoading(false)}
        className={`${props.className} duration-500 ease-in-out ${
          isLoading ? "blur-xl scale-110" : "blur-0 scale-100"
        }
          `}
      />
    </div>
  );
};

export default Image;
