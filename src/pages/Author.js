
import { Link } from 'react-router-dom'


import React, {Component} from "react"
let urlApi = "http://localhost:5000";


class Author extends Component{
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
		const response = await fetch("http://localhost:5000/getAuthors",{
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

        return(




<section className= "team_sec">
<div className="container">
<div className="row">
	<h2 className="team_sec-h2">Meet our Authors</h2>
	<p className="team_sec-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
		ullamcorper mattis, pulvinar dapibus leo.Lor</p>
		{this.state.User.map((friend) => {
			
			return(

				
			<div className="col-md-3" key={friend._id}>
				<div className="author_box">
					
					<img src={urlApi+"/image/"+friend.image} className="author_sec-img"/>
					<h4 className="author_Sec-h2">{friend.title}</h4>
					<p className="author_Sec-p">{friend.dec}</p>
					
					<Link to="/ViewDetails"><button type="button" className="author-btn">View Details</button></Link>
					
				</div>
			</div>

			
			

)
})
}
			
<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <Link className="page-link" to="" tabIndex="-1">Previous</Link>
    </li>
    <li className="page-item"><Link className="page-link" to="">1</Link></li>
    <li className="page-item active">
      <Link className="page-link" to="">2 <span className="sr-only">(current)</span></Link>
    </li>
    <li className="page-item"><Link className="page-link" to="">3</Link></li>
    <li className="page-item">
      <Link className="page-link" to="">Next</Link>
    </li>
  </ul>
</nav>		

</div>

     

</div>
</section>






       

        
        );
}
}



export default Author