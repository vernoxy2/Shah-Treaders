import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import Weare1 from "../../../assets/Home/Weare1.webp";
import comma from "../../../assets/Home/Comaa.svg";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const style = {
  backgroundImage: `url(${Weare1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const KnowUs = () => {
  return (
    <section>
      <ShortTitle className="mx-auto">Get to Know Us</ShortTitle>
      <TitleText colorText={"Who"} text={"We Are"} />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side Content  */}
        <div className="flex flex-col gap-5">
          <div
            style={style}
            className="bg-white py-10 pb-16 px-7 rounded-xl space-y-5"
          >
            <p className="text-textdark font-medium text-3xl w-[80%]">
              <span className="text-primary">Shah Traders has been</span> a
              trusted distributor of industrial valves, pumps, motors, and
              sealing solutions. Guided by our principle “Quality Products with
              Cost Effectiveness,”{" "}
            </p>
            <p className="text-textdark font-medium text-3xl w-[80%]">
              <span className="text-primary">We serve 500+</span> industries
              nationwide with reliable products and technical expertise.
            </p>
            <BottomLine />
          </div>
          <div className="bg-primary py-6 pt-8 px-7 rounded-xl">
            <p className="text-white  text-xl md:text-2xl font-bold w-[70%]">
              Delivering industrial excellence since 1992.
            </p>
            <img src={comma} alt="" className="ml-auto" />
          </div>
        </div>
        {/* Right Side Content */}
        <div>
          <div></div>
          <div className="bg-white rounded-xl text-center">
            <PrimaryBtn className="hover:bg-black duration-300 mx-auto">Learn More About Us</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
