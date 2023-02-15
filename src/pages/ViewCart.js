import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader";

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

const ViewCart = () => {
  // const [num, setNum] = useState(0);

  // const [nums, setNums] = useState(0);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [couponApplied, setCouponApplied] = useState({});
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [couponText, setCouponText] = useState("");
  const [currentWalletData, setCurrentWalletData] = useState({});
  const [orderErrorMessage, setOrderErrorMessage] = useState("");
  const [amount, setAmount] = useState({});
  const [paypal, setPaypal] = useState("");
  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(false);
  const [price, setPrice] = useState({});
  const [Loading, setLoading] = useState(false);

  async function showRazorpay(amount) {
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";

    var payload = JSON.stringify({
      amount: amount,
    });

    const data = await fetch(`${process.env.REACT_APP_APIURL}/orderRazorpay`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
      body: payload,
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_KiBn8QyRFCYQnw",
      currency: data.order.currency,
      amount: data.amount.toString(),
      order_id: data.order.id,
      name: "Order",
      callback_url: "/razorpay-is-completed",
      description: "Thank you for nothing. Please give us some money",
      handler: async function (response) {
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          couponAmount: couponAmount,
          couponName: couponName,
        });

        var config = {
          method: "post",
          url: `${process.env.REACT_APP_APIURL}/orderRazorpaySuccess`,
          headers: {
            Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };

        await axios(config)
          .then(function (response) {
            console.log(response.data);
            window.location.reload(true);
            // navigate("/PurchaseSuccess");
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(response);
        // alert("Transaction successful");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    viewCart();
    // getCoupons();
  }, []);
  useEffect(() => {
    sessionStorage.removeItem("wallet");
    sessionStorage.removeItem("pay_id");
    // add entity - POST
    // e.preventDefault();
    // creates entity
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json.data);
        setCurrentWalletData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getServices`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        // setCurrentWalletData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewCart = async () => {
    setLoading(true);
    const tokenID = localStorage.getItem("token");
    if (!tokenID) {
      setLoading(false);
      console.log("logout");
      let getAllProduct = JSON.parse(localStorage.getItem("product"));
      if (getAllProduct === null) {
        getAllProduct = [];
      }
      setCartItems(getAllProduct);
      setLogout(true);
      let totalPrice = 0;
      for (let i = 0; i < getAllProduct.length; i++) {
        totalPrice += getAllProduct[i].price * getAllProduct[i].quantity;
        // totalItems += getAllProduct[i].quantity;
      }
      console.log(totalPrice);
      setPrice(totalPrice);
      console.log(price);
      // for (let i = 0; i < getAllProduct.length; i++) {
      //   console.log(getAllProduct[i].title);
      //   //  arr.push(getAllProduct[i]);
      // }
      // if (Object.keys(getAllProduct).length === 0) {
      //   console.log(cartItems);
      //   // fetchData()
      // }
    } else {
      console.log("login");
      setLogin(true);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${tokenID}`,
      };
      await axios
        .get(`${process.env.REACT_APP_APIURL}/viewCart`, {
          headers: headers,
        })
        .then((response) => {
          console.log("cart items ---------------", response);
          // this.setState({ ...this.state, cartItems: response.data });
          setCartItems(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const addTocarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");

    console.log(cartItems);
    console.log(id);
    console.log(
      cartItems.message?.filter((item, index) => item.productId._id === id)
    );

    let quantity = 1;
    if (cartItems.message.length > 0) {
      quantity = cartItems.message?.filter(
        (item, index) => item.productId._id === id
      )[0]
        ? cartItems.message?.filter(
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
    // setIsAddLoading(true);
    await axios
      .post(`${process.env.REACT_APP_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })

      .then((response) => {
        console.log("qwertyuioiuyfd", response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsAddLoading(false));
  };

  const deleteFromcarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");
    console.log(cartItems);
    console.log(id);
    console.log(
      cartItems.message?.filter((item, index) => item.productId._id === id)
    );

    let quantity = 1;
    if (cartItems.message.length > 0) {
      quantity =
        cartItems.message?.filter((item, index) => item.productId._id === id)[0]
          .quantity > 1
          ? cartItems.message?.filter(
              (item, index) => item.productId._id === id
            )[0].quantity - 1
          : 0;
    } else {
      quantity = 1;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    const data = { quantity: quantity };
    // setIsAddLoading(true);
    await axios
      .post(`${process.env.REACT_APP_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsAddLoading(false));
  };

  const deleteCartItem = async (id) => {
    const tokenID = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    setIsAddLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/deleteCart/${id}`,
        {},
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsAddLoading(false));
  };

  const checkCoupon = async () => {
    await axios
      .post(`${process.env.REACT_APP_APIURL}/getCoupon`, {
        applyCouponName: couponText,
      })
      .then((response) => {
        console.log("coupons ++++++++++++++++++", response.data);
        setCoupons(response.data);
        setCouponApplied(response.data);
        // if (response.message) {
        //   // localStorage.setItem("token", json.token);
        //   // setIsLoggedin(true);
        // }
        console.log("----", coupons.message);
        console.log("-----", couponApplied.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const walletUpdateHandler = async (newTotal) => {
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    const totalAmount = newTotal;
    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";
    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/useWallet/`,
        {
          totalAmount,
          couponAmount,
          couponName,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.data === "order Placed") {
          navigate("/walletpaymentsuccess");
        } else {
          setOrderErrorMessage(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const payWithStrip = (amount) => {
    axios
      .post(`${process.env.REACT_APP_APIURL}/orderStripe`, {
        TotalAmount: amount,
      })
      .then((response) => {
        sessionStorage.setItem("TotalAmount", amount);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setAmount({
          response,
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  console.log(amount);

  const payWithPaypal = (paypal) => {
    axios
      .post(`${process.env.REACT_APP_APIURL}/orderPaypal`, {
        totalamount: paypal,
      })
      .then((response) => {
        sessionStorage.setItem("totalamount", paypal);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        console.log(response.data.url);
        setPaypal({
          response,
        });
      })

      .catch((error) => console.log(error));
  };
  console.log(paypal);
  const Alldeletelogoutcarthandler = (id) => {
    // let getAllProduct = JSON.parse(localStorage.getItem("product"));
    // const Indexobj = getAllProduct.findIndex(
    //   (obj) => obj._id === id);
    // data.splice(getAllProduct, 1);
    // return getAllProduct;
    // console.log(Indexobj);
  };

  // let getAllProduct = JSON.parse(localStorage.getItem("product"));
  // const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
  // //   findOneProduct[0].quantity
  // console.log(Indexobj);
  // getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity - 1;
  // localStorage.setItem("product", JSON.stringify(getAllProduct));
  // let getAllProduct2 = JSON.parse(localStorage.getItem("product"));
  // for (let i = 0; i < getAllProduct2.length; i++) {
  //   const quantity = getAllProduct[i].quantity;
  //   if (quantity === 0) {
  //     const filterProduct = getAllProduct2.filter(
  //       (item) => item.quantity !== 0
  //     );
  //     viewCart();
  //     localStorage.setItem("product", JSON.stringify(filterProduct));
  //     console.log(getAllProduct2);
  //     console.log(filterProduct);
  //   }
  //   viewCart();
  // }

  const deletelogoutcarthandler = (id) => {
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
    //   findOneProduct[0].quantity
    console.log(Indexobj);
    getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity - 1;

    localStorage.setItem("product", JSON.stringify(getAllProduct));

    let getAllProduct2 = JSON.parse(localStorage.getItem("product"));
    for (let i = 0; i < getAllProduct2.length; i++) {
      const quantity = getAllProduct[i].quantity;
      if (quantity === 0) {
        const filterProduct = getAllProduct2.filter(
          (item) => item.quantity !== 0
        );
        viewCart();
        localStorage.setItem("product", JSON.stringify(filterProduct));
        console.log(getAllProduct2);
        console.log(filterProduct);
      }
      viewCart();
    }
  };

  const addTologoutcarthandler = (id) => {
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
    //   findOneProduct[0].quantity
    console.log(Indexobj);
    getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity + 1;

    localStorage.setItem("product", JSON.stringify(getAllProduct));
    viewCart();
  };

  const orderwithoutPayment = async (newTotal) => {
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    const totalAmount = newTotal;
    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";
    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/withoutPaymentOrder/`,
        {
          totalAmount,
          couponAmount,
          couponName,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.data === "order Placed") {
          navigate("/orderwithoutpayment");
        }
        //else {
        //   setOrderErrorMessage(response.data.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <>
            {login && (
              <div className="Cart">
                <div className="container">
                  <div className="out-cart">
                    <div className="inner-cart">
                      <table className="table bg-transparent table-borderless border-0 mb-3">
                        <tbody>
                          <tr className="border-0">
                            <th></th>
                            <th>Product</th>

                            <th className="text-center p-0">Price</th>
                            <th className="text-center p-0">Quantity</th>
                            <th className="text-center p-0">Total</th>
                          </tr>
                        </tbody>
                        <tbody>
                          {cartItems.message?.map((item, index) => (
                            <tr
                              style={{ position: "relative" }}
                              className="second-tr"
                              key={item._id}
                            >
                              {isAddLoading === true && (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black",
                                    opacity: 0.4,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 999,
                                  }}
                                ></div>
                              )}
                              <th>
                                <i
                                  onClick={() =>
                                    deleteCartItem(item.productId._id)
                                  }
                                  aria-hidden="true"
                                  className="fas fa-times"
                                ></i>
                              </th>
                              <th>{item.productId.title}</th>
                              <th className="p-0 text-center">
                                <span>
                                  <span>$</span>
                                  {item.productId.price}
                                </span>
                              </th>
                              <th className="p-0 text-center">
                                <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="minus"
                                    onClick={() => {
                                      deleteFromcarthandler(item.productId._id);
                                    }}
                                  >
                                    -
                                  </span>
                                  <h3> {item.quantity}</h3>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="plus"
                                    onClick={() => {
                                      addTocarthandler(item.productId._id);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </th>
                              <th className="p-0 text-center">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className>$</span>
                                    {item.quantity * item.productId.price}
                                  </bdi>
                                </span>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="coupon-wrap row">
                      <div className="coupon-inner col-md-6">
                        <div className="coupon">
                          <input
                            type="text"
                            value={couponText}
                            onChange={(e) => setCouponText(e.target.value)}
                            className="bg-transparent border-0"
                            placeholder="Coupon Code"
                          />

                          <button
                            type="button"
                            className="btn Coupons btn-primary mb-0"
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            onClick={() => checkCoupon()}
                          >
                            Apply Coupon
                          </button>
                        </div>
                        <div className=" text-danger">
                          {coupons.message === null && "!'Invalid Coupon'"}
                        </div>

                        <Link to="/Services">
                          <i
                            aria-hidden="true"
                            className="fas fa-chevron-left"
                          />
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-collaterals col-md-6">
                        <div className="cart_totals ">
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      {cartItems.totalPrice}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                              {couponApplied?.message?.offAmount ? (
                                <tr className="cart-subtotal">
                                  <th>Coupon Discount</th>
                                  <td>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        {couponApplied.message.couponType ===
                                        "Flat"
                                          ? "Flat "
                                          : `(${couponApplied.message.offAmount}%) `}
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {couponApplied.message.couponType ===
                                        "Flat"
                                          ? couponApplied.message.offAmount
                                          : (cartItems.totalPrice *
                                              couponApplied.message.offAmount) /
                                            100}
                                      </bdi>
                                    </span>
                                  </td>
                                </tr>
                              ) : null}
                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {couponApplied?.message?.offAmount
                                          ? couponApplied.message.couponType ===
                                            "Flat"
                                            ? cartItems.totalPrice -
                                              couponApplied.message.offAmount
                                            : cartItems.totalPrice -
                                              (cartItems.totalPrice *
                                                couponApplied.message
                                                  .offAmount) /
                                                100
                                          : cartItems.totalPrice}
                                      </bdi>
                                    </span>
                                  </strong>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wc-proceed-to-checkout   eael-cart-update-btn">
                            <button
                              className="checkout-button button alt wc-forward"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasScrolling"
                              aria-controls="offcanvasScrolling"
                            >
                              Proceed to Checkout
                            </button>{" "}
                          </div>

                          <div
                            className="offcanvas offcanvas-start"
                            data-bs-scroll="true"
                            data-bs-backdrop="false"
                            tabIndex="-1"
                            id="offcanvasScrolling"
                            aria-labelledby="offcanvasScrollingLabel"
                          >
                            <div className="offcanvas-header">
                              <h5
                                className="offcanvas-title"
                                id="offcanvasScrollingLabel"
                              >
                                Amount Details
                              </h5>
                              <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="offcanvas-body">
                              <table className="shop_table shop_table_responsive">
                                <tbody>
                                  <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          {cartItems.totalPrice}
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>
                                  {couponApplied?.message?.offAmount ? (
                                    <tr className="cart-subtotal">
                                      <th>Coupon Discount</th>
                                      <td>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            {couponApplied.message
                                              .couponType === "Flat"
                                              ? couponApplied.message.offAmount
                                              : (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                100}
                                          </bdi>
                                        </span>
                                      </td>
                                    </tr>
                                  ) : null}
                                  <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total">
                                      <strong>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            {couponApplied?.message?.offAmount
                                              ? couponApplied.message
                                                  .couponType === "Flat"
                                                ? cartItems.totalPrice -
                                                  couponApplied.message
                                                    .offAmount
                                                : cartItems.totalPrice -
                                                  (cartItems.totalPrice *
                                                    couponApplied.message
                                                      .offAmount) /
                                                    100
                                              : cartItems.totalPrice}
                                          </bdi>
                                        </span>
                                      </strong>{" "}
                                    </td>
                                  </tr>
                                  <tr className="cart-subtotal">
                                    <th>Available Amount in Wallet</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          {currentWalletData?.wallet}
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div>
                                <div className="text-danger mb-3 text-center">
                                  <p className="mb-0">{orderErrorMessage}</p>
                                  {orderErrorMessage && (
                                    <span
                                      className="signup "
                                      style={{ cursor: "pointer" }}
                                      data-bs-dismiss="modal"
                                      onClick={() =>
                                        navigate("/transactionhistory")
                                      }
                                    >
                                      Add now!
                                    </span>
                                  )}
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-6 text-start ps-4">
                                    <button
                                      type="button"
                                      className="btn w-100 justify-content-center d-flex align-items-center Pay me-3"
                                      onClick={() =>
                                        walletUpdateHandler(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                    >
                                      Wallet
                                      {/* <i class="fa-solid fa-wallet end-0 ps-2"></i> */}
                                    </button>{" "}
                                  </div>
                                  <div className="col-md-6">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        payWithStrip(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                      className="btn w-100 Pay"
                                    >
                                      Stripe
                                    </button>
                                  </div>
                                </div>

                                <div className="row justify-content-center">
                                  <div className="col-md-6 text-start ps-4 mb-3">
                                    <button
                                      type="button"
                                      className="btn w-100 Pay me-3 "
                                      onClick={() =>
                                        payWithPaypal(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                    >
                                      PayPal
                                    </button>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <button
                                      onClick={() =>
                                        showRazorpay(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                      type="button"
                                      className="btn w-100 Pay"
                                    >
                                      RazorPay
                                    </button>
                                  </div>

                                  <div className="col-md-12 text-center">
                                    <button
                                      type="button"
                                      className="btn  Pay  "
                                      onClick={() =>
                                        orderwithoutPayment(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                    >
                                      Order Without Payment
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>

          <>
            {logout && (
              <div className="Cart">
                <div className="container">
                  <div className="out-cart">
                    <div className="inner-cart">
                      <table className="table bg-transparent table-borderless border-0 mb-3">
                        <tbody>
                          <tr className="border-0">
                            <th></th>
                            <th>Product</th>

                            <th className="text-center p-0">Price</th>
                            <th className="text-center p-0">Quantity</th>
                            <th className="text-center p-0">Total</th>
                          </tr>
                        </tbody>
                        <tbody>
                          {cartItems?.map((item, index) => (
                            <tr
                              style={{ position: "relative" }}
                              className="second-tr"
                              key={item._id}
                            >
                              {isAddLoading === true && (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black",
                                    opacity: 0.4,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 999,
                                  }}
                                ></div>
                              )}
                              <th>
                                <i
                                  onClick={() =>
                                    Alldeletelogoutcarthandler(item._id)
                                  }
                                  aria-hidden="true"
                                  className="fas fa-times"
                                ></i>
                              </th>
                              <th>{item.title}</th>
                              <th className="p-0 text-center">
                                <span>
                                  <bdi>
                                    <span>$</span>
                                    {item.price}
                                  </bdi>
                                </span>
                              </th>
                              <th className="p-0 text-center">
                                <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="minus"
                                    onClick={() => {
                                      deletelogoutcarthandler(item._id);
                                    }}
                                  >
                                    -
                                  </span>
                                  <h3> {item.quantity}</h3>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="plus"
                                    onClick={() => {
                                      addTologoutcarthandler(item._id);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </th>
                              <th className="p-0 text-center">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className>$</span>
                                    {item.quantity * item.price}
                                  </bdi>
                                </span>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="coupon-wrap row">
                      <div className="coupon-inner col-md-6">
                        <Link to="/Services">
                          <i
                            aria-hidden="true"
                            className="fas fa-chevron-left"
                          />
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-collaterals col-md-6">
                        <div className="cart_totals ">
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      {price}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>

                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {price}
                                      </bdi>
                                    </span>
                                  </strong>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wc-proceed-to-checkout   eael-cart-update-btn">
                            <button
                              className="checkout-button button alt wc-forward"
                              onClick={() => navigate("/login")}
                            >
                              Proceed to Checkout
                            </button>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default ViewCart;
