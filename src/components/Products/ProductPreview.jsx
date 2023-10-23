import React from "react";
import { DB } from "../../utils/productsData";

const ProductPreview = () => {
  return (
    <div className="main_container">
      <h1>Results</h1>
      {DB.map((item) => (
        <div key={item.id} className="container">
          <img src={item.image} alt="Loading..." />
        </div>
      ))}
    </div>
  );
};

export default ProductPreview;
