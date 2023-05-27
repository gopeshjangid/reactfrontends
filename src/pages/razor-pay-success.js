import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Success from "../images/Successful-purchase.gif"
const RazorPaySuccess = () => {
  return (
    <div>
      <section className="fp_sec bg-transparent ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <form className="fp_form m-0 w-100 h-100">
                {/* <<onSubmit={handleSubmit} */}
                <span className=" p-0 fs-1 fw-bold">
                  Thank You For Your Order
                </span>

                <p className="fp-p p-0">
                  We'll Email You an Order Confirmation With Details and
                  tracking info
                </p>

                <Link className="" href="/dashboard">
                  <button type="submit" className="fp-btn px-5 m-0">
                    Go Back
                  </button>
                </Link>

                <br />
                {/* {Object.keys(formErrors, message).length === 0 && isSubmit ? (
                  <span className="Success">{message}</span>
                ) : (
                  ""
                )} */}
              </form>
            </div>

            <div className="col-md-5">
            <Image
              src={Success}
                alt="Successful-purchase"
                className="fp-img m-0 w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RazorPaySuccess;
