import React from "react";
import { Link } from "react-router-dom";

const AccountSettingPaymentMethod = () => {
  return (
    <section className="reg_sec">
      <div className="container mt-3">
        <div className="row align-items-baseline">
          <div className="col-lg-3">
            <ul className="nav nav-pills flex-column acunt_dsh" role="tablist">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/accountsettingservices">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingsubscriptions">
                  Subscriptions
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/viewprofile">
                  Account Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-bs-toggle="pill"
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

            <div id="menu4" className="container tab-pane d-block">
              <br />
              <h2 className="as-second-row_h2">Payment Information:</h2>
              <div className="row">
                <div className="col-sm-5">
                  <p>Acccount Number: 26478786997</p>
                  <p>Account Holder: Shubham Singhal</p>
                  <p>IFSC Code: ICICI000457</p>
                </div>
                <div className="col-sm-7">
                  <div className="d-grid">
                    <button
                      type="button"
                      className="btn btn-success btn-block user_addm"
                    >
                      Add Payment Method
                    </button>
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-success btn-block">
                      Add Money
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettingPaymentMethod;
