import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EmployerJobDetail = () => {
  const { id } = useParams();
  console.log(id, "id");
  const [getAllJob, setGetAllJob] = useState([]);
  const [employer, setEmployer] = useState([]);
  const [applyJob, setApplyJob] = useState();

  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:5000/getAllJob", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setGetAllJob(response.message);
        const filterData = response.message?.filter(
          (item, index) => item._id === id
        );
        setEmployer(filterData[0]);
        console.log(filterData);
        console.log(response.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const ApplyJob = () => {
    const token = localStorage.getItem("token");
    console.log(id);
    console.log(token);

    axios
      .post("http://localhost:5000/applyJob", JSON.stringify({ jobId: id }), {
        headers: {
          "Content-type": "application/json",
          Authorization: `${token}`,
        },
      })

      .then((response) => {
        setApplyJob(response.data);

        console.log(response.data.message);
        if (response.data.message === "job applyed") {
          document.getElementById("openPopup").click();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(/jobzilla/images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">IT Department Manager</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Job Detail</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* OUR BLOG START */}
        <div className="section-full  p-t120 p-b90 bg-white">
          <div className="container">
            {/* BLOG SECTION START */}
            <div className="section-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-12">
                  {/* Candidate detail START */}
                  <div className="cabdidate-de-info">
                    <div className="twm-job-self-wrap">
                      <div className="twm-job-self-info">
                        <div className="twm-job-self-top">
                          <div className="twm-media-bg">
                            <img
                              src="/jobzilla/images/job-detail-bg.jpg"
                              alt="#"
                            />
                            <div className="twm-jobs-category green">
                              <span className="twm-bg-green">New</span>
                            </div>
                          </div>
                          <div className="twm-mid-content">
                            <div className="twm-media">
                              <img
                                src="/jobzilla/images/jobs-company/pic1.jpg"
                                alt="#"
                              />
                            </div>
                            <h4 className="twm-job-title">
                              {employer?.jobtitle}
                              <span className="twm-job-post-duration">
                                / 1 days ago
                              </span>
                            </h4>
                            <p className="twm-job-address">
                              <i className="feather-map-pin" />
                              {employer?.completeAddress}
                            </p>
                            <div className="twm-job-self-mid">
                              <div className="twm-job-self-mid-left">
                                <Link
                                  to={employer?.websiteUrl}
                                  className="twm-job-websites site-text-primary"
                                >
                                  {employer?.websiteUrl}
                                </Link>
                                <div className="twm-jobs-amount">
                                  ${employer?.offeredsalary}{" "}
                                  <span>/ Month</span>
                                </div>
                              </div>
                              <div className="twm-job-apllication-area">
                                Application ends:
                                <span className="twm-job-apllication-date">
                                  October 1, 2025
                                </span>
                              </div>
                            </div>
                            <div className="twm-job-self-bottom">
                              {/* 
<!-- Modal --> */}
                              {/* <!-- Button trigger modal --> */}

                              <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#apply_job_popup"
                                className="site-button "
                                style={{ visibility: "hidden" }}
                                data-toggle="modal"
                                id="openPopup"
                              >
                                Apply Now
                              </button>
                              <button
                                type="button"
                                className="site-button"
                                onClick={ApplyJob}
                              >
                                Apply Now
                              </button>

                              {/* <!-- Modal --> */}
                              <div
                                class="modal fade"
                                id="apply_job_popup"
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
                                      <h4>Job Applied</h4>
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-primary"
                                      >
                                        Understood
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
                    <h4 className="twm-s-title">Job Description:</h4>
                    <p>{employer?.description}</p>

                    <h4 className="twm-s-title">Requirments:</h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Must be able to communicate with others to convey
                        information effectively.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Personally passionate and up to date with current trends
                        and technologies, committed to quality and comfortable
                        working with adult media.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Rachelor or Master degree level educational background.
                      </li>
                      <li>
                        <i className="feather-check" />4 years relevant PHP dev
                        experience.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Troubleshooting, testing and maintaining the core
                        product software and databases.
                      </li>
                    </ul>
                    <h4 className="twm-s-title">Responsabilities:</h4>
                    <ul className="description-list-2">
                      <li>
                        <i className="feather-check" />
                        Establish and promote design guidelines, best practices
                        and standards.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Accurately estimate design tickets during planning
                        sessions.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Partnering with product and engineering to translate
                        business and user goals into elegant and practical
                        designs. that can deliver on key business and user
                        metrics.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Create wireframes, storyboards, user flows, process
                        flows and site maps to communicate interaction and
                        design.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Present and defend designs and key deliverables to peers
                        and executive level stakeholders.
                      </li>
                      <li>
                        <i className="feather-check" />
                        Execute all visual design stages from concept to final
                        hand-off to engineering.
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
                    <h4 className="twm-s-title">Location</h4>
                    <div className="twm-m-map mb-5">
                      <div className="twm-m-map-iframe">
                        <iframe
                          height={310}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                        />
                      </div>
                    </div>
                    <div className="twm-two-part-section">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <h4 className="twm-s-title">Office Photos</h4>
                          <div className="tw-sidebar-gallery">
                            <ul>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic1.jpg"
                                    title="Title 1"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic1.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic1.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic2.jpg"
                                    title="Title 2"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic2.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic2.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb ">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic3.jpg"
                                    title="Title 3"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic3.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic3.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic4.jpg"
                                    title="Title 4"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic4.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic4.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic5.jpg"
                                    title="Title 5"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic5.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic5.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic6.jpg"
                                    title="Title 6"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic6.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic6.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic7.jpg"
                                    title="Title 7"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic1.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic7.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic8.jpg"
                                    title="Title 8"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic2.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic8.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb ">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic9.jpg"
                                    title="Title 9"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic3.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic9.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic10.jpg"
                                    title="Title 10"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic4.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic10.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic11.jpg"
                                    title="Title 11"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic5.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic11.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="tw-service-gallery-thumb">
                                  <Link
                                    className="elem"
                                    to="/jobzilla/images/gallery/pic12.jpg"
                                    title="Title 12"
                                    data-lcl-author
                                    data-lcl-thumb="/jobzilla/images/gallery/thumb/pic6.jpg"
                                  >
                                    <img
                                      src="/jobzilla/images/gallery/thumb/pic12.jpg"
                                      alt=""
                                    />
                                    <i className="fa fa-file-image" />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <h4 className="twm-s-title">Video</h4>
                          <div
                            className="video-section-first"
                            style={{
                              backgroundImage:
                                "url(/jobzilla/images/video-bg.jpg)",
                            }}
                          >
                            <Link
                              to="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                              className="mfp-video play-now-video"
                            >
                              <i className="icon feather-play" />
                              <span className="ripple" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 rightSidebar">
                  <div className="side-bar mb-4">
                    <div className="twm-s-info2-wrap mb-5">
                      <div className="twm-s-info2">
                        <h4 className="section-head-small mb-4">
                          Job Information
                        </h4>
                        <ul className="twm-job-hilites">
                          <li>
                            <i className="fas fa-calendar-alt" />
                            <span className="twm-title">Date Posted</span>
                          </li>
                          <li>
                            <i className="fas fa-eye" />
                            <span className="twm-title">8160 Views</span>
                          </li>
                          <li>
                            <i className="fas fa-file-signature" />
                            <span className="twm-title">6 Applicants</span>
                          </li>
                        </ul>
                        <ul className="twm-job-hilites2">
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-calendar-alt" />
                              <span className="twm-title">Date Posted</span>
                              <div className="twm-s-info-discription">
                                {employer?.startDate}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-map-marker-alt" />
                              <span className="twm-title">Location</span>
                              <div className="twm-s-info-discription">
                                {employer?.location}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-user-tie" />
                              <span className="twm-title">Job Title</span>
                              <div className="twm-s-info-discription">
                                {employer?.jobtitle}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-clock" />
                              <span className="twm-title">Experience</span>
                              <div className="twm-s-info-discription">
                                {employer?.experience} Year
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-suitcase" />
                              <span className="twm-title">Qualification</span>
                              <div className="twm-s-info-discription">
                                {employer?.qualification}{" "}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-venus-mars" />
                              <span className="twm-title">Gender</span>
                              <div className="twm-s-info-discription">
                                {employer?.gender}
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="twm-s-info-inner">
                              <i className="fas fa-money-bill-wave" />
                              <span className="twm-title">Offered Salary</span>
                              <div className="twm-s-info-discription">
                                ${employer?.offeredsalary} / Month
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="widget tw-sidebar-tags-wrap">
                      <h4 className="section-head-small mb-4">Job Skills</h4>
                      <div className="tagcloud">
                        <Link to="">Html</Link>
                        <Link to="">Python</Link>
                        <Link to="">WordPress</Link>
                        <Link to="">JavaScript</Link>
                        <Link to="">Figma</Link>
                        <Link to="">Angular</Link>
                        <Link to="">Reactjs</Link>
                        <Link to="">Drupal</Link>
                        <Link to="">Joomla</Link>
                      </div>
                    </div>
                  </div>
                  <div className="twm-s-info3-wrap mb-5">
                    <div className="twm-s-info3">
                      <div className="twm-s-info-logo-section">
                        <div className="twm-media">
                          <img
                            src="/jobzilla/images/jobs-company/pic1.jpg"
                            alt="#"
                          />
                        </div>
                        <h4 className="twm-title">
                          Senior Web Designer , Developer
                        </h4>
                      </div>
                      <ul>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-building" />
                            <span className="twm-title">Company</span>
                            <div className="twm-s-info-discription">
                              Software Development
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-mobile-alt" />
                            <span className="twm-title">Phone</span>
                            <div className="twm-s-info-discription">
                              +291 560 56456
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-at" />
                            <span className="twm-title">Email</span>
                            <div className="twm-s-info-discription">
                              thewebmaxdemo@gmail.com
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-desktop" />
                            <span className="twm-title">Website</span>
                            <div className="twm-s-info-discription">
                              https://themeforest.net
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-map-marker-alt" />
                            <span className="twm-title">Address</span>
                            <div className="twm-s-info-discription">
                              1363-1385 Sunset Blvd Angeles, CA 90026 ,USA
                            </div>
                          </div>
                        </li>
                      </ul>
                      <Link to="about-1" className=" site-button">
                        Vew Profile
                      </Link>
                    </div>
                  </div>
                  <div
                    className="twm-advertisment"
                    style={{ backgroundImage: "url(images/add-bg.jpg)" }}
                  >
                    <div className="overlay" />
                    <h4 className="twm-title">Recruiting?</h4>
                    <p>
                      Get Best Matched Jobs On your <br />
                      Email. Add Resume NOW!
                    </p>
                    <Link to="javascript:;" className="site-button white">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OUR BLOG END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default EmployerJobDetail;
