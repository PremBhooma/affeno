import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./Payment.css";

const Payment = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="mbt">
        <div className="paydetails">
          <div className="payimg">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca6c/4eca/303371090c309fc750a6253cf9a807cf?Expires=1699833600&Signature=gzzInZMWEOjb-cPOWL2pudcP~3CVwm6VvyuwPZZeiKCsJxIJ7LWsJ5JCL9~6Vl0I2s~zsGdw3QAAF6OIzbXmW3PNHT7b2zGseo0wvdPmWqIiT0x7xBhMhULjH7s32dw0if8v8dUWer6hEZB-1p8tn2URZHqOuTvk7l459ZLhZFlRwwF8xaZE6jEZHPX1NVFJyls~AhEB~VOvC~WleM40pB4Nz-jsosL2SoJlkJsQXf6UhRbbMtBO3mvB43xKswshtRZEb-j-vALa~gcvwY16xFge~A2HPuaJEO-2c9iun~4XCJ1~e72FS0wLJhyOfNEDfac4-D4GakpPbHq57PbIPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </div>
          <div className="payprd">
            <p>Casual Tshirt for Men (S)</p>
            <div className="payp">
              <p>₹250</p>
              <div className="detailsCount" id="ccpay">
                <p>+</p>
                <p>1</p>
                <p>-</p>
              </div>
            </div>
            <div>
              <p>Coupon Applied :</p>
              <p>AVAIL50ASAP</p>
            </div>
            <p>
              Checking out with <span>1 Item</span>
            </p>
          </div>
          <div className="payshipadd">
            <p>SHIPPING ADDRESS</p>
            <p>Street Lane, XYZ Lane, New Delhi 110034, India</p>
            <p>EXPECTED ARRIVAL TIME</p>
            <p>
              <span>5 JULY - 10 JULY </span>( NORMAL DELIVERY)
            </p>
          </div>
          <div className="payedit">
            <p>
              <i class="fa-regular fa-pen-to-square"></i>
            </p>
            <p>EDIT</p>
          </div>
        </div>

        <div className="tltrev">
          <p>Select your Payment Gateway</p>
        </div>

        <div className="paycards">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/4440/b1b6/09f174c9e1476ddd6f2ac18d05676b58?Expires=1699833600&Signature=IDgoH0-yPve3U9FVW7SCtbf88irr5yJ7YuxHSv-X5l1i69s5-xYNvprJhFfJGK~YSldv-uzSOvEnqxnYpqP-jV87WtazYiZv7Qz7Lef-h4virXlNxfBleG-gU98~1OY28ebhNkY9VkJXvmKoB-gNP5SrBBq9QiFXVMdrp4M4465jE-w7h7vm6A7CRekbCKJrwbtRokptuN2Zf1suO6t9UQ5uBxMKLxDJ5V3MghW3sTpmG5ejO8pXd9Z0OAY6NfghaQUzf8d-9RhYYKfA5o~13cXnhLJsTv4SJUMS2Tr6ZKH6bc~DDfOqz5EvIdvAOrrFWHHb58oFDozscGW4ZaZuhA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p>DEBIT / CREDIT CARD</p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/d022/e487/c7be7c36d223e37a1236838756a18ccf?Expires=1699833600&Signature=jPucau5oPce4MSHw7ItVBLwf6GPDlBZwwv8KI0c6Bi6RY2uX3SOTWlDYdKMxZT7x-WXf257Kdlq3AsKZgXcWPasynkJ~2G5gCz8DKXI87Z2cFrcPqC9sppM7usjyeb81GGxKdbEtoT~-zLZBC~~2-sk7FBcs1qpSekBDAnWlHIBLTmjhtIywSXDFS0PIsDORBRk2ffNUASMIcdzYUycbymjuJDaZ1NRINbtXNYjf4eF9k62kVRrpoBwTLpaVZ6eVJRl~XLIoCDuVF3cg2e~bcQf4ionWAYywWnFUIE8n8PTl8pwteLijsSYxTv4OtYT873aPQ-xjpO-9qk2BUjcF5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p>DMASTERCARD</p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/9827/e374/f5de2499b69c362adeee9377dfa47935?Expires=1699833600&Signature=NVCgajNX1K-1Cry0rgnNWnXGtGvfDAZzUbgHAaSn7Gsf8p3ELJOkL5iy6PjzDKdS53aDQYF3ZE0WMjrSddsMo7GLj1kM3EbaeF1Hb13pQu9Bgdc1xVbLvLW4yf4F-QcyocxYXlrfhpFYnufuVbO60wos2Bm4cInULvAQDF~z60gQu9iV2cX938Z~VuIoe1nwTZQTLuNO47B9QD7TbeJN-PCkmPuwi3rdQXFAi4Cz26c-AWGjwpHrroaD~YEoAfKm9clFt9gX-ZaJJLVg8YK3-P~AwUlaF8RN1SXcqnjGUvzWztpYIahLlos7upuox3fy4dC3o6Fh2MZe2SROJ0O8hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p>APPLE PAY</p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/3690/9332/cfc4589e941c33346e8f663b76883b3c?Expires=1699833600&Signature=K4NzFV-b2yu9j2UM-BTh4HnR4BKFJPIWHGof2LdMH7TWEpQZNKqAKaGB-DVniYm6qo4oe13gJLxZ7QUYr1SdQ0sIt9n2iZK10JCQ4v3Ur2-Pl0fqYsy~4pXOd-lvvuLNW0xSUW8xvKxbHzlf4qdPs8C6DYqWgYB7mi~YaTPa55NiOTajS7BsNMvZItKyWq63w8jYGLdc4cMLY8bAdg9hFwenaDsC60BSqJI78otNX8NkOL1G-7o~P7IuXfS2mHJ7a~jN3G3-NF0CvB8PUuPQ0fzOLopLGItLb8dWkJpI4bIWdFpa29TIMxx-FbKVzZF5obnHZ0tyr5gC4b2zDr6ifw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <p>VISA CARD</p>
          </div>
        </div>

        <div className="vl mt-5"></div>

        <div className="payrecused">
          <p>RECENTLY USED</p>
          <div className="payrecdetails">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/34c9/58b9/6dbf182a20afa110b52bba233dc688d8?Expires=1699833600&Signature=k2ISMg1608Gks24RCkAvshzgurrDs-hyeXCZlqlVZ5fQzwDckjIJdgwvmoHRI74AcZ~WB55UMAhr3bkhC8KWWKlBwPHO20C97-YYxXK9KKm2kNsiB3YKEm9IxRwgYylEEzdiy8ak8woaryus2y2rRQgHCTiVCFLtHqT5HEkb1k0y8DabNK0bssrCw7iui5MviDsyZG8cJoyxAMuA2GTN7mExBCDgv1IJTfOL2ODsNkMDWPJeNDaC3hRiV-mMeajgI8T6AEv9m0XWgg3VMpAgKyrGU5yQSMFC8zmdR6O0X7fkFolV3F3TPaSI8y-eTIZZ5gv7BweDVRPBBD~dXRxMzA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <p>SBI DEBIT CARD</p>
            </div>
            <div>
              <p>JAMESON DUNN</p>
              <p>XXXX - XXXX - XXXX - XX34</p>
            </div>
            <div>
              <p>Autofill your Details? </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
              >
                <circle
                  cx="28.2823"
                  cy="28.2823"
                  r="27.7823"
                  fill="white"
                  stroke="black"
                />
                <circle cx="28.2818" cy="28.2822" r="15.604" fill="#FF5604" />
              </svg>
            </div>
          </div>
        </div>

        <div className="payfilldet">
          <p>Fill your Card Details</p>
          <div className="payinput">
            <input type="text" placeholder="NAME ON THE CARD" />
            <input type="text" placeholder="CARD NUMBER ( 16 DIGITS )" />
            <div>
              <input type="text" placeholder="VALID THROUGH (MM/ YYYY )" />
              <input type="text" placeholder="CVV ( *** )" />
            </div>
          </div>
          <div>
            <button>MAKE PAYMENT</button>
            <button>CANCEL</button>
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

export default Payment;
