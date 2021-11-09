import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import DropdownFruits from "./DropdownFruits";
import DropdownMilkeggs from "./DropdownMilkegg";
import DropdownOurStore from "./DropdownOurStore";
import image3 from "./pages/imagess/image3.PNG";
import desigo from "./pages/imagess/desigo.PNG";
import SearchBar from "./pages/SearchBar";
import BookData from "./../Data.json";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <div className="Nav-Header">Welcome To DesiGo !!</div>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              About Humus
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/Vegetables"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Vegetables <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/Fruits" className="nav-links" onClick={closeMobileMenu}>
              Fruits <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <DropdownFruits />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/EggMilk" className="nav-links" onClick={closeMobileMenu}>
              Milk&eggs <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <DropdownMilkeggs />}
          </li>

          <li className="nav-item">
            <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/PrivacyPolicy"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Privacy Policy
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/ContactUs"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/OurStores"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Our Stores <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <DropdownOurStore />}
          </li>
        </ul>
      </nav>
      <div className="App">
        <SearchBar placeholder="Search for products..." data={BookData} />
      </div>
      <div className="nav-shopping-category">
        <Link class="fab fa-buromobelexperte" />
        <span>
          <Link class="fas fa-shopping-basket" />
        </span>
      </div>

      <div>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={desigo} width="200px" />
        </Link>
      </div>
    </>
  );
}

export default Navbar;
