import axios from "axios";
import React, { useEffect } from "react";

const Success = () => {
  const tokenID = localStorage.getItem("token");
  const pay_id = sessionStorage.getItem("pay_id");
  const amount = sessionStorage.getItem("wallet");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };
  
  const data = { wallet: parseInt(amount), pay_id };

  useEffect(() => {
    axios
      .post("http://localhost:5000/rechargeWallet", data, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
      <div>Success</div>
    </div>
  );
};

export default Success;
