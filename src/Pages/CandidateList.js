import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CandidateList = () => {
  const [getAllUser, setGetAllUser] = useState([]);
  const [candidate, setCandidate] = useState([]);

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
        setGetAllUser(response.message.sort().reverse());
        const filterData = response.message?.filter(
          (item, index) =>
            item.accountType === "candidate" &&
            item.profileStatus === "complete"
        );

        setCandidate(filterData);
        console.log(filterData);
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
                  <h2 className="wt-title">Candidate List</h2>
                  <h2 className="wt-title"></h2>
                </div>
              </div>
              {/* <!-- BREADCRUMB ROW -->                             */}

              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Candidate List</li>
                </ul>
              </div>

              {/* <!-- BREADCRUMB ROW END -->                         */}
            </div>
          </div>
        </div>
        {/* <!-- INNER PAGE BANNER END --> */}

        {/* <!-- OUR BLOG START --> */}
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
                          <option>Developer</option>/ <option>Acountant</option>
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
                                id="exampleCheck4"
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
                      <Link to="job-list.html">General</Link>
                      <Link to="job-list.html">Jobs </Link>
                      <Link to="job-list.html">Payment</Link>
                      <Link to="job-list.html">Application </Link>
                      <Link to="job-list.html">Work</Link>
                      <Link to="job-list.html">Recruiting</Link>
                      <Link to="job-list.html">Employer</Link>
                      <Link to="job-list.html">Income</Link>
                      <Link to="job-list.html">Tips</Link>
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
                  <Link to="about-1.html" className="site-button white">
                    Read More
                  </Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                {/* <!--Filter Short By--> */}
                <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                  <span className="woocommerce-result-count-left">
                    Showing 2,150 Candidates
                  </span>

                  <form
                    className="woocommerce-ordering twm-filter-select"
                    method="get"
                  >
                    <span className="woocommerce-result-count">Short By</span>
                    <div class="dropdown bootstrap-select wt-select-bar-2">
                      <select
                        class="wt-select-bar-2 selectpicker"
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
                      <button
                        type="button"
                        tabindex="-1"
                        class="btn dropdown-toggle btn-light"
                        data-bs-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-2"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Most Recent"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">
                              Most Recent
                            </div>
                          </div>{" "}
                        </div>
                      </button>
                      <div class="dropdown-menu ">
                        <div class="bs-searchbox">
                          <input
                            type="search"
                            class="form-control"
                            autocomplete="off"
                            role="combobox"
                            aria-label="Search"
                            aria-controls="bs-select-2"
                            aria-autocomplete="list"
                          />
                        </div>
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-2"
                          tabindex="-1"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                    <div class="dropdown bootstrap-select wt-select-bar-2">
                      <select
                        class="wt-select-bar-2 selectpicker"
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
                      <button
                        type="button"
                        tabindex="-1"
                        class="btn dropdown-toggle btn-light"
                        data-bs-toggle="dropdown"
                        role="combobox"
                        aria-owns="bs-select-3"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                        title="Show 10"
                      >
                        <div class="filter-option">
                          <div class="filter-option-inner">
                            <div class="filter-option-inner-inner">Show 10</div>
                          </div>{" "}
                        </div>
                      </button>
                      <div class="dropdown-menu ">
                        <div class="bs-searchbox">
                          <input
                            type="search"
                            class="form-control"
                            autocomplete="off"
                            role="combobox"
                            aria-label="Search"
                            aria-controls="bs-select-3"
                            aria-autocomplete="list"
                          />
                        </div>
                        <div
                          class="inner show"
                          role="listbox"
                          id="bs-select-3"
                          tabindex="-1"
                        >
                          <ul
                            class="dropdown-menu inner show"
                            role="presentation"
                          ></ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* {candidate?.profileStatus === "complete" ? ( */}
                <div className="twm-candidates-list-wrap">
                  {candidate?.map((friend, index) => {
                    return (
                      <ul>
                        <li>
                          <div className="twm-candidates-list-style1 mb-5">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img
                                  src="jobzilla/images/candidates/pic1.jpg"
                                  alt="#"
                                />
                              </div>
                              <div className="twm-candidates-tag">
                                <span>Featured</span>
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="candidate-detail.html"
                                className="twm-job-title"
                              >
                                <h4>{friend.username} </h4>
                              </Link>
                              <p>Charted Accountant</p>

                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address">
                                    <i className="feather-map-pin"></i>
                                    {friend.address}
                                  </p>
                                  <div className="twm-jobs-vacancies">
                                    ${friend.expectedSalary}
                                    <span>/ Year</span>
                                  </div>
                                </div>
                                <div className="twm-right-btn">
                                  <Link
                                    to={`/candidate-detail/${friend._id}`}
                                    className="twm-view-prifile site-text-primary"
                                  >
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                {/* ) : (
                  ""
                )} */}

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
        {/* <!-- OUR BLOG END --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default CandidateList;
