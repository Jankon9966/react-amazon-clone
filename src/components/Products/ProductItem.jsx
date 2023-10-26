import React from "react";
import "../../css/ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <div className="product_container">
      <div className="product_title">
        <h3>{props.data.title}</h3>
      </div>
      <div className="product_image">
        <img src={props.data.image} alt="Loading.." />
      </div>
      <Link className="btn" to="/products/:id">
        <button>See More</button>
      </Link>
    </div>
  );
};

export default ProductItem;
