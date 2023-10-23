import React from "react";
import "../css/HomePage.css";
import ImageSlider from "../components/Slider/ImageSlider";
import Products from "../components/Products/Products";

const HomePage = () => {
  return (
    <div className="homepage_container">
      <div className="slider">
        <ImageSlider />
      </div>
      <Products />
    </div>
  );
};

export default HomePage;
