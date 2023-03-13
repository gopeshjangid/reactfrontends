import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrowseCandidate = () => {
  const [hireCandidate, setHireCandidate] = useState([]);

  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    // setIsLoading(true);
    fetch("http://localhost:5000/gethireCandidate", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setHireCandidate(response.message);
        // const filterData = response.message?.filter(
        //   (item, index) => item._id === id
        // );

        // setCandidate(filterData[0]);
        // console.log(filterData);
        // setIsLoading(false);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

  return (
    <div>
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
                  <h2 className="wt-title">Candidate Grid</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Candidate Grid</li>
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
              <div className="col-lg-4 col-md-12 rightSidebar">
                <div className="side-bar">
                  <div className="sidebar-elements search-bx">
                    <form>
                      <div className="form-group mb-4">
                        <h4 className="section-head-small mb-4">Category</h4>
                        <select
                          className="wt-select-bar-large selectpicker"
                          data-live-search="true"
                          data-bv-field="size"
                        >
                          <option selected>All Category</option>
                          <option>Web Designer</option>
                          <option>Developer</option>
                          <option>Acountant</option>
                        </select>
                      </div>
                      <div className="form-group mb-4">
                        <h4 className="section-head-small mb-4">Keyword</h4>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Job Title or Keyword"
                          />
                          <button className="btn" type="button">
                            <i className="feather-search" />
                          </button>
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <h4 className="section-head-small mb-4">Location</h4>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search location"
                          />
                          <button className="btn" type="button">
                            <i className="feather-map-pin" />
                          </button>
                        </div>
                      </div>
                      <div className="twm-sidebar-ele-filter">
                        <h4 className="section-head-small mb-4">Job Type</h4>
                        <ul>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck1"
                              >
                                Freelance
                              </label>
                            </div>
                            <span className="twm-job-type-count">09</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck2"
                              >
                                Full Time
                              </label>
                            </div>
                            <span className="twm-job-type-count">07</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck3"
                              >
                                Internship
                              </label>
                            </div>
                            <span className="twm-job-type-count">15</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck4"
                              >
                                Part Time
                              </label>
                            </div>
                            <span className="twm-job-type-count">20</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck5"
                              >
                                Temporary
                              </label>
                            </div>
                            <span className="twm-job-type-count">22</span>
                          </li>
                          <li>
                            <div className=" form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheck6"
                              >
                                Volunteer
                              </label>
                            </div>
                            <span className="twm-job-type-count">25</span>
                          </li>
                        </ul>
                      </div>
                      <div className="twm-sidebar-ele-filter">
                        <h4 className="section-head-small mb-4">Date Posts</h4>
                        <ul>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio1"
                              >
                                Last hour
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio2"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio2"
                              >
                                Last 24 hours
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio3"
                              >
                                Last 7 days
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio4"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio4"
                              >
                                Last 14 days
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio5"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio5"
                              >
                                Last 30 days
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="exampleradio6"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleradio6"
                              >
                                All
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="twm-sidebar-ele-filter">
                        <h4 className="section-head-small mb-4">
                          Type of employment
                        </h4>
                        <ul>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="Freelance1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Freelance1"
                              >
                                Freelance
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="FullTime1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="FullTime1"
                              >
                                Full Time
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="Intership1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Intership1"
                              >
                                Intership
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                type="radio"
                                className="form-check-input"
                                id="Part-Time1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="Part-Time1"
                              >
                                Part Time
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                  <div className="widget tw-sidebar-tags-wrap">
                    <h4 className="section-head-small mb-4">Tags</h4>
                    <div className="tagcloud">
                      <Link to="/job-list">General</Link>
                      <Link to="/job-list">Jobs </Link>
                      <Link to="/job-list">Payment</Link>
                      <Link to="/job-list">Application </Link>
                      <Link to="/job-list">Work</Link>
                      <Link to="/job-list">Recruiting</Link>
                      <Link to="/job-list">Employer</Link>
                      <Link to="/job-list">Income</Link>
                      <Link to="/job-list">Tips</Link>
                    </div>
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
                  <Link to="/about-1" className="site-button white">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                {/*Filter Short By*/}
                <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                  <span className="woocommerce-result-count-left">
                    Showing 2,150 Candidates
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
                <div className="twm-candidates-grid-wrap">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      {hireCandidate?.map((friend, index) => {
                        return (
                          <div className="twm-candidates-grid-style1 mb-5">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic2.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="twm-candidates-tag">
                                <span>Featured</span>
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="/candidate-detail"
                                className="twm-job-title"
                              >
                                <h4>{friend.candidateDetails.username}</h4>
                              </Link>
                              <p>{friend.candidateDetails.jobCategory}</p>
                              <Link
                                to={`/candidate-detail/${friend.candidateDetails._id}`}
                                className="twm-view-prifile site-text-primary"
                              >
                                View Profile
                              </Link>
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
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="pagination-outer">
                  <div className="pagination-style1">
                    <ul className="clearfix">
                      <li className="prev">
                        <Link to="/javascript:;">
                          <span>
                            {" "}
                            <i className="fa fa-angle-left" />{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/javascript:;">1</Link>
                      </li>
                      <li className="active">
                        <Link to="/javascript:;">2</Link>
                      </li>
                      <li>
                        <Link to="/javascript:;">3</Link>
                      </li>
                      <li>
                        <Link className="javascript:;" to="/javascript:;">
                          <i className="fa fa-ellipsis-h" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/javascript:;">5</Link>
                      </li>
                      <li className="next">
                        <Link to="/javascript:;">
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
        {/* OUR BLOG END */}
      </div>
      {/* CONTENT END */}
    </div>
  );
};

export default BrowseCandidate;
