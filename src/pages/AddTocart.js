import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AddTocart = () => {
  const [num, setNum] = useState(0);

  const [nums, setNums] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [isAddLoading, setIsAddLoading] = useState(false);

  useEffect(() => {
    viewCart();
  }, []);

  const viewCart = async () => {
    const tokenID = localStorage.getItem("token");
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
        // this.setState({ ...this.state, cartItems: response.data });
        setCartItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    setIsAddLoading(true);
    await axios
      .post(`http://localhost:5000/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsAddLoading(false));
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
    setIsAddLoading(true);
    await axios
      .post(`http://localhost:5000/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsAddLoading(false));
  };

  const deleteCartItem = async (id) => {
    const tokenID = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    setIsAddLoading(true);
    await axios
      .post(`http://localhost:5000/deleteCart/${id}`, {},{
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsAddLoading(false));
  };

  return (
    <div className="Cart">
      <div className="container">
        <div className="out-cart">
          <div className="inner-cart">
            <table className="table bg-transparent table-borderless border-0 mb-3">
              <tbody>
                <tr className="border-0">
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col" className="text-center p-0">
                    Price
                  </th>
                  <th scope="col" className="text-center p-0">
                    Quantity
                  </th>
                  <th scope="col" className="text-center p-0">
                    Total
                  </th>
                </tr>
              </tbody>
              <tbody>
                {cartItems.message?.map((item, index) => (
                  <tr style={{ position: "relative" }} className="second-tr">
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
                    <th scope="col">
                      <i
                        onClick={() => deleteCartItem(item.productId._id)}
                        aria-hidden="true"
                        class="fas fa-times"
                      ></i>
                    </th>
                    <th scope="col">{item.productId.title}</th>
                    <th scope="col" className="p-0 text-center">
                      <span className>
                        <bdi>
                          <span className>₹</span>
                          {item.productId.price}
                        </bdi>
                      </span>
                    </th>
                    <th scope="col" className="p-0 text-center">
                      <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                        <span
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
                          className
                          data-action-type="plus"
                          onClick={() => {
                            addTocarthandler(item.productId._id);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="p-0 text-center">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className>₹</span>
                          {item.quantity * item.productId.price}
                        </bdi>
                      </span>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="coupon-wrap">
            <div className="coupon-inner">
              <div className="coupon">
                <input
                  type="text"
                  className="bg-transparent border-0"
                  placeholder="Coupon Code"
                />
                <button>Apply Coupon</button>
              </div>
              <a href="#">
                <i aria-hidden="true" className="fas fa-chevron-left" />
                Continue Shopping
              </a>
            </div>
            <div className="cart-collaterals">
              <div className="eael-cart-update-btn">
                <button>Update Cart</button>
              </div>
              <div className="cart_totals ">
                <table className="shop_table shop_table_responsive">
                  <tbody>
                    <tr className="cart-subtotal">
                      <th scope="col">Subtotal</th>
                      <td data-title="Subtotal">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">
                              ₹
                            </span>
                            {cartItems.totalPrice}
                          </bdi>
                        </span>
                      </td>
                    </tr>
                    <tr className="order-total">
                      <th scope="col">Total</th>
                      <td data-title="Total">
                        <strong>
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                ₹
                              </span>
                              {cartItems.totalPrice}
                            </bdi>
                          </span>
                        </strong>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="wc-proceed-to-checkout">
                  <a
                    href="https://getprowriter.com/checkout/"
                    className="checkout-button button alt wc-forward"
                  >
                    <button>Proceed to Checkout </button>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTocart;
