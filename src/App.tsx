import { Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import React from "react";

import Home from "./components/pages/home";
import Shop from "./components/pages/shop";
import About from "./components/pages/about";
import Popular from "./components/pages/popular";
import Help from "./components/pages/help";
import ShoppingCart from "./components/pages/shoppingcart";
import Checkout from "./components/pages/checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
