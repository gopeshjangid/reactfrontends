import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployerManageJob = () => {
  const [getjob, setGetJob] = useState([]);
  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:5000/getJob", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setGetJob(response.message);
        console.log(response.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(jobzilla/images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Company Manage jobs</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index">Home</Link>
                  </li>
                  <li>Company Manage jobs</li>
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
                    <img src="jobzilla/images/jobs-company/pic1.jpg" alt />
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
                      <h4>Artistre Studio PVT Ltd</h4>
                    </Link>
                    <p>IT Contractor</p>
                  </div>
                  <div className="twm-nav-list-1">
                    <ul>
                      <li>
                        <Link to="/employer-profile">
                          <i className="fa fa-user" /> Company Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="/employer-profile-details">
                          <i className="fa fa-user" /> Company Details
                        </Link>
                      </li>
                      <li>
                        <Link to="employer-resume">
                          <i className="fa fa-receipt" /> Resume
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/employer-manage-job">
                          <i className="fa fa-suitcase" /> Manage Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="/employer-post-job">
                          <i className="fa fa-book-reader" /> Post A Jobs
                        </Link>
                      </li>
                      <li>
                        <Link to="employer-transaction">
                          <i className="fa fa-credit-card" />
                          Transaction
                        </Link>
                      </li>
                      <li>
                        <Link to="candidate-grid">
                          <i className="fa fa-user-check" /> Browse Candidates
                        </Link>
                      </li>
                      <li>
                        <Link to="employer-change-password">
                          <i className="fa fa-fingerprint" /> Change Passeord
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-share-square" /> Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="employer-account-fresher">
                          <i className="fa fa-pencil-alt" />
                          Register Fresher
                        </Link>
                      </li>
                      <li>
                        <Link to="employer-account-professional">
                          <i className="fa fa-pencil-alt" />
                          Register Professionals
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
                {/*Filter Short By*/}
                <div className="twm-right-section-panel site-bg-gray">
                  <form>
                    {/*Basic Information*/}
                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">
                          <i className="fa fa-suitcase" />
                          Manage jobs
                        </h4>
                      </div>
                      <div className="panel-body wt-panel-body m-b30 ">
                        <div className="twm-D_table p-a20 table-responsive">
                          <table
                            id="jobs_bookmark_table"
                            className="table table-bordered twm-bookmark-list-wrap"
                          >
                            <thead>
                              <tr>
                                <th>Job Title</th>
                                <th>Category</th>
                                <th>Job Types</th>
                                <th>Applications</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            {getjob?.map((friend, index) => {
                              return (
                                <tbody>
                                  {/*1*/}
                                  <tr>
                                    <td>
                                      <div className="twm-bookmark-list">
                                        <div className="twm-mid-content">
                                          <Link
                                            to="#"
                                            className="twm-job-title"
                                          >
                                            <h4>{friend.jobtitle}</h4>
                                            <p className="twm-bookmark-address">
                                              <i className="feather-map-pin" />
                                              {friend.completeAddress}
                                            </p>
                                          </Link>
                                        </div>
                                      </div>
                                    </td>
                                    <td>{friend.jobcategory}</td>
                                    <td>
                                      <div className="twm-jobs-category">
                                        <span className="twm-bg-green">
                                          {friend.jobtype}
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <Link
                                        to="javascript:;"
                                        className="site-text-primary"
                                      >
                                        03 Applied
                                      </Link>
                                    </td>
                                    <td>
                                      <div>{friend.startDate}</div>
                                      <div>{friend.EndDate}</div>
                                    </td>
                                    <td>
                                      <div className="twm-table-controls">
                                        <ul className="twm-DT-controls-icon list-unstyled">
                                          <li>
                                            <button
                                              title="View profile"
                                              data-bs-placement="top"
                                              type="button"
                                              data-bs-toggle="offcanvas"
                                              data-bs-target={
                                                "#viewdetails" + friend._id
                                              }
                                              aria-controls="offcanvasScrolling"
                                            >
                                              <span className="fa fa-eye" />
                                            </button>{" "}
                                            <div
                                              className="offcanvas viewOrder text-wrap offcanvas-end"
                                              data-bs-scroll="true"
                                              data-bs-backdrop="false"
                                              tabIndex="-1"
                                              id={"viewdetails" + friend._id}
                                              aria-labelledby="offcanvasScrollingLabel"
                                            >
                                              <div
                                                className="offcanvas-header text-white"
                                                style={{
                                                  background: "#1967d2",
                                                }}
                                              >
                                                <button
                                                  type="button"
                                                  className="bg-transparent border-0"
                                                  data-bs-dismiss="offcanvas"
                                                  aria-label="Close"
                                                >
                                                  <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                                </button>

                                                <h5
                                                  className="offcanvas-title text-white"
                                                  id="offcanvasScrollingLabel"
                                                >
                                                  Job Details
                                                </h5>
                                              </div>
                                              <div className="offcanvas-body">
                                                <table className="table table-borderless mb-0">
                                                  <tbody>
                                                    <tr>
                                                      <td>Job Title</td>
                                                      <td>:</td>

                                                      <td>{friend.jobtitle}</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Job Category</td>
                                                      <td>:</td>{" "}
                                                      <td>
                                                        {" "}
                                                        {friend.jobcategory}
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td>Job Type</td>
                                                      <td>:</td>
                                                      <td>{friend.jobtype}</td>
                                                    </tr>
                                                    {/* <tr>
                                              <td>Type</td>
                                              <td>:</td> <td>{friend.type}</td>
                                            </tr> */}

                                                    <tr>
                                                      <td>Amount</td>
                                                      <td>:</td>{" "}
                                                      <td>
                                                        {friend.completeAddress}
                                                      </td>
                                                    </tr>
                                                    {/* <tr>
                                              <td>Sub.Cancel</td>
                                              <td>:</td>
                                              <td>{friend.sub_status}</td>
                                            </tr>
                                            <tr>
                                              <td>Status</td>
                                              <td>:</td>{" "}
                                              <td>{friend.status}</td>
                                            </tr> */}
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
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
                                    </td>
                                  </tr>
                                </tbody>
                              );
                            })}
                          </table>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* OUR BLOG END */}
      </div>
    </div>

    // <div>
    //   <div className="page-wraper position-relative" style={{ zIndex: "1000" }}>
    //     <header id="header-admin-wrap" className="header-admin-fixed">
    //       {/* Header Start */}
    //       <div id="header-admin">
    //         <div className="container">
    //           {/* Left Side Content */}
    //           <div className="header-left">
    //             <div className="nav-btn-wrap">
    //               <Link className="nav-btn-admin" id="sidebarCollapse">
    //                 <span className="fa fa-angle-left" />
    //               </Link>
    //             </div>
    //           </div>
    //           {/* Left Side Content End */}
    //           {/* Right Side Content */}
    //           <div className="header-right">
    //             <ul className="header-widget-wrap">
    //               {/*Message*/}
    //               <li className="header-widget dashboard-message-dropdown">
    //                 <div className="dropdown">
    //                   <Link
    //                     to="javascript:;"
    //                     className="dropdown-toggle jobzilla-admin-messange"
    //                     id="ID-MSG_dropdown"
    //                     data-bs-toggle="dropdown"
    //                   >
    //                     <i className="far fa-envelope" />
    //                     <span className="notification-animate">4</span>
    //                   </Link>
    //                   <div
    //                     className="dropdown-menu"
    //                     aria-labelledby="ID-MSG_dropdown"
    //                   >
    //                     <div className="message-list dashboard-widget-scroll">
    //                       <ul>
    //                         <li className="clearfix">
    //                           <span className="msg-avtar">
    //                             <img
    //                               src="jobzilla/images/user-avtar/pic1.jpg"
    //                               alt
    //                             />
    //                           </span>
    //                           <div className="msg-texting">
    //                             <strong>Alexa Johnson</strong>
    //                             <small className="msg-time">
    //                               <span className="far fa-clock p-r-5" />
    //                               12 mins ago
    //                             </small>
    //                             <p>
    //                               Lorem ipsum dolor sit amet, consectetur...
    //                             </p>
    //                           </div>
    //                         </li>
    //                         <li className="clearfix">
    //                           <span className="msg-avtar">
    //                             <img
    //                               src="jobzilla/images/user-avtar/pic2.jpg"
    //                               alt
    //                             />
    //                           </span>
    //                           <div className="msg-texting">
    //                             <strong>Johan Smith</strong>
    //                             <small className="msg-time">
    //                               <span className="far fa-clock p-r-5" />2 hours
    //                               ago
    //                             </small>
    //                             <p>
    //                               Lorem ipsum dolor sit amet, consectetur...
    //                             </p>
    //                           </div>
    //                         </li>
    //                         <li className="clearfix">
    //                           <span className="msg-avtar">
    //                             <img
    //                               src="jobzilla/images/user-avtar/pic3.jpg"
    //                               alt
    //                             />
    //                           </span>
    //                           <div className="msg-texting">
    //                             <strong>Bobby Brown</strong>
    //                             <small className="msg-time">
    //                               <span className="far fa-clock p-r-5" />3 hours
    //                               ago
    //                             </small>
    //                             <p>
    //                               Lorem ipsum dolor sit amet, consectetur...
    //                             </p>
    //                           </div>
    //                         </li>
    //                         <li className="clearfix">
    //                           <span className="msg-avtar">
    //                             <img
    //                               src="jobzilla/images/user-avtar/pic4.jpg"
    //                               alt
    //                             />
    //                           </span>
    //                           <div className="msg-texting">
    //                             <strong>David Deo</strong>
    //                             <small className="msg-time">
    //                               <span className="far fa-clock p-r-5" />4 hours
    //                               ago
    //                             </small>
    //                             <p>
    //                               Lorem ipsum dolor sit amet, consectetur...
    //                             </p>
    //                           </div>
    //                         </li>
    //                       </ul>
    //                       <div className="message-view-all">
    //                         <Link to="javascript:;">View All</Link>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </li>
    //               {/*Notification*/}
    //               <li className="header-widget dashboard-noti-dropdown">
    //                 <div className="dropdown">
    //                   <Link
    //                     to="javascript:;"
    //                     className="dropdown-toggle jobzilla-admin-notification"
    //                     id="ID-NOTI_dropdown"
    //                     data-bs-toggle="dropdown"
    //                   >
    //                     <i className="far fa-bell" />
    //                     <span className="notification-animate">8</span>
    //                   </Link>
    //                   <div
    //                     className="dropdown-menu"
    //                     aria-labelledby="ID-NOTI_dropdown"
    //                   >
    //                     <div className="dashboard-widgets-header">
    //                       You have 7 notifications
    //                     </div>
    //                     <div className="noti-list dashboard-widget-scroll">
    //                       <ul>
    //                         <li>
    //                           <Link to="#">
    //                             <span className="noti-icon">
    //                               <i className="far fa-bell" />
    //                             </span>
    //                             <span className="noti-texting">
    //                               Devid applied for <b>Webdesigner.</b>{" "}
    //                             </span>
    //                           </Link>
    //                         </li>
    //                         <li>
    //                           <Link to="#">
    //                             <span className="noti-icon">
    //                               <i className="far fa-bell" />
    //                             </span>
    //                             <span className="noti-texting">
    //                               Nikol sent you a message.{" "}
    //                             </span>
    //                           </Link>
    //                         </li>
    //                         <li>
    //                           <Link to="#">
    //                             <span className="noti-icon">
    //                               <i className="far fa-bell" />
    //                             </span>
    //                             <span className="noti-texting">
    //                               lucy bookmarked your <b>SEO Expert</b> Job!{" "}
    //                             </span>
    //                           </Link>
    //                         </li>
    //                         <li>
    //                           <Link to="#">
    //                             <span className="noti-icon">
    //                               <i className="far fa-bell" />
    //                             </span>
    //                             <span className="noti-texting">
    //                               Your job for <b>teacher</b> has been approved!{" "}
    //                             </span>
    //                           </Link>
    //                         </li>
    //                         <li>
    //                           <Link to="#">
    //                             <span className="noti-icon">
    //                               <i className="far fa-bell" />
    //                             </span>
    //                             <span className="noti-texting">
    //                               Thor applied for <b>Team Leader</b>.{" "}
    //                             </span>
    //                           </Link>
    //                         </li>
    //                       </ul>
    //                       <div className="noti-view-all">
    //                         <Link to="javascript:;">View All</Link>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </li>
    //               {/*Account*/}
    //               <li className="header-widget">
    //                 <div className="dashboard-user-section">
    //                   <div className="listing-user">
    //                     <div className="dropdown">
    //                       <Link
    //                         to="javascript:;"
    //                         className="dropdown-toggle"
    //                         id="ID-ACCOUNT_dropdown"
    //                         data-bs-toggle="dropdown"
    //                       >
    //                         <div className="user-name text-black">
    //                           <span>
    //                             <img
    //                               src="jobzilla/images/user-avtar/pic4.jpg"
    //                               alt
    //                             />
    //                           </span>
    //                           Nikola Tesla
    //                         </div>
    //                       </Link>
    //                       <div
    //                         className="dropdown-menu"
    //                         aria-labelledby="ID-ACCOUNT_dropdown"
    //                       >
    //                         <ul>
    //                           <li>
    //                             <Link to="dashboard">
    //                               <i className="fa fa-home" />
    //                               Dashboard
    //                             </Link>
    //                           </li>
    //                           <li>
    //                             <Link to="dash-messages">
    //                               <i className="fa fa-envelope" /> Messages
    //                             </Link>
    //                           </li>
    //                           <li>
    //                             <Link to="dash-my-profile">
    //                               <i className="fa fa-user" /> Profile
    //                             </Link>
    //                           </li>
    //                           <li>
    //                             <Link to="index">
    //                               <i className="fa fa-share-square" /> Logout
    //                             </Link>
    //                           </li>
    //                         </ul>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //           {/* Right Side Content End */}
    //         </div>
    //       </div>
    //       {/* Header End */}
    //     </header>
    //     {/* Sidebar Holder */}
    //     <nav id="sidebar-admin-wraper">
    //       <div className="page-logo">
    //         <Link to="index">
    //           <img src="jobzilla/images/logo-dark.png" alt />
    //         </Link>
    //       </div>
    //       <div className="admin-nav scrollbar-macosx">
    //         <ul>
    //           <li>
    //             <Link to="/dashboard">
    //               <i className="fa fa-home" />
    //               <span className="admin-nav-text">Dashboard</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/employer-profile">
    //               <i className="fa fa-user-tie" />
    //               <span className="admin-nav-text">Company Profile</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/employer-profile-details">
    //               <i className="fa fa-user-tie" />
    //               <span className="admin-nav-text">Company Detail</span>
    //             </Link>
    //           </li>
    //           <li className="active">
    //             <Link to="javascript:;">
    //               <i className="fa fa-suitcase" />
    //               <span className="admin-nav-text">Jobs</span>
    //             </Link>
    //             <ul className="sub-menu">
    //               <li>
    //                 {" "}
    //                 <Link to="/employer-post-job">
    //                   <span className="admin-nav-text">Post a New Jobs</span>
    //                 </Link>
    //               </li>
    //               <li>
    //                 {" "}
    //                 <Link to="/employer-manage-job">
    //                   <span className="admin-nav-text">Manage Jobs</span>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <Link to="dash-candidates">
    //               <i className="fa fa-user-friends" />
    //               <span className="admin-nav-text">Candidates</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="dash-bookmark">
    //               <i className="fa fa-bookmark" />
    //               <span className="admin-nav-text">Bookmark Resumes</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="dash-package">
    //               <i className="fa fa-money-bill-alt" />
    //               <span className="admin-nav-text">Packages</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="javascript:;">
    //               <i className="fa fa-envelope" />
    //               <span className="admin-nav-text">
    //                 Messages <sup className="twm-msg-noti">5</sup>
    //               </span>
    //             </Link>
    //             <ul className="sub-menu">
    //               <li>
    //                 {" "}
    //                 <Link to="dash-messages">
    //                   <span className="admin-nav-text">MSG Style-1</span>
    //                 </Link>
    //               </li>
    //               <li>
    //                 {" "}
    //                 <Link to="dash-messages_2">
    //                   <span className="admin-nav-text">MSG Style-2</span>
    //                 </Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <Link to="dash-resume-alert">
    //               <i className="fa fa-bell" />
    //               <span className="admin-nav-text">Resume Alerts</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="dash-my-profile">
    //               <i className="fa fa-user" />
    //               <span className="admin-nav-text">My Profile</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="dash-change-password">
    //               <i className="fa fa-fingerprint" />
    //               <span className="admin-nav-text">Change Password</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="javascript:;"
    //               data-bs-toggle="modal"
    //               data-bs-target="#delete-dash-profile"
    //             >
    //               <i className="fa fa-trash-alt" />
    //               <span className="admin-nav-text">Delete Profile</span>
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="javascript:;"
    //               data-bs-toggle="modal"
    //               data-bs-target="#logout-dash-profile"
    //             >
    //               <i className="fa fa-share-square" />
    //               <span className="admin-nav-text">Logout</span>
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //     {/* Page Content Holder */}
    //     <div id="content">
    //       <div className="content-admin-main">
    //         <div className="wt-admin-right-page-header clearfix">
    //           <h2>Manage Jobs</h2>
    //           <div className="breadcrumbs">
    //             <Link to="#">Home</Link>
    //             <Link to="#">Dasboard</Link>
    //             <span>My Job Listing</span>
    //           </div>
    //         </div>
    //         {/*Basic Information*/}
    //         <div className="panel panel-default">
    //           <div className="panel-heading wt-panel-heading p-a20">
    //             <h4 className="panel-tittle m-a0">
    //               <i className="fa fa-suitcase" /> Job Details
    //             </h4>
    //           </div>
    //           <div className="panel-body wt-panel-body p-a20 m-b30 ">
    //             <div className="twm-D_table p-a20 table-responsive">
    //               <table
    //                 id="jobs_bookmark_table"
    //                 className="table table-bordered twm-bookmark-list-wrap"
    //               >
    //                 <thead>
    //                   <tr>
    //                     <th>Job Title</th>
    //                     <th>Category</th>
    //                     <th>Job Types</th>
    //                     <th>Applications</th>
    //                     <th>Created &amp; Expired</th>
    //                     <th>Action</th>
    //                   </tr>
    //                 </thead>
    //                 {getjob?.map((friend, index) => {
    //                   return (
    //                     <tbody>
    //                       {/*1*/}
    //                       <tr>
    //                         <td>
    //                           <div className="twm-bookmark-list">
    //                             <div className="twm-media">
    //                               <div className="twm-media-pic">
    //                                 <img
    //                                   src="jobzilla/images/jobs-company/pic1.jpg"
    //                                   alt="#"
    //                                 />
    //                               </div>
    //                             </div>
    //                             <div className="twm-mid-content">
    //                               <Link to="#" className="twm-job-title">
    //                                 <h4>{friend.jobtitle}</h4>
    //                                 <p className="twm-bookmark-address">
    //                                   <i className="feather-map-pin" />
    //                                   {friend.completeAddress}
    //                                 </p>
    //                               </Link>
    //                             </div>
    //                           </div>
    //                         </td>
    //                         <td>{friend.jobcategory}</td>
    //                         <td>
    //                           <div className="twm-jobs-category">
    //                             <span className="twm-bg-green">
    //                               {friend.jobtype}
    //                             </span>
    //                           </div>
    //                         </td>
    //                         <td>
    //                           <Link
    //                             to="javascript:;"
    //                             className="site-text-primary"
    //                           >
    //                             03 Applied
    //                           </Link>
    //                         </td>
    //                         <td>
    //                           <div>{friend.startDate}</div>
    //                           <div>{friend.EndDate}</div>
    //                         </td>
    //                         <td>
    //                           <div className="twm-table-controls">
    //                             <ul className="twm-DT-controls-icon list-unstyled">
    //                               <li>
    //                                 <button
    //                                   title="View profile"
    //                                   data-bs-placement="top"
    //                                   type="button"
    //                                   data-bs-toggle="offcanvas"
    //                                   data-bs-target={
    //                                     "#viewdetails" + friend._id
    //                                   }
    //                                   aria-controls="offcanvasScrolling"
    //                                 >
    //                                   <span className="fa fa-eye" />
    //                                 </button>{" "}
    //                                 <div
    //                                   className="offcanvas viewOrder text-wrap offcanvas-end"
    //                                   data-bs-scroll="true"
    //                                   data-bs-backdrop="false"
    //                                   tabIndex="-1"
    //                                   id={"viewdetails" + friend._id}
    //                                   aria-labelledby="offcanvasScrollingLabel"
    //                                 >
    //                                   <div
    //                                     className="offcanvas-header text-white"
    //                                     style={{
    //                                       background: "#1967d2",
    //                                     }}
    //                                   >
    //                                     <button
    //                                       type="button"
    //                                       className="bg-transparent border-0"
    //                                       data-bs-dismiss="offcanvas"
    //                                       aria-label="Close"
    //                                     >
    //                                       <i className="fa-solid fa-xmark fs-3 text-white"></i>
    //                                     </button>

    //                                     <h5
    //                                       className="offcanvas-title text-white"
    //                                       id="offcanvasScrollingLabel"
    //                                     >
    //                                       Job Details
    //                                     </h5>
    //                                   </div>
    //                                   <div className="offcanvas-body">
    //                                     <table className="table table-borderless mb-0">
    //                                       <tbody>
    //                                         <tr>
    //                                           <td>Job Title</td>
    //                                           <td>:</td>

    //                                           <td>{friend.jobtitle}</td>
    //                                         </tr>
    //                                         <tr>
    //                                           <td>Job Category</td>
    //                                           <td>:</td>{" "}
    //                                           <td> {friend.jobcategory}</td>
    //                                         </tr>
    //                                         <tr>
    //                                           <td>Job Type</td>
    //                                           <td>:</td>
    //                                           <td>{friend.jobtype}</td>
    //                                         </tr>
    //                                         {/* <tr>
    //                                           <td>Type</td>
    //                                           <td>:</td> <td>{friend.type}</td>
    //                                         </tr> */}

    //                                         <tr>
    //                                           <td>Amount</td>
    //                                           <td>:</td>{" "}
    //                                           <td>{friend.completeAddress}</td>
    //                                         </tr>
    //                                         {/* <tr>
    //                                           <td>Sub.Cancel</td>
    //                                           <td>:</td>
    //                                           <td>{friend.sub_status}</td>
    //                                         </tr>
    //                                         <tr>
    //                                           <td>Status</td>
    //                                           <td>:</td>{" "}
    //                                           <td>{friend.status}</td>
    //                                         </tr> */}
    //                                       </tbody>
    //                                     </table>
    //                                   </div>
    //                                 </div>
    //                               </li>
    //                               <li>
    //                                 <button
    //                                   title="Edit"
    //                                   data-bs-toggle="tooltip"
    //                                   data-bs-placement="top"
    //                                 >
    //                                   <span className="far fa-edit" />
    //                                 </button>
    //                               </li>
    //                               <li>
    //                                 <button
    //                                   title="Delete"
    //                                   data-bs-toggle="tooltip"
    //                                   data-bs-placement="top"
    //                                 >
    //                                   <span className="far fa-trash-alt" />
    //                                 </button>
    //                               </li>
    //                             </ul>
    //                           </div>
    //                         </td>
    //                       </tr>
    //                     </tbody>
    //                   );
    //                 })}
    //                 {/* <tfoot>
    //                   <tr>
    //                     <th>Job Title</th>
    //                     <th>Category</th>
    //                     <th>Job Types</th>
    //                     <th>Applications</th>
    //                     <th>Created &amp; Expired</th>
    //                     <th>Action</th>
    //                   </tr>
    //                 </tfoot> */}
    //               </table>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/*Delete Profile Popup*/}
    //     <div
    //       className="modal fade twm-model-popup"
    //       id="delete-dash-profile"
    //       data-bs-backdrop="static"
    //       data-bs-keyboard="false"
    //       tabIndex={-1}
    //       aria-hidden="true"
    //     >
    //       <div className="modal-dialog">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <button
    //               type="button"
    //               className="btn-close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             />
    //           </div>
    //           <div className="modal-body">
    //             <h4 className="modal-title">
    //               Do you want to delete your profile?
    //             </h4>
    //           </div>
    //           <div className="modal-footer">
    //             <button
    //               type="button"
    //               className="site-button"
    //               data-bs-dismiss="modal"
    //             >
    //               No
    //             </button>
    //             <button type="button" className="site-button outline-primary">
    //               Yes
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/*Logout Profile Popup*/}
    //     <div
    //       className="modal fade twm-model-popup"
    //       id="logout-dash-profile"
    //       data-bs-backdrop="static"
    //       data-bs-keyboard="false"
    //       tabIndex={-1}
    //       aria-hidden="true"
    //     >
    //       <div className="modal-dialog">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <button
    //               type="button"
    //               className="btn-close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             />
    //           </div>
    //           <div className="modal-body">
    //             <h4 className="modal-title">
    //               Do you want to Logout your profile?
    //             </h4>
    //           </div>
    //           <div className="modal-footer">
    //             <button
    //               type="button"
    //               className="site-button"
    //               data-bs-dismiss="modal"
    //             >
    //               No
    //             </button>
    //             <button type="button" className="site-button outline-primary">
    //               Yes
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default EmployerManageJob;
