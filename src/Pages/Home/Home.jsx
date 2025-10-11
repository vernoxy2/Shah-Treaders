import React from "react";
import Slider from "react-slick";
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
import img from "../../assets/Home/Head/Head1.webp";
import img2 from "../../assets/Home/Head/Head2.webp";

const Home = () => {
  const headSlides = [
    {
      headingText: "Reliable Valves, Pumps & Motors for Every Industry",
      subText:
        "Supplying durable, high-quality products trusted by industries nationwide",
      img: img,
      className: "lg:w-[125%] lg:-ml-32 mt-auto",
    },
    {
      headingText: "Powering Industries with Reliable Motors",
      subText:
        "High-efficiency Havells motors delivering consistent, safe, and energy-smart performance.",
      img: img2,
    },
    {
      headingText: "Powering Industries with Reliable Motors",
      subText:
        "High-efficiency Havells motors delivering consistent, safe, and energy-smart performance.",
      img: img2,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {headSlides.map((slide, index) => (
          <Head
            key={index}
            headingText={slide.headingText}
            subText={slide.subText}
            img={slide.img}
            className={slide.className || ""}
          />
        ))}
      </Slider>

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
