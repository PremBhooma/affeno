import React from "react";
import Navbar from "../Components/Navbar";

import "./Details.css";
import Footer from "../Components/Footer";

const Details = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="mbt">
        <div className="detailsBlock">
          <div className="detailsLeft">
            <p>Fill your Address</p>
            <div className="detailsStreet">
              <p className="detailsP">Street 1</p>
              <input type="text" placeholder="Street Lane" />
              <p className="detailsP">Street Lane</p>
              <input type="text" placeholder="XYZ Lane" />
            </div>
            <div className="detailsPlace">
              <div>
                <p className="detailsP">City</p>
                <input type="text" placeholder="Delhi" />
              </div>
              <div>
                <p className="detailsP">Pin Code</p>
                <input type="text" placeholder="110034" />
              </div>
              <div>
                <p className="detailsP">State</p>
                <input type="text" placeholder="New Delhi" />
              </div>
              <div>
                <p className="detailsP">Country</p>
                <input type="text" placeholder="India" />
              </div>
            </div>
            <div className="detailsCheck">
              <div>
                <input type="checkbox" />
                <label>Delivery at your Doorsteps</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Take away from Store</label>
              </div>
            </div>
          </div>
          <div className="detailsRight">
            <div className="detailsTop">
              <div className="detailsPofi">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ca6c/4eca/303371090c309fc750a6253cf9a807cf?Expires=1699833600&Signature=gzzInZMWEOjb-cPOWL2pudcP~3CVwm6VvyuwPZZeiKCsJxIJ7LWsJ5JCL9~6Vl0I2s~zsGdw3QAAF6OIzbXmW3PNHT7b2zGseo0wvdPmWqIiT0x7xBhMhULjH7s32dw0if8v8dUWer6hEZB-1p8tn2URZHqOuTvk7l459ZLhZFlRwwF8xaZE6jEZHPX1NVFJyls~AhEB~VOvC~WleM40pB4Nz-jsosL2SoJlkJsQXf6UhRbbMtBO3mvB43xKswshtRZEb-j-vALa~gcvwY16xFge~A2HPuaJEO-2c9iun~4XCJ1~e72FS0wLJhyOfNEDfac4-D4GakpPbHq57PbIPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
                <div>
                  <p>Casual Tshirt for Men</p>
                  <p>₹250</p>
                  <div className="detailsCount">
                    <p>+</p>
                    <p>1</p>
                    <p>-</p>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                non facilisis felis, in scelerisque lectus. Proin tempor eu
                ipsum id lobortis................SEE MORE
              </p>
              <p>Any Suggestions? We will pass it on.....</p>
              <p>Have a Voucher?</p>
              <div className="detailsCoupon">
                <p>Apply Coupon</p>
                <p>*Apply Coupon to avail Disounts & Offers</p>
              </div>
            </div>
            <div className="detailsBottom">
              <button>PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="mbt">
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

export default Details;
