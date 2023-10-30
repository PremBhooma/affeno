import React from "react";

const Banners = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://s3-alpha-sig.figma.com/img/d480/5be7/8e262f62afd8ac120390cafca1a7da7b?Expires=1699833600&Signature=mgDSAqA4P-jgxLYRiO5mtOSAm0af-Ar~DpzQwOBI4-8btuYaPymmBce35L1jUBncSV2CFC3NBVihfjnRyQvxrAfh0dtqjjBz~C1IqkZeVC640bhYSW-z8S3SNpyaoU41EXR9mtIVO84ImS2FKg2qMXDRXs5sPPwP5YIFzmXUqVdri2WMa5grQMTVP0DoxpLrcEFUEeyA8xiXClJa-YyPIsVvDLVYSq6f0K1xb36mMVOPqSl1a7My7QmI0a1mvlSEqI7be541OfvXENKiogjIR5AgPnCI-KOW9W3TVb1mZWACvSbxgzHdPuGwzIRqXPRHMRQ0VOatefU1rCz9ndjYXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="d-block w-100 bannerImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/d480/5be7/8e262f62afd8ac120390cafca1a7da7b?Expires=1699833600&Signature=mgDSAqA4P-jgxLYRiO5mtOSAm0af-Ar~DpzQwOBI4-8btuYaPymmBce35L1jUBncSV2CFC3NBVihfjnRyQvxrAfh0dtqjjBz~C1IqkZeVC640bhYSW-z8S3SNpyaoU41EXR9mtIVO84ImS2FKg2qMXDRXs5sPPwP5YIFzmXUqVdri2WMa5grQMTVP0DoxpLrcEFUEeyA8xiXClJa-YyPIsVvDLVYSq6f0K1xb36mMVOPqSl1a7My7QmI0a1mvlSEqI7be541OfvXENKiogjIR5AgPnCI-KOW9W3TVb1mZWACvSbxgzHdPuGwzIRqXPRHMRQ0VOatefU1rCz9ndjYXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="d-block w-100 bannerImg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/d480/5be7/8e262f62afd8ac120390cafca1a7da7b?Expires=1699833600&Signature=mgDSAqA4P-jgxLYRiO5mtOSAm0af-Ar~DpzQwOBI4-8btuYaPymmBce35L1jUBncSV2CFC3NBVihfjnRyQvxrAfh0dtqjjBz~C1IqkZeVC640bhYSW-z8S3SNpyaoU41EXR9mtIVO84ImS2FKg2qMXDRXs5sPPwP5YIFzmXUqVdri2WMa5grQMTVP0DoxpLrcEFUEeyA8xiXClJa-YyPIsVvDLVYSq6f0K1xb36mMVOPqSl1a7My7QmI0a1mvlSEqI7be541OfvXENKiogjIR5AgPnCI-KOW9W3TVb1mZWACvSbxgzHdPuGwzIRqXPRHMRQ0VOatefU1rCz9ndjYXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="d-block w-100 bannerImg"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banners;
