import React, { useEffect } from "react";
import{ useLocation, useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import "../styles/style.css";
import Logo from "../pages/images/gp-writer-complete.png";
// import { Navigate } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isLoggedin, setIsLoggedin] = useState(false);

  //   localStorage.setItem('userLoginToken', JSON.stringify());
  //   setIsLoggedin(true);
  //  router.push('/');

  //   const logout = () => {
  //     localStorage.removeItem('message');
  //     setIsLoggedin(false);
  //   };

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [location.pathname]);

  console.log("check ====", isLoggedin);

  // HANDLE LOGOUT EVENT
  const logout = (event) => {
    event.preventDefault();

    console.log(isLoggedin);

    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setIsLoggedin(false);
    router.push("/login");
  };
  // CLEAR DATA FROM STORAGE

  // console.log(arr)

  // if (!isLoggedin) {
  //   // user is not authenticated
  //   return <Navigate to="/login" />;
  // }

  return (
    <div>
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-sm  navbar-dark">
            <Link
              className="navbar-brand logo pe-0 "
              style={{ width: "25%" }}
              to="/"
            >
              <img
                src={Logo}
                alt="gp-writer-complete"
                style={{ width: "100%" }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <i className="fa-solid fa-bars icon_m_br"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/prices">
                    Prices
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/samples">
                    Samples
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/how-it-works">
                    How It Works
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/reviews">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/place-your-order">
                    Place Your Order
                  </Link>
                </li>
                <li className="nav-item dropdown pad">
                  <Link
                    className="nav-link dropdown-toggle set"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    My Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/viewCart">
                        View cart
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/guestpayment">
                        Guest Payment
                      </Link>
                    </li>
                    {/* <li><Link className="dropdown-item"  to="/login">Login</Link></li> */}

                    {isLoggedin === false ? (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/register">
                            Register
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="/login">
                            Log in
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            Dashboard
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            to="/"
                            onClick={logout}
                          >
                            Log out
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
