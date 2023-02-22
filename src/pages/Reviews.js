import React from "react";

const Reviews = () => {
  return (
    <div>
      <section>
        <img
          src="writer/img/Customer-reviews-1536x480.jpg"
          className="w-100"
          alt="Customer-reviews"
        />
      </section>

      <section className="mt-5 elementor-section">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ color: "#029A99" }}>
            Let everyone know the uniqueness of your website
          </h2>
          <div className="elementor-divider">
            <span className="elementor-divider-separator">
              <div className="elementor-icon elementor-divider__element">
                <i aria-hidden="true" className="fas fa-star-of-david fs-4"></i>
              </div>
            </span>
          </div>
          <p className="text-center mt-4 text-secondary">
            At Get Pro Writer, we deliver original, plagiarism-free content for
            websites that helps them with a high ranking in SEO on search
            engines. Get tailor-made content for your business that expresses
            the brand’s voice to your target audience.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6 review-show">
              <div className="glsr-summary-rating">
                <h3 className="mb-0 me-2">4.9</h3>
                <div>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-regular fa-star-half-stroke  fs-5 star_r"></i>
                </div>
              </div>
              <span className="glsr-tag-value">
                4.9 out of 5 stars (based on 187 reviews)
              </span>

              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Excellent</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: "88%" }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">88%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Very good</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: "12%" }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">12%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Average</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: "0%" }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">0%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Poor</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: "0%" }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">0%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Terrible</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: "0%" }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">0%</span>
              </div>
            </div>
          </div>

          <section className="rating">
            <form>
              <div className=" row rating-form">
                <div className="form-group  col-md-8 rating-inner-form">
                  <h6>Your overall rating</h6>
                  <div className="rating-stars">
                    <i className="fa-sharp fa-regular fa-star  star_r"></i>
                    <i className="fa-sharp fa-regular fa-star  star_r"></i>
                    <i className="fa-sharp fa-regular fa-star  star_r"></i>
                    <i className="fa-sharp fa-regular fa-star  star_r"></i>
                    <i className="fa-sharp fa-regular fa-star  star_r"></i>
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Title of your review</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="site-reviews[title]"
                      type="text"
                      placeholder="Summarize your review or highlight an interesting detail"
                      value=""
                    />
                  </div>

                  <div
                    className="glsr-field glsr-field-textarea mt-4 glsr-required"
                    data-field="content"
                  >
                    <label
                      className="glsr-label glsr-label-textarea"
                      for="site-reviews-content-glsr_1edcb6a3"
                    >
                      <span>Your review</span>
                    </label>
                    <br />
                    <textarea
                      className="glsr-textarea w-100 p-2"
                      id="site-reviews-content-glsr_1edcb6a3"
                      name="site-reviews[content]"
                      placeholder="Tell people your review"
                      rows="5"
                      required=""
                    ></textarea>
                    <div className="glsr-field-error"></div>
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Your name</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="site-reviews[title]"
                      type="text"
                      placeholder="Tell us your name"
                      value=""
                    />
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Your email</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="site-reviews[title]"
                      type="text"
                      placeholder="Tell us your email"
                      value=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="glsr-button p-3 mt-3 text-white button border-0  "
                    style={{ background: "#029a99" }}
                    data-loading="Submit your review"
                    aria-busy="false"
                  >
                    <span className="glsr-button-loading"></span>
                    <span className="glsr-button-text">Submit your review</span>
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mt-5 feedback">
            <div className="container">
              <h3
                className=" feedback-tag pt-5 text-center"
                style={{ color: "#029a99" }}
              >
                Some of the valuable feedback from clients!
              </h3>
            </div>

            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Awesome! Work</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  Awesome! Your work is really very efficient and totally worth
                  every dollar spent. I was worried about the SEO that has now
                  become an important part of an online presence. But getting
                  you on the board, GetProWriter was one of my wisest decisions!
                  HaHa! You really did a commendable job and got overwhelming
                  traffic to
                  <span
                    className="glsr-hidden glsr-hidden-text"
                    data-show-less="Show less"
                    data-show-more="Show more"
                    data-trigger="expand"
                  >
                    {" "}
                    my site and improved my ranking as well. You were really
                    very professional and to tell you very frankly, exceeded all
                    my expectations. I will certainly be using your services
                    more frequently from now on. Thanks for helping me achieve
                    the success I was seeking for in such a short time. Really
                    very happy!
                  </span>
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Mary Gainey</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">
                  Reasonable Price And Finish Work On Time
                </h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  I want to really thank you, GetProWriter for helping me get
                  increased traffic to my site. You were truly a great help. As
                  I am very meticulous and do research fully, I was in search of
                  someone who could help me finish the writing task within the
                  limited time and get more organic traffic at
                  <span
                    className="glsr-hidden glsr-hidden-text"
                    data-show-less="Show less"
                    data-show-more="Show more"
                    data-trigger="expand"
                  >
                    {" "}
                    my site and improved my ranking as well. You were really
                    very professional and to tell you very frankly, exceeded all
                    my expectations. I will certainly be using your services
                    more frequently from now on. Thanks for helping me achieve
                    the success I was seeking for in such a short time. Really
                    very happy!
                  </span>
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Linda Cammilleri</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">
                  Talented Writers On Getprowriter.Com
                </h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  As I was working a lot, I needed some time to rest and thought
                  that I should hire professionals to do the writing for me. I
                  reached out to GetProWriter as one of my friends recorded them
                  for me. They are very talented and committed and are aware of
                  the details of SEO. The work
                  <span
                    className="glsr-hidden glsr-hidden-text"
                    data-show-less="Show less"
                    data-show-more="Show more"
                    data-trigger="expand"
                  >
                    {" "}
                    my site and improved my ranking as well. You were really
                    very professional and to tell you very frankly, exceeded all
                    my expectations. I will certainly be using your services
                    more frequently from now on. Thanks for helping me achieve
                    the success I was seeking for in such a short time. Really
                    very happy!
                  </span>
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Maggie Madison</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Happy With Work</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  I am not well aware of SEO but having collaborated with
                  GetProWriter, I have understood one thing for sure SEO and
                  keywords do make a huge difference! I have used their services
                  as I wanted more traffic to my website and these guys promised
                  me that I would not only get more traffic but also
                  <span
                    className="glsr-hidden glsr-hidden-text"
                    data-show-less="Show less"
                    data-show-more="Show more"
                    data-trigger="expand"
                  >
                    {" "}
                    my site and improved my ranking as well. You were really
                    very professional and to tell you very frankly, exceeded all
                    my expectations. I will certainly be using your services
                    more frequently from now on. Thanks for helping me achieve
                    the success I was seeking for in such a short time. Really
                    very happy!
                  </span>
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Julie Buckley</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Very Professionally Writers</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  I write very appealingly and have a good audience and traffic
                  to my blog. However, recently I was a little busier and did
                  not have the right amount of time to focus on writing and that
                  is when I came across GetProWriter. Their team of writers is
                  very talented and has a huge experience to
                  <span
                    className="glsr-hidden glsr-hidden-text"
                    data-show-less="Show less"
                    data-show-more="Show more"
                    data-trigger="expand"
                  >
                    {" "}
                    my site and improved my ranking as well. You were really
                    very professional and to tell you very frankly, exceeded all
                    my expectations. I will certainly be using your services
                    more frequently from now on. Thanks for helping me achieve
                    the success I was seeking for in such a short time. Really
                    very happy!
                  </span>
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-William Boenitz</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Best Service</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  I am very much relaxed about my website as I totally trust
                  you. I would continue using your services even in the future.
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Norhan Bassiouny</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Good Service</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  Your team of writers are very talented and have a huge
                  experience to your credit and they are still very affordable.
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Norhan Bassiouny</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">SEO Pack</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  These guys finished the task quickly and did maintain good
                  quality. I am really happy with your work and especially with
                  their careful effort at SEO. Will surely think of using your
                  services again.
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Nancy Cavazos</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Better Ranking Achieved</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  you helped me get more organic traffic to my site and also got
                  me a better ranking.
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-David Jhonsan</span>
              </div>
            </div>
            <div
              className="glsr-review my-4"
              data-type="local"
              id="review-2548"
              data-assigned="[]"
            >
              <div className="glsr-review-title">
                <h3 className="glsr-tag-value">Thank For The Work</h3>
              </div>
              <div className="glsr-review-rating">
                <div className="glsr-star-rating glsr-stars" data-rating="5">
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                </div>
              </div>

              <div className="glsr-review-content mt-2">
                <p className="glsr-tag-value">
                  The price that you quoted also seemed very reasonable so I
                  allowed you to work for me. thank you.
                  <span className="glsr-read-more">
                    <a href="#" data-text="Show less">
                      Show more
                    </a>
                  </span>
                </p>
              </div>

              <div className="glsr-review-author">
                <span className="glsr-tag-value">-Jessiemae G Weah</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
