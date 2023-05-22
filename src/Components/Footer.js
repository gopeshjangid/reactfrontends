import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>



      <section className="footer_sec py-4">
        <nav className=" navbar-expand-sm f_menunavbar-dark">
          <div className="container">
            <div className="row align-items-center ">
              <span className="col-lg-4 copyright" href="/">
                Copyright © 2022 Get Pro Writer All Right Reserved
              </span>
              <div className=" col-lg-8 copyright">
                <ul className="footer-navbar-nav">
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1"  href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/terms">
                      Terms
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/about-us">
                      About
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/author">
                      Authors
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/career">
                      Career
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" href="/contact-us">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Footer;
