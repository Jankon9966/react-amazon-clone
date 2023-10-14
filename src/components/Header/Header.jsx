import React from "react";
import "../../css/Header.css";
import logo from "../../assets/amazon_logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <img src={logo} alt="Loading..." />
        <div className="location">Deliver to Bosnia</div>
      </div>
      <div className="header_nav_search">
        <div className="search_container">
          <select className="select">
            <option value="all">All</option>
          </select>
          <input type="search" placeholder="Search Amazon" />
          <button className="search_button">
            <BiSearchAlt2 />
          </button>
        </div>
      </div>
      <nav className="header_right">
        <ul className="nav_items">
          <li>
            <Link className="languages" to="/">
              EN
            </Link>
          </li>
          <li>
            <Link className="sign_in" to="/">
              Hello, sign in
            </Link>
          </li>
          <li>
            <Link className="orders" to="/">
              Returns & Orders
            </Link>
          </li>
          <li>
            <Link className="cart_container" to="/cart">
              <div className="cart">
                <div className="quantity">1</div>
                <AiOutlineShoppingCart />
                <span>Cart</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
