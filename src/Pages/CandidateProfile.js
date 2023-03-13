import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CandidateProfile = () => {
  const initialValues = {
    websiteUrl: "",
    qualification: "",
    language: "",
    jobCategory: "",
    experience: "",
    currentSalary: "",
    expectedSalary: "",
    age: "",
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
  const [load, setLoad] = useState(false);

  // const [error, setError] = useState()

  const [state, setState] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      websiteUrl,
      qualification,
      language,
      jobCategory,
      experience,
      currentSalary,
      expectedSalary,
      age,
      country,
      city,
      pincode,
      address,
      description,
      facebook,
      linkedin,
      twitter,
    } = User;

    const object = {
      websiteUrl: websiteUrl.trim(),
      qualification: qualification.trim(),
      language: language.trim(),
      jobCategory: jobCategory.trim(),
      experience: experience.trim(),
      currentSalary: currentSalary.trim(),
      expectedSalary: expectedSalary.trim(),
      age: age.trim(),
      country: country.trim(),
      city: city.trim(),
      pincode: pincode.trim(),
      address: address.trim(),
      description: description.trim(),
      facebook: facebook.trim(),
      linkedin: linkedin.trim(),
      twitter: twitter.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      websiteUrl.trim() === "" ||
      qualification.trim() === "" ||
      language.trim() === "" ||
      jobCategory.trim() === "" ||
      experience.trim() === "" ||
      currentSalary.trim() === "" ||
      expectedSalary.trim() === "" ||
      age.trim() === "" ||
      country.trim() === "" ||
      city.trim() === "" ||
      pincode.trim() === "" ||
      address.trim() === "" ||
      description.trim() === "" ||
      facebook.trim() === "" ||
      linkedin.trim() === "" ||
      twitter.trim() === ""
    ) {
      return;
    } else {
      const tokenID = localStorage.getItem("token");
      fetch("http://localhost:5000/canditateDetails", {
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
    if (!values.websiteUrl) {
      errors.websiteUrl = "!'Please Enter Your websiteUrl'";
    }
    if (!values.qualification) {
      errors.qualification = "!'Please Enter Your qualification '";
    }
    if (!values.language) {
      errors.language = "!'Please Enter Your language '";
    }
    if (!values.jobCategory) {
      errors.jobCategory = "!'Please Enter Your JobCategory'";
    }
    if (!values.experience) {
      errors.experience = "!'Please Enter Your experience'";
    }
    if (!values.currentSalary) {
      errors.currentSalary = "!'Please Enter Your currentSalary'";
    }
    if (!values.expectedSalary) {
      errors.expectedSalary = "!'Please Enter Your expectedSalary'";
    }
    if (!values.age) {
      errors.age = "!'Please Enter Your age'";
    }

    if (!values.country) {
      errors.country = "!'Please Enter country'";
    }
    if (!values.city) {
      errors.city = "!'Please Enter city'";
    }
    if (!values.pincode) {
      errors.pincode = "!'Please Enter pincode'";
    }
    if (!values.address) {
      errors.address = "!'Please Enter address'";
    }
    if (!values.description) {
      errors.description = "!'Please Enter description'";
    }
    if (!values.facebook) {
      errors.facebook = "!'Please Enter facebook'";
    }
    if (!values.linkedin) {
      errors.linkedin = "!'Please Enter linkedin'";
    }
    if (!values.twitter) {
      errors.twitter = "!'Please Enter twitter'";
    }
    return errors;
  };

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    fetch("http://localhost:5000/canditateDetails", {
      method: "GET",

      // body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        if (json.message.accountType === "candidate") {
          setCandidates(json.message);
          setLoad(true);

          console.log(json.message);
        }

        // const filterData = json.message?.filter(
        //   (item, index) => item.accountType === "candidate"
        // );
        // setState(filterData[0]);
        // console.log(candidates[0]);
        //   if (json.message === "successfully register") {
        //     navigate("/login");
        //   }

        // if (json?.message?.accountType == "candidate") {
        //   setLoad(true);
        // }
        // console.log(load);

        // setMessage(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(jobzilla/images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Candidate Profile</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index">Home</Link>
                  </li>
                  <li>Candidate Profile</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* 
            <!-- OUR BLOG START --> */}
        <div className="section-full p-t120  p-b90 site-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                <div className="side-bar-st-1">
                  <div className="twm-candidate-profile-pic">
                    <img src="jobzilla/images/user-avtar/pic4.jpg" alt="" />
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
                  <div className="twm-mid-content text-center">
                    <Link to="candidate-detail" className="twm-job-title">
                      <h4> {state?.username}</h4>
                    </Link>
                    <p>IT Contractor</p>
                  </div>

                  <div className="twm-nav-list-1">
                    <ul>
                      <li>
                        <Link to="/candidate-dashboard">
                          <i className="fa fa-tachometer-alt"></i> Dashboard
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/candidate-profile">
                          <i className="fa fa-user"></i> Make Profile
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/candidate-profile-detail">
                          <i className="fa fa-user"></i> My Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-jobs-applied">
                          <i className="fa fa-suitcase"></i> Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-my-resume">
                          <i className="fa fa-receipt"></i> My Resume
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-saved-jobs">
                          <i className="fa fa-file-download"></i> Saved Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-cv-manager">
                          <i className="fa fa-paperclip"></i> CV Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-job-alert">
                          <i className="fa fa-bell"></i> Job Alerts
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-change-password">
                          <i className="fa fa-fingerprint"></i> Change Passeord
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-chat">
                          <i className="fa fa-comments"></i>Chat
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
                {/* <!--Filter Short By--> */}
                <div className="twm-right-section-panel site-bg-gray">
                  {load === false ? (
                    <form onSubmit={handleSubmit}>
                      {/* <!--Basic Information--> */}
                      <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                          <h4 className="panel-tittle m-a0">
                            Basic Informations
                          </h4>
                        </div>
                        <div className="panel-body wt-panel-body p-a20 m-b30 ">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Your Name</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="username"
                                    type="text"
                                    value={state?.username}
                                    placeholder="Devid Smith"
                                  />
                                  <i className="fs-input-icon fa fa-user "></i>
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
                                    type="number"
                                    value={state?.phoneNumber}
                                    placeholder="(251) 1234-456-7890"
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
                                    name="company_Email"
                                    type="email"
                                    value={state?.email}
                                    placeholder="Devid@example.com"
                                  />
                                  <i className="fs-input-icon fas fa-at"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Website</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="websiteUrl"
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

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Qualification</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="qualification"
                                    type="text"
                                    placeholder="BTech"
                                  />
                                  <i className="fs-input-icon fa fa-user-graduate"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.qualification}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Language</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="language"
                                    type="text"
                                    placeholder="e.x English, Spanish"
                                  />
                                  <i className="fs-input-icon fa fa-language"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.language}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Job Category</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="jobCategory"
                                    type="text"
                                    placeholder="IT & Software"
                                  />
                                  <i className="fs-input-icon fa fa-border-all"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.jobCategory}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Experience</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="experience"
                                    type="text"
                                    placeholder="05 Years"
                                  />
                                  <i className="fs-input-icon fa fa-user-edit"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.experience}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Current Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="currentSalary"
                                    type="text"
                                    placeholder="65K"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.currentSalary}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Expected Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="expectedSalary"
                                    type="text"
                                    placeholder="75K"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.expectedSalary}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Age</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="age"
                                    type="text"
                                    placeholder="35 Years"
                                  />
                                  <i className="fs-input-icon fa fa-child"></i>
                                </div>
                                <p style={{ color: "red" }}>{formErrors.age}</p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Country</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="country"
                                    type="text"
                                    placeholder="USA"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.country}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>City</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="city"
                                    type="text"
                                    placeholder="Texas"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.city}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Postcode</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="pincode"
                                    type="text"
                                    placeholder="75462"
                                  />
                                  <i className="fs-input-icon fas fa-map-pin"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.pincode}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Full Address</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    onChange={handleChange}
                                    className="form-control"
                                    name="address"
                                    type="text"
                                    placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                                  />
                                  <i className="fs-input-icon fas fa-map-marker-alt"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.address}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Description</label>
                                <textarea
                                  className="form-control"
                                  name="description"
                                  onChange={handleChange}
                                  rows="3"
                                ></textarea>
                                <p style={{ color: "red" }}>
                                  {formErrors.description}
                                </p>
                              </div>
                            </div>

                            {/* <!--Social Network--> */}
                            <div className="panel panel-default">
                              <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">
                                  Social Network
                                </h4>
                              </div>
                              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                                <div className="row">
                                  <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="form-group">
                                      <label>Facebook</label>
                                      <div className="ls-inputicon-box">
                                        <input
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="facebook"
                                          type="text"
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
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="twitter"
                                          type="text"
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
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="linkedin"
                                          type="text"
                                          placeholder="https://in.linkedin.com/"
                                        />
                                        <i className="fs-input-icon fab fa-linkedin-in"></i>
                                      </div>
                                      <p style={{ color: "red" }}>
                                        {formErrors.linkedin}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="text-left">
                                      <button
                                        type="submit"
                                        className="site-button"
                                      >
                                        Save Changes
                                      </button>
                                      {message}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <form>
                      {/* <!--Basic Information--> */}
                      <div className="panel panel-default">
                        <div className="panel-heading wt-panel-heading p-a20">
                          <h4 className="panel-tittle m-a0">
                            Basic Informations
                          </h4>
                        </div>
                        <div className="panel-body wt-panel-body p-a20 m-b30 ">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Your Name</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    className="form-control"
                                    name="username"
                                    type="text"
                                    value=""
                                    placeholder={candidates?.username}
                                  />
                                  <i className="fs-input-icon fa fa-user "></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Phone</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    className="form-control"
                                    name="phone"
                                    type="number"
                                    value=""
                                    placeholder={candidates?.phoneNumber}
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
                                    disabled
                                    className="form-control"
                                    name="company_Email"
                                    type="email"
                                    placeholder={candidates?.email}
                                  />
                                  <i className="fs-input-icon fas fa-at"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Website</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="websiteUrl"
                                    placeholder={candidates?.websiteUrl}
                                    type="url"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.websiteUrl}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Qualification</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="qualification"
                                    placeholder={candidates?.qualification}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-user-graduate"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.qualification}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Language</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="language"
                                    placeholder={candidates?.language}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-language"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.language}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Job Category</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="jobCategory"
                                    placeholder={candidates?.jobCategory}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-border-all"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.jobCategory}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Experience</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="experience"
                                    placeholder={candidates?.experience}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-user-edit"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.experience}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Current Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="currentSalary"
                                    placeholder={candidates?.currentSalary}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.currentSalary}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Expected Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="expectedSalary"
                                    placeholder={candidates?.expectedSalary}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.expectedSalary}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Age</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="age"
                                    placeholder={candidates?.age}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-child"></i>
                                </div>
                                <p style={{ color: "red" }}>{formErrors.age}</p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Country</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="country"
                                    placeholder={candidates?.country}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.country}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>City</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="city"
                                    placeholder={candidates?.city}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.city}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Postcode</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="pincode"
                                    placeholder={candidates?.pincode}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fas fa-map-pin"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.pincode}
                                </p>
                              </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Full Address</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    disabled
                                    onChange={handleChange}
                                    className="form-control"
                                    name="address"
                                    placeholder={candidates?.address}
                                    type="text"
                                  />
                                  <i className="fs-input-icon fas fa-map-marker-alt"></i>
                                </div>
                                <p style={{ color: "red" }}>
                                  {formErrors.address}
                                </p>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Description</label>
                                <textarea
                                  className="form-control"
                                  name="description"
                                  onChange={handleChange}
                                  rows="3"
                                  placeholder={candidates?.description}
                                  disabled
                                ></textarea>
                                <p style={{ color: "red" }}>
                                  {formErrors.description}
                                </p>
                              </div>
                            </div>

                            {/* <!--Social Network--> */}
                            <div className="panel panel-default">
                              <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">
                                  Social Network
                                </h4>
                              </div>
                              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                                <div className="row">
                                  <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="form-group">
                                      <label>Facebook</label>
                                      <div className="ls-inputicon-box">
                                        <input
                                          disabled
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="facebook"
                                          placeholder={candidates?.facebook}
                                          type="text"
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
                                          disabled
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="twitter"
                                          placeholder={candidates?.twitter}
                                          type="text"
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
                                          disabled
                                          onChange={handleChange}
                                          className="form-control wt-form-control"
                                          name="linkedin"
                                          placeholder={candidates?.linkedin}
                                          type="text"
                                        />
                                        <i className="fs-input-icon fab fa-linkedin-in"></i>
                                      </div>
                                      <p style={{ color: "red" }}>
                                        {formErrors.linkedin}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="text-left">
                                      <button className="site-button" disabled>
                                        Save Changes
                                      </button>
                                      {message}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- OUR BLOG END --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default CandidateProfile;
