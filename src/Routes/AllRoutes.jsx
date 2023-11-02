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
import HomeAndKitchen from "../Pages/HomeAndKitchen";
import FoodAndGroceries from "../Pages/FoodAndGroceries";
import Collections from "../Pages/Collections";
import Wishlist from "../Pages/Wishlist";
import Offers from "../Pages/Offers";
import Details from "../Pages/Details";
import ItemBuy from "../Pages/ItemBuy";
import Payment from "../Pages/Payment";

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
        <Route path="/homeandkitchen" element={<HomeAndKitchen />} />
        <Route path="/foodandgroceries" element={<FoodAndGroceries />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/details" element={<Details />} />
        <Route path="/itembuy" element={<ItemBuy />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
