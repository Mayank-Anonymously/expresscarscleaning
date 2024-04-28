import React from "react";

const BikeBanner = () => {
  return (
    <>
      <div
        style={{ marginTop: "100px", marginBottom: "100px" }}
        className="container"
      >
        <div className="row">
          <div className="col-md-6" data-aos="fade-in">
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src="/resource/bike.webp"
            />
          </div>
          <div className="col-md-6">
            <h2 className="sec-title">
              We also offer Bike Protection Services.
            </h2>
            <p className="mt-3">
              We specialize in providing comprehensive bike protection services
              to keep your motorcycle looking its best and protected from the
              elements. Our range of bike protection treatments includes
              coatings, sealants, and detailing services designed to enhance
              durability and preserve the appearance of your bike. Trust us to
              safeguard your motorcycle with our expertise and quality products.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeBanner;
