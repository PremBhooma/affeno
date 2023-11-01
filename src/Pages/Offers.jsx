import React from "react";
import Navbar from "../Components/Navbar";

import "./Offers.css";
import Footer from "../Components/Footer";

const Offers = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* slide show */}

      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner offpadd">
          <div className="carousel-item active">
            <div className="cards-wrapper">
              <div className="card offclr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">All Deals</h5>
                </div>
              </div>

              {/* Extraa cirlse */}

              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Deal of the Day</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/c1f9/4177/b47888bb5f7ea463d6f51c130d6ab47b?Expires=1699833600&Signature=XeS-EDyq9N4S4-Ntn-NREsQkKQa2KHSPz2gFoMTVG2-PC0J-3hFJKTXO9ihZvH88OiadtnCFlHOOxvYk-oWXWJIPfPUm5o4jOUG1g0xplX935O0Q8RyKsAUdEeZ1zhbIy7zsws09uNOK--dcnuNR31-vQgW3xmy77fXT4pb3tS7269tT2lJMWBJz7annFrwtx1YOjhKcfL2mmKqpDBvpoCNJQkfKHLkLZvzOuJLAtYMKCtLWg8oWzlxeNHqHHk74nvDHvl~VlQy3RqFXUmg6K1Z9FINkEuxjqPrOyOZRBdUXnGMbj9R72Qce8BoJMntvzgSd7rdwXJ3w4amGjemMfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Lighting Deals</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/8186/d0f2/c7efd9c5ef5f6be6e775f00d38226984?Expires=1699833600&Signature=B~C~ldx8w8D-8FIUP-OgSBJgjeslycRZkoKsv0YWfvRHYn3CFxEIPFKo7Kjr4iqZg7tJsYNuMQeHmgTK3Kcfd7cSdQkOJra~RNUFGOHG-cuXTWDgmaaHOGFWhOl7Ou74Lsxt-nJR-076wHguEEWuuc3uC-hgSLConHVYKoHX~Msw0YreC05faq3dfPoDS9ZjJfSamw5qztqy1~nSRi0Wol80gIqXe3ByVF0WyAqn4fp8m-NJM1B4QzbKt2lLb5PN2l9hMNzoqF0iqacuwPr0EabOo2oXz8x2khD~dMsdVsKCDrJgXCxFCBVDYrg8HZuHFyhDJeasitmJgggzw7htGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Mobiles</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/a84b/fed4/a649d5ba1c42ed3c7935caf7911ed3eb?Expires=1699833600&Signature=VoCz1ur~Du772HUg4laGwAKqIwsmyXJU27jWZbI3sd1uBq2nNt6Ig1woQT8iyvtX~YHdvdyWFdASkPUs4S6Z0Yb7yESHRsGx7BbraDJZs74sK8FWUhuXArANC0L3I2Gb7K0R7UibCCukAfeHa7IWeAk9dhSJbK4qebKkPWEOqrjQHgr1cMuAzCbeaKgm8wVOgGllWH9J7n-h5zwMkS-bFRFioMi~imnZvK-bWJ1VIjmwLkS8ZXr6ElsZx7kt00Tm8vcryg~pstPRGxzl7cnvufCd~PazHd1zcEpWch3GXKNpwwDH-Uztck1sWW~412hKInEWDn4qEs30uJPKkgPQXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Electronics</h5>
                </div>
              </div>

              {/* End of Entrxx */}

              <div className="card offclr offwid d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/9cec/a09b/711deea6171559387494f7bfd7782aa1?Expires=1699833600&Signature=f1iWMQU5LX66P~n06MzqiUQieUt3-C0K5wao4Qb9K-eFx8Nub5tNg7hkEbKAIwGvepKKQ9z6c4Zbwm-6LxXACN~YFx1VoXdt2KMTOvRXDJS2T1dSqUwhz26VN8TvK0fr5wljqtg4bsnvXu7JuY70boCV5X3xqwxZM6wKAQhBSNFAv7xh1Cn6zRdbq35W5~abeK5wEmNQO9fbU3CzCyjE6cmdOeFjCh~AVvntntPnPqVecgAupfUG5P08yn1tyglHg6THhjd~iiJBzrsL7CwX8I9kq4-tX79Nebg8fhsAcXK-pBCOTYb64-qZn9V7nCNioCfiEt-bP16IScmSXk6Tmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Computers & Accesories</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/99ac/db66/c80580a40c528333cc225cd3068ae0e9?Expires=1699833600&Signature=DQrq8oZdwJZtbg1aL9J-nsoBR7KVnXUO99ULuEKCjSSm4myXFd73CjZdRSSnKag16uYAEmP4MDUAb8tkPJz2dD3glYZ~zspzWwseCBPWc5sRwF~ApPqCVxgObkXnyinI2Mofez01Mg7ijELs4pVm9kPhZ4cQek5~TCHTgcM5q6OQpTWb5pKKggJYaQJkp-ans9ZVAsVhuV3eNTBUp9ngsARzFHaEbQZapekepMw5LIOUudTpfNlnu6-LMBkn4F8Jg7iiP0EnLtlK59DIurX8zm27g4evYw1xLg5Gv5hpbjwlQszr7pZhLQyw5ZnfkKTZLiKnPSv3YroHG2QZGjoo~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Beauty Products</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Clothings</h5>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd wrper */}

          <div className="carousel-item">
            <div className="cards-wrapper">
              <div className="card offclr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke-width="3px"
                    stroke="#F9EBAB"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Footwear</h5>
                </div>
              </div>

              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/8186/d0f2/c7efd9c5ef5f6be6e775f00d38226984?Expires=1699833600&Signature=B~C~ldx8w8D-8FIUP-OgSBJgjeslycRZkoKsv0YWfvRHYn3CFxEIPFKo7Kjr4iqZg7tJsYNuMQeHmgTK3Kcfd7cSdQkOJra~RNUFGOHG-cuXTWDgmaaHOGFWhOl7Ou74Lsxt-nJR-076wHguEEWuuc3uC-hgSLConHVYKoHX~Msw0YreC05faq3dfPoDS9ZjJfSamw5qztqy1~nSRi0Wol80gIqXe3ByVF0WyAqn4fp8m-NJM1B4QzbKt2lLb5PN2l9hMNzoqF0iqacuwPr0EabOo2oXz8x2khD~dMsdVsKCDrJgXCxFCBVDYrg8HZuHFyhDJeasitmJgggzw7htGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Mobiles</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/a84b/fed4/a649d5ba1c42ed3c7935caf7911ed3eb?Expires=1699833600&Signature=VoCz1ur~Du772HUg4laGwAKqIwsmyXJU27jWZbI3sd1uBq2nNt6Ig1woQT8iyvtX~YHdvdyWFdASkPUs4S6Z0Yb7yESHRsGx7BbraDJZs74sK8FWUhuXArANC0L3I2Gb7K0R7UibCCukAfeHa7IWeAk9dhSJbK4qebKkPWEOqrjQHgr1cMuAzCbeaKgm8wVOgGllWH9J7n-h5zwMkS-bFRFioMi~imnZvK-bWJ1VIjmwLkS8ZXr6ElsZx7kt00Tm8vcryg~pstPRGxzl7cnvufCd~PazHd1zcEpWch3GXKNpwwDH-Uztck1sWW~412hKInEWDn4qEs30uJPKkgPQXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Electronics</h5>
                </div>
              </div>

              <div className="card offclr offwid d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/9cec/a09b/711deea6171559387494f7bfd7782aa1?Expires=1699833600&Signature=f1iWMQU5LX66P~n06MzqiUQieUt3-C0K5wao4Qb9K-eFx8Nub5tNg7hkEbKAIwGvepKKQ9z6c4Zbwm-6LxXACN~YFx1VoXdt2KMTOvRXDJS2T1dSqUwhz26VN8TvK0fr5wljqtg4bsnvXu7JuY70boCV5X3xqwxZM6wKAQhBSNFAv7xh1Cn6zRdbq35W5~abeK5wEmNQO9fbU3CzCyjE6cmdOeFjCh~AVvntntPnPqVecgAupfUG5P08yn1tyglHg6THhjd~iiJBzrsL7CwX8I9kq4-tX79Nebg8fhsAcXK-pBCOTYb64-qZn9V7nCNioCfiEt-bP16IScmSXk6Tmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Computers & Accesories</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/99ac/db66/c80580a40c528333cc225cd3068ae0e9?Expires=1699833600&Signature=DQrq8oZdwJZtbg1aL9J-nsoBR7KVnXUO99ULuEKCjSSm4myXFd73CjZdRSSnKag16uYAEmP4MDUAb8tkPJz2dD3glYZ~zspzWwseCBPWc5sRwF~ApPqCVxgObkXnyinI2Mofez01Mg7ijELs4pVm9kPhZ4cQek5~TCHTgcM5q6OQpTWb5pKKggJYaQJkp-ans9ZVAsVhuV3eNTBUp9ngsARzFHaEbQZapekepMw5LIOUudTpfNlnu6-LMBkn4F8Jg7iiP0EnLtlK59DIurX8zm27g4evYw1xLg5Gv5hpbjwlQszr7pZhLQyw5ZnfkKTZLiKnPSv3YroHG2QZGjoo~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Beauty Products</h5>
                </div>
              </div>

              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Jewellery</h5>
                </div>
              </div>
              <div className="card offclr d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Groceries</h5>
                </div>
              </div>
              <div className="card offclr offwid d-none d-md-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                  fill="none"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="68.5"
                    fill="#e4c068"
                    stroke="#F9EBAB"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_295_3645"
                      x1="70"
                      y1="0"
                      x2="70"
                      y2="140"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#F5DC87" />
                      <stop offset="1" stop-color="#D4A74B" />
                    </linearGradient>
                  </defs>
                  <image
                    x="35"
                    y="35"
                    href="https://s3-alpha-sig.figma.com/img/37a9/c49f/0ea8455781194c3e76c5e6b16c3cd238?Expires=1699833600&Signature=hIHx5mrDUyKtvOeZAa1RqSI-sTtfvt3cU8u9f7uSCb0PyV5NZRYR5qjv5cAoEAzQAUqXuqP9cs3QzmcDS6Mw80bGSHU1mz5vMDmbFQoHdLJnvYGwuVVhUMk9p4-zpwwJS6gpMTnXXfGaWJ661E9LP1j~RgQSJxaWim8jDxpCwx2h34xP7wpxjwxqeyrGXo3DcxfwEmsBPAR3sNAZFpVy51CT2kfBUaPcyjuoR2hjCLL~w4eCZ29QG867Wgul8DUa0Qa81nULiqgDQrHHrtd~XbAi67aPYJbL8HqPMrfUCc-3qct~g2GGu-rij2P1bAhvmUOmCYglSbH97YDPNsNDXA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    width="70"
                    height="70"
                  />
                </svg>
                <div class="card-body">
                  <h5 class="card-title-offers">Affeno Brand & More</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slideButtonsOffer">
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

      {/* slide show end */}

      <div className="mbt">
        <div className="mTitle">
          <p>Offers</p>
        </div>
        <div className="beautyProductsBlock">
          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/9598/db5d/c13eef37df1176bf6c706af2a689871a?Expires=1699833600&Signature=CSZRyuOfWzXXTCZk~gCQZpOZQKxxFSwpQvzhJhirb8cdgxunbOROfO-iUOSVCop86PJPW7OZMRoRVWRLyjtBhRQ~2pVpfkZCEsVr0fZrzgi0z3lamb29QhN23CHOkB0xWeY4WRoZ7psk50nLxvswEGiRhPd1eqrIw-QCw1AmEykcB5eBnMZvkUHiheYddWIiakgfLGfeo1DsslDgaUYdSc4sdcG1DS0DtgFKKPqtwPDvgB6AaIFuiJvvwmU4tbOJTIitvPwCb6-FAQxVt8-MecbvCcXVHB0YKLzFhDsNpIOOXTE68oNDaQ9DvUJbh-efVmIuS~3BcVwqq3H~b3A9bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/1c36/338b/29792e4f9dda7ae7f11e18fd84943f8f?Expires=1699833600&Signature=qUaG2ue4OD-JBjkw0Hm6SQ4yd8aJYMKkX8RtqRdNeJGHuqjdISFbN7djXyOgrZA3kILV9g-fZ35nQ4LLef2S~rY7Wr73nDH6U3iPwEHKidkasks4X0-yewj4667hn62IBTriTmiSKIc1e138R9W9i1IUp2gnxtt5NxOXUv93-c9voiTQ-VyBy2tToN~BGydG~S93Esi9mxM~zxOt03VepChMWCAT-kIwgwwI-Vvrk8vlLMnv~9VUXtmiCbfgz2yuloXqDAetoxWvrma0r4CZq1nWNzEWTIObkd2hUyYLjKN3ab5Ngj70HSV~BJx7e8EAdVPP8IZZUPDzYAMZKXPpDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/fc66/bf6f/1dcde59233113011f4efd6dead5e9b10?Expires=1699833600&Signature=bh3c~NJNu-yZ-it6EBNnt7m8tTq4vhJruhfQ36kmzhLSoTPlbPy3lOF1MycEyheMLnRmnOlSM3YCPFR5p~nOvP42aePcXc6aTD6qJXZQmlmXJTQxCfFm-fj7A1UmEdoYJBEnZseHISOSsV52dKrzMAWMtyCTd7XzD8H8dqon8jSF0vGyq5P5IfDmAnd6ju8QcgmRC95ux3hs9vAi0Ab7txT~nsF0YT7wK8~x5LFaG2e9c0LKLuHs2hmZxlRFe-ZZXlPvELuJztSwCKTCdRekzUrdfAaD4MPn1MiV9W~efbQNqn6dsY4hhmYvjWUZg3adOmCZzeeHKpOVMnCr9k5-GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/da7e/8577/fd97abd83d6abc3c7ad9a825a236b504?Expires=1699833600&Signature=WotCTSruxraTMB-M6s7UBqZXy6xjfTJFhYn4H~7ByfkIO-~8dEOO5BgvbHXZlKg~hBsSNNzx5ZWVohGuciN5AClyxOxuKUnGLCy6~5GgLyvjYoRRY-7rVXaJ1Bi6heRZ32i-L0Ux5bEqrcAN241tRtIkUWC2jsAsgCcSVM6DN6ZBhjWtbhQnqYqG~EnpFcfAlY5pKa55JKSaAZzwqcyuyBzM7kzBYGbPsWW33Lj12~Tu6P9bmcaff-faJ0dfznhYYrXjJwNvvpDB3rCRDx5VMPs3zEEnSkv6EsMWPWFlBD8UbIBt8JJeKDSNDJ4QV9FwkCd8XhsQ7GccHxFLbqT5QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/fc66/bf6f/1dcde59233113011f4efd6dead5e9b10?Expires=1699833600&Signature=bh3c~NJNu-yZ-it6EBNnt7m8tTq4vhJruhfQ36kmzhLSoTPlbPy3lOF1MycEyheMLnRmnOlSM3YCPFR5p~nOvP42aePcXc6aTD6qJXZQmlmXJTQxCfFm-fj7A1UmEdoYJBEnZseHISOSsV52dKrzMAWMtyCTd7XzD8H8dqon8jSF0vGyq5P5IfDmAnd6ju8QcgmRC95ux3hs9vAi0Ab7txT~nsF0YT7wK8~x5LFaG2e9c0LKLuHs2hmZxlRFe-ZZXlPvELuJztSwCKTCdRekzUrdfAaD4MPn1MiV9W~efbQNqn6dsY4hhmYvjWUZg3adOmCZzeeHKpOVMnCr9k5-GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/da7e/8577/fd97abd83d6abc3c7ad9a825a236b504?Expires=1699833600&Signature=WotCTSruxraTMB-M6s7UBqZXy6xjfTJFhYn4H~7ByfkIO-~8dEOO5BgvbHXZlKg~hBsSNNzx5ZWVohGuciN5AClyxOxuKUnGLCy6~5GgLyvjYoRRY-7rVXaJ1Bi6heRZ32i-L0Ux5bEqrcAN241tRtIkUWC2jsAsgCcSVM6DN6ZBhjWtbhQnqYqG~EnpFcfAlY5pKa55JKSaAZzwqcyuyBzM7kzBYGbPsWW33Lj12~Tu6P9bmcaff-faJ0dfznhYYrXjJwNvvpDB3rCRDx5VMPs3zEEnSkv6EsMWPWFlBD8UbIBt8JJeKDSNDJ4QV9FwkCd8XhsQ7GccHxFLbqT5QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/9598/db5d/c13eef37df1176bf6c706af2a689871a?Expires=1699833600&Signature=CSZRyuOfWzXXTCZk~gCQZpOZQKxxFSwpQvzhJhirb8cdgxunbOROfO-iUOSVCop86PJPW7OZMRoRVWRLyjtBhRQ~2pVpfkZCEsVr0fZrzgi0z3lamb29QhN23CHOkB0xWeY4WRoZ7psk50nLxvswEGiRhPd1eqrIw-QCw1AmEykcB5eBnMZvkUHiheYddWIiakgfLGfeo1DsslDgaUYdSc4sdcG1DS0DtgFKKPqtwPDvgB6AaIFuiJvvwmU4tbOJTIitvPwCb6-FAQxVt8-MecbvCcXVHB0YKLzFhDsNpIOOXTE68oNDaQ9DvUJbh-efVmIuS~3BcVwqq3H~b3A9bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/1c36/338b/29792e4f9dda7ae7f11e18fd84943f8f?Expires=1699833600&Signature=qUaG2ue4OD-JBjkw0Hm6SQ4yd8aJYMKkX8RtqRdNeJGHuqjdISFbN7djXyOgrZA3kILV9g-fZ35nQ4LLef2S~rY7Wr73nDH6U3iPwEHKidkasks4X0-yewj4667hn62IBTriTmiSKIc1e138R9W9i1IUp2gnxtt5NxOXUv93-c9voiTQ-VyBy2tToN~BGydG~S93Esi9mxM~zxOt03VepChMWCAT-kIwgwwI-Vvrk8vlLMnv~9VUXtmiCbfgz2yuloXqDAetoxWvrma0r4CZq1nWNzEWTIObkd2hUyYLjKN3ab5Ngj70HSV~BJx7e8EAdVPP8IZZUPDzYAMZKXPpDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/9598/db5d/c13eef37df1176bf6c706af2a689871a?Expires=1699833600&Signature=CSZRyuOfWzXXTCZk~gCQZpOZQKxxFSwpQvzhJhirb8cdgxunbOROfO-iUOSVCop86PJPW7OZMRoRVWRLyjtBhRQ~2pVpfkZCEsVr0fZrzgi0z3lamb29QhN23CHOkB0xWeY4WRoZ7psk50nLxvswEGiRhPd1eqrIw-QCw1AmEykcB5eBnMZvkUHiheYddWIiakgfLGfeo1DsslDgaUYdSc4sdcG1DS0DtgFKKPqtwPDvgB6AaIFuiJvvwmU4tbOJTIitvPwCb6-FAQxVt8-MecbvCcXVHB0YKLzFhDsNpIOOXTE68oNDaQ9DvUJbh-efVmIuS~3BcVwqq3H~b3A9bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/1c36/338b/29792e4f9dda7ae7f11e18fd84943f8f?Expires=1699833600&Signature=qUaG2ue4OD-JBjkw0Hm6SQ4yd8aJYMKkX8RtqRdNeJGHuqjdISFbN7djXyOgrZA3kILV9g-fZ35nQ4LLef2S~rY7Wr73nDH6U3iPwEHKidkasks4X0-yewj4667hn62IBTriTmiSKIc1e138R9W9i1IUp2gnxtt5NxOXUv93-c9voiTQ-VyBy2tToN~BGydG~S93Esi9mxM~zxOt03VepChMWCAT-kIwgwwI-Vvrk8vlLMnv~9VUXtmiCbfgz2yuloXqDAetoxWvrma0r4CZq1nWNzEWTIObkd2hUyYLjKN3ab5Ngj70HSV~BJx7e8EAdVPP8IZZUPDzYAMZKXPpDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/fc66/bf6f/1dcde59233113011f4efd6dead5e9b10?Expires=1699833600&Signature=bh3c~NJNu-yZ-it6EBNnt7m8tTq4vhJruhfQ36kmzhLSoTPlbPy3lOF1MycEyheMLnRmnOlSM3YCPFR5p~nOvP42aePcXc6aTD6qJXZQmlmXJTQxCfFm-fj7A1UmEdoYJBEnZseHISOSsV52dKrzMAWMtyCTd7XzD8H8dqon8jSF0vGyq5P5IfDmAnd6ju8QcgmRC95ux3hs9vAi0Ab7txT~nsF0YT7wK8~x5LFaG2e9c0LKLuHs2hmZxlRFe-ZZXlPvELuJztSwCKTCdRekzUrdfAaD4MPn1MiV9W~efbQNqn6dsY4hhmYvjWUZg3adOmCZzeeHKpOVMnCr9k5-GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/da7e/8577/fd97abd83d6abc3c7ad9a825a236b504?Expires=1699833600&Signature=WotCTSruxraTMB-M6s7UBqZXy6xjfTJFhYn4H~7ByfkIO-~8dEOO5BgvbHXZlKg~hBsSNNzx5ZWVohGuciN5AClyxOxuKUnGLCy6~5GgLyvjYoRRY-7rVXaJ1Bi6heRZ32i-L0Ux5bEqrcAN241tRtIkUWC2jsAsgCcSVM6DN6ZBhjWtbhQnqYqG~EnpFcfAlY5pKa55JKSaAZzwqcyuyBzM7kzBYGbPsWW33Lj12~Tu6P9bmcaff-faJ0dfznhYYrXjJwNvvpDB3rCRDx5VMPs3zEEnSkv6EsMWPWFlBD8UbIBt8JJeKDSNDJ4QV9FwkCd8XhsQ7GccHxFLbqT5QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/fc66/bf6f/1dcde59233113011f4efd6dead5e9b10?Expires=1699833600&Signature=bh3c~NJNu-yZ-it6EBNnt7m8tTq4vhJruhfQ36kmzhLSoTPlbPy3lOF1MycEyheMLnRmnOlSM3YCPFR5p~nOvP42aePcXc6aTD6qJXZQmlmXJTQxCfFm-fj7A1UmEdoYJBEnZseHISOSsV52dKrzMAWMtyCTd7XzD8H8dqon8jSF0vGyq5P5IfDmAnd6ju8QcgmRC95ux3hs9vAi0Ab7txT~nsF0YT7wK8~x5LFaG2e9c0LKLuHs2hmZxlRFe-ZZXlPvELuJztSwCKTCdRekzUrdfAaD4MPn1MiV9W~efbQNqn6dsY4hhmYvjWUZg3adOmCZzeeHKpOVMnCr9k5-GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/da7e/8577/fd97abd83d6abc3c7ad9a825a236b504?Expires=1699833600&Signature=WotCTSruxraTMB-M6s7UBqZXy6xjfTJFhYn4H~7ByfkIO-~8dEOO5BgvbHXZlKg~hBsSNNzx5ZWVohGuciN5AClyxOxuKUnGLCy6~5GgLyvjYoRRY-7rVXaJ1Bi6heRZ32i-L0Ux5bEqrcAN241tRtIkUWC2jsAsgCcSVM6DN6ZBhjWtbhQnqYqG~EnpFcfAlY5pKa55JKSaAZzwqcyuyBzM7kzBYGbPsWW33Lj12~Tu6P9bmcaff-faJ0dfznhYYrXjJwNvvpDB3rCRDx5VMPs3zEEnSkv6EsMWPWFlBD8UbIBt8JJeKDSNDJ4QV9FwkCd8XhsQ7GccHxFLbqT5QA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/9598/db5d/c13eef37df1176bf6c706af2a689871a?Expires=1699833600&Signature=CSZRyuOfWzXXTCZk~gCQZpOZQKxxFSwpQvzhJhirb8cdgxunbOROfO-iUOSVCop86PJPW7OZMRoRVWRLyjtBhRQ~2pVpfkZCEsVr0fZrzgi0z3lamb29QhN23CHOkB0xWeY4WRoZ7psk50nLxvswEGiRhPd1eqrIw-QCw1AmEykcB5eBnMZvkUHiheYddWIiakgfLGfeo1DsslDgaUYdSc4sdcG1DS0DtgFKKPqtwPDvgB6AaIFuiJvvwmU4tbOJTIitvPwCb6-FAQxVt8-MecbvCcXVHB0YKLzFhDsNpIOOXTE68oNDaQ9DvUJbh-efVmIuS~3BcVwqq3H~b3A9bA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
            </div>
          </div>

          <div className="beautyProductsBoxes">
            <img
              src="https://s3-alpha-sig.figma.com/img/1c36/338b/29792e4f9dda7ae7f11e18fd84943f8f?Expires=1699833600&Signature=qUaG2ue4OD-JBjkw0Hm6SQ4yd8aJYMKkX8RtqRdNeJGHuqjdISFbN7djXyOgrZA3kILV9g-fZ35nQ4LLef2S~rY7Wr73nDH6U3iPwEHKidkasks4X0-yewj4667hn62IBTriTmiSKIc1e138R9W9i1IUp2gnxtt5NxOXUv93-c9voiTQ-VyBy2tToN~BGydG~S93Esi9mxM~zxOt03VepChMWCAT-kIwgwwI-Vvrk8vlLMnv~9VUXtmiCbfgz2yuloXqDAetoxWvrma0r4CZq1nWNzEWTIObkd2hUyYLjKN3ab5Ngj70HSV~BJx7e8EAdVPP8IZZUPDzYAMZKXPpDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="mx-auto d-block"
            />
            <div className="beautyProductsInnerBox2">
              <p>LAKME Rose Face</p>
              <p>Dual USB Universal Travel Adapter, International All in One</p>
              <div className="rating">
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
                <p>(12,215)</p>
              </div>
              <div className="price">
                <p>₹152 </p>
                <div>
                  <p>M.R.P.:</p>
                  <p>₹4,999.00</p>
                </div>
              </div>
              <div className="off">
                <p>88% off</p>
                <p>Deal of the Day</p>
              </div>
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

export default Offers;
