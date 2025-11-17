import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import Pro1 from "../../../assets/Home/Products/Pro1.webp";
import Pro2 from "../../../assets/Home/Products/Pro2.webp";
import Pro3 from "../../../assets/Home/Products/Pro3.webp";
import Pro4 from "../../../assets/Home/Products/Pro4.webp";

const ProductData = [
  {
    id: 1,
    proimg: Pro1,
    Proname: "Valves & Flow Control",
    Subtext:
      "A wide range of industrial valves from trusted brands like Crane, Saunders, Forbes Marshall, Swastik, and Leser, delivering precision, durability, and reliable flow control for every application.",
    btn: "Explore Valves",
    size: "lg:w-7/12",
  },
  {
    id: 2,
    proimg: Pro2,
    Proname: "Pumps & Fluid Handling",
    Subtext:
      "From Wilo centrifugal pumps to Sandpiper air-operated diaphragm pumps, we supply efficient and high-performance solutions for smooth fluid transfer across industries.",
    btn: "Explore Pumps",
    size: "lg:w-5/12",
  },
  {
    id: 3,
    proimg: Pro3,
    Proname: "Motors & Power Solutions",
    Subtext:
      "Trusted Havells motors built for efficiency, safety, and consistent performance, ensuring reliable power solutions for diverse industrial operations.",
    btn: "Explore Motors",
    size: "lg:w-5/12",
  },
  {
    id: 4,
    proimg: Pro4,
    Proname: "Sealing & Gaskets",
    Subtext:
      "Premium sealing solutions from Teadit, including gaskets, sealants, and packing materials designed for leak-proof, long-lasting performance in critical applications.",
    btn: "Explore Gaskets",
    size: "lg:w-7/12",
  },
];

const ProductProvide = () => {
  return (
    <section className="container">
      <ShortTitle className="mx-auto lg:ml-0">Product provide</ShortTitle>

      <div className="lg:flex justify-between gap-8 space-y-6">
        <div className="lg:w-1/2">
          <TitleText
            colorText="Reliable Products, "
            text="Proven Performance"
            className="text-start"
          />
        </div>
        <div data-aos="fade-right" className="flex items-center gap-3 lg:w-1/2">
          <div className="w-1 h-16 bg-primary rounded-lg"></div>
          <p className="w-[90%]">
            Engineered for durability and performance, our valves, pumps, and
            motors provide reliable industrial solutions trusted by industries
            nationwide.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-8">
        {[ProductData.slice(0, 2), ProductData.slice(2, 4)].map(
          (row, rowIndex) => (
            <div
              key={rowIndex}
              className="w-full lg:flex gap-8 space-y-4 md:space-y-8 lg:space-y-0"
            >
              {row.map(({ id, proimg, Proname, Subtext, btn, size }) => (
                <div
                  key={id}
                  className={`relative ${size} bg-opacity-40 group overflow-hidden rounded-xl`}
                >
                  <img
                    loading="lazy"
                    data-aos="zoom-in"
                    src={proimg}
                    alt={Proname}
                    className="object-contain h-full w-full rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div data-aos="fade" className="absolute bottom-0 w-full bg-white/80 py-3 md:py-6 px-4 md:px-7 space-y-1 md:space-y-2">
                    <h2 className="text-2xl md:text-4xl font-lexend font-medium leading-tight text-start">
                      <span className="text-primary">
                        {Proname.split("&")[0]}&
                      </span>{" "}
                      {Proname.split("&")[1]}
                    </h2>
                    <p className="text-sm sm:text-lg 2xl:text-xl md:w-[80%] hidden group-hover:block transition-all duration-1000">
                      {Subtext}
                    </p>
                  </div>
                  <PrimaryBtn to={"/product"} className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {btn}
                  </PrimaryBtn>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ProductProvide;
