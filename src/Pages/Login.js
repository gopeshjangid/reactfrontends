import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [accountType, setAccountType] = useState("candidate");
  const [message, setMessage] = useState();
  const [data, setData] = useState();

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

  const candidates = (name) => {
    setAccountType(name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = User;

    const object = {
      username: username.trim(),

      password: password.trim(),

      accountType: accountType,
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;

    if (username.trim() === "" || password.trim() === "") {
      return;
    } else {
      const tokenID = localStorage.getItem("token");
      fetch("http://localhost:5000/login", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setData({
            User: json,
          });
          if (
            json.message === "successfully login" &&
            accountType === "candidate"
          ) {
            localStorage.setItem("token", json.token);
            navigate("/candidate-profile");
          }
          if (
            json.message === "successfully login" &&
            accountType === "employer"
          ) {
            localStorage.setItem("token", json.token);
            navigate("/employer-profile");
          }

          // setMessage(json.message);
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

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
  }, [formErrors, User, isSubmit]);

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "!'Please Enter Your Name'";
    }

    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    }

    return errors;
  };
  return (
    <div>
      <div className="page-wraper position-relative" style={{ zIndex: "1000" }}>
        {/* <!-- CONTENT START --> */}
        <div className="page-content">
          {/* <!-- Login Section Start --> */}
          <div className="section-full site-bg-white">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-5 twm-log-reg-media-wrap">
                  <div className="twm-log-reg-media">
                    <div className="twm-l-media">
                      <img src="jobzilla/images/login-bg.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-7">
                  <div className="twm-log-reg-form-wrap">
                    <div className="twm-log-reg-logo-head">
                      <Link to="/">
                        <img
                          src="jobzilla/images/logo-dark.png"
                          alt=""
                          className="logo"
                        />
                      </Link>
                    </div>

                    <div className="twm-log-reg-inner">
                      <div className="twm-log-reg-head">
                        <div className="twm-log-reg-logo">
                          <span className="log-reg-form-title">Log In</span>
                        </div>
                      </div>

                      <div className="twm-tabs-style-2">
                        <form onSubmit={handleSubmit}>
                          <ul
                            className="nav nav-tabs"
                            id="myTab2"
                            role="tablist"
                          >
                            {/* <!--Login Candidate-->   */}
                            <li className="nav-item">
                              <button
                                className="nav-link active"
                                data-bs-toggle="tab"
                                data-bs-target="#twm-login-candidate"
                                onClick={() => candidates("candidate")}
                                type="button"
                              >
                                <i className="fas fa-user-tie"></i>Candidate
                              </button>
                            </li>
                            {/* <!--Login Employer--> */}
                            <li className="nav-item">
                              <button
                                className="nav-link"
                                data-bs-toggle="tab"
                                data-bs-target="#twm-login-Employer"
                                onClick={() => candidates("employer")}
                                type="button"
                              >
                                <i className="fas fa-building"></i>Employer
                              </button>
                            </li>
                          </ul>

                          <div className="tab-content" id="myTab2Content">
                            {/* <!--Login Candidate Content-->   */}
                            <div
                              className="tab-pane fade show active"
                              id="twm-login-candidate"
                            >
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="form-group mb-3">
                                    <input
                                      name="username"
                                      type="text"
                                      required=""
                                      onChange={handleChange}
                                      className="form-control"
                                      placeholder="Usearname*"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="form-group mb-3">
                                    <input
                                      name="password"
                                      type="password"
                                      className="form-control"
                                      onChange={handleChange}
                                      required=""
                                      placeholder="Password*"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-12">
                                  <div className="twm-forgot-wrap">
                                    <div className="form-group mb-3">
                                      <div className="form-check">
                                        <Link
                                          to=""
                                          className="site-text-primary"
                                        >
                                          Forgot Password
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="form-group">
                                    <button
                                      type="submit"
                                      className="site-button"
                                    >
                                      Log in
                                    </button>
                                    {message === "successfully login" ? (
                                      <span className="text-primary">
                                        {message}
                                      </span>
                                    ) : (
                                      <span className="text-danger">
                                        {message}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </form>

                        <div className="col-md-12">
                          <div className="form-group">
                            <span className="center-text-or">Or</span>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <button type="submit" className="log_with_facebook">
                              <i className="fab fa-facebook"></i>
                              Continue with Facebook
                            </button>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <button type="submit" className="log_with_google">
                              <img
                                src="jobzilla/images/google-icon.png"
                                alt=""
                              />
                              Continue with Google
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* <!--Login Employer Content-->  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Login Section End --> */}
        </div>
        {/* <!-- CONTENT END --> */}

        {/* <!-- NEWS LETTER SECTION END --> */}
      </div>
    </div>
  );
};

export default Login;
