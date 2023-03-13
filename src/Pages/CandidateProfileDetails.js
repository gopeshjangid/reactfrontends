import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const CandidateProfileDetails = () => {
  const [candidateDetails, setCandidateDetails] = useState([]);

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

  // const [message, setMessage] = useState();
  // const [data, setData] = useState();
  // const [load, setLoad] = useState(false);

  // const [error, setError] = useState()

  // const [state, setState] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...User, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   const {
    //     websiteUrl,
    //     qualification,
    //     language,
    //     jobCategory,
    //     experience,
    //     currentSalary,
    //     expectedSalary,
    //     age,
    //     country,
    //     city,
    //     pincode,
    //     address,
    //     description,
    //     facebook,
    //     linkedin,
    //     twitter,
    //   } = User;

    //   const object = {
    //     websiteUrl: websiteUrl.trim(),
    //     qualification: qualification.trim(),
    //     language: language.trim(),
    //     jobCategory: jobCategory.trim(),
    //     experience: experience.trim(),
    //     currentSalary: currentSalary.trim(),
    //     expectedSalary: expectedSalary.trim(),
    //     age: age.trim(),
    //     country: country.trim(),
    //     city: city.trim(),
    //     pincode: pincode.trim(),
    //     address: address.trim(),
    //     description: description.trim(),
    //     facebook: facebook.trim(),
    //     linkedin: linkedin.trim(),
    //     twitter: twitter.trim(),
    //   };

    setFormErrors(validate(User));

    //   // add entity - POST
    //   // e.preventDefault();
    //   // creates entity

    //   // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    //   // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    //   // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    //   if (
    //     websiteUrl.trim() === "" ||
    //     qualification.trim() === "" ||
    //     language.trim() === "" ||
    //     jobCategory.trim() === "" ||
    //     experience.trim() === "" ||
    //     currentSalary.trim() === "" ||
    //     expectedSalary.trim() === "" ||
    //     age.trim() === "" ||
    //     country.trim() === "" ||
    //     city.trim() === "" ||
    //     pincode.trim() === "" ||
    //     address.trim() === "" ||
    //     description.trim() === "" ||
    //     facebook.trim() === "" ||
    //     linkedin.trim() === "" ||
    //     twitter.trim() === ""
    //   ) {
    //     return;
    //   } else {
    //     const tokenID = localStorage.getItem("token");
    //     fetch("http://localhost:5000/canditateDetails", {
    //       method: "POST",
    //       mode: "cors",
    //       body: JSON.stringify(object),
    //       headers: {
    //         "Content-type": "application/json",
    //         Authorization: `${tokenID}`,
    //       },
    //     })
    //       .then((response) => response.json(console.log(response)))

    //       .then((json) => {
    //         setData({
    //           User: json,
    //         });

    //         //   if (json.message === "successfully register") {
    //         //     navigate("/login");
    //         //   }

    //         // setMessage(json.message)
    //         console.log(json);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //     // setState(valid(json.message));

    setIsSubmit(true);
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  // useEffect(() => {
  //   const res = data?.User?.message;
  //   setMessage(res);
  // }, [data]);

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

  const [candidates, setCandidates] = useState([]);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    fetch("http://localhost:5000/canditateDetails", {
      method: "GET",
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
        //   (item, index) => item.profileStatus === "complete"
        // );
        // setCandidate(filterData);

        // setMessage(json.message)
        console.log(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
    // setState(valid(json.message));
  }, []);
  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div className="page-content">
        {/* <!-- INNER PAGE BANNER --> */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(/jobzilla/images/banner/1.jpg)" }}
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
                      <h4>Randall Henderson </h4>
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
                      <li className="">
                        <Link to="/candidate-profile">
                          <i className="fa fa-user"></i> Make Profile
                        </Link>
                      </li>
                      <li className="active">
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
                                    onChange={(e) =>
                                      setUserName(e.target.value)
                                    }
                                    type="text"
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
                                    name="phoneNumber"
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="number"
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
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
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
                                    className="form-control"
                                    name="websiteUrl"
                                    value={websiteUrl}
                                    onChange={(e) =>
                                      setWebsiteUrl(e.target.value)
                                    }
                                    type="text"
                                    placeholder="https://devsmith.net/"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Qualification</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="qualification"
                                    value={qualification}
                                    onChange={(e) =>
                                      setQualification(e.target.value)
                                    }
                                    type="text"
                                    placeholder="BTech"
                                  />
                                  <i className="fs-input-icon fa fa-user-graduate"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Language</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="language"
                                    value={language}
                                    onChange={(e) =>
                                      setLanguage(e.target.value)
                                    }
                                    type="text"
                                    placeholder="e.x English, Spanish"
                                  />
                                  <i className="fs-input-icon fa fa-language"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Job Category</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="jobCategory"
                                    onChange={(e) =>
                                      setJobCategory(e.target.value)
                                    }
                                    type="text"
                                    value={jobCategory}
                                    placeholder="IT & Software"
                                  />
                                  <i className="fs-input-icon fa fa-border-all"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Experience</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="experience"
                                    onChange={(e) =>
                                      setExperience(e.target.value)
                                    }
                                    type="text"
                                    value={experience}
                                    placeholder="05 Years"
                                  />
                                  <i className="fs-input-icon fa fa-user-edit"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Current Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="currentSalary"
                                    onChange={(e) =>
                                      setCurrentSalary(e.target.value)
                                    }
                                    type="text"
                                    value={currentSalary}
                                    placeholder="65K"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Expected Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="expectedSalary"
                                    onChange={(e) =>
                                      setEexpectedSalary(e.target.value)
                                    }
                                    type="text"
                                    value={expectedSalary}
                                    placeholder="75K"
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Age</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    type="text"
                                    placeholder="35 Years"
                                  />
                                  <i className="fs-input-icon fa fa-child"></i>
                                </div>
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
                                    type="text"
                                    value={country}
                                    placeholder="USA"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>City</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    value={city}
                                    placeholder="Texas"
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Postcode</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="pincode"
                                    onChange={(e) => setPincode(e.target.value)}
                                    type="text"
                                    value={pincode}
                                    placeholder="75462"
                                  />
                                  <i className="fs-input-icon fas fa-map-pin"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Full Address</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    value={address}
                                    placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                                  />
                                  <i className="fs-input-icon fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Description</label>
                                <textarea
                                  className="form-control"
                                  name="description"
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  value={description}
                                  rows="3"
                                ></textarea>
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
                                          className="form-control wt-form-control"
                                          name="facebook"
                                          onChange={(e) =>
                                            setFacebook(e.target.value)
                                          }
                                          type="text"
                                          value={facebook}
                                          placeholder="https://www.facebook.com/"
                                        />
                                        <i className="fs-input-icon fab fa-facebook-f"></i>
                                      </div>
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
                                          type="text"
                                          value={twitter}
                                          placeholder="https://twitter.com/"
                                        />
                                        <i className="fs-input-icon fab fa-twitter"></i>
                                      </div>
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
                                          type="text"
                                          value={linkedin}
                                          placeholder="https://in.linkedin.com/"
                                        />
                                        <i className="fs-input-icon fab fa-linkedin-in"></i>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="text-left">
                                      {candidateDetails?.profileStatus ===
                                      "complete" ? (
                                        <button
                                          type="submit"
                                          className="site-button"
                                        >
                                          Save Changes
                                        </button>
                                      ) : (
                                        <button
                                          type="submit"
                                          className="site-button "
                                          disabled
                                        >
                                          Save Changes
                                        </button>
                                      )}
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
                                    placeholder="Devid Smith"
                                    disabled
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
                                    name="phoneNumber"
                                    type="number"
                                    placeholder="(251) 1234-456-7890"
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
                                    name="email"
                                    type="email"
                                    placeholder="Devid@example.com"
                                    disabled
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
                                    className="form-control"
                                    name="websiteUrl"
                                    type="text"
                                    placeholder="https://devsmith.net/"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Qualification</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="qualification"
                                    type="text"
                                    placeholder="BTech"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-user-graduate"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label>Language</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="language"
                                    type="text"
                                    placeholder="e.x English, Spanish"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-language"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Job Category</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="jobCategory"
                                    type="text"
                                    placeholder="IT & Software"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-border-all"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Experience</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="experience"
                                    type="text"
                                    placeholder="05 Years"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-user-edit"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Current Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="currentSalary"
                                    type="text"
                                    placeholder="65K"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Expected Salary</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="expectedSalary"
                                    type="text"
                                    placeholder="75K"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-dollar-sign"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Age</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="age"
                                    type="text"
                                    placeholder="35 Years"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-child"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Country</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="country"
                                    type="text"
                                    placeholder="USA"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
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
                                    placeholder="Texas"
                                    disabled
                                  />
                                  <i className="fs-input-icon fa fa-globe-americas"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-4 col-lg-12 col-md-12">
                              <div className="form-group city-outer-bx has-feedback">
                                <label>Postcode</label>
                                <div className="ls-inputicon-box">
                                  <input
                                    className="form-control"
                                    name="pincode"
                                    type="text"
                                    placeholder="75462"
                                    disabled
                                  />
                                  <i className="fs-input-icon fas fa-map-pin"></i>
                                </div>
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
                                    placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                                    disabled
                                  />
                                  <i className="fs-input-icon fas fa-map-marker-alt"></i>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Description</label>
                                <textarea
                                  className="form-control"
                                  name="description"
                                  rows="3"
                                ></textarea>
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
                                          className="form-control wt-form-control"
                                          name="facebook"
                                          type="text"
                                          placeholder="https://www.facebook.com/"
                                          disabled
                                        />
                                        <i className="fs-input-icon fab fa-facebook-f"></i>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="form-group">
                                      <label>Twitter</label>
                                      <div className="ls-inputicon-box">
                                        <input
                                          className="form-control wt-form-control"
                                          name="twitter"
                                          type="text"
                                          placeholder="https://twitter.com/"
                                          disabled
                                        />
                                        <i className="fs-input-icon fab fa-twitter"></i>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-xl-4 col-lg-6 col-md-12">
                                    <div className="form-group">
                                      <label>linkedin</label>
                                      <div className="ls-inputicon-box">
                                        <input
                                          className="form-control wt-form-control"
                                          name="linkedin"
                                          type="text"
                                          placeholder="https://in.linkedin.com/"
                                          disabled
                                        />
                                        <i className="fs-input-icon fab fa-linkedin-in"></i>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-12 col-md-12">
                                    <div className="text-left">
                                      {candidateDetails?.profileStatus ===
                                      "complete" ? (
                                        <button
                                          type="submit"
                                          className="site-button"
                                        >
                                          Save Changes
                                        </button>
                                      ) : (
                                        <button
                                          type="submit"
                                          className="site-button "
                                          disabled
                                        >
                                          Save Changes
                                        </button>
                                      )}
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

export default CandidateProfileDetails;
