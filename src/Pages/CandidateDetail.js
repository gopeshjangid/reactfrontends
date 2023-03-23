import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useCandidatePersonalResumeApi from "../FetchApi/CandidatePersonalResumeApi";

const CandidateDetail = () => {


  const navigate = useNavigate()
  const [Login,setLogin] = useState(false)

  const accountType = localStorage.getItem("accountType");
  console.log(accountType)
  useEffect(() => {
if(accountType==="candidate"){
  setLogin(false)
}else{
  setLogin(true)
}
  },[])
  const candidatePesonalResume = useCandidatePersonalResumeApi();
  console.log(candidatePesonalResume);

  const [getAllUser, setGetAllUser] = useState([]);
  const [candidate, setCandidate] = useState([]);
  const [hire, setHire] = useState();

  const { id } = useParams();
  console.log(id, "id");

  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    // setIsLoading(true);
    fetch("http://localhost:5000/getAllUser", {
      method: "GET",

      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setGetAllUser(response.message);
        const filterData = response.message?.filter(
          (item, index) => item._id === id
        );

        setCandidate(filterData[0]);
        console.log(filterData);
        // setIsLoading(false);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

  const HireCandidate = () => {
    const token = localStorage.getItem("token");
    console.log(id);
    console.log(token);

    axios
      .post(
        "http://localhost:5000/hireCandidate",
        JSON.stringify({ hireId: id }),
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `${token}`,
          },
        }
      )

      .then((response) => {
        setHire(response.data.message);

        if (response.data.message === "Hire Successfull") {
          document.getElementById("openPopup").click();
        }

        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const [UserResume, setUserResume] = useState([]);
  useEffect(() => {
    console.log(id);
    // setIsLoading(true);
    fetch(`http://localhost:5000/findUserResume/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        // setGetAllUser(response.message);
        // const filterData = response.message?.filter(
        //   (item, index) => item._id === id
        // );

        // setCandidate(filterData[0]);
        // console.log(filterData);
        // setIsLoading(false);

        setUserResume(response.message[0]);

        console.log(response.message[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

  return (
    <div>
      {/* <!-- CONTENT START --> */}
      {Login === false ? (
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
                  <h2 className="wt-title">Candidate Detail</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>Candidate Detail</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- OUR BLOG START --> */}
        <div className="section-full  p-t120 p-b90 bg-white">
          <div className="container">
            {/* <!-- BLOG SECTION START --> */}
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-12">
                  {/* <!-- Candidate detail START --> */}
                  <div className="cabdidate-de-info">
                    <div
                      className="twm-candi-self-wrap overlay-wraper"
                      style={{
                        backgroundImage:
                          "url(/jobzilla/images/candidates/candidate-bg.jpg)",
                      }}
                    >
                      <div className="overlay-main site-bg-primary opacity-01"></div>
                      <div className="twm-candi-self-info">
                        <div className="twm-candi-self-top">
                          <div className="twm-candi-fee">
                            {candidate?.expectedSalary} / Year
                          </div>
                          <div className="twm-media">
                            <img
                              src="/jobzilla/images/candidates/pic2.jpg"
                              alt="#"
                            />
                          </div>
                          <div className="twm-mid-content">
                            <h4 className="twm-job-title">
                              {candidate?.username}{" "}
                            </h4>

                            <p>{candidate?.qualification}</p>
                            <p className="twm-candidate-address">
                              <i className="feather-map-pin"></i>
                              {candidate?.address}
                            </p>
                          </div>
                        </div>
                        <div className="twm-candi-self-bottom">
                          <Link
                            onClick={HireCandidate}
                            className="site-button outline-white"
                          >
                            Hire Me Now
                          </Link>
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#hireCandidate_popup"
                            className="site-button outline-white "
                            style={{ visibility: "hidden" }}
                            data-toggle="modal"
                            id="openPopup"
                          >
                            Hire Me Now
                          </button>

                          <div
                            class="modal fade"
                            id="hireCandidate_popup"
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
                                  <h4>Hire Successfull</h4>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary">
                                    Understood
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Link to="" className="site-button secondry">
                            Download CV
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h4 className="twm-s-title">About Me</h4>

                    <p>{candidate?.description}</p>

                    <h4 className="twm-s-title">Skills</h4>

                    <div className="tw-sidebar-tags-wrap">
                      <div className="tagcloud">
                        {UserResume?.tableData?.map((friend) => {
                          return (
                            <>
                              {" "}
                              <Link>{friend.fullName}</Link>
                            </>
                          );
                        })}
                      </div>
                    </div>

                    <h4 className="twm-s-title">Work Experience</h4>
                    <div className="twm-timing-list-wrap">
                      {UserResume?.employer?.map((item) => {
                        return (
                          <div className="twm-timing-list">
                            <div className="twm-time-list-date">
                              {item.startDate} to {item.EndDate}
                            </div>
                            <div className="twm-time-list-title">
                              {item.ComapnyName}
                            </div>
                            <div className="twm-time-list-position">
                              {item.Designation}
                            </div>
                            <div className="twm-time-list-discription">
                              <p>{item.JobProfile}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <h4 className="twm-s-title">Education & Training</h4>
                    <div className="twm-timing-list-wrap">
                      {UserResume?.education?.map((item) => {
                        return (
                          <div className="twm-timing-list">
                            <div className="twm-time-list-date">
                              {/* <div className="twm-time-list-date">
                                2006 to 2008
                              </div> */}
                            </div>
                            <div className="twm-time-list-title">
                              {item.education}
                            </div>
                            <div className="twm-time-list-position">
                              {item.course}
                            </div>
                            <div className="twm-time-list-discription">
                              <p>{item.institute}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <h4 className="twm-s-title">Projects</h4>
                    <div className="twm-timing-list-wrap">
                      {UserResume?.project?.map((item) => {
                        return (
                          <div className="twm-timing-list">
                            <div className="twm-time-list-date">
                              {item.projectStartDate} to {item.projectEndDate}
                            </div>
                            <div className="twm-time-list-title">
                              {item.ProjectClientName}
                            </div>
                            <div className="twm-time-list-position">
                              {item.ProjectTitle}
                            </div>
                            <div className="twm-time-list-position">
                              {" "}
                              {item.ProjectEducation}
                            </div>
                            <div className="twm-time-list-discription">
                              <p>{item.projectDetail}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 rightSidebar">
                  <div className="side-bar-2">
                    <div className="twm-s-map mb-5">
                      <h4 className="section-head-small mb-4">Location</h4>
                      <div className="twm-s-map-iframe">
                        <iframe
                          height="270"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                        ></iframe>
                      </div>
                    </div>

                    <div className="twm-s-info-wrap mb-5">
                      <h4 className="section-head-small mb-4">Profile Info</h4>
                      <div className="twm-s-info">
                        <ul>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-money-bill-wave"></i>
                              <span className="twm-title">Expected Salary</span>
                              <div className="twm-s-info-discription">
                                ${candidate?.expectedSalary} / Month
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-clock"></i>
                              <span className="twm-title">Experience</span>
                              <div className="twm-s-info-discription">
                                {candidate?.experience} Year
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-venus-mars"></i>
                              <span className="twm-title">Gender</span>
                              <div className="twm-s-info-discription">Male</div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-mobile-alt"></i>
                              <span className="twm-title">Phone</span>
                              <div className="twm-s-info-discription">
                                {candidate?.phoneNumber}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-at"></i>
                              <span className="twm-title">Email</span>
                              <div className="twm-s-info-discription">
                                {candidate?.email}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-book-reader"></i>
                              <span className="twm-title">Qualification</span>
                              <div className="twm-s-info-discription">
                                {candidate?.qualification}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-map-marker-alt"></i>
                              <span className="twm-title">Address</span>
                              <div className="twm-s-info-discription">
                                {candidate?.address}
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="twm-s-contact-wrap mb-5">
                      <h4 className="section-head-small mb-4">Contact us</h4>
                      <div className="twm-s-contact">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <input
                                name="username"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <input
                                name="email"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Email"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <input
                                name="phone"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Phone"
                              />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <textarea
                                name="message"
                                className="form-control"
                                rows="3"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <button type="submit" className="site-button">
                              Submit Now
                            </button>
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
        {/* <!-- OUR BLOG END -->           */}
      </div>
      ):(
        navigate("/")
      )}
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default CandidateDetail;
