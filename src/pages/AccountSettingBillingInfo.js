import React from "react";
import { Link } from "react-router-dom";

const AccountSettingBillingInfo = () => {
  return (
    <section className="reg_sec">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="text-center">
              <img
                src="writer/img/logo/logo-img.png"
                alt="logo-img"
                className="as-img"
              />
            </h2>
            <br />

            <ul className="nav nav-pills flex-column acunt_dsh" role="tablist">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dasboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingservices">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingsubscriptions">
                  Subscriptions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewprofile">
                  Account Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/accountsettingpaymentmethod">
                  Payment Methods
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-bs-toggle="pill"
                  to="/accountsettingbillinginfo"
                >
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

            <div id="menu5" className="container tab-pane">
              <div className="table-responsive viewOrdertable ">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Amount</th>
                      <th>Processor</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="viewOrderbody">
                    <tr>
                      <td>1</td>
                      <td>Package</td>
                      <td>5000</td>
                      <td>hIRE 1</td>
                      <td>Edit | Delete</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Package</td>
                      <td>5000</td>
                      <td>hIRE 1</td>
                      <td>Edit | Delete</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Package</td>
                      <td>5000</td>
                      <td>hIRE 1</td>
                      <td>Edit | Delete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettingBillingInfo;
