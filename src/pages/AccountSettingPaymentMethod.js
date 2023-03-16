import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AccountSettingPaymentMethod = () => {
  const initialValues = {
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    cvc: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();

  const [state, setState] = useState([]);
  const [load, setLoad] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const tokenID = localStorage.getItem("token");
  console.log(tokenID);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { accountHolder, accountNumber, cvc, ifsc } = User;

    const object = {
      accountHolder: accountHolder.trim(),
      accountNumber: accountNumber.trim(),
      cvc: cvc.trim(),
      ifsc: ifsc.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (
      accountHolder.trim() === "" ||
      accountNumber.trim() === "" ||
      cvc.trim() === "" ||
      ifsc.trim() === ""
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/savePaymentMethod`, {
        method: "POST",
        body: JSON.stringify(object),
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
          if (json.message === "Payment Detail Saved") {
            localStorage.removeItem("token");
            window.location.reload(true);
          }

          // setMessage(json.message);
          console.log(json.message);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

  // useEffect(() => {
  //   const res = data?.User?.error;
  //   setError(res);
  // }, []);

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
      // fetchData()
    }
  }, []);
  const validate = (values) => {
    const errors = {};

    if (!values.accountHolder) {
      errors.accountHolder = "!'Please Enter Your Name'";
    }
    if (!values.accountNumber) {
      errors.accountNumber = "!'Please Enter Your accountNumber'";
    }
    if (!values.cvc) {
      errors.cvc = "!'Please Enter Your cvc'";
    }
    if (!values.ifsc) {
      errors.ifsc = "!'Please Enter Your IFSC'";
    }

    return errors;
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/fetchPaymentMethod`, {
      method: "GET",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setState(json.message);
        console.log(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="reg_sec">
      <div className="container mt-3">
        <div className="row align-items-baseline">
          <div className="col-lg-3">
            <ul className="nav nav-pills flex-column acunt_dsh" role="tablist">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/accountsettingservices">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingsubscriptions">
                  Subscriptions
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/viewprofile">
                  Account Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-bs-toggle="pill"
                  to="/accountsettingpaymentmethod"
                >
                  Payment Methods
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/transactionhistory">
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <h5 className="user_tab1 mb-2">
              Welcome to <span className="user_ach">User</span>
            </h5>

            <div id="menu4" className="container tab-pane d-block">
              <br />
              <h2 className="as-second-row_h2">Payment Information:</h2>
              <div className="row justify-content-end">
                {state?.length > [0] ? (
                  <div className="col-sm-5">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-success border-0 btn-block user_addm"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Add Payment Method
                      </button>

                      {/* <!-- Button trigger modal --> */}
                      {/* <button type="button" class="btn btn-primary">
                      Launch static backdrop modal
                    </button> */}

                      {/* <!-- Modal --> */}
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                style={{ padding: "4%" }}
                                className="text-center"
                                onSubmit={handleSubmit}
                              >
                                <h2 className="form_sec-h2 text-dark">
                                  Fill Information
                                </h2>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      type="text"
                                      name="accountHolder"
                                      placeholder="Account Holder"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.accountHolder}
                                    </p>
                                  </div>

                                  <div className="Home-Name  ps-1">
                                    <input
                                      type="number"
                                      name="accountNumber"
                                      placeholder="Account Number"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.accountNumber}
                                    </p>
                                  </div>
                                </div>
                                <div className="Home-Name">
                                  <input
                                    name="ifsc"
                                    type="tel"
                                    pattern="\d*"
                                    maxlength="7"
                                    placeholder="MM / YY"
                                    onChange={handleChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                </div>
                                <p className="mb-0" style={{ color: "red" }}>
                                  {formErrors.ifsc}
                                </p>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      type="number"
                                      // min={date.currentTime}
                                      name="cvc"
                                      placeholder="cvc"
                                      onChange={handleChange}
                                      className="text_set ms-0 me-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.cvc}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-dark border-0 mt-3 ms-0"
                                >
                                  Save Payment
                                </button>{" "}
                                {/* {message === "successfully login and order" ? (
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
                              )} */}
                                {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn border-0 mb-0 btn-success btn-block"
                      >
                        Add Money
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="col-sm-12">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-success border-0 btn-block user_addm"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Add Payment Method
                      </button>

                      {/* <!-- Button trigger modal --> */}
                      {/* <button type="button" class="btn btn-primary">
                      Launch static backdrop modal
                    </button> */}

                      {/* <!-- Modal --> */}
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <form
                                style={{ padding: "4%" }}
                                className="text-center"
                                onSubmit={handleSubmit}
                              >
                                <h2 className="form_sec-h2 text-dark">
                                  Fill Information
                                </h2>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      type="text"
                                      name="accountHolder"
                                      placeholder="Account Holder"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.accountHolder}
                                    </p>
                                  </div>

                                  <div className="Home-Name  ps-1">
                                    <input
                                      type="number"
                                      name="accountNumber"
                                      placeholder="Account Number"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.accountNumber}
                                    </p>
                                  </div>
                                </div>
                                <div className="Home-Name">
                                  <input
                                    name="ifsc"
                                    type="tel"
                                    pattern="\d*"
                                    maxlength="7"
                                    placeholder="MM / YY"
                                    onChange={handleChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                </div>
                                <p className="mb-0" style={{ color: "red" }}>
                                  {formErrors.ifsc}
                                </p>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      type="number"
                                      // min={date.currentTime}
                                      name="cvc"
                                      placeholder="cvc"
                                      onChange={handleChange}
                                      className="text_set ms-0 me-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.cvc}
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-dark border-0 mt-3 ms-0"
                                >
                                  Save Payment
                                </button>{" "}
                                {/* {message === "successfully login and order" ? (
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
                              )} */}
                                {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn border-0 mb-0 btn-success btn-block"
                      >
                        Add Money
                      </button>
                    </div>
                  </div>
                )}
                {state?.map((friend, index) => {
                  return (
                    <div className="col-sm-7">
                      <div className="table-responsive  text-nowrap">
                        <table className="table table-borderless ">
                          <tbody>
                            <tr
                              className="p-0"
                              style={{ background: "#029a99" }}
                            >
                              <td className="p-2 fs-4 text-white">Card</td>
                              <td className="p-2 text-end fs-4 text-white">
                                {index + 1}
                              </td>
                            </tr>
                            <tr>
                              <td className="w-25">Acccount Holder &nbsp; :</td>

                              <td>{friend.accountHolder}</td>
                            </tr>
                            <tr>
                              <td className="w-25">Ac/No. &nbsp; :</td>
                              <td> {friend.accountNumber}</td>
                            </tr>
                            <tr>
                              <td className="w-25">Expiry Date &nbsp; :</td>

                              <td>{friend.ifsc}</td>
                            </tr>
                            <tr>
                              <td className="w-25">CVC &nbsp; :</td>
                              <td>{friend.cvc}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettingPaymentMethod;
