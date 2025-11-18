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
  import img3 from "../../assets/Home/Head/Head3.webp";
  import img4 from "../../assets/Home/Head/Head4.webp";
  import img5 from "../../assets/Home/Head/Head5.webp";

  const Home = () => {
    // Head Slider Data
    const headSlides = [
      {
        headingText: "Reliable Valves, Pumps & Motors for Every Industry",
        subText:
          "Supplying durable, high-quality products trusted by industries nationwide",
        img: img,
        className: "lg:w-[110%] lg:-ml-20 mt-auto ",
      },
      {
        headingText: "Powering Industries with Reliable Motors",
        subText:
          "High-efficiency Havells motors delivering consistent, safe, and energy-smart performance.",
        img: img2,
      },
      {
        headingText: "Efficient Pumping Solutions for Every Industry",
        subText:
          "Reliable pumps for every application, ensuring smooth fluid handling with trusted global brands",
        img: img3, className: " ",
      },
      {
        headingText: "Precision Valves for Every Industrial Need",
        subText:
          "Durable flow control solutions from leading global brands, built for reliability and performance",
        img: img4, className: "lg:w-[125%] lg:-ml-32 ",
      },
      {
        headingText: "Precision Valves for Every Industrial Need",
        subText:
          "Durable flow control solutions from leading global brands, built for reliability and performance",
        img: img5, className: "lg:w-[125%] lg:-ml-32 ",
      }

    ];

    // Head Slider Settings
    const settings = {
      // dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      pauseOnHover: false,
    };

    return (
      <div  className="overflow-hidden">
        <div data-aos="fade-up">
          <Slider  {...settings}>
          {headSlides.map((slide, index) => (
            <Head
              key={index}
              headingText={slide.headingText}
              subText={slide.subText}
              img={slide.img}
              className={slide.className || "overflow-hidden"}
            />
          ))}
        </Slider>
        </div>

        <KnowUs />
        <Brand />
        <ProductProvide />
        <IndustrialStrength />
        <TailoredSolutions />
        <ProvenChoice />
        <ClientsFeedback />
        {/* <Together /> */}
        <Footer><Together/></Footer>
      </div>
    );
  };

  export default Home;

  