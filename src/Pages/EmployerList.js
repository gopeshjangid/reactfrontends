import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import EmployerDetails from "./EmployerDetails";

const EmployerList = () => {
  // console.log(EmployerDetails.fe);
  const [fetchAllcompanyDetails, setFetchAllcompanyDetails] = useState([]);

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
        console.log(response.message);
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
                  <h2 className="wt-title">Employers List</h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="index">Home</Link>
                  </li>
                  <li>Employers List</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- Employer List START --> */}
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
                            <i className="feather-search"></i>
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
                            <i className="feather-map-pin"></i>
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
                                for="exampleCheck1"
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
                                for="exampleCheck2"
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
                                for="exampleCheck3"
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
                                id="exampleCheck4 "
                              />
                              <label
                                className="form-check-label"
                                for="exampleCheck4"
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
                                for="exampleCheck5"
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
                                for="exampleCheck6"
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
                                for="exampleradio1"
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
                                for="exampleradio2"
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
                                for="exampleradio3"
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
                                for="exampleradio4"
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
                                for="exampleradio5"
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
                                for="exampleradio6"
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
                                for="Freelance1"
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
                                for="FullTime1"
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
                                for="Intership1"
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
                                for="Part-Time1"
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
                      <Link to="job-list">General</Link>
                      <Link to="job-list">Jobs </Link>
                      <Link to="job-list">Payment</Link>
                      <Link to="job-list">Application </Link>
                      <Link to="job-list">Work</Link>
                      <Link to="job-list">Recruiting</Link>
                      <Link to="job-list">Employer</Link>
                      <Link to="job-list">Income</Link>
                      <Link to="job-list">Tips</Link>
                    </div>
                  </div>
                </div>

                <div
                  className="twm-advertisment"
                  style={{ backgroundImage: "url(jobzilla/images/add-bg.jpg)" }}
                >
                  <div className="overlay"></div>
                  <h4 className="twm-title">Recruiting?</h4>
                  <p>
                    Get Best Matched Jobs On your <br />
                    Email. Add Resume NOW!
                  </p>
                  <Link to="about-1" className="site-button white">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                {/* <!--Filter Short By--> */}
                <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                  <span className="woocommerce-result-count-left">
                    Showing {fetchAllcompanyDetails?.length} jobs
                  </span>

                  <form className="woocommerce-ordering twm-filter-select">
                    <span className="woocommerce-result-count">Short By</span>
                    <div className="dropdown bootstrap-select wt-select-bar-2 dropup">
                      <select
                        className="wt-select-bar-2 selectpicker"
                        data-live-search="true"
                        data-bv-field="size"
                        tabindex="null"
                      >
                        <option>Most Recent</option>
                        <option>Freelance</option>
                        <option>Full Time</option>
                        <option>Internship</option>
                        <option>Part Time</option>
                        <option>Temporary</option>
                      </select>
                      <button
                        type="button"
                        tabindex="-1"
                        className="btn dropdown-toggle btn-light"
                        data-bs-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-2"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Most Recent"
                      >
                        <div className="filter-option">
                          <div className="filter-option-inner">
                            <div className="filter-option-inner-inner">
                              Most Recent
                            </div>
                          </div>{" "}
                        </div>
                      </button>
                      <div
                        className="dropdown-menu"
                        style={{
                          maxHeight: "157px",
                          overflow: "hidden",
                          minHeight: "150px",
                        }}
                      >
                        <div className="bs-searchbox">
                          <input
                            type="search"
                            className="form-control"
                            autocomplete="off"
                            role="combobox"
                            aria-label="Search"
                            aria-controls="bs-select-2"
                            aria-autocomplete="list"
                            aria-activedescendant="bs-select-2-0"
                          />
                        </div>
                        <div
                          className="inner show"
                          role="listbox"
                          id="bs-select-2"
                          tabindex="-1"
                          style={{
                            maxHeight: "91px",
                            overflow: "hidden auto",
                            minHeight: "84px",
                          }}
                        >
                          <ul
                            className="dropdown-menu inner show"
                            role="presentation"
                            style={{ marginTop: "0px", marginBottom: "0px" }}
                          >
                            <li className="selected active">
                              <a
                                role="option"
                                className="dropdown-item active selected"
                                id="bs-select-2-0"
                                tabindex="0"
                                aria-setsize="6"
                                aria-posinset="1"
                                aria-selected="true"
                              >
                                <span className="text">Most Recent</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                className="dropdown-item"
                                id="bs-select-2-1"
                                tabindex="0"
                              >
                                <span className="text">Freelance</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                className="dropdown-item"
                                id="bs-select-2-2"
                                tabindex="0"
                              >
                                <span className="text">Full Time</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                className="dropdown-item"
                                id="bs-select-2-3"
                                tabindex="0"
                              >
                                <span className="text">Internship</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                className="dropdown-item"
                                id="bs-select-2-4"
                                tabindex="0"
                              >
                                <span className="text">Part Time</span>
                              </a>
                            </li>
                            <li>
                              <a
                                role="option"
                                className="dropdown-item"
                                id="bs-select-2-5"
                                tabindex="0"
                              >
                                <span className="text">Temporary</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

                <div className="twm-employer-list-wrap">
                  {fetchAllcompanyDetails?.map((friend, index) => {
                    return (
                      <ul>
                        <li>
                          <div className="twm-employer-list-style1 mb-5">
                            <div className="twm-media">
                              <img
                                src="jobzilla/images/jobs-company/pic1.jpg"
                                alt="#"
                              />
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to={`/employer-detail/${friend._id}`}
                                className="twm-job-title"
                              >
                                <h4>{friend.companyName}</h4>
                              </Link>
                              <p className="twm-job-address">
                                {friend.address}
                              </p>
                              <Link
                                to={`/employer-detail/${friend._id}`}
                                className="twm-job-websites site-text-primary"
                                // onClick={EmployerDetails()}
                              >
                                Accountancy
                              </Link>
                            </div>
                            <div className="twm-right-content">
                              <div className="twm-jobs-vacancies">
                                <span>25</span>Vacancies
                              </div>
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
                        <Link to="">
                          <span>
                            {" "}
                            <i className="fa fa-angle-left"></i>{" "}
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="">1</Link>
                      </li>
                      <li className="active">
                        <Link to="">2</Link>
                      </li>
                      <li>
                        <Link to="">3</Link>
                      </li>
                      <li>
                        <Link className="" to="">
                          <i className="fa fa-ellipsis-h"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">5</Link>
                      </li>
                      <li className="next">
                        <Link to="">
                          <span>
                            {" "}
                            <i className="fa fa-angle-right"></i>{" "}
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
        {/* <!-- Employer List END --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default EmployerList;
