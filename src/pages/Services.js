import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      isAddLoading: false,
      cartItems: [],
      noUser: false,
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

  // if(response.data.message) {
  addTocarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");

    if (!tokenID) {
      this.setState({ ...this.state, noUser: true });
      return;
    }
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

  async showRazorpay(e) {
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // var payload = JSON.stringify({
    //   amount: amount,
    // });

    const data = await fetch(
      "http://localhost:5000/razorpayCreateSubscription",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      }
    ).then((t) => t.json());
    console.log("ddddd", data);
    const options = {
      key: "rzp_test_KiBn8QyRFCYQnw",
      subscription_id: data.message.id,
      name: "Acme Corp.",
      description: "Monthly Test Plan",
      callback_url: "/verifySubscriptionPayment",
      handler: function (response) {
        console.log("resss", response);
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_subscription_id);
        console.log(response.razorpay_signature);
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_subscription_id: response.razorpay_subscription_id,
          razorpay_signature: response.razorpay_signature,
        });

        var config = {
          method: "post",
          url: "http://localhost:5000/verifySubscriptionPayment",
          headers: {
            Authorization: `${tokenID}`,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("log", data);
        axios(config)
          .then(function (res) {
            console.log("finalRes", res);
            // window.location.reload(true);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "+919876543210",
      },
      notes: {
        note_key_1: "Tea. Earl Grey. Hot",
        note_key_2: "Make it so.",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  //     key: "key_id",
  //     subscription_id: "sub_00000000000001",
  //     name: "Acme Corp.",
  //     description: "Monthly Test Plan",
  //     // handler: function(response) {
  //     //   // alert(response.razorpay_payment_id)
  //     //   // alert(response.razorpay_subscription_id)      alert(response.razorpay_signature)
  //     // },
  //     prefill: {
  //       name: "Gaurav Kumar",
  //       email: "gaurav.kumar@example.com",
  //       contact: "+919876543210",
  //     },
  //     notes: {
  //       note_key_1: "Tea. Earl Grey. Hot",
  //       note_key_2: "Make it so.",
  //     },
  //     theme: {
  //       color: "#F37254",
  //     },
  //   };

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

                        <ul className="services_ul justify-content-center p-0">
                          <li className="services_li-1 ms-0"></li>
                          <li className="services_li-2 me-0 d-block"></li>
                        </ul>

                        <p className="services_box-p p-0 text-center">
                          1 Guest Posts
                        </p>

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
                          <button
                            type="button"
                            onClick={(e) => this.showRazorpay(e)}
                            className="services-btn2"
                          >
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
          {this.state?.cartItems?.totalPrice > 0 && (
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
          )}
          {this.state.noUser && (
            <div className="text-center text-danger fs-1 mb-3">
              Please Login First
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Services;
