import Link from "next/link";
import React from "react";

const PriceBanner = () => {
  return (
    <>
      <section id="pricebanner">
        <div className="th-container3 space bg-title position-relative">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center price-row">
              <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
                <div className="title-area text-lg-start">
                  <h2 className="sec-title text-white">Our Price Plan</h2>

                  <h5
                    className="mt-3 red-note-heading"
                    style={{ color: "#ee3131" }}
                  >
                    Note: Our charges can be modified as per our customer's and
                    their vehicle's requirements
                  </h5>
                </div>
              </div>
              <div className="col-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="sec-btn">
                  <Link href="/service" className="th-btn style4">
                    See All Plans
                  </Link>
                </div>
              </div>
            </div>
            <div className="row gy-4">
              <div className="col-xl-8">
                <div className="price-box-wrap">
                  <div className="price-box">
                    <div className="price-box_img">
                      <img src="resource/full.jpg" alt="price image" />
                    </div>
                    <div className="price-box_content">
                      <div className="price-box_header">
                        <h3 className="price-box_title">Full Detailing</h3>
                      </div>
                      <div className="price-box_list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Hatchback - <span className="price-span">1400</span>
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Sedan - <span className="price-span">
                              1600{" "}
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Compact SUV -{" "}
                            <span className="price-span">1900</span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Full Size-SUV -{" "}
                            <span className="price-span">2400 </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Luxury -<span className="price-span">
                              3000{" "}
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="price-box_img">
                      <img src="resource/inter.jpg" alt="price image" />
                    </div>
                    <div className="price-box_content">
                      <div className="price-box_header">
                        <h3 className="price-box_title">Interior</h3>
                      </div>
                      <div className="price-box_list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Hatchback - <span className="price-span">800</span>
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Sedan - <span className="price-span">
                              900{" "}
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Compact SUV -{" "}
                            <span className="price-span">1000</span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Full Size-SUV -{" "}
                            <span className="price-span">1200 </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Luxury -<span className="price-span">
                              1500{" "}
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="price-box_img">
                      <img src="resource/exter.jpg" alt="price image" />
                    </div>
                    <div className="price-box_content">
                      <div className="price-box_header">
                        <h3 className="price-box_title">Exterior</h3>
                      </div>
                      <div className="price-box_list">
                        <ul>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Hatchback - <span className="price-span">900</span>
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Sedan - <span className="price-span">
                              1000{" "}
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Compact SUV -{" "}
                            <span className="price-span">1200</span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Full Size-SUV -{" "}
                            <span className="price-span">1500 </span>{" "}
                          </li>
                          <li>
                            <i className="fa-solid fa-check"></i>
                            Luxury -<span className="price-span">
                              1800{" "}
                            </span>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="">
                  <div className="price-card style2">
                    <div className="price-card_header">
                      <h3 className="price-card_title">
                        Teflon Coating / Paint Protection Treatment
                      </h3>
                      <p className="price-card_subtitle">
                        Our Most Popular Plans
                      </p>
                    </div>
                    {/* <div className="price-card_price">
                      <span className="price">
                        $599.00<span className="package-duration">/yearly</span>{" "}
                      </span>
                    </div> */}
                    <div className="price-card_content">
                      <div className="available-list d-flex">
                        <ul className="teflon-list">
                          <li>Hatchback - </li>
                          <li>Sedan - </li>
                          <li>Compact SUV - </li>
                          <li>Full Size-SUV - </li>
                          <li>Luxury - </li>
                        </ul>
                        <ul
                          className="teflon-list"
                          style={{ listStyleType: "none" }}
                        >
                          <li>
                            <span className="price-span">2500/-</span>
                          </li>
                          <li>
                            <span className="price-span">3000/- </span>
                          </li>
                          <li>
                            <span className="price-span">3500/- </span>
                          </li>
                          <li>
                            <span className="price-span">4000/- </span>
                          </li>
                          <li>
                            <span className="price-span">4500/- </span>
                          </li>
                        </ul>
                      </div>
                      <a href="tel:+91 8527936779" className="th-btn">
                        Call Us Now
                      </a>
                    </div>
                  </div>
                  <h5
                    className="mt-3 red-note-heading"
                    style={{
                      color: "#ee3131",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    Interior Dry Cleaning Free With Every Teflon Coating and
                    Paint Protection Treatment Package
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="body-shape7">
            <img src="resource/tier_shape_2.png" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceBanner;
