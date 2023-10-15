import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import SubHeader from "./components/Header/SubHeader";

const App = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
