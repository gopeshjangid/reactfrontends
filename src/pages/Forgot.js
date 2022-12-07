import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

const Forgot = () => {
	const navigate = useNavigate()
	const initialValues = {
		email: ""
	}

	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [message, setMessage] = useState()
	// const [error, setError] = useState()

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};


	const handleSubmit = (e) => {
		e.preventDefault();

		const { email } = formValues
		// add entity - POST
		// e.preventDefault();
		// creates entity
		fetch("http://localhost:5000/password-reset", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify({
				email
			}),
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json'
			}

		})		// .then((res) => res.json())

			.then(response => response.json(
				setFormValues({
					response
				})))

			.then(json => {
				if (json.message === "mail have sent successfully") {
					navigate('/login');
				}

				setMessage(json.message)
				// setError(json.error)

				console.log(json)
			})
			.catch(err => {
				console.log(err);
			});

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

		if (!values.email) {
			errors.email = "!'Please Enter Your Email'"
		} else if (!regex.test(values.email)) {
			errors.email = "!'This is not Email Format'"
		}



		return errors;
	};



	return (
		<div>
			<section className="fp_sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<img src="writer/img/forgot-password.jpg" className="fp-img" />
						</div>

						<div className="col-md-6">
							<form className="fp_form" onSubmit={handleSubmit}>
								<h3 className="fp-h3">Forgot Password</h3>
								<p className="fp-p">Enter the email address associated with your account</p>
								<input type="text" id="fname" name="email" onChange={handleChange} placeholder=" Enter email address" className="fp-text" />
								<p style={{ color: "red" }}>{formErrors.email}</p>
								<Link className="fp-link" to="#">Try another way</Link>
								<button type="submit" className="fp-btn">Next</button>
								<br />
								{Object.keys(formErrors, message).length === 0 && isSubmit ? (
									<span className='Success'>{message}</span>) : ('')}
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Forgot
