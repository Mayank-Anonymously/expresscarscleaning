import React from "react";

const Pricing = () => {
  return (
    <>
      {/* <section className="price price--area pt-135 pb-100">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="section-title text-center mb-50 animation-style2">
                <span className="section-title__sub primary-color mb-10">
                  Our Pricing
                </span>
                <h2 className="section-title__main">
                  Find the Right Plan for You.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-40">
              <div className="price-block text-center">
                <div className="price-block__inner">
                  <div className="price-block__header">
                    <div className="price-block__icon">
                      <img src="assets/img/icons/price-icon1.png" alt="icon" />
                    </div>
                    <span className="price-block__highlight">
                      Simple Website
                    </span>
                    <h3 className="price-block__title">Professional</h3>
                  </div>
                  <div className="price-block__body">
                    <span className="price-block__price">$58.00</span>
                    <div className="price-block__features">
                      <ul>
                        <li>5 Pages Responsive Website</li>
                        <li>5 PPC Cam paigns</li>
                        <li>10 SEO Keywords</li>
                        <li>5 Facebook Camplaigns</li>
                        <li>2 Video Camplaigns</li>
                        <li>Responsive Design Website</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="price-block__footer">
                  <a href="price.html" className="btn btn--price">
                    Started Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-40">
              <div className="price-block price-block--recommend text-center">
                <div className="price-block__inner">
                  <div className="price-block__header">
                    <div className="price-block__icon">
                      <img src="assets/img/icons/price-icon2.png" alt="icon" />
                    </div>
                    <span className="price-block__highlight">1 Web Site</span>
                    <h3 className="price-block__title">Standard</h3>
                  </div>
                  <div className="price-block__body">
                    <span className="price-block__price text-white">
                      $89.00
                    </span>
                    <div className="price-block__features">
                      <ul>
                        <li>5 Pages Responsive Website</li>
                        <li>5 PPC Cam paigns</li>
                        <li>10 SEO Keywords</li>
                        <li>5 Facebook Camplaigns</li>
                        <li>2 Video Camplaigns</li>
                        <li>Responsive Design Website</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="price-block__footer">
                  <a
                    href="price.html"
                    className="btn btn--price btn--price-active"
                  >
                    Started Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-40">
              <div className="price-block text-center">
                <div className="price-block__inner">
                  <div className="price-block__header">
                    <div className="price-block__icon">
                      <img src="assets/img/icons/price-icon3.png" alt="icon" />
                    </div>
                    <span className="price-block__highlight">Many More</span>
                    <h3 className="price-block__title">Ultimate</h3>
                  </div>
                  <div className="price-block__body">
                    <span className="price-block__price">$99.00</span>
                    <div className="price-block__features">
                      <ul>
                        <li>5 Pages Responsive Website</li>
                        <li>5 PPC Cam paigns</li>
                        <li>10 SEO Keywords</li>
                        <li>5 Facebook Camplaigns</li>
                        <li>2 Video Camplaigns</li>
                        <li>Responsive Design Website</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="price-block__footer">
                  <a href="price.html" className="btn btn--price">
                    Started Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container">
        <div className="container-card">
          {/* Card 1 */}
          <div className="card">
            <div
              className="card__info"
              style={{
                backgroundImage:
                  "url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/xxXgjem/images/img1.jpg)",
              }}
            >
              <h2 className="card__name">BASIC</h2>
              <p className="card__price" style={{ color: "var(--color05)" }}>
                $19.99 <span className="card__priceSpan">/month</span>
              </p>
            </div>
            <div
              className="card__content"
              style={{ borderColor: "var(--color05)" }}
            >
              <div className="card__rows">
                <p className="card__row">5GB Disk Space</p>
                <p className="card__row">10 Domain Names</p>
                <p className="card__row">5 E-Mail Address</p>
                <p className="card__row">50GB Monthly Bandwidth</p>
                <p className="card__row">Fully Support</p>
              </div>
              <a
                href="#emptyLink"
                className="card__link"
                style={{ backgroundColor: "var(--color02)" }}
              >
                PURCHASE
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div
              className="card__info"
              style={{
                backgroundImage:
                  "url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/xxXgjem/images/img2.jpg)",
              }}
            >
              <h2 className="card__name">STANDARD</h2>
              <p className="card__price" style={{ color: "var(--color06)" }}>
                $29.99 <span className="card__priceSpan">/month</span>
              </p>
            </div>
            <div
              className="card__content"
              style={{ borderColor: "var(--color06)" }}
            >
              <div className="card__rows">
                <p className="card__row">10GB Disk Space</p>
                <p className="card__row">20 Domain Names</p>
                <p className="card__row">10 E-Mail Address</p>
                <p className="card__row">100GB Monthly Bandwidth</p>
                <p className="card__row">Fully Support</p>
              </div>
              <a
                href="#emptyLink"
                className="card__link"
                style={{ backgroundColor: "var(--color06)" }}
              >
                PURCHASE
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div
              className="card__info"
              style={{
                backgroundImage:
                  "url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/xxXgjem/images/img3.jpg)",
              }}
            >
              <h2 className="card__name">PREMIUM</h2>
              <p className="card__price" style={{ color: "var(--color12)" }}>
                $49.99 <span className="card__priceSpan">/month</span>
              </p>
            </div>
            <div
              className="card__content"
              style={{ borderColor: "var(--color07)" }}
            >
              <div className="card__rows">
                <p className="card__row">50GB Disk Space</p>
                <p className="card__row">50 Domain Names</p>
                <p className="card__row">20 E-Mail Address</p>
                <p className="card__row">300GB Monthly Bandwidth</p>
                <p className="card__row">Fully Support</p>
              </div>
              <a
                href="#emptyLink"
                className="card__link"
                style={{ backgroundColor: "var(--color04)" }}
              >
                PURCHASE
              </a>
            </div>
          </div>
          <div className="card">
            <div
              className="card__info"
              style={{
                backgroundImage:
                  "url(https://raw.githubusercontent.com/mohammadjarabah681/codepen-assets/main/pens/xxXgjem/images/img3.jpg)",
              }}
            >
              <h2 className="card__name">PREMIUM</h2>
              <p className="card__price" style={{ color: "var(--color12)" }}>
                $49.99 <span className="card__priceSpan">/month</span>
              </p>
            </div>
            <div
              className="card__content"
              style={{ borderColor: "var(--color07)" }}
            >
              <div className="card__rows">
                <p className="card__row">50GB Disk Space</p>
                <p className="card__row">50 Domain Names</p>
                <p className="card__row">20 E-Mail Address</p>
                <p className="card__row">300GB Monthly Bandwidth</p>
                <p className="card__row">Fully Support</p>
              </div>
              <a
                href="#emptyLink"
                className="card__link"
                style={{ backgroundColor: "var(--color04)" }}
              >
                PURCHASE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
