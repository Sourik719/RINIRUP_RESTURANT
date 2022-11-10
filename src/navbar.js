import React from "react";
import logo  from "./Images/Logo.png"
import { NavLink as Link } from "react-router-dom";

const NavLink = Link
function Navbar(){
    return(
        <div>
        <nav className="navbar navbar-dark navbar sticky-top navbar-expand-lg bg-dark border-bottom border-muted">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" width="30" height="30" className="bd-placeholder-img rounded-circle"/>
        RINIRUP Resturant</a>
      <div className="vr"></div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/" active>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="./About Us" active>About Us</NavLink>
          </li>
          <li className="dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/" active role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Book a Table
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="./Book_Table" active>Book Table</NavLink></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><NavLink className="dropdown-item" to="./Query" active>Have a query?</NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="./Order" active>Order Online</NavLink>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
    )
}

export default Navbar