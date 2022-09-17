import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartPage, HomePage } from "../pages";

const Routing = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default Routing;
