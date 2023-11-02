import React from "react";
import Navbar from "../Components/Navbar";

import "./ItemBuy.css";
import Footer from "../Components/Footer";

const ItemBuy = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="mbt">
        <div className="itemBlock">
          <div className="itemleft">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca6c/4eca/303371090c309fc750a6253cf9a807cf?Expires=1699833600&Signature=gzzInZMWEOjb-cPOWL2pudcP~3CVwm6VvyuwPZZeiKCsJxIJ7LWsJ5JCL9~6Vl0I2s~zsGdw3QAAF6OIzbXmW3PNHT7b2zGseo0wvdPmWqIiT0x7xBhMhULjH7s32dw0if8v8dUWer6hEZB-1p8tn2URZHqOuTvk7l459ZLhZFlRwwF8xaZE6jEZHPX1NVFJyls~AhEB~VOvC~WleM40pB4Nz-jsosL2SoJlkJsQXf6UhRbbMtBO3mvB43xKswshtRZEb-j-vALa~gcvwY16xFge~A2HPuaJEO-2c9iun~4XCJ1~e72FS0wLJhyOfNEDfac4-D4GakpPbHq57PbIPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <div className="itemimglist">
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/76ce/be0d/0d752936a55709c0d7c3c00cfea8adf5?Expires=1699833600&Signature=YPXRSOeNj7MpXoiUwcTXiBeu4Nffa~gbXsfPzg2zIhmjOhIjF~TSyORYXVIAMxRitOVSMAIDEqIp0SXqtGkFMNvU1rCRwnDYJa6MYob39qLldEeRrbm2AVxfs4yxfuyNeNI87kd8TktywkPLcEQzb8mLnZlG6qJutBokv~YpwEg0VcOvZcpnVpnmc1bZsPFtZJElyswHcsXtstnW0bo6V~1wG3KN9p3-Cv2SCkeeW~dNasa7ZpyBsI~sZJFuSPwwAlNI4Vu~tOAE6ADZoYj6X8j30UDRe1V57PAdEt9x-7Kn2dceyyjY2dA2uXRSqRQyxP5fCHIWy7hlC7G3sFGH8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/68c8/7abd/96f4754989d7d9b6675c939db88a0b89?Expires=1699833600&Signature=IVNt6KWirDS~t1vcX3H-v47mCBPDif9zM9aNRW~hHRkzCV-dGKg0sG1n1yV~-uAnGIvBFh8ssNAB67w77mHUMYr-6hEXkf3WKpNMpvyTpORKDLGupL2FQWkJWlgIPcyLR6-V5~U~sAh~YAy8lO5fHqE-0KS~FG40CkG6qPMBsEpbxEyXN0FC31AGLkxRO8fo3YNQZMM92Weuxg~93vJ1vLGOim9MlSGW0Vr9Ma9QyGm8vgrgHjFxG-CsaU8et3RzP8jC81KNYkwFM8b1NTQru8XuPsXS0X3GWNHxYl0h1EG7v9fIhmhcC~uRmVBh3yfunjlmlawuOLxlJTj~oW610Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/d093/6dec/ce5bed3ef9de9f460c9563302cf67953?Expires=1699833600&Signature=Rgxn6UpQyBXixuMCbxYgEGvNBncjLd~EXD7q~HcfYOzW1JuLMdUSJpQYNJAS5yhaSoUsWh4lukyOht2aYnZxJtbQa3eYJcdSllD5fj-NmrM5AzIOOrZCXBjXQ73pphQ7sRLqrV-1UZS2R0BVghmia9df59SRlYvGSFa2by10Pr6roalvoUfEMESxeR1mHhkOvS2FR32BKQHRJgamVV8kClwdBc4erR2L0LJAooqERHRSxXM0SSgKPtYI06FF4xlTAI1UrPbpZ6t5d72UaRRZkGKeoXm0il25EtSYdG6y419ELpDkWKS6EZhOgcmBCmKMICtnt2z~f-b1pgnhYCD9Mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/05f4/672f/6a2410e6c440fa92e730090485db12ae?Expires=1699833600&Signature=D8Vka0jZ-8-FrfLvLiSKl6kKuJeH0ojwFvFsVHnRCzhaAcEYRIB8Pn9XhJ9L0qYFMxOUt8d0h7ta4O2MtIgbYN9D4H1RII38TYqYN2Xx0CJVzcEwEXwcXON0NZST2~USTgLQRq-Dce8cv0OQfUHOkjZswTx37ivMpEYq~lIlIGHWJ1rrTKK7-CebvBMFm4v9csFTsGY1JlXXePJMc33iHaJuhHpOIg1okZbmbXEi8HsH2Td5GntwVFp3yyZvHK1HQv5grjvQNHfmSJBtKKSXi6T2yNoVFAdL1S1rCY9I0dkwBrceceVBScsRk4GkjYrxP~l7vntmWGVh5FVESrlLKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </div>
            </div>
            <div className="itemtime">
              <p>
                <i class="fa-regular fa-clock"></i>
              </p>
              <p>
                Sale Ends at 3 Hours! <span className="itemhury">HURRY!!</span>
              </p>
            </div>
          </div>
          <div className="itemright">
            <p>Casual Tshirt for Men</p>
            <div className="itemdes">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                non facilisis felis, in scelerisque lectus. Proin tempor eu
                ipsum id lo
              </p>
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
            </div>
            <div className="itemprice">
              <p>₹250</p>
              <p>CHOOSE EMI OPTIONS</p>
            </div>
            <div className="itemsizes">
              <p>Select Size</p>
              <div>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className="itemba">
              <button>BUY NOW</button>
              <button>ADD TO CART</button>
            </div>
            <div className="itemaddress">
              <div className="itemia">
                <div>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>
                  </p>
                  <p>Delivery Address</p>
                </div>
                <p>Change</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                non facilisis felis, in scelerisque lectus. Proin tempor eu
                ipsum id lo
              </p>
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="tltrev">
          <p>Reviews</p>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cards-wrapper">
                <div className="card" id="card1">
                  <div class="card-body ">
                    <div className="revBlock">
                      <div className="toprev">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/02e0/c143/73aa36c0e80064b0068e3bb61aa0c711?Expires=1699833600&Signature=N8qHm2Fmkky7O~M5Zuc9o-fkoShBeop3pZL1bgz8qsgneh1awCN-fh8ZzhugDuIQn717x7CP45FWOI1Al2mdDl0VJBKh7~YHiFowSXUAsyfix1AQch6OgRoWo1lB7pwN~1OLp5CEgCbLg09RuDSOMRpLErPP2-Riiac2AdvM6oMeEQoyMSxs-GtrL5zEHi87WwKRJEkGvrDZF53wYClf0~CawmVt57EfYpGnEgdjCfS2vTYkV5qC0ripAH1THLCILFqeVEwdPHEEnR6s7sYn86TEOiVbQI51SHEVlwPG5XIO5Rr7EeChzsj2tDQRKItSiXxDyY2~ZPocvFlTWOeZLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          alt=""
                        />
                        <div>
                          <p>Shreya Kalra</p>
                          <p>FOUNDER, CAFE MAILIBU</p>
                        </div>
                      </div>
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
                        <p id="revago">2 Years Ago</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean non facilisis felis, in scelerisque lectus. Proin
                        tempor eu ipsum id lo, in scelerisque lectus. Proin
                        tempor eu ipsum id lobortis. Sed vulputate libero vitae
                        pellentesque malesuada
                      </p>
                      <div className="bottomrev">
                        <div>
                          <img
                            src="https://s3-alpha-sig.figma.com/img/05f4/672f/6a2410e6c440fa92e730090485db12ae?Expires=1699833600&Signature=D8Vka0jZ-8-FrfLvLiSKl6kKuJeH0ojwFvFsVHnRCzhaAcEYRIB8Pn9XhJ9L0qYFMxOUt8d0h7ta4O2MtIgbYN9D4H1RII38TYqYN2Xx0CJVzcEwEXwcXON0NZST2~USTgLQRq-Dce8cv0OQfUHOkjZswTx37ivMpEYq~lIlIGHWJ1rrTKK7-CebvBMFm4v9csFTsGY1JlXXePJMc33iHaJuhHpOIg1okZbmbXEi8HsH2Td5GntwVFp3yyZvHK1HQv5grjvQNHfmSJBtKKSXi6T2yNoVFAdL1S1rCY9I0dkwBrceceVBScsRk4GkjYrxP~l7vntmWGVh5FVESrlLKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/ece8/09b8/a9460d945667ed69ed6c493501048f24?Expires=1699833600&Signature=gWnsz4tkUL-~jyp-3uw~P~M~jiU6QlRhPWv2M5UdLfr-Mk3swj5erky8RYTro19ZHpDdHfmPXjWzDpJfibMI47M8648dTryA45YdUmr-HxVlydcVajC6AHTOaNqJ943qtnCXynBrGehH5hF7wnDyQyyppgsN94vO6lfY4v-HVMQmX94EXpO3OJhFjYqOuLNE5ekyFwR93-0Inqi0gxcd-Kh8Oh7yC0BKpvtAUDGqLQYUOSXb1ZXCrkiFZfS4mf-u3H~7vTV122MNrWCBTn254xC-yPyjAQ0R2PbQyJ1csVCY~xRQ3Ae4gH1OyCggqbsH2Kx4al1PTJNh22E9AjLJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/a0b5/1e58/93d46ff30482b435665e0b05c7fd8c7b?Expires=1699833600&Signature=mqa3hdpwU9NceJioy-RueS5lxyLjO45zWKtYQb9tJFJtGHHK5KtSJjElB5CkJceND7PnvjL8yopHicGsJ5jrbPddLaDgTY0-5TVTTHIK-R7-CDWFgPfmFCPs05zvnQ1M~~uE9VyK-SUuyf9san~XRVVdDUJQ-bSdfvHCVbpMdiD6wRU9PFVnWRlZUoooz48t2xEI460yhFQhMWAjojJ8f9t~nXj0IclAZgz1nGC1c8aPeVLlKp5-mNN0FwQiC0YY9Cg0dOIbA~Paa7KU8h8jE~N8CuFvGJ7X8FlJbe8Z085tp-YN-bl4faI5zEN6RHzDzL5jlvmdNpJ9D6eyyBnVfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://s3-alpha-sig.figma.com/img/ee72/ea68/c4404deeb9fff19019b3ceb3f141e0bd?Expires=1699833600&Signature=g5mn-suHjJ28wMLOK6BRmyjevDskwu0XmZEO8B5TXl-yQQfUFjtTdb5gGg6adV7bi2JfnAiaOIivZ34jsrrA0F9Rrau~t7Pimyqea2MhOBL2r80QD6pi1GbcVeSEvqM0YLMp6ZQWLgDUFW9kCtS9-4MiYSVhzn6QBiP2YPfS1apPRg8Me82OH3rrvUTfkvWDmf9E3tl9ax019wpmPpdIrHBsRk4BWAqF0xcuP1MLd4QSOB4a44lgeB1SJaRb3mHHSmC9E3zJVS93JvwfocX3Lzp5MUqt01enCceQY1Kp83ECZQIYb4RbmIpDa7lnRPULFwO8sW8ahxGISr-YQIAIxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              width="55"
                              height="55"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://i.postimg.cc/D0KFQ9Vv/downhand.png"
                              width="55"
                              height="55"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card d-none d-md-block" id="card1">
                  <div class="card-body ">
                    <div className="revBlock">
                      <div className="toprev">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/02e0/c143/73aa36c0e80064b0068e3bb61aa0c711?Expires=1699833600&Signature=N8qHm2Fmkky7O~M5Zuc9o-fkoShBeop3pZL1bgz8qsgneh1awCN-fh8ZzhugDuIQn717x7CP45FWOI1Al2mdDl0VJBKh7~YHiFowSXUAsyfix1AQch6OgRoWo1lB7pwN~1OLp5CEgCbLg09RuDSOMRpLErPP2-Riiac2AdvM6oMeEQoyMSxs-GtrL5zEHi87WwKRJEkGvrDZF53wYClf0~CawmVt57EfYpGnEgdjCfS2vTYkV5qC0ripAH1THLCILFqeVEwdPHEEnR6s7sYn86TEOiVbQI51SHEVlwPG5XIO5Rr7EeChzsj2tDQRKItSiXxDyY2~ZPocvFlTWOeZLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          alt=""
                        />
                        <div>
                          <p>Shreya Kalra</p>
                          <p>FOUNDER, CAFE MAILIBU</p>
                        </div>
                      </div>
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
                        <p id="revago">2 Years Ago</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean non facilisis felis, in scelerisque lectus. Proin
                        tempor eu ipsum id lo, in scelerisque lectus. Proin
                        tempor eu ipsum id lobortis. Sed vulputate libero vitae
                        pellentesque malesuada
                      </p>
                      <div className="bottomrev">
                        <div>
                          <img
                            src="https://s3-alpha-sig.figma.com/img/05f4/672f/6a2410e6c440fa92e730090485db12ae?Expires=1699833600&Signature=D8Vka0jZ-8-FrfLvLiSKl6kKuJeH0ojwFvFsVHnRCzhaAcEYRIB8Pn9XhJ9L0qYFMxOUt8d0h7ta4O2MtIgbYN9D4H1RII38TYqYN2Xx0CJVzcEwEXwcXON0NZST2~USTgLQRq-Dce8cv0OQfUHOkjZswTx37ivMpEYq~lIlIGHWJ1rrTKK7-CebvBMFm4v9csFTsGY1JlXXePJMc33iHaJuhHpOIg1okZbmbXEi8HsH2Td5GntwVFp3yyZvHK1HQv5grjvQNHfmSJBtKKSXi6T2yNoVFAdL1S1rCY9I0dkwBrceceVBScsRk4GkjYrxP~l7vntmWGVh5FVESrlLKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/ece8/09b8/a9460d945667ed69ed6c493501048f24?Expires=1699833600&Signature=gWnsz4tkUL-~jyp-3uw~P~M~jiU6QlRhPWv2M5UdLfr-Mk3swj5erky8RYTro19ZHpDdHfmPXjWzDpJfibMI47M8648dTryA45YdUmr-HxVlydcVajC6AHTOaNqJ943qtnCXynBrGehH5hF7wnDyQyyppgsN94vO6lfY4v-HVMQmX94EXpO3OJhFjYqOuLNE5ekyFwR93-0Inqi0gxcd-Kh8Oh7yC0BKpvtAUDGqLQYUOSXb1ZXCrkiFZfS4mf-u3H~7vTV122MNrWCBTn254xC-yPyjAQ0R2PbQyJ1csVCY~xRQ3Ae4gH1OyCggqbsH2Kx4al1PTJNh22E9AjLJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/a0b5/1e58/93d46ff30482b435665e0b05c7fd8c7b?Expires=1699833600&Signature=mqa3hdpwU9NceJioy-RueS5lxyLjO45zWKtYQb9tJFJtGHHK5KtSJjElB5CkJceND7PnvjL8yopHicGsJ5jrbPddLaDgTY0-5TVTTHIK-R7-CDWFgPfmFCPs05zvnQ1M~~uE9VyK-SUuyf9san~XRVVdDUJQ-bSdfvHCVbpMdiD6wRU9PFVnWRlZUoooz48t2xEI460yhFQhMWAjojJ8f9t~nXj0IclAZgz1nGC1c8aPeVLlKp5-mNN0FwQiC0YY9Cg0dOIbA~Paa7KU8h8jE~N8CuFvGJ7X8FlJbe8Z085tp-YN-bl4faI5zEN6RHzDzL5jlvmdNpJ9D6eyyBnVfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://s3-alpha-sig.figma.com/img/ee72/ea68/c4404deeb9fff19019b3ceb3f141e0bd?Expires=1699833600&Signature=g5mn-suHjJ28wMLOK6BRmyjevDskwu0XmZEO8B5TXl-yQQfUFjtTdb5gGg6adV7bi2JfnAiaOIivZ34jsrrA0F9Rrau~t7Pimyqea2MhOBL2r80QD6pi1GbcVeSEvqM0YLMp6ZQWLgDUFW9kCtS9-4MiYSVhzn6QBiP2YPfS1apPRg8Me82OH3rrvUTfkvWDmf9E3tl9ax019wpmPpdIrHBsRk4BWAqF0xcuP1MLd4QSOB4a44lgeB1SJaRb3mHHSmC9E3zJVS93JvwfocX3Lzp5MUqt01enCceQY1Kp83ECZQIYb4RbmIpDa7lnRPULFwO8sW8ahxGISr-YQIAIxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              width="55"
                              height="55"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://i.postimg.cc/D0KFQ9Vv/downhand.png"
                              width="55"
                              height="55"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="cards-wrapper">
                <div className="card " id="card1">
                  <div class="card-body ">
                    <div className="revBlock">
                      <div className="toprev">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/02e0/c143/73aa36c0e80064b0068e3bb61aa0c711?Expires=1699833600&Signature=N8qHm2Fmkky7O~M5Zuc9o-fkoShBeop3pZL1bgz8qsgneh1awCN-fh8ZzhugDuIQn717x7CP45FWOI1Al2mdDl0VJBKh7~YHiFowSXUAsyfix1AQch6OgRoWo1lB7pwN~1OLp5CEgCbLg09RuDSOMRpLErPP2-Riiac2AdvM6oMeEQoyMSxs-GtrL5zEHi87WwKRJEkGvrDZF53wYClf0~CawmVt57EfYpGnEgdjCfS2vTYkV5qC0ripAH1THLCILFqeVEwdPHEEnR6s7sYn86TEOiVbQI51SHEVlwPG5XIO5Rr7EeChzsj2tDQRKItSiXxDyY2~ZPocvFlTWOeZLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          alt=""
                        />
                        <div>
                          <p>Shreya Kalra</p>
                          <p>FOUNDER, CAFE MAILIBU</p>
                        </div>
                      </div>
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
                        <p id="revago">2 Years Ago</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean non facilisis felis, in scelerisque lectus. Proin
                        tempor eu ipsum id lo, in scelerisque lectus. Proin
                        tempor eu ipsum id lobortis. Sed vulputate libero vitae
                        pellentesque malesuada
                      </p>
                      <div className="bottomrev">
                        <div>
                          <img
                            src="https://s3-alpha-sig.figma.com/img/05f4/672f/6a2410e6c440fa92e730090485db12ae?Expires=1699833600&Signature=D8Vka0jZ-8-FrfLvLiSKl6kKuJeH0ojwFvFsVHnRCzhaAcEYRIB8Pn9XhJ9L0qYFMxOUt8d0h7ta4O2MtIgbYN9D4H1RII38TYqYN2Xx0CJVzcEwEXwcXON0NZST2~USTgLQRq-Dce8cv0OQfUHOkjZswTx37ivMpEYq~lIlIGHWJ1rrTKK7-CebvBMFm4v9csFTsGY1JlXXePJMc33iHaJuhHpOIg1okZbmbXEi8HsH2Td5GntwVFp3yyZvHK1HQv5grjvQNHfmSJBtKKSXi6T2yNoVFAdL1S1rCY9I0dkwBrceceVBScsRk4GkjYrxP~l7vntmWGVh5FVESrlLKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/ece8/09b8/a9460d945667ed69ed6c493501048f24?Expires=1699833600&Signature=gWnsz4tkUL-~jyp-3uw~P~M~jiU6QlRhPWv2M5UdLfr-Mk3swj5erky8RYTro19ZHpDdHfmPXjWzDpJfibMI47M8648dTryA45YdUmr-HxVlydcVajC6AHTOaNqJ943qtnCXynBrGehH5hF7wnDyQyyppgsN94vO6lfY4v-HVMQmX94EXpO3OJhFjYqOuLNE5ekyFwR93-0Inqi0gxcd-Kh8Oh7yC0BKpvtAUDGqLQYUOSXb1ZXCrkiFZfS4mf-u3H~7vTV122MNrWCBTn254xC-yPyjAQ0R2PbQyJ1csVCY~xRQ3Ae4gH1OyCggqbsH2Kx4al1PTJNh22E9AjLJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/a0b5/1e58/93d46ff30482b435665e0b05c7fd8c7b?Expires=1699833600&Signature=mqa3hdpwU9NceJioy-RueS5lxyLjO45zWKtYQb9tJFJtGHHK5KtSJjElB5CkJceND7PnvjL8yopHicGsJ5jrbPddLaDgTY0-5TVTTHIK-R7-CDWFgPfmFCPs05zvnQ1M~~uE9VyK-SUuyf9san~XRVVdDUJQ-bSdfvHCVbpMdiD6wRU9PFVnWRlZUoooz48t2xEI460yhFQhMWAjojJ8f9t~nXj0IclAZgz1nGC1c8aPeVLlKp5-mNN0FwQiC0YY9Cg0dOIbA~Paa7KU8h8jE~N8CuFvGJ7X8FlJbe8Z085tp-YN-bl4faI5zEN6RHzDzL5jlvmdNpJ9D6eyyBnVfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://s3-alpha-sig.figma.com/img/ee72/ea68/c4404deeb9fff19019b3ceb3f141e0bd?Expires=1699833600&Signature=g5mn-suHjJ28wMLOK6BRmyjevDskwu0XmZEO8B5TXl-yQQfUFjtTdb5gGg6adV7bi2JfnAiaOIivZ34jsrrA0F9Rrau~t7Pimyqea2MhOBL2r80QD6pi1GbcVeSEvqM0YLMp6ZQWLgDUFW9kCtS9-4MiYSVhzn6QBiP2YPfS1apPRg8Me82OH3rrvUTfkvWDmf9E3tl9ax019wpmPpdIrHBsRk4BWAqF0xcuP1MLd4QSOB4a44lgeB1SJaRb3mHHSmC9E3zJVS93JvwfocX3Lzp5MUqt01enCceQY1Kp83ECZQIYb4RbmIpDa7lnRPULFwO8sW8ahxGISr-YQIAIxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              width="55"
                              height="55"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://i.postimg.cc/D0KFQ9Vv/downhand.png"
                              width="55"
                              height="55"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card d-none d-md-block" id="card1">
                  <div class="card-body ">
                    <div className="revBlock">
                      <div className="toprev">
                        <img
                          src="https://s3-alpha-sig.figma.com/img/02e0/c143/73aa36c0e80064b0068e3bb61aa0c711?Expires=1699833600&Signature=N8qHm2Fmkky7O~M5Zuc9o-fkoShBeop3pZL1bgz8qsgneh1awCN-fh8ZzhugDuIQn717x7CP45FWOI1Al2mdDl0VJBKh7~YHiFowSXUAsyfix1AQch6OgRoWo1lB7pwN~1OLp5CEgCbLg09RuDSOMRpLErPP2-Riiac2AdvM6oMeEQoyMSxs-GtrL5zEHi87WwKRJEkGvrDZF53wYClf0~CawmVt57EfYpGnEgdjCfS2vTYkV5qC0ripAH1THLCILFqeVEwdPHEEnR6s7sYn86TEOiVbQI51SHEVlwPG5XIO5Rr7EeChzsj2tDQRKItSiXxDyY2~ZPocvFlTWOeZLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                          alt=""
                        />
                        <div>
                          <p>Shreya Kalra</p>
                          <p>FOUNDER, CAFE MAILIBU</p>
                        </div>
                      </div>
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
                        <p id="revago">2 Years Ago</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean non facilisis felis, in scelerisque lectus. Proin
                        tempor eu ipsum id lo, in scelerisque lectus. Proin
                        tempor eu ipsum id lobortis. Sed vulputate libero vitae
                        pellentesque malesuada
                      </p>
                      <div className="bottomrev">
                        <div>
                          <img
                            src="https://s3-alpha-sig.figma.com/img/05f4/672f/6a2410e6c440fa92e730090485db12ae?Expires=1699833600&Signature=D8Vka0jZ-8-FrfLvLiSKl6kKuJeH0ojwFvFsVHnRCzhaAcEYRIB8Pn9XhJ9L0qYFMxOUt8d0h7ta4O2MtIgbYN9D4H1RII38TYqYN2Xx0CJVzcEwEXwcXON0NZST2~USTgLQRq-Dce8cv0OQfUHOkjZswTx37ivMpEYq~lIlIGHWJ1rrTKK7-CebvBMFm4v9csFTsGY1JlXXePJMc33iHaJuhHpOIg1okZbmbXEi8HsH2Td5GntwVFp3yyZvHK1HQv5grjvQNHfmSJBtKKSXi6T2yNoVFAdL1S1rCY9I0dkwBrceceVBScsRk4GkjYrxP~l7vntmWGVh5FVESrlLKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/ece8/09b8/a9460d945667ed69ed6c493501048f24?Expires=1699833600&Signature=gWnsz4tkUL-~jyp-3uw~P~M~jiU6QlRhPWv2M5UdLfr-Mk3swj5erky8RYTro19ZHpDdHfmPXjWzDpJfibMI47M8648dTryA45YdUmr-HxVlydcVajC6AHTOaNqJ943qtnCXynBrGehH5hF7wnDyQyyppgsN94vO6lfY4v-HVMQmX94EXpO3OJhFjYqOuLNE5ekyFwR93-0Inqi0gxcd-Kh8Oh7yC0BKpvtAUDGqLQYUOSXb1ZXCrkiFZfS4mf-u3H~7vTV122MNrWCBTn254xC-yPyjAQ0R2PbQyJ1csVCY~xRQ3Ae4gH1OyCggqbsH2Kx4al1PTJNh22E9AjLJ9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                          <img
                            src="https://s3-alpha-sig.figma.com/img/a0b5/1e58/93d46ff30482b435665e0b05c7fd8c7b?Expires=1699833600&Signature=mqa3hdpwU9NceJioy-RueS5lxyLjO45zWKtYQb9tJFJtGHHK5KtSJjElB5CkJceND7PnvjL8yopHicGsJ5jrbPddLaDgTY0-5TVTTHIK-R7-CDWFgPfmFCPs05zvnQ1M~~uE9VyK-SUuyf9san~XRVVdDUJQ-bSdfvHCVbpMdiD6wRU9PFVnWRlZUoooz48t2xEI460yhFQhMWAjojJ8f9t~nXj0IclAZgz1nGC1c8aPeVLlKp5-mNN0FwQiC0YY9Cg0dOIbA~Paa7KU8h8jE~N8CuFvGJ7X8FlJbe8Z085tp-YN-bl4faI5zEN6RHzDzL5jlvmdNpJ9D6eyyBnVfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt=""
                          />
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://s3-alpha-sig.figma.com/img/ee72/ea68/c4404deeb9fff19019b3ceb3f141e0bd?Expires=1699833600&Signature=g5mn-suHjJ28wMLOK6BRmyjevDskwu0XmZEO8B5TXl-yQQfUFjtTdb5gGg6adV7bi2JfnAiaOIivZ34jsrrA0F9Rrau~t7Pimyqea2MhOBL2r80QD6pi1GbcVeSEvqM0YLMp6ZQWLgDUFW9kCtS9-4MiYSVhzn6QBiP2YPfS1apPRg8Me82OH3rrvUTfkvWDmf9E3tl9ax019wpmPpdIrHBsRk4BWAqF0xcuP1MLd4QSOB4a44lgeB1SJaRb3mHHSmC9E3zJVS93JvwfocX3Lzp5MUqt01enCceQY1Kp83ECZQIYb4RbmIpDa7lnRPULFwO8sW8ahxGISr-YQIAIxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                              width="55"
                              height="55"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="92"
                            height="92"
                            viewBox="0 0 92 92"
                            fill="none"
                          >
                            <circle cx="46" cy="46" r="45.5" stroke="black" />
                            <image
                              x="18"
                              y="18"
                              href="https://i.postimg.cc/D0KFQ9Vv/downhand.png"
                              width="55"
                              height="55"
                            />
                          </svg>
                        </div>
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

        {/* Discover More */}

        <div className="tltrev">
          <p>Discover More</p>
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

export default ItemBuy;
