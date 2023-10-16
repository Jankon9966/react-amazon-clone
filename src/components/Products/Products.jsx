import React from "react";
import "../../css/Products.css";
import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <div className="products">
      {props.products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            title={product.title}
            image={product.image}
            desc={product.description}
          />
        );
      })}
    </div>
  );
};

export default Products;
