import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewProfile from "./ViewProfile";
import axios from "axios";
import TransactionHistory from "./TransactionHistory";
import ViewOrder from "./ViewOrder";
// import Login from './Login'

const AccountSetting = () => {
  const navigate = useNavigate();

  const [Data1, setData1] = useState([]);
  const [Users, setUsers] = useState({});

  useEffect(() => {
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
          })
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
  }, []);

  const initialValue = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [User, setUser] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [inSubmit, setInSubmit] = useState(false);
  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [amount, setAmount] = useState("");

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

    if (
      currentPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
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
  }, [formError]);

  const valide = (value) => {
    const error = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.currentPassword) {
      error.currentPassword = "!'Please Enter Your currentPassword'";
    }

    if (!value.newPassword) {
      error.newPassword = "!'Please Enter New Your newPassword'";
    }
    //  else if(!value.confirmPassword  && value !== !value.password) {
    // 	error.password = "!'This is not Same'"
    // }

    if (!value.confirmPassword) {
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
        sessionStorage.setItem("wallet", amount);
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section className="reg_sec">
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-3">
              <h2>
                <img src="writer/img/logo/logo-img.png" className="as-img" />
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

            <div className="col-sm-9">
              <div className="tab-content">
                <h5 className="user_tab1">
                  Welcome to <span className="user_ach">User</span>
                </h5>
                <div id="home" className="container tab-pane active">
                  <br />

                  <ViewOrder />

                  <div className="card card_box mt-5">
                    <p className="chat_idp text-center">
                      <b>Order Id:</b> 45578 | <b>Title:</b> Package tutorial
                      one
                    </p>

                    <div className="card-header text-center h1">
                      Discuss About This Assignment Using Below Message Box
                    </div>
                    <div className="card-body chatbox">
                      <div className="box-li-view fl_l">
                        <ul>
                          <li className="userm_li ">
                            <span className="userm_li_span2">Mod_Alex</span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:24 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">Hi</span>
                          </li>
                        </ul>
                      </div>

                      <div className="box-li-view fl_l">
                        <ul>
                          <li className="userm_li ">
                            <span className="userm_li_span2">Mod_Alex</span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:24 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">Hi</span>
                          </li>
                        </ul>
                      </div>

                      <div className="box-li-view fl_r">
                        <ul>
                          <li className="userm_li1">
                            <span className="userm_li_span">
                              ankitpgoyal.115@gmail.com
                            </span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:25 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">
                              hello, my name is here there lorem spum can see
                              there ot visival can see.
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="box-li-view fl_l">
                        <ul>
                          <li className="userm_li ">
                            <span className="userm_li_span2">Mod_Alex</span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:24 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">Hi</span>
                          </li>
                        </ul>
                      </div>
                      <div className="box-li-view fl_l">
                        <ul>
                          <li className="userm_li ">
                            <span className="userm_li_span2">Mod_Alex</span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:24 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">Hi</span>
                          </li>
                        </ul>
                      </div>
                      <div className="box-li-view fl_r">
                        <ul>
                          <li className="userm_li1">
                            <span className="userm_li_span">
                              ankitpgoyal.115@gmail.com
                            </span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:25 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">
                              hello, my name is here there lorem spum can see
                              there ot visival can see.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="box-li-view fl_r">
                        <ul>
                          <li className="userm_li1">
                            <span className="userm_li_span">
                              ankitpgoyal.115@gmail.com
                            </span>
                            <span className="whats_chat_time">
                              <sub>July 27, 2022, 7:25 pm</sub>
                            </span>
                            <br />
                            <span className="user_li_text ">
                              hello, my name is here there lorem spum can see
                              there ot visival can see.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="chat_msg">
                    <textarea
                      className="form-control chat_cm"
                      rows="3"
                      id="comment"
                      placeholder="type here...."
                      name="text"
                    ></textarea>
                    <button
                      type="submit"
                      className="btn btn-primary chat_s_btn"
                    >
                      Submit
                    </button>
                    <div
                      className="fileDiv btn btn-info btn-flat"
                      id="upload-btn-chat"
                    >
                      {" "}
                      <i className="fa fa-upload"></i>
                      <input
                        type="file"
                        name="file"
                        className="upload_attachmentfile"
                      />
                    </div>
                  </div>
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
                      {Object.keys(formError).length === 0 && inSubmit ? (
                        <h3 className="Success text-center"></h3>
                      ) : (
                        ""
                      )}

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
                  <div className="table-responsive">
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
                      <tbody>
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
                  <div className="payment-gateway">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Make Payment
                    </button>
                    <p className="d-flex align-items-center fw-bold fs-5">
                      Wallet Balance:&nbsp;&nbsp;
                      <span
                        className="fw-bold fs-4"
                        style={{ color: "#029a9f" }}
                      >
                        ₹{Data1?.wallet}
                      </span>
                    </p>
                  </div>

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
                            Add Wallet
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

                  <div className="table-responsive">
                    <TransactionHistory />
                  </div>
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
