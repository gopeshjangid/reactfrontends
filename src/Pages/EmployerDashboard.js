import React from "react";
import { Link } from "react-router-dom";
const EmployerDashboard = () => {
  return (
    <div className="page-wraper position-relative" style={{ zIndex: "1000" }}>
      <header id="header-admin-wrap" className="header-admin-fixed">
        {/* Header Start */}
        <div id="header-admin">
          <div className="container">
            {/* Left Side Content */}
            <div className="header-left">
              <div className="nav-btn-wrap">
                <Link className="nav-btn-admin" id="sidebarCollapse">
                  <span className="fa fa-angle-left" />
                </Link>
              </div>
            </div>
            {/* Left Side Content End */}
            {/* Right Side Content */}
            <div className="header-right">
              <ul className="header-widget-wrap">
                {/*Message*/}
                <li className="header-widget dashboard-message-dropdown">
                  <div className="dropdown">
                    <Link
                      to=""
                      className="dropdown-toggle jobzilla-admin-messange"
                      id="ID-MSG_dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <i className="far fa-envelope" />
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
                                alt
                              />
                            </span>
                            <div className="msg-texting">
                              <strong>Alexa Johnson</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5" />
                                12 mins ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img
                                src="jobzilla/images/user-avtar/pic2.jpg"
                                alt
                              />
                            </span>
                            <div className="msg-texting">
                              <strong>Johan Smith</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5" />2 hours
                                ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img
                                src="jobzilla/images/user-avtar/pic3.jpg"
                                alt
                              />
                            </span>
                            <div className="msg-texting">
                              <strong>Bobby Brown</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5" />3 hours
                                ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img
                                src="jobzilla/images/user-avtar/pic4.jpg"
                                alt
                              />
                            </span>
                            <div className="msg-texting">
                              <strong>David Deo</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5" />4 hours
                                ago
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
                {/*Notification*/}
                <li className="header-widget dashboard-noti-dropdown">
                  <div className="dropdown">
                    <Link
                      to=""
                      className="dropdown-toggle jobzilla-admin-notification"
                      id="ID-NOTI_dropdown"
                      data-bs-toggle="dropdown"
                    >
                      <i className="far fa-bell" />
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
                                <i className="far fa-bell" />
                              </span>
                              <span className="noti-texting">
                                Devid applied for <b>Webdesigner.</b>{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="noti-icon">
                                <i className="far fa-bell" />
                              </span>
                              <span className="noti-texting">
                                Nikol sent you a message.{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="noti-icon">
                                <i className="far fa-bell" />
                              </span>
                              <span className="noti-texting">
                                lucy bookmarked your <b>SEO Expert</b> Job!{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="noti-icon">
                                <i className="far fa-bell" />
                              </span>
                              <span className="noti-texting">
                                Your job for <b>teacher</b> has been approved!{" "}
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <span className="noti-icon">
                                <i className="far fa-bell" />
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
                {/*Account*/}
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
                                alt
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
                              <Link to="dashboard">
                                <i className="fa fa-home" />
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link to="dash-messages">
                                <i className="fa fa-envelope" /> Messages
                              </Link>
                            </li>
                            <li>
                              <Link to="dash-my-profile">
                                <i className="fa fa-user" /> Profile
                              </Link>
                            </li>
                            <li>
                              <Link to="index">
                                <i className="fa fa-share-square" /> Logout
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
            {/* Right Side Content End */}
          </div>
        </div>
        {/* Header End */}
      </header>
      {/* Sidebar Holder */}
      <nav id="sidebar-admin-wraper">
        <div className="page-logo">
          <Link to="/">
            <img src="jobzilla/images/logo-dark.png" alt />
          </Link>
        </div>
        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li className="active">
              <Link to="/employer-dashboard">
                <i className="fa fa-home" />
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/employer-profile">
                <i className="fa fa-user-tie" />
                <span className="admin-nav-text">Company Profile</span>
              </Link>
            </li>

            <li>
              <Link to="/employer-dashboard">
                <i className="fa fa-user-tie" />
                <span className="admin-nav-text">Company Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa fa-suitcase" />
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
                <i className="fa fa-user-friends" />
                <span className="admin-nav-text">Candidates</span>
              </Link>
            </li>
            <li>
              <Link to="dash-bookmark">
                <i className="fa fa-bookmark" />
                <span className="admin-nav-text">Bookmark Resumes</span>
              </Link>
            </li>
            <li>
              <Link to="dash-package">
                <i className="fa fa-money-bill-alt" />
                <span className="admin-nav-text">Packages</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fa fa-envelope" />
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
                <i className="fa fa-bell" />
                <span className="admin-nav-text">Resume Alerts</span>
              </Link>
            </li>
            <li>
              <Link to="dash-my-profile">
                <i className="fa fa-user" />
                <span className="admin-nav-text">My Profile</span>
              </Link>
            </li>
            <li>
              <Link to="dash-change-password">
                <i className="fa fa-fingerprint" />
                <span className="admin-nav-text">Change Password</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                data-bs-toggle="modal"
                data-bs-target="#delete-dash-profile"
              >
                <i className="fa fa-trash-alt" />
                <span className="admin-nav-text">Delete Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                data-bs-toggle="modal"
                data-bs-target="#logout-dash-profile"
              >
                <i className="fa fa-share-square" />
                <span className="admin-nav-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content Holder */}
      <div id="content">
        <div className="content-admin-main">
          <div className="wt-admin-right-page-header clearfix">
            <h2>Hello, Nikola Tesla</h2>
            <div className="breadcrumbs">
              <Link to="#">Home</Link>
              <span>Dasboard</span>
            </div>
          </div>
          <div className="twm-dash-b-blocks mb-5">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-1 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon">
                        <i className="far fa-address-book" />
                      </div>
                      <div className="wt-card-right wt-total-active-listing counter ">
                        25
                      </div>
                      <div className="wt-card-bottom ">
                        <h4 className="m-b0">Posted Jobs</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-2 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon">
                        <i className="far fa-file-alt" />
                      </div>
                      <div className="wt-card-right  wt-total-listing-view counter ">
                        435
                      </div>
                      <div className="wt-card-bottom">
                        <h4 className="m-b0">Total Applications</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-3 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon">
                        <i className="far fa-envelope" />
                      </div>
                      <div className="wt-card-right wt-total-listing-review counter ">
                        28
                      </div>
                      <div className="wt-card-bottom">
                        <h4 className="m-b0">Messages</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-4 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon">
                        <i className="far fa-bell" />
                      </div>
                      <div className="wt-card-right wt-total-listing-bookmarked counter ">
                        18
                      </div>
                      <div className="wt-card-bottom">
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
              <div className="col-xl-6 col-lg-12 col-md-12 mb-4">
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
              <div className="col-xl-6 col-lg-12 col-md-12 mb-4">
                <div className="panel panel-default">
                  <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Inbox</h4>
                  </div>
                  <div className="panel-body wt-panel-body bg-white">
                    <div className="dashboard-messages-box-scroll scrollbar-macosx">
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar">
                          <img src="jobzilla/images/user-avtar/pic1.jpg" alt />
                        </div>
                        <div className="dashboard-message-area">
                          <h5>
                            Lucy Smith<span>18 June 2023</span>
                          </h5>
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. at the end of the day,
                            going forward, a new normal that has evolved from
                            generation.
                          </p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar">
                          <img src="jobzilla/images/user-avtar/pic3.jpg" alt />
                        </div>
                        <div className="dashboard-message-area">
                          <h5>
                            Richred paul<span>19 June 2023</span>
                          </h5>
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. at the end of the day,
                            going forward, a new normal that has evolved from
                            generation.
                          </p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar">
                          <img src="jobzilla/images/user-avtar/pic4.jpg" alt />
                        </div>
                        <div className="dashboard-message-area">
                          <h5>
                            Jon Doe<span>20 June 2023</span>
                          </h5>
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. at the end of the day,
                            going forward, a new normal that has evolved from
                            generation.
                          </p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar">
                          <img src="jobzilla/images/user-avtar/pic1.jpg" alt />
                        </div>
                        <div className="dashboard-message-area">
                          <h5>
                            Thomas Smith<span>22 June 2023</span>
                          </h5>
                          <p>
                            Bring to the table win-win survival strategies to
                            ensure proactive domination. at the end of the day,
                            going forward, a new normal that has evolved from
                            generation.{" "}
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
                    <h4 className="panel-tittle m-a0">Recent Applicants</h4>
                  </div>
                  <div className="panel-body wt-panel-body bg-white">
                    <div className="twm-dashboard-candidates-wrap">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic1.jpg"
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
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic2.jpg"
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
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic3.jpg"
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
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic4.jpg"
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
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic6.jpg"
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
      {/*Delete Profile Popup*/}
      <div
        className="modal fade twm-model-popup"
        id="delete-dash-profile"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
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
              />
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
      {/*Logout Profile Popup*/}
      <div
        className="modal fade twm-model-popup"
        id="logout-dash-profile"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
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
              />
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

export default EmployerDashboard;
