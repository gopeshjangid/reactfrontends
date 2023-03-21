import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const DashPostJob = () => {
  const initialValues = {
    jobtitle: "",
    jobcategory: "",
    jobtype: "",
    offeredsalary: "",
    experience: "",
    qualification: "",
    gender: "",
    country: "",
    city: "",
    location: "",
    latitude: "",
    logitude: "",
    email: "",
    websiteUrl: "",
    EstSince: "",
    completeAddress: "",
    description: "",
    startDate: "",
    EndDate: "",
  };

  //   const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

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
    const {
      jobtitle,
      jobtype,
      jobcategory,
      offeredsalary,
      experience,
      qualification,
      gender,
      country,
      city,
      location,
      latitude,
      logitude,
      email,
      websiteUrl,
      EstSince,
      completeAddress,
      description,
      startDate,
      EndDate,
    } = User;

    const object = {
      jobtitle: jobtitle.trim(),
      jobtype: jobtype.trim(),
      jobcategory: jobcategory.trim(),
      offeredsalary: offeredsalary.trim(),
      experience: experience.trim(),
      qualification: qualification.trim(),
      gender: gender.trim(),
      country: country.trim(),
      city: city.trim(),
      location: location.trim(),
      latitude: latitude.trim(),
      logitude: logitude.trim(),
      email: email.trim(),
      websiteUrl: websiteUrl.trim(),
      EstSince: EstSince.trim(),
      completeAddress: completeAddress.trim(),

      description: description.trim(),
      startDate: startDate.trim(),
      EndDate: EndDate.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      jobtitle.trim() === "" ||
      jobtype.trim() === "" ||
      jobcategory.trim() === "" ||
      offeredsalary.trim() === "" ||
      experience.trim() === "" ||
      qualification.trim() === "" ||
      gender.trim() === "" ||
      country.trim() === "" ||
      city.trim() === "" ||
      location.trim() === "" ||
      latitude.trim() === "" ||
      logitude.trim() === "" ||
      email.trim() === "" ||
      regex1.test(email.trim()) === false ||
      websiteUrl.trim() === "" ||
      EstSince.trim() === "" ||
      completeAddress.trim() === "" ||
      description.trim() === "" ||
      startDate.trim() === "" ||
      EndDate.trim() === ""
    ) {
      return;
    } else {
      const tokenID = localStorage.getItem("token");
      fetch("http://localhost:5000/postJob", {
        method: "POST",
        mode: "cors",
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

          //   if (json.message === "successfully register") {
          //     navigate("/login");
          //   }

          // setMessage(json.message)
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

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

    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.jobtitle) {
      errors.jobtitle = "!'Please Enter Your jobtitle'";
    }
    if (!values.jobtype) {
      errors.jobtype = "!'Please Enter Your jobtype '";
    }
    if (!values.jobcategory) {
      errors.jobcategory = "!'Please Enter Your jobcategory '";
    }
    if (!values.offeredsalary) {
      errors.offeredsalary = "!'Please Enter Your offeredsalary'";
    }

    if (!values.experience) {
      errors.experience = "!'Please Enter experience'";
    }
    if (!values.qualification) {
      errors.qualification = "!'Please Enter qualification'";
    }
    if (!values.gender) {
      errors.gender = "!'Please Enter gender'";
    }
    if (!values.country) {
      errors.country = "!'Please Enter country'";
    }
    if (!values.city) {
      errors.city = "!'Please Enter city'";
    }
    if (!values.location) {
      errors.location = "!'Please Enter location'";
    }
    if (!values.latitude) {
      errors.latitude = "!'Please Enter latitude'";
    }
    if (!values.logitude) {
      errors.logitude = "!'Please Enter logitude'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.websiteUrl) {
      errors.websiteUrl = "!'Please Enter websiteUrl'";
    }
    if (!values.EstSince) {
      errors.EstSince = "!'Please Enter EstSince'";
    }
    if (!values.completeAddress) {
      errors.completeAddress = "!'Please Enter completeAddress'";
    }
    if (!values.description) {
      errors.description = "!'Please Enter description'";
    }
    if (!values.startDate) {
      errors.startDate = "!'Please Enter startDate'";
    }
    if (!values.EndDate) {
      errors.EndDate = "!'Please Enter EndDate'";
    }

    return errors;
  };

  return (
    <div>
      <div className="page-wraper position-relative" style={{ zIndex: "1000" }}>
        <header id="header-admin-wrap" className="header-admin-fixed">
          <div id="header-admin">
            <div className="container">
              <div className="header-left">
                <div className="nav-btn-wrap">
                  <Link className="nav-btn-admin" id="sidebarCollapse">
                    <span className="fa fa-angle-left"></span>
                  </Link>
                </div>
              </div>

              <div className="header-right">
                <ul className="header-widget-wrap">
                  <li className="header-widget dashboard-message-dropdown">
                    <div className="dropdown">
                      <Link
                        to=""
                        className="dropdown-toggle jobzilla-admin-messange"
                        id="ID-MSG_dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i className="far fa-envelope"></i>
                        <span className="notification-animate">4</span>
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="ID-MSG_dropdown"
                      >
                        <div className="message-list dashboard-widget-scroll">
                          <ul>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img
                                  src="jobzilla/images/user-avtar/pic1.jpg"
                                  alt=""
                                />
                              </span>

                              <div className="msg-texting">
                                <strong>Alexa Johnson</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>
                                  12 mins ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img
                                  src="jobzilla/images/user-avtar/pic2.jpg"
                                  alt=""
                                />
                              </span>

                              <div className="msg-texting">
                                <strong>Johan Smith</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>2
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img
                                  src="jobzilla/images/user-avtar/pic3.jpg"
                                  alt=""
                                />
                              </span>

                              <div className="msg-texting">
                                <strong>Bobby Brown</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>3
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                            <li className="clearfix">
                              <span className="msg-avtar">
                                <img
                                  src="jobzilla/images/user-avtar/pic4.jpg"
                                  alt=""
                                />
                              </span>

                              <div className="msg-texting">
                                <strong>David Deo</strong>
                                <small className="msg-time">
                                  <span className="far fa-clock p-r-5"></span>4
                                  hours ago
                                </small>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur...
                                </p>
                              </div>
                            </li>
                          </ul>
                          <div className="message-view-all">
                            <Link to="">View All</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="header-widget dashboard-noti-dropdown">
                    <div className="dropdown">
                      <Link
                        to=""
                        className="dropdown-toggle jobzilla-admin-notification"
                        id="ID-NOTI_dropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i className="far fa-bell"></i>
                        <span className="notification-animate">8</span>
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="ID-NOTI_dropdown"
                      >
                        <div className="dashboard-widgets-header">
                          You have 7 notifications
                        </div>
                        <div className="noti-list dashboard-widget-scroll">
                          <ul>
                            <li>
                              <Link to="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Devid applied for <b>Webdesigner.</b>{" "}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Nikol sent you a message.{" "}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  lucy bookmarked your <b>SEO Expert</b> Job!{" "}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Your job for <b>teacher</b> has been approved!{" "}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span className="noti-icon">
                                  <i className="far fa-bell"></i>
                                </span>
                                <span className="noti-texting">
                                  Thor applied for <b>Team Leader</b>.{" "}
                                </span>
                              </Link>
                            </li>
                          </ul>

                          <div className="noti-view-all">
                            <Link to="">View All</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="header-widget">
                    <div className="dashboard-user-section">
                      <div className="listing-user">
                        <div className="dropdown">
                          <Link
                            to="/"
                            className="dropdown-toggle"
                            id="ID-ACCOUNT_dropdown"
                            data-bs-toggle="dropdown"
                          >
                            <div className="user-name text-black">
                              <span>
                                <img
                                  src="jobzilla/images/user-avtar/pic4.jpg"
                                  alt=""
                                />
                              </span>
                              Nikola Tesla
                            </div>
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="ID-ACCOUNT_dropdown"
                          >
                            <ul>
                              <li>
                                <Link to="/dashboard">
                                  <i className="fa fa-home"></i>Dashboard
                                </Link>
                              </li>
                              <li>
                                <Link to="dash-messages">
                                  <i className="fa fa-envelope"></i> Messages
                                </Link>
                              </li>
                              <li>
                                <Link to="employer-profile">
                                  <i className="fa fa-user"></i> Profile
                                </Link>
                              </li>
                              <li>
                                <Link to="index">
                                  <i className="fa fa-share-square"></i> Logout
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <nav id="sidebar-admin-wraper">
          <div className="page-logo">
            <Link to="/">
              <img src="jobzilla/images/logo-dark.png" alt="" />
            </Link>
          </div>

          <div className="admin-nav scrollbar-macosx">
            <ul>
              <li>
                <Link to="/employer-dashboard">
                  <i className="fa fa-home"></i>
                  <span className="admin-nav-text">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link to="/dash-company-profile">
                  <i className="fa fa-user-tie"></i>
                  <span className="admin-nav-text">Company Profile</span>
                </Link>
              </li>

              <li className="active">
                <Link to="">
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Jobs</span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    {" "}
                    <Link to="dash-post-job">
                      <span className="admin-nav-text">Post a New Jobs</span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/employer-manage-job">
                      <span className="admin-nav-text">Manage Jobs</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="dashboard-candidates">
                  <i className="fa fa-user-friends"></i>
                  <span className="admin-nav-text">Candidates</span>
                </Link>
              </li>
              <li>
                <Link to="dash-bookmark">
                  <i className="fa fa-bookmark"></i>
                  <span className="admin-nav-text">Bookmark Resumes</span>
                </Link>
              </li>

              <li>
                <Link to="dash-package">
                  <i className="fa fa-money-bill-alt"></i>
                  <span className="admin-nav-text">Packages</span>
                </Link>
              </li>

              <li>
                <Link to="">
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">
                    Messages <sup className="twm-msg-noti">5</sup>
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    {" "}
                    <Link to="dash-messages">
                      <span className="admin-nav-text">MSG Style-1</span>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="dash-messages_2">
                      <span className="admin-nav-text">MSG Style-2</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="dash-resume-alert">
                  <i className="fa fa-bell"></i>
                  <span className="admin-nav-text">Resume Alerts</span>
                </Link>
              </li>

              <li>
                <Link to="dash-my-profile">
                  <i className="fa fa-user"></i>
                  <span className="admin-nav-text">My Profile</span>
                </Link>
              </li>

              <li>
                <Link to="dash-change-password">
                  <i className="fa fa-fingerprint"></i>
                  <span className="admin-nav-text">Change Password</span>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  data-bs-toggle="modal"
                  data-bs-target="#delete-dash-profile"
                >
                  <i className="fa fa-trash-alt"></i>
                  <span className="admin-nav-text">Delete Profile</span>
                </Link>
              </li>

              <li>
                <Link
                  to=""
                  data-bs-toggle="modal"
                  data-bs-target="#logout-dash-profile"
                >
                  <i className="fa fa-share-square"></i>
                  <span className="admin-nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Post a Job</h2>
              <div className="breadcrumbs">
                <Link to="#">Home</Link>
                <Link to="#">Dasboard</Link>
                <span>Job Submission Form</span>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <div className="dashboard-profile-pic">
                        <div className="dashboard-profile-photo">
                          <img
                            src="jobzilla/images/jobs-company/pic1.jpg"
                            alt=""
                          />
                          <div className="upload-btn-wrapper">
                            <button className="site-button button-sm">
                              Upload Photo
                            </button>
                            <input type="file" name="myfile" />
                          </div>
                        </div>
                        <p>
                          <b>Company Logo :- </b> Max file size is 1MB, Minimum
                          dimension: 136 x 136 And Suitable files are .jpg &
                          .png
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="dashboard-cover-pic">
                      <form action="upload.php" className="dropzone"></form>
                      <p>
                        <b>Background Banner Image :- </b> Max file size is 1MB,
                        Minimum dimension: 770 x 310 And Suitable files are .jpg
                        & .png
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={handleSubmit}>
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0">
                        <i className="fa fa-suitcase"></i>Job Details
                      </h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Job Title</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="jobtitle"
                                type="text"
                                onChange={handleChange}
                                placeholder="Devid Smith"
                              />
                              <i className="fs-input-icon fa fa-address-card"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.jobtitle}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Job Category</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="jobcategory"
                                type="text"
                                onChange={handleChange}
                                placeholder="Job Category"
                              />

                              <i className="fs-input-icon fa fa-border-all"></i>
                            </div>

                            <p style={{ color: "red" }}>
                              {formErrors.jobcategory}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Job Type</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="jobtype"
                                type="text"
                                onChange={handleChange}
                                placeholder="Job Type"
                              />{" "}
                              <i className="fs-input-icon fa fa-file-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.jobtype}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Offered Salary</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="offeredsalary"
                                type="number"
                                onChange={handleChange}
                                placeholder="Salary"
                              />{" "}
                              <i className="fs-input-icon fa fa-dollar-sign"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.offeredsalary}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Experience</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="experience"
                                type="number"
                                onChange={handleChange}
                                placeholder="E.g. Minimum 3 years"
                              />
                              <i className="fs-input-icon fa fa-user-edit"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.experience}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Qualification</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="qualification"
                                type="text"
                                onChange={handleChange}
                                placeholder="Qualification Title"
                              />
                              <i className="fs-input-icon fa fa-user-graduate"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.qualification}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Gender</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="gender"
                                type="text"
                                onChange={handleChange}
                                placeholder="Gender"
                              />{" "}
                              <i className="fs-input-icon fa fa-venus-mars"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.gender}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Country</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="country"
                                type="text"
                                onChange={handleChange}
                                placeholder="Country"
                              />{" "}
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.country}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>City</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="city"
                                type="text"
                                onChange={handleChange}
                                placeholder="City"
                              />{" "}
                              <i className="fs-input-icon fa fa-map-marker-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.city}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Location</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="location"
                                type="text"
                                onChange={handleChange}
                                placeholder="Type Address"
                              />
                              <i className="fs-input-icon fa fa-map-marker-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.location}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Latitude</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="latitude"
                                type="text"
                                onChange={handleChange}
                                placeholder="Los Angeles"
                              />
                              <i className="fs-input-icon fa fa-map-pin"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.latitude}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Longitude</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="logitude"
                                type="text"
                                onChange={handleChange}
                                placeholder="Los Angeles"
                              />
                              <i className="fs-input-icon fa fa-map-pin"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.logitude}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Email Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="email"
                                type="email"
                                onChange={handleChange}
                                placeholder="Devid@example.com"
                              />
                              <i className="fs-input-icon fas fa-at"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.email}</p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Website</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="websiteUrl"
                                type="url"
                                onChange={handleChange}
                                placeholder="https://.../"
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.websiteUrl}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Est. Since</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="EstSince"
                                type="text"
                                onChange={handleChange}
                                placeholder="Since..."
                              />
                              <i className="fs-input-icon fa fa-clock"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.EstSince}
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Complete Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="completeAddress"
                                type="text"
                                onChange={handleChange}
                                placeholder="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA"
                              />
                              <i className="fs-input-icon fa fa-home"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.completeAddress}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              rows="3"
                              name="description"
                              onChange={handleChange}
                              placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality."
                            ></textarea>
                            <p style={{ color: "red" }}>
                              {formErrors.description}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control datepicker"
                                data-provide="datepicker"
                                name="startDate"
                                type="text"
                                onChange={handleChange}
                                placeholder="mm/dd/yyyy"
                              />
                              <i className="fs-input-icon far fa-calendar"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.startDate}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>End Date</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control datepicker"
                                data-provide="datepicker"
                                name="EndDate"
                                type="text"
                                onChange={handleChange}
                                placeholder="mm/dd/yyyy"
                              />
                              <i className="fs-input-icon far fa-calendar"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.EndDate}</p>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button m-r5">
                              Publish Job
                            </button>
                            {message}
                            {/* <button
                                type="submit"
                                className="site-button outline-primary"
                              >
                                Save Draft
                              </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Delete Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="delete-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">
                  Do you want to delete your profile?
                </h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Logout Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="logout-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">
                  Do you want to Logout your profile?
                </h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPostJob;
