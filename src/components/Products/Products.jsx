import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import { fetchProducts } from "../../utils/api/api";
import ProductItem from "./ProductItem";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
