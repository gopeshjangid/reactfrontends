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
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const tokenID = localStorage.getItem("token");
    const response = await fetch(
      "https://getprowriter.onrender.com/walletTransactionHistory",
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
      });
      console.log("this.props.User", this.state.credit);
      console.log("this.props.debit", this.state.debit);
    }
  }

  render() {
    // if (User.length < 0) {
    //   return User.length > 0;
    // }
    console.log("oooooooo", this.state.totalCredit);
    return (
      <div className="table-responsive">
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
                <th>Type</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.credit &&
                this.state.credit.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.datetime}</td>
                      <td>{item.transactionId}</td>
                      <td>{item.pay_type}</td>
                      <td>{item.pay_transaction}</td>
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
                <th>TransactionId</th>
                <th>Type</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {this.state.debit &&
                this.state.debit.map((items, index) => {
                  return (
                    <tr key={items._id}>
                      <td>{index + 1}</td>
                      <td>{items.datetime}</td>
                      <td>{items.transactionId}</td>
                      <td>{items.pay_type}</td>
                      <td>{items.pay_transaction}</td>
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
