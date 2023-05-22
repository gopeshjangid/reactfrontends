import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const PendingPaymentStripeSuccess = () => {
  const [tokenID, setTokenId] = useState("");

  useEffect(() => {
    setTokenId(localStorage.getItem("token"));
  }, []);

  // const router = useRouter();

  useEffect(
    () => {
      if (!tokenID) return;

      const pay_id = sessionStorage.getItem("pay_id");
      const orderId = sessionStorage.getItem("orderId");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${tokenID}`,
      };
      //wallet: parseInt(amount),
      console.log(pay_id);
      console.log("QWERGWEGRG", orderId);
      const data = { pay_id, orderId };
      axios
        .post(
          `${process.env.NEXT_PUBLIC_APIURL}/PendingPaymentStripeSuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);
          console.log("weewq", res.data.data);

          sessionStorage.removeItem("pay_id");
          sessionStorage.removeItem("orderId");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // if(!sessionStorage.getItem("wallet"))
    [tokenID]
  );

  return (
    <section className="fp_sec bg-transparent ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <form className="fp_form m-0 w-100 h-100">
              {/* <<onSubmit={handleSubmit} */}
              <span className=" p-0 fs-1 fw-bold">Payment Successfully</span>

              <p className="fp-p p-0">Your Payment Successfully Add.</p>

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

export default PendingPaymentStripeSuccess;
