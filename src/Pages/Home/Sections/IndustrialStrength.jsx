import React from "react";
import Bg from "../../../assets/FooterBg.webp";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import in1 from "../../../assets/Home/Industries/In1.png";
import in2 from "../../../assets/Home/Industries/In2.png";
import in3 from "../../../assets/Home/Industries/In3.png";
import in4 from "../../../assets/Home/Industries/In4.png";
import in5 from "../../../assets/Home/Industries/In5.png";
import in6 from "../../../assets/Home/Industries/In6.png";
import in7 from "../../../assets/Home/Industries/In7.png";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "80px 0",
};

const Industries = [
  { id: 1, img: in1, title: "Pulp & Paper", sub: "Smooth fluid handling" },
  {
    id: 2,
    img: in2,
    title: "Distilleries",
    sub: "Robust processing solutions",
  },
  { id: 3, img: in3, title: "Power Plants", sub: "Efficient energy solutions" },
  { id: 4, img: in4, title: "Textile", sub: "Consistent manufacturing flow" },
  {
    id: 5,
    img: in5,
    title: "Engineering Industries",
    sub: "Versatile industrial applications",
  },
  { id: 6, img: in6, title: "Pharmaceutical", sub: "Precision equipment" },
  { id: 7, img: in7, title: "Chemical", sub: "Safe and durable solutions" },
  { id: 1, img: in1, title: "Pulp & Paper", sub: "Smooth fluid handling" },
  {
    id: 2,
    img: in2,
    title: "Distilleries",
    sub: "Robust processing solutions",
  },
  { id: 3, img: in3, title: "Power Plants", sub: "Efficient energy solutions" },
  { id: 4, img: in4, title: "Textile", sub: "Consistent manufacturing flow" },
  {
    id: 5,
    img: in5,
    title: "Engineering Industries",
    sub: "Versatile industrial applications",
  },
  { id: 6, img: in6, title: "Pharmaceutical", sub: "Precision equipment" },
  { id: 7, img: in7, title: "Chemical", sub: "Safe and durable solutions" },
];

const IndustrialStrength = () => {
  return (
    <section style={style} className="text-center">
      <ShortTitle className="mx-auto">Industrial Strength</ShortTitle>
      <TitleText colorText={"Industries"} text={"We Serve"} brclass="hidden"/>
      <p className="text-center md:w-[36%] w-full mx-auto mb-10">
        Our valves, pumps, and motors deliver reliable performance across key
        industries
        <span>
          <BottomLine className="mx-auto mt-2" />
        </span>
      </p>

      {/* Infinite Auto-Scrolling Carousel */}
      <div className="overflow-hidden relative container px-0 ">
        <div className="flex animate-slide gap-6 w-max">
          {Industries.concat(Industries).map((industry, index) => (
            <div key={index} className="flex-shrink-0 relative group">
              {/* Image */}
              <img
                src={industry.img}
                alt={industry.title}
                className="w-full  object-cover rounded-lg"
              />
              {/* Text overlay */}
              <div className="absolute bottom-2 left-0 w-full group-hover:-translate-y-2 duration-500 text-white rounded-b-lg text-start p-5">
                <h3 className="text-2xl font-bold font-lexend text-white">{industry.title}</h3>
                <p className="text-sm text-white">{industry.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialStrength;
