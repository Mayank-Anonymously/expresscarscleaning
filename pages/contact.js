import ContactForm from "components/ContactForm";
import Footer from "components/Footer";
import Maps from "components/Maps";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import React from "react";

const contact = () => {
  return (
    <>
      <NavbarSection />
      <SecondBanner mainhead="Contact Us" image={"/resource/clean.jpg"} />
      <ContactForm />
      <Maps />
      <Footer />
    </>
  );
};

export default contact;
