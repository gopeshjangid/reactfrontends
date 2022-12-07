import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {


const navigate = useNavigate()

	useEffect(() => {

		const getToken = localStorage.getItem('token');

		console.log(getToken)
		
		// if (getToken == null) {
			
		// 	navigate('/login')

		// }
	}, [])



	const initialValues = {
		username: "",
		// lastname: "",
		// birth: "",
		email: "",
		password: ""
		// password: "",
		// school: "",
		// check: ""
	}

	const [Users, setUsers] = useState(initialValues);
	const [data, setData] = useState();
	// const [value, setValue] = useState();
	const [message, setMessage] = useState();
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [isLoggedin, setIsLoggedin] = useState(false);



	const Details = () => {
		// add entity - POST
		// e.preventDefault();
		// creates entity
		const tokenID = localStorage.getItem("token");
		console.log( "hello",tokenID)
		fetch("http://localhost:5000/viewProfile", {
			method: "GET",
			mode: "cors",
		
			headers: {
				'Content-type': 'application/json',
				Authorization: `${tokenID}`,
			}

		})		// .then((res) => res.json())

			.then(response => response.json(
				setUsers({
					response
				})))

			.then(json => {
				// if (json.message === "mail have sent successfully") {
				// 	navigate('/login');
				// }

              setData({
				Users:json
			})

				// setMessage(json.message)
				// setError(json.error)

				console.log(json)
			})
			.catch(err => {
				console.log(err);
			});
	}

	console.log("sonu", data)
    

	const handleChange = (e) => {
	
		const { name, value } = e.target;
		setUsers({ ...Users, [name]: value });
	};





	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, email, password } = Users

		const object = {
			username: username.trim(),
			email: email.trim(),
			password: password.trim()
		}



		setFormErrors(validate(Users));
		// add entity - POST
		// e.preventDefault();
		// creates entity

		const tokenID = localStorage.getItem("token");
		fetch("http://localhost:5000/updateProfile", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(object, { username, email, password }),
			headers: {
				'Content-type': 'application/json',
				Authorization: `${tokenID}`,
			}

		}).then(response => response.json(
			console.log(response)

		)).then(json => {
			setData(
				{
					Users: json
				}
			)
			if (json.message === "successfully login") {
				localStorage.setItem('token', json.token)
				setIsLoggedin(true);
				

				navigate('/AccountSetting');
			}



			console.log(json)
		})
			.catch(err => {
				console.log(err);
			});





		setIsSubmit(true);
	};
		

	useEffect(() => {
		const res = data?.User?.message;
		setMessage(res);

	}, [data])

    



	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(Users);
		}
	}, [formErrors])

	const validate = (values) => {
		const errors = {}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.username) {
			errors.username = "!'Please Enter Your username'"
		}		

		if (!values.email) {
			errors.email = "!'Please Enter Your Email'"
		} else if (!regex.test(values.email)) {
			errors.email = "!'This is not Email Format'"
		}

		if (!values.password) {
			errors.password = "!'Please Enter Your password'"
		}
		return errors;
	};




    return (
    	<form onSubmit={handleSubmit}>

												
													<div className='me-3'>
														<label className="as-lbl">FullName</label>
														<input type="text" id="fname" name="username" onChange={handleChange} className="as-text_set" />
														<p style={{ color: "red" }}>{formErrors.username}</p>

													</div>




											



												

													<div className='me-3'>
														<label className="as-lbl">Email Id</label>
														<input type="email" id="fname" name="email" onChange={handleChange} className="as-text_set" />
														<p style={{ color: "red" }}>{formErrors.email}</p>

													</div>

											

												
													<div className='me-3'>
														<label className="as-lbl">password</label>
														<input type="password" name="password" onChange={handleChange} className="as-text_set" />
														<p style={{ color: "red" }}>{formErrors.password}</p>


													
												</div> 

												<br />
												{Object.keys(formErrors, message).length === 0 && isSubmit ? (
													<h5 className='Success'>{message}</h5>) : ('')}

												<button type="submit" className="as-btn_set m-auto">Update</button>
											</form>
    )
  }




export default ViewProfile

