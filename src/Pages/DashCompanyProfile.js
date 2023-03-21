import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DashCompanyProfile = () => {
  const initialValues = {
    companyName: "",
    phone: "",
    companyEmail: "",
    websiteUrl: "",
    country: "",
    city: "",
    pincode: "",
    address: "",
    description: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  };

  //   const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [load, setLoad] = useState(true);

  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setCompanyEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [qualification, setQualification] = useState("");
  const [language, setLanguage] = useState("");
  // const [jobCategory, setJobCategory] = useState("");
  // const [experience, setExperience] = useState("");
  // const [currentSalary, setCurrentSalary] = useState("");

  // const [expectedSalary, setEexpectedSalary] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   let User = { ...User };
  //   setUser({ ...User, [name]: value });
  //   console.log(User);
  //   // const { name, value } = e.target;
  //   // setUser({ ...User, [name]: value });
  // };

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;

    const tokenID = localStorage.getItem("token");
    fetch("http://localhost:5000/companyDetails", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        companyName,
        phone,
        companyEmail: Email,
        websiteUrl,
        country,
        city,
        pincode,
        address,
        description,
        facebook,
        linkedin,
        twitter,
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
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  const [employerDetails, setEmployerDetails] = useState([]);
  const [state, setState] = useState([]);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    fetch("http://localhost:5000/companyDetails", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        if (json.message.length < 1) {
          setEmployerDetails(json.message);
          setLoad(false);
          console.log(json.message);
        } else {
          setEmployerDetails(json.message[0]);
          setCompanyName(json.message[0].companyName);
          setPhone(json.message[0].phone);
          setCompanyEmail(json.message[0].companyEmail);
          setWebsiteUrl(json.message[0].websiteUrl);
          setCountry(json.message[0].country);
          setCity(json.message[0].city);
          setPincode(json.message[0].pincode);
          setAddress(json.message[0].address);
          setQualification(json.message[0].qualification);
          setLanguage(json.message[0].language);
          setDescription(json.message[0].description);
          setFacebook(json.message[0].facebook);
          setLinkedin(json.message[0].linkedin);
          setTwitter(json.message[0].twitter);
          setLoad(false);
          console.log(json.message);
        }

        console.log(json.message);
        //   if (json.message === "successfully register") {
        //     navigate("/login");
        //   }

        // const filterData = json.message?.filter(
        //   (item, index) => item.accountType === "employer"
        // );
        // setState(filterData);
        // console.log(state);

        // console.log(load);

        // setMessage(json.message)

        // if (json.message.profileStatus === "complete") {
        //   setLoad(true);
        //   console.log(load);
        // }
      })
      .catch((err) => {
        console.log(err);
      });
    // setState(valid(json.message));
  }, []);

  return (
    <div className="page-wraper position-relative" style={{ zIndex: "1000" }}>
      <header id="header-admin-wrap" className="header-admin-fixed">
        {/* <!-- Header Start --> */}
        <div id="header-admin">
          <div className="container">
            {/* <!-- Left Side Content --> */}
            <div className="header-left">
              <div className="nav-btn-wrap">
                <Link className="nav-btn-admin" id="sidebarCollapse">
                  <span className="fa fa-angle-left"></span>
                </Link>
              </div>
            </div>
            {/* <!-- Left Side Content End --> */}

            {/* <!-- Right Side Content --> */}
            <div className="header-right">
              <ul className="header-widget-wrap">
                {/* <!--Message--> */}
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
                                <span className="far fa-clock p-r-5"></span>12
                                mins ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
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
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
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
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
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
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
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

                {/* <!--Notification--> */}
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

                {/* <!--Account--> */}
                <li className="header-widget">
                  <div className="dashboard-user-section">
                    <div className="listing-user">
                      <div className="dropdown">
                        <Link
                          to=""
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
                              <Link to="dash-my-profile">
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
            {/* <!-- Right Side Content End --> */}
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>

      {/* <!-- Sidebar Holder --> */}
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

            <li className="active">
              <Link to="/employer-profile">
                <i className="fa fa-user-tie"></i>
                <span className="admin-nav-text">Company Profile</span>
              </Link>
            </li>

            <li>
              <Link to="">
                <i className="fa fa-suitcase"></i>
                <span className="admin-nav-text">Jobs</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  {" "}
                  <Link to="/employer-post-job">
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
              <Link to="/dashboard-candidates">
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

      {/* <!-- Page Content Holder --> */}
      <div id="content">
        <div className="content-admin-main">
          <div className="wt-admin-right-page-header clearfix">
            <h2>Company Profile!</h2>
            <div className="breadcrumbs">
              <Link to="#">Home</Link>
              <Link to="#">Dasboard</Link>
              <span>Company Profile!</span>
            </div>
          </div>

          {/* <!--Logo and Cover image--> */}
          <div className="panel panel-default">
            <div className="panel-heading wt-panel-heading p-a20">
              <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
            </div>
            <div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="dashboard-profile-pic">
                      <div className="dashboard-profile-photo">
                        <img
                          src="jobzilla/images/jobs-company/pic1.jpg"
                          alt=""
                        />
                        <div className="upload-btn-wrapper">
                          <div id="upload-image-grid"></div>
                          <button className="site-button button-sm">
                            Upload Photo
                          </button>
                          <input
                            type="file"
                            name="myfile"
                            id="file-uploader"
                            accept=".jpg, .jpeg, .png"
                          />
                        </div>
                      </div>
                      <p>
                        <b>Company Logo :- </b> Max file size is 1MB, Minimum
                        dimension: 136 x 136 And Suitable files are .jpg & .png
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="dashboard-cover-pic">
                    <form
                      action="https://thewebmax.org/jobzilla/upload.php"
                      className="dropzone"
                    ></form>
                    <p>
                      <b>Background Banner Image :- </b> Max file size is 1MB,
                      Minimum dimension: 770 x 310 And Suitable files are .jpg &
                      .png
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*
                <!--Basic Information--> */}
          <div className="panel panel-default">
            <div className="panel-heading wt-panel-heading p-a20">
              <h4 className="panel-tittle m-a0">Basic Informations</h4>
            </div>
            <div className="panel-body wt-panel-body p-a20 m-b30 ">
              {load === false ? (
                <form onSubmit={handleSubmit}>
                  {/* <!--Basic Information--> */}
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0">Company Profile</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Company Name</label>

                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="companyName"
                                onChange={(e) => setCompanyName(e.target.value)}
                                type="text"
                                value={companyName}
                                placeholder="Devid Smith"
                              />

                              <i className="fs-input-icon fa fa-building"></i>
                            </div>

                            <p style={{ color: "red" }}>
                              {formErrors.companyName}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Phone</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                type="number"
                                value={phone}
                                placeholder="(251) 1234-456-7890"
                              />
                              <i className="fs-input-icon fa fa-phone-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.phone}</p>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Email Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="companyEmail"
                                onChange={(e) =>
                                  setCompanyEmail(e.target.value)
                                }
                                value={Email}
                                type="email"
                                placeholder="Devid@example.com"
                              />
                              <i className="fs-input-icon fas fa-at"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.companyEmail}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Website</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="websiteUrl"
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                value={websiteUrl}
                                type="url"
                                placeholder="https://devsmith.net/"
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.websiteUrl}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Country</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="country"
                                onChange={(e) => setCountry(e.target.value)}
                                value={country}
                                type="text"
                                placeholder="USA"
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.country}</p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>City</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="city"
                                type="text"
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                placeholder="Texas"
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.city}</p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Pincode</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="pincode"
                                type="text"
                                onChange={(e) => setPincode(e.target.value)}
                                value={pincode}
                                placeholder="75462"
                              />
                              <i className="fs-input-icon fas fa-map-pin"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.pincode}</p>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Full Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="address"
                                type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                              />
                              <i className="fs-input-icon fas fa-map-marker-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.address}</p>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="twm-s-map mb-5">
                            <h4 className="section-head-small mb-4">
                              Location
                            </h4>
                            <div className="twm-s-map-iframe">
                              <iframe
                                height="270"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              name="description"
                              onChange={(e) => setDescription(e.target.value)}
                              value={description}
                              rows="3"
                            ></textarea>
                          </div>
                          <p style={{ color: "red" }}>
                            {formErrors.description}
                          </p>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                              Social Network
                            </h4>
                          </div>
                          <div className="panel-body wt-panel-body p-a20">
                            <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Facebook</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="facebook"
                                      onChange={(e) =>
                                        setFacebook(e.target.value)
                                      }
                                      value={facebook}
                                      type="url"
                                      placeholder="https://www.facebook.com/"
                                    />
                                    <i className="fs-input-icon fab fa-facebook-f"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.facebook}
                                  </p>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Twitter</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="twitter"
                                      onChange={(e) =>
                                        setTwitter(e.target.value)
                                      }
                                      value={twitter}
                                      type="url"
                                      placeholder="https://twitter.com/"
                                    />
                                    <i className="fs-input-icon fab fa-twitter"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.twitter}
                                  </p>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>linkedin</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="linkedin"
                                      onChange={(e) =>
                                        setLinkedin(e.target.value)
                                      }
                                      value={linkedin}
                                      type="url"
                                      placeholder="https://in.linkedin.com/"
                                    />
                                    <i className="fs-input-icon fab fa-linkedin-in"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.linkedin}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button">
                              Save Changes
                            </button>
                            &nbsp;&nbsp;
                            <Link to="/dash-company-profile-update">
                              {" "}
                              <button className="site-button">
                                Update Profile
                              </button>
                            </Link>
                          </div>

                          {message ===
                          "successfully created company details" ? (
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
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--Social Network--> */}
                </form>
              ) : (
                <form>
                  {/* <!--Basic Information--> */}
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0">Company Profile</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Company Name</label>

                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="companyName"
                                // onChange={handleChange}
                                type="text"
                                placeholder={employerDetails?.companyName}
                                disabled
                              />

                              <i className="fs-input-icon fa fa-building"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Phone</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="phone"
                                // onChange={handleChange}
                                type="text"
                                placeholder={employerDetails?.phone}
                                disabled
                              />
                              <i className="fs-input-icon fa fa-phone-alt"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Email Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="companyEmail"
                                // onChange={handleChange}
                                type="email"
                                placeholder={employerDetails?.companyEmail}
                                disabled
                              />
                              <i className="fs-input-icon fas fa-at"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.companyEmail}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Website</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="websiteUrl"
                                // onChange={handleChange}
                                type="text"
                                placeholder={employerDetails?.websiteUrl}
                                disabled
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>
                              {formErrors.websiteUrl}
                            </p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Country</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="country"
                                // onChange={handleChange}
                                type="text"
                                placeholder={employerDetails?.country}
                                disabled
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.country}</p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>City</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="city"
                                type="text"
                                // onChange={handleChange}
                                placeholder={employerDetails?.city}
                                disabled
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.city}</p>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-12 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Pincode</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="pincode"
                                type="text"
                                // onChange={handleChange}
                                placeholder={employerDetails?.pincode}
                                disabled
                              />
                              <i className="fs-input-icon fas fa-map-pin"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.pincode}</p>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="form-group city-outer-bx has-feedback">
                            <label>Full Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="address"
                                type="text"
                                // onChange={handleChange}
                                placeholder={employerDetails?.address}
                                disabled
                              />
                              <i className="fs-input-icon fas fa-map-marker-alt"></i>
                            </div>
                            <p style={{ color: "red" }}>{formErrors.address}</p>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12">
                          <div className="twm-s-map mb-5">
                            <h4 className="section-head-small mb-4">
                              Location
                            </h4>
                            <div className="twm-s-map-iframe">
                              <iframe
                                height="270"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                                disabled
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              name="description"
                              // onChange={handleChange}
                              rows="3"
                              placeholder={employerDetails?.description}
                              disabled
                            ></textarea>
                          </div>
                          <p style={{ color: "red" }}>
                            {formErrors.description}
                          </p>
                        </div>

                        <div className="panel panel-default">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                              Social Network
                            </h4>
                          </div>
                          <div className="panel-body wt-panel-body p-a20">
                            <div className="row">
                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Facebook</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="facebook"
                                      // onChange={handleChange}
                                      type="text"
                                      placeholder={employerDetails?.facebook}
                                      disabled
                                    />
                                    <i className="fs-input-icon fab fa-facebook-f"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.facebook}
                                  </p>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>Twitter</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="twitter"
                                      // onChange={handleChange}
                                      type="text"
                                      placeholder={employerDetails?.twitter}
                                      disabled
                                    />
                                    <i className="fs-input-icon fab fa-twitter"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.twitter}
                                  </p>
                                </div>
                              </div>

                              <div className="col-xl-4 col-lg-6 col-md-12">
                                <div className="form-group">
                                  <label>linkedin</label>
                                  <div className="ls-inputicon-box">
                                    <input
                                      className="form-control wt-form-control"
                                      name="linkedin"
                                      // onChange={handleChange}
                                      type="text"
                                      placeholder={employerDetails?.linkedin}
                                      disabled
                                    />
                                    <i className="fs-input-icon fab fa-linkedin-in"></i>
                                  </div>
                                  <p style={{ color: "red" }}>
                                    {formErrors.linkedin}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button">
                              Save Changes
                            </button>
                          </div>

                          {message ===
                          "successfully created company details" ? (
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
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--Social Network--> */}
                </form>
              )}
            </div>
          </div>

          {/* <!--Social Network--> */}
        </div>
      </div>

      {/*
        <!--Delete Profile Popup--> */}
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
  );
};

export default DashCompanyProfile;
