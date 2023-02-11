import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Loader from "./Loader";
import Chat from "./Chat";
const Dashboard = () => {
  const [viewOrder, setViewOrder] = useState([]);
  const [Cancelled, setCancelled] = useState("");

  const [showChat, setShowChat] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  // console.log("qwertyui",orderId)
  //   console.log(searchText);
  const tokenID = localStorage.getItem("token");
  useEffect(() => {
    setIsLoading(true);
    fetch(`${env.REACT_APP_APIURL}/viewOrder`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setViewOrder(response.data);
        setIsLoading(false);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

  // const data = { sub_id };
  //   const navigate = useNavigate();

  const subscriptionCancel = (id, mainOrderId, pay_method) => {
    const tokenID = localStorage.getItem("token");
    //  const sub_id = sessionStorage.getItem("sub_id");
    // if (!sessionStorage.getItem("TotalAmount")) {
    //   navigate("/");
    // } else {
    // const data = (id);
    console.log("main", mainOrderId);
    console.log("pay_method", pay_method);
    axios
      .post(
        `${env.REACT_APP_APIURL}/CancelStripeSubcription`,
        JSON.stringify({
          sub_id: id,
          mainOrderId: mainOrderId,
          pay_method: pay_method,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenID}`,
          },
        }
      )
      .then((res) => {
        setCancelled(res);
        console.log(res.data);
        console.log(Cancelled);

        if (res.data.message === "your subscription canceled") {
          window.location.reload("/accountSetting");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="reg_sec">
          <div className="container mt-3">
            <div className="row align-items-baseline">
              <div className="col-lg-3">
                <ul
                  className="nav nav-pills flex-column acunt_dsh"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="pill"
                      to="/dashboard"
                    >
                      Dasboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/accountsettingservices">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/accountsettingsubscriptions"
                    >
                      Subscriptions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/viewprofile">
                      Account Setting
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/accountsettingpaymentmethod"
                    >
                      Payment Methods
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/accountsettingbillinginfo">
                      Billing Information
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transactionhistory">
                      Credits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <h5 className="user_tab1 mb-2">
                  Welcome to <span className="user_ach">User</span>
                </h5>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="input-group mb-3">
                      <span className="input-group-text user_ser">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="usrname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <select className="form-select">
                      <option>All Orders</option>
                      <option>Unpaid Orders</option>
                      <option>Cancelled Orders</option>
                      <option>Order in Process</option>
                      <option>Completed Orders</option>
                      <option>Subscriptions</option>
                    </select>
                  </div>
                </div>

                <div
                  className="table-responsive  text-nowrap"
                  style={{ height: "200px" }}
                >
                  <table className="table   table-bordered mb-0">
                    <thead
                      className="text-white"
                      style={{ background: "#029a99" }}
                    >
                      <tr>
                        <th>#</th>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Pay-Method</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Chat</th>
                        <th>Status</th>
                        <th>Sub. Cancel</th>
                        <th>OrderDetails</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewOrder?.map((friend, index) => {
                        return (
                          <>
                            {friend.sub_status === "Active" ? (
                              <tr key={index} className="viewOrderbody">
                                <td>{index + 1}</td>
                                <td>{friend.transactionId}</td>
                                <td>{friend.datetime}</td>
                                <td>{friend.pay_method}</td>
                                <td>{friend.type}</td>
                                <td>{friend.totalAmount}</td>
                                <td
                                  onClick={() => {
                                    setOrderId(friend._id);
                                    setOrderName(
                                      friend.products.map(
                                        (product) => product.p_title + " "
                                      )
                                    );
                                    setShowChat(true);
                                  }}
                                  className="viewOrderChat"
                                  style={{ cursor: "pointer" }}
                                >
                                  Chat
                                </td>
                                <td>{friend.status}</td>

                                <td
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  style={{ cursor: "pointer" }}
                                >
                                  {friend.sub_status}
                                </td>

                                <div
                                  className="modal fade"
                                  id="exampleModal"
                                  tabIndex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content border-0">
                                      <div className="">
                                        <button
                                          type="button"
                                          className="btn-close p-3 outline-0"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body text-center">
                                        <h4>
                                          Are You Sure This Subscription Cancel?
                                        </h4>
                                      </div>

                                      {friend.sub_status === "Active" ? (
                                        <button
                                          type="button"
                                          onClick={() =>
                                            subscriptionCancel(
                                              friend.sub_id,
                                              friend._id,
                                              friend.pay_method
                                            )
                                          }
                                          className=" border-0  text-white py-2 fs-4 rounded-0 chat_s_btn"
                                        >
                                          Cancel
                                        </button>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <td>
                                  <button
                                    className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target={"#viewdetails" + friend._id}
                                    aria-controls="offcanvasScrolling"
                                  >
                                    ViewDetails
                                  </button>
                                  <div
                                    className="offcanvas viewOrder text-wrap offcanvas-end"
                                    data-bs-scroll="true"
                                    data-bs-backdrop="false"
                                    tabIndex="-1"
                                    id={"viewdetails" + friend._id}
                                    aria-labelledby="offcanvasScrollingLabel"
                                  >
                                    <div
                                      className="offcanvas-header text-white"
                                      style={{ background: "rgb(2, 154, 153)" }}
                                    >
                                      <button
                                        type="button"
                                        className="bg-transparent border-0"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                      >
                                        <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                      </button>

                                      <h5
                                        className="offcanvas-title"
                                        id="offcanvasScrollingLabel"
                                      >
                                        OrderDetails
                                      </h5>
                                    </div>
                                    <div className="offcanvas-body">
                                      <table className="table table-borderless mb-0">
                                        <tbody>
                                          <tr>
                                            <td>OrderId</td>
                                            <td>:</td>

                                            <td>{friend.transactionId}</td>
                                          </tr>
                                          <tr>
                                            <td>Date</td>
                                            <td>:</td>{" "}
                                            <td>{friend.datetime}</td>
                                          </tr>
                                          <tr>
                                            <td>Pay-Method</td>
                                            <td>:</td>
                                            <td>{friend.pay_method}</td>
                                          </tr>
                                          <tr>
                                            <td>Type</td>
                                            <td>:</td> <td>{friend.type}</td>
                                          </tr>
                                          {/* <tr>
                                        <td>Product</td>
                                        <td>:</td>
                                        <td>{friend.products._id}</td>
                                      </tr> */}

                                          <tr>
                                            <td>Amount</td>
                                            <td>:</td>{" "}
                                            <td>{friend.totalAmount}</td>
                                          </tr>
                                          <tr>
                                            <td>Sub.Cancel</td>
                                            <td>:</td>
                                            <td>{friend.sub_status}</td>
                                          </tr>
                                          <tr>
                                            <td>Status</td>
                                            <td>:</td> <td>{friend.status}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ) : (
                              <tr key={index} className="viewOrderbody">
                                <td>{index + 1}</td>
                                <td>{friend.transactionId}</td>
                                <td>{friend.datetime}</td>
                                <td>{friend.pay_method}</td>
                                <td>{friend.type}</td>
                                <td>{friend.totalAmount}</td>
                                <td
                                  onClick={() => {
                                    setOrderId(friend._id);
                                    setOrderName(
                                      friend.products.map(
                                        (product) => product.p_title + " "
                                      )
                                    );
                                    setShowChat(true);
                                  }}
                                  className="viewOrderChat"
                                  style={{ cursor: "pointer" }}
                                >
                                  Chat
                                </td>
                                <td>{friend.status}</td>
                                <td>
                                  {" "}
                                  <Link
                                    className="bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                    role="button"
                                    aria-disabled="true"
                                  >
                                    {friend.sub_status}
                                  </Link>
                                </td>
                                <td>
                                  <button
                                    className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target={"#viewdetails" + friend._id}
                                    aria-controls="offcanvasScrolling"
                                  >
                                    ViewDetails
                                  </button>
                                  <div
                                    className="offcanvas viewOrder text-wrap offcanvas-end"
                                    data-bs-scroll="true"
                                    data-bs-backdrop="false"
                                    tabIndex="-1"
                                    id={"viewdetails" + friend._id}
                                    aria-labelledby="offcanvasScrollingLabel"
                                  >
                                    <div
                                      className="offcanvas-header text-white"
                                      style={{ background: "rgb(2, 154, 153)" }}
                                    >
                                      <button
                                        type="button"
                                        className="bg-transparent border-0"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                      >
                                        <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                      </button>
                                      <h5
                                        className="offcanvas-title"
                                        id="offcanvasScrollingLabel"
                                      >
                                        OrderDetails
                                      </h5>
                                    </div>
                                    <div className="offcanvas-body">
                                      <table className="table table-borderless mb-0">
                                        <tbody>
                                          <tr>
                                            <td>OrderId</td>
                                            <td>:</td>
                                            <td>{friend.transactionId}</td>
                                          </tr>
                                          <tr>
                                            <td>Date</td>
                                            <td>:</td>{" "}
                                            <td>{friend.datetime}</td>
                                          </tr>
                                          <tr>
                                            <td>Pay-Method</td>
                                            <td>:</td>
                                            <td>{friend.pay_method}</td>
                                          </tr>
                                          <tr>
                                            <td>Type</td>
                                            <td>:</td> <td>{friend.type}</td>
                                          </tr>
                                          <tr>
                                            <td>Amount</td>
                                            <td>:</td>{" "}
                                            <td>{friend.totalAmount}</td>
                                          </tr>
                                          {/* <tr>
                                    <td>Sub.Cancel</td>

   <td>:</td>                                    <td>{friend.sub_status}</td>
                                  </tr> */}
                                          <tr>
                                            <td>Status</td>
                                            <td>:</td> <td>{friend.status}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>{" "}
                                </td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {showChat && <Chat orderId={orderId} orderName={orderName} />}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
