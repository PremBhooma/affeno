import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="mbt">
        <div className="mTitle">
          <p>Categories</p>
        </div>
        <div className="catBlock">
          <div className="catBoxes1">
            <div>
              <Link to={"/menfashion"}>
                <img src="https://i.postimg.cc/ydS0dvL7/men1.png" alt="" />
              </Link>

              <div>
                <Link to={"/menfashion"}>
                  <p className="catSubTitle">MENS FASHION</p>
                  <p className="catPara">
                    Discover 70+ Brands and upto 50% OFF
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <Link to={"/womenfashion"}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7afd/1ba2/28b9b91a1eb222b65440deedb76b6c4e?Expires=1699833600&Signature=XftIdAivhGZsIQ7ISoJGlk47utTi-Uv2Y-TlBsigtybylcRusODvBmXRQct6A3WXSIlWVVf3dgEXm~NAz7kqmwmnbx2pgBimtJoP9e0-cGhCjtDsS4tkjKfMeVo1GAPoY7jTvzDMd6hWgs08zFsyduZMwmGUsaNJi~Gyqu2xislwTWuAvJS87gQKkvuqGzgq90tcVlSipOCC0tEQmDFE45B3FgJAT4fVS3bGJUsf7qF1gE~1Y6PYfuUpT-S9-o-HG-Nh0t9WkTDhXL1FiTLSttnMzmyZahso3eeQ0fOtzD~jJ1VMitQfgFVlk78-avBteqv3I816KAK5vGFdg6tjRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </Link>
              <div>
                <Link to={"/womenfashion"}>
                  <p className="catSubTitle">WOMEN FASHION</p>
                  <p className="catPara">
                    Discover 70+ Brands and upto 50% OFF
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <Link to={"/kidsfashion"}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1b3f/fd4f/bf3e60ed0be8496d685dcbc0731cfe0b?Expires=1699833600&Signature=DhdI4OPAzRYoRyPsk~0BiThWCRzPRS9bKSPLpUCMvKoqXBLC9qresx2YgLHBkO7K2E6Qu1eybRb8giM2RjH7DpFJo7QOFhhdFetkFrnMwigt2rbKV381EvLjskdCkrJ~mOyJFKX8JJ13inQJAEbnQU2wyKvEwBo39MLpp~Ir~CrolpaaxPhg1fpnqfhE7bHs40csTnULLa9ULHFh-mLUat0JlrTuH15PNbqMhyfr-YjT8N~gMA10GGJoCh6~m7bNHyaxka8EtgN51GXi-fcBrt-t-923pcWvs7JnYrSgwIkCvaW8qZ~unHY-7awUs-j0E5Nfsr0rQ6ExY5zwovHJtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </Link>
              <div>
                <Link to={"/kidsfashion"}>
                  <p className="catSubTitle">KIDS FASHION</p>
                  <p className="catPara">
                    Discover 70+ Brands and upto 50% OFF
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* CatBox2 */}
          <div className="catBoxes2">
            <div>
              <Link>
                <img
                  src="https://s3-alpha-sig.figma.com/img/aa5a/5fd9/6ef17e9bbb17697ecd52d5451bee1dbd?Expires=1699833600&Signature=ip6F0Bz5CKSE4~febDbwtnTe639QqKep~ZjoCbYrU3aAGtlm9AjJbr40hDIlcfT2HjVzYUn4aQHVB8H2Lo4dufwfycaJXeoAVH378SOHZpvCL3t9iAd4eM7lAES382owxi72zj22mN7n5zZC~aJZ40KB7ZVrtBC4h6cDboevqPPCy2on7CmckuL95PGofEx6I3gjukFeUEAABj1AnfJK-Qj1FOX~jANezvaXUqXdQth4zANsxkm~O1BLyZ6jCRo4UZulI06QXrVdCbdOPAlT9CephTCyVoCvew~oCdIP~~5M-D~MtXnyWLvAeViNAEl91w3XinSUq2whle~ZUxN1RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </Link>
              <div>
                <Link>
                  <p className="catSubTitle">HOME & KITCHEN</p>
                  <p className="catPara1">
                    Discover 70+ Brands and upto 50% OFF
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <Link>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b60/667f/189b0614b4f86dd61a905ab30f105ffa?Expires=1699833600&Signature=O~y-h8Axkktz6m7DJZDWttSWIkHFv3tDzPSk0bROTYoGquIyrJvOdKfj-SJfKWx4kzuHs4kh-GtbReVCkW3Jf9OKS3tyBQXh086inSL6~e8AO-y64~fh9atJE0iPlU25RhH3REX~Z7epJpiaXHM-eUUE~zwVqC6RMSM6GGT7MI4ciJ-Ulwdvc~Gro9hfv7xsRWQ2tk0wKmtME37EhpBS6VI4OOTekHYSq7l77ZG2u336MjTXCao9P1Fuee0lLSjd1FY6gC0kBG~VFXX3xXLo8e2wBKCtePki8kTa7qwKQo6XztQgUkuSlRaSQK9wsSpZYud5js~Nms5xmr1X2cVOVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </Link>
              <div>
                <Link>
                  <p className="catSubTitle">FOOD & GROCERIES</p>
                  <p className="catPara1">
                    Discover 70+ Brands and upto 50% OFF
                  </p>
                </Link>
              </div>
            </div>
          </div>
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

export default Categories;
