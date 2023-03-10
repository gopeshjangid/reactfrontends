import React from "react";
import { Link } from "react-router-dom";

const Index4 = () => {
  return (
    <div>
      {/* <!-- CONTENT START --> */}
      <div className="page-content">
        <div className="twm-home4-banner-section site-bg-light-purple">
          <div className="row">
            {/* <!--Left Section--> */}
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="twm-bnr-left-section">
                <div className="twm-bnr-title-large">
                  Your <span className="site-text-primary">Dream Job </span> in
                  one place
                </div>
                <div className="twm-bnr-discription">
                  Find jobs that match your interests with us.
                </div>
                <div className="twm-bnr-search-bar">
                  <form>
                    <div className="row">
                      {/* <!--Title--> */}
                      <div className="form-group col-xl-8 col-lg-8 col-md-8">
                        <label>What</label>
                        <div className="twm-single-iput">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control  bg-none"
                            placeholder="Job title, Keywords, or company"
                          />
                        </div>
                      </div>

                      {/* <!--Find job btn--> */}
                      <div className="form-group col-xl-4 col-lg-4 col-md-4">
                        <button type="button" className="site-button">
                          Find Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="twm-bnr-popular-search">
                  <span className="twm-title">Popular Searches:</span>
                  <Link href="job-list.html">Developer</Link> ,
                  <Link href="job-list.html">Designer</Link> ,
                  <Link href="job-list.html">Architect</Link> ,
                  <Link href="job-list.html">Engineer</Link> ,
                  <Link href="job-list.html">PHP</Link> ,
                  <Link href="job-list.html">Banking</Link> ,
                  <Link href="job-list.html">Ios</Link> ,
                  <Link href="job-list.html">Freelance</Link> ,
                  <Link href="job-list.html">Writing</Link> ,
                  <Link href="job-list.html">Accountancy</Link>...
                </div>
              </div>
            </div>

            {/* <!--right Section--> */}
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div
                className="twm-bnr-right-section anm"
                data-wow-delay="1000ms"
                data-speed-x="2"
                data-speed-y="2"
              >
                <div className="twm-graphics-h3 twm-bg-line">
                  <img src="jobzilla/images/home-4/banner/bg-line.png" alt="" />
                </div>

                <div className="twm-graphics-user twm-user">
                  <img src="jobzilla/images/home-4/banner/user.png" alt="" />
                </div>

                <div className="twm-graphics-h3 twm-bg-plate">
                  <img
                    src="jobzilla/images/home-4/banner/bg-plate.png"
                    alt=""
                  />
                </div>

                <div className="twm-graphics-h3 twm-checked-plate">
                  <img
                    src="jobzilla/images/home-4/banner/checked-plate.png"
                    alt=""
                  />
                </div>

                <div className="twm-graphics-h3 twm-blue-block">
                  <img
                    src="jobzilla/images/home-4/banner/blue-block.png"
                    alt=""
                  />
                </div>

                <div className="twm-graphics-h3 twm-color-dotts">
                  <img
                    src="jobzilla/images/home-4/banner/color-dotts.png"
                    alt=""
                  />
                </div>

                <div
                  className="twm-graphics-h3 twm-card-large anm"
                  data-speed-y="-2"
                  data-speed-scale="-15"
                  data-speed-opacity="50"
                >
                  <img src="jobzilla/images/home-4/banner/card.png" alt="" />
                </div>

                <div
                  className="twm-graphics-h3 twm-card-s1 anm"
                  data-speed-y="2"
                  data-speed-scale="15"
                  data-speed-opacity="50"
                >
                  <img src="jobzilla/images/home-4/banner/card-s1.png" alt="" />
                </div>

                <div
                  className="twm-graphics-h3 twm-card-s2 anm"
                  data-speed-x="-4"
                  data-speed-scale="-25"
                  data-speed-opacity="50"
                >
                  <img src="jobzilla/images/home-4/banner/card-s2.png" alt="" />
                </div>

                <div className="twm-graphics-h3 twm-white-dotts">
                  <img
                    src="jobzilla/images/home-4/banner/white-dotts.png"
                    alt=""
                  />
                </div>

                <div
                  className="twm-graphics-h3 twm-top-shadow anm"
                  data-speed-x="-16"
                  data-speed-y="2"
                  data-speed-scale="50"
                  data-speed-rotate="25"
                >
                  <img
                    src="jobzilla/images/home-4/banner/top-shadow.png"
                    alt=""
                  />
                </div>

                <div
                  className="twm-graphics-h3 twm-bottom-shadow anm"
                  data-speed-x="16"
                  data-speed-y="2"
                  data-speed-scale="20"
                  data-speed-rotate="25"
                >
                  <img
                    src="jobzilla/images/home-4/banner/bottom-shadow.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- JOBS CATEGORIES SECTION START --> */}
        <div className="section-full p-t120 p-b90 site-bg-white twm-job-categories-area3">
          <div className="container">
            <div className="wt-separator-two-part">
              <div className="row wt-separator-two-part-row">
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                  {/* <!-- TITLE START--> */}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <div>Jobs by Categories</div>
                    </div>
                    <h2 className="wt-title">Choose Your Desire Category</h2>
                  </div>
                  {/* <!-- TITLE END--> */}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                  <Link href="job-list.html" className=" site-button">
                    All Categories
                  </Link>
                </div>
              </div>
            </div>

            <div className="twm-job-categories-section-3 m-b30">
              <div className="job-categories-style3">
                <div className="row">
                  {/* <!-- COLUMNS 1 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-dashboard"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">9,185 Jobs</div>
                          <Link href="job-detail.html">
                            Business Development
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 2 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-project-management"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">3,205 Jobs</div>
                          <Link href="job-detail.html">Project Management</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 3 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-note"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">2,100 Jobs</div>
                          <Link href="job-detail.html">
                            Content Writer & Blogging
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 4 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-customer-support"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">1,500 Jobs</div>
                          <Link href="job-detail.html">Costomer Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 5 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-bars"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">9,185 Jobs</div>
                          <Link href="job-detail.html">Accounting Finance</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- COLUMNS 6 -->  */}
                  <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 m-b30">
                    <div className="job-categories-3-wrap">
                      <div className="job-categories-3">
                        <div className="twm-media">
                          <div className="flaticon-user"></div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">3,205 Jobs</div>
                          <Link href="job-detail.html">
                            Sales and Marketing
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- JOBS CATEGORIES SECTION END --> */}

        {/* <!-- ABOUT SECTION START --> */}
        <div className="section-full p-t120 p-b90 site-bg-gray twm-about-1-area">
          <div className="container">
            <div className="twm-about-1-section-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="twm-about-1-section">
                    <div className="twm-media">
                      <img src="jobzilla/images/home-4/about/ab-1.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="twm-about-1-section-right">
                    {/* <!-- TITLE START--> */}
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div>About </div>
                      </div>
                      <h2 className="wt-title">
                        Millions of jobs. Find the one that’s right for you.
                      </h2>
                    </div>
                    {/* <!-- TITLE END--> */}
                    <ul className="description-list">
                      <li>
                        <i className="feather-check"></i>
                        Full lifetime access
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        20+ downloadable resources
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Certificate of completion
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Free Trial 7 Days
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="twm-about-1-bottom-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  {/* <!--icon-block-1--> */}
                  <div className="twm-card-blocks">
                    <div className="twm-icon pink">
                      <img
                        src="jobzilla/images/main-slider/slider2/icon-2.png"
                        alt=""
                      />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-pink">
                        <span className="counter">98</span> +
                      </div>
                      <p className="icon-content-info">Job For Countries </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  {/* <!--icon-block-2--> */}
                  <div className="twm-card-blocks-2">
                    <div className="twm-pics">
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-1.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-2.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-3.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-4.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-5.jpg"
                          alt=""
                        />
                      </span>
                      <span>
                        <img
                          src="jobzilla/images/main-slider/slider2/user/u-6.jpg"
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

                <div className="col-lg-4 col-md-6">
                  {/* <!--icon-block-3--> */}
                  <div className="twm-card-blocks">
                    <div className="twm-icon">
                      <img
                        src="jobzilla/images/main-slider/slider2/icon-1.png"
                        alt=""
                      />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-sky">
                        <span className="counter">12</span>K+
                      </div>
                      <p className="icon-content-info">Companies Jobs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ABOUT SECTION END --> */}

        {/* <!-- How It Work START --> */}
        <div className="section-full site-bg-primary twm-how-it-work-1-area">
          <div className="container">
            <div className="section-content">
              <div className="twm-how-it-work-1-content">
                <div className="row">
                  <div className="col-xl-5 col-lg-12 col-md-12">
                    <div className="twm-how-it-work-1-left">
                      <div className="twm-how-it-work-1-section">
                        {/* <!-- TITLE START--> */}
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator">
                            <div>How it Works</div>
                          </div>
                          <h2>Follow our steps we will help you.</h2>
                        </div>
                        {/* <!-- TITLE END--> */}

                        <div className="twm-step-section-4">
                          <ul>
                            <li>
                              <div className="twm-step-count bg-clr-sky-light">
                                01
                              </div>
                              <div className="twm-step-content">
                                <h4 className="twm-title">
                                  Register Your Account
                                </h4>
                                <p>
                                  You need to create an account to find the best
                                  and preferred job.
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="twm-step-count bg-clr-yellow-light">
                                02
                              </div>
                              <div className="twm-step-content">
                                <h4 className="twm-title">Search Your Job</h4>
                                <p>
                                  After creating an account, search for your
                                  favorite job.
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="twm-step-count bg-clr-pink-light">
                                03
                              </div>
                              <div className="twm-step-content">
                                <h4 className="twm-title">
                                  Apply For Dream Job
                                </h4>
                                <p>
                                  After creating the account, you have to apply
                                  for the desired job.
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="twm-step-count bg-clr-green-light">
                                04
                              </div>
                              <div className="twm-step-content">
                                <h4 className="twm-title">
                                  Upload Your Resume
                                </h4>
                                <p>
                                  Upload your resume after filling all the
                                  relevant information.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-12 col-md-12">
                    <div className="twm-how-it-right-section">
                      <div className="twm-media">
                        <div className="twm-bg-circle">
                          <img
                            src="jobzilla/images/home-4/how-it-work/bg-circle-large.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="twm-block-left anm"
                          data-speed-x="-4"
                          data-speed-scale="-25"
                        >
                          <img
                            src="jobzilla/images/home-4/how-it-work/block-left.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="twm-block-right anm"
                          data-speed-x="-4"
                          data-speed-scale="-25"
                        >
                          <img
                            src="jobzilla/images/home-4/how-it-work/block-right.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="twm-main-bg anm"
                          data-wow-delay="1000ms"
                          data-speed-x="2"
                          data-speed-y="2"
                        >
                          <img
                            src="jobzilla/images/home-4/how-it-work/main-bg.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- How It Work END --> */}

        {/* <!-- TOP COMPANIES START --> */}
        <div className="section-full p-t120 p-b90 site-bg-gray twm-companies-wrap">
          <div className="container">
            <div className="section-content">
              <div className="owl-carousel home-client-carousel4 owl-btn-vertical-center">
                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w1.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w3.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w4.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w5.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w6.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w1.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w2.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w3.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="ow-client-logo">
                    <div className="client-logo client-logo-media">
                      <Link href="employer-list.html">
                        <img src="jobzilla/images/client-logo2/w5.png" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- TOP COMPANIES END --> */}

        {/* 
            <!-- EXPLORE NEW LIFE START --> */}
        <div className="section-full site-bg-light-purple twm-for-employee-4">
          <div className="container">
            <div className="section-content">
              <div className="twm-for-employee-content">
                <div className="row">
                  <div className="col-xl-5 col-lg-12 col-md-12">
                    <div className="twm-explore-content-outer2">
                      <div className="twm-explore-top-section">
                        {/* <!-- TITLE START--> */}
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator site-text-primary">
                            <div>About </div>
                          </div>
                          <h2>We help you connect with the organizer</h2>
                          <p>
                            Get paid easily and security. Use our resources to
                            become independent and showcase your professional
                            skills.
                          </p>
                        </div>
                        {/* <!-- TITLE END--> */}
                        <div className="twm-read-more">
                          <Link href="about-1.html" className="site-button">
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-12 col-md-12">
                    <div className="twm-explore-right-section">
                      <div className="twm-media">
                        <div className="twm-bg-circle">
                          <img
                            src="jobzilla/images/home-4/bg-circle.png"
                            alt=""
                          />
                        </div>
                        <div className="twm-employee-pic">
                          <img
                            src="jobzilla/images/home-4/employee.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="twm-shot-pic1  anm"
                          data-speed-x="-4"
                          data-speed-scale="-25"
                        >
                          <img src="jobzilla/images/home-4/sq-1.png" alt="" />
                        </div>
                        <div
                          className="twm-shot-pic2 anm"
                          data-wow-delay="1000ms"
                          data-speed-x="2"
                          data-speed-y="2"
                        >
                          <img
                            src="jobzilla/images/home-4/triangle.png"
                            alt=""
                          />
                        </div>
                        <div
                          className="twm-shot-pic3  anm"
                          data-speed-x="-4"
                          data-speed-scale="-25"
                        >
                          <img src="jobzilla/images/home-4/circle.png" alt="" />
                        </div>
                      </div>

                      {/* <!--block 1--> */}
                      <div
                        className="counter-outer-two one anm"
                        data-speed-y="-2"
                        data-speed-scale="15"
                        data-speed-opacity="1"
                      >
                        <div className="icon-content">
                          <div className="tw-count-number text-clr-yellow-2">
                            <span className="counter">5</span>M+
                          </div>
                          <p className="icon-content-info">
                            Million daily active users
                          </p>
                        </div>
                      </div>

                      {/* <!--block 2--> */}
                      <div
                        className="counter-outer-two two anm"
                        data-speed-y="2"
                        data-speed-scale="15"
                        data-speed-opacity="5"
                      >
                        <div className="icon-content">
                          <div className="tw-count-number text-clr-green">
                            <span className="counter">9</span>K+
                          </div>
                          <p className="icon-content-info">
                            Open job positions
                          </p>
                        </div>
                      </div>

                      {/* <!--block 3--> */}
                      <div
                        className="counter-outer-two three anm"
                        data-speed-x="-4"
                        data-speed-scale="-25"
                      >
                        <div className="icon-content">
                          <div className="tw-count-number text-clr-pink">
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
        </div>
        {/* <!-- EXPLORE NEW LIFE END --> */}
        {/* 
            <!-- JOB POST START --> */}
        <div className="section-full p-t120 p-b90 site-bg-gray twm-bg-ring-wrap2">
          <div className="container">
            <div className="wt-separator-two-part">
              <div className="row wt-separator-two-part-row">
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-left">
                  {/* <!-- TITLE START--> */}
                  <div className="section-head left wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                      <div>Featured Jobs</div>
                    </div>
                    <h2 className="wt-title">
                      You can actually invent things here
                    </h2>
                  </div>
                  {/* <!-- TITLE END--> */}
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 wt-separator-two-part-right text-right">
                  <Link href="job-list.html" className=" site-button">
                    Browse All Jobs
                  </Link>
                </div>
              </div>
            </div>

            <div className="section-content">
              <div className="twm-jobs-grid-wrap">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic1.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-green">New</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4>Senior Web Designer</h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i>London, UK
                        </p>
                        <span className="twm-job-post-duration">
                          1 days ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic2.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-brown">Intership</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4>Senior Stock Technician</h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i>Florida, US
                        </p>
                        <span className="twm-job-post-duration">
                          15 days ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic3.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-purple">Fulltime</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4 className="twm-job-title">
                            IT Department Manager
                          </h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i>Alaska, US
                        </p>
                        <span className="twm-job-post-duration">
                          6 Month ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic4.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-sky">Freelancer</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4 className="twm-job-title">
                            Art Production Specialist
                          </h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i>Texas, US
                        </p>
                        <span className="twm-job-post-duration">
                          2 days ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic5.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-golden">Temporary</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4 className="twm-job-title">
                            Recreation & Fitness
                          </h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i>Georgia US
                        </p>
                        <span className="twm-job-post-duration">
                          1 days ago
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div className="twm-jobs-featured-style1 m-b30">
                      <div className="twm-media">
                        <img
                          src="jobzilla/images/jobs-company/pic1.jpg"
                          alt="#"
                        />
                      </div>

                      <div className="twm-jobs-category green">
                        <span className="twm-bg-green">New</span>
                      </div>
                      <div className="twm-mid-content">
                        <Link href="job-detail.html" className="twm-job-title">
                          <h4>Senior Web Developer</h4>
                        </Link>
                      </div>
                      <div className="twm-bot-content">
                        <p className="twm-job-address">
                          <i className="feather-map-pin"></i> Arizona, US
                        </p>
                        <span className="twm-job-post-duration">
                          1 days ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- JOB POST END --> */}

        {/* <!-- PRICING TABLE SECTION START --> */}
        <div className="section-full p-t120 p-b90 site-bg-white tw-pricing-area">
          <div className="container">
            {/* <!-- TITLE START--> */}
            <div className="section-head left wt-small-separator-outer">
              <div className="wt-small-separator site-text-primary">
                <div>Choose Your Plan</div>
              </div>
              <h2 className="wt-title">Save up to 10%</h2>
            </div>
            {/* <!-- TITLE END--> */}

            <div className="section-content">
              <div className="twm-tabs-style-1">
                <ul className="nav nav-tabs" id="myTab3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="Monthly"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                    >
                      Monthly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="annual"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                    >
                      Annual
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTab3Content">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="Monthly"
                  >
                    <div className="pricing-block-outer">
                      <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 m-b30">
                          <div className="pricing-table-1">
                            <div className="p-table-title">
                              <h4 className="wt-title">Basic</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$90/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>0 featured job
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>job displayed
                                    fo 20 days
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>Premium support
                                    24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                          <div className="pricing-table-1 circle-yellow">
                            <div className="p-table-recommended">
                              Recommended
                            </div>
                            <div className="p-table-title">
                              <h4 className="wt-title">Standard</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$248/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>0 featured
                                    job
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>job
                                    displayed fo 20 days
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>Premium support
                                    24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 m-b30">
                          <div className="pricing-table-1 circle-pink">
                            <div className="p-table-title">
                              <h4 className="wt-title">Extended</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$499/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>0 featured
                                    job
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>job
                                    displayed fo 20 days
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>Premium
                                    support 24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="annual"
                  >
                    <div className="pricing-block-outer">
                      <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 m-b30">
                          <div className="pricing-table-1">
                            <div className="p-table-title">
                              <h4 className="wt-title">Basic</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$149/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>0 featured job
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>job displayed
                                    fo 20 days
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>Premium support
                                    24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 p-table-highlight m-b30">
                          <div className="pricing-table-1 circle-yellow">
                            <div className="p-table-recommended">
                              Recommended
                            </div>
                            <div className="p-table-title">
                              <h4 className="wt-title">Standard</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$499/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>0 featured
                                    job
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>job
                                    displayed fo 20 days
                                  </li>
                                  <li className="disable">
                                    <i className="feather-x"></i>Premium support
                                    24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 m-b30">
                          <div className="pricing-table-1 circle-pink">
                            <div className="p-table-title">
                              <h4 className="wt-title">Extended</h4>
                            </div>
                            <div className="p-table-inner">
                              <div className="p-table-price">
                                <span>$1499/</span>
                                <p>Monthly</p>
                              </div>
                              <div className="p-table-list">
                                <ul>
                                  <li>
                                    <i className="feather-check"></i>1 job
                                    posting
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>0 featured
                                    job
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>job
                                    displayed fo 20 days
                                  </li>
                                  <li>
                                    <i className="feather-check"></i>Premium
                                    support 24/7
                                  </li>
                                </ul>
                              </div>
                              <div className="p-table-btn">
                                <Link
                                  href="about-1.html"
                                  className="site-button"
                                >
                                  Purchase Now
                                </Link>
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
        {/* <!-- PRICING TABLE SECTION END -->  */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default Index4;
