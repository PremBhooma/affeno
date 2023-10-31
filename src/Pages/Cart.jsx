import React from "react";
import Navbar from "../Components/Navbar";

import "./Home.css";
import "./Cart.css";
import BeautyProducts from "../Components/BeautyProducts";
import Footer from "../Components/Footer";

const Cart = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="mbt">
        <div className="mTitle">
          <p>Cart</p>
        </div>
        <div className="cartBlock">
          <div className="cartBoxes">
            <div className="Singlebox">
              <div className="cartInnerLeftBox">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ca6c/4eca/303371090c309fc750a6253cf9a807cf?Expires=1699833600&Signature=gzzInZMWEOjb-cPOWL2pudcP~3CVwm6VvyuwPZZeiKCsJxIJ7LWsJ5JCL9~6Vl0I2s~zsGdw3QAAF6OIzbXmW3PNHT7b2zGseo0wvdPmWqIiT0x7xBhMhULjH7s32dw0if8v8dUWer6hEZB-1p8tn2URZHqOuTvk7l459ZLhZFlRwwF8xaZE6jEZHPX1NVFJyls~AhEB~VOvC~WleM40pB4Nz-jsosL2SoJlkJsQXf6UhRbbMtBO3mvB43xKswshtRZEb-j-vALa~gcvwY16xFge~A2HPuaJEO-2c9iun~4XCJ1~e72FS0wLJhyOfNEDfac4-D4GakpPbHq57PbIPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
                <div>
                  <p className="tandadd">Casual Tshirt for Men</p>
                  <p>₹250</p>
                  <div className="ratingCart">
                    <div>
                      <p>
                        <i class="fa-solid fa-star"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                      </p>
                      <p>
                        <i class="fa-solid fa-star"></i>
                      </p>
                    </div>
                    <p>( 3600 Reviews )</p>
                  </div>
                  <p className="tandadd">ADDED ON 6 JULY</p>
                </div>
              </div>
              <div className="cartInnerRightBox">
                <div>
                  <p>
                    <i class="fa-solid fa-trash-can"></i>
                  </p>
                  <p>DELETE ITEM</p>
                </div>
                <div>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
            <div className="vl"></div>
          </div>
        </div>
        <div className="recItem">
          <p>Recommended Items</p>
          <BeautyProducts />
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

export default Cart;
