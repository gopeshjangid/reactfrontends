
import React, {Component} from "react"




class Sample extends Component{

	constructor(props){
		super(props)
		this.state = {
			User:[],
			isLoading:false,
			isError:false,
            details : {
                name: "gopesh"
            }
		}

        this.componentDidMount = this.componentDidMount.bind(this);
	};

	async componentDidMount(){
		this.setState({isLoading:true})
		const response = await fetch("http://localhost:5000/getworkSamples",{
			method: "GET",
						mode: "cors",
						headers: {
							'Content-type': 'application/json',
							'Accept': 'application/json'
		}
	}
		);
		if(response.ok){
			const User = await response.json()
			console.log(User)
			this.setState({...this.state,User: User.data,isLoading:false, details : {...this.state.details,name: "fjksdjf"}})
		}else{
			this.setState({isError:true,isLoading:false})
		}
	};

	
	// renderTableHeader = () =>{
	// 	return Object.keys(this.state.User[0]).map(attr => <th key={attr}>
	// 		{attr.toUpperCase()}
	// 	</th>)
	// }

	// renderTableRows = () => {
	// 	return this.state.User.map(user => {
	// 		return(
	// 			<tr key={user.id}>
	// 				<td>{user.id}</td>
	// 				<td>{user.title}</td>
	// 				<td>{user.dic}</td>
	// 				<td><image src={user.image} /></td>
	// 			</tr>
	// 		)
	// 	});
	// };
	render(){
		const {User, isLoading, isError} = this.state

		if(isLoading){
			return <div>Loading...</div>
		}
		
		if(isError){
			return <div>Error...</div>
		}
        
	if(User.length < 0){
        return User.length > 0
    }
console.log("this.props.User", this.state.User)

	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		User:[],
	// 		title:"",
	// 		dec:"",
	// 		image:"",
	// 		isLoading:false,
	// 		isError:false
	// 	}
	// }

	// async componentDidMount(){
	// 	this.setState({isLoading:true})
	// 	const response = await fetch("http://localhost:5000/workSamples",{
	// 		method: "GET",
	// 					mode: "cors",
	// 					headers: {
	// 						'Content-type': 'application/json',
	// 						'Accept': 'application/json'
	// 	}
	// }
	// 	);
	// 	if(response.ok){
	// 		const User = await response.json()
	// 		console.log(User)
	// 		this.setState({User,isLoading:false})
	// 	}else{
	// 		this.setState({isError:true,isLoading:false})
	// 	}
	// }
	
	// renderTableHeader = () =>{
	// 	return Object.keys(this.state.User[0]).map(attr => <th key={attr}>
	// 		{attr.toUpperCase()}
	// 	</th>)
	// }

	// renderTableRows = () => {
	// 	return this.state.User.map(user => {
	// 		return(
	// 			<tr key={user.id}>
	// 				<td>{user.id}</td>
	// 				<td>{user.title}</td>
	// 				<td>{user.dic}</td>
	// 				<td><image src={user.image} /></td>
	// 			</tr>
	// 		)
	// 	});
	// };

		// const {User, isLoading, isError} = this.state

		// if(isLoading){
		// 	return <div>Loading...</div>
		// }
		
		// if(isError){
		// 	return <div>Error...</div>
		// };
	return (
		
		 <div>
	 	<section className="samp_sec">
				<div className="container">
		 			<div className="row">
					<form>
						<input type="text" name="search" placeholder="Search Your Work Sample" className="samp_sec-search" />
						<button type="submit" className="samp_sec-btn">search</button>
						<button type="submit" className="samp_sec-btn1">show All</button>
					</form>


						
						<h2 className="samp_sec-h2">Work Sample</h2>

						<p className="samp_sec-p">You’re probably looking for ways to get people to pay attention to you. Maybe you’re looking for a way to make money.
							Maybe you’re trying to find a new portfolio to use. In any case, you’re probably looking for tips on how to write better
							content that gets people up at night</p>
							{ this.state.User && this.state.User.map((friend, value) => {
					return(	
					<div className="col-md-3" key={value.toString()}>
							<div className="samp_box">
								<img src={friend.image} className="samp_box-img" />
								<h3 className="samp_box-h3">{friend.title}</h3>
								<p className="samp_box-p">{friend.dec}</p>
								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
							</div>
						</div>
						)

	})}

					

					</div>
					
				</div>
			</section>


		</div>


)
// :(
// 	<div>No USers</div>
// 	)
}

}

export default Sample







	{/* <div className="col-md-3">
							<div className="samp_box">
								<img src="writer/img/You-Schedule-the-Vacation.webp" className="samp_box-img" />
								<h3 className="samp_box-h3">How to start studying after a long break?</h3>
								<p className="samp_box-p">Studying after a break might be tiresome, boring, or ineffective.</p>
								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
							</div>
						</div>

						<div className="col-md-3">
							<div className="samp_box">
								<img src="writer/img/What-are-great-winter.jpg" className="samp_box-img" />
								<h3 className="samp_box-h3">What are great winter collections for this December?</h3>
								<p className="samp_box-p">Collecting clothes can be a tiresome job in winters and you might confuse
									yourself in choosing the apt outfit.</p>
								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
							</div>
						</div>

						<div className="col-md-3">
							<div className="samp_box">
								<img src="writer/img/ideas-regarding-blogging.png" className="samp_box-img" />
								<h3 className="samp_box-h3">What are some innovative ideas regarding blogging?</h3>
								<p className="samp_box-p">Publishing content to a blog is a stunning method for sharing data and has
									an effect.</p>
								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
							</div>
						</div> */}









// import React, { useState } from "react";

// function Sample() {
//   const [userList, setUserList] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getUserList = () => {
//     setLoading(true);
//    fetch("https://localhost:5000/workSamples",{
// 	method:'POST',
// 	mode:'cors',
// 	headers: {
// 						'Content-type': 'application/json',
// 						'Accept': 'application/json'
// 					}
//    }).then((res) => {
//       setUserList(res.data.data);
//       setLoading(false);
//     });
//   };

//   return (
//     <div className="container App">
//       <h4 className="d-inline-block">Clue Mediator</h4>
//       <button
//         className="btn btn-info float-right"
//         onClick={getUserList}
//         disabled={loading}
//       >
//         {loading ? "Loading..." : "Get User List"}
//       </button>
//       <div className="clearfix"></div>

