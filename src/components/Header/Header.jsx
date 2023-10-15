import React from "react";
import "../../css/Header.css";
import logo from "../../assets/amazon_logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartButton from "../Cart/CartButton";

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <Link className="logo" to="/">
          <img src={logo} alt="Loading..." />
        </Link>
        <div className="location">
          <p className="upper">Deliver to</p>
          <p className="lower">Bosnia and Herzeg...</p>
        </div>
      </div>
      <div className="header_nav_search">
        <div className="search_container">
          <select className="select">
            <option value="all">All</option>
          </select>
          <input type="search" placeholder="Search Amazon" />
          <button className="search_button">
            <BiSearchAlt2 fontSize={26} />
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
          <li className="sign">
            <Link style={{fontSize: "13px"}} className="sign_in" to="/">
              Hello, sign in <span style={{fontWeight: "bold", fontSize: "14px"}}>Accounts & Lists</span>
            </Link>
          </li>
          <li className="orders">
            <Link style={{fontSize: "13px"}} to="/">
              Returns <span style={{fontWeight: "bold", fontSize: "14px", display: "block"}}>& Orders</span> 
            </Link>
          </li>
          <li>
           <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
