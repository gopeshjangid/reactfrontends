import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import Logo from "../images/gp-writer-complete.png";
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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [router.pathname]);

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
  //   return <Navigate href="/login" />;
  // }

  return (
    <div>
      <section className="headbar_next">
        <div className="container">
          <nav className="navbar navbar-expand-sm  navbar-dark">
            <Link
              className="navbar-brand logo pe-0 "
              style={{ width: "25%" }}
              href="/"
            >
              <Image
                src={Logo}
                alt="gp-writer-complete"
                height={65}
                width={300}
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
                  <Link className="nav-link set" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" href="/prices">
                    Prices
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" href="/samples">
                    Samples
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" href="/how-it-works">
                    How It Works
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" href="/reviews">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" href="/place-your-order">
                    Place Your Order
                  </Link>
                </li>

                <li className="nav-item dropdown pad">
                  <Link
                    className="nav-link dropdown-toggle set"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    My Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/viewCart">
                        View Cart
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/guestpayment">
                        Guest Payment
                      </Link>
                    </li>
                    {/* <li><Link className="dropdown-item"  href="/login">Login</Link></li> */}

                    {isLoggedin === false ? (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/register">
                            Register
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" href="/login">
                            Log in
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link className="dropdown-item" href="/dashboard">
                            Dashboard
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="dropdown-item"
                            href="/"
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
