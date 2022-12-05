import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import Login from './Login'

const AccountSetting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken == null) {
      navigate("/login");
    }
  }, []);

  const initialValues = {
    firstname: "",
    lastname: "",
    birth: "",
    email: "",
    number: "",
    school: "",
    check: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "!'Please Enter Your FirstName'";
    }
    if (!values.lastname) {
      errors.lastname = "!'Please Enter Your LastName'";
    }

    if (!values.birth) {
      errors.birth = "!'Please Enter Your Birth'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.number) {
      errors.number = "!'Please Enter Your Number'";
    } else if (values.number.length < 10) {
      errors.number = "!'Please Enter Your Correct Number";
    } else if (values.number.length > 10) {
      errors.number = "!'Please Enter Your Correct Number";
    }
    if (!values.school) {
      errors.school = "!'Please Enter Sch. / Univ.'";
    }
    if (!values.check) {
      errors.check = "!'Please Select Male/Female'";
    }
    return errors;
  };

  const initialValue = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  };

  const [formValue, setFormValue] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [inSubmit, setInSubmit] = useState(false);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormError(valide(formValue));
    setInSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && inSubmit) {
      console.log(formValue);
    }
  }, [formError]);

  const valide = (value) => {
    const error = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.currentPassword) {
      error.currentPassword = "!'Please Enter Your currentPassword'";
    }

    if (!value.password) {
      error.password = "!'Please Enter Your password'";
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

  // const token = localStorage.getItem("token")

  // let isLoggedin = true
  // if (token == null){
  // 	isLoggedin = false
  // }

  //   if(!isLoggedin){
  // 	return<Login setIsLoggedin={setIsLoggedin} />
  // }

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
                  <div className="row">
                    <div className="col-sm-5">
                      <div className="input-group mb-3">
                        <span className="input-group-text user_ser">
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="usrname"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <select className="form-select">
                        <option selected>All Orders</option>
                        <option>Unpaid Orders</option>
                        <option>Cancelled Orders</option>
                        <option>Order in Process</option>
                        <option>Completed Orders</option>
                        <option>Subscriptions</option>
                      </select>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Order Id</th>
                          <th>Date</th>
                          <th>Title</th>
                          <th>No. of words</th>
                          <th>Amount</th>
                          <th>Chat</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>45785</td>
                          <td>04/010/2022 6:35 est</td>
                          <td>Package 1</td>
                          <td>5000</td>
                          <td>250</td>
                          <td>Chat</td>
                          <td>Unpaid</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>78995</td>
                          <td>04/010/2022 6:35 est</td>
                          <td>Package 1</td>
                          <td>5000</td>
                          <td>250</td>
                          <td>Chat</td>
                          <td>Processing</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>78995</td>
                          <td>04/010/2022 6:35 est</td>
                          <td>Package 1</td>
                          <td>5000</td>
                          <td>250</td>
                          <td>Female</td>
                          <td>Completed</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="card card_box">
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
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex space-between">
                          <div className="me-3">
                            <label className="as-lbl">FirstName</label>
                            <input
                              type="text"
                              id="fname"
                              name="firstname"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>
                              {formErrors.firstname}
                            </p>
                          </div>

                          <div>
                            <label className="as-lbl">LastName</label>
                            <input
                              type="text"
                              name="lastname"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>
                              {formErrors.lastname}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex space-between">
                          <div className="me-3">
                            <label className="as-lbl">Date Of Birth</label>
                            <input
                              type="date"
                              name="birth"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>{formErrors.birth}</p>
                          </div>

                          <div>
                            <label className="as-lbl">Email Id</label>
                            <input
                              type="email"
                              id="fname"
                              name="email"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>{formErrors.email}</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="me-3">
                            <label className="as-lbl">Phone Number</label>
                            <input
                              type="number"
                              name="number"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>{formErrors.number}</p>
                          </div>

                          <div>
                            <label className="as-lbl">School/University</label>
                            <input
                              type="text"
                              id="fname"
                              name="school"
                              onChange={handleChange}
                              className="as-text_set"
                            />
                            <p style={{ color: "red" }}>{formErrors.school}</p>
                          </div>
                        </div>
                        <label className="as-lbl">Male</label>
                        <input
                          type="radio"
                          id="male"
                          name="check"
                          onChange={handleChange}
                          defaultValue="male"
                        />
                        &nbsp;
                        <label className="as-lbl">Female</label>
                        <input
                          type="radio"
                          id="Female"
                          name="check"
                          onChange={handleChange}
                          defaultValue="Female"
                        />
                        &nbsp;
                        <p style={{ color: "red" }}>{formErrors.check}</p>
                        <br />
                        <button type="submit" className="as-btn_set m-auto">
                          Update
                        </button>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                          <span className="Success text-dark">
                            Registeration is Successfull
                          </span>
                        ) : (
                          ""
                        )}
                      </form>
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
                        id="fname"
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
                        id="fname"
                        name="password"
                        onChange={inputChange}
                        className="as-text_set"
                      />
                      <p style={{ color: "red" }}>{formError.password}</p>

                      <label className="as-lbl">Confirm Password</label>
                      <input
                        type="password"
                        id="fname"
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
                        <h5 className="Success text-dark text-center mt-2">
                          Thanks!
                        </h5>
                      ) : (
                        ""
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
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Modal title
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-md-6">
                              <p>Main Account</p>
                              <h2>First Savings Account</h2>
                              <p>**********0344</p>
                            </div>
                            <div className="col-md-6 text-end">
                              <p>Available Funds</p>
                              <h2>
                                68.789,<span>56</span>
                                <b>$</b>
                              </h2>
                            </div>
                          </div>

                          <div className="row align-items-center">
                            <div className="col-md-4 d-flex align-items-center">
                              <button className="btn btn-primary px-3 py-2 text-white fw-bolder me-3 fs-4">
                                ↑
                              </button>
                              <div>
                                <h3 className="m-0">$ 5555.55</h3>
                                <p className="m-0">Income</p>
                              </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                              <button className="btn btn-primary px-3 py-2 text-white fw-bolder me-3 fs-4">
                                ↓
                              </button>
                              <div>
                                <h3 className="m-0">$ 5555.55</h3>
                                <p className="m-0">Expense</p>
                              </div>
                            </div>
                            <div className="col-md-4 Transfer-Money text-end">
                              <button className="btn btn-primary">
                                Transfer Money
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer payment-model-footer ">
                          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table text-white credt-total mb-3">
                      <thead>
                        <tr>
                          <th>Transaction History</th>
                          <th className="w-50 text-end">
                            Total: $<span>94.67</span>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>
                          <th>Transactions ID</th>
                          <th>Description</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>
                          <td>**********0344</td>
                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>
                          <td>**********0344</td>
                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>
                          <td>**********0344</td>
                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                      </tbody>
                    </table>

                    <table className="table text-white credt-total mb-3">
                      <thead>
                        <tr>
                          <th>Credit History</th>
                          <th className="w-50 text-end">
                            Total: $<span>100</span>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Date</th>

                          <th>Description</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>

                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>

                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            29 Nov 2022<span> 12:52pm</span>
                          </td>

                          <td>Your Payment has been successful.</td>
                          <td>-20 USD</td>
                        </tr>
                      </tbody>
                    </table>
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
