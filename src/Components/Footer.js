import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className="footer_sec">
<nav className="navbar navbar-expand-sm f_menu  navbar-dark">
  <div className="container">
    <span className="navbar copyright" to="/">Copyright © 2022 Get Pro Writer All Right Reserved</span>
    <button className="navbar-toggler fm" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fgg" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item pad">
          <Link className="nav-link set1" to="/Blog">Blog</Link>
        </li>
        <li className="nav-item pad">
          <Link className="nav-link set1" to="/terms">Terms</Link>
        </li>
        <li className="nav-item pad">
          <Link className="nav-link set1" to="/Privacy">Privacy Policy</Link>
        </li> 
		<li className="nav-item pad">
          <Link className="nav-link set1" to="/Faq">FAQ</Link>
        </li>  
		<li className="nav-item pad">
          <Link className="nav-link set1" to="/About">About</Link>
        </li>  
		<li className="nav-item pad">
          <Link className="nav-link set1" to="/Author">Authors</Link>
        </li>   
        <li className="nav-item pad">
          <Link className="nav-link set1" to="/Career">Career</Link>
        </li>  
		<li className="nav-item pad">
          <Link className="nav-link set1" to="/Contact">Contact</Link>
        </li> 
      </ul>
    </div>
  </div>
</nav>
</section>
      
    </div>
  )
}

export default Footer
