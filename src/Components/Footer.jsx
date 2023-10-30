import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerBlock">
        <div className="footerBox">
          <p>Follow</p>
          <div className="footerPar">
            <div>
              <p>
                <i class="fa-brands fa-instagram"></i>
              </p>
              <p>
                <i class="fa-brands fa-facebook"></i>
              </p>
            </div>
            <div>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>

        <div className="footerBox">
          <p>Contact</p>
          <div className="lowFoot">
            <p>+91 9898989898</p>
            <p>abc@gmail.com</p>
          </div>
        </div>

        <div className="footerBox">
          <p>About Us</p>
          <div className="lowFoot">
            <p>+91 9898989898</p>
            <p>abc@gmail.com</p>
          </div>
        </div>

        <div className="footerBox">
          <p>Our store</p>
          <div className="lowFoot">
            <p>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
