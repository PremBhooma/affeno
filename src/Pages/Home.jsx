import React from "react";
import Navbar from "../Components/Navbar";
import Banners from "../Components/Banners";
import Trend from "../Components/Trend";

import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banners />
      <div className="mbt">
        <div className="title">
          <p>New Trend</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <Trend />
      </div>
    </>
  );
};

export default Home;
