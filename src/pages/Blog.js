import React, { Component } from 'react'
import { Link } from 'react-router-dom'
let urlApi = "http://localhost:5000";

class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			User: [],
			isLoading: false,
			isError: false,

		}

		this.componentDidMount = this.componentDidMount.bind(this);
	};


	async componentDidMount() {
		this.setState({ isLoading: true })
		const response = await fetch("http://localhost:5000/getBlog", {
			method: "GET",
			mode: "cors",
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json'
			}
		}
		);
		if (response.ok) {
			const User = await response.json()
			console.log(User)
			this.setState({ ...this.state, User: User.data, isLoading: false })
		} else {
			this.setState({ isError: true, isLoading: false })
		}
	};

	render() {

		const { User, isLoading, isError } = this.state

		if (isLoading) {
			return <div>Loading...</div>
		}

		if (isError) {
			return <div>Error...</div>
		}

		if (User.length < 0) {
			return User.length > 0
		}
		console.log("this.props.User", this.state.User)

		return (
			<div>
				<section className="blog_sec">
					<div className="container">
						<div className="row">
							<div className="col-md-9">
								{this.state.User && this.state.User.map((friend, number) => {

									return (
										<div className="term_sec-9" key={number.toString()}>

											<img src={urlApi + "/image/" + friend.image} className="blog_sec-img" />
											<h2 className="blog_sec-h2">{friend.title} </h2>
											<h3><span className="blog-span1">{friend.name} </span> <span className="blog-span2">September 08,2022</span></h3>
											<p className="blog_sec-p">{friend.dec} </p>

											<button type="button" className="blog_sec-btn">Read More </button>
										</div>

									)
								})
								}


							</div>

							<div className="col-md-3 term_sec-3">
								<div className="block1">
									<form>
										<p className="block_p">Search</p>
										<input type="text" name="search" className="block_search" />
										<button type="submit" className="block_btn">search</button>
									</form>
								</div>

								<div className="block1">
									<h3 className="block-h3">Recent Posts</h3>
									<p className="block-p2"><Link to="" className="block_a">Online Reputation Management</Link></p>
									<p className="block-p2"><Link to="" className="block_a">Marketing research case analysis of Google search engine</Link></p>
									<p className="block-p2"><Link to="" className="block_a">A 5-Step Guide to Protecting Your Health and
										Well-Being While Working from Home</Link></p>

									<p className="block-p2"><Link to="" className="block_a">The Art of Content Writing</Link></p>
									<p className="block-p2"><Link to="" className="block_a">Tips to write better content that gets you up in the night.</Link></p>
								</div>

								<div className="block1">
									<h3 className="block-h3">Recent Comments</h3>
									<p className="block-p3">No comments to show.</p>

								</div>

								<div className="block1">
									<h3 className="block-h3">Archives</h3>
									<p className="block-p3">February 2022</p>
									<p className="block-p3">January 2022</p>
									<p className="block-p3">December 2021</p>

								</div>

								<div className="block1">
									<h3 className="block-h3">Categories</h3>
									<p className="block-p3">Content Writing</p>
									<p className="block-p3">General</p>
									<p className="block-p3">Tips</p>

								</div>

							</div>

						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Blog
