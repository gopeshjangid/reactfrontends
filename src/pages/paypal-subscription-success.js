import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import complete from "../images/Completed-pana.png";
const PaypalSubscriptionSuccess = () => {
  const [tokenID, setTokenId] = useState("");

  useEffect(() => {
    setTokenId(localStorage.getItem("token"));
  }, []);
  
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("sub_id")) {
      router.push("/");
    } else {
      const sub_id = sessionStorage.getItem("sub_id");
  const amount = sessionStorage.getItem("amount");
  const productId = sessionStorage.getItem("productId");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };
  const data = { sub_id: sub_id, amount: amount, productId: productId };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_APIURL}/payplesubscriptionsuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("sub_id");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tokenID]);

  return (
    <section className="fp_sec bg-transparent ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <form className="fp_form m-0 w-100 h-100">
              {/* <<onSubmit={handleSubmit} */}
              <span className=" p-0 fs-1 fw-bold">
                Subscription Successfully
              </span>
              <p className="fp-p p-0"></p>

              <Link className="" href="/dashboard">
                <button type="submit" className="fp-btn px-5  m-0">
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

          <div className="col-md-4">
          <Image
             src={complete}
              className="fp-img m-0 w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaypalSubscriptionSuccess;