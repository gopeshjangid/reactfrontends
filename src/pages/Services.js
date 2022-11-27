
import React, {Component} from "react"
import { Link } from 'react-router-dom'




class Services extends Component{

	constructor(props){
		super(props)
		this.state = {
			User:[],
			isLoading:false,
			isError:false,
            // details : {
            //     name: "gopesh"
            // }
		}

        this.componentDidMount = this.componentDidMount.bind(this);
	};

	async componentDidMount(){
		this.setState({isLoading:true})
		const response = await fetch("http://localhost:5000/getServices",{
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
			this.setState({...this.state,User: User.data,isLoading:false})
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
  return (
    <div>
      <section className="services_sec">
<div className="container">
<div className="row">
	<h2 className="services_sec-h2"><span className="services_sec-span">SELECT AN</span> OPTION</h2>

	{ this.state.User && this.state.User.map((friend, value) => {
					return(	
		
		<div className="col-md-4" key={value.toString()}>
			
			<div className="services_box">
				<h3 className="services_box-h3">{friend.title} <span className="h3-spa">POSTS</span></h3>
				
				<ul className="services_ul">
					<li className="services_li-1"></li>
					<li className="services_li-2"></li>
				</ul>
				
				<p className="services_box-p">1 Guest Posts</p>
			
				<h4 className="services_box-h4">{friend.shortTitle}</h4>
				
				<ol className='p-0'>
						<li className="ol_li">
							<span className="ol_li-spa1"><i aria-hidden="true" className="fas fa-check"></i></span>
							<span>{friend.dec}</span>
						</li>
						<li className="ol_li">
							<span className="ol_li-spa1"><i aria-hidden="true" className="fas fa-check"></i></span>
							<span>{friend.price}</span>
						</li>
						
						
				</ol>
					<div className="text-center">

				<button type="button" className="services-btn1"><Link to="/AddTocart">Add to Cart</Link></button>
				<br/>
				<button type="button" className="services-btn2">SUBSCRIBE</button>
				<br/>
				<button type="button" className="services-btn3">BUY NOW</button>
				</div>
			
				
			</div>
		
		</div>

)

})}
		



</div>
</div>
</section>

    </div>
  )
}
}

export default Services