//       <table className="table mt-3">
//         <thead className="thead-dark">
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Avatar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {userList.map((x, i) => (
//             <tr key={i}>
//               <td>{x.title}</td>
//               <td>{x.dec}</td>
//               <td><img src={x.image} /></td>
//               <td>
//                 <img src={x.avatar} width="50" height="50" alt={x.avatar} />
//               </td>
//             </tr>
//           ))}
//           {userList.length === 0 && (
//             <tr>
//               <td className="text-center" colSpan="4">
//                 <b>No data found to display.</b>
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Sample;





// //  import React, { useEffect } from 'react'

// // import { useState } from 'react';

// // const Sample = () => {
// // 	// const initialValues = {
// // 	// 	_id: "",
// // 	// 	name:"",
// // 	// 	title: "",
// // 	// 	dec: "",
// // 	// }

// // 	// const initialValues = {

// // 	// 	search:""
// // 	// }

// // 	// const [User, setUser] = useState(initialValues);


// // 	// const handleChange = (e) =>{
// // 	// 	const  {name, value } = e.target;
// // 	// 	setUser({...User, [name]: value});
// // 	// };


// // 	const [User, setUser] = useState([]);
// // 	// useEffect(() => {
// // 	const workSample = async () => {
		

// // 		const response = await fetch('http://localhost:5000/workSamples',
// // 		 {
// // 			method: "GET",
// // 			mode: "cors",
// // 			headers: {
// // 				'Content-type': 'application/json',
// // 				'Accept': 'application/json'
// // 			}
// // 		}
// // 		)
// // 		.then((result) => {
// // 			result.json().then((resp) =>{
// // 				setUser(resp)
// // 			})
// // 		}) 

// // 		// setUser(await response.json());
// // 		// console.log(User);
		
// // 			// .then((result) => {
// // 			// 	result.json()
// // 			// 	.then((resp) => {
// // 			// 		setUser({ resp })
// // 			// 	})
// // 			// })
// // 		}
	
// // 		useEffect(() =>{
// // 			workSample();
// // 	}, []);
// // 	console.log(User)




// // 	// }, [])



// // 	// console.log(response)
// import React, {Component} from "react"

// class Sample extends Component{

// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			User:[],
// 			isLoading:false,
// 			isError:false
// 		}
// 	}

// 	async componentDidMount(){
// 		this.setState({isLoading:true})
// 		const response = await fetch("http://localhost:5000/workSamples",{
// 			method: "GET",
// 						mode: "cors",
// 						headers: {
// 							'Content-type': 'application/json',
// 							'Accept': 'application/json'
// 		}
// 	}
// 		);
// 		if(response.ok){
// 			const User = await response.json()
// 			console.log(User)
// 			this.setState({User,isLoading:false})
// 		}else{
// 			this.setState({isError:true,isLoading:false})
// 		}
// 	}
	
// 	renderTableHeader = () =>{
// 		return Object.keys(this.state.User[0]).map(attr => <th key={attr}>
// 			{attr.toUpperCase()}
// 		</th>)
// 	}

// 	renderTableRows = () => {
// 		return this.state.User.map(user => {
// 			return(
// 				<tr key={user.id}>
// 					<td>{user.id}</td>
// 					<td>{user.title}</td>
// 					<td>{user.dic}</td>
// 					<td><image src={user.image} /></td>
// 				</tr>
// 			)
// 		});
// 	};
// 	render(){
// 		const {User, isLoading, isError} = this.state

// 		if(isLoading){
// 			return <div>Loading...</div>
// 		}
		
// 		if(isError){
// 			return <div>Error...</div>
// 		};
// 	return  (
		
// 		 <div>
// 	 	<section className="samp_sec">
// 				<div className="container">
// 		 			<div className="row">
// 					<form>
// 						<input type="text" name="search" placeholder="Search Your Work Sample" className="samp_sec-search" />
// 						<button type="submit" className="samp_sec-btn">search</button>
// 						<button type="submit" className="samp_sec-btn1">show All</button>
// 					</form>


// 						<div className='container'>
// 							<div className="App row">


//                                 <table border={2/3}>
// 									<thead>

										
// 									<tr>
                     
// 					 <th>ID</th>
// 					 <th>Name</th>
// 					 <th>UserName</th>
// 					 <th>Email</th>
// 				</tr>
// 									</thead>

// 									<tbody>
// 								{(User || []).map((user) => (
			
// 				<tr key={user.id}>
// 					<td>{user.id}</td>
// 					<td>{user.title}</td>
// 					<td>{user.dic}</td>
// 					<td><image src={user.image} /></td>
// 				</tr>
			
// 								))
// 	};
// 									</tbody>
// 								</table>
                                 

// 							</div>
// 						</div>
						
	


// 						<h2 className="samp_sec-h2">Work Sample</h2>

// 						<p className="samp_sec-p">You’re probably looking for ways to get people to pay attention to you. Maybe you’re looking for a way to make money.
// 							Maybe you’re trying to find a new portfolio to use. In any case, you’re probably looking for tips on how to write better
// 							content that gets people up at night</p>

// 						<div className="col-md-3">
// 							<div className="samp_box">
// 								<img src="writer/img/Events-Catering.webp" className="samp_box-img" />
// 								<h3 className="samp_box-h3">How to make learning history interesting and prevent monotony?</h3>
// 								<p className="samp_box-p">Schools, colleges, and universities always have overburdened and made history
// 									a compulsion.</p>
// 								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
// 							</div>
// 						</div>

// 						<div className="col-md-3">
// 							<div className="samp_box">
// 								<img src="writer/img/You-Schedule-the-Vacation.webp" className="samp_box-img" />
// 								<h3 className="samp_box-h3">How to start studying after a long break?</h3>
// 								<p className="samp_box-p">Studying after a break might be tiresome, boring, or ineffective.</p>
// 								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
// 							</div>
// 						</div>

// 						<div className="col-md-3">
// 							<div className="samp_box">
// 								<img src="writer/img/What-are-great-winter.jpg" className="samp_box-img" />
// 								<h3 className="samp_box-h3">What are great winter collections for this December?</h3>
// 								<p className="samp_box-p">Collecting clothes can be a tiresome job in winters and you might confuse
// 									yourself in choosing the apt outfit.</p>
// 								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
// 							</div>
// 						</div>

// 						<div className="col-md-3">
// 							<div className="samp_box">
// 								<img src="writer/img/ideas-regarding-blogging.png" className="samp_box-img" />
// 								<h3 className="samp_box-h3">What are some innovative ideas regarding blogging?</h3>
// 								<p className="samp_box-p">Publishing content to a blog is a stunning method for sharing data and has
// 									an effect.</p>
// 								<button type="button" className="samp_box-btn"> <i className="fa fa-download samp-icon"></i>Download</button>
// 							</div>
// 						</div>

// 					</div>
// 				</div>
// 			</section>


// 		</div>


// )
// // :(
// // 	<div>No USers</div>
// // 	)
// }




// export default Sample