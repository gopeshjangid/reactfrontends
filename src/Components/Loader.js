import React from "react";
import Image from "next/image";

import loader from "../images/gp-writer-loader.png"
const Loader = () => {
  return (
    <div className="main-loader">
      <div className="loader">
        {" "}
        <Image src={loader} alt="logo-loader" />
      </div>
    </div>
  );
};

export default Loader;
