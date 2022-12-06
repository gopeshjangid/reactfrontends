import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// import Header from '../Components/Header'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

const Login = () => {

	const initialValues = {
		username: "",
		password: "",
		checkbox: ""
	}

	const navigate = useNavigate();

	const [User, setUser] = useState(initialValues);
	const [error, setError] = useState();
	const [data, setData] = useState();
	const [message, setMessage] = useState();
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	
	const [isLoggedin, setIsLoggedin] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...User, [name]: value });
	};

	const handleSubmit = (e) => {

		e.preventDefault();
		const { username, password } = User

		const object = {
			username : username.trim(),
			password : password.trim()
		}

		

		setFormErrors(validate(User));
		// add entity - POST
		// e.preventDefault();
		// creates entity
		fetch("http://localhost:5000/login", {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(object, {username, password }),
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json'
			}

		}).then(response => response.json(
			console.log(response)
			
		)).then(json => {
			setData(
				{
				User: json
			}
			)
			if (json.message === "successfully login") {
			  localStorage.setItem('token',JSON.stringify(json.token))
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
		const res = data?.User?.error;
		 setError(res);
		 
	 }, [])


	useEffect(() => {
	   const res = data?.User?.message;
		setMessage(res);
		
	}, [data])


	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(User);
		}
	}, [formErrors])

	const validate = (values) => {
		const errors = {}
		// const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.username) {
			errors.username = "!'Please Enter Your Email/id'"
		}// else if(!regex.test(values.username)) {
		// 	errors.username = "!'This is not Email Format'"
		// }

		if (!values.password) {
			errors.password = "!'Please Enter Your Password'"
		}
		if (!values.checkbox) {
			errors.checkbox = "!'Please Select Checkbox'"
		}

		return errors;
	};

	return (
		<div>
			{/* <Header /> */}
			<section className="reg_sec">
				<div className="container">
					<div className="row">

						<form method='POST' className="login-form" onSubmit={handleSubmit}>
							<label className="reg-lbl" > Username or E-mail </label>
							<input type="text" autoComplete="username" id="fname" name="username" placeholder="Name" onChange={handleChange} className="text_set" />
							<p style={{ color: "red" }}>{formErrors.username}</p>

							<label className="reg-lbl">Password</label>
							<input type="password" autoComplete="current-password" placeholder="password" name='password' onChange={handleChange} className="ct_text-set1" />
							<p style={{ color: "red" }}>{formErrors.password}</p>

							<label className="reg-lbl"><input type="checkbox" name='checkbox' onChange={handleChange} className="reg_check" /> Keep me signed in</label>
							<p style={{ color: "red" }}>{formErrors.checkbox}</p>

							<Link to="/Register"><button type="button" className="reg_btn-1">Register</button></Link>
							<button type="submit" className="reg_btn-2">Login</button> 
							{Object.keys(formErrors, message, error).length === 0 && isSubmit ? (
								<h3 className='Success'>{message} {error}</h3>) : ('')}

							<Link className="forgot_p" to="/Forgot">Forgot Your Password?</Link>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}


export default Login
