import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);


  //   localStorage.setItem('userLoginToken', JSON.stringify());
  //   setIsLoggedin(true);
  //  navigate('/');


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

  }, [])

  console.log("check ====", isLoggedin)





  // HANDLE LOGOUT EVENT
  const logout = event => {
    event.preventDefault();

    console.log(isLoggedin)

    localStorage.removeItem("token");
    setIsLoggedin(false);
    navigate('/Login')

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
        <nav className="navbar navbar-expand-sm  navbar-dark">
          <div className="container">
            <Link className="navbar-brand logo pe-0" to="/"><img src="writer/img/logo/logo-img.png" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <i className="fa-solid fa-bars icon_m_br"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/join">Join</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/chat">Chat</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/Services">Services</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/Prices">Prices</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/sample">Samples</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/HowItwork">How It Works</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/Review">Reviews</Link>
                </li>
                <li className="nav-item pad">
                  <Link className="nav-link set" to="/Order">Place Your Order</Link>
                </li>
                <li className="nav-item dropdown pad">
                  <Link className="nav-link dropdown-toggle set" to="/" role="button" data-bs-toggle="dropdown">My Account</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/cart">ViewCart</Link></li>
                    {/* <li><Link className="dropdown-item"  to="/Login">Login</Link></li> */}

                    {isLoggedin == false ? (
                      <>
                        <li><Link className="dropdown-item" to="/register">Register</Link></li>



                        <li><Link className="dropdown-item" to="/Login">Login</Link></li>
                      </>
                    ) : (
                      <>

                        <li><Link
                        className="dropdown-item"
                        to="/AccountSetting"
                        
                      >
                        AccountSetting
                      </Link></li>

                       <li><Link
                        className="dropdown-item"
                        to="/"
                        onClick={logout}
                      >
                        Logout
                      </Link></li>
                      </>


                    )
                    }
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  )
}


export default Header
