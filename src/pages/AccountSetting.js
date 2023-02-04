import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewProfile from "./ViewProfile";
import axios from "axios";
import TransactionHistory from "./TransactionHistory";
import ViewOrder from "./ViewOrder";
import Chat from "./Chat";
import ExtraCredit from "./ExtraCredit";
// import Login from './Login'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const AccountSetting = () => {
  const navigate = useNavigate();

  const [Data1, setData1] = useState([]);
  const [Users, setUsers] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [amount, setAmount] = useState("");

  async function showRazorpay() {
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    var payload = JSON.stringify({
      amount: amount,
    });

    const data = await fetch("http://localhost:5000/razorpayPayment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
      body: payload,
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_KiBn8QyRFCYQnw",
      currency: data.order.currency,
      amount: data.amount.toString(),
      order_id: data.order.id,
      name: "Donation",
      callback_url: "/razorpay-is-completed",
      description: "Thank you for nothing. Please give us some money",
      handler: async function (response) {
        console.log(response);
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });

        var config = {
          method: "post",
          url: "http://localhost:5000/razorpay-is-completed",
          headers: {
            Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("log");
        await axios(config)
          .then(function (response) {
            console.log(response.data);
            window.location.reload(true);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(response);
        // alert("Transaction successful");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    sessionStorage.removeItem("wallet");
    sessionStorage.removeItem("pay_id");

    const getToken = localStorage.getItem("token");
    const tokenID = localStorage.getItem("token");
    console.log("hello+++++++++++", tokenID);
    fetch("http://localhost:5000/viewProfile", {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    }) // .then((res) => res.json())
      .then((response) =>
        response.json(
          setUsers({
            response,
          }),
          console.log(Users)
        )
      )

      .then((json) => {
        // if (json.message === "mail have sent successfully") {
        // 	navigate('/login');
        // }

        setData1(json.data);
        console.log("*******&&&&&&&&&&&&&", json.data);

        // setError(json.error)
      })
      .catch((err) => {
        console.log(err);
      });

    if (getToken == null) {
      navigate("/login");
    }
  }, [navigate]);

  const initialValue = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [User, setUser] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [inSubmit, setInSubmit] = useState(false);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [paypal, setPaypal] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const tokenID = localStorage.getItem("token");
    const { currentPassword, newPassword, confirmPassword } = User;

    const object = {
      currentPassword: currentPassword.trim(),
      newPassword: newPassword.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    setFormError(valide(User));
    // add entity - POST
    // e.preventDefault();
    // creates entity

    const passwordLength1 = /^.{6,}$/;

    if (
      currentPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === "" ||
      passwordLength1.test(newPassword.trim()) === false
    ) {
      return;
    } else {
      fetch("http://localhost:5000/changePassword", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object, {
          currentPassword,
          newPassword,
          confirmPassword,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))
        .then((json) => {
          setData({
            User: json,
          });
          if (json.message === "password successfully changed") {
            navigate("/AccountSetting");
          }

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });

      setInSubmit(true);
    }
  };

  useEffect(() => {
    const res = data?.User?.message;
    console.log(res);
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && inSubmit) {
      console.log(User);
    }
  }, [User, formError, inSubmit]);

  const valide = (value) => {
    const error = {};
    const passwordLength = /^.{6,}$/;
    if (!value.currentPassword) {
      error.currentPassword = "!'Please Enter Your currentPassword'";
    }

    if (!value.newPassword) {
      error.newPassword = "!'Please Enter New Your newPassword'";
    } else if (!passwordLength.test(value.newPassword)) {
      error.newPassword = "!'Please Enter Maximum 6 Character'";
    }
    if (!value.confirmPassword) {
      //  else if(!value.confirmPassword  && value !== !value.password) {
      // 	error.password = "!'This is not Same'"
      // }

      error.confirmPassword = "!'Please Enter Your confirmPassword'";
    } //  else if(!value.password && value !== !value.confirmPassword) {
    // 	error.confirmPassword = "!'This is not Same'"
    // }

    return error;
  };

  const walletRecharge = () => {
    axios
      .post("http://localhost:5000/payment", { wallet: amount })
      .then((response) => {
        // sessionStorage.setItem("wallet", amount);
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
      })
      .catch((error) => console.log(error));
  };

  const payWithPaypal = () => {
    axios
      .post("http://localhost:5000/PaypalPayment", { wallet: paypal })
      .then((response) => {
        sessionStorage.setItem("wallet", paypal);
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setPaypal({
          response,
        });
      })

      .catch((error) => console.log(error));
  };
  console.log(paypal);

  console.log(orderId);

  // const accountsettingId = {
  //   id: menu1,
  //   id2: menu2,
  //   id3: menu3,
  //   id4: menu4,
  //   id5: menu5,
  // };

  return (
    <div>
      <section className="reg_sec">
        <div className="container mt-3">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="text-center">
                <img
                  src="writer/img/logo/logo-img.png"
                  alt="logo-img"
                  className="as-img"
                />
              </h2>
              <br />

              <ul
                className="nav nav-pills flex-column acunt_dsh"
                role="tablist"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    data-bs-toggle="pill"
                    to="#home"
                  >
                    Dasboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu1">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu2">
                    Subscriptions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu3">
                    Account Setting
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu4">
                    Payment Methods
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu5">
                    Billing Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" data-bs-toggle="pill" to="#menu6">
                    Credits
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-9">
              <div className="tab-content">
                <h5 className="user_tab1 mb-2">
                  Welcome to <span className="user_ach">User</span>
                </h5>
                <div id="home" className="container tab-pane px-0 active">
                  <br />

                  <ViewOrder
                    setOrderId={setOrderId}
                    setOrderName={setOrderName}
                    setShowChat={setShowChat}
                  />

                  {showChat && <Chat orderId={orderId} orderName={orderName} />}
                </div>

                <div id="menu1" className="container tab-pane fade">
                  <br />
                  <h3>Menu 1</h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div id="menu2" className="container tab-pane fade">
                  <br />
                  <h3>Menu 2</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam.
                  </p>
                </div>
                <div id="menu3" className="container tab-pane fade">
                  <br />
                  <div className="row mar-bot">
                    <h3 className="as-h3">Set Your Personal Info</h3>
                    <div className="col-md-4 text-center">
                      <img
                        src="writer/img/Mira-Whedon.webp"
                        alt="Mira-Whedon"
                        className="team_sec-img"
                      />
                      <p className="">
                        <Link to="/">Edit</Link> <Link to="/">Delete</Link>
                      </p>
                    </div>

                    <div className="col-md-7">
                      <ViewProfile />
                    </div>
                  </div>

                  <div className="row">
                    <h2 className="as-second-row_h2">
                      Default Setting For Managing Your Account
                    </h2>
                    <div className="col-md-3"> </div>

                    <form className="col-md-6" onSubmit={onSubmit}>
                      <label className="as-lbl">Current Password</label>
                      <input
                        type="password"
                        name="currentPassword"
                        onChange={inputChange}
                        className="as-text_set"
                      />
                      <p style={{ color: "red" }}>
                        {formError.currentPassword}
                      </p>
                      <label className="as-lbl">New Password</label>
                      <input
                        type="password"
                        name="newPassword"
                        onChange={inputChange}
                        className="as-text_set"
                      />
                      <p style={{ color: "red" }}>{formError.newPassword}</p>
                      <label className="as-lbl">Confirm Password</label>
                      <input
                        type="password"
                        name="confirmPassword"
                        onChange={inputChange}
                        className="as-text_set"
                      />
                      <p style={{ color: "red" }}>
                        {formError.confirmPassword}
                      </p>
                      <button
                        type="submit"
                        className="as-btn_set"
                        style={{ marginLeft: "40%" }}
                      >
                        Update
                      </button>
                      <br />
                      {message === "password successfully changed" ? (
                        <h3
                          className="Success text-center"
                          style={{ color: "#03979c" }}
                        >
                          {message}
                        </h3>
                      ) : (
                        <h3 className="Success text-danger text-center">
                          {message}
                        </h3>
                      )}
                    </form>

                    <div className="col-md-3"> </div>
                  </div>
                </div>
                <div id="menu4" className="container tab-pane fade">
                  <br />
                  <h2 className="as-second-row_h2">Payment Information:</h2>
                  <div className="row">
                    <div className="col-sm-5">
                      <p>Acccount Number: 26478786997</p>
                      <p>Account Holder: Shubham Singhal</p>
                      <p>IFSC Code: ICICI000457</p>
                    </div>
                    <div className="col-sm-7">
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-success btn-block user_addm"
                        >
                          Add Payment Method
                        </button>
                      </div>
                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn btn-success btn-block"
                        >
                          Add Money
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu5" className="container tab-pane fade">
                  <div className="table-responsive viewOrdertable ">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Amount</th>
                          <th>Processor</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="viewOrderbody">
                        <tr>
                          <td>1</td>
                          <td>Package</td>
                          <td>5000</td>
                          <td>hIRE 1</td>
                          <td>Edit | Delete</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Package</td>
                          <td>5000</td>
                          <td>hIRE 1</td>
                          <td>Edit | Delete</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Package</td>
                          <td>5000</td>
                          <td>hIRE 1</td>
                          <td>Edit | Delete</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="menu6" className="container tab-pane fade">
                  <p className="d-flex justify-content-center align-items-center fw-bold fs-5">
                    Wallet Balance:&nbsp;&nbsp;
                    <span className="fw-bold fs-4" style={{ color: "#029a9f" }}>
                      ₹{Data1?.wallet}
                    </span>
                  </p>
                  <ExtraCredit />
                  <div className="payment-gateway justify-content-center">
                    <button
                      type="button"
                      className="btn payment-walllet"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Wallet with Stripe
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header ">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Add Wallet with Stripe
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <input
                              className="w-100 px-1 py-3"
                              placeholder="0"
                              type="number"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                            />
                          </div>
                          <div className="modal-footer payment-model-footer ">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button
                              type="button"
                              className="btn btn-primary w-100"
                              onClick={() => walletRecharge()}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn  payment-walllet"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Wallet with PayPal
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header ">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Add Wallet with PayPal
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <input
                              className="w-100 px-1 py-3"
                              placeholder="0"
                              type="number"
                              value={paypal}
                              onChange={(e) => setPaypal(e.target.value)}
                            />
                          </div>
                          <div className="modal-footer payment-model-footer ">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button
                              type="button"
                              className="btn btn-primary w-100"
                              onClick={() => payWithPaypal()}
                            >
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn payment-walllet"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      Wallet with RazorPay
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal3"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Add Wallet with RazorPay
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body">
                          <input
                            className="w-100 px-1 py-3"
                            placeholder="0"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div className="modal-footer payment-model-footer ">
                          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={() => showRazorpay()}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <TransactionHistory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountSetting;
