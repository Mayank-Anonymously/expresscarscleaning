import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-widget-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget">
                  <div className="widget-contet">
                    <img
                      src="/resource/footer_logo.png"
                      className="footer-logo"
                      alt=""
                    />
                    <p>
                      A wonderful serenity taken possession into entire soul
                      like to these sweet of tence this spot which was the main
                      part created the bliss often souls like mine.
                    </p>
                  </div>
                  <div className="widget-heading">
                    <h4 className="widget-title">Service Hours</h4>
                    <p>Monday - Sunday: 8:00 am - 6:30 pm</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget">
                  <div className="widget-heading">
                    <h4 className="widget-title">Useful Links</h4>
                  </div>
                  <div className="widget-contet footer-menu">
                    <ul className="menu">
                      <li>
                        <Link href="/service">Service</Link>
                      </li>
                      <li>
                        <Link href="/coating">Car Coating</Link>
                      </li>
                      <li>
                        <Link href="/privacy">Privacy and Policy</Link>
                      </li>
                      <li>
                        <Link href="/terms">Terms and Conditions</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget">
                  <div className="widget-heading">
                    <h4 className="widget-title">Contact Info</h4>
                  </div>
                  <div className="widget-contet contact-info">
                    <div className="widget-contact-info">
                      <i className="fas fa-phone" />
                      <h3>Phone</h3>
                      <span>
                        <a href="tel:+91 8527936779">+91 8527936779</a>
                      </span>
                    </div>
                    {/* <div className="widget-contact-info">
                      <i className="fas fa-envelope-open" />
                      <h3>Email</h3>
                      <span>
                        <a href="mailtp:info@wheels.com">info@wheels.com</a>
                      </span>
                    </div> */}
                    <div className="widget-contact-info">
                      <i className="fas fa-map-marker-alt" />
                      <h3>Address</h3>
                      <span>
                        Shop No.1 Snatan Dharam Mandir East laxmi nagar market
                        Delhi 110092
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="widget">
                  <div className="widget-heading">
                    <h4 className="widget-title">Subscribe</h4>
                  </div>
                  <div className="widget-contet">
                    <div className="newsletter-box">
                      <form method="post">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Email Address"
                          required=""
                          autoComplete="off"
                          className="form-control"
                        />
                        <button type="submit" className="signup-btn">
                          Sign Up
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget-heading">
                    <h4 className="widget-title">Follow Us</h4>
                  </div>
                  <div className="widget-contet">
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/Expresscarcleanings"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/express_cars_cleaning?igsh=MWt5eWp3b2I2YjMxYQ=="
                          >
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.youtube.com/@expresscars2018"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          <div className="container">
            <div className="copyright-text">
              © 2024 All Rights Reserved
              <a href=""> Express Cars Cleaning</a>.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
