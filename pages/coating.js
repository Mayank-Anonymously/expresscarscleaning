import CarCoating from "components/CarCoating";
import CountRow from "components/CountRow";
import Footer from "components/Footer";
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
                What is Nano Coating &amp; Graphene coating
              </h3>
              <h3 className="cardheading mt-1">Nano &amp; Graphene Coating</h3>
              <p className="mt-4">
                The easiest way is to understand s Coatings are to think of them
                as a second layer of skin, or a sacrificial layer of protection
                over your car’s clearcoat. Professional Sio2 &amp; Graphene
                Coating for all metal and fiber surfaces.Coating protects your
                vehicle from damaging contaminants. Made with High grade Sio2
                and purity nano coating lasts up to 2 years with 2 layer of
                application.
              </p>
              <p>
                The primary layer does not have the same level of scratch or
                stone chip resistance as an advanced nano ceramic coating that
                can keep its value from depreciating. Regardless of how much you
                wash the surface, these imperfections are very difficult to
                remove once they have been inflicted.
              </p>
              <p>
                It is for this reason that every vehicle needs a tough paint
                protection coating. In order to ensure the most effective
                protection for your vehicle, choosing the appropriate car
                detailing product can be challenging, requiring extensive
                research and in-depth knowledge.
              </p>
              <p>
                Therefore, after extensive research and numerous
                'trying-testing' experiments, Detailing Devils detailing studio
                developed its own line of premium nanotechch coatings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CountRow />

      <Reviews />
      <Footer />
    </>
  );
};

export default coating;
