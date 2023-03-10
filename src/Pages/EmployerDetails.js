import React from "react";
import "../Styles/style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { Link } from "react-router-dom";
const urlImg = "http://localhost:5000";
const EmployerDetails = () => {
  console.log("hiii");
  const [fetchAllcompanyDetails, setFetchAllcompanyDetails] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  const { id } = useParams();
  console.log(id, "id");
  // const id = sessionStorage.getItem("id");
  // console.log(id);
  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    // setIsLoading(true);
    fetch("http://localhost:5000/fetchAllompanyDetails", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setFetchAllcompanyDetails(response.message.sort().reverse());

        const filterData = response.message?.filter(
          (item, index) => item._id === id
        );
        setFetchData(filterData[0]);
        console.log(fetchData[0]);
        // setIsLoading(false);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

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
                  <h2 className="wt-title">Employer Detail</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index.html">Home</Link>
                  </li>
                  <li>Employer Detail</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- Employer Detail START --> */}
        <div className="section-full  p-t120 p-b90 bg-white">
          <div className="container">
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-12">
                  {/* <!-- Candidate detail START --> */}
                  <div className="cabdidate-de-info">
                    <div className="twm-employer-self-wrap">
                      <div className="twm-employer-self-info">
                        <div className="twm-employer-self-top">
                          <div className="twm-media-bg">
                            <img
                              src="/jobzilla/images/employer-bg.jpg"
                              alt="#"
                            />
                          </div>

                          <div className="twm-mid-content">
                            <div className="twm-media">
                              <img
                                src="/jobzilla/images/jobs-company/pic1.jpg"
                                alt="#"
                              />
                            </div>

                            <h4 className="twm-job-title">
                              {fetchData?.companyName}
                              {/* {fetchData?.companyName} */}
                            </h4>
                            <p className="twm-employer-address">
                              <i className="feather-map-pin"></i>
                              {fetchData?.address}
                            </p>
                            <Link
                              to={fetchData?.websiteUrl}
                              className="twm-employer-websites site-text-primary"
                            >
                              {fetchData?.websiteUrl}
                            </Link>
                            <div className="twm-employer-self-bottom">
                              <Link
                                to=""
                                className="site-button outline-primary"
                              >
                                Add Review
                              </Link>
                              <Link to="" className="site-button">
                                Follow Us
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="twm-s-title">About Company</h4>

                    <p>
                      UUt enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur?{" "}
                    </p>

                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi.
                    </p>
                    <p>
                      Opossum but dramatically despite expeditiously that
                      jeepers loosely yikes that as or eel underneath kept and
                      slept compactly far purred sure abidingly up above fitting
                      to strident wiped set waywardly far the and pangolin horse
                      approving paid chuckled cassowary oh above a much opposite
                      far much hypnotically more therefore wasp less that hey
                      apart well like while superbly orca and far hence one.Far
                      much that one rank beheld bluebird after outside ignobly
                      allegedly more when oh arrogantly vehement irresistibly
                      fussy.?{" "}
                    </p>

                    <h4 className="twm-s-title">Responsabilities</h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check"></i>
                        Establish and promote design guidelines, best practices
                        and standards.
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Accurately estimate design tickets during planning
                        sessions.
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Partnering with product and engineering to translate
                        business and user goals.
                      </li>
                    </ul>

                    <h4 className="twm-s-title">Share Profile</h4>
                    <div className="twm-social-tags">
                      <Link to="" className="fb-clr">
                        Facebook
                      </Link>
                      <Link to="" className="tw-clr">
                        Twitter
                      </Link>
                      <Link to="" className="link-clr">
                        Linkedin
                      </Link>
                      <Link to="" className="whats-clr">
                        Whatsapp
                      </Link>
                      <Link to="" className="pinte-clr">
                        Pinterest
                      </Link>
                    </div>

                    <div className="twm-two-part-section">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <h4 className="twm-s-title">Office Photos</h4>
                          <div className="tw-sidebar-gallery">
                            <ul>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic1.jpg"
                                    title="Title 1"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic1.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic1.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic2.jpg"
                                    title="Title 2"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic2.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic2.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb ">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic3.jpg"
                                    title="Title 3"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic3.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic3.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic4.jpg"
                                    title="Title 4"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic4.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic4.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic5.jpg"
                                    title="Title 5"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic5.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic5.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic6.jpg"
                                    title="Title 6"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic6.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic6.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic7.jpg"
                                    title="Title 7"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic1.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic7.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic8.jpg"
                                    title="Title 8"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic2.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic8.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb ">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic9.jpg"
                                    title="Title 9"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic3.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic9.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic10.jpg"
                                    title="Title 10"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic4.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic10.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic11.jpg"
                                    title="Title 11"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic5.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic11.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>

                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="images/gallery/pic12.jpg"
                                    title="Title 12"
                                    data-lcl-author=""
                                    data-lcl-thumb="images/gallery/thumb/pic6.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic12.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image"></i>
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <h4 className="twm-s-title">Video</h4>
                          <div
                            className="video-section-first"
                            style={{
                              backgroundImage:
                                "url(jobzilla/images/video-bg.jpg)",
                            }}
                          >
                            <Link
                              to="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                              className="mfp-video play-now-video"
                            >
                              <i className="icon feather-play"></i>
                              <span className="ripple"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h4 className="twm-s-title">Available Jobs</h4>
                    <div className="twm-jobs-list-wrap">
                      <ul>
                        <li>
                          <div className="twm-jobs-list-style1 mb-5">
                            <div className="twm-media">
                              <img
                                src="/jobzilla/images/jobs-company/pic1.jpg"
                                alt="#"
                              />
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="job-detail.html"
                                className="twm-job-title"
                              >
                                <h4>
                                  Senior Web Designer
                                  <span className="twm-job-post-duration">
                                    / 1 days ago
                                  </span>
                                </h4>
                              </Link>
                              <p className="twm-job-address">
                                1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                              </p>
                              <Link
                                to="https://themeforest.net/user/thewebmax/portfolio"
                                className="twm-job-websites site-text-primary"
                              >
                                https://thewebmax.com
                              </Link>
                            </div>
                            <div className="twm-right-content">
                              <div className="twm-jobs-category green">
                                <span className="twm-bg-green">New</span>
                              </div>
                              <div className="twm-jobs-amount">
                                $1000 <span>/ Month</span>
                              </div>
                              <Link
                                to="job-detail.html"
                                className="twm-jobs-browse site-text-primary"
                              >
                                Browse Job
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="twm-jobs-list-style1 mb-5">
                            <div className="twm-media">
                              <img
                                src="/jobzilla/images/jobs-company/pic2.jpg"
                                alt="#"
                              />
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="job-detail.html"
                                className="twm-job-title"
                              >
                                <h4>
                                  Senior Stock Technician
                                  <span className="twm-job-post-duration">
                                    / 15 days ago
                                  </span>
                                </h4>
                              </Link>
                              <p className="twm-job-address">
                                1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                              </p>
                              <Link
                                to="https://themeforest.net/user/thewebmax/portfolio"
                                className="twm-job-websites site-text-primary"
                              >
                                https://thewebmax.com
                              </Link>
                            </div>
                            <div className="twm-right-content">
                              <div className="twm-jobs-category green">
                                <span className="twm-bg-brown">Intership</span>
                              </div>
                              <div className="twm-jobs-amount">
                                $1000 <span>/ Month</span>
                              </div>
                              <Link
                                to="job-detail.html"
                                className="twm-jobs-browse site-text-primary"
                              >
                                Browse Job
                              </Link>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="twm-jobs-list-style1 mb-5">
                            <div className="twm-media">
                              <img
                                src="/jobzilla/images/jobs-company/pic3.jpg"
                                alt="#"
                              />
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="job-detail.html"
                                className="twm-job-title"
                              >
                                <h4 className="twm-job-title">
                                  IT Department Manager
                                  <span className="twm-job-post-duration">
                                    / 6 Month ago
                                  </span>
                                </h4>
                              </Link>
                              <p className="twm-job-address">
                                1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                              </p>
                              <Link
                                to="https://themeforest.net/user/thewebmax/portfolio"
                                className="twm-job-websites site-text-primary"
                              >
                                https://thewebmax.com
                              </Link>
                            </div>
                            <div className="twm-right-content">
                              <div className="twm-jobs-category green">
                                <span className="twm-bg-purple">Fulltime</span>
                              </div>
                              <div className="twm-jobs-amount">
                                $1000 <span>/ Month</span>
                              </div>
                              <Link
                                to="job-detail.html"
                                className="twm-jobs-browse site-text-primary"
                              >
                                Browse Job
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
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
                                $20 / Day
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-clock"></i>
                              <span className="twm-title">Experience</span>
                              <div className="twm-s-info-discription">
                                6 Year
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
                                +291 560 56456
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-at"></i>
                              <span className="twm-title">Email</span>
                              <div className="twm-s-info-discription">
                                thewebmaxdemo@gmail.com
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-book-reader"></i>
                              <span className="twm-title">Qualification</span>
                              <div className="twm-s-info-discription">
                                Developer
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-map-marker-alt"></i>
                              <span className="twm-title">Address</span>
                              <div className="twm-s-info-discription">
                                1363-1385 Sunset Blvd Angeles, CA 90026 ,USA
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
        {/* <!-- Employer Detail END -->           */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default EmployerDetails;
