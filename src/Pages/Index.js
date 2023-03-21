import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Index = () => {
  const [getAllJob, setGetAllJob] = useState([]);
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
        console.log(response.message);
      })
      .catch((err) => console.log(err));
  }, []);

  const [hireCandidate, setHireCandidate] = useState([]);

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
    <>
      {/* <div className="loading-area">
        <div className="loading-box"></div>
        <div className="loading-pic">
          <div className="wrapper">
            <div className="cssload-loader"></div>
          </div>
        </div>
      </div> */}
      {/* <!-- LOADING AREA  END ====== --> */}

      <div>
        <Header />
        <div
          className="page-content position-relative"
          style={{ zIndex: "1000" }}
        >
          {/* <!--Banner Start--> */}
          <div
            className="twm-home3-banner-section site-bg-white bg-cover"
            style={{
              backgroundImage: "url(jobzilla/images/home-3/banner1.jpg)",
            }}
          >
            <div className="twm-home3-inner-section">
              <div className="twm-bnr-mid-section">
                <div className="twm-bnr-title-large">Find Top IT Jobs</div>
                <div className="twm-bnr-title-light">For talent Developers</div>
                <div className="twm-bnr-discription">
                  Type your keyword, then click search to find your perfect job.
                </div>

                <div className="twm-bnr-search-bar">
                  <form>
                    <div className="row">
                      {/* <!--Title--> */}
                      <div className="form-group col-xl-3 col-lg-6 col-md-6">
                        <label>What</label>
                        <select
                          className="wt-search-bar-select "
                          data-live-search="true"
                          title=""
                          id="j-Job_Title"
                          data-bv-field="size"
                        >
                          <option disabled selected value="">
                            Select Category
                          </option>
                          <option selected>Job Title</option>
                          <option>Web Designer</option>
                          <option>Developer</option>
                          <option>Acountant</option>
                        </select>
                      </div>

                      {/* <!--All Category--> */}
                      <div className="form-group col-xl-4 col-lg-6 col-md-6">
                        <label>Type</label>
                        <select
                          className="wt-search-bar-select "
                          data-live-search="true"
                          title=""
                          id="j-All_Category"
                          data-bv-field="size"
                        >
                          <option disabled selected value="">
                            Select Category
                          </option>
                          <option selected>All Category</option>
                          <option>Web Designer</option>
                          <option>Developer</option>
                          <option>Acountant</option>
                        </select>
                      </div>

                      {/* <!--Location--> */}
                      <div className="form-group col-xl-3 col-lg-6 col-md-6">
                        <label>Location</label>
                        <div className="twm-inputicon-box">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Location"
                          />
                          <i className="twm-input-icon fas fa-map-marker-alt"></i>
                        </div>
                      </div>

                      {/* <!--Find job btn--> */}
                      <div className="form-group col-xl-2 col-lg-6 col-md-6">
                        <button type="button" className="site-button">
                          Find Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="twm-bnr-popular-search">
                  <span className="twm-title">Popular Searches:</span>
                  <Link to="job-list.html">Developer</Link> ,
                  <Link to="job-list.html">Designer</Link> ,
                  <Link to="job-list.html">Architect</Link> ,
                  <Link to="job-list.html">Engineer</Link> ...
                </div>
              </div>
              <div className="twm-bnr-bottom-section">
                <div className="twm-browse-jobs">7,000+ Browse Jobs</div>
                <div className="twm-bnr-blocks-wrap">
                  {/* <!--icon-block-1--> */}
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-1">
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-pink">
                        <span className="counter">12</span>K+
                      </div>
                      <p className="icon-content-info">Companies Jobs</p>
                    </div>
                  </div>

                  {/* <!--icon-block-2--> */}
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-2">
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-yellow">
                        <span className="counter">98</span> +
                      </div>
                      <p className="icon-content-info">Job For Countries </p>
                    </div>
                  </div>
                  {/* 
                            <!--icon-block-3--> */}
                  <div className="twm-bnr-blocks-3 twm-bnr-blocks-position-3">
                    <div className="twm-pics">
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-1.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-2.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-3.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-4.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-5.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider1/user/u-6.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-green">
                        <span className="counter">3</span>K+
                      </div>
                      <p className="icon-content-info">Jobs Done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Banner End--> */}

          {/* <!-- TOP COMPANIES START --> */}
          <div className="section-full p-t120 p-b90 site-bg-white twm-companies-wrap">
            {/* <!-- TITLE START--> */}
            <div className="section-head center wt-small-separator-outer">
              <div className="wt-small-separator site-text-primary">
                <div>Top Companies</div>
              </div>
              <h2 className="wt-title">Get hired in top companies</h2>
            </div>
            {/* <!-- TITLE END--> */}

            <div className="container">
              <div className="section-content">
                <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w1.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w2.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w3.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w4.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w5.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w6.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w1.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w2.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w3.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item">
                    <div className="ow-client-logo">
                      <div className="client-logo client-logo-media">
                        <Link to="employer-list.html">
                          <img
                            src="jobzilla/images/client-logo2/w5.png"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="twm-company-approch2-outer">
                <div className="twm-company-approch2">
                  <div className="row">
                    {/* <!--block 1--> */}
                    <div className="col-lg-4 col-md-4">
                      <div className="counter-outer-two">
                        <div className="icon-content">
                          <div className="tw-count-number site-text-black">
                            <span className="counter">5</span>M+
                          </div>
                          <p className="icon-content-info">
                            Million daily active users
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*     
                                <!--block 2--> */}
                    <div className="col-lg-4 col-md-4">
                      <div className="counter-outer-two">
                        <div className="icon-content">
                          <div className="tw-count-number site-text-black">
                            <span className="counter">9</span>K+
                          </div>
                          <p className="icon-content-info">
                            Open job positions
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*     
                                <!--block 3--> */}
                    <div className="col-lg-4 col-md-4">
                      <div className="counter-outer-two">
                        <div className="icon-content">
                          <div className="tw-count-number site-text-black">
                            <span className="counter">2</span>M+
                          </div>
                          <p className="icon-content-info">
                            Million stories shared
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- TOP COMPANIES END --> */}

          {/* <!-- HOW IT WORK SECTION START --> */}
          <div className="section-full p-t120 p-b90 site-bg-gray twm-how-it-work-area">
            <div className="container">
              {/* 
                    <!-- TITLE START--> */}
              <div className="section-head center wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <div>Working Process</div>
                </div>
                <h2 className="wt-title">How It Works</h2>
              </div>
              {/* <!-- TITLE END--> */}

              <div className="twm-how-it-work-section3">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="twm-w-process-steps3">
                      <div className="twm-w-pro-top">
                        <span className="twm-large-number  text-clr-sky">
                          01
                        </span>
                        <div className="twm-media bg-clr-sky">
                          <span>
                            <img
                              src="jobzilla/images/work-process/icon1.png"
                              alt="icon1"
                            />
                          </span>
                        </div>
                      </div>
                      <h4 className="twm-title">Register Your Account</h4>
                      <p>
                        You need to create an account to find the best and
                        preferred job.
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="twm-w-process-steps3">
                      <div className="twm-w-pro-top">
                        <span className="twm-large-number text-clr-pink">
                          02
                        </span>
                        <div className="twm-media bg-clr-pink">
                          <span>
                            <img
                              src="jobzilla/images/work-process/icon2.png"
                              alt="icon1"
                            />
                          </span>
                        </div>
                      </div>
                      <h4 className="twm-title">Apply For Dream Job</h4>
                      <p>
                        You need to create an account to find the best and
                        preferred job.
                      </p>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="twm-w-process-steps3">
                      <div className="twm-w-pro-top">
                        <span className="twm-large-number  text-clr-green">
                          03
                        </span>
                        <div className="twm-media  bg-clr-green">
                          <span>
                            <img
                              src="jobzilla/images/work-process/icon3.png"
                              alt="icon1"
                            />
                          </span>
                        </div>
                      </div>
                      <h4 className="twm-title">Upload Your Resume</h4>
                      <p>
                        You need to create an account to find the best and
                        preferred job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- HOW IT WORK SECTION END --> */}

          {/* <!-- JOB POST START --> */}
          <div className="section-full p-t120 p-b90 site-bg-gray twm-bg-ring-wrap2">
            <div className="twm-bg-ring-right"></div>
            <div className="twm-bg-ring-left"></div>
            <div className="container">
              <div className="wt-separator-two-part">
                <div className="row wt-separator-two-part-row">
                  <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                    {/* <!-- TITLE START--> */}
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div>All Jobs Post</div>
                      </div>
                      <h2 className="wt-title">
                        Find Your Career You Deserve it
                      </h2>
                    </div>
                    {/* <!-- TITLE END--> */}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                    <Link to="job-list.html" className=" site-button">
                      Browse All Jobs
                    </Link>
                  </div>
                </div>
              </div>

              <div className="section-content">
                <div className="twm-jobs-grid-wrap">
                  <div className="row">
                    {getAllJob?.map((friend, index) => {
                      return (
                        <div className="col-lg-6 col-md-6">
                          <div className="twm-jobs-grid-style1  m-b30">
                            <div className="twm-media">
                              <img
                                src="jobzilla/images/jobs-company/pic1.jpg"
                                alt="#"
                              />
                            </div>
                            <span className="twm-job-post-duration">
                              1 days ago
                            </span>
                            <div className="twm-jobs-category green">
                              <span className="twm-bg-green">New</span>
                            </div>
                            <div className="twm-mid-content">
                              <Link
                                to="job-detail.html"
                                className="twm-job-title"
                              >
                                <h4>{friend.jobtitle}</h4>
                              </Link>
                              <p className="twm-job-address">
                                {friend.completeAddress}
                              </p>
                              <Link
                                to={friend.websiteUrl}
                                className="twm-job-websites site-text-primary"
                              >
                                {friend.websiteUrl}
                              </Link>
                            </div>
                            <div className="twm-right-content">
                              <div className="twm-jobs-amount">
                                {friend.offeredsalary} <span>/ Month</span>
                              </div>
                              <Link
                                to={`/employer-job-detail/${friend._id}`}
                                className="twm-jobs-browse site-text-primary"
                              >
                                Browse Job
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- JOB POST END --> */}

          {/* <!-- CANDIDATES START --> */}
          <div className="section-full p-t120 p-b90 site-bg-white">
            <div className="container">
              {/* <!-- TITLE START--> */}
              <div className="section-head center wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <div>Candidates</div>
                </div>
                <h2 className="wt-title">Featured Candidates</h2>
              </div>
              {/* <!-- TITLE END--> */}

              <div className="section-content">
                <div className="twm-blog-post-3-outer-wrap">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      {/* <!--Block one--> */}
                      {hireCandidate?.map((friend, index) => {
                        return (
                          <div className="twm-candidates-list-style1">
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
                                <h4>{friend.candidateDetails.username} </h4>
                              </Link>
                              <p>{friend.candidateDetails.jobCategory}</p>

                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address">
                                    <i className="feather-map-pin"></i>
                                    {friend.candidateDetails.address}
                                  </p>
                                  <div className="twm-jobs-vacancies">
                                    ${friend.candidateDetails.expectedSalary}
                                    <span>/ Month</span>
                                  </div>
                                </div>
                                <div className="twm-right-btn">
                                  <Link
                                    to={`/candidate-detail/${friend.candidateDetails._id}`}
                                    className="twm-view-prifile site-text-primary"
                                  >
                                    View Profile
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-center m-b30">
                    <Link to="candidate-list.html" className=" site-button">
                      All Candidates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- CANDIDATES END --> */}

          {/* <!-- OUR BLOG START --> */}
          <div className="section-full p-t120 p-b90 site-bg-light-purple">
            <div className="container">
              {/* <!-- TITLE START--> */}
              <div className="section-head center wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <div>Our Blogs</div>
                </div>
                <h2 className="wt-title">Latest Article</h2>
              </div>
              {/* <!-- TITLE END--> */}

              <div className="section-content">
                <div className="twm-blog-post-3-outer-wrap">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {/* <!--Block one--> */}
                      <div className="blog-post twm-blog-post-3-outer">
                        <div className="wt-post-media">
                          <Link to="blog-single.html">
                            <img
                              src="jobzilla/images/blog/latest/bg10.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="wt-post-info">
                          <div className="wt-post-meta ">
                            <ul>
                              <li className="post-date">March 05, 2023</li>
                              <li className="post-author">
                                By{" "}
                                <Link to="candidate-detail.html">
                                  Mark Petter
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="wt-post-title ">
                            <h4 className="post-title">
                              <Link to="blog-single.html">
                                How to convince recruiters.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {/* <!--Block two--> */}
                      <div className="blog-post twm-blog-post-3-outer">
                        <div className="wt-post-media">
                          <Link to="blog-single.html">
                            <img
                              src="jobzilla/images/blog/latest/bg11.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="wt-post-info">
                          <div className="wt-post-meta ">
                            <ul>
                              <li className="post-date">March 05, 2023</li>
                              <li className="post-author">
                                By{" "}
                                <Link to="candidate-detail.html">
                                  David Wish
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="wt-post-title ">
                            <h4 className="post-title">
                              <Link to="blog-single.html">
                                5 things to know about the March.
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                      {/* <!--Block three--> */}
                      <div className="blog-post twm-blog-post-3-outer">
                        <div className="wt-post-media">
                          <Link to="blog-single.html">
                            <img
                              src="jobzilla/images/blog/latest/bg12.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="wt-post-info">
                          <div className="wt-post-meta ">
                            <ul>
                              <li className="post-date">March 05, 2023</li>
                              <li className="post-author">
                                By{" "}
                                <Link to="candidate-detail.html">Mike Doe</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="wt-post-title ">
                            <h4 className="post-title">
                              <Link to="blog-single.html">
                                Job Board is the most important
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- OUR BLOG END --> */}
        </div>
      </div>
      {/* <!--Model Popup Section End--> */}
    </>
  );
};

export default Index;
