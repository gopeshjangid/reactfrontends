import React, { Component } from "react";

class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const tokenID = localStorage.getItem("token");
    const response = await fetch("http://localhost:5000/viewOrder", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    });

    if (response.ok) {
      const User = await response.json();
      console.log(User);
      this.setState({ ...this.state, User: User.data });
    }
  }

  render() {
    const { User } = this.state;

    if (User.length < 0) {
      return User.length > 0;
    }
    console.log("this.props.User", this.state.User);

    return (
      <div>
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
          className="table-responsive"
          // style={{ overflow: "auto", height: "200px" }}
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Order Id</th>
                <th>Date</th>
                {/* <th>Title</th> */}
                {/* <th>No. of words</th> */}
                <th>Amount</th>
                <th>Chat</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.User &&
                this.state.User.map((friend, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{friend.transactionId}</td>
                      <td>{friend.datetime}</td>
                      {/* <td>{friend.datetime}</td> */}

                      <td>{friend.couponAmount}</td>
                      <td>Chat</td>
                      <td>{friend.status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ViewOrder;
