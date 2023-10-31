import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Product.css";
import AllProduct from "../Components/AllProduct";
import WomenProduct from "../Components/WomenProduct";
import MenProduct from "../Components/MenProduct";
import BestsellerProduct from "../Components/BestsellerProduct";
import Footer from "../Components/Footer";

const Product = () => {
  const [showAll, setShowAll] = useState(true);
  const [showWomen, setShowWomen] = useState(false);
  const [showMen, setShowMen] = useState(false);
  const [showBestseller, setShowBestseller] = useState(false);

  const handleAll = () => {
    setShowAll(true);
    setShowWomen(false);
    setShowMen(false);
    setShowBestseller(false);
  };

  const handleWomen = () => {
    setShowAll(false);
    setShowWomen(true);
    setShowMen(false);
    setShowBestseller(false);
  };

  const handleMen = () => {
    setShowAll(false);
    setShowWomen(false);
    setShowMen(true);
    setShowBestseller(false);
  };

  const handleBestseller = () => {
    setShowAll(false);
    setShowWomen(false);
    setShowMen(false);
    setShowBestseller(true);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="productBlock">
        <div className="productTitle">
          <p>Products</p>
        </div>
        <div className="productBtns">
          <p onClick={handleAll} className={showAll ? "active" : ""}>
            All
          </p>
          <p onClick={handleWomen} className={showWomen ? "active" : ""}>
            Women
          </p>
          <p onClick={handleMen} className={showMen ? "active" : ""}>
            Men
          </p>
          <p
            onClick={handleBestseller}
            className={showBestseller ? "active" : ""}
          >
            Bestseller
          </p>
        </div>

        <div className={`collapse ${showAll ? "show" : ""}`}>
          <AllProduct />
        </div>
        <div className={`collapse ${showWomen ? "show" : ""}`}>
          <WomenProduct />
        </div>

        <div className={`collapse ${showMen ? "show" : ""}`}>
          <MenProduct />
        </div>
        <div className={`collapse ${showBestseller ? "show" : ""}`}>
          <BestsellerProduct />
        </div>
      </div>

      {/* Social Media */}
      <div className="mbt moreSpace">
        <div className="socialMedia">
          <input type="text" placeholder="Please enter you email to join us" />
        </div>
      </div>

      {/* Footer */}
      <div className="mb">
        <Footer />
      </div>
    </>
  );
};

export default Product;
