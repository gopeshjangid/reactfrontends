
import React, {Component} from "react"




class Sample extends Component{

	constructor(props){
		super(props)
		this.state = {
			User:[],
			isLoading:false,
			isError:false,
           
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
			this.setState({...this.state,User: User.data,isLoading:false })
		}else{
			this.setState({isError:true,isLoading:false})
		}
	};

	

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







	