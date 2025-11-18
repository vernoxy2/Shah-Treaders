import React from "react";
import Together from "../../Components/Together";
import Certifications from "./Sections/Certifications";
import Guiding_Values from "./Sections/Guiding_Values";
import Delivering from "./Sections/Delivering";
import Core_Values from "./Sections/Core_Values";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/About/HeadImg.webp";
import Footer from "../../Components/Footer";
import BrandScroll from "./Sections/BrandsCROLL";

const About = () => {
  return (
    <div className="overflow-hidden">
      <SubHeader Head={Head} text={"About Us"} scrollTarget={"#Delivering"} />
      <Delivering />
      <Core_Values />
      <Guiding_Values />
      <BrandScroll/>
      <Certifications />
      {/* <Together/> */}
      <Footer>
        <Together />
      </Footer>
    </div>
  );
};

export default About;
