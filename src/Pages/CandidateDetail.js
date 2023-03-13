import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CandidateDetail = () => {
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
        setHire(response.data);

        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
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
                        <Link to="javascript:void(0)">Finance</Link>
                        <Link to="javascript:void(0)">Sales</Link>
                        <Link to="javascript:void(0)">Part-time</Link>
                        <Link to="javascript:void(0)">Administration</Link>
                        <Link to="javascript:void(0)">Retail</Link>
                        <Link to="javascript:void(0)">Engineering</Link>
                        <Link to="javascript:void(0)">Developer</Link>
                        <Link to="javascript:void(0)">Work from home</Link>
                        <Link to="javascript:void(0)">IT Consulting</Link>
                        <Link to="javascript:void(0)">Manufacturing</Link>
                      </div>
                    </div>

                    <h4 className="twm-s-title">Work Experience</h4>
                    <div className="twm-timing-list-wrap">
                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2012 to 2016</div>
                        <div className="twm-time-list-title">Bluetech, Inc</div>
                        <div className="twm-time-list-position">
                          Senior PHP Developer
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>

                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2016 to 2020</div>
                        <div className="twm-time-list-title">Amazon, Inc</div>
                        <div className="twm-time-list-position">
                          IT & Development
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>

                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2020 to 2023</div>
                        <div className="twm-time-list-title">BGoogle, Inc</div>
                        <div className="twm-time-list-position">
                          Senior UI / UX Designer and Developer{" "}
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="twm-s-title">Education & Training</h4>
                    <div className="twm-timing-list-wrap">
                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2004 to 2006</div>
                        <div className="twm-time-list-title">
                          BCA - Bachelor of Computer Applications
                        </div>
                        <div className="twm-time-list-position">
                          International University
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>

                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2006 to 2008</div>
                        <div className="twm-time-list-title">
                          MCA - Master of Computer Application
                        </div>
                        <div className="twm-time-list-position">
                          Middle East Technical University
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>

                      <div className="twm-timing-list">
                        <div className="twm-time-list-date">2008 to 2011</div>
                        <div className="twm-time-list-title">
                          Design Communication Visual
                        </div>
                        <div className="twm-time-list-position">
                          Design at Massachusetts Institute of Technology &
                          Marketing
                        </div>
                        <div className="twm-time-list-discription">
                          <p>
                            One of the main areas that I work on with my clients
                            is shedding these non-supportive beliefs and
                            replacing them with beliefs that will help them to
                            accomplish their desires.
                          </p>
                        </div>
                      </div>
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
                              <span className="twm-title">Offered Salary</span>
                              <div className="twm-s-info-discription">
                                ${candidate?.expectedSalary} / Year
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
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default CandidateDetail;
