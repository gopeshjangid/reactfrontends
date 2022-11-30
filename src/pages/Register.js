import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react'
// import axios from 'axios'

const Register = () => {
	const initialValues = {
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	}

	const navigate = useNavigate();

	const [User, setUser] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [message, setMessage] = useState()
	
	// const [state, setState] = useState('')

	const handleChange = (e) =>{
		const  {name, value } = e.target;
		setUser({...User, [name]: value});
	};

		// useEffect(() => {
		// 	console.log(message);
		// 	if(Object.keys(message).length === 0 && isSubmit) {
		// 		console.log(User);
				
				
		// 	}
		// },[])

	
	  const handleSubmit = (e) => {
		e.preventDefault();
		const {username, email, password, confirmPassword} = User
		// add entity - POST
		// e.preventDefault();
		// creates entity
	 fetch("http://localhost:5000/register", {
		  method: "POST",
		  mode: "cors", 
		  body: JSON.stringify({
			username, email, password, confirmPassword
		}),
		  headers: {
			'Content-type': 'application/json',
			'Accept': 'application/json'
		  }
	
		})	
		.then(response => response.json(
		  setUser(
			 response
		)))
  
		 
		.then(json => {
			if(json.message === "successfully register"){
				navigate('/AccountSetting');
			}
				
	setMessage(json.message)
		  console.log(json)
		})
		.catch(err => {
		  console.log(err);
		});
		// setState(valid(json.message));
	
		
		setFormErrors(validate(User));
		setIsSubmit(true); 
	};



	useEffect(() => {
		console.log(formErrors);
		if(Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(User);
			// fetchData()
			
		}
	},[])

	const validate = (values) => {
const errors = {};




const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if (!values.username) {
	errors.username = "!'Please Enter Your Name'"
}
if (!values.email) {
	errors.email = "!'Please Enter Your Email'"
} else if(!regex.test(values.email)) {
	errors.email = "!'This is not Email Format'"
}
if (!values.password) {
	errors.password = "!'Please Enter Your Password'"
}

// if (typeof values["password"] !== "undefined" && typeof values["confirmPassword"] !== "undefined") {

//   if (values["password"] != values["confirm_password"]) {
// 	isValid = false;
// 	errors["password"] = "Confirm password is Not Matched";
//   }
// }


if (!values.confirmPassword) {
	errors.confirmPassword = "!'Please Enter ConfirmPassword'"
}
return errors;
	};

	// const register = async (e) => {
	// 	e.preventDefault();
		
		
	// }	
	// .then((res) => res.json())

		// const data = await res.json();

		// if(!data) {
		// 	console.log("messsage not send")
		// }else{
		// 	console.log(User);
		// 	setUser({User: data})
		// }
		

	
	




	// const navigate = useNavigate();
	
	// const register = () => {
	
	// 	const {username,email,password,confirmPassword} = User;

	// 	if(username && email && password && (password === confirmPassword)){
	// 		axios.post("http://localhost:5000/register",{
	// 			method: "POST",
  
	// 			body: JSON.stringify(User),
	// 			headers: {
	// 				'Content-type': 'application/json'
	// 				// 'Accept': "*/*"
	// 			  }
	// 		})
	// 		.then( res => console.log(res.data.message))
			
	// 	}else {
	// 		console.log("invalid input")
	// 	}
	// }

		
// 		const res = await fetch("/register", {
// 			method:"POST",
// 			headers:{
// 				"Content-Type" : "application/json",
// 				"Accept":  "application/json"
// 			},
// 			body: JSON.stringify({
// 			username,
// 			email,password,confirmPassword
// 					})
				
// 		}).then((res)=>res.json())
// 		.then((data) => {
// 			console.log(data, "userRegister")
// 		})

// 		const data = await res.json();
		

// 		if (data.status === 422	|| !data) {
// 			window.alert("Invalid Registration");
// 			console.log("Invalid Registration")
// 		} else {
// 			window.alert("Registration is Succesfull");
// 			console.log("Registration is Succesfull");
// 			navigate.push("/login")
// 		}
// }




  return (
    <div>
      <section className="reg_sec">
<div className="container">
<div className="row">
	
	<div className="col-md-6">
		<h2 className="reg-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit tellus, luctus nec.</h2>
		<div className="reg-block">
			<h3 className="reg-block_h3">As A Registered User, You Get Immediate Access To:</h3>
			<ol>
				<li className="reg-li"><img src="writer/img/short-icon.png" className="reg-block_img"/>
				<span className="reg_spa">
				Download millions of old solutions completed by our experts known as old QA.
				</span></li>
				
				<li className="reg-li"><img src="writer/img/short-icon.png" className="reg-block_img"/>
				<span className="reg_spa">
				Download millions of old solutions completed by our experts known as old QA.
				</span></li>
				
			</ol>
		</div>
	</div>
	
	<div className="col-md-6">
	
		<form method='POST' className="reg-form" onSubmit={handleSubmit}>
			 <label className="reg-lbl">Username</label>
			 <input type="text" name="username" autoComplete='username' placeholder="FullName" onChange={handleChange} className="ct_text-set" />
							<p style={{color: "red"}}>{formErrors.username}</p>
			  
			  <label className="reg-lbl">E-mail Address</label>
			  <input type="text" placeholder="Email" autoComplete='email' name='email' onChange={handleChange} className="ct_text-set" />
							<p style={{color: "red"}}>{formErrors.email}</p>
			  
			  <label className="reg-lbl">Password</label>
			  <input type="password" autoComplete='new-password' placeholder="" name='password' onChange={handleChange} className="ct_text-set1"/>
			  <p style={{color: "red"}}>{formErrors.password}</p>
			  
			   <label className="reg-lbl">Confirm Password</label>	
			  <input type="password" autoComplete='confirm-password' placeholder="Confirm Password" name='confirmPassword' onChange={handleChange} className="ct_text-set1"/>
			  <p style={{color: "red"}}>{formErrors.confirmPassword}</p>
			  
			 <button type="submit"  className="reg_btn-1">Register</button>
			  <Link to="/Login"><button type="button" className="reg_btn-2">Login</button></Link>
			   {Object.keys(formErrors, message).length === 0 && isSubmit ? (
							<h3 className='Success'>{message}</h3>) :('')}
		</form>
		
	</div>


</div>
</div>
</section>

    </div>
  )
}



export default Register
