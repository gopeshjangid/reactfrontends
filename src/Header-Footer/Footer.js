import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer-dark"
        style={{ backgroundImage: "url(jobzilla/images/f-bg.jpg)" }}
      >
        <div className="container">
          {/* <!-- NEWS LETTER SECTION START --> */}
          <div className="ftr-nw-content">
            <div className="row">
              <div className="col-md-5">
                <div className="ftr-nw-title">
                  Join our email subscription now to get updates on new jobs and
                  notifications.
                </div>
              </div>
              <div className="col-md-7">
                <form>
                  <div className="ftr-nw-form">
                    <input
                      name="news-letter"
                      className="form-control"
                      placeholder="Enter Your Email"
                      type="text"
                    />
                    <button className="ftr-nw-subcribe-btn">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- NEWS LETTER SECTION END --> */}
          {/* <!-- FOOTER BLOCKES START -->   */}
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix">
                    <Link to="index.html">
                      <img src="images/logo-light.png" alt="" />
                    </Link>
                  </div>
                  <p>
                    Many desktop publishing packages and web page editors now.
                  </p>
                  <ul className="ftr-list">
                    <li>
                      <p>
                        <span>Address :</span>65 Sunset CA 90026, USA{" "}
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email :</span>example@max.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Call :</span>555-555-1234
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-9 col-md-12">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Candidate</h3>
                      <ul>
                        <li>
                          <Link to="dashboard.html">User Dashboard</Link>
                        </li>
                        <li>
                          <Link to="dash-resume-alert.html">Alert resume</Link>
                        </li>
                        <li>
                          <Link to="candidate-grid.html">Candidates</Link>
                        </li>
                        <li>
                          <Link to="blog-list.html">Blog List</Link>
                        </li>
                        <li>
                          <Link to="blog-single.html">Blog single</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Employers</h3>
                      <ul>
                        <li>
                          <Link to="dash-post-job.html">Post Jobs</Link>
                        </li>
                        <li>
                          <Link to="blog-grid.html">Blog Grid</Link>
                        </li>
                        <li>
                          <Link to="contact.html">Contact</Link>
                        </li>
                        <li>
                          <Link to="job-list.html">Jobs Listing</Link>
                        </li>
                        <li>
                          <Link to="job-detail.html">Jobs details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Helpful Resources</h3>
                      <ul>
                        <li>
                          <Link to="faq.html">FAQs</Link>
                        </li>
                        <li>
                          <Link to="employer-detail.html">Employer detail</Link>
                        </li>
                        <li>
                          <Link to="dash-my-profile.html">Profile</Link>
                        </li>
                        <li>
                          <Link to="error-404.html">404 Page</Link>
                        </li>
                        <li>
                          <Link to="pricing.html">Pricing</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Quick Links</h3>
                      <ul>
                        <li>
                          <Link to="index.html">Home</Link>
                        </li>
                        <li>
                          <Link to="about-1.html">About us</Link>
                        </li>
                        <li>
                          <Link to="dash-bookmark.html">Bookmark</Link>
                        </li>
                        <li>
                          <Link to="job-grid.html">Jobs</Link>
                        </li>
                        <li>
                          <Link to="employer-list.html">Employer</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- FOOTER COPYRIGHT --> */}
          <div className="footer-bottom">
            <div className="footer-bottom-info">
              <div className="footer-copy-right">
                <span className="copyrights-text">
                  Copyright © 2023 by thewebmax All Rights Reserved.
                </span>
              </div>
              <ul className="social-icons">
                <li>
                  <Link
                    to="/javascript:void(0);"
                    className="fab fa-facebook-f"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="/javascript:void(0);"
                    className="fab fa-twitter"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="/javascript:void(0);"
                    className="fab fa-instagram"
                  ></Link>
                </li>
                <li>
                  <Link
                    to="/javascript:void(0);"
                    className="fab fa-youtube"
                  ></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
