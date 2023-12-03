import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div>
        <nav>
          <div className="logo"><FontAwesomeIcon icon={faCaretUp} /> Milton</div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn">
            <i><FontAwesomeIcon icon={faBars} style={ {color: 'black'} } /></i>
          </label>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>

            <div className="buttons">
              <button
                className="login-btn"
                style={{ backgroundColor: "#f1f2f4" }}
              >
                Login In
              </button>
              <button
                className="get-started-btn"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Get Started
              </button>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
