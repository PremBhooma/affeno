import React, { useState } from "react";
import BecomeSellerNav from "../Components/BecomeSellerNav";

import "./BecomeSeller.css";
import Footer from "../Components/Footer";

const BecomeSeller = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [sectionCount, setSectionCount] = useState(1); // Initialize count to 1

  const handleFirst = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(false);
    setSectionCount(1); // Set the count to 1 for handleFirst
  };

  const handleSecond = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(false);
    setSectionCount(2); // Set the count to 2 for handleSecond
  };

  const handleThird = () => {
    setShowFirst(false);
    setShowSecond(false);
    setShowThird(true);
    setSectionCount(3); // Set the count to 3 for handleThird
  };

  // Use sectionCount to display the count as "01", "02", "03", etc.
  const formattedSectionCount = sectionCount.toString().padStart(2, "0");

  return (
    <>
      <BecomeSellerNav />

      <div className="sellertlt">
        <p>Become a Seller</p>
      </div>

      <div id="poster">
        <div className="sellerpos">
          <p>
            Launch your business & Start selling your items online in just some
            few minutes...JOIN NOW !!
          </p>
          <div className="sellerInp">
            <div>
              <input
                type="text"
                placeholder="Enter your 10 digit phone number here"
              />
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
              >
                <path
                  d="M13.0607 10.9393C13.6464 11.5251 13.6464 12.4749 13.0607 13.0607L3.51472 22.6066C2.92893 23.1924 1.97919 23.1924 1.3934 22.6066C0.807611 22.0208 0.807611 21.0711 1.3934 20.4853L9.87868 12L1.3934 3.51472C0.807611 2.92893 0.807611 1.97919 1.3934 1.3934C1.97919 0.807611 2.92893 0.807611 3.51472 1.3934L13.0607 10.9393ZM11 10.5H12V13.5H11V10.5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mbt">
        <div className="sellersub">
          <p>What Our Seller says :</p>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card">
                  <div class="card-body" id="sellerpad">
                    <div className="sellersays">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/931c/a858/0e7929681e66539c74eb3ce8c36ebd1d?Expires=1699833600&Signature=U7I4T~uxK0~r1EYAIMeldAWBUWufESSlFtI2lSBLCbANOMbQhWBYL-Rl2AZlJhSAI0unVZGydZnigYMsA-gV44ZGU4X86uq1z3spUQ1CdN50RZeYfaGbP7iEIcK8oSZ9ybGV76KPADpWZ2GrnW5RhKCurd082pMNVdSwdTGmoGbZZmJBlR0Ov1knq9KmDijzrhltj-bOnZZJxzI5VKnGo8tPg9Cyhcz-Ava81C~AzmGAKuA8a8ekFVDjhB7D8ab7faR0kT4XyvTfmz0r8322plPjbae~ZjT~H1lGDhay0MyQhOGRkXdYk7JCQ4ZUGGAdZlT4ucUegyRu7YeG9qBclQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                      <div className="sellerev">
                        <p>Easy & Convenient!!</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec lacinia quis mauris nec rutrum. Nulla
                          tempus tellus ut leo scelerisque vestibulum. Nulla a
                          pretium arcu.
                        </p>
                        <p>Saksham Shamra, Flipkart ( CEO )</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card d-none d-md-block">
                  <div class="card-body " id="sellerpad">
                    <div className="sellersays">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/a0a9/803b/68145114487234ae55074072792b36a5?Expires=1699833600&Signature=YfMdAjeZopG~RTEaooNCE7~kzA15rRV7OH~EetqKI7dVEVzLF2OTZxGcbHM1RrJ4UzZfb5y~WrOnEPAnFTPBxhuNumhasZHvy9Sh273antfoiQ2KX-7SmGJhwLSWbQ5lUxBiGONIa8-d3T9snn7ddF7VhlJpTQMK-7ZBhuQADrhTtEMXVmoDLbx7QuDJO~1YEInTsW3w9Dvd0pMRgmmyxwvOSgo4SMU7qGhXusP7ptnEbMGTRzTLAB9ZWeOO7fgIPsNoaMnbL8ps2khZqS3JKXlcYhfLe8qqzVIOnODhFa~CtompdbYKWcy0GFH65DPzgYEHdr0AuHZ-KuUHvvIDxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                      <div className="sellerev">
                        <p>Easy & Convenient!!</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec lacinia quis mauris nec rutrum. Nulla
                          tempus tellus ut leo scelerisque vestibulum. Nulla a
                          pretium arcu.
                        </p>
                        <p>Shruti Kumar, Thrift Store ( Founder )</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card">
                  <div class="card-body" id="sellerpad">
                    <div className="sellersays">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/931c/a858/0e7929681e66539c74eb3ce8c36ebd1d?Expires=1699833600&Signature=U7I4T~uxK0~r1EYAIMeldAWBUWufESSlFtI2lSBLCbANOMbQhWBYL-Rl2AZlJhSAI0unVZGydZnigYMsA-gV44ZGU4X86uq1z3spUQ1CdN50RZeYfaGbP7iEIcK8oSZ9ybGV76KPADpWZ2GrnW5RhKCurd082pMNVdSwdTGmoGbZZmJBlR0Ov1knq9KmDijzrhltj-bOnZZJxzI5VKnGo8tPg9Cyhcz-Ava81C~AzmGAKuA8a8ekFVDjhB7D8ab7faR0kT4XyvTfmz0r8322plPjbae~ZjT~H1lGDhay0MyQhOGRkXdYk7JCQ4ZUGGAdZlT4ucUegyRu7YeG9qBclQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                      <div className="sellerev">
                        <p>Easy & Convenient!!</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec lacinia quis mauris nec rutrum. Nulla
                          tempus tellus ut leo scelerisque vestibulum. Nulla a
                          pretium arcu.
                        </p>
                        <p>Saksham Shamra, Flipkart ( CEO )</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card d-none d-md-block">
                  <div class="card-body " id="sellerpad">
                    <div className="sellersays">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/931c/a858/0e7929681e66539c74eb3ce8c36ebd1d?Expires=1699833600&Signature=U7I4T~uxK0~r1EYAIMeldAWBUWufESSlFtI2lSBLCbANOMbQhWBYL-Rl2AZlJhSAI0unVZGydZnigYMsA-gV44ZGU4X86uq1z3spUQ1CdN50RZeYfaGbP7iEIcK8oSZ9ybGV76KPADpWZ2GrnW5RhKCurd082pMNVdSwdTGmoGbZZmJBlR0Ov1knq9KmDijzrhltj-bOnZZJxzI5VKnGo8tPg9Cyhcz-Ava81C~AzmGAKuA8a8ekFVDjhB7D8ab7faR0kT4XyvTfmz0r8322plPjbae~ZjT~H1lGDhay0MyQhOGRkXdYk7JCQ4ZUGGAdZlT4ucUegyRu7YeG9qBclQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                      />
                      <div className="sellerev">
                        <p>Easy & Convenient!!</p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec lacinia quis mauris nec rutrum. Nulla
                          tempus tellus ut leo scelerisque vestibulum. Nulla a
                          pretium arcu.
                        </p>
                        <p>Saksham Shamra, Flipkart ( CEO )</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slideButtons">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="vl lc"></div>

        <div className="selleroc">
          <div className="sellerleft">
            <p>/ {formattedSectionCount}</p>
            <div
              className="sellerrod"
              style={{
                background:
                  sectionCount === 1
                    ? "#ff5604"
                    : sectionCount === 2
                    ? "#ff5604"
                    : sectionCount === 3
                    ? "#ff5604"
                    : "#ff5604",
                width:
                  sectionCount === 1
                    ? "120px"
                    : sectionCount === 2
                    ? "240px"
                    : sectionCount === 3
                    ? "360px"
                    : "360px",
              }}
            ></div>

            <p
              onClick={handleFirst}
              className={showFirst ? "active css-1" : "css-2"}
            >
              Why Sell Online
            </p>
            <p
              onClick={handleSecond}
              className={showSecond ? "active css-1" : "css-2"}
            >
              Why choose Affeno
            </p>
            <p
              onClick={handleThird}
              className={showThird ? "active css-1" : "css-2"}
            >
              How to become a Seller
            </p>
          </div>

          <div className="sellerright">
            <div className={`collapse ${showFirst ? "show" : ""}`}>
              <p>Benefits of Selling Online</p>

              <div className="sellerfourblocks">
                <div>
                  <p>
                    <i class="fa-solid fa-chart-line"></i>
                  </p>
                  <div className="sellernb">
                    <p>Faster Growth!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Better Engagement</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-credit-card"></i>
                  </p>
                  <div className="sellernb">
                    <p>Hassle Free Payments & Billing</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Better Engagement</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sellerbenimg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                >
                  <circle cx="54" cy="54" r="54" fill="white" />
                  <polygon points="40,30 80,54 40,78" fill="#FF5604" />
                </svg>
              </div>
            </div>

            <div className={`collapse ${showSecond ? "show" : ""}`}>
              <p>Benefits of Selling Online</p>

              <div className="sellerfourblocks">
                <div>
                  <p>
                    <i class="fa-solid fa-chart-line"></i>
                  </p>
                  <div className="sellernb">
                    <p>Faster Growth!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Faster Growth!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-credit-card"></i>
                  </p>
                  <div className="sellernb">
                    <p>Faster Growth!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Faster Growth!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sellerbenimg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                >
                  <circle cx="54" cy="54" r="54" fill="white" />
                  <polygon points="40,30 80,54 40,78" fill="#FF5604" />
                </svg>
              </div>
            </div>

            <div className={`collapse ${showThird ? "show" : ""}`}>
              <p>Benefits of Selling Online</p>

              <div className="sellerfourblocks">
                <div>
                  <p>
                    <i class="fa-solid fa-chart-line"></i>
                  </p>
                  <div className="sellernb">
                    <p>Lorem ipsum</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Lorem ipsum</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-credit-card"></i>
                  </p>
                  <div className="sellernb">
                    <p>Lorem ipsum</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>

                <div>
                  <p>
                    <i class="fa-solid fa-users"></i>
                  </p>
                  <div className="sellernb">
                    <p>Lorem ipsum</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec lacinia quis mauris nec rutrum. Nulla tempus tellus
                      ut leo scelerisque vestibulum. Nulla a pretium arcu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sellerbenimg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="108"
                  viewBox="0 0 108 108"
                  fill="none"
                >
                  <circle cx="54" cy="54" r="54" fill="white" />
                  <polygon points="40,30 80,54 40,78" fill="#FF5604" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="sellersub">
          <p>Fee Structure</p>
        </div>

        <div className="selleroc">
          <div className="sellerleft">
            <p>/ {formattedSectionCount}</p>
            <div
              className="sellerrod"
              style={{
                background:
                  sectionCount === 1
                    ? "#ff5604"
                    : sectionCount === 2
                    ? "#ff5604"
                    : sectionCount === 3
                    ? "#ff5604"
                    : "#ff5604",
                width:
                  sectionCount === 1
                    ? "120px"
                    : sectionCount === 2
                    ? "240px"
                    : sectionCount === 3
                    ? "360px"
                    : "360px",
              }}
            ></div>

            <p
              onClick={handleFirst}
              className={showFirst ? "active css-1" : "css-2"}
            >
              Shipping Fees
            </p>
            <p
              onClick={handleSecond}
              className={showSecond ? "active css-1" : "css-2"}
            >
              Collection Fees
            </p>
            <p
              onClick={handleThird}
              className={showThird ? "active css-1" : "css-2"}
            >
              Fixed Fees
            </p>
          </div>

          <div className="sellerright">
            <div className={`collapse ${showFirst ? "show" : ""}`}>
              <p>Shipping Fees</p>

              <div className="sellershipfee">
                <p>
                  To ensure ease of selling and the best possible customer
                  experience, we mandate delivery to all customers via our
                  logistics partners and deduct the shipping cost from the
                  selling price before making a payment to you. Shipping fee is
                  calculated on actual weight or volumetric weight, whichever is
                  higher. This is to account for items which are lightweight but
                  occupy a lot of shipping space.
                </p>
              </div>

              <table className="table table-striped text-center" id="tbtpad">
                <thead>
                  <tr>
                    <th scope="col">WEIGHT SLAB</th>
                    <th scope="col">LOCAL (INTRACITY)</th>
                    <th scope="col">ZONAL (INTRAZONE)</th>
                    <th scope="col">NATIONAL (INTERZONE)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0.0 Kg - 0.5 Kg</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">0.5 Kg - 1.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.5 Kg - 2.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0 Kg - 3.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">3.0 Kg - 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">&gt; 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`collapse ${showSecond ? "show" : ""}`}>
              <p>Shipping Fees</p>

              <div className="sellershipfee">
                <p>
                  To ensure ease of selling and the best possible customer
                  experience, we mandate delivery to all customers via our
                  logistics partners and deduct the shipping cost from the
                  selling price before making a payment to you. Shipping fee is
                  calculated on actual weight or volumetric weight, whichever is
                  higher. This is to account for items which are lightweight but
                  occupy a lot of shipping space.
                </p>
              </div>

              <table className="table table-striped text-center" id="tbtpad">
                <thead>
                  <tr>
                    <th scope="col">WEIGHT SLAB</th>
                    <th scope="col">LOCAL (INTRACITY)</th>
                    <th scope="col">ZONAL (INTRAZONE)</th>
                    <th scope="col">NATIONAL (INTERZONE)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0.0 Kg - 0.5 Kg</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">0.5 Kg - 1.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.5 Kg - 2.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0 Kg - 3.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">3.0 Kg - 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">&gt; 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`collapse ${showThird ? "show" : ""}`}>
              <p>Shipping Fees</p>

              <div className="sellershipfee">
                <p>
                  To ensure ease of selling and the best possible customer
                  experience, we mandate delivery to all customers via our
                  logistics partners and deduct the shipping cost from the
                  selling price before making a payment to you. Shipping fee is
                  calculated on actual weight or volumetric weight, whichever is
                  higher. This is to account for items which are lightweight but
                  occupy a lot of shipping space.
                </p>
              </div>

              <table className="table table-striped text-center" id="tbtpad">
                <thead>
                  <tr>
                    <th scope="col">WEIGHT SLAB</th>
                    <th scope="col">LOCAL (INTRACITY)</th>
                    <th scope="col">ZONAL (INTRAZONE)</th>
                    <th scope="col">NATIONAL (INTERZONE)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0.0 Kg - 0.5 Kg</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">0.5 Kg - 1.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.0 Kg - 1.5 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">1.5 Kg - 2.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">2.0 Kg - 3.0 Kg (For every 0.5 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">3.0 Kg - 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                  <tr>
                    <th scope="row">&gt; 12.0 Kg (For every 1 kg)</th>
                    <td>₹44</td>
                    <td>₹51</td>
                    <td>₹65</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="fulflimentblock">
          <div className="fullfliment">
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/a42f/c812/cf519c7d3fae81cef3d7e22b46116ace?Expires=1699833600&Signature=FqZuqnHUg-oo-ayv~gTBKVLPmH4ntixGhbx-PZq1WMqzVNyfPDpCgLWFfBCf2DKMmGQ6~qJlgAKQ7Alu9lIYiELDRxl4~fh5d8uNvNiwJjZgeH1GMjQkpELslNo7801IhWsZP3hhZm6WlScTxwfiOOVAre5BLo3ONKhGIYYuIpNK0Za5AroGStNJAZ9mUoyDv139qlKGvEgEIot3p3MhKyzv4xJXT4sY~M88PV3tI07WvUjVs2J9CpPLw6jQqeiO6UQhO6H3u51ZDVsvgRF5Y0XCcmEFajtQdx94DCcd0HLP7LZJOhMfrjlufaXdxA4ojJjpfGPFrP4Ta1Xj2AGTsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="fullfilinnerbox">
                <p>Seller Fulfilment</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia quis mauris nec rutrum. Nulla tempus tellus ut leo
                  scelerisque vestibulum. Nulla a pretium arcu. Donec sit amet
                  ante malesuada, vestibulum velit et, efficitur nisi. Aenean
                  tempus fermentum libero non porta.
                </p>
                <button>LEARN MORE &gt;</button>
              </div>
            </div>

            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/7ba5/84d8/685965b3472c11650f8631f78d5315ad?Expires=1699833600&Signature=q~HE9IE9Xq8Oti3svkFM3xfmv24W9-JsRTyyAqQRPVhCa0DJzErcbLpxAiNUFo50VqwOhZDbokXawOYYyStHzboeJmxy3Kvq3q7T0RMPL3xejjlwXr-1S8aRqCcxT~BBeWR1ArxqWiAJbeDSElGhhe4DhNYzYeyCXTf8I3eyt7HHS6uXZujGIvksuFvqcS0h2U75Wt7goysuHdE0Q1BMzeiPm4b50q-2TVsQprZI5hIvbX-hdGMZIVU-TFBetPi2KbZjApqtjKtjU9tuCHb4DoRQW6UGpGOoCofvacu9XJ6~ooHQXpOmkQHxcYnR08AztkVCmJK8-maTJdN7tx8aYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="fullfilinnerbox">
                <p>Smart Fulfilment</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lacinia quis mauris nec rutrum. Nulla tempus tellus ut leo
                  scelerisque vestibulum. Nulla a pretium arcu. Donec sit amet
                  ante malesuada, vestibulum velit et, efficitur nisi. Aenean
                  tempus fermentum libero non porta.
                </p>
                <button>LEARN MORE &gt;</button>
              </div>
            </div>
          </div>

          <div className="fulflimentcenter">
            <img
              src="https://s3-alpha-sig.figma.com/img/7a31/40da/bfeb72bb115b52f73f492e3858419ec2?Expires=1699833600&Signature=fqLSeXd3s5xze~yiMR2Cxmb2a3Y6P6tLErzWxTdsFyjmgtxAUzmFKn8i8yJZ1FqII-bpVffZh6fltWMb-XTcyoChrrkH~RkYcXDWbEvmUgimeDbQ3SLabZ4awSHIeyLymszqsuCpNrCo~lHkg69wdhn6ourPbzGsXj0GGUL4u0BSpDaew-wkE~sn0VUaUe9jutXMngzqGh1UrouzhS4rDTfn7YI-Q2SG3DnlF4Y0f3iGpRiMn-tI7G9VVUPjXdZVUYG8osByAqdqagdkHI9RnrMLr~yEGmMdVfrIJHW8BFc3WTtaBJZm1mfQyee4oSBppBS3ePIElhNwWJdBARyVNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div className="fullfilinnerbox">
              <p>Smart Fulfilment</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                lacinia quis mauris nec rutrum. Nulla tempus tellus ut leo
                scelerisque vestibulum. Nulla a pretium arcu. Donec sit amet
                ante malesuada, vestibulum velit et, efficitur nisi. Aenean
                tempus fermentum libero non porta.
              </p>
              <button>LEARN MORE &gt;</button>
            </div>
          </div>
        </div>

        <div className="faqblock">
          <div className="faqtitle">
            <p>Frequently Asked Questions</p>
          </div>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header faq-shadow">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis
                  feugiat nibh. Mauris pulvinar quam nec lectus ornare, id
                  auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
                  nisi dolor, posuere mattis viverra vel, dignissim et augue.
                  Suspendisse convallis nec neque et tincidunt. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae;
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header faq-shadow">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis
                  feugiat nibh. Mauris pulvinar quam nec lectus ornare, id
                  auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
                  nisi dolor, posuere mattis viverra vel, dignissim et augue.
                  Suspendisse convallis nec neque et tincidunt. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae;
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header faq-shadow">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis
                  feugiat nibh. Mauris pulvinar quam nec lectus ornare, id
                  auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
                  nisi dolor, posuere mattis viverra vel, dignissim et augue.
                  Suspendisse convallis nec neque et tincidunt. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae;
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header faq-shadow">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis
                  feugiat nibh. Mauris pulvinar quam nec lectus ornare, id
                  auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
                  nisi dolor, posuere mattis viverra vel, dignissim et augue.
                  Suspendisse convallis nec neque et tincidunt. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae;
                </div>
              </div>
            </div>
            <div class="accordion-item ">
              <h2 class="accordion-header faq-shadow">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy Lorem ipsum dolor sit amet, consetetur sadipscing
                  elitr, sed
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tempus eleifend ullamcorper. Sed maximus nunc vitae metus
                  pharetra, quis pharetra felis iaculis. Aenean in nisl eget
                  lorem congue efficitur id ut orci. Mauris volutpat tortor non
                  lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis
                  feugiat nibh. Mauris pulvinar quam nec lectus ornare, id
                  auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin
                  nisi dolor, posuere mattis viverra vel, dignissim et augue.
                  Suspendisse convallis nec neque et tincidunt. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mb">
        <Footer />
      </div>
    </>
  );
};

export default BecomeSeller;
