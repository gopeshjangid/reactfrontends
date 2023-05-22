import React, { useEffect, useState } from "react";
import Image from "next/image";
import Useourimg from "../images/Use-our-simple-interface.webp";
import Ourquaimg from "../images/Our-qualified-writers.webp";
import Reachmoreimg from "../images/Reach-more-customers.webp";
import Head from "next/head";
const howitworks = () => {
  return (
    <div>
      <section className="ab_sec d-flex align-items-center">
        <Head>
          <title>How It Works - Get Pro Writer</title>

          <meta
            name="description"
            content="Getprowriter.com provides affordable content writing services. Our content writing experts can help you with creating well-researched and excellent content for your business and websites."
          />
          <meta
            name="robots"
            content="noindex, nofollow, max-image-preview:large"
          />
          <link rel="canonical" href="https://getprowriter.com/how-it-works/" />
          <meta name="generator" content="All in One SEO (AIOSEO) 4.2.3.1 " />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:site_name"
            content="Get Pro Writer - Content That Brings Wow Reaction"
          />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="How It Works - Get Pro Writer" />
          <meta
            property="og:description"
            content="Getprowriter.com provides affordable content writing services. Our content writing experts can help you with creating well-researched and excellent content for your business and websites."
          />
          <meta
            property="og:url"
            content="https://getprowriter.com/how-it-works/"
          />
          <meta
            property="og:image"
            content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
          />
          <meta
            property="article:published_time"
            content="2021-12-23T11:15:01+00:00"
          />
          <meta
            property="article:modified_time"
            content="2022-04-15T05:06:56+00:00"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="How It Works - Get Pro Writer" />
          <meta
            name="twitter:description"
            content="Getprowriter.com provides affordable content writing services. Our content writing experts can help you with creating well-researched and excellent content for your business and websites."
          />
          <meta
            name="twitter:image"
            content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
          />
        </Head>

        <div className="container">
          <h2 className="ab_sec-h3 p-0">
            How Get Pro Writer’s Content Writing Service Works
          </h2>
        </div>
      </section>

      <section className="work_sec">
        <div className="container">
          <div className="row">
            <h2 className="work_sec-h2">
              Easy, Convenient, Professional, Well-priced
            </h2>

            <div className="col-md-6">
              <Image src={Useourimg} className="work_sec-img" />
            </div>

            <div className="col-md-6">
              <div className="border-sec">
                <h2 className="work-h2">
                  Use our simple interface to place orders
                </h2>
                <p className="work-p">
                  Quickly place orders with our simple interface. We have
                  one-page order forms that asks the essential questions you are
                  most concerned about. You can easily specify voice tone,
                  keywords, and other important guidelines in an easy-to-read
                  manner. We can complete your order within 24 hours, so you get
                  fast turnaround with high-quality content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work_sec2">
        <div className="container">
          <div className="row">
            <h2 className="work_sec-h2"> </h2>

            <div className="col-md-6">
              <Image src={Ourquaimg} className="work_sec-img" />
            </div>

            <div className="col-md-6">
              <div className="border-sec">
                <h2 className="work-h2">
                  Our qualified writers will craft compelling content
                </h2>
                <p className="work-p">
                  Content writers who are always dedicated to meeting all of
                  your requirements are ready to claim your order. We look
                  forward to working with you on your next content project, and
                  we’ll go the extra mile to ensure your complete satisfaction.
                  We’ll write it, edit it, and deliver your content on your
                  email in no time at all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Image src={Reachmoreimg} className="work_sec-img" />
            </div>

            <div className="col-md-6">
              <div className="border-sec">
                <h2 className="work-h2">
                  Reach more customers, increase sales, and gain the traffic
                </h2>
                <p className="work-p">
                  Publishing content that engages your audience is the best way
                  to build a meaningful relationship and grow your customer
                  base. Our team specializes in remarkable content that engages
                  your customers, and drives search traffic to your site,
                  building brand awareness in a positive way. Our team
                  specializes in remarkable content that engages your customers,
                  and drives search traffic to your site, building brand
                  awareness in a positive way.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ab_sec-down d-flex align-items-center">
        <div className="container">
          <h2 className="ab_sec-down-h2 p-0">
            Our content is designed to satisfy – 100% Guarantee! We deliver
            content that captures your audience.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default howitworks;
