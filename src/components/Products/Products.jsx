import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import { fetchProducts } from "../../utils/api/axios";

const Products = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="products"></div>;
};

export default Products;
