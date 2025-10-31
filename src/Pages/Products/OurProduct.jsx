import React from "react";
import ShortTitle from "../../Components/ShortTitle";
import TitleText from "../../Components/TitleText";

const OurProduct = () => {
  return (
    <section className="container">
        <ShortTitle className="mx-auto">Our Products</ShortTitle>
        <TitleText colorText={'Quality Products Reliable'} text={' Solutions'} className="w-[90%] lg:w-[60%] xl:w-[50%] mx-auto"/>
   
    </section>
  );
};

export default OurProduct;
