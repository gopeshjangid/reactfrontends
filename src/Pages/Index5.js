import React from "react";
import { Link } from "react-router-dom";

const Index5 = () => {
  return (
    <div>
      {/* <!-- CONTENT START --> */}

      <div class="page-content" style={{ marginTop: "7%" }}>
        {/* <!--Banner Start--> */}
        <div
          class="twm-home5-banner-section"
          style={{
            backgroundImage: "url(jobzilla/images/home-5/slider/bg-1.jpg)",
          }}
        >
          <div class="row">
            {/* <!--Left Section--> */}
            <div class="col-xl-6 col-lg-6 col-md-12 btm-bdr-banner">
              <div class="twm-bnr-left-section">
                <div class="twm-bnr-title-large">
                  It’s Easy to Find Your{" "}
                  <span class="site-text-primary">Dream Job </span>
                </div>
                <div class="twm-bnr-discription">
                  You dream job is waiting for you.
                </div>
                <div class="twm-bnr-search-bar">
                  <form>
                    <div class="row">
                      {/* <!--All Category--> */}
                      <div class="form-group col-xl-4 col-lg-12 col-md-12">
                        <label>Type</label>
                        <select
                          class="wt-search-bar-select selectpicker"
                          data-live-search="true"
                          title=""
                          id="j-All_Category"
                          data-bv-field="size"
                        >
                          <option disabled selected value="">
                            Select Category
                          </option>
                          <option>All Category</option>
                          <option>Web Designer</option>
                          <option>Developer</option>
                          <option>Acountant</option>
                        </select>
                      </div>

                      {/* <!--Location--> */}
                      <div class="form-group col-xl-5 col-lg-12 col-md-12">
                        <label>Location</label>
                        <div class="twm-inputicon-box">
                          <input
                            name="username"
                            type="text"
                            required
                            class="form-control"
                            placeholder="Search..."
                          />
                          <i class="twm-input-icon fas fa-map-marker-alt"></i>
                        </div>
                      </div>

                      {/* <!--Find job btn--> */}
                      <div class="form-group col-xl-3 col-lg-6 col-md-6 col-sm-6">
                        <button type="button" class="site-button">
                          Find Job
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="twm-bnr-5-blocks">
                  <span class="twm-title">Our More Candidates</span>
                  <div class="twm-bnr-5-blocks-inner">
                    <div class="twm-pics">
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
                    <div class="twm-content">
                      <div class="tw-count-number text-clr-green">
                        <span class="counter">3</span>K+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--right Section--> */}
            <div class="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-main">
              <div class="twm-bnr-right-section anm">
                <div
                  class="twm-bnr-right-section-inner anm"
                  data-wow-delay="1000ms"
                  data-speed-x="2"
                  data-speed-y="2"
                >
                  <div class="twm-graphics-h5 twm-p1">
                    <img
                      src="jobzilla/images/home-5/slider/r-pic1.png"
                      alt=""
                    />
                  </div>
                  <div class="twm-graphics-h5 twm-p2">
                    <img
                      src="jobzilla/images/home-5/slider/r-pic2.png"
                      alt=""
                    />
                  </div>

                  <div class="twm-graphics-h5 twm-p3">
                    <img
                      src="jobzilla/images/home-5/slider/r-pic3.png"
                      alt=""
                    />
                  </div>

                  <div class="twm-graphics-h5 twm-p4">
                    <img
                      src="jobzilla/images/home-5/slider/r-pic4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="twm-banner-h5-r-b-info">
                <span>Your Latest Jobs</span>
                <h3 class="twm-banner-h5-r-b-outline-text">Find Jobs</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Banner End--> */}

        {/* <!-- Jobs Category START --> */}
        <div class="section-full p-t120 p-b90 site-bg-white job-categories-home-5-wrap twm-bdr-bottom-1">
          <div class="container">
            {/* <!-- TITLE START--> */}
            <div class="section-head center wt-small-separator-outer">
              <div class="wt-small-separator site-text-primary">
                <div>Browse By Category</div>
              </div>
              <h2 class="wt-title">Find the job that’s perfect for you.</h2>
            </div>
            {/* <!-- TITLE END--> */}
          </div>

          <div class="section-content twm-jobs-grid-h5-section-outer">
            <div
              class="twm-jobs-grid-h5-section overlay-wraper"
              style={{
                backgroundImage: " url(jobzilla/images/home-5/cate-bg.jpg);",
              }}
            >
              <div class="overlay-main site-bg-primary opacity-09"></div>

              <div class="swiper-container category-5-slider">
                <div class="swiper-wrapper">
                  {/* <!--1-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-deal"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Marketing & Sale</Link>
                        <div class="twm-jobs-available">
                          1526 Jobs Available
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--2-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-customer-support"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Customer Help</Link>
                        <div class="twm-jobs-available">
                          1526 Jobs Available
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--3-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-bars"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Finance</Link>
                        <div class="twm-jobs-available">168 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--4-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-dashboard"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Software</Link>
                        <div class="twm-jobs-available">300 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--5-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-hr"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Human Resource</Link>
                        <div class="twm-jobs-available">125 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--6-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-project-management"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Management</Link>
                        <div class="twm-jobs-available">450 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--7-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-user"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Retail & Products</Link>
                        <div class="twm-jobs-available">95 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--8-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-repair"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Security Analyst</Link>
                        <div class="twm-jobs-available">35 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--9-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-note"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Content Writer</Link>
                        <div class="twm-jobs-available">200 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--10-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-coding"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Market Research</Link>
                        <div class="twm-jobs-available">140 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--11-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-job"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Marketing & Sale</Link>
                        <div class="twm-jobs-available">80 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--12-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-hr-manager"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Customer Help</Link>
                        <div class="twm-jobs-available">160 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--13-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-deal"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Marketing & Sale</Link>
                        <div class="twm-jobs-available">
                          1526 Jobs Available
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--14-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-customer-support"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Customer Help</Link>
                        <div class="twm-jobs-available">
                          1526 Jobs Available
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!--15-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-bars"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Finance</Link>
                        <div class="twm-jobs-available">168 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--16-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-dashboard"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Software</Link>
                        <div class="twm-jobs-available">300 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--17-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-hr"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Human Resource</Link>
                        <div class="twm-jobs-available">125 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--18-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-project-management"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Management</Link>
                        <div class="twm-jobs-available">450 Jobs Available</div>
                      </div>
                    </div>
                  </div>
                  {/* 
                              <!--19-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-user"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Retail & Products</Link>
                        <div class="twm-jobs-available">95 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--20-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-repair"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Security Analyst</Link>
                        <div class="twm-jobs-available">35 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--21-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-3">
                        <div class="flaticon-note"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Content Writer</Link>
                        <div class="twm-jobs-available">200 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--22-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-2">
                        <div class="flaticon-coding"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Market Research</Link>
                        <div class="twm-jobs-available">140 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--23-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-4">
                        <div class="flaticon-job"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Marketing & Sale</Link>
                        <div class="twm-jobs-available">80 Jobs Available</div>
                      </div>
                    </div>
                  </div>

                  {/* <!--24-->   */}
                  <div class="swiper-slide">
                    <div class="job-categories-home-5">
                      <div class="twm-media cat-bg-clr-1">
                        <div class="flaticon-hr-manager"></div>
                      </div>
                      <div class="twm-content">
                        <Link to="job-detail.html">Customer Help</Link>
                        <div class="twm-jobs-available">160 Jobs Available</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Add Pagination --> */}
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Recruiters END --> */}

        {/* <!-- Jobs START --> */}
        <div class="section-full p-t120 p-b90 site-bg-white pos-relative twm-bdr-bottom-1">
          <div class="container">
            {/* <!-- TITLE START--> */}
            <div class="section-head center wt-small-separator-outer">
              <div class="wt-small-separator site-text-primary">
                <div>Job of the day</div>
              </div>
              <h2 class="wt-title">
                Connect with the right candidates faster.
              </h2>
            </div>
            {/* <!-- TITLE END--> */}

            <div class="section-content">
              <div class="twm-jobs-grid-h5-wrap">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $500 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic1.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Crystel Inc Pvt. Ltd.
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>UI / UX Designer fulltime</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                86<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $250 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic2.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Infosys BPM Ltd.
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>Full Stack Engineer</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                50<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $250 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic3.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Accenture Plc
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>Frontend Developer</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                200<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $150 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic4.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Infosys BPM Ltd.
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>Products Manager</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                35<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $299 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic5.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Crystel Inc Pvt. Ltd.
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>React Native Web Developer</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                500<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    <div class="twm-jobs-st5  m-b30">
                      <div class="twm-jobs-amount">
                        $500 <span>/ hour</span>
                      </div>
                      <div class="twm-job-st5-top">
                        <div class="twm-media">
                          <img
                            src="jobzilla/images/home-5/jobs-company/pic6.jpg"
                            alt="#"
                          />
                        </div>
                        <div class="twm-com-info">
                          <p class="twm-job-address">New York, US</p>
                          <Link
                            to="https://themeforest.net/user/thewebmax/portfolio"
                            class="twm-job-com-name site-text-primary"
                          >
                            Accenture Plc
                          </Link>
                        </div>
                      </div>

                      <div class="twm-mid-content">
                        <Link to="job-detail.html" class="twm-job-title">
                          <h4>Lead Quality Control QA</h4>
                        </Link>
                        <div class="twm-job-duration">
                          <ul>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="fa fa-calendar-alt"></i>Fulltime
                              </span>
                            </li>
                            <li>
                              <span class="twm-job-post-duration">
                                <i class="far fa-clock"></i>4 Minutes ago
                              </span>
                            </li>
                          </ul>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of printing and
                          typesetting industry
                        </p>
                      </div>
                      <div class="twm-right-content">
                        <div class="twm-candi-thum-content">
                          <div class="twm-pics">
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
                            <div class="tot-view">
                              <b>
                                1K<i>+</i>
                              </b>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="job-detail.html"
                          class="twm-jobs-browse site-text-primary"
                        >
                          Apply Job
                        </Link>
                      </div>
                      <div class="twm-jobs-category outline">
                        <Link to="/javascript:;">AdobeXd</Link>
                        <Link to="/javascript:;">Figma</Link>
                        <Link to="/javascript:;">Photoshop</Link>
                        <Link to="/javascript:;">Corel</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="twm-bg-shape5-left"></div>
        </div>
        {/* <!-- Recruiters END --> */}

        {/* <!-- ABOUT SECTION START --> */}
        <div class="section-full p-t120 p-b0 site-bg-white twm-millions-1-area pos-relative">
          <div class="container">
            <div class="twm-millions-section-wrap">
              <div class="row">
                <div class="col-lg-7 col-md-12">
                  <div class="twm-millions-1-section">
                    <div class="twm-media">
                      <img
                        src="jobzilla/images/home-5/millions-jobs/main-pic.png"
                        alt=""
                      />
                      <div class="twm-circle-jobs-wrap">
                        {/* <!--1--> */}
                        <div class="twm-circle-jobs-box one bounce2">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-1.png"
                              alt="#"
                            />
                          </div>
                        </div>
                        {/* <!--2--> */}
                        <div class="twm-circle-jobs-box two bounce">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-2.png"
                              alt="#"
                            />
                          </div>
                        </div>
                        {/* <!--3--> */}
                        <div class="twm-circle-jobs-box three bounce2">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-3.png"
                              alt="#"
                            />
                          </div>
                        </div>
                        {/* <!--4--> */}
                        <div class="twm-circle-jobs-box four bounce">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-4.png"
                              alt="#"
                            />
                          </div>
                        </div>
                        {/* <!--5--> */}
                        <div class="twm-circle-jobs-box five bounce2">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-5.png"
                              alt="#"
                            />
                          </div>
                        </div>
                        {/* <!--6--> */}
                        <div class="twm-circle-jobs-box six bounce">
                          <div class="twm-circle-job-pics">
                            <img
                              src="jobzilla/images/home-5/millions-jobs/company-6.png"
                              alt="#"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="twm-bg-circle-pic">
                      <img
                        src="jobzilla/images/home-5/millions-jobs/bg-circle.png"
                        alt="#"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 col-md-12">
                  <div class="twm-millions-1-section-right">
                    {/* <!-- TITLE START--> */}
                    <div class="section-head left wt-small-separator-outer">
                      <div class="wt-small-separator site-text-primary">
                        <div>Millions of Jobs</div>
                      </div>
                      <h2 class="wt-title">
                        Find The One That’s Right For You
                      </h2>
                      <p>
                        You need to create an account to find the best and
                        preferred job. lorem Ipsum is simply dummy text of the
                        printing and typesetting industry the standard dummy
                        text ever since took.
                      </p>
                    </div>
                    {/* <!-- TITLE END--> */}
                    <div class="twm-avail-jobs">
                      <span>45 +</span> Jobs Available
                    </div>
                    <div class="twm-read-more cplumn-2">
                      <Link to="about-1.html" class="site-button">
                        Search Jobs
                      </Link>
                      <Link
                        to="about-1.html"
                        class="site-button-link underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="twm-bg-shape5"></div>
        </div>
        {/* <!-- ABOUT SECTION END --> */}

        {/* <!-- Counter SECTION START --> */}
        <div class="section-full p-t0 p-b0 site-bg-white twm-counter-page-5-wrap">
          <div class="container">
            <div class="twm-company-approch5-outer">
              <div
                class="twm-company-approch5"
                style={{
                  backgroundImage: "url(jobzilla/images/home-5/ctr-bg.jpg);",
                }}
              >
                <div class="row">
                  {/* <!--block 1--> */}
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="counter-outer-two">
                      <div class="icon-content">
                        <div class="tw-count-number site-text-white">
                          <span class="counter">25</span>k+
                        </div>
                        <p class="icon-content-info">Completed Cases</p>
                      </div>
                    </div>
                  </div>

                  {/* <!--block 2--> */}
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="counter-outer-two">
                      <div class="icon-content">
                        <div class="tw-count-number site-text-white">
                          <span class="counter">17</span>+
                        </div>
                        <p class="icon-content-info">Our Office</p>
                      </div>
                    </div>
                  </div>

                  {/* <!--block 3--> */}
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="counter-outer-two">
                      <div class="icon-content">
                        <div class="tw-count-number site-text-white">
                          <span class="counter">86</span>+
                        </div>
                        <p class="icon-content-info">Skilled People</p>
                      </div>
                    </div>
                  </div>

                  {/* <!--block 4--> */}
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="counter-outer-two">
                      <div class="icon-content">
                        <div class="tw-count-number site-text-white">
                          <span class="counter">28</span>+
                        </div>
                        <p class="icon-content-info">Happy Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Counter SECTION END --> */}

        {/* <!-- Recruiters START --> */}
        <div class="section-full p-t120 p-b90 site-bg-white">
          <div class="container">
            {/* <!-- TITLE START--> */}
            <div class="section-head center wt-small-separator-outer">
              <div class="wt-small-separator site-text-primary">
                <div>Top Recruiters</div>
              </div>
              <h2 class="wt-title">Discover your next career move</h2>
            </div>
            {/* <!-- TITLE END--> */}

            <div class="section-content">
              <div class="twm-recruiters5-wrap">
                <div class="twm-column-5 m-b30">
                  <ul>
                    {/* <!--1--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/1.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">LinkedIn</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--2--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/2.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Apple Inc.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--3--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/3.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Saudi Aramco</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--4--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/4.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Alphabet Inc.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--5--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/5.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Amazon.com Inc.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--6--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/6.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Tesla Inc.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--7--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/7.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">NVIDIA Corp.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--8--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/8.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Hathaway Inc.</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--9--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/9.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">NVIDIA Corp</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--10--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/10.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Meta Platforms</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--11--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/11.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Youtube</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--12--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/12.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Instagram</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--13--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/13.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">McKesson</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--14--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/14.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Foxconn</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <!--15--> */}
                    <li>
                      <div class="twm-recruiters5-box">
                        <div class="twm-rec-top">
                          <div class="twm-rec-media">
                            <img
                              src="jobzilla/images/home-5/recruiters/15.jpg"
                              alt="#"
                            />
                          </div>
                          <div class="twm-rec-jobs">25 Jobs</div>
                        </div>
                        <div class="twm-rec-content">
                          <h4 class="twm-title">
                            <Link to="job-list.html">Microsoft</Link>
                          </h4>
                          <div class="twm-rec-rating-wrap">
                            <div class="twm-rec-rating">
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                              <span>
                                <i class="fa fa-star"></i>
                              </span>
                            </div>
                            <div class="twm-rec-rating-count">(68)</div>
                          </div>
                          <div class="twm-job-address">
                            <i class="feather-map-pin"></i>New York, US
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="text-center m-b30">
                  <Link to="job-list.html" class=" site-button">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Recruiters END --> */}
        {/* 
            <!-- FEATURED Cities SECTION START --> */}
        <div class="section-full p-t120 pos-relative site-bg-white twm-featured-city-area">
          <div class="twm-bg-section-box"></div>
          <div class="container">
            {/* <!-- TITLE START--> */}
            <div class="wt-separator-two-part content-white">
              <div class="row wt-separator-two-part-row">
                <div class="col-xl-5 col-lg-5 col-md-12 wt-separator-two-part-left">
                  {/* <!-- TITLE START--> */}
                  <div class="section-head left wt-small-separator-outer">
                    <div class="wt-small-separator site-text-primary">
                      <div>Jobs by location</div>
                    </div>
                    <h2 class="wt-title">Find your favourite jobs and get.</h2>
                  </div>
                  {/* <!-- TITLE END--> */}
                </div>
                <div class="col-xl-7 col-lg-7 col-md-12 wt-separator-two-part-right textto-right">
                  <Link to="job-list.html" class=" site-button white">
                    View All Locations
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- TITLE END--> */}

            <div class="twm-featured-city2-section">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city1.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">London, England</Link>
                      </h4>
                      <div class="twm-city-jobs">125 Jobs</div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city2.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">Paris, France</Link>
                      </h4>
                      <div class="twm-city-jobs">260 Jobs</div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-5 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city3.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">New York, USA</Link>
                      </h4>
                      <div class="twm-city-jobs">300 Jobs</div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city4.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">Bankok, Thailand</Link>
                      </h4>
                      <div class="twm-city-jobs">2k Jobs</div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-5 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city5.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">Helsinki , Finland</Link>
                      </h4>
                      <div class="twm-city-jobs">1.5k Jobs</div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="twm-featured-city2">
                    <div
                      class="twm-media"
                      style={{
                        backgroundImage:
                          "url(jobzilla/images/home-5/featured-cities/city6.jpg);",
                      }}
                    ></div>
                    <div class="twm-city-info">
                      <h4 class="twm-title">
                        <Link to="job-list.html">Berlin, Germany</Link>
                      </h4>
                      <div class="twm-city-jobs">700 Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FEATURED SECTION END --> */}

        {/* <!-- OUR BLOG START --> */}
        <div class="section-full p-t120 p-b90 site-bg-white">
          <div class="container">
            {/* <!-- TITLE START--> */}
            <div class="section-head center wt-small-separator-outer">
              <div class="wt-small-separator site-text-primary">
                <div>News and Blogs</div>
              </div>
              <h2 class="wt-title">Get the latest news, updates and tips</h2>
            </div>
            {/* <!-- TITLE END--> */}

            <div class="section-content">
              <div class="twm-blog-post-h5-wrap">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    {/* <!--Block one--> */}
                    <div class="blog-post twm-blog-post-h5-outer">
                      <div class="wt-post-media">
                        <Link to="blog-single.html">
                          <img
                            src="jobzilla/images/home-5/blog/pic1.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="wt-post-info">
                        <div class="post-author">
                          <div class="post-author-pic">
                            <div class="p-a-pic">
                              <img
                                src="jobzilla/images/home-5/blog-avtar/pic1.jpg"
                                alt=""
                              />
                            </div>
                            <div class="p-a-info">
                              <Link to="blog-single.html">Ralph Johnson</Link>
                              <p>12 January</p>
                            </div>
                          </div>
                          <div class="post-categories">
                            <Link to="blog-single.html">Events</Link>
                          </div>
                        </div>
                        <div class="wt-post-title ">
                          <h4 class="post-title">
                            <Link to="blog-single.html">
                              How to convince recruiters and get your dream job
                            </Link>
                          </h4>
                        </div>
                        <div class="wt-post-text ">
                          <p>
                            New chip traps clusters of migrating tumor cells
                            asperiortenetur, blanditiis odit.
                          </p>
                        </div>
                        <div class="wt-post-readmore ">
                          <Link
                            to="blog-single.html"
                            class="site-button-link site-text-primary"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    {/* <!--Block two--> */}
                    <div class="blog-post twm-blog-post-h5-outer">
                      <div class="wt-post-media">
                        <Link to="blog-single.html">
                          <img
                            src="jobzilla/images/home-5/blog/pic2.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="wt-post-info">
                        <div class="post-author">
                          <div class="post-author-pic">
                            <div class="p-a-pic">
                              <img
                                src="jobzilla/images/home-5/blog-avtar/pic2.jpg"
                                alt=""
                              />
                            </div>
                            <div class="p-a-info">
                              <Link to="blog-single.html">
                                Christina Fischer
                              </Link>
                              <p>12 January</p>
                            </div>
                          </div>
                          <div class="post-categories">
                            <Link to="blog-single.html">Events</Link>
                          </div>
                        </div>
                        <div class="wt-post-title ">
                          <h4 class="post-title">
                            <Link to="blog-single.html">
                              How to convince recruiters and get your dream job
                            </Link>
                          </h4>
                        </div>
                        <div class="wt-post-text ">
                          <p>
                            New chip traps clusters of migrating tumor cells
                            asperiortenetur, blanditiis odit.
                          </p>
                        </div>
                        <div class="wt-post-readmore ">
                          <Link
                            to="blog-single.html"
                            class="site-button-link site-text-primary"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6">
                    {/* <!--Block three--> */}
                    <div class="blog-post twm-blog-post-h5-outer">
                      <div class="wt-post-media">
                        <Link to="blog-single.html">
                          <img
                            src="jobzilla/images/home-5/blog/pic3.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div class="wt-post-info">
                        <div class="post-author">
                          <div class="post-author-pic">
                            <div class="p-a-pic">
                              <img
                                src="jobzilla/images/home-5/blog-avtar/pic3.jpg"
                                alt=""
                              />
                            </div>
                            <div class="p-a-info">
                              <Link to="blog-single.html">Peter Hawkins</Link>
                              <p>12 January</p>
                            </div>
                          </div>
                          <div class="post-categories">
                            <Link to="blog-single.html">Events</Link>
                          </div>
                        </div>
                        <div class="wt-post-title ">
                          <h4 class="post-title">
                            <Link to="blog-single.html">
                              How to convince recruiters and get your dream job
                            </Link>
                          </h4>
                        </div>
                        <div class="wt-post-text ">
                          <p>
                            New chip traps clusters of migrating tumor cells
                            asperiortenetur, blanditiis odit.
                          </p>
                        </div>
                        <div class="wt-post-readmore ">
                          <Link
                            to="blog-single.html"
                            class="site-button-link site-text-primary"
                          >
                            Read More
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
        {/* <!-- OUR BLOG END --> */}

        {/* <!-- Newsletter Subscriber SECTION START --> */}
        <div
          class="section-full p-t60 site-bg-white twm-new-sub-section-wrap site-bg-cover"
          style={{ backgroundImage: " url(jobzilla/images/dotted-map.png);" }}
        >
          <div class="container">
            <div class="section-content">
              <div class="row">
                <div class="col-lg-3 col-md-12">
                  <div class="twm-nl-map-media-wrap">
                    <div class="twm-nl-map-pointer">
                      <div class="twm-nl-map-pic nw-pic1 bounce">
                        <img src="jobzilla/images/nl-pic/pic1.jpg" alt="#" />
                      </div>
                      <div class="twm-nl-map-pic nw-pic2 bounce2">
                        <img src="jobzilla/images/nl-pic/pic2.jpg" alt="#" />
                      </div>
                      <div class="twm-nl-map-pic nw-pic3 bounce">
                        <img src="jobzilla/images/nl-pic/pic3.jpg" alt="#" />
                      </div>
                      <div class="twm-nl-map-pic nw-pic4 bounce2">
                        <img src="jobzilla/images/nl-pic/pic4.jpg" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div
                    class="twm-sub-2-section site-bg-cover"
                    style={{
                      backgroundImage: " url(jobzilla/images/nwl-bg.png);",
                    }}
                  >
                    <h3 class="twm-sub-title">Subscribe to Our Newsletter</h3>
                    <div class="twm-sub-discription">
                      Get the latest updates mailed to you
                    </div>
                    <form>
                      <div class="form-group">
                        <input
                          name="news-letter"
                          class="form-control"
                          placeholder="Enter Your Email Address"
                          type="text"
                        />
                      </div>
                      <button class="site-button twm-sub-btn white">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-lg-3 col-md-12">
                  <div class="twm-nl-map-media-wrap">
                    <div class="twm-nl-map-pointer">
                      <div class="twm-nl-map-pic nw-pic5 bounce">
                        <img src="jobzilla/images/nl-pic/pic5.jpg" alt="#" />
                      </div>
                      <div class="twm-nl-map-pic nw-pic6 bounce2">
                        <img src="jobzilla/images/nl-pic/pic6.jpg" alt="#" />
                      </div>
                      <div class="twm-nl-map-pic nw-pic7 bounce">
                        <img src="jobzilla/images/nl-pic/pic7.jpg" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Newsletter Subscriber TABLE SECTION END --> */}
      </div>
      {/* <!-- CONTENT END --> */}
    </div>
  );
};

export default Index5;
