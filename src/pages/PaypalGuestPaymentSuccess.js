import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/router";
import axios from "axios";
// import { useSearchParams } from "next/router";

const PaypalGuestPaymentSuccess = () => {
  const searchParams = useSearchParams("false");
  const [tokenID, setTokenId] = useState("");

  useEffect(() => {
    setTokenId(localStorage.getItem("token"));
  }, []);
  const pay_id = sessionStorage.getItem("pay_id");
  const amount = sessionStorage.getItem("amount");
  const email = sessionStorage.getItem("email");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };
  console.log("amount", amount);
  console.log("email", email);

  const data = { amount: parseInt(amount), pay_id, email };
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("amount")) {
      router.push("/");
    } else {
      let a = searchParams.get("paymentId");
      let b = searchParams.get("PayerID");
      console.log("a=====", a);
      console.log("b=====", b);
      axios
        .post(
          `${process.env.REACT_APP_APIURL}/PaypalGuestPaymentSuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("pay_id");
          sessionStorage.removeItem("amount");
          sessionStorage.removeItem("email");
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
              <span className=" p-0 fs-1 fw-bold">
                GuestPayment Successfully
              </span>
              <p className="fp-p p-0">
                Your PayPal GuestPayment is Successfull
              </p>

              <Link className="" href="/transactionhistory">
                <button type="submit" className="fp-btn px-5  m-0">
                  Go Back
                </button>
              </Link>

              <br />
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

export default PaypalGuestPaymentSuccess;

// // import axios from "axios";
// import React, { useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { useSearchParams } from "next/router";
//

// const PaypalGuestPaymentSuccess = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [tokenID, setTokenId] = useState("");

useEffect(() => {
  setTokenId(localStorage.getItem("token"));
}, []);
//   const pay_id = sessionStorage.getItem("pay_id");
//   const amount = sessionStorage.getItem("amount");
//   const email = sessionStorage.getItem("email");
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `${tokenID}`,
//   };
//   console.log("amount", amount);

//   const data = { amount: parseInt(amount), pay_id, email };
//   const router = useRouter();

//   useEffect(() => {
//     if (!sessionStorage.getItem("amount")) {
//       router.push("/");
//     } else {
//       let a = searchParams.get("paymentId");
//       let b = searchParams.get("PayerID");
//       console.log("a=====", a);
//       console.log("b=====", b);
//       axios
//         .post(`${process.env.REACT_APP_APIURL}/PaypalGuestPaymentSuccess`, data, {
//           headers: headers,
//         })
//         .then((res) => {
//           console.log(res);

//           sessionStorage.removeItem("pay_id");
//           sessionStorage.removeItem("amount");
//           sessionStorage.removeItem("email");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, []);
//   return (
//     <section className="fp_sec bg-transparent ">
//       <div className="container">
//         <div className="row align-items-center justify-content-center">
//           <div className="col-md-4">
//             <form className="fp_form m-0 w-100 h-100">
//               <span className=" p-0 fs-1 fw-bold">Payment Successfully</span>
//               <p className="fp-p p-0">Your PayPal Payment Successfull</p>

//               <Link className="" href="/transactionhistory">
//                 <button type="submit" className="fp-btn px-5  m-0">
//                   Go Back
//                 </button>
//               </Link>

//               <br />
//             </form>
//           </div>

//           <div className="col-md-4">
//             <img
//               src="writer/img/Completed-pana.png"
//               alt="Completed-pana"
//               className="fp-img m-0 w-100"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PaypalGuestPaymentSuccess;
