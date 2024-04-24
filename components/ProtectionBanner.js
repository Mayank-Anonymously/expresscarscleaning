import React from "react";

const ProtectionBanner = () => {
  return (
    <>
      <section
        className="position-relative overflow-hidden bg-smoke space-top space-extra-bottom shape-mockup-wrap"
        data-aos="fade-in"
      >
        <div className="container text-center">
          <img style={{ width: "100%" }} src="/resource/protection.jpeg" />
        </div>
        {/* <div className="shape-mockup jump">
          <img src="/resource/road_shape_1.png" alt="shape" />
        </div> */}
      </section>
    </>
  );
};

export default ProtectionBanner;
