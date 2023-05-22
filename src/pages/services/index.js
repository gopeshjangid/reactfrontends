import React, { Component } from "react";
import Link from "next/link";

import axios from "axios";
import Loader from "../../Components/Loader";
import Head from "next/head";
// import usePaymentMethod from "../fetchApi/PaymentMethod";
// import { User } from "@auth0/auth0-react";

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

class services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      isAddLoading: false,
      cartItems: [],
      hello: [],
      stripeSubscription: [],
      noUser: false,
      razorpaSubscription: [],
      paymentMethod: [],

      // navigate: useRouter(),
      // details : {
      //     name: "gopesh"
      // }
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  // var navigate =  useRouter()

  async componentDidMount() {
    this.setState({ isAddLoading: true });

    this.viewCart2();
    this.viewCart();
    const tokenID = localStorage.getItem("token");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APIURL}/getServices`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (response.ok) {
      const User = await response.json();
      console.log(User);
      if (!tokenID) {
        let getAllProduct = JSON.parse(localStorage.getItem("product"));
        if (getAllProduct === null) {
          getAllProduct = [];
        }
        let totalPrice = 0;
        let totalItems = 0;
        for (let i = 0; i < getAllProduct.length; i++) {
          totalPrice += getAllProduct[i].price * getAllProduct[i].quantity;
          totalItems += getAllProduct[i].quantity;
        }
        this.setState({
          ...this.state,
          getAllProduct,
          totalPrice: totalPrice,
          totalItems: totalItems,
        });
      }
      this.setState({
        ...this.state,
        User: User.data.sort().reverse(),
        isAddLoading: false,
      });
    }
  }

  viewCart2 = async () => {
    const tokenID = localStorage.getItem("token");
    console.log(tokenID);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    await axios
      .get(`${process.env.NEXT_PUBLIC_APIURL}/viewCart`, {
        headers: headers,
      })
      // .then((res) => {
      //   console.log("buynow items ---------------", res);
      //   this.setState({ ...this.state, });
      //   console.log("sdertyuytre", this.state.User);
      // })
      .then((response) => {
        console.log("cart items ---------------", response);
        this.setState({
          ...this.state,
          hello: response.data,
        });

        console.log("sdertyuytre", this.state.User);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  viewCart = async () => {
    const tokenID = localStorage.getItem("token");
    console.log(tokenID);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    await axios
      .get(`${process.env.NEXT_PUBLIC_APIURL}/viewCart`, {
        headers: headers,
      })
      // .then((res) => {
      //   console.log("buynow items ---------------", res);
      //   this.setState({ ...this.state, });
      //   console.log("sdertyuytre", this.state.User);
      // })
      .then((response) => {
        console.log("cart items ---------------", response);
        this.setState({
          ...this.state,
          cartItems: response.data,
        });

        console.log("sdertyuytre", this.state.User);
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
      //  console.log(this.state.User);

      const localStorageProduct = await this.state.User?.filter(
        (item, index) => item._id === id
      )[0];

      console.log(localStorageProduct);

      localStorageProduct.quantity = 1;
      let getAllProduct = JSON.parse(localStorage.getItem("product"));
      this.setState({ ...this.state, getAllProduct });

      let findOneProduct = getAllProduct?.filter(
        (item, index) => item._id === id
      );
      if (findOneProduct === undefined) {
        findOneProduct = [];
      }
      console.log(findOneProduct);
      if (findOneProduct.length > 0) {
        console.log(findOneProduct[0]._id);
        const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
        //   findOneProduct[0].quantity
        console.log(Indexobj);
        getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity + 1;

        localStorage.setItem("product", JSON.stringify(getAllProduct));
        console.log(getAllProduct);
        let totalPrice = 0;
        let totalItems = 0;
        for (let i = 0; i < getAllProduct.length; i++) {
          totalPrice += getAllProduct[i].price * getAllProduct[i].quantity;
          totalItems += getAllProduct[i].quantity;
        }
        console.log(totalPrice);
        this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        console.log(this.state.totalPrice);
      } else {
        if (getAllProduct === null) {
          console.log("pro null condition true");
          getAllProduct = [];
          getAllProduct.push(localStorageProduct);
          localStorage.setItem("product", JSON.stringify(getAllProduct));
          let getNewAllProduct = JSON.parse(localStorage.getItem("product"));
          let totalPrice = 0;
          let totalItems = 0;
          for (let i = 0; i < getNewAllProduct.length; i++) {
            totalPrice +=
              getNewAllProduct[i].price * getNewAllProduct[i].quantity;
            totalItems += getNewAllProduct[i].quantity;
          }
          console.log(totalPrice);
          this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        } else {
          console.log("pro null condition false");
          getAllProduct.push(localStorageProduct);
          console.log(getAllProduct);
          localStorage.setItem("product", JSON.stringify(getAllProduct));
          console.log(
            this.state.User?.filter((item, index) => item._id === id)[0]
          );
          let totalPrice = 0;
          let totalItems = 0;
          for (let i = 0; i < getAllProduct.length; i++) {
            totalPrice += getAllProduct[i].price * getAllProduct[i].quantity;
            totalItems += getAllProduct[i].quantity;
          }
          console.log(totalPrice);
          this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        }
      }
      console.log(findOneProduct);

      // localStorage.setItem("", JSON.stringify());
      return;
    }

    console.log(this.state.cartItems);
    console.log(id);
    // console.log(
    //   this.state.cartItems.message?.filter(
    //     (item, index) => item.productId._id === id
    //   )
    // );

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
      .post(`${process.env.NEXT_PUBLIC_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        this.viewCart();

        this.setState({ ...this.state, cartItems: response.data.message });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => this.setState({ ...this.state, isAddLoading: false }));
  };

  buynowhandler = async (id) => {
    const tokenID = localStorage.getItem("token");

    if (!tokenID) {
      this.setState({ ...this.state, noUser: true });
      //  console.log(this.state.User);

      const localStorageProduct = await this.state.User?.filter(
        (item, index) => item._id === id
      )[0];

      console.log(localStorageProduct);

      localStorageProduct.quantity = 1;
      let getAllrazorpayProduct = JSON.parse(localStorage.getItem("product"));
      this.setState({ ...this.state, getAllrazorpayProduct });

      let findOneProduct = getAllrazorpayProduct?.filter(
        (item, index) => item._id === id
      );
      if (findOneProduct === undefined) {
        findOneProduct = [];
      }
      console.log(findOneProduct);
      if (findOneProduct.length > 0) {
        console.log(findOneProduct[0]._id);
        const Indexobj = getAllrazorpayProduct.findIndex(
          (obj) => obj._id === id
        );
        //   findOneProduct[0].quantity
        console.log(Indexobj);
        getAllrazorpayProduct[Indexobj].quantity =
          getAllrazorpayProduct[Indexobj].quantity + 1;

        localStorage.setItem("product", JSON.stringify(getAllrazorpayProduct));
        console.log(getAllrazorpayProduct);
        let totalPrice = 0;
        let totalItems = 0;
        for (let i = 0; i < getAllrazorpayProduct.length; i++) {
          totalPrice +=
            getAllrazorpayProduct[i].price * getAllrazorpayProduct[i].quantity;
          totalItems += getAllrazorpayProduct[i].quantity;
        }
        console.log(totalPrice);
        this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        console.log(this.state.totalPrice);
      } else {
        if (getAllrazorpayProduct === null) {
          console.log("pro null condition true");
          getAllrazorpayProduct = [];
          getAllrazorpayProduct.push(localStorageProduct);
          localStorage.setItem(
            "product",
            JSON.stringify(getAllrazorpayProduct)
          );
          let getNewAllProduct = JSON.parse(localStorage.getItem("product"));
          let totalPrice = 0;
          let totalItems = 0;
          for (let i = 0; i < getNewAllProduct.length; i++) {
            totalPrice +=
              getNewAllProduct[i].price * getNewAllProduct[i].quantity;
            totalItems += getNewAllProduct[i].quantity;
          }
          console.log(totalPrice);
          this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        } else {
          console.log("pro null condition false");
          getAllrazorpayProduct.push(localStorageProduct);
          console.log(getAllrazorpayProduct);
          localStorage.setItem(
            "product",
            JSON.stringify(getAllrazorpayProduct)
          );
          console.log(
            this.state.User?.filter((item, index) => item._id === id)[0]
          );
          let totalPrice = 0;
          let totalItems = 0;
          for (let i = 0; i < getAllrazorpayProduct.length; i++) {
            totalPrice +=
              getAllrazorpayProduct[i].price *
              getAllrazorpayProduct[i].quantity;
            totalItems += getAllrazorpayProduct[i].quantity;
          }
          console.log(totalPrice);
          this.setState({ totalPrice: totalPrice, totalItems: totalItems });
        }
      }
      console.log(findOneProduct);

      // localStorage.setItem("", JSON.stringify());
      return;
    }

    console.log(this.state.hello);
    console.log(id);
    // console.log(
    //   this.state.cartItems.message?.filter(
    //     (item, index) => item.productId._id === id
    //   )
    // );

    let quantity = 1;
    if (this.state.hello.message.length > 0) {
      quantity = this.state.hello.message?.filter(
        (item, index) => item.productId._id === id
      )[0]
        ? this.state.hello.message?.filter(
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
      .post(`${process.env.NEXT_PUBLIC_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message.length);
        this.viewCart2();

        this.setState({ ...this.state, hello: response.data.message });

        if (response.data.message.length > 0) {
          this.props.router.push("/viewcart");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => this.setState({ ...this.state, isAddLoading: false }));
  };

  showRazorpay = async (id) => {
    const tokenID = localStorage.getItem("token");
    console.log(tokenID);
    console.log("iiiiiddddd", id);
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
      `${process.env.NEXT_PUBLIC_APIURL}/razorpayCreateSubscription/${id}`,
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
      key: "rzp_live_DbkICpMn91oJVO",
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
          url: `${process.env.NEXT_PUBLIC_APIURL}/verifySubscriptionPayment`,
          headers: {
            Authorization: `${tokenID}`,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("log", data);
        axios(config)
          .then(function (res) {
            console.log("finalRes", res.data.message);
            // this.setState({ ...this.state, razorpaSubscription: res.data });
            // if (res.data.message === "subscriptiion successfull") {
            //   this.props.router.push("/PurchaseSuccess");
            // }
            window.location.reload(true);
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
  };

  StripeSubscription = async (id) => {
    const token = localStorage.getItem("token");
    // console.log("qwertyuiuytrewetui", id);
    console.log("token", token);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_APIURL}/stripeSubscription/${id}`,
        {},

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        sessionStorage.setItem("id", response.data.id);
        window.open(response.data.url, "_self");
        console.log("stripesubscription", response);
      })

      .catch((error) => console.log(error));
  };
  // console.log(amount);

  PaypalSubscription = async (id) => {
    const token = localStorage.getItem("token");
    console.log("qwertyuiuytrewetui", id);
    console.log("token", token);

    // const amount = this.state.User?.price;
    // console.log(amount);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_APIURL}/PaypalSubscription/${id}`,
        {},

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      )

      .then((response) => {
        sessionStorage.setItem("sub_id", response.data.id);
        sessionStorage.setItem("amount", response.data.amount);
        sessionStorage.setItem("productId", response.data.productId);
        window.open(response.data.url, "_self");

        console.log("Paypalsubscription", response.data);
      })

      .catch((error) => console.log(error));
  };

  render() {
    const { User } = this.state;

    if (User.length < 0) {
      return User.length > 0;
    }
    const RenderHTML = (props) => (
      <span dangerouslySetInnerHTML={{ __html: props.HTML }}></span>
    );

    console.log("this.props.User", this.state.User);

    return (
      <div>
        {this.state.isAddLoading ? (
          <Loader />
        ) : (
          <section className="services_sec position-relative">
            <Head>
              <title>Services – Subscriptions - Get Pro Writer</title>

              <meta
                name="description"
                content="Select an Option Expert Guest Posts 1 Guest Posts DR 1-49 2000+ traffic on Ahrefs Do Follow Links with chosen anchors 600 Words unique SEO Content with two stock images 1-2 Links/Post 100% Real Sites Niche Relevant Blogs Google Indexed Turnaround Time - 6 Working Days Approve suitable publishers 24/7 customer support Guaranteed permanent live"
              />
              <meta
                name="robots"
                content="noindex, nofollow, max-image-preview:large"
              />
              <link rel="canonical" href="https://getprowriter.com/services/" />
              <meta
                name="generator"
                content="All in One SEO (AIOSEO) 4.2.3.1 "
              />
              <meta property="og:locale" content="en_US" />
              <meta
                property="og:site_name"
                content="Get Pro Writer - Content That Brings Wow Reaction"
              />
              <meta property="og:type" content="article" />
              <meta
                property="og:title"
                content="Services – Subscriptions - Get Pro Writer"
              />
              <meta
                property="og:description"
                content="Select an Option Expert Guest Posts 1 Guest Posts DR 1-49 2000+ traffic on Ahrefs Do Follow Links with chosen anchors 600 Words unique SEO Content with two stock images 1-2 Links/Post 100% Real Sites Niche Relevant Blogs Google Indexed Turnaround Time - 6 Working Days Approve suitable publishers 24/7 customer support Guaranteed permanent live"
              />
              <meta
                property="og:url"
                content="https://getprowriter.com/services/"
              />
              <meta
                property="og:image"
                content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
              />
              <meta
                property="article:published_time"
                content="2022-06-29T13:49:38+00:00"
              />
              <meta
                property="article:modified_time"
                content="2022-07-05T16:21:49+00:00"
              />
              <meta name="twitter:card" content="summary" />
              <meta
                name="twitter:title"
                content="Services – Subscriptions - Get Pro Writer"
              />
              <meta
                name="twitter:description"
                content="Select an Option Expert Guest Posts 1 Guest Posts DR 1-49 2000+ traffic on Ahrefs Do Follow Links with chosen anchors 600 Words unique SEO Content with two stock images 1-2 Links/Post 100% Real Sites Niche Relevant Blogs Google Indexed Turnaround Time - 6 Working Days Approve suitable publishers 24/7 customer support Guaranteed permanent live"
              />
              <meta
                name="twitter:image"
                content="https://getprowriter.com/static/media/gp-writer-complete.27da0b023e5c7ba342e7.png"
              />
            </Head>
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
                            {friend.title} <span className="h3-spa"></span>
                          </h3>

                          <ul className="services_ul justify-content-center p-0">
                            <li className="services_li-1 ms-0"></li>
                            <li className="services_li-2 me-0 d-block"></li>
                          </ul>

                          <li className="ol_li">
                            <span className="fs-3 justify-content-center d-flex align-items-center ">
                              <span className="fs-5">Price: </span>
                              {friend.price}
                            </span>
                          </li>

                          <h4 className="services_box-h4">
                            {friend.shortTitle}
                          </h4>

                          <ol className="p-0">
                            <li className="ol_li d-flex justify-content-center">
                              <span className="ol_li-spa1 me-2">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-check"
                                ></i>
                              </span>
                              <RenderHTML HTML={friend.dec} />
                            </li>
                          </ol>
                          <div className="text-center">
                            {/* <Link href="/AddTocart">Add to Cart</Link> */}
                            <button
                              type="button"
                              className="services-btn1"
                              disabled={this.state.isAddLoading}
                              onClick={() => this.addTocarthandler(friend._id)}
                            >
                              Add to Cart
                            </button>

                            <br />
                            {/* <button
                              type="button"
                              className="services-btn2"
                              data-bs-toggle="modal"
                              data-bs-target={`${"#payment_id" + friend._id}`}
                            >
                              SUBSCRIBE
                            </button> */}

                            {/* <Link href="/viewcart"> */}
                            <a href="/viewCart">
                              <button
                                type="submit"
                                className="services-btn1"
                                disabled={this.state.isAddLoading}
                                onClick={
                                  () => this.buynowhandler(friend._id)
                                  // window.location.reload("/viewcart"))
                                }
                              >
                                Buy Now
                              </button>
                            </a>
                            {/* </Link> */}

                            <div
                              className="modal fade"
                              id={`${"payment_id" + friend._id}`}
                              style={{ background: "#00000052" }}
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content border-0">
                                  <div
                                    className="modal-header border-0"
                                    style={{ background: "rgb(3, 151, 156)" }}
                                  >
                                    <h1
                                      className="modal-title fs-5 text-white"
                                      id="exampleModalLabel"
                                    >
                                      Choose Subscription method ?
                                    </h1>
                                    <button
                                      type="button"
                                      className="bg-transparent border-0"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                    </button>
                                  </div>
                                  <div className="modal-body py-5">
                                    {" "}
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.showRazorpay(friend._id)
                                      }
                                      className="services-btn2 me-2 mb-0"
                                    >
                                      Razorpay
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.PaypalSubscription(friend._id)
                                      }
                                      className="services-btn2 mx-2 mb-0"
                                    >
                                      Paypal
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        this.StripeSubscription(friend._id)
                                      }
                                      className="services-btn2 ms-2 mb-0"
                                    >
                                      Stripe
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br />
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
                  padding: "20px 0px",
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
                  <div className="row showItem align-items-center">
                    <div className="col">
                      <h5 className="fw-normal">
                        Total-Price =<span>&nbsp;</span>{" "}
                        {this.state.cartItems.totalPrice}
                      </h5>
                      <h5 className="fw-normal">
                        Total-Items =<span>&nbsp;</span>{" "}
                        {this.state.cartItems.totalItems}
                      </h5>
                    </div>

                    <div className="col text-end">
                      <Link
                        style={{ color: "white", fontSize: "20px" }}
                        className="viewCart text-decoration-none"
                        href={"/viewCart"}
                      >
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {this.state.getAllProduct?.length > 0 && (
              <div
                style={{
                  width: "100%",
                  padding: "20px 0px",
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
                  <div className="row showItem align-items-center">
                    <div className="col">
                      <h5 className="fw-normal">
                        Total-Price =<span>&nbsp;</span> {this.state.totalPrice}
                      </h5>
                      <h5 className="fw-normal">
                        Total-Items =<span>&nbsp;</span> {this.state.totalItems}
                      </h5>
                    </div>

                    <div className="col text-end">
                      <Link
                        style={{ color: "white", fontSize: "20px" }}
                        className="viewCart text-decoration-none"
                        href={"/viewCart"}
                      >
                        View cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    );
  }
}

export default services;
