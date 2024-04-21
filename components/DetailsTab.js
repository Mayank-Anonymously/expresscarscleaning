import React, { useState } from "react";

const DetailsTab = () => {
  const [activeTab, setActiveTab] = useState("highlights"); // State to manage active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId); // Update active tab based on clicked tab ID
  };

  return (
    <>
      <section id="technology" className="technology-section gray-bg">
        <div className="container ">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <div className="heading-wrapper">
                <h2
                  className="large-heading text-uppercase"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Our Process
                </h2>
              </div>
            </div>
            <div className="col-md-12 mt-5 mb-5">
              <div className="tab-section vertical-tab m-top-30">
                {/* Nav tabs */}
                <div className="select-filter">Highlights</div>
                <ul
                  className="nav nav-tabs text-uppercase"
                  role="tablist"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        activeTab === "highlights" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("highlights")}
                    >
                      Full Deep Cleaning
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        activeTab === "exterior" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("exterior")}
                    >
                      Full Interior Cleaning
                    </span>
                  </li>
                  <li className="nav-item">
                    <span
                      className={`nav-link ${
                        activeTab === "interior" ? "active" : ""
                      }`}
                      onClick={() => handleTabClick("interior")}
                    >
                      Teflon Coating
                    </span>
                  </li>
                </ul>
                {/* Tab panes */}
                <div
                  className="tab-content"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className={`tab-pane ${
                      activeTab === "highlights" ? "active" : ""
                    }`}
                    id="highlights"
                    role="tabpanel"
                  >
                    {/* Content for Highlights tab */}
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5 col-xl-5 col-12">
                          <img
                            src="/resource/exterior.jpg"
                            className="w-100"
                            style={{ borderRadius: "8px" }}
                            alt="car-wash"
                          />
                        </div>
                        <div className="col-lg-7 col-xl-7 col-12">
                          <div>
                            <h2>Full Car Deep Cleaning - Complete Package</h2>
                            <h4>Inclusions:</h4>
                            <ul className="pl-3 no-list-style">
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Full Interior Sanitizing{" "}
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Seats, doors, carpet &amp; mats, roof, trunk
                                Shampo, and Cleaning
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Full Vaccum Cleaning
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Dashboard Clean, and Polishing
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />{" "}
                                Exterior Shampoo Washing{" "}
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Exterior Rubbing and Polishing with Buffing
                                Machine
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />{" "}
                                Tyers Cleaning, and Polishing
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Windshield, Window Cleaning, and Polishing
                              </li>
                              <li>
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Remove the scratches, bird Poop, and spots of
                                leaf shreds through rubbing{" "}
                              </li>
                            </ul>
                            <a
                              target="_blank"
                              href="https://wa.me/918527936779?text=Hi%20There!"
                            >
                              <button className="whatsapp-btn">
                                <img
                                  style={{ width: "30px" }}
                                  src="/resource/whatsapp.webp"
                                />{" "}
                                Whatsapp Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "exterior" ? "active" : ""
                    }`}
                    id="exterior"
                    role="tabpanel"
                  >
                    {/* Content for Exterior tab */}
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5 col-xl-5 col-12">
                          <img
                            src="/resource/interior.jpg"
                            style={{ borderRadius: "8px" }}
                            className="w-100"
                            alt="car-wash"
                          />
                        </div>
                        <div className="col-lg-7 col-xl-7 col-12">
                          <div>
                            <h2>Full Interior Cleaning</h2>
                            <h4>Inclusions:</h4>
                            <ul className="pl-3 no-list-style">
                              <li>
                                {" "}
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Full Interior Sanitizing{" "}
                              </li>
                              <li>
                                {" "}
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Seats, doors, carpet &amp; mats, roof, trunk
                                Shampo, and Cleaning
                              </li>
                              <li>
                                {" "}
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Full Vaccum Cleaning
                              </li>
                              <li>
                                {" "}
                                <img
                                  className="checkmark-icon"
                                  src="resource\checkmark2.png"
                                  alt="check"
                                />
                                Dashboard Clean, and Polishing
                              </li>
                            </ul>
                            <h4>Inclusions:</h4>
                            <ul className="pl-3">
                              <li>Hatchback - ₹749/-</li>
                              <li>Sedan - ₹799/-</li>
                              <li>SUV - ₹899/-</li>
                              <li>Luxury - ₹999/-</li>
                            </ul>
                            <a
                              target="_blank"
                              href="https://wa.me/918527936779?text=Hi%20There!"
                            >
                              <button className="whatsapp-btn">
                                <img
                                  style={{ width: "30px" }}
                                  src="/resource/whatsapp.webp"
                                />{" "}
                                Whatsapp Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane ${
                      activeTab === "interior" ? "active" : ""
                    }`}
                    id="interior"
                    role="tabpanel"
                  >
                    {/* Content for Interior tab */}
                    <div className="row">
                      <div className="col-lg-5 col-xl-5 col-12">
                        <iframe
                          width="100%"
                          height="auto"
                          style={{ borderRadius: "8px" }}
                          src="https://www.youtube.com/embed/qezP_Q-IJ04"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen=""
                        />
                      </div>
                      <div className="col-lg-7 col-xl-7 col-12">
                        <div>
                          <h2>Teflon Coating</h2>
                          <p>
                            Teflon Coating is a Paint Protection Coating to
                            enhance Paint Life, adds as a protective layer with
                            more Gloss and Shine.
                          </p>
                          <p>
                            Car Paint will begin to shine after Teflon and even
                            minor scratches will also be removed. However, the
                            effect last shorter i.e period of 5-6 Month and will
                            continue to come down
                          </p>
                          <p>
                            This process of Teflon coating finally comes to an
                            end, this is the time to see the tiny bottle of
                            prized liquid, Teflon. The smell of this Teflon
                            which was just prepared is particularly pungent when
                            it is applied onto the paint. However, the pungent
                            smell of this liquid also disappears once the paint
                            is dried. To apply this liquid onto all the painted
                            areas over the car, a soft and clean cotton cloth is
                            put to use.{" "}
                          </p>
                          <a
                            target="_blank"
                            href="https://wa.me/918527936779?text=Hi%20There!"
                          >
                            <button className="whatsapp-btn">
                              <img
                                style={{ width: "30px" }}
                                src="/resource/whatsapp.webp"
                              />{" "}
                              Whatsapp Now
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsTab;
