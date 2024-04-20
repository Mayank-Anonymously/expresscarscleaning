import React from "react";

const Services = () => {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="home-about">
              <h5>Why Choose Us?</h5>
              <h2>Born to perform</h2>
              <p>
                Skip the long lines and lackluster results! Choose Express Car
                Cleaning for a fast, meticulous clean that revitalizes your car.
                Our expert technicians use high-tech tools to remove every speck
                of grime, leaving your car looking showroom-ready and turning
                heads wherever you go.
              </p>
              <p>
                Experience the Express Car Cleaning difference! We're passionate
                about making your car shine with convenient, high-quality
                service.
              </p>
              <div className="btn-more-box">
                <a className="btn-hover-corner" href="#">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 space-break">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="home-icon-box">
                  <figure className="icon-pic">
                    <img src="/resource/icons/chauffer.png" alt="" />
                  </figure>
                  <h3>Experienced Team</h3>
                  <p>
                    Our experienced team uses cutting-edge tech to deliver
                    exceptional service.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="home-icon-box">
                  <figure className="icon-pic">
                    <img src="/resource/icons/tag.png" alt="" />
                  </figure>
                  <h3>Special Offers </h3>
                  <p>
                    Express Shine Special: Upgrade your car wash to a premium
                    detail for a limited time!
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="home-icon-box">
                  <figure className="icon-pic">
                    <img src="/resource/icons/break.png" alt="" />
                  </figure>
                  <h3>Special Price</h3>
                  <p>
                    Express Car Cleaning offers top-tier services at
                    budget-friendly prices. We ensure you get the best of both
                    worlds - a sparkling clean car and a happy wallet.
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="home-icon-box">
                  <figure className="icon-pic">
                    <img src="/resource/icons/repair.png" alt="" />
                  </figure>
                  <h3>Fast Delivery</h3>
                  <p>
                    Express Car Cleaning: Fast, comprehensive service gets your
                    car road-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
