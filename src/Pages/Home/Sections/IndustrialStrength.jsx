import React from "react";
import Bg from "../../../assets/FooterBg.webp";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import in1 from "../../../assets/Home/Industries/In1.png"

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Industries = [
  {
    id:1,
    img: in1,
    title: "Pulp & Paper",
    sub: "Smooth fluid handling",
  },
  {
    id:2,
    img: in1,
    title: "Distilleries",
    sub: "Robust processing solutions ",
  },
  {
    id:3,
    img: in1,
    title: "Power Plants",
    sub: " Efficient energy solutions",
  },
  {
    id:4,
    img: in1,
    title: "Textile",
    sub: "Consistent manufacturing flow",
  },
  {
    id:5,
    img: in1,
    title: "Engineering Industries",
    sub: "Versatile industrial applications",
  },
  {
    id:6,
    img: in1,
    title: "Pharmaceutical",
    sub: "Precision equipment",
  },
  {
    id:7,
    img: in1,
    title: "Chemical",
    sub: "Safe and durable solutions",
  }
]


const IndustrialStrength = () => {
  return (
    <section style={style}>
      <ShortTitle className="mx-auto">Industrial Strength</ShortTitle>
      <TitleText colorText={"Industries"} text={"We Serve"} />
      <p className="text-center w-[36%] mx-auto ">
        Our valves, pumps, and motors deliver reliable performance across key
        industries
        <span><BottomLine className="mx-auto mt-2" /></span>
      </p>
      <div>

      </div>
    </section>
  );
};

export default IndustrialStrength;
