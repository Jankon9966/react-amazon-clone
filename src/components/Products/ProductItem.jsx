import React from "react";
import "../../css/ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="product_container">
      <div className="product_title">
        <h3>{props.title}</h3>
      </div>
      <div className="product_image">
        <img src={props.image} alt="Loading product..." />
      </div>
      <div className="description">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ProductItem;
