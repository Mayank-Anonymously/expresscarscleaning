import React from "react";

const CarCoating = () => {
  return (
    <>
      <section className="car-coating p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-5 col-12 mt-5" data-aos="fade-up">
              <img src="/resource/nano1.png" className="w-100" alt="car-wash" />
            </div>
            <div
              className="col-lg-7 col-xl-7 col-12 mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <h2>Nano Ceremic Coating &amp; Graphene Coating</h2>
                <p>
                  <b>What is Nano Ceramic Coating ?</b>
                </p>
                <p>
                  The easiest way is to understand Ceramics Coatings are to
                  think of them as a second layer of skin, or a sacrificial
                  layer of protection over your car’s clearcoat.
                </p>
                <p>
                  This coating makes up the hardest paint coating in the market
                  today and provides the ultra-protection to your vehicle. One
                  additional and not so considered benefit of this service is
                  that it preserves the original factory paint from damages.
                  Moreover, in case any surface scratches happen in the coating
                  they can be seamlessly removed with light polishing and in no
                  way weaken the integrity of the original clear coat. With the
                  services offered by us your car remain young and pretty as the
                  paint is prevented from fading or aging due to the UV
                  protection in the glass coating provided.
                </p>
                <h4>Inclusions:</h4>
                <ul className="pl-3">
                  <li>
                    The surface of your car becomes super hydrophobic and water
                    resistant.
                  </li>
                  <li>
                    One of the biggest worry of scratch is taken away by this
                    coating.
                  </li>
                  <li>
                    High gloss is restored making it appear like a novel car.
                  </li>
                  <li>
                    The car becomes the UV Resistant and Thermal Resistant.
                  </li>
                </ul>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=918527936779"
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
      </section>
    </>
  );
};

export default CarCoating;
