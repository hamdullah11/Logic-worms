import React from "react";
import logo from "./Group 721.png";
import "../App.css"

export default function Navbar() {
   const style={
        height:"120px",
    }
    const btnColor={
        backgroundColor:"#FF8700",
        width:"120px",
        height:"40px",
        color:"white"
    }
    
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} style={style}>
        <div className="container">
          <a className="navbar-brand" href="#">
          <img src={logo} alt="" />

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-5">
                <a className="nav-link active activeColor" aria-current="page" href="#" style={{color:"#FF8700"}}>
                  Home
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">
                About Us
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">
                Service
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">
                Career
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">
                Blog
                </a>
              </li>
              <li className="nav-item px-5">
              <button className="btn" type="button" style={btnColor}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}
