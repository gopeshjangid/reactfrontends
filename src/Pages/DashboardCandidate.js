import React from "react";
import { Link } from "react-router-dom";

const DashboardCandidate = () => {
  return (
    <>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Candidate Dashboard</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index">Home</Link>
                  </li>
                  <li>Candidate Chat</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}
        {/* OUR BLOG START */}
        <div className="section-full p-t120  p-b90 site-bg-white">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
                <div className="side-bar-st-1">
                  <div className="twm-candidate-profile-pic">
                    <img src="images/user-avtar/pic4.jpg" alt />
                    <div className="upload-btn-wrapper">
                      <div id="upload-image-grid" />
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
                      <li className="active">
                        <Link to="/candidate-dashboard">
                          <i className="fa fa-tachometer-alt" /> Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-profile">
                          <i className="fa fa-user" /> My Profile
                        </Link>
                      </li>

                      <li>
                        <Link to="/candidate-jobs-applied">
                          <i className="fa fa-suitcase" /> Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-my-resume">
                          <i className="fa fa-receipt" /> My Resume
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-saved-jobs">
                          <i className="fa fa-file-download" /> Saved Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-cv-manager">
                          <i className="fa fa-paperclip" /> CV Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-job-alert">
                          <i className="fa fa-bell" /> Job Alerts
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-change-password">
                          <i className="fa fa-fingerprint" /> Change Passeord
                        </Link>
                      </li>
                      <li>
                        <Link to="/candidate-chat">
                          <i className="fa fa-comments" />
                          Chat
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
                {/*Filter Short By*/}
                <div className="twm-right-section-panel site-bg-gray">
                  <div className="wt-admin-right-page-header">
                    <h2>Randall Henderson</h2>
                    <p>IT Contractor</p>
                  </div>
                  <div className="twm-dash-b-blocks mb-5">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                          <div className="panel-body wt-panel-body dashboard-card-2 block-gradient">
                            <div className="wt-card-wrap-2">
                              <div className="wt-card-icon-2">
                                <i className="flaticon-job" />
                              </div>
                              <div className="wt-card-right wt-total-active-listing counter ">
                                25
                              </div>
                              <div className="wt-card-bottom-2 ">
                                <h4 className="m-b0">Posted Jobs</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                          <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-2">
                            <div className="wt-card-wrap-2">
                              <div className="wt-card-icon-2">
                                <i className="flaticon-resume" />
                              </div>
                              <div className="wt-card-right  wt-total-listing-view counter ">
                                435
                              </div>
                              <div className="wt-card-bottom-2">
                                <h4 className="m-b0">Total Applications</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                          <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-3">
                            <div className="wt-card-wrap-2">
                              <div className="wt-card-icon-2">
                                <i className="flaticon-envelope" />
                              </div>
                              <div className="wt-card-right wt-total-listing-review counter ">
                                28
                              </div>
                              <div className="wt-card-bottom-2">
                                <h4 className="m-b0">Messages</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 mb-3">
                        <div className="panel panel-default">
                          <div className="panel-body wt-panel-body dashboard-card-2 block-gradient-4">
                            <div className="wt-card-wrap-2">
                              <div className="wt-card-icon-2">
                                <i className="flaticon-bell" />
                              </div>
                              <div className="wt-card-right wt-total-listing-bookmarked counter ">
                                18
                              </div>
                              <div className="wt-card-bottom-2">
                                <h4 className="m-b0">Notifications</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="twm-pro-view-chart-wrap">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default site-bg-white">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                              <i className="far fa-chart-bar" />
                              Your Profile Views
                            </h4>
                          </div>
                          <div className="panel-body wt-panel-body twm-pro-view-chart">
                            <canvas id="profileViewChart" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">Inbox</h4>
                          </div>
                          <div className="panel-body wt-panel-body bg-white">
                            <div className="dashboard-messages-box-scroll scrollbar-macosx">
                              <div className="dashboard-messages-box">
                                <div className="dashboard-message-avtar">
                                  <img src="images/user-avtar/pic1.jpg" alt />
                                </div>
                                <div className="dashboard-message-area">
                                  <h5>
                                    Lucy Smith<span>18 June 2023</span>
                                  </h5>
                                  <p>
                                    Bring to the table win-win survival
                                    strategies to ensure proactive domination.
                                    at the end of the day, going forward, a new
                                    normal that has evolved from generation.
                                  </p>
                                </div>
                              </div>
                              <div className="dashboard-messages-box">
                                <div className="dashboard-message-avtar">
                                  <img src="images/user-avtar/pic3.jpg" alt />
                                </div>
                                <div className="dashboard-message-area">
                                  <h5>
                                    Richred paul<span>19 June 2023</span>
                                  </h5>
                                  <p>
                                    Bring to the table win-win survival
                                    strategies to ensure proactive domination.
                                    at the end of the day, going forward, a new
                                    normal that has evolved from generation.
                                  </p>
                                </div>
                              </div>
                              <div className="dashboard-messages-box">
                                <div className="dashboard-message-avtar">
                                  <img src="images/user-avtar/pic4.jpg" alt />
                                </div>
                                <div className="dashboard-message-area">
                                  <h5>
                                    Jon Doe<span>20 June 2023</span>
                                  </h5>
                                  <p>
                                    Bring to the table win-win survival
                                    strategies to ensure proactive domination.
                                    at the end of the day, going forward, a new
                                    normal that has evolved from generation.
                                  </p>
                                </div>
                              </div>
                              <div className="dashboard-messages-box">
                                <div className="dashboard-message-avtar">
                                  <img src="images/user-avtar/pic1.jpg" alt />
                                </div>
                                <div className="dashboard-message-area">
                                  <h5>
                                    Thomas Smith<span>22 June 2023</span>
                                  </h5>
                                  <p>
                                    Bring to the table win-win survival
                                    strategies to ensure proactive domination.
                                    at the end of the day, going forward, a new
                                    normal that has evolved from generation.{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default site-bg-white m-t30">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                              <i className="far fa-list-alt" />
                              Recent Activities
                            </h4>
                          </div>
                          <div className="panel-body wt-panel-body">
                            <div className="dashboard-list-box list-box-with-icon">
                              <ul>
                                <li>
                                  <i className="fa fa-envelope text-success list-box-icon" />
                                  Nikol Tesla has sent you{" "}
                                  <Link to="#" className="text-success">
                                    private message!
                                  </Link>
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-suitcase text-primary list-box-icon" />
                                  Your job for
                                  <Link to="#" className="text-primary">
                                    Web Designer
                                  </Link>
                                  has been approved!
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-bookmark text-warning list-box-icon" />
                                  Someone bookmarked your
                                  <Link to="#" className="text-warning">
                                    SEO Expert
                                  </Link>
                                  Job listing!
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-tasks text-info list-box-icon" />
                                  Your job listing Core
                                  <Link to="#" className="text-info">
                                    PHP Developer
                                  </Link>{" "}
                                  for Site Maintenance is expiring!
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-paperclip text-success list-box-icon" />
                                  You have new application for
                                  <Link to="#" className="text-success">
                                    {" "}
                                    UI/UX Developer &amp; Designer!{" "}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-suitcase text-danger list-box-icon" />
                                  Your Magento Developer job expire
                                  <Link to="#" className="text-danger">
                                    Renew
                                  </Link>{" "}
                                  now it.
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                                <li>
                                  <i className="fa fa-star site-text-orange list-box-icon" />
                                  David cope left a
                                  <Link to="#" className="site-text-orange">
                                    {" "}
                                    review 4.5
                                  </Link>{" "}
                                  for Real Estate Logo
                                  <Link
                                    to="#"
                                    className="close-list-item color-lebel clr-red"
                                  >
                                    <i className="far fa-trash-alt" />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default">
                          <div className="panel-heading wt-panel-heading p-a20">
                            <h4 className="panel-tittle m-a0">
                              Recent Applicants
                            </h4>
                          </div>
                          <div className="panel-body wt-panel-body bg-white">
                            <div className="twm-dashboard-candidates-wrap">
                              <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="twm-dash-candidates-list">
                                    <div className="twm-media">
                                      <div className="twm-media-pic">
                                        <img
                                          src="images/candidates/pic1.jpg"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                    <div className="twm-mid-content">
                                      <Link to="#" className="twm-job-title">
                                        <h4>Wanda Montgomery </h4>
                                      </Link>
                                      <p>Charted Accountant</p>
                                      <div className="twm-fot-content">
                                        <div className="twm-left-info">
                                          <p className="twm-candidate-address">
                                            <i className="feather-map-pin" />
                                            New York
                                          </p>
                                          <div className="twm-jobs-vacancies">
                                            $20<span>/ Day</span>
                                          </div>
                                        </div>
                                        <div className="twm-right-btn">
                                          <ul className="twm-controls-icon list-unstyled">
                                            <li>
                                              <button
                                                title="View profile"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="fa fa-eye" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Send message"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-envelope-open" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Delete"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-trash-alt" />
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="twm-dash-candidates-list">
                                    <div className="twm-media">
                                      <div className="twm-media-pic">
                                        <img
                                          src="images/candidates/pic2.jpg"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                    <div className="twm-mid-content">
                                      <Link to="#" className="twm-job-title">
                                        <h4>Peter Hawkins</h4>
                                      </Link>
                                      <p>Medical Professed</p>
                                      <div className="twm-fot-content">
                                        <div className="twm-left-info">
                                          <p className="twm-candidate-address">
                                            <i className="feather-map-pin" />
                                            New York
                                          </p>
                                          <div className="twm-jobs-vacancies">
                                            $7<span>/ Hour</span>
                                          </div>
                                        </div>
                                        <div className="twm-right-btn">
                                          <ul className="twm-controls-icon list-unstyled">
                                            <li>
                                              <button
                                                title="View profile"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="fa fa-eye" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Send message"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-envelope-open" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Delete"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-trash-alt" />
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="twm-dash-candidates-list">
                                    <div className="twm-media">
                                      <div className="twm-media-pic">
                                        <img
                                          src="images/candidates/pic3.jpg"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                    <div className="twm-mid-content">
                                      <Link to="#" className="twm-job-title">
                                        <h4>Ralph Johnson</h4>
                                      </Link>
                                      <p>Bank Manger</p>
                                      <div className="twm-fot-content">
                                        <div className="twm-left-info">
                                          <p className="twm-candidate-address">
                                            <i className="feather-map-pin" />
                                            New York
                                          </p>
                                          <div className="twm-jobs-vacancies">
                                            $180<span>/ Day</span>
                                          </div>
                                        </div>
                                        <div className="twm-right-btn">
                                          <ul className="twm-controls-icon list-unstyled">
                                            <li>
                                              <button
                                                title="View profile"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="fa fa-eye" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Send message"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-envelope-open" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Delete"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-trash-alt" />
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="twm-dash-candidates-list">
                                    <div className="twm-media">
                                      <div className="twm-media-pic">
                                        <img
                                          src="images/candidates/pic4.jpg"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                    <div className="twm-mid-content">
                                      <Link to="#" className="twm-job-title">
                                        <h4>Randall Henderson </h4>
                                      </Link>
                                      <p>IT Contractor</p>
                                      <div className="twm-fot-content">
                                        <div className="twm-left-info">
                                          <p className="twm-candidate-address">
                                            <i className="feather-map-pin" />
                                            New York
                                          </p>
                                          <div className="twm-jobs-vacancies">
                                            $90<span>/ Week</span>
                                          </div>
                                        </div>
                                        <div className="twm-right-btn">
                                          <ul className="twm-controls-icon list-unstyled">
                                            <li>
                                              <button
                                                title="View profile"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="fa fa-eye" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Send message"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-envelope-open" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Delete"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-trash-alt" />
                                              </button>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                  <div className="twm-dash-candidates-list">
                                    <div className="twm-media">
                                      <div className="twm-media-pic">
                                        <img
                                          src="images/candidates/pic6.jpg"
                                          alt="#"
                                        />
                                      </div>
                                    </div>
                                    <div className="twm-mid-content">
                                      <Link to="#" className="twm-job-title">
                                        <h4>Christina Fischer </h4>
                                      </Link>
                                      <p>Charity &amp; Voluntary</p>
                                      <div className="twm-fot-content">
                                        <div className="twm-left-info">
                                          <p className="twm-candidate-address">
                                            <i className="feather-map-pin" />
                                            New York
                                          </p>
                                          <div className="twm-jobs-vacancies">
                                            $19<span>/ Hour</span>
                                          </div>
                                        </div>
                                        <div className="twm-right-btn">
                                          <ul className="twm-controls-icon list-unstyled">
                                            <li>
                                              <button
                                                title="View profile"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="fa fa-eye" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Send message"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-envelope-open" />
                                              </button>
                                            </li>
                                            <li>
                                              <button
                                                title="Delete"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                              >
                                                <span className="far fa-trash-alt" />
                                              </button>
                                            </li>
                                          </ul>
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
          </div>
        </div>
        {/* OUR BLOG END */}
      </div>

      {/* CONTENT END */}
    </>
  );
};

export default DashboardCandidate;
