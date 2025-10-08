import React from "react";
import Bg from "../../../assets/FooterBg.webp";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";

const style = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
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
    </section>
  );
};

export default IndustrialStrength;
