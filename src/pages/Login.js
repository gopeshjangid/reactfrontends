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
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...User, [name]: value });
	};
	// useEffect(() =>{
	// 	if(
	// 		localStorage.getItem('message')){
	// 			navigate('/')
	// 		}
	// })


	const handleSubmit = (e) => {
		e.preventDefault();
		const {username, password} = User
		// add entity - POST
		// e.preventDefault();
		// creates entity
		fetch("http://localhost:5000/login", {
		  method: "POST",
		  mode: "cors", 
		  body: JSON.stringify({
			username, password
		  }),
		  headers: {
			'Content-type': 'application/json',
			'Accept': 'application/json'
		  }
	
		})		// .then((res) => res.json())

		  .then(response => response.json(
			setUser({
			  User: response
			})))
	
		  .then(json => {
			if(json.message==="successfully login"){
				navigate('/AccountSetting');
			}
			
			console.log(json)
		  })
		  .catch(err => {
			console.log(err);
		  });
	
		setFormErrors(validate(User));
		setIsSubmit(true);
	};


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
	


// 		e.preventDefault();  
// 		const { email, password} = initialValues;
// 		const res = await fetch("http://localhost:5000/login", {
// 			method:"POST",
// 			headers:{
// 				"Content-Type" : "application/json",
// 				"Accept": "application/json"
// 			},
// 			body: JSON.stringify({
// 				email,
//                 password
// 					})
// 		}).then((res)=>res.json(email,password))
// 		.then((data) => {
// 			console.log(data, "userLogin")
// 		})
// 		const data = await res.json();

// 		if (data.status === 422	|| !data) {
// 			window.alert("Invalid Registration");
// 			console.log("Invalid Registration")
// 		} else {
// 			window.alert("Registration is Succesfull");
// 			console.log("Registration is Succesfull")
// 		}
// }

	
	// const [email, setEmail] = ("");
	// const [password, setPassword] = ("");

	// const navigate = useNavigate();
	// useEffect(() => {
	// 	if (localStorage.getItem('user-info')) {
	// 		navigate.push("/add?${queryString}")
	// 	}
	// }, [])

	// async function login() {
	// 	console.log(email, password)
	// 	let item = { email, password };
	// 	let result = await fetch("/login", {
	// 		method: 'POST',
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Accept": 'application/json'
	// 		},
	// 		body: JSON.stringify(item)
	// 	});
	// 	result = await result.json();
	// 	console.log(result)
	// 	localStorage.setItem("user-info",JSON.stringify(result))
	// 	navigate.push("/add")
	



	return (
		<div>
			{/* <Header /> */}
			<section className="reg_sec">
				<div className="container">
					<div className="row">

						<form method='POST' className="login-form" onSubmit={handleSubmit}>
							<label className="reg-lbl" > Username or E-mail </label>
							<input type="text" autoComplete="username" id="fname" name="username" placeholder="Name" onChange={handleChange}  className="text_set" />
					        <p style={{color: "red"}}>{formErrors.username}</p>

							<label className="reg-lbl">Password</label>
							<input type="password" autoComplete="current-password" placeholder="password" name='password' onChange={handleChange} className="ct_text-set1" />
							<p style={{ color: "red" }}>{formErrors.password}</p>

							<label className="reg-lbl"><input type="checkbox" name='checkbox' onChange={handleChange} className="reg_check" /> Keep me signed in</label>
							<p style={{ color: "red" }}>{formErrors.checkbox}</p>

							<Link to="/Register"><button type="button" className="reg_btn-1">Register</button></Link>
							<button type="submit" className="reg_btn-2">Login</button> {Object.keys(formErrors).length === 0 && isSubmit ? (
								<h3 className='Success'>Login is Successfull</h3>) : ('')};

							<Link className="forgot_p" to="/Forgot">Forgot Your Password?</Link>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}


export default Login
