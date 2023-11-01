import React from "react";
import "../Pages/Home.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="desktopNav">
        <div className="topNav">
          <div>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/6206/a17a/1a9c4d973bf5ef5c037a6607b9a67856?Expires=1699833600&Signature=g5w-xneOh9uQRpYDTlEL126~7tYYfdekQIMpvLdzuWr6n4eEKYEoPT-URk0HCdYGWJk8VZtoK3BPj9tlzJ1z6JZl5LlONGNwoV~16Z8yyCpX7e6sIeARah~9qK1-IOSsoKEWGiHfCSfB3dvADQOMONACsBkL0jUdxHc7OUIdQr904Dl64rrYi4uzEsm3g07mSLApYRIqgO07LKbLEngOl-gx6xzgv5NNVtZPJJnKII6~bl2mpEWg-X5DZXrUeqj3g~E~CeO4lm0NXMzxK5RT3ufwWFz2jsAVv~xpBOTaPgq4wZbKVbt2O~0M~t3U9GMyuhv6y6FswTnXPspDy0VkRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
            </div>
            <div>
              <input type="text" placeholder="Search here" />
              <button>search</button>
            </div>
          </div>
          <div>
            <div>
              <p>
                <i class="fa-solid fa-shop"></i>
              </p>
              <p>Become a Seller</p>
            </div>
            <div>
              <p>
                <i class="fa-solid fa-cart-shopping"></i>
              </p>
              <p>Cart</p>
            </div>
            <div>
              <p>
                <i class="fa-solid fa-bell"></i>
              </p>
              <p>Notifications</p>
            </div>
            <div>
              <img
                className="logo"
                src="https://s3-alpha-sig.figma.com/img/d30c/863e/e2a70f39b517046a94f9b7af19fc3968?Expires=1699833600&Signature=esGUa0ch1kQpTbw4g0A-VEwP3yTaJ4TVERowG4pB~p0RGQS7a8i56IIp67rDa5GLBY7zM-eoReAzMZAkzqBhvPZrXzKkr3F9yfy7gzgpA6WdIl5pb3Qu0EEiiP~hmaU1a1888coVFdh~mAgFM5lsWIVMEGOFGCbvLXCa0JA-MC4wKbY4iz-1jIL2IOIF~vF9QlB2deI7X16hTyChhzQdCjdVLk97dSkqbKYowUOe4ljdln56PdB6UUQ-ixgQRWZeyJZuTYa0pc-7i~8~Fu7jsqlig7RHTJhw7HTr-g2136YEfxlXPTuDsqNcYxFU6WguHHXc1b9oAPPrs4YFX3flSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div>
                <p className="logoName">Johny</p>
                <p className="viewAcc">VIEW ACCOUNT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <div>
            <p>
              <Link to={"/"}>Home</Link>
            </p>
            <p>
              <Link to={"/about"}>About Us</Link>
            </p>
            <p>
              <Link to={"/categories"}>Category</Link>
            </p>
            <p>
              <Link to={"/collections"}>Collections</Link>
            </p>
            <p>
              <Link to={"/offers"}>Offers</Link>
            </p>
            <p>
              <Link to={"/wishlist"}>Wishlist</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
