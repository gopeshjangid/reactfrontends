import ourMession from "../../images/ab_img.webp";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { authors, sec2 } from "@/Constants/about-us";

class about extends React.Component {
  render() {
    return (
      <div>
        <section className="ab_sec  d-flex justify-content-center align-items-center">
          <h2 className="ab_sec-h2 p-0">About Us</h2>

          <Head>
            <title>About Us - Get Pro Writer</title>

            <meta
              name="description"
              content="Getprowriter.com is a content writing service that takes care of everything from unique and well-researched content, to high quality editing and proofreading."
            />
            <meta
              name="robots"
              content="noindex, nofollow, max-image-preview:large"
            />
            <link rel="canonical" href="https://getprowriter.com/about-us/" />
            <meta name="generator" content="All in One SEO (AIOSEO) 4.2.3.1 " />
            <meta property="og:locale" content="en_US" />
            <meta
              property="og:site_name"
              content="Get Pro Writer - Content That Brings Wow Reaction"
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="About Us - Get Pro Writer" />
            <meta
              property="og:description"
              content="Getprowriter.com is a content writing service that takes care of everything from unique and well-researched content, to high quality editing and proofreading."
            />
            <meta
              property="og:url"
              content="https://getprowriter.com/about-us/"
            />
            <meta
              property="og:image"
              content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
            />
            <meta
              property="article:published_time"
              content="2021-12-23T11:44:37+00:00"
            />
            <meta
              property="article:modified_time"
              content="2022-01-11T09:36:58+00:00"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="About Us - Get Pro Writer" />
            <meta
              name="twitter:description"
              content="Getprowriter.com is a content writing service that takes care of everything 
from unique and well-researched content, to high quality editing and proofreading."
            />
            <meta
              name="twitter:image"
              content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
            />
          </Head>
        </section>

        <section className="ab_sec2 ">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="ab_sec2-h3">Our Story</h3>
                <p className="ab_sec2-p">
                  GetProWriter began in 2021, prompted by a simple question: Why
                  is it so difficult to find and recruit expert content writers
                  with the required expertise? We focused only on content,
                  assisting companies all over the globe in creating content
                  that is genuinely brilliant – and we don’t just mean
                  “brilliant” in terms of quality; we mean “solid” in terms of
                  drawing attention, increasing traffic, and developing brands.
                </p>

                <p className="ab_sec2-p">
                  Our approach to content writing, on the other hand, hasn’t
                  changed. We match businesses with copywriters that understand
                  their industry inside and out. That means handling all of the
                  heavy lifting, such as vetting content writers and editors,
                  onboarding them, and managing them through consistent,
                  personalized contact.
                </p>

                <p className="ab_sec2-p">
                  We hope you’ll come along on the journey with us.
                </p>
              </div>

              <div className="col-md-6">
                <Image src={ourMession} alt="ab_img" className="ab_Sec2-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="ab_sec3">
          <div className="container">
            <div className="row">
              {sec2.map((item) => (
                <div key={item.id} className={`col-md-4 ${(item.id == 2 ? 'sec3-box2' : 'sec3-box')}`}>
                  <i
                    aria-hidden="true"
                    className="fas fa-graduation-cap sec3-icon"
                  ></i>
                  <h2 className={(item.id == 2) ? 'sec3_box-h2-1' : 'sec3_box-h2'}>{item.title}</h2>
                  <p className={(item.id == 2) ? 'sec3_box-p2' : 'sec3_box-p'}>{item.des}</p>
                </div>

              ))}
            </div>
          </div>
        </section>

        <section className="team_sec">
          <div className="container">
            <div className="row">
              <h2 className="team_sec-h2">Our Team</h2>
              <p className="team_sec-p">
                We are a rapidly expanding team of content writing specialists
                and thought leaders.
              </p>
              {authors.map((item) => (
                <div key={item.id} className="col-md-4">
                  <div className="team_box">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="team_sec-img"
                    />
                    <h2 className="team_second-h2">{item.name}</h2>
                    <p className="team_second-p">{item.specializtion}</p>
                    <p className="team_second-p2">
                      <i className="fa-brands fa-facebook f_f"></i>
                      <i className="fa-brands fa-instagram f_f"></i>
                      <i className="fa-brands fa-twitter f_f"></i>
                      <i className="fa-brands fa-pinterest-p f_f"></i>
                    </p>
                    <p className="team_second-p3">{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default about;
