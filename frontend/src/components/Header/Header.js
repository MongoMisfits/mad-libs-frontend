import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from 'react-icons/gi'

function Header() {

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div className="header">
      <GiHamburgerMenu className='hamburger'onClick={handleClick}/>
      <div className={`headerLinks ${active ? 'active' : ''}`}>
        <Link to="/">
          <h2>Madlibs</h2>
        </Link>
        <Link to="/create-template">
          <h2>Create Your Own Template</h2>
        </Link>
        <Link to="/user-templates">
          <h2>User Templates</h2>
        </Link>
        <Link to="/thank-you-page">
          <h2>Thank You</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
