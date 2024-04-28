import BikeBanner from "components/BikeBanner";
import CarCoating from "components/CarCoating";
import CoatingTable from "components/CoatingTable";
import CountRow from "components/CountRow";
import Footer from "components/Footer";
import ProtectionBanner from "components/ProtectionBanner";
import Reviews from "components/Reviews";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import React from "react";

const coating = () => {
  return (
    <>
      <NavbarSection />
      <SecondBanner mainhead="Car Coating" image={"/resource/clean.jpg"} />
      <CarCoating />
      <section className="coatingcontent-box p-0 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-5" data-aos="fade-up">
              <img
                src="/resource/1.jpeg"
                className="img-fluid"
                alt="nano coating image"
              />
            </div>
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="cardheading mt-2">
                Why Is Ceramic Coating Different From Wax & Teflon Coating
              </h3>

              <p className="mt-4">
                Durability: Ceramic coatings last much longer than wax & Teflon
                Coating , which may require reapplication every few months.
              </p>
              <p>
                Protection: Ceramic coatings provide better protection against
                scratches, UV rays, and chemicals compared to wax & Teflon
                Coating
              </p>
              <p>
                Maintenance: They make cleaning easier due to their hydrophobic
                properties, whereas wax & Teflon Coating does not repel water as
                effectively
              </p>
              <b>
                Overall, nano ceramic coating is a popular choice for car
                enthusiasts and owners who want long-lasting protection and
                easier maintenance for their vehicles.
              </b>
            </div>
          </div>
        </div>
      </section>
      <ProtectionBanner />
      <CoatingTable />
      <BikeBanner />
      <CountRow />

      <Reviews />
      <Footer />
    </>
  );
};

export default coating;
