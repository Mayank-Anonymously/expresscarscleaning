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
                <h2>Nano Ceramic Coating & Graphene Coating</h2>
                <p>
                  <b>What Is Coating ?</b>
                </p>
                <p>
                  Nano ceramic coating & Graphene Coating, also known as
                  Graphene coating or nanocoating, is a liquid polymer that is
                  applied to the exterior of a vehicle to protect it from
                  external damage. This coating creates a chemical bonding with
                  the vehicle's factory paint, creating a layer of protection
                  that can last for several years.
                </p>
                <b>Benefit For Ceramic & Graphene Coating</b>
                <p>
                  Scratch Resistance: Nano ceramic coatings & Graphene Coating
                  are harder than the clear coat of the car, so they can resist
                  scratches from small debris and minor abrasions
                </p>
                <p>
                  Chemical Resistance: They provide a barrier against chemicals
                  like bird droppings, tree sap, and acidic substances, which
                  can damage the paint.
                </p>
                <p>
                  UV Protection: Ceramic coatings can also protect the paint
                  from the sun's harmful ultraviolet rays, preventing paint
                  oxidation and fading.
                </p>
                <p>
                  Hydrophobic Properties: Nano coatings are hydrophobic, meaning
                  they repel water. This makes it easier to clean dirt and grime
                  off the car, as water beads up and rolls off the surface.
                </p>
                <p>
                  Ease of Cleaning: Since dirt and grime have a harder time
                  sticking to the surface, regular washing becomes more
                  effective and less time-consuming.
                </p>
                <p>
                  Enhanced Gloss: Ceramic coatings can enhance the depth and
                  gloss of the paint, giving the car a "wet" look even when dry.
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
      </section>
    </>
  );
};

export default CarCoating;
