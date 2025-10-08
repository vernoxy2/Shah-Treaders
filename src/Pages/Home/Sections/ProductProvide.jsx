import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import Pro1 from "../../../assets/Home/Products/Pro1.webp";
import Pro2 from "../../../assets/Home/Products/Pro2.webp";
import Pro3 from "../../../assets/Home/Products/Pro3.webp";
import Pro4 from "../../../assets/Home/Products/Pro4.webp";

const ProductProvide = () => {
  return (
    <section>
      <ShortTitle className="mx-auto lg:ml-0">Product provide</ShortTitle>
      <div className="container flex justify-between ">
        <div className=" w-7/12">
          <TitleText
            colorText={"Reliable Products, "}
            text={"Proven Performance"}
            className="text-start w-[]"
          />
        </div>
        <div className="flex items-center gap-3 w-5/12">
          <div className={`w-1 h-16 bg-primary rounded-lg `}></div>
          <p>
            Engineered for durability and performance, our valves, pumps, and
            motors provide reliable industrial solutions trusted by industries
            nationwide.
          </p>
        </div>
      </div>
      <div className="container flex gap-7">
        <div className="w-7/12 border border-black">
          <img src={Pro1} alt="" className="w-full object-cover" />
        </div>
        <div className="w-5/12 border border-black">
          <img src={Pro2} alt="" className="h-full object-cover" />
        </div>
      </div>
      <div className="container flex gap-7">
        <div className="w-5/12 border border-black">
          <img src={Pro3} alt="" className="h-full object-cover" />
        </div>
        <div className="w-7/12 border border-black">
          <img src={Pro4} alt="" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ProductProvide;
