import React from "react";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="position-relative overflow-hidden bg-smoke space-top space-extra-bottom shape-mockup-wrap"
      data-aos="fade-in"
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            Our Happy Customers
            <span className="double-line" />
          </span>
          <h2 className="sec-title">What Customers Say</h2>
        </div>
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="slider-container">
            <div className="testi-block">
              <div className="testi-block_profile">
                <div className="testi-block_img">
                  <img src="/resource/testi_3_1.jpg" alt="Ricardo Yosef" />
                  <div className="testi-block_icon">
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="testi-block_info">
                  <h3 className="testi-block_name">Mohd Javed</h3>
                  <span className="testi-block_desig">Customer</span>
                </div>
              </div>
              <p className="testi-block_text">
                “I went on a trip and my car was all spoiled with dirt and
                strains on the car seats. It was really in horrible condition
                and I was really petrified to take it to any provider of car
                cleaning services in Delhi. Then I took it to Express Car
                Cleaning who worked effortlessly on my car and got it back in
                its original condition. I am highly satisfied and happy with
                their services.”
              </p>
            </div>
          </div>
          <div className="slider-container">
            {/* Testimonial 2 */}
            <div className="testi-block">
              <div className="testi-block_profile">
                <div className="testi-block_img-2">
                  <img src="/resource/google-review.png" alt="Google Review" />
                  {/* <div className="testi-block_icon">
                    <i className="fas fa-quote-right" />
                  </div> */}
                </div>
                <div className="testi-block_info">
                  <h3 className="testi-block_name">Karan Singh</h3>
                  <span className="testi-block_desig">Customer</span>
                </div>
              </div>
              <p className="testi-block_text">
                “I was amazed to see my car after availing the cleaning services
                from the Express Car Cleaning. It never looked so clean and
                pretty before. Every minute detail of my automobile was
                carefully cleaned and the inside environment of the car was made
                exceptionally serene. I give big thumbs up to their services and
                highly recommend it to everyone.”
              </p>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="slider-container">
            <div className="testi-block">
              <div className="testi-block_profile">
                <div className="testi-block_img-2">
                  <img
                    src="/resource/facebook-review.png"
                    alt="Facebook Review"
                  />
                  {/* <div className="testi-block_icon">
                    <i className="fas fa-quote-right" />
                  </div> */}
                </div>
                <div className="testi-block_info">
                  <h3 className="testi-block_name">Bharat Walia</h3>
                  <span className="testi-block_desig">Customer</span>
                </div>
              </div>
              <p className="testi-block_text">
                “After the tiring search and testing for getting the car
                cleaning services in Delhi I finally came across the Express Car
                Cleaning and all my efforts were fruitful. They are the team of
                professionals who work on your car and make it brand new
                effortlessly. Moreover, their prices are pocket-friendly which
                makes them the ideal choice.”
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="shape-mockup jump">
        <img src="/resource/road_shape_1.png" alt="shape" />
      </div>
    </section>
  );
};

export default Reviews;
