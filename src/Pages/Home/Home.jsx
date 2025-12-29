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
import img1 from "../../assets/Home/Head/Head1.webp";
import img2 from "../../assets/Home/Head/Head2.png";
import img3 from "../../assets/Home/Head/Head3.webp";
import img4 from "../../assets/Home/Head/Head4.png";
import img5 from "../../assets/Home/Head/Head5.png";
import img6 from "../../assets/Home/Head/Head6.webp";
// import img7 from "../../assets/Home/Head/Head7.webp";
import Havells from "../../assets/Home/Head/Havells.svg";
import Wilo from "../../assets/Home/Head/Wilo.svg";
import Sandpiper from "../../assets/Home/Head/Sandpiper.svg";
import Crane from "../../assets/Home/Head/Crane.svg";
import Saunders from "../../assets/Home/Head/Saunders.svg";
import Cognito from "../../assets/Home/Head/Cognito.svg";

const Home = () => {
  // Head Slider Data
  const headSlides = [
    {
      headingText: (
        <>
          A proven <br />legacy across <br />industries
        </>
      ),
      subText:
        "Supplying durable, high-quality products trusted by industries nationwide",
      img: img1,
      logo: Crane,
      className: "lg:w-[100%] lg:-ml-20 mt-auto ",
    },

    {
      headingText: (<>Comprehensive <br /> Flow Control <br /> Range</>),
      subText:
        "Specialized valve designs supporting controlled flow, contamination control, and stable operation.",
      img: img2,
      logo: Saunders,
      className: "lg:w-[110%] lg:-ml-20 mt-auto ",
    },

    {
      headingText: (
        <>
          Precision Pumps <br /> for Every <br /> Application
        </>
      ),
      subText:
        "Optimized for efficiency and reliability, our pumps keep your operations running seamlessly.",
      img: img3,
      logo: Wilo,
      className: "h-[110%]   ",
    },
    {
      headingText: (
        <>
          Precision <br /> Engineering for the <br className="hidden xl:" /> Toughest Fluids
        </>
      ),
      subText:
        "Built for corrosive, abrasive, high-viscosity, and shear-sensitive fluids in harsh conditions",
      img: img4,
      logo: Cognito,
      className: "h-[110%]   ",
    },
    {
      headingText: (
        <>
          Pumping <br /> Reliability into <br /> Every Industry
        </>
      ),
      subText:
        "Engineered for reliability, designed for performance—keeping your business flowing without interruption.",
      img: img5,
      logo: Sandpiper,
      className: "lg:w-[125%] lg:-ml-32 ",
    },

    {
      headingText: (
        <>
          Powering <br /> Industries with <br /> Reliable Motors
        </>
      ),
      subText:
        "High-efficiency Havells motors delivering consistent, safe, and energy-smart performance.",
      img: img6,
      logo: Havells,
      className: " ",
    },
    // {
    //   headingText:"Efficient Pumping Solutions for Every Industry",
    //   subText:
    //     "Reliable pumps for every application, ensuring smooth fluid handling with trusted global brands",
    //   img: img7,
    //   className: " ",
    // },
  ];

  // Head Slider Settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="overflow-hidden ">
      <div data-aos="fade-up" className="h-fit">
        <Slider {...settings}>
          {headSlides.map((slide, index) => (
            <Head
              key={index}
              headingText={slide.headingText}
              subText={slide.subText}
              img={slide.img}
              className={slide.className || "overflow-hidden "}
              logo={slide.logo}
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
      {/* <ClientsFeedback /> */}
      {/* <Together /> */}
      <Footer>
        <Together />
      </Footer>
    </div>
  );
};

export default Home;
