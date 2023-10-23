import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import SubHeader from "./components/Header/SubHeader";
import Sign from "./components/Header/Sign";
import ProductPreview from "./components/Products/ProductPreview";
import SingleProduct from "./components/Products/SingleProduct";


const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign_in" element={<Sign />} />
        <Route path="products" element={<ProductPreview />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default App;
