import React from "react";
import Navbar from "../Components/Navbar";
import Banners from "../Components/Banners";
import Trend from "../Components/Trend";
import { Link } from "react-router-dom";
import InDemand from "../Components/InDemand";

import "./Home.css";
import BeautyProducts from "../Components/BeautyProducts";
import TastedProducts from "../Components/TastedProducts";
import Fashion from "../Components/Fashion";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banners />

      {/* Trend */}
      <div className="mbt">
        <div className="title">
          <p>New Trend</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <Trend />
      </div>

      {/* In Demand */}
      <div className="mbt">
        <div className="title">
          <p>In Demand</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <InDemand />
      </div>

      {/* Sale Poster */}
      <div className="salePoster">
        <img
          src="https://s3-alpha-sig.figma.com/img/9b6e/18f0/e7d2ce60e3739727b0caf9eed24a54df?Expires=1699833600&Signature=YeulXxZEqeDtlNB1TV0ZIRtLJuvzoepkAsqOZC4CFAU1FTdRNc9dPF~NtKnRFmMRrgj9dAzWGYZc4s8fMZ5yRHi5Q2RNO~hsO~874CWcfmOKa7kXOO8f1MiOCGrKLSYsZ6bMDpPqzPVXscFEZQcYneWTUO9wTXXSJWrJksONsBDC5lnqLe59nxsdgRn03W8MGMFS6Oi0O3u1FpqQyc0-9vIWCvZe6hpn0pkazQ1dRdVWSv6I7dOWQuyhFglFYPGhxm9u7i~CQnPfdGGi2cad8mhyyZJfbk6FdsJ5M5Nb1Ttf7ahE72RDRb8ksIVvRWWVhm9ieTZqXXqo~70dKx~qfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>

      {/* Beauty Products */}
      <div className="mbt">
        <div className="title">
          <p>Beauty Products</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <BeautyProducts />
      </div>

      {/* Sale Poster */}
      <div className="salePoster">
        <img
          src="https://s3-alpha-sig.figma.com/img/7082/ec68/897f6b4bf5341e6674d0be83692c72e0?Expires=1699833600&Signature=hkPbHDj4ppyyu3hPr0zdcgIjuQHP-8Tk0Tx93wlpvuic5x3~A6~HDhKFQ58Ehqtg0AZyuxvNqYr6z4xRxWy2maGFguAZINSYHWppDZYz4Fm7LRYC1Tkka5kBfLmdRxs4a~qzymJSMw60-g3OgApDuTqYZJ5Nn0-VvCgL4-t3Rvjycm8yraOCthi6wmJBXev~R4aAixaBEkHSHKTTfLKlgbze0S1DQzWSQf4xRX2a9rgIM0FAFUyDTCipPgbFTQyNNdmWX4tiBNPu8EB4~KM-vr8sVeq9jNPw652KqAAIT2rFkiAWTy0b9a2ozMB-i0-RGJM8IfOTPvFaMInNpNi6mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>

      {/* Tasted Products */}
      <div className="mbt">
        <div className="title">
          <p>Tasted Products</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <TastedProducts />
      </div>

      {/* Dual Sale Poster */}
      <div className="dualSalePoster">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b987/7d19/6c0f0bfe13af7ed90d162935e3753674?Expires=1699833600&Signature=YkZ5L1Cz1TEjaOmv4Fi4g2X2Kw6hnoyRwYAzCzDULwU9wCz-4yc8ZkxPfYD-Y427iUW0U9x5NK9hHcfI8nPi5sUwUJoczr2eltaT6HDzxCeqx4LFfQOZZ8ohULG01pOk6hzATd~YpMkBNaK-A5BI66pn2OE4cDgXX4XA1zuTCc1t8YJ9r~qFSRDjcSbJ7r~CI-3DwYvrRpZ8rdapispIhfnPQS5OuK~VyW2baAVJq3uTa87zak-QviyhBTHGYoi1a37B-HPRP6FQsFj-p7I0LYzMniIqlvquOqqw2o0fCogFjWD7f-sqgFpZO~2ExKHAhtgcDlTb79uIdecTVEwFuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="mt-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b6e/18f0/e7d2ce60e3739727b0caf9eed24a54df?Expires=1699833600&Signature=YeulXxZEqeDtlNB1TV0ZIRtLJuvzoepkAsqOZC4CFAU1FTdRNc9dPF~NtKnRFmMRrgj9dAzWGYZc4s8fMZ5yRHi5Q2RNO~hsO~874CWcfmOKa7kXOO8f1MiOCGrKLSYsZ6bMDpPqzPVXscFEZQcYneWTUO9wTXXSJWrJksONsBDC5lnqLe59nxsdgRn03W8MGMFS6Oi0O3u1FpqQyc0-9vIWCvZe6hpn0pkazQ1dRdVWSv6I7dOWQuyhFglFYPGhxm9u7i~CQnPfdGGi2cad8mhyyZJfbk6FdsJ5M5Nb1Ttf7ahE72RDRb8ksIVvRWWVhm9ieTZqXXqo~70dKx~qfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>

      {/* clothes for Women */}
      <div className="mbt">
        <div className="title">
          <p>Clothes For Women</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <Fashion />
      </div>

      {/* Dual Sale Poster */}
      <div className="dualSalePoster">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/7082/ec68/897f6b4bf5341e6674d0be83692c72e0?Expires=1699833600&Signature=hkPbHDj4ppyyu3hPr0zdcgIjuQHP-8Tk0Tx93wlpvuic5x3~A6~HDhKFQ58Ehqtg0AZyuxvNqYr6z4xRxWy2maGFguAZINSYHWppDZYz4Fm7LRYC1Tkka5kBfLmdRxs4a~qzymJSMw60-g3OgApDuTqYZJ5Nn0-VvCgL4-t3Rvjycm8yraOCthi6wmJBXev~R4aAixaBEkHSHKTTfLKlgbze0S1DQzWSQf4xRX2a9rgIM0FAFUyDTCipPgbFTQyNNdmWX4tiBNPu8EB4~KM-vr8sVeq9jNPw652KqAAIT2rFkiAWTy0b9a2ozMB-i0-RGJM8IfOTPvFaMInNpNi6mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div className="mt-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/9b6e/18f0/e7d2ce60e3739727b0caf9eed24a54df?Expires=1699833600&Signature=YeulXxZEqeDtlNB1TV0ZIRtLJuvzoepkAsqOZC4CFAU1FTdRNc9dPF~NtKnRFmMRrgj9dAzWGYZc4s8fMZ5yRHi5Q2RNO~hsO~874CWcfmOKa7kXOO8f1MiOCGrKLSYsZ6bMDpPqzPVXscFEZQcYneWTUO9wTXXSJWrJksONsBDC5lnqLe59nxsdgRn03W8MGMFS6Oi0O3u1FpqQyc0-9vIWCvZe6hpn0pkazQ1dRdVWSv6I7dOWQuyhFglFYPGhxm9u7i~CQnPfdGGi2cad8mhyyZJfbk6FdsJ5M5Nb1Ttf7ahE72RDRb8ksIVvRWWVhm9ieTZqXXqo~70dKx~qfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </div>

      {/* Women Footwear */}
      <div className="mbt">
        <div className="title">
          <p>Women Footwear</p>
          <p>
            <Link>View All</Link>
          </p>
        </div>
        <Fashion />
      </div>

      {/* Sale Poster */}
      <div className="salePoster">
        <img
          src="https://s3-alpha-sig.figma.com/img/b987/7d19/6c0f0bfe13af7ed90d162935e3753674?Expires=1699833600&Signature=YkZ5L1Cz1TEjaOmv4Fi4g2X2Kw6hnoyRwYAzCzDULwU9wCz-4yc8ZkxPfYD-Y427iUW0U9x5NK9hHcfI8nPi5sUwUJoczr2eltaT6HDzxCeqx4LFfQOZZ8ohULG01pOk6hzATd~YpMkBNaK-A5BI66pn2OE4cDgXX4XA1zuTCc1t8YJ9r~qFSRDjcSbJ7r~CI-3DwYvrRpZ8rdapispIhfnPQS5OuK~VyW2baAVJq3uTa87zak-QviyhBTHGYoi1a37B-HPRP6FQsFj-p7I0LYzMniIqlvquOqqw2o0fCogFjWD7f-sqgFpZO~2ExKHAhtgcDlTb79uIdecTVEwFuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
