import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import Pro1 from "../../../assets/Home/Products/Pro1.webp";
import Pro2 from "../../../assets/Home/Products/Pro2.webp";
import Pro3 from "../../../assets/Home/Products/Pro3.webp";
import Pro4 from "../../../assets/Home/Products/Pro4.webp";

const ProductData = [
  {
    id:1,
    proimg: Pro1,
    Proname: "Valves & Flow Control",
    Subtext: "A wide range of industrial valves from trusted brands like Crane, Saunders, Forbes Marshall, Swastik, and Leser, delivering precision, durability, and reliable flow control for every application."
  },
  {
    id:2,
    proimg: Pro2,
    Proname: "Pumps & Fluid Handling",
    Subtext: "From Wilo centrifugal pumps to Sandpiper air-operated diaphragm pumps, we supply efficient and high-performance solutions for smooth fluid transfer across industries."
  },
  {
    id:3,
    proimg: Pro3,
    Proname: "Motors & Power Solutions",
    Subtext: "Trusted Havells motors built for efficiency, safety, and consistent performance, ensuring reliable power solutions for diverse industrial operations."
  },
  {
    id:4,
    proimg: Pro4,
    Proname: "Sealing & Gaskets",
    Subtext: "Premium sealing solutions from Teadit, including gaskets, sealants, and packing materials designed for leak-proof, long-lasting performance in critical applications."
  }
]

const ProductProvide = () => {
  return (
    <section className="container">
      <ShortTitle className="mx-auto lg:ml-0">Product provide</ShortTitle>
      <div className=" lg:flex justify-between gap-8 space-y-6">
        <div className=" lg:w-1/2">
          <TitleText
            colorText={"Reliable Products, "}
            text={"Proven Performance"}
            className="text-start "
          />
        </div>
        <div className="flex items-center gap-3 lg:w-1/2 ">
          <div className={`w-1 h-16 bg-primary rounded-lg `}></div>
          <p className="w-[90%]">
            Engineered for durability and performance, our valves, pumps, and
            motors provide reliable industrial solutions trusted by industries
            nationwide.
          </p>
        </div>
      </div>
      {/* Product Images */}
      <div className=" w-full md:flex gap-8 space-y-4 md:space-y-0">
        <div className="md:w-7/12 ">
          <img src={Pro1} alt="" className="object-contain w-full rounded-xl" />
        </div>
        <div className="md:w-5/12 ">
          <img src={Pro2} alt="" className="object-contain w-full rounded-xl" />
        </div>
      </div>
      <div className=" w-full md:flex gap-8 space-y-4 md:space-y-0">
        <div className="md:w-5/12 ">
          <img src={Pro3} alt="" className="object-contain w-full rounded-xl" />
        </div>
        <div className="  md:w-7/12 ">
          <img src={Pro4} alt="" className="object-contain w-full rounded-xl" />
        </div>
      </div>

      
    </section>
  );
};

export default ProductProvide;
