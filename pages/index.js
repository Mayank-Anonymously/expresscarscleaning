// import LandingPage from "./Home/index";
// import Seo from "../components/Common/Seo";
import NavbarSection from "components/_home/NavbarSection";
import Homebanner from "components/_home/HomeBanner";
import Services from "components/Services";
import Pricing from "components/Pricing";
// import DetailTabs from "components/DetailTabs";
import DetailsTab from "components/DetailsTab";
import Footer from "components/Footer";
import Service2 from "components/Service2";
import BasePrice from "components/BasePrice";
import BgCard from "components/BgCard";
import PriceBanner from "components/PriceBanner";
import Reviews from "components/Reviews";
import WhatsappBtn from "components/WhatsappBtn";
import CallBtn from "components/CallBtn";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <Homebanner />
      <Services />
      <PriceBanner />

      <BgCard />
      <Reviews />
      <DetailsTab />
      <WhatsappBtn />
      <CallBtn />
      <Footer />
    </>
  );
}
