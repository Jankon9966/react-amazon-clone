import React from "react";
import "../css/HomePage.css";
import ImageSlider from "../components/Slider/ImageSlider";
import Products from "../components/Products/Products";
import { PRODUCTS_DATA } from "../utils/products/productsData";

const HomePage = () => {

  return (
    <div className="homepage_container">
      <div className="slider">
        <ImageSlider />
      </div>
      <Products products={PRODUCTS_DATA} />
    </div>
  );
};

export default HomePage;
