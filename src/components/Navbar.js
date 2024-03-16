import React from "react";
import { Link, Outlet, BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navbar">
          <div className="nav-item-container">
            <Link to="/" className="nav-item">
              Home{" "}
            </Link>
          </div>
          <div className="nav-item-container">
            <Link to="/cocktails" className="nav-item">
              Cocktails
            </Link>
          </div>
          <div className="nav-item-container">
            <Link to="/FastFood" className="nav-item">
              Fast Food Chains
            </Link>
          </div>
          <div className="nav-item-container">
            <Link to="/about" className="nav-item">
              About
            </Link>
          </div>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}

export default Navbar;
