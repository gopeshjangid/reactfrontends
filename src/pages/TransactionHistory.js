import React, { Component } from "react";
// import { useState, useEffect } from "react";

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: [],
      debit: [],
      totalCredit: "",
      totalDebit: "",

      isLoading: false,
      isError: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const tokenID = localStorage.getItem("token");
    const response = await fetch(
      "http://localhost:5000/walletTransactionHistory",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      }
    );
    if (response.ok) {
      const credit = await response.json();
      console.log(credit);

      this.setState({
        ...this.state,
        credit: credit.credit,
        debit: credit.debit,
        totalCredit: credit.totalCredit,
        totalDebit: credit.totalDebit,

        isLoading: false,
      });
      console.log("this.props.User", this.state.credit);
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  render() {
    const { isLoading, isError } = this.state;

    if (isLoading) {
      return (
        <div style={{}}>
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </div>
      );
    }

    if (isError) {
      return (
        <div>
          {" "}
          <i class="fa-solid fa-arrow-rotate-right"></i>
        </div>
      );
    }

    // if (User.length < 0) {
    //   return User.length > 0;
    // }
    console.log("oooooooo", this.state.totalCredit);
    return (
      <div>
        <table
          className="table text-white credt-total mb-3"
          data-bs-spy="scroll"
        >
          <thead>
            <tr>
              <th>Credit History</th>
              <th className="w-50 text-end">
                Total: Rs. <span>{this.state.totalCredit}</span>
              </th>
            </tr>
          </thead>
        </table>
        <div style={{ overflow: "auto", height: "200px", marginBottom: "6%" }}>
          <table className="table mb-0 table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Transactions ID</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.credit &&
                this.state.credit.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.datetime}</td>
                      <td>{item.transactionId}</td>
                      <td>{item.pay_type}</td>
                      <td style={{ color: "green", fontWeight: "700" }}>
                        +{item.wallet}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <table className="table text-white credt-total mb-3">
          <thead>
            <tr>
              <th>Debit History</th>
              <th className="w-50 text-end">
                Total: Rs. <span>{this.state.totalDebit}</span>
              </th>
            </tr>
          </thead>
        </table>

        <div style={{ overflow: "auto", height: "200px", marginBottom: "6%" }}>
          <table className="table mb-0 table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>

                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.debit &&
                this.state.debit.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{items.datetime}</td>
                      {/* <td>{items.transactionId}</td> */}
                      <td>{items.pay_type}</td>
                      <td style={{ color: "red", fontWeight: "700" }}>
                        -{items.wallet}
                      </td>
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

export default TransactionHistory;
