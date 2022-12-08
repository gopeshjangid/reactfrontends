import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewProfile from "./ViewProfile";
import axios from "axios";
// import Login from './Login'

const AccountSetting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = localStorage.getItem("token");

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
  const [amount, setAmount] = useState(0);

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
        // if (json.message === "successfully login") {
        //   localStorage.setItem("token", json.token);
        //   setIsLoggedin(true);

        //   navigate("/AccountSetting");
        // }

        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      });

    setInSubmit(true);
  };

  // componentDidMount() {
  // 	// get all entities - GET
  // 	fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
  // 	  "method": "GET",
  // 	  "headers": {
  // 		"x-rapidapi-host": "fairestdb.p.rapidapi.com",
  // 		"x-rapidapi-key": API_KEY
  // 	  }
  // 	})
  // 	.then(response => response.json())
  // 	.then(response => {
  // 	  this.setState({
  // 		friends: response
  // 	  })
  // 	})
  // 	.catch(err => { console.log(err);
  // 	});
  //   }

  useEffect(() => {
    const res = data?.User?.message;
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
      .post("http://localhost:5000/payment", { wallet: amount})
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
      })
      .catch((error) => console.log(error));
  };

  // const initialValu = {
  // 		username: "",
  // 		password: "",
  // 		checkbox: ""
  // 	}

  // const nav = useNavigate();

  // const [Use, setUse] = useState(initialValues);
  // const [error, setError] = useState();
  // const [data, setData] = useState();
  // const [message, setMessage] = useState();
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const [isLoggedin, setIsLoggedin] = useState(false);

  // const handleChange = (e) => {
  // 	const { name, value } = e.target;
  // 	setUser({ ...User, [name]: value });
  // };

  // componentDidMount() {

  // 	const { firstname, email } = User

  // 	const object = {
  // 		firstname: firstname.trim(),
  // 		email: email.trim()
  // 	}

  // 	// add entity - POST
  // 	// e.preventDefault();
  // 	// creates entity
  // 	 fetch("http://localhost:5000/viewProfile", {
  // 		method: "GET",
  // 		mode: "cors",
  // 		body: JSON.stringify(object, { firstname, email }),
  // 		headers: {
  // 			'Content-type': 'application/json',
  // 			'Accept': 'application/json'
  // 		}

  // 	}).then(response => response.json(
  // 		console.log(response)

  // 	)).then(json => {
  // 		setData(
  // 			{
  // 				Use: json
  // 			}
  // 		)
  // 		if (json.message === "successfully login") {
  // 			localStorage.setItem('token', json.token)
  // 			setIsLoggedin(true);

  // 			nav('/AccountSetting');
  // 		}

  // 		console.log(json)
  // 	})
  // 		.catch(err => {
  // 			console.log(err);
  // 		});

  // };

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
                        <option>All Orders</option>
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
                        name="newPassword"
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
                      {Object.keys(formError, message).length === 0 &&
                      inSubmit ? (
                        <h5 className="Success text-dark text-center mt-2">
                          {message}
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
                    tabIndex="-1"
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
                        {/* <div className="modal-body">
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
                        </div> */}
                        <div>
                          <input
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
