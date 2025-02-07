import {  useLocation } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useEffect } from "react";
import AboutLastComp from "../AboutComps/AboutLastComp";
import ThirdComp from "../AboutComps/ThirdComp";
import SecondComp from "../AboutComps/SecondComp";
import FirstSection from "../AboutComps/FirstSection";

function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove #
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Navbar />
      {/* first section */}
     <FirstSection />
      {/* second section */}
      <SecondComp />
      {/* third section */}
      <ThirdComp />
      {/* last section */}
      <AboutLastComp />
      <Footer />
    </div>
  );
}

export default AboutPage;
