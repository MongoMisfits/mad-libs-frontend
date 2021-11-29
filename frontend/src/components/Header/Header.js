import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h2>MAD LIBS</h2>
      </Link>
      <Link to="/create-template">
        <h2>Create Your Own Template</h2>
      </Link>
      <Link to="/thank-you-page">
        <h2>Thank You</h2>
      </Link>
    </div>
  );
}

export default Header;
