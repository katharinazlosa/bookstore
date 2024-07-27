import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";

import "./styles/styles.scss";
import React from "react";
import Shop from "./components/shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/bookshop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
