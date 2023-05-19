import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useRouter } from "next/router";

const PendingPaymentPaypalSuccess = () => {
  const [tokenID, setTokenId] = useState("");
  const [message, setmessage] = useState("");
  const [orderId, setorderId] = useState("");
  const [pay_id, setpay_id] = useState("");
  useEffect(() => {
    setTokenId(localStorage.getItem("token"));
    setpay_id(sessionStorage.getItem("pay_id"));
    setorderId(sessionStorage.getItem("orderId"));
    setmessage(sessionStorage.getItem("totalamount"));
  }, []);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };

  const data = { totalamount: parseInt(message), pay_id, orderId };
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("totalamount")) {
      router.push("/");
    } else {
      let a = router.query.paymentId;
      let b = router.query.PayerID;
      console.log("a=====", a);
      console.log("b=====", b);
      axios
        .post(
          `${process.env.NEXT_PUBLIC_APIURL}/PendingPaymentPaypalSuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("pay_id");
          sessionStorage.removeItem("totalamount");
          sessionStorage.removeItem("orderId");
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
            <img
              src="writer/img/Completed-pana.png"
              alt="Completed-pana"
              className="fp-img m-0 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingPaymentPaypalSuccess;
