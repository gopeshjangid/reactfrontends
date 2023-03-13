import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CandidateJobApplied = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [state, setState] = useState();
  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    fetch("http://localhost:5000/getapplyJob", {
      method: "GET",

      // body: JSON.stringify(object),
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setAppliedJob(json.message);

        // const filterData = json.message?.filter(
        //   (item, index) => item.jobId >= 1
        // );
        // setState(filterData);
        // console.log(filterData);
        //   setLoad(true);

        console.log(json.message);

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
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div
          className="wt-bnr-inr overlay-wraper bg-center"
          style={{ backgroundImage: "url(jozoilla/images/banner/1.jpg)" }}
        >
          <div className="overlay-main site-bg-white opacity-01" />
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Candidate Jobs Applied</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link href="/index">Home</Link>
                  </li>
                  <li>Candidate Jobs Applied</li>
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
                    <img src="jobzilla/images/user-avtar/pic4.jpg" alt />
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
                    <Link href="/candidate-detail" className="twm-job-title">
                      <h4>Randall Henderson </h4>
                    </Link>
                    <p>IT Contractor</p>
                  </div>
                  <div className="twm-nav-list-1">
                    <ul>
                      <li>
                        <Link href="/candidate-dashboard">
                          <i className="fa fa-tachometer-alt" /> Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-profile">
                          <i className="fa fa-user" /> My Pfofile
                        </Link>
                      </li>
                      <li className="active">
                        <Link href="/candidate-jobs-applied">
                          <i className="fa fa-suitcase" /> Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-my-resume">
                          <i className="fa fa-receipt" /> My Resume
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-saved-jobs">
                          <i className="fa fa-file-download" /> Saved Jobs
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-cv-manager">
                          <i className="fa fa-paperclip" /> CV Manager
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-job-alert">
                          <i className="fa fa-bell" /> Job Alerts
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-change-password">
                          <i className="fa fa-fingerprint" /> Change Passeord
                        </Link>
                      </li>
                      <li>
                        <Link href="/candidate-chat">
                          <i className="fa fa-comments" />
                          Chat
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
                <div className="twm-right-section-panel candidate-save-job site-bg-gray">
                  {/*Filter Short By*/}
                  <div className="product-filter-wrap d-flex justify-content-between align-items-center">
                    <span className="woocommerce-result-count-left">
                      Applied 250 jobs
                    </span>
                    <form
                      className="woocommerce-ordering twm-filter-select"
                      method="get"
                    >
                      <span className="woocommerce-result-count">Short By</span>
                      <select
                        className="wt-select-bar-2 selectpicker"
                        data-live-search="true"
                        data-bv-field="size"
                      >
                        <option>Most Recent</option>
                        <option>Freelance</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                        <option>Part Time</option>
                        <option>Temporary</option>
                      </select>
                      <select
                        className="wt-select-bar-2 selectpicker"
                        data-live-search="true"
                        data-bv-field="size"
                      >
                        <option>Show 10</option>
                        <option>Show 20</option>
                        <option>Show 30</option>
                        <option>Show 40</option>
                        <option>Show 50</option>
                        <option>Show 60</option>
                      </select>
                    </form>
                  </div>
                  <div className="twm-jobs-list-wrap">
                    {appliedJob?.map((friend, index) => {
                      return (
                        <ul>
                          <li>
                            <div className="twm-jobs-list-style1 mb-5">
                              <div className="twm-media">
                                <img
                                  src="jobzilla/images/jobs-company/pic1.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="twm-mid-content">
                                <Link
                                  href="/job-detail"
                                  className="twm-job-title"
                                >
                                  <h4>
                                    {friend?.jobId?.jobcategory}
                                    <span className="twm-job-post-duration">
                                      / 1 days ago
                                    </span>
                                  </h4>
                                </Link>
                                <p className="twm-job-address">
                                  {friend?.jobId?.completeAddress}
                                </p>
                                <Link
                                  href={friend?.jobId?.websiteUrl}
                                  className="twm-job-websites site-text-primary"
                                >
                                  {friend?.jobId?.websiteUrl}
                                </Link>
                              </div>
                              <div className="twm-right-content">
                                <div className="twm-jobs-category green">
                                  <span className="twm-bg-green">New</span>
                                </div>
                                <div className="twm-jobs-amount">
                                  ${friend?.jobId?.offeredsalary}{" "}
                                  <span>/ Month</span>
                                </div>
                                <span className=" fw-bold site-text-primary">
                                  Applied Job
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                  <div className="pagination-outer">
                    <div className="pagination-style1">
                      <ul className="clearfix">
                        <li className="prev">
                          <Link href="/javascript:;">
                            <span>
                              {" "}
                              <i className="fa fa-angle-left" />{" "}
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/javascript:;">1</Link>
                        </li>
                        <li className="active">
                          <Link href="/javascript:;">2</Link>
                        </li>
                        <li>
                          <Link href="/javascript:;">3</Link>
                        </li>
                        <li>
                          <Link className="javascript:;" href="/javascript:;">
                            <i className="fa fa-ellipsis-h" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/javascript:;">5</Link>
                        </li>
                        <li className="next">
                          <Link href="/javascript:;">
                            <span>
                              {" "}
                              <i className="fa fa-angle-right" />{" "}
                            </span>
                          </Link>
                        </li>
                      </ul>
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
    </div>
  );
};

export default CandidateJobApplied;
