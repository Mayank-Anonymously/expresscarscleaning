import CallBtn from "components/CallBtn";
import DetailsTab from "components/DetailsTab";
import Footer from "components/Footer";
import Offering2 from "components/Offering2";
import PriceBanner from "components/PriceBanner";
import Products from "components/Products";
import Services from "components/Services";
import WhatsappBtn from "components/WhatsappBtn";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import Inquery from "components/common/Modal";
import React from "react";

const service = () => {
  return (
    <>
      <NavbarSection />
      <SecondBanner mainhead="Service" image={"/resource/clean.jpg"} />
      <PriceBanner />
      <Services />
      <Offering2 />
      <Inquery />
      <Products />
      <WhatsappBtn />
      <CallBtn />
      <DetailsTab />
      <Footer />
    </>
  );
};

export default service;
