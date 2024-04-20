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
                  <div className="widget-heading">
                    <h4 className="widget-title">About Us</h4>
                  </div>
                  <div className="widget-contet">
                    <img
                      src="images/car-logo.png"
                      className="footer-logo"
                      alt=""
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra
                    </p>
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
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#technology">Features</a>
                      </li>
                      <li>
                        <a href="#color">variations</a>
                      </li>
                      <li>
                        <a href="#engine">Specials</a>
                      </li>
                      <li>
                        <a href="#accessories">Accessories</a>
                      </li>
                      <li>
                        <a href="#book-ride">Book Ride</a>
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
                        <a href="%2b01(123)%20456%207890.html">
                          +01(123) 456 7890
                        </a>
                      </span>
                    </div>
                    <div className="widget-contact-info">
                      <i className="fas fa-envelope-open" />
                      <h3>Email</h3>
                      <span>
                        <a href="mailtp:info@wheels.com">info@wheels.com</a>
                      </span>
                    </div>
                    <div className="widget-contact-info">
                      <i className="fas fa-map-marker-alt" />
                      <h3>Address</h3>
                      <span>
                        3892 Fincham Road, <br />
                        Los Angeles, CA 90017
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
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
