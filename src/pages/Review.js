import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Review = () => {

	const initialValues = {
		username: "",
		email: "",
		number: "",
		deadline: ""
	}

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const inputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};


	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};


	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors])

	const validate = (values) => {
		const errors = {}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.username) {
			errors.username = "!'Please Enter Your Name'"
		}
		if (!values.email) {
			errors.email = "!'Please Enter Your Email'"
		} else if (!regex.test(values.email)) {
			errors.email = "!'This is not Email Format'"
		}
		if (!values.number) {
			errors.number = "!'Please Enter Your Number'"
		} else if (values.number.length < 10) {
			errors.number = "!'Please Enter Correct Number'"
		}
		else if (values.number.length > 10) {
			errors.number = "!'Please Enter Correct Number'"
		}
		if (!values.message) {
			errors.message = "!'Please Enter Your message'"
		}
		return errors;
	};




	return (
		<div>
			<section className="top_sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="top_Sec-h1">Stunning Review Writing Service!</h1>
							<h2 className="top_Sec-h2">Best Online Review Writing|</h2>
							<p className="top_Sec-p">GetProWriter is a leading name that offers competitive online review writing services to various
								companies. We are a team of highly qualified professionals possessing many years of industry experience.
								We understand what it takes to meet your expectations.</p>
						</div>

						<div className="col-md-6">
							<section className="form_sec">
								<form style={{ padding: "4%" }} onSubmit={handleSubmit}>
									<h2 className="form_sec-h2">Get In <span className="spa">Touch </span></h2>
									<input type="text" id="fname" name="username" placeholder="Name" onChange={inputChange} className="text_set" />
									<p style={{ color: "red" }}>{formErrors.username}</p>
									<input type="text" id="fname" name="email" placeholder="Email" onChange={inputChange} className="text_set" />
									<p style={{ color: "red" }}>{formErrors.email}</p>
									<input type="number" id="fname" name="number" placeholder="Phone" onChange={inputChange} className="text_set" />
									<p style={{ color: "red" }}>{formErrors.number}</p>
									<select className="text_set">
										<option>Select Service</option>
										<option>Content Writing</option>
									</select>
									<textarea className="form-control form-area text_set-area" rows="8" id="message"
										placeholder="Message" onChange={inputChange} name="message"></textarea>
									<p style={{ color: "red" }}>{formErrors.message}</p>
									<button type="submit" className="btn_set">Submit</button> {Object.keys(formErrors).length === 0 && isSubmit ? (
										<h3 className='Success t-center' style={{ color: "#fff" }}>Submitted is Successfull</h3>) : ('')}

									{/* <Link to="/Login"><button type="button" className="btn_set2">Login</button></Link> */}
								</form>
							</section>

						</div>
					</div>
				</div>
			</section>

			<section className="writing_sec">
				<div className="container">
					<div className="row">
						<h2 className="writing_sec-h2">Need Industry Best Online Reviews Writers? GetProWriter Can Help!</h2>
						<span className="writing_sec-spa">* * * * *</span>
						<p className="writing_sec-p">Let your business boom with our review writing service.</p>
						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Creative Reviews</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Tried Expertise</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Rich Keywords</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Striking Quality</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Specialized Reviews</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">ORM Friendly</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Molding Brand</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Captivating Reviews</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Experienced Writers</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">True Genius</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Writing Championed</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="wr-b">
								<h3 className="box-h3">Exhilarated Clients</h3>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="rev_sec">
				<div className="container">
					<div className="row">
						<h2 className="rev_sec-h2">Online Review Service For All Kinds Of Businesses</h2>

						<p className="rev_sec-p">GetProWriter caters to businesses across various industries. While many companies specialize in some
							kind of writing services, we have writers who can write for all industries. Our writers are trained to understand the
							needs of your business and ensure that their content is relevant and meets your specific requirements. We know that
							hiring a review writer online is tough, so we’re here to make it easier for you.</p>
						<p className="rev_sec-p">We believe that every business is designed for different clients. Our experienced writers are able to write specific
							content for each client. We understand that your business has needs that will differ from others. That is why we bring
							our experience of working with clients from all over the world for many years now.</p>

					</div>
				</div>
			</section>

			<section className="rws_sec">
				<div className="container">
					<div className="row">
						<h2 className="writing_sec-h2 rws-h2">Our Online Review Writing Services Ensure Business Expansion</h2>
						<span className="writing_sec-spa">* * * * *</span>
						<p className="writing_sec-p">Let our review writers take care of your business visibility needs.</p>

						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">Online Review Content That Has No Match</h3>
							<p className="ab_sec2-p rws-p">Our review content simply has no match. We believe that people should be able to find what
								they need when they need it and that the internet should be a place where anyone can get the information they
								want. So, good online reviews matter. That’s why we’ve worked hard to make review writer online hiring easy.
								Our review content is designed to help people find out more about your products and services they need and then
								decide which ones will work best for them.</p>
							<p className="ab_sec2-p rws-p">We strive to make sure all our reviews are clear, concise, and easy to understand. And
								because we know that no two people are alike, we make sure there’s something for everyone: whether you’re looking
								for something fun or practical; whether you have a small business or a big corporation.</p>
						</div>
						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/No-match-review.webp" className="rws-img" />
						</div>


						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/Expertimental-review.webp" className="rws-img" />
						</div>
						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">Highly Experimental Review Ghostwriters</h3>
							<p className="ab_sec2-p rws-p">Our review writers are highly experimental. What this means is that our writers go out
								of the way to create content that stands out and at the same time, something that is relatable. We know that
								writing a review is not an easy task. It requires a lot of research, understanding, and creative thinking. That’s
								why we have a team of creative and experienced writers who understand what it takes to
								write an engaging review.</p>
							<p className="ab_sec2-p rws-p">We believe in quality over quantity so you can expect nothing but the best from us.
								Our writers have years of experience in writing reviews so they know exactly what it takes to attract customers
								based on something as simple as a review.</p>
						</div>


						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">Online Review Writers Who Are Result Oriented</h3>
							<p className="ab_sec2-p rws-p">We have online review writers who focus on generating results. So, no matter what your
								business is, we will be able to write reviews for your business that are going to get noticed. We will use our
								expertise in writing and SEO to ensure that you receive the best possible review writing service.</p>
							<p className="ab_sec2-p rws-p"> Our online review writers are specialized in generating reviews that attract
								prospective customers. We make sure the content is engaging and informative so that it gets picked up by search
								engines like Google, Bing, and Yahoo. When you hire a review writer online, you know that we indulge in top-notch
								review writing. Call us to read review writing samples or for excellent online review management.</p>
						</div>
						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/Online-review.webp" className="rws-img" />
						</div>


						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/Grow-your-business.webp" className="rws-img" />
						</div>
						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">Grow Your Business With Our Online Review Writing Services</h3>
							<p className="ab_sec2-p rws-p">You need online review services to grow your business. And that happens every time you
								collaborate with us. When you partner with us, we provide the content you need to achieve the success you’ve
								always dreamed of. We know how hard it is to get people to write reviews so we help you to hire experts and make
								sure they write great reviews for you.</p>
							<p className="ab_sec2-p rws-p">We offer transparent online review management for all companies. If you’re looking for
								an affordable way to get online reviews, we’re here for you. We have been working in the online review industry
								for years, which means we know what it takes to provide an exceptional product. We understand how important
								reviews are for growing your business and will make sure you get exactly what you need from us every time.</p>
						</div>


						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">Real Reviews From Real Review Writers</h3>
							<p className="ab_sec2-p rws-p">When we say real reviews from real writers, we mean it. We know that you want to be
								able to trust the reviews on your website, and so do we. That’s why we work hard to make sure every review is
								written by an expert – a person who has spent years practicing the craft of review writing and gaining a deep
								understanding of their industry. You can always check out our review writing samples.</p>
							<p className="ab_sec2-p rws-p">We’ve got a team of talented writers who knows what it takes to engage in effective
								online review management. This is why you can be sure that any review you get from us will come from someone who
								is aware of the nuances and knows how to make it shine.</p>
						</div>
						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/Real-review-writer.webp" className="rws-img" />
						</div>


						<div className="col-md-6 rws_Sec-6">
							<img src="writer/img/Expertise.webp" className="rws-img" />
						</div>
						<div className="col-md-6 rws_Sec-6">
							<h3 className="ab_sec2-h3 rws-h3">GetProWriter Expertise For Outstanding Online Reviews</h3>
							<p className="ab_sec2-p rws-p">For outstanding online reviews, you definitely need GetProWriter expertise.
								GetProWriter provides a comprehensive and affordable writing service that will help you gain the reviews you
								need to succeed. We will engage in online review writing in a way that brings in customers and keeps them coming
								back for more.</p>
							<p className="ab_sec2-p rws-p">GetProWriter knows that when you’re looking to get online reviews, the last thing you
								want to do is waste time and money on something that isn’t going to work. That’s why we’ve set up a one-stop-shop
								for all your online review writing needs. We will work willingly on the feedback and make sure your business
								becomes customers’ first pick. GetProWriter is known to create content that has impacted enterprises and audiences
								alike.</p>
						</div>

					</div>
				</div>
			</section>

			<section className="ltw_sec">
				<div className="container">
					<div className="row">
						<h2 className="get_sec-h2">Get started today at in a few clicks</h2>
						<p className="get_sec-p">Follow these super simple steps and get started with our services.</p>
						<span className="writing_sec-spa">* * * * *</span>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 1</h2>
								<h3 className="get_sec-box_h3">Make a request</h3>
								<img src="writer/img/Make-a-request.webp" className="get_sec-box_img" />
								<p className="get_sec-box_p">Create an account today and use our convenient dashboard to request any form
									of content, whenever you need it.</p>

							</div>
						</div>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 2</h2>
								<h3 className="get_sec-box_h3">Let us write your content</h3>
								<img src="writer/img/Let-us-write-your-content.webp" className="get_sec-box_img" />
								<p className="get_sec-box_p">Our team of skilled writers can produce effective and innovative content that appeals
									to your intended audience.</p>

							</div>
						</div>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 3</h2>
								<h3 className="get_sec-box_h3">Get your content copy</h3>
								<img src="writer/img/Get-your-content-copy.webp" className="get_sec-box_img" />
								<p className="get_sec-box_p">We’ll promptly deliver your content via e-mail to the address associated with
									your purchase.</p>

							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="img_testimonial">
				<div className="container">
					<div className="row">
						<h2 className="writing_sec-h2">Some of our esteemed key Clients</h2>
						<span className="writing_sec-spa">* * * * *</span>


						<div id="demo" className="carousel slide" data-bs-ride="carousel">

							<div className="carousel-indicators">
								<button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
								<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
								<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
							</div>


							<div className="carousel-inner">
								<div className="carousel-item active">

									<div className="row">
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/lego.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/Allianz.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/Citi.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/zara-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>

									</div>

								</div>

								<div className="carousel-item">
									<div className="row">
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/espn-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/gillette-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/loreal-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/sap-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>

									</div>

								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/att-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/toyota-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/ikea-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-md-3">
											<div className="img-box">
												<img src="writer/img/testimonial/Allianz.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>

									</div>
								</div>
							</div>


							<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
								<span className="carousel-control-prev-icon"></span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
								<span className="carousel-control-next-icon"></span>
							</button>
						</div>

					</div>
				</div>
			</section>

			<section className="hire_Sec">
				<div className="container">
					<div className="row">
						<h2 className="get_sec-h2">Why Hire Our Online Review Writers?</h2>
						<p className="get_sec-p">Make sure your enterprise has a better industry presence.</p>
						<span className="writing_sec-spa">* * * * *</span>
						<div className="col-md-4">
							<div className="box-ol">
								<ol>
									<li className="in_li"><span className="right_span"><i aria-hidden="true" className="fas fa-check-circle"></i></span></li>
									<li className="in_li"><span className="spa_h2">Domain experts</span></li>
								</ol>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box-ol">
								<ol>
									<li className="in_li"><span className="right_span"><i aria-hidden="true" className="fas fa-check-circle"></i></span></li>
									<li className="in_li"><span className="spa_h2">Client requirements are of utmost importance</span></li>
								</ol>
							</div>
						</div>
						<div className="col-md-4">
							<div className="box-ol">
								<ol>
									<li className="in_li"><span className="right_span"><i aria-hidden="true" className="fas fa-check-circle"></i></span></li>
									<li className="in_li"><span className="spa_h2">Punctual and dedicated writers</span></li>
								</ol>
							</div>
						</div>

						<p className="review1-p">Our review writers are sure of helping your enterprise achieve a better industry presence. We know the power of
							review writing and how reviews can help you reach new heights in your business. We understand the need to have great
							online review management. So, we help you skip the hassle of the time-consuming and costly process by offering
							effective and affordable services. Our services are designed to help you keep up with the pace of change in
							today’s world.</p>

						<p className="review1-p">We know that the people who are looking for reviews of your products are knowledgeable customers
							and they have very specific expectations. Our review writers are domain experts themselves, so they can understand and
							prioritize your requirements. They are dedicated to their projects and are punctual.</p>


					</div>
				</div>
			</section>

			<section className="testi_sec">
				<div className="container">
					<div className="row">
						<h2 className="testi_sec-h2">Testimonials</h2>
						<span className="testi_sec-spa">* * * * *</span>
						<div className="col-md-6">
							<div className="testi_box">
								<p className="testi_box-p">We needed to get some reviews for our website and we didn't have time to do it ourselves.
									We were looking for a reliable company that could help us with this task. We thus got into GetProWriter for our
									online review writing needs. They did a superb job.</p>
								<div className="t_sels">
									<img src="writer/img/Carmen-Mendez-Istillarte.webp" className="testi_box-img" />
									<h3 className="testi_box-h3"> Carmen Mendez Istillarte</h3>
									<p className="testi_box-p">Media Relations Coordinator, Swipro</p>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="testi_box">
								<p className="testi_box-p">I highly recommend GetProWriter for your online reviews. I am very happy with the service
									I received from GetProWriter. Their writers were extremely talented and they were incredibly professional from
									start to finish.</p>
								<div className="t_sels">
									<img src="writer/img/Marcela-Vella.webp" className="testi_box-img" />
									<h3 className="testi_box-h3">Marcela Vella</h3>
									<p className="testi_box-p">Executive Assistant, Financy</p>
								</div>
							</div>
						</div>
						<button type="button" className="btn btn-outline-dark btn">All Testimonials</button>
						<p className="down_p">45.2 <span className="down_p-spa">*****</span> | 940 Customers Reviwes</p>

					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h2 className="faq_h2">Frequently Asked Question</h2>
							<p className="faq_p">Do you have a question concerning our content writing services? Check our Frequently Asked Questions
								page. We’ve chosen some of the most frequently asked questions to provide you with a better knowledge of our service
								offerings and the skills of our content writers.</p>
							<button type="button" className=" btn-read">Read More</button>
						</div>

						<div className="col-md-6">
							<section className="faq_section">
								<div className="faq-inner">

									<div className="faq-item bg_set">
										<h3 className="faq_item-h3">
											<span className="faq-plus">+</span>
											Can we get good review writers from GetProWriter?
										</h3>
										<div className="faq-body pera">
											Yes. GetProWriter has among the best review writers in the industry. We hire only the most talented
											people and we have a rigorous hiring process to ensure that we only hire people with the highest
											levels of skill and talent. Our writers attend excellent training programs so that they are always
											improving themselves and their work.
										</div>
									</div>


									<div className="faq-item bg_set">
										<h3 className="faq_item-h3">
											<span className="faq-plus">+</span>
											Which is the best platform to get the best online reviews for my business?
										</h3>
										<div className="faq-body pera">
											We can confidently say that GetProWriter is in the league of best platforms to get online reviews for
											any business. We have a team of experts who are working hard to make sure that our clients get the
											best quality content at competitive prices. Our writers are motivated by the passion for writing and
											helping people out. They have an excellent command of the English language and can write on any
											subject matter with ease.
										</div>
									</div>


									<div className="faq-item bg_set">
										<h3 className="faq_item-h3">
											<span className="faq-plus">+</span>
											Do you have writers from America?
										</h3>
										<div className="faq-body pera">
											Yes, we have writers from America. In fact, the writers in our company are hired from across the
											globe. We’re very proud of our international team and their ability to come together to create such a
											diverse and exciting portfolio of work. This is what makes GetProWriter stand out among its
											competitors in the domain.
										</div>

									</div>
								</div>
							</section>
						</div>


					</div>
				</div>
			</section>

		</div>
	)
}

export default Review
