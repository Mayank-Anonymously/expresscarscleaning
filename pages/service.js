import DetailsTab from "components/DetailsTab";
import Footer from "components/Footer";
import PriceBanner from "components/PriceBanner";
import Services from "components/Services";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import React from "react";

const service = () => {
  return (
    <>
      <NavbarSection />
      <SecondBanner mainhead="Service" image={"/resource/clean.jpg"} />
      <Services />
      <PriceBanner />

      <DetailsTab />
      <Footer />
    </>
  );
};

export default service;
