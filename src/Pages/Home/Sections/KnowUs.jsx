import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import Weare1 from "../../../assets/Home/Weare1.webp";
import Weare2 from "../../../assets/Home/Weare3.webp";
import comma from "../../../assets/Home/Comaa.svg";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import { BsArrowRightShort } from "react-icons/bs";

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
      <div className="container h-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side Content  */}
        <div className="flex h-ful flex-col gap-5 justify-between ">
          <div
            style={style}
            className="bg-white py-6 md:py-12 px-4 md:px-8 rounded-xl space-y-5 h-full"
          >
            <p className="text-textdark font-medium text-lg md:text-3xl md:w-[80%] w-[95%]">
              <span className="text-primary">Shah Traders has been</span> a
              trusted distributor of industrial valves, pumps, motors, and
              sealing solutions. Guided by our principle “Quality Products with
              Cost Effectiveness,”{" "}
            </p>
            <p className="text-textdark font-medium text-lg md:text-3xl md:w-[80%] w-[95%]">
              <span className="text-primary">We serve 500+</span> industries
              nationwide with reliable products and technical expertise.
            </p>
            <BottomLine />
          </div>
          <div className="bg-primary py-4 md:py-6 pt-5 md:pt-8 px-4 md:px-7 rounded-xl">
            <p className="text-white  text-xl md:text-2xl font-bold w-[70%]">
              Delivering industrial excellence since 1992.
            </p>
            <img src={comma} alt="" className="ml-auto" />
          </div>
        </div>
        {/* Right Side Content */}
        <div className="flex  flex-col gap-5 ">
          <div className="rounded-xl  relative">
            <img src={Weare2} alt="We Are" className="rounded-2xl" />
            <div className="pt-3 md:pt-5 pl-3 md:pl-5 bg-[#EBF1F3] absolute bottom-0 right-0 rounded-tl-xl ">
              <div className="w-full h-full space-y-2 bg-white p-4 md:p-7 pl-12 md:pl-16 rounded-xl text-end">
                <p className="text-primary md:text-xl">Experiences</p>
                <h1 className="md:text-5xl  text-primary font-lexend">30+</h1>
                <p className="text-base mdd:text-xl">
                  Trusted Industry <br /> Expertise
                </p>
              </div>
            </div>
          </div>

          <button className="rounded-xl bg-white text-primary py-3 font-karla font-bold text-2xl flex items-center justify-center gap-3 hover:bg-primary hover:text-white group duration-500 transition-colors">Learn More About Us <div
                  className={`bg-textdark p-1 rounded-full text-3xl text-white transform transition-transform duration-500 ease-in-out group-hover:rotate-[-45deg]`}
                >
                  <BsArrowRightShort />
                </div></button>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
