import React from "react";
import Head from "../../Components/Header";
import Together from "../../Components/Together";
import Footer from "../../Components/Footer";
import KnowUs from "./Sections/KnowUs";
import TailoredSolutions from "./Sections/TailoredSolutions";
import ProvenChoice from "./Sections/ProvenChoice";
import ClientsFeedback from "./Sections/ClientsFeedback";
import IndustrialStrength from "./Sections/IndustrialStrength";
import Brand from "./Sections/Brand";
import ProductProvide from "./Sections/ProductProvide";
import img from "../../assets/Home/Head/Head1.webp"

const Home = () => {
  return (
    <div className="">
      <Head
        headingText={"Reliable Valves, Pumps & Motors for Every Industry"}
        subText={
          "Supplying durable, high-quality products trusted by industries nationwide"

        }img={img}
      />
      <KnowUs />
      <Brand />
      <ProductProvide />
      <IndustrialStrength />
      <TailoredSolutions />
      <ProvenChoice />
      <ClientsFeedback />
      <Together />
      <Footer />
    </div>
  );
};

export default Home;
