import axios from "axios";
import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Success = () => {
  const tokenID = localStorage.getItem("token");
  const pay_id = sessionStorage.getItem("pay_id");
  const amount = sessionStorage.getItem("wallet");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };

  const data = { wallet: parseInt(amount), pay_id };
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("wallet")) {
      navigate("/");
    } else {
      axios
        .post("http://localhost:5000/rechargeWallet", data, {
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
  }, []);

  return (
    <section className="fp_sec bg-transparent ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <form className="fp_form m-0 w-100 h-100">
              {/* <<onSubmit={handleSubmit} */}
              <span className=" p-0 fs-1 fw-bold">Payment Successfully</span>
              <p className="fp-p p-0">Your Payment Successfully Add.</p>

              <Link className="" to="/accountSetting">
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
              className="fp-img m-0 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
