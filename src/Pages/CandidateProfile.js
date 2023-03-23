import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const CandidateProfile = () => {
  const navigate = useNavigate()
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
  const [load, setLoad] = useState(true);

  // const [error, setError] = useState()

  const [state, setState] = useState([]);
  const [candidates, setCandidates] = useState([]);

  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [qualification, setQualification] = useState("");
  const [language, setLanguage] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");

  const [expectedSalary, setEexpectedSalary] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };
  console.log("userInfo.filepreview", userInfo?.filepreview);
  // const [isSucces, setSuccess] = useState(null);

  // const handleChange = (e)=>  {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   let User = { ...User };
  //   setUser({ ...User, [name]: value });
  //   console.log(User);
  //   // const { name, value } = e.target;
  //   // setUser({ ...User, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // if (
    //   websiteUrl.trim() === "" ||
    //   qualification.trim() === "" ||
    //   language.trim() === "" ||
    //   jobCategory.trim() === "" ||
    //   experience.trim() === "" ||
    //   currentSalary.trim() === "" ||
    //   expectedSalary.trim() === "" ||
    //   age.trim() === "" ||
    //   country.trim() === "" ||
    //   city.trim() === "" ||
    //   pincode.trim() === "" ||
    //   address.trim() === "" ||
    //   description.trim() === "" ||
    //   facebook.trim() === "" ||
    //   linkedin.trim() === "" ||
    //   twitter.trim() === ""
    // ) {
    //   return;
    // } else {

    const uploadImg = userInfo?.filepreview;
    console.log(uploadImg);
    const tokenID = localStorage.getItem("token");
    await fetch("http://localhost:5000/canditateDetails", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        uploadImg,
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
        if (json.message === "successfuly created user details") {
          document.getElementById("openPopup").click();
        }

        // if (res.data.success === 1) {
        //   setSuccess("Image upload successfully");
        // }
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

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(User);
  //     // fetchData()
  //   }
  // }, []);

  // const validate = (values) => {
  //   const errors = {};

  //   const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
  //   if (!values.websiteUrl) {
  //     errors.websiteUrl = "!'Please Enter Your websiteUrl'";
  //   }
  //   if (!values.qualification) {
  //     errors.qualification = "!'Please Enter Your qualification '";
  //   }
  //   if (!values.language) {
  //     errors.language = "!'Please Enter Your language '";
  //   }
  //   if (!values.jobCategory) {
  //     errors.jobCategory = "!'Please Enter Your JobCategory'";
  //   }
  //   if (!values.experience) {
  //     errors.experience = "!'Please Enter Your experience'";
  //   }
  //   if (!values.currentSalary) {
  //     errors.currentSalary = "!'Please Enter Your currentSalary'";
  //   }
  //   if (!values.expectedSalary) {
  //     errors.expectedSalary = "!'Please Enter Your expectedSalary'";
  //   }
  //   if (!values.age) {
  //     errors.age = "!'Please Enter Your age'";
  //   }

  //   if (!values.country) {
  //     errors.country = "!'Please Enter country'";
  //   }
  //   if (!values.city) {
  //     errors.city = "!'Please Enter city'";
  //   }
  //   if (!values.pincode) {
  //     errors.pincode = "!'Please Enter pincode'";
  //   }
  //   if (!values.address) {
  //     errors.address = "!'Please Enter address'";
  //   }
  //   if (!values.description) {
  //     errors.description = "!'Please Enter description'";
  //   }
  //   if (!values.facebook) {
  //     errors.facebook = "!'Please Enter facebook'";
  //   }
  //   if (!values.linkedin) {
  //     errors.linkedin = "!'Please Enter linkedin'";
  //   }
  //   if (!values.twitter) {
  //     errors.twitter = "!'Please Enter twitter'";
  //   }
  //   return errors;
  // };

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
          setUserName(json.message.username);
          setPhone(json.message.phoneNumber);
          setEmail(json.message.email);
          setWebsiteUrl(json.message.websiteUrl);

          setQualification(json.message.qualification);
          setLanguage(json.message.language);

          setJobCategory(json.message.jobCategory);
          setExperience(json.message.experience);
          setCurrentSalary(json.message.currentSalary);

          setEexpectedSalary(json.message.expectedSalary);
          setAge(json.message.age);

          setCountry(json.message.country);
          setCity(json.message.city);
          setPincode(json.message.pincode);
          setAddress(json.message.address);
          setDescription(json.message.description);
          setFacebook(json.message.facebook);
          setLinkedin(json.message.linkedin);
          setTwitter(json.message.twitter);
          setLoad(false);

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
            {load === false ? (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                    <div className="side-bar-st-1">
                      <div className="twm-candidate-profile-pic">
                        <img src="jobzilla/images/user-avtar/pic4.jpg" />
                        <div className="upload-btn-wrapper">
                          <div id="upload-image-grid">
                            {userInfo.filepreview !== null ? (
                              <img
                                src={userInfo.filepreview}
                                alt="UploadImage"
                              />
                            ) : null}
                          </div>
                          <button className="site-button button-sm">
                            Upload Photo
                          </button>
                          <input
                            type="file"
                            name="myfile"
                            onChange={handleInputChange}
                            id="file-uploader"
                            accept=".jpg, .jpeg, .png"
                          />
                        </div>
                      </div>

                      {/* {isSucces !== null ? <h4> {isSucces} </h4> : null} */}
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
                              <i className="fa fa-user"></i> MY Profile
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
                              <i className="fa fa-fingerprint"></i> Change
                              Passeord
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
                                    onChange={(e) =>
                                      setUserName(e.target.value)
                                    }
                                    value={userName}
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
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={Email}
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setWebsiteUrl(e.target.value)
                                    }
                                    className="form-control"
                                    name="websiteUrl"
                                    type="url"
                                    value={websiteUrl}
                                    placeholder="https://devsmith.net/"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setQualification(e.target.value)
                                    }
                                    className="form-control"
                                    name="qualification"
                                    type="text"
                                    value={qualification}
                                    placeholder="BTech"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setLanguage(e.target.value)
                                    }
                                    className="form-control"
                                    name="language"
                                    type="text"
                                    value={language}
                                    placeholder="e.x English, Spanish"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setJobCategory(e.target.value)
                                    }
                                    className="form-control"
                                    name="jobCategory"
                                    value={jobCategory}
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setExperience(e.target.value)
                                    }
                                    className="form-control"
                                    name="experience"
                                    value={experience}
                                    type="number"
                                    placeholder="05 Years"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setCurrentSalary(e.target.value)
                                    }
                                    className="form-control"
                                    name="currentSalary"
                                    value={currentSalary}
                                    type="number"
                                    placeholder="65K"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) =>
                                      setEexpectedSalary(e.target.value)
                                    }
                                    className="form-control"
                                    name="expectedSalary"
                                    value={expectedSalary}
                                    type="number"
                                    placeholder="75K"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="form-control"
                                    name="age"
                                    value={age}
                                    type="number"
                                    placeholder="35 Years"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="form-control"
                                    name="country"
                                    value={country}
                                    type="text"
                                    placeholder="USA"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="form-control"
                                    name="city"
                                    value={city}
                                    type="text"
                                    placeholder="Texas"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) => setPincode(e.target.value)}
                                    className="form-control"
                                    name="pincode"
                                    value={pincode}
                                    type="number"
                                    placeholder="75462"
                                    required
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
                                    // onChange={handleChange}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"
                                    name="address"
                                    value={address}
                                    type="text"
                                    placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                                    required
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
                                  value={description}
                                  // onChange={handleChange}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  rows="3"
                                  required
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
                                          // onChange={handleChange}
                                          onChange={(e) =>
                                            setFacebook(e.target.value)
                                          }
                                          className="form-control wt-form-control"
                                          name="facebook"
                                          value={facebook}
                                          type="url"
                                          placeholder="https://www.facebook.com/"
                                          required
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
                                          // onChange={handleChange}
                                          onChange={(e) =>
                                            setTwitter(e.target.value)
                                          }
                                          className="form-control wt-form-control"
                                          name="twitter"
                                          value={twitter}
                                          type="url"
                                          placeholder="https://twitter.com/"
                                          required
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
                                          // onChange={handleChange}
                                          onChange={(e) =>
                                            setLinkedin(e.target.value)
                                          }
                                          className="form-control wt-form-control"
                                          name="linkedin"
                                          value={linkedin}
                                          type="url"
                                          placeholder="https://in.linkedin.com/"
                                          required
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
                                        Submit
                                      </button>
                                      <button
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#completeprofile"
                                        className="site-button "
                                        style={{ visibility: "hidden" }}
                                        data-toggle="modal"
                                        id="openPopup"
                                      >
                                        Submit
                                      </button>

                                      <div
                                        class="modal fade"
                                        id="completeprofile"
                                        data-bs-backdrop="static"
                                        data-bs-keyboard="false"
                                        tabindex="-1"
                                        aria-labelledby="staticBackdropLabel"
                                        aria-hidden="true"
                                        style={{ background: "#00000059" }}
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
                                            <div class="modal-body text-center">
                                              <img
                                                src="/jobzilla/images/423-4236284_png-images-success-icon-png-transparent-png-download.png"
                                                className="w-25 "
                                              />
                                              <h4>{message}</h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                              <i className="fa fa-user"></i> MY Profile
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
                              <i className="fa fa-fingerprint"></i> Change
                              Passeord
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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

                                    className="form-control"
                                    name="experience"
                                    placeholder={candidates?.experience}
                                    type="number"
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
                                    // onChange={handleChange}

                                    className="form-control"
                                    name="currentSalary"
                                    placeholder={candidates?.currentSalary}
                                    type="number"
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
                                    // onChange={handleChange}

                                    className="form-control"
                                    name="expectedSalary"
                                    placeholder={candidates?.expectedSalary}
                                    type="number"
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
                                    // onChange={handleChange}

                                    className="form-control"
                                    name="age"
                                    placeholder={candidates?.age}
                                    type="number"
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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                    // onChange={handleChange}

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
                                  // onChange={handleChange}

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
                                          // onChange={handleChange}

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
                                          // onChange={handleChange}

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
                                          // onChange={handleChange}

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
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        {/* <!-- OUR BLOG END --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default CandidateProfile;
