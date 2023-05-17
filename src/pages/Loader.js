import React from "react";
import loader from "../images/gp-writer-complete.png"
const Loader = () => {
  return (
    <div className="main-loader">
      <div className="loader">
        {" "}
        <img src={loader} alt="logo-loader" />
      </div>
    </div>
  );
};

export default Loader;
