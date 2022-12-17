import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      isAddLoading: false,
      cartItems: [],
      // details : {
      //     name: "gopesh"
      // }
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    this.viewCart();
    const response = await fetch("http://localhost:5000/getServices", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      const User = await response.json();
      // console.log(User);
      this.setState({ ...this.state, User: User.data });
    }
  }

  viewCart = async () => {
    const tokenID = localStorage.getItem("token");
    console.log(tokenID);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    await axios
      .get("http://localhost:5000/viewCart", {
        headers: headers,
      })
      .then((response) => {
        console.log("cart items ---------------", response.data);
        this.setState({ ...this.state, cartItems: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addTocarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");
    console.log(this.state.cartItems);
    console.log(id);
    console.log(
      this.state.cartItems.message?.filter(
        (item, index) => item.productId._id === id
      )
    );

    let quantity = 1;
    if (this.state.cartItems.message.length > 0) {
      quantity = this.state.cartItems.message?.filter(
        (item, index) => item.productId._id === id
      )[0]
        ? this.state.cartItems.message?.filter(
            (item, index) => item.productId._id === id
          )[0].quantity + 1
        : 1;
    } else {
      quantity = 1;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    const data = { quantity: quantity };
    this.setState({ ...this.state, isAddLoading: true });
    await axios
      .post(`http://localhost:5000/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        this.viewCart();
        // this.setState({ ...this.state, cartItems: response.data.message });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => this.setState({ ...this.state, isAddLoading: false }));
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
  render() {
    const { User } = this.state;

    if (User.length < 0) {
      return User.length > 0;
    }

    // console.log("this.props.User", this.state.User);
    return (
      <div>
        <section className="services_sec position-relative">
          <div className="container">
            <div className="row">
              <h2 className="services_sec-h2">
                <span className="services_sec-span">SELECT AN</span> OPTION
              </h2>

              {this.state.User &&
                this.state.User.map((friend, value) => {
                  return (
                    <div className="col-md-4" key={value.toString()}>
                      <div className="services_box">
                        <h3 className="services_box-h3">
                          {friend.title} <span className="h3-spa">POSTS</span>
                        </h3>

                        <ul className="services_ul">
                          <li className="services_li-1"></li>
                          <li className="services_li-2"></li>
                        </ul>

                        <p className="services_box-p">1 Guest Posts</p>

                        <li className="ol_li">
                          <span className="fs-3 justify-content-center d-flex align-items-center ">
                            <span className="fs-5">Price:</span>
                            {friend.price}
                          </span>
                        </li>

                        <h4 className="services_box-h4">{friend.shortTitle}</h4>

                        <ol className="p-0">
                          <li className="ol_li">
                            <span className="ol_li-spa1">
                              <i
                                aria-hidden="true"
                                className="fas fa-check"
                              ></i>
                            </span>
                            <span>{friend.dec}</span>
                          </li>
                        </ol>
                        <div className="text-center">
                          {/* <Link to="/AddTocart">Add to Cart</Link> */}
                          <button
                            type="button"
                            className="services-btn1"
                            disabled={this.state.isAddLoading}
                            onClick={() => this.addTocarthandler(friend._id)}
                          >
                            Add to Cart
                          </button>

                          <br />
                          <button type="button" className="services-btn2">
                            SUBSCRIBE
                          </button>
                          <br />
                          <button type="button" className="services-btn3">
                            BUY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "100px",
              bottom: "0",
              left: "0",
              display: "flex",
              alignItems: "center",
              position: "sticky",
              backgroundColor: "#03979C",
              color: "white",
              zIndex: 999,
            }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="fw-normal">
                    Total-Price =<span>></span>{" "}
                    {this.state.cartItems.totalPrice}
                  </h5>
                  <h5 className="fw-normal">
                    Total-Items =<span>></span>{" "}
                    {this.state.cartItems.totalItems}
                  </h5>
                </div>

                <div className="col-md-4 text-end">
                  <Link
                    style={{ color: "white", fontSize: "20px" }}
                    className="viewCart text-decoration-none"
                    to={"/viewCart"}
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
