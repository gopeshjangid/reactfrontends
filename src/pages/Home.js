import React from 'react';
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { dispatch } from 'react';


const Home = () => {


	const initialValues = {
		username: "",
		email: "",
		number: "",
		deadline: ""
	}

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};


	const handleSubmit = async (e) => {
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
			errors.number = "!'Please Enter 10 Character'"
		}
		else if (values.number.length > 10) {
			errors.number = "!'Please Enter 10 Character'"
		}
		if (!values.deadline) {
			errors.deadline = "!'Please Enter Your deadline'"
		}
		return errors;
	};






	return (
		<div>



			<section className="top_sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h1 className="top_Sec-h1">Add fire to your content!</h1>
							<h2 className="top_Sec-h2">Product Description Writing</h2>
							<p className="top_Sec-p">Get Quality Content For Your Business - Every Time: Hire a content writing team that can deliver quality content,
								blog posts, and website copy to power your business.</p>
						</div>

						<div className="col-md-6">
							<section className="form_sec">
								<form style={{ padding: "4%" }} onSubmit={handleSubmit}>
									<h2 className="form_sec-h2">Get In <span className="spa">Touch </span></h2>
									<div className='d-flex space-between'>
										<div className='Home-Name'>
											<input type="text" id="fname" name="username" placeholder="Name" onChange={handleChange} className="text_set" />
											<p style={{ color: "red" }}>{formErrors.username}</p>
										</div>

										<div className='Home-Name'>
											<input type="text" id="fname" name="email" placeholder="Email" onChange={handleChange} className="text_set" />
											<p style={{ color: "red" }}>{formErrors.email}</p>
										</div>
									</div>

									<div className='d-flex space-between'>
										<div className='Home-Name'>
											<input type="number" id="fname" name="number" placeholder="Exp:+91 7665092627" onChange={handleChange} className="text_set" />
											<p style={{ color: "red" }}>{formErrors.number}</p>
										</div>
										<div className='Home-Name'>
											<select className="text_set">
												<option>Content Type</option>

												<option>Ghost Writing</option>
												<option>Blog Writing</option>
											</select>
										</div>
									</div>


									<div className='d-flex space-between'>
										<div className='Home-Name'>
											<input type="text" id="fname" name="deadline" placeholder="Deadline" onChange={handleChange} className="text_set" />
											<p style={{ color: "red" }}>{formErrors.deadline}</p>
										</div>

										<div className='Home-Name'>
											<select className="text_set">
												<option>Expert Level</option>

												<option>Expert</option>
												<option>Premium</option>
												<option>Enterprice</option>
											</select>
										</div>

									</div>

									<button type="submit" className="btn_set1">Register</button> {Object.keys(formErrors).length === 0 && isSubmit ? (
										<h3 className='Success t-center' style={{ color: "#fff" }}>Register is Successfull</h3>) : ('')}

									{/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
								</form>

							</section>

						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-3 overlep_sec1">
							<img src="writer/img/gpw-img1.png" className="overlep_sec-img" />
							<h3 className="overlep_sec-h3">GPW REVIEWS</h3>
							<p className="overlep_sec-p">05 / 05</p>
						</div>

						<div className="col-md-3 overlep_sec2">
							<img src="writer/img/gpw-img2.png" className="overlep_sec-img" />
							<h3 className="overlep_sec-h3">TRUSTPILOT</h3>
							<p className="overlep_sec-p">4.9 / 05</p>
						</div>

						<div className="col-md-3 overlep_sec3">
							<img src="writer/img/gpw-img3.png" className="overlep_sec-img" />
							<h3 className="overlep_sec-h3">SITEJABBER</h3>
							<p className="overlep_sec-p">05 / 05</p>
						</div>

						<div className="col-md-3 overlep_sec4">
							<img src="writer/img/gpw-img4.png" className="overlep_sec-img" />
							<h3 className="overlep_sec-h3">GOOGLE REVIEW</h3>
							<p className="overlep_sec-p">4.9 / 05</p>
						</div>

					</div>
				</div>
			</section>

			<section className="writing_sec">
				<div className="container">
					<div className="row">
						<h2 className="writing_sec-h2">Leverage the writing power of experts</h2>
						<span className="writing_sec-spa"><i className="fa-light fa-horizontal-rule"></i> <i className="fa-solid fa-arrows-left-right"></i> <i className="fa-thin fa-horizontal-rule"></i></span>
						<p className="writing_sec-p">Prepare to ace your content writing by hiring our top-notch content writers.</p>
						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-ghost box_icon"></i>
								<h3 className="box-h3">Ghost Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-file-signature box_icon"></i>
								<h3 className="box-h3">Review Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-blog box_icon"></i>
								<h3 className="box-h3">Blog Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-pencil-alt box_icon"></i>
								<h3 className="box-h3">Freelance Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-pen-square  box_icon"></i>
								<h3 className="box-h3">Product Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-copyright  box_icon"></i>
								<h3 className="box-h3">Copywriting</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="far fa-file-word box_icon"></i>
								<h3 className="box-h3">Content Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-laptop-code box_icon"></i>
								<h3 className="box-h3">Article Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="far fa-file-alt box_icon"></i>
								<h3 className="box-h3">SEO Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-pen-fancy box_icon"></i>
								<h3 className="box-h3">Other Content Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-quote-left box_icon"></i>
								<h3 className="box-h3">Testimonials Writing</h3>
							</div>
						</div>

						<div className="col-md-3">
							<div className="box">
								<i aria-hidden="true" className="fas fa-envelope box_icon"></i>
								<h3 className="box-h3">Email Writing</h3>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="counter_sec">
				<div className="container">
					<div className="row">

						<div className="col-md-6">
							<h2 className="count_h2">Check us out and see for yourself:</h2>
							<div className="row">
								<div className="col-sm-6 col-6">
									<div className="counter1">
										<h2 className="second_row-h2">
											<span className="timer count-title count-number" data-to="35860" data-speed="2000">35860</span>
											<span style={{ paddingLeft: "5px" }}> </span>  </h2>
										<h3 className="count_h3">Content Pieces Delivered</h3>
									</div>
								</div>
								<div className="col-sm-6 col-6">
									<div className="counter_1a">
										<h2 className="second_row-h2"><span className="timer count-title count-number" data-to="896588" data-speed="2000">896588</span>
											<span style={{ paddingLeft: "5px" }}> </span></h2>
										<h3 className="count_h3">Words Written</h3>
									</div>
								</div>

								<div className="col-sm-6 col-6">
									<div className="counter1b">
										<h2 className="second_row-h2"><span className="timer count-title count-number" data-to="5000" data-speed="2000">5000</span>
											<span style={{ paddingLeft: "5px" }}> </span></h2>
										<h3 className="count_h3">Professional Writers</h3>
									</div></div>

								<div className="col-sm-6 col-6">
									<div className="counter_1c">
										<h2 className="second_row-h2"><span className="timer count-title count-number" data-to="93.56" data-speed="2000">93.56</span>
											<span style={{ paddingLeft: "5px" }}> </span></h2>
										<h3 className="count_h3">Percent Client Retention</h3>
									</div>
								</div>
							</div>

						</div>

						<div className="col-md-6">
							<h2 className="count_h2">Content that makes your business looks good</h2>
							<p className="count-p">Awesome, engaging, and practical content that’s designed to grab the attention of customers and make you look good.</p>

							<img src="writer/img/Getprowriter.jpg" className="count-img" />

							<Link to="/https://www.youtube.com/embed/rlcoakSMvOQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&end=141.2&enablejsapi=1&origin=https%3A%2F%2Fgetprowriter.com&widgetid=1">
								<i className="fa fa-play-circle-o count-img-icon"></i></Link>

						</div>

					</div>
				</div>
			</section>


			<section className="writing_sec">
				<div className="container">
					<div className="row">
						<h3 className="content_sec-h3">Why shall you choose GetProWriter’s content writing service?</h3>
						<span className="writing_sec-spa"><i className="fa-light fa-horizontal-rule"></i> <i className="fa-solid fa-arrows-left-right"></i> <i className="fa-thin fa-horizontal-rule"></i></span>
						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="far fa-sun content-icon"></i>
								<h3 className="content-h3">The SEO Factor</h3>
								<p className="content-p">When it comes to writing, your success on search engines relies mainly on the SEO-Optimized content you use.
									Our SEO content writing services are designed to give your website a leg up on the competition.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="fas fa-hands-helping content-icon"></i>
								<h3 className="content-h3">Brand Tone</h3>
								<p className="content-p">You know your business; we know words. We put every word under a microscope to ensure proper
									spelling, grammar, and adhering to brand voice. So you can be assured that you are getting the best
									possible results for your project.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="fas fa-shipping-fast content-icon"></i>
								<h3 className="content-h3">Fast Turnaround</h3>
								<p className="content-p">GetProWriter is well-known for its fast turnaround times and exceptional customer service,
									attributes enjoyed by tens of thousands of regular clients from all over the world.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="fas fa-medal content-icon"></i>
								<h3 className="content-h3">Subject Matter Focus</h3>
								<p className="content-p">We have skilled writers with an eye for detail. Each of the articles we produce is
									thoroughly researched and written by an expert with a focus on your chosen subject matter.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="fas fa-book-open content-icon"></i>
								<h3 className="content-h3">Professionally-Written Content</h3>
								<p className="content-p">GetProWriter is a team of expert content creators. Qualified and professional writers who
									will research, write and edit consistently quality content to help you grow your business.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="content-box">
								<i aria-hidden="true" className="far fa-check-circle content-icon"></i>
								<h3 className="content-h3">Strict Quality Check</h3>
								<p className="content-p">The team of quality editors and proofreaders carefully revise the content to the highest
									level of accuracy, consistency, and readability. GetProWriter is a highly specialized and experienced company
									that focuses on creating quality content.</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			<section className="">
				<div className="container">
					<div className="row">
						<h2 className="get_sec-h2">Leverage the writing power of experts</h2>
						<p className="get_sec-p">Prepare to ace your content writing by hiring our top-notch content writers.</p>
						<span className="writing_sec-spa"><i className="fa-light fa-horizontal-rule"></i> <i className="fa-solid fa-arrows-left-right"></i> <i className="fa-thin fa-horizontal-rule"></i></span>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 1</h2>
								<h3 className="get_sec-box_h3">Make a request</h3>
								<img src="writer/img/istockphoto.jpg" className="get_sec-box_img" />
								<p className="get_sec-box_p">Create an account today and use our convenient dashboard to request any form of content,
									whenever you need it.</p>

							</div>
						</div>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 2</h2>
								<h3 className="get_sec-box_h3">Let us write your content</h3>
								<img src="writer/img/team.jpg" className="get_sec-box_img" />
								<p className="get_sec-box_p">Our team of skilled writers can produce effective and innovative content that
									appeals to your intended audience.</p>

							</div>
						</div>

						<div className="col-md-4">
							<div className="get_sec-box">
								<h2 className="get_sec-box_h2">STEP 3</h2>
								<h3 className="get_sec-box_h3">Get your content copy</h3>
								<img src="writer/img/deliver.jpg" className="get_sec-box_img" />
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
						<span className="writing_sec-spa"><i className="fa-light fa-horizontal-rule"></i> <i className="fa-solid fa-arrows-left-right"></i> <i className="fa-thin fa-horizontal-rule"></i></span>


						<div id="demo" className="carousel slide" data-bs-ride="carousel">


							<div className="carousel-indicators">
								<button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
								<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
								<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
							</div>

							<div className="carousel-inner">
								<div className="carousel-item active">

									<div className="row">
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/lego.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/Allianz.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/Citi.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/zara-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>

									</div>

								</div>

								<div className="carousel-item">
									<div className="row">
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/espn-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/gillette-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/loreal-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/sap-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>

									</div>

								</div>
								<div className="carousel-item">
									<div className="row">
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/att-logo.webp" alt="Los Angeles" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/toyota-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
											<div className="img-box">
												<img src="writer/img/testimonial/ikea-logo.webp" alt="Chicago" className="d-block img-box_image" />
											</div>
										</div>
										<div className="col-sm-3">
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

			<section className="testi_sec">
				<div className="container">
					<div className="row">
						<h2 className="testi_sec-h2">What are our clients saying?</h2>
						<span className="writing_sec-spa"><i className="fa-light fa-horizontal-rule"></i> <i className="fa-solid fa-arrows-left-right"></i> <i className="fa-thin fa-horizontal-rule"></i></span>
						<div className="col-md-6">
							<div className="testi_box">
								<p className="testi_box-p">I am a tech-centric entrepreneur and I’m always looking for ways to improve my business and grow my revenue
									streams. I recently discovered the power of SEO and how it can help my business. I hired Getprowriter.com to
									write SEO-Optimized content for all of my website pages. They made it easy for me to achieve top rankings in
									search engines, thereby bringing me new leads almost every day.</p>
								<div className="t_sels">
									<img src="writer/img/Katy-Wong.webp" className="testi_box-img" />
									<h3 className="testi_box-h3"> Katy Wong</h3>
									<p className="testi_box-p">JotSuccess Services</p>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="testi_box">
								<p className="testi_box-p">Being a renowned blogger I used to write content for my blog. After writing for several
									years, I felt that it was not my strong point. I contacted Getprowriter.com to help me out with content writing.
									They are great at what they do and they also understand the importance of time. Now, I can concentrate on other
									important things in my business while they take care of writing my blog posts.</p>
								<div className="t_sels">
									<img src="writer/img/technical-writer.jpg" className="testi_box-img" />
									<h3 className="testi_box-h3">John Paul Sims</h3>
									<p className="testi_box-p">Techfreaky Inc.</p>
								</div>
							</div>
						</div>
						<h6 className="text-center"><button type="button" className="btn btn-outline-dark btn">All Testimonials</button></h6>
						<p className="down_p">45.2 <span className="down_p-spa"><span className="writing_sec-spa"><i className="fa-sharp fa-solid fa-star star_r"></i><i className="fa-sharp fa-solid fa-star star_r"></i><i className="fa-sharp fa-solid fa-star star_r"></i><i className="fa-sharp fa-solid fa-star star_r"></i><i className="fa-sharp fa-solid fa-star star_r"></i></span>
						</span> | 940 Customers Reviwes</p>

					</div>
				</div>
			</section>

			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h2 className="faq_h2">Frequently Asked Question</h2>
							<p className="faq_p">Do you have a question concerning our content writing services? Check our Frequently Asked Questions page.
								We’ve chosen some of the most frequently asked questions to provide you with a better knowledge
								of our service offerings and the skills of our content writers.</p>
							<button type="button" className=" btn-read">Read More</button>
						</div>



						<div className="col-md-6">
							<section className="faq_section accordion"  id="accordionExample">
								<div className="faq-inner">

									<div className="faq-item bg_set accordion-header"  id="headingOne">
										<h3 className="faq_item-h3 accordion-button bg-transparent text-white shadow-none"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
											<span className="faq-plus">+
												How does your content writing process work?</span>
										</h3>
										<div className=" pera accordion-collapse collapse "  id="collapseOne"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
											<div className='accordion-body'>
										    We will analyse your project requirements and specifications once you have completed the online
											order submission and payment procedure. This normally takes one to two days, depending on the
											complexity and requirements of your project.
											</div>

										</div>
									</div>



									<div className="faq-item bg_set accordion-header"  id="headingTwo">
										<h3 className="faq_item-h3 accordion-button bg-transparent text-white shadow-none" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
											<span className="faq-plus">+
											Can I own content copyright with my order?</span>
										</h3>
										<div className=" pera accordion-collapse collapse"  id="collapseTwo"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
											<div className='accordion-body'>
											Yes, you have exclusive copyright as soon as We’ve turned in the document and you pay for it.
											After We’ve handed over the documents, it’s up to you to decide what to do with the information.
											You can re-distribute it, alter it, truncate it, or just remove it (although this would be
											heartbreaking and discouraging).
											</div>

										</div>
									</div>



									<div className="faq-item bg_set accordion-header"  id="headingThree">
										<h3 className="faq_item-h3 accordion-button bg-transparent text-white shadow-none" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											<span className="faq-plus ">+
											Do you check contents on Copyscape or other related software?</span>
										</h3>
										<div className="pera accordion-collapse collapse"  id="collapseThree"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
											<div className='accordion-body'>
											We analyze articles for grammatical correctness using our Copyscape VIP account. All of the content
											we create is delivered by our editorial team.
											</div>

										</div>
									</div>



									



									{/* <div className="faq-item bg_set">
										<h3 className="faq_item-h3">
											<span className="faq-plus">+
												Can I own content copyright with my order?</span>
										</h3>
										<div className="faq-body pera">
											Yes, you have exclusive copyright as soon as We’ve turned in the document and you pay for it.
											After We’ve handed over the documents, it’s up to you to decide what to do with the information.
											You can re-distribute it, alter it, truncate it, or just remove it (although this would be
											heartbreaking and discouraging).
										</div>
									</div>


									<div className="faq-item bg_set">
										<h3 className="faq_item-h3">
											<span className="faq-plus">+
												Do you check contents on Copyscape or other related software?</span>
										</h3>
										<div className="faq-body pera">
											We analyze articles for grammatical correctness using our Copyscape VIP account. All of the content
											we create is delivered by our editorial team.
										</div>
									</div> */}

								</div>
							</section>
						</div>


					</div>
				</div>
			</section>




		</div>
	);
}




export default Home