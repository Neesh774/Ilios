import React from "react";
import Image from "next/image";
import loader from "../../public/loader.svg";

const Loader = ({ className }: { className?: string }) => {
  return (
    <Image
      width="30px"
      height="30px"
      className={className}
      src={loader}
      alt="loader"
    />
  );
};

export default Loader;
