import React, { useEffect, useState } from "react";
import Image from "next/image";
import pagenot from "../images/page-not-found-img.jpg"
const pagenotfound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center sm-12">
          <Image
          src={pagenot}
            style={{ width: "10%",height:"30%",marginTop:"20px" }}
          />
          
          <h4 className="mt-3" style={{ color: "#2ab8d3" }}>
            Hmm,{" "}
          </h4>
          <h4 style={{ color: "#2ab8d3" }}>
            This page dose not exist or has moved on the somthing else{" "}
          </h4>
          <p className="mt-5">
            Try one of the link in the header to reach the designation page or
            link below
          </p>

          <div className="text-4 mt-2 sm-12 mb-4 ">
            <button
              type="button"
              className="btn"
              style={{ background: "#2ab8d3" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://getprowriter.com/"
              >
                Home
              </a>
            </button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn"
              style={{ background: "#2ab8d3" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://getprowriter.com/guestpayment"
              >
                MAKE PAYMENT
              </a>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn"
              style={{ background: "#2ab8d3" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://getprowriter.com/how-it-works"
              >
                HOW IT WORKS
              </a>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn"
              style={{ background: "#2ab8d3" }}
            >
              <a
                style={{ color: "white", textDecoration: "none" }}
                href="https://getprowriter.com/place-your-order"
              >
                ORDER AN ASSIGNMENT
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pagenotfound;
