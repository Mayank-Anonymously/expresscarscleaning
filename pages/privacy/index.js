import React from "react";
import NavbarSection from "components/_home/NavbarSection";
import SecondBanner from "components/_home/SecondBanner";
import Footer from "components/Footer";
import WhatsappBtn from "components/WhatsappBtn";
import CallBtn from "components/CallBtn";
const index = () => {
  return (
    <div>
      <NavbarSection />
      <SecondBanner
        mainhead="Privacy and Policy"
        image={"/resource/clean.jpg"}
      />
      <section className="car-coating p-0">
        <div className="container">
          <div className="row">
            <div className="mt-5" data-aos="fade-up" data-aos-delay="100">
              <h3>1. OVERVIEW:</h3>
              We at our company take great pride in safeguarding your privacy
              because it is our duty. The personal information we collect
              through our website and the methods used to obtain it are
              described in our privacy policy. The terms "we," "our," and "us"
              simply refer to thedetailingmafia.com, and "user" or "you" denote
              visitors, customers, and clients of our clients. The definition of
              "personal information" is defined as any information you provide
              to us that identifies you specifically and includes details such
              as your name, phone number, address, email address, and many other
              details. This website contains all the information you need to
              know about our work, goods, and procedures, as well as the reasons
              you should use our services and put your trust in us to meet your
              service needs.
              <h3>2. COLLECTED INFORMATION:</h3>
              Only the personal information that you voluntarily provide to us
              is collected by our website. This information includes: • First
              and last name, email address, contact number, and newsletter
              subscription information; • Contact information is needed to get
              in touch with you for additional references or to get reviews or
              feedback if you have ever used our services. We need your reviews
              or feedback in order to improve our services going forward.The
              data provided is used to handle transactions, send out periodic
              emails, and communicate with our services. Clients who will have a
              direct impact on our ability to repair and develop new strategies
              for improving the services we provide. We occasionally give our
              third-party resource access to some of your personal information
              so they can help us run our website. These third parties are
              reliable and subject to specific company guidelines and policies.
              We go above and beyond to safeguard your personal information
              because it is a priceless gem to us.
              <h3>3. ACTIVITY PERFORMED FROM OUR END:</h3>
              We may keep a record of your personal information for site-related
              purposes, including the searches you conduct, your IP address, the
              pages you view, the URLs you request and refer to, and timestamp
              information. We even use these kinds of details to do statistical
              analyses of user behavior to gauge your interest in our services
              and your propensity to use us for any necessary services.
              <h4>4. COOKIES:</h4>
              We may send cookies to your system in order to uniquely identify
              your browser and browsing style. We may collect information about
              you using both session and persistent cookies, but you have the
              option to accept or reject cookies using your browser's settings.
            </div>
          </div>
        </div>
      </section>
      <WhatsappBtn />
      <CallBtn />
      <Footer />
    </div>
  );
};

export default index;
