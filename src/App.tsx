import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";

import "./styles/styles.scss";
import React from "react";
import Shop from "./components/shop";
import About from "./components/about";
import Popular from "./components/popular";
import Help from "./components/help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/bookshop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
