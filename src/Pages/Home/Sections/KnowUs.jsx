import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import Weare1 from "../../../assets/Home/Weare1.webp";
import Weare2 from "../../../assets/Home/Weare2.webp";
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
      <TitleText colorText={"Who"} text={"We Are"} brclass="hidden" />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side Content  */}
        <div className="flex flex-col gap-5">
          <div
            style={style}
            className="bg-white py-10 pb-16 px-7 rounded-xl space-y-5"
          >
            <p className="text-textdark font-medium text-lg md:text-3xl md:w-[80%]">
              <span className="text-primary">Shah Traders has been</span> a
              trusted distributor of industrial valves, pumps, motors, and
              sealing solutions. Guided by our principle “Quality Products with
              Cost Effectiveness,”{" "}
            </p>
            <p className="text-textdark font-medium text-lg md:text-3xl md:w-[80%]">
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
        <div className="flex flex-col gap-5">
          <div className="relative w-full">
            <img src={Weare2} alt="We Are" className="w-full object-cover" />

            {/* Overlay */}
            <div className="bg-white p-4 md:p-6 w-1/3 rounded-md absolute bottom-0 right-0 text-end space-y-2 md:space-y-3 lg:space-y-4 max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
              <p className="text-sm md:text-base lg:text-lg text-primary font-semibold">
                Experiences
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
                30+
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                Trusted Industry <br />
                Expertise
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl text-center">
            <PrimaryBtn className="hover:bg-black duration-300 mx-auto">
              Learn More About Us
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
