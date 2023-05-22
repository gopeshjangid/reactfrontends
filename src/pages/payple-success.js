import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const Payplesuccess = () => {
  const [tokenID, setTokenId] = useState("");

  useEffect(() => {
    setTokenId(localStorage.getItem("token"));
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("wallet")) {
      router.push("/");
    } else {
      const pay_id = sessionStorage.getItem("pay_id");
      const paypal = sessionStorage.getItem("wallet");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${tokenID}`,
      };

      const data = { wallet: parseInt(paypal), pay_id };
      let a = router.query.paymentId;
      let b = router.query.PayerID;
      console.log("a=====", a);
      console.log("b=====", b);
      axios
        .post(`${process.env.NEXT_PUBLIC_APIURL}/payplesuccess`, data, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("pay_id");
          sessionStorage.removeItem("wallet");
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
              <span className=" p-0 fs-1 fw-bold">Payment Successfully</span>
              <p className="fp-p p-0">Your PayPal Payment Successfull</p>

              <Link className="" href="/transaction-history">
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
            <img
              src="https://getprowriter.com/writer/img/Completed-pana.png"
              alt="Completed-pana"
              className="fp-img m-0 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payplesuccess;
