import Link from "next/link";
import React from "react";

const BgCard = () => {
  return (
    <>
      <section id="ts-service-bg" className="ts-service-bg bg-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="section-title text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Services We Provide
              </h2>
            </div>{" "}
            {/* Col End */}
          </div>{" "}
          {/* Row End */}
        </div>
        {/* Container end */}
      </section>{" "}
      {/* Service BG end */}
      <section id="ts-service" className="ts-service pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="/resource/cleaning.jpg"
                    alt=""
                  />
                </span>{" "}
                {/* Service Img end */}
                <div className="service-content">
                  <div className="service-icon">
                    <img
                      className="icons-car"
                      src="/resource/icons/auto.png"
                      alt=""
                    />
                  </div>{" "}
                  {/* Service icon end */}
                  <h3>
                    <a href="#">Car cleaning service</a>
                  </h3>
                  <p>
                    Express Car Cleaning is the best provider of car cleaning
                    services in Lakshmi Nagar east Delhi offering the wide range
                    of car cleaning services right from the top wash to entire
                    internal detailing making your car look the best version of
                    its self.
                  </p>
                  <Link href="/coating" className="readmore">
                    Read more
                    <i className="fa fa-angle-double-right" />
                  </Link>
                </div>{" "}
                {/* Service content end */}
              </div>{" "}
              {/* Service wrapper end */}
            </div>{" "}
            {/* Col end */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img className="img-fluid" src="/resource/tyre.jpg" alt="" />
                </span>{" "}
                {/* Service Img end */}
                <div className="service-content">
                  <div className="service-icon">
                    <img
                      className="icons-car"
                      src="/resource/icons/wheel.png"
                      alt=""
                    />
                  </div>{" "}
                  {/* Service icon end */}
                  <h3>
                    <a href="#">Car Polishing Service</a>
                  </h3>
                  <p>
                    Get your car a new glow with our professionals who use
                    state-of-the-art polishing equipment and high grade polish
                    for polishing your car. By providing the optimum quality of
                    car polishing services we have managed to be on the top of
                    the best providers of car polishing services in Delhi.
                  </p>
                  <Link href="/coating" className="readmore">
                    Read more
                    <i className="fa fa-angle-double-right" />
                  </Link>
                </div>{" "}
                {/* Service content end */}
              </div>{" "}
              {/* Service wrapper end */}
            </div>{" "}
            {/* Col end */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="/resource/polish.jpg"
                    alt=""
                  />
                </span>{" "}
                {/* Service Img end */}
                <div className="service-content">
                  <div className="service-icon">
                    <img
                      className="icons-car"
                      src="/resource/icons/repair.png"
                      alt=""
                    />
                  </div>{" "}
                  {/* Service icon end */}
                  <h3>
                    <a href="#">Teflon Coating Service</a>
                  </h3>
                  <p>
                    Improve the life and quality of your car with the exclusive
                    Teflon coating services offered by the team of Express Car
                    Cleaning. If you are looking out for the best Teflon coating
                    services in Delhi we are undoubtedly your one short
                    solution.
                  </p>
                  <Link href="/coating" className="readmore">
                    Read more
                    <i className="fa fa-angle-double-right" />
                  </Link>
                </div>{" "}
                {/* Service content end */}
              </div>{" "}
              {/* Service wrapper end */}
            </div>{" "}
          </div>{" "}
          <div className="btn-more-box mt-5 text-center mb-5">
            <Link className="btn-hover-corner" href="/contact">
              Make Appointment
            </Link>
          </div>
        </div>{" "}
        {/* Row End */}
        {/* Container end */}
      </section>
    </>
  );
};

export default BgCard;
