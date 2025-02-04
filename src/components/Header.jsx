import React, { useState } from "react";
import logo2 from "../assets/images/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  // State to manage the side menu
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // Function to handle side menu toggle
  const handleSideMenuToggle = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  // Function to handle anchor clicks
  const handleAnchorClick = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="/" onClick={handleAnchorClick} className="logo">
        <img src={logo2} alt="logo" />
      </a>

      <input
        className="side-menu"
        type="checkbox"
        id="side-menu"
        checked={isSideMenuOpen}
        onChange={handleSideMenuToggle}
      />
      <label className="hamb" htmlFor="side-menu">
        <span className="hamb-line"></span>
      </label>

      <ul className="menu">
        <li>
          <Link to="/" onClick={handleAnchorClick}>
            Home
          </Link>
        </li>
        <li>
          <a href="./#sandbox" onClick={handleAnchorClick}>
            Administration
          </a>
        </li>
        <li>
          <a href="./#politics" onClick={handleAnchorClick}>
            Politics
          </a>
        </li>

        <li>
          <a href="./#football" onClick={handleAnchorClick}>
            Football
          </a>
        </li>
        <li>
          <a href="./#caruselos" onClick={handleAnchorClick}>
            Gallery
          </a>
        </li>
        <li>
          <a href="./#weather" onClick={handleAnchorClick}>
            Weather
          </a>
        </li>
        <li>
          <Link to="/bloguletz" onClick={handleAnchorClick}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/postare" onClick={handleAnchorClick}>
            Post
          </Link>
        </li>
        <li>
          <Link to="/creditari" onClick={handleAnchorClick}>
            Credit
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
