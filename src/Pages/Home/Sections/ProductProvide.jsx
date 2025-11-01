import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import Pro1 from "../../../assets/Home/Products/Pro1.webp";
import Pro2 from "../../../assets/Home/Products/Pro2.webp";
import Pro3 from "../../../assets/Home/Products/Pro3.webp";
import Pro4 from "../../../assets/Home/Products/Pro4.webp";
import PrimaryBtn from "../../../Components/PrimaryBtn";

const ProductData = [
  {
    id: 1,
    proimg: Pro1,
    Proname: "Valves & Flow Control",
    Subtext:
      "A wide range of industrial valves from trusted brands like Crane, Saunders, Forbes Marshall, Swastik, and Leser, delivering precision, durability, and reliable flow control for every application.",
  },
  {
    id: 2,
    proimg: Pro2,
    Proname: "Pumps & Fluid Handling",
    Subtext:
      "From Wilo centrifugal pumps to Sandpiper air-operated diaphragm pumps, we supply efficient and high-performance solutions for smooth fluid transfer across industries.",
  },
  {
    id: 3,
    proimg: Pro3,
    Proname: "Motors & Power Solutions",
    Subtext:
      "Trusted Havells motors built for efficiency, safety, and consistent performance, ensuring reliable power solutions for diverse industrial operations.",
  },
  {
    id: 4,
    proimg: Pro4,
    Proname: "Sealing & Gaskets",
    Subtext:
      "Premium sealing solutions from Teadit, including gaskets, sealants, and packing materials designed for leak-proof, long-lasting performance in critical applications.",
  },
];

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
      <div className=" w-full lg:flex gap-8 space-y-4 md:space-y-8 lg:space-y-0">
        {/* Product 1 */}
        <div className="relative lg:w-7/12 bg-opacity-40 group overflow-hidden rounded-xl">
          <img
            src={Pro1}
            alt="Valves and Flow Control"
            className="object-contain  h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-0 w-full bg-white/70 py-6 px-7 space-y-2">
            <h2
              className={`lg:px-0 text-2xl md:text-4xl font-lexend font-medium leading-tight text-start`}
            >
              <span className="text-primary">Valves &</span>{" "}
              Flow Control
            </h2>
            <p className="text-lg w-[80%] hidden group-hover:pb-3 group-hover:block transition-all duration-1000">
              A wide range of industrial valves from trusted brands like Crane,
              Saunders, Forbes Marshall, Swastik, and Leser, delivering
              precision, durability, and reliable flow control for every
              application.
            </p>
          </div>

          <PrimaryBtn className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            Explore Valves
          </PrimaryBtn>
        </div>
        {/* Product 2 */}
        <div className="relative lg:w-5/12 bg-opacity-40 group overflow-hidden rounded-xl">
          <img
            src={Pro2}
            alt="fluid handling"
            className="object-contain h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 w-full bg-white/70 py-6 px-7 space-y-2">
            <h2
              className={`lg:px-0 text-2xl md:text-4xl font-lexend font-medium leading-tight text-start`}
            >
              <span className="text-primary">Pumps &</span>{" "}
              Fluid Handling
            </h2>
            <p className="text-lg w-[80%] hidden group-hover:pb-3 group-hover:block transition-all duration-1000">
              From Wilo centrifugal pumps to Sandpiper air-operated diaphragm
              pumps, we supply efficient and high-performance solutions for
              smooth fluid transfer across industries.
            </p>
          </div>

          <PrimaryBtn className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            Explore Pumps
          </PrimaryBtn>
        </div>
      </div>
      {/* Product Images */}
      <div className=" w-full lg:flex gap-8 space-y-4 md:space-y-8 lg:space-y-0">
        {/* Product 3 */}
        <div className="relative lg:w-5/12 bg-opacity-40 group overflow-hidden rounded-xl">
          <img
            src={Pro3}
            alt="fluid handling"
            className="object-contain h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 w-full bg-white/70 py-6 px-7 space-y-2">
            <h2
              className={`lg:px-0 text-2xl md:text-4xl font-lexend font-medium leading-tight text-start`}
            >
              <span className="text-primary">Motors &</span>{" "}
              Power Solutions
            </h2>
            <p className="text-lg w-[80%] hidden group-hover:pb-3 group-hover:block transition-all duration-1000">
              Trusted Havells motors built for efficiency, safety, and
              consistent performance, ensuring reliable power solutions for
              diverse industrial operations.
            </p>
          </div>

          <PrimaryBtn className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            Explore Motors
          </PrimaryBtn>
        </div>
        {/* Product 4 */}
        <div className="relative lg:w-7/12 bg-opacity-40 group overflow-hidden rounded-xl">
          <img
            src={Pro4}
            alt="Valves and Flow Control"
            className="object-contain h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-0 w-full bg-white/70 py-6 px-7 space-y-2">
            <h2
              className={`lg:px-0 text-2xl md:text-4xl font-lexend font-medium leading-tight text-start`}
            >
              <span className="text-primary">Sealing &</span>{" "}
              Gaskets 
            </h2>
            <p className="text-lg w-[80%] hidden group-hover:block transition-all duration-1000">
              Premium sealing solutions from Teadit, including gaskets,
              sealants, and packing materials designed for leak-proof,
              long-lasting performance in critical applications.
            </p>
          </div>

          <PrimaryBtn className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            Explore Gaskets
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default ProductProvide;
