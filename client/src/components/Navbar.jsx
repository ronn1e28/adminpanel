import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="topnav">
        <Link to="/"> Home </Link>
        <Link to="/userdetails"> User Details </Link>
        <Link to="usereducation"> User Education </Link>
      </div>
    </div>
  );
}

export default Navbar;
