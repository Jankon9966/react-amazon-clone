import React from "react";
import "../../css/MiniHeader.css";
import { FaBars } from "react-icons/fa";

const SubHeader = () => {
  return (
    <nav className="sub_header">
      <ul className="sub_header_items">
        <li className="sub_header_item">
          <button className="menu">
            <FaBars fontSize={20} style={{ marginRight: "5px" }} />
            All
          </button>
        </li>
        <li className="sub_header_item">Today's Deals</li>
        <li className="sub_header_item">Customer Service</li>
        <li className="sub_header_item">Registry</li>
        <li className="sub_header_item">Gift Cards</li>
        <li className="sub_header_item">Sell</li>
      </ul>
    </nav>
  );
};

export default SubHeader;
