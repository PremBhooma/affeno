import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Cart from "../Pages/Cart";
import About from "../Pages/About";
import Categories from "../Pages/Categories";
import MenFashion from "../Pages/MenFashion";
import WomenFashion from "../Pages/WomenFashion";
import KidsFashion from "../Pages/KidsFashion";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/menfashion" element={<MenFashion />} />
        <Route path="/womenfashion" element={<WomenFashion />} />
        <Route path="/kidsfashion" element={<KidsFashion />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
