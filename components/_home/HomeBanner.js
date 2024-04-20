import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Homebanner = () => {
  const [showLetters, setShowLetters] = useState(false);

  useEffect(() => {
    // Use setTimeout to gradually reveal each letter after a delay
    const timeout = setTimeout(() => {
      setShowLetters(true);
    }, 1000); // Adjust this delay based on your preference

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  const headingText = "EXPRESS CAR CLEANING";
  return (
    <>
      <div
        className="container-fluid homebanner"
        style={{
          backgroundImage: `url("/resource/dark-clean.jpg")`,
          backgroundBlendMode: "multiply",
          backgroundColor: "#00000045",
          height: "120vh",
        }}
        roboto
      >
        <div className="letter-by-letter-container">
          {/* Split the heading text by character (including spaces) */}
          {[...headingText].map((character, index) => (
            <h1
              key={index}
              className={`letter ${showLetters ? "fade-in" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {character === " " ? "\u00A0" : character}{" "}
              {/* Use non-breaking space for rendering spaces */}
            </h1>
          ))}
        </div>
        <h1
          className="banner-display"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          style={{ fontFamily: "Dela Gothic one" }}
        >
          EXPRESS CAR CLEANING
        </h1>
        <h1 data-aos="fade-up" className="type-heading">
          DETAILING SERVICE
        </h1>
        {/* <h5>UP TO 40% OFF</h5> */}
        <div data-aos="fade-in" className="redirect-btn">
          <Link href="/shop">QUICK ENQUIRY</Link>
        </div>
        <div className="scroll-icon">
          <a href="#pricebanner">
            <div class="mouse-icon">
              <div class="wheel"></div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Homebanner;
