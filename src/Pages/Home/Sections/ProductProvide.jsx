import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import Pro1 from "../../../assets/Home/Products/Pro1.webp";
import Pro2 from "../../../assets/Home/Products/Pro2.webp";
import Pro3 from "../../../assets/Home/Products/Pro3.webp";
import Pro4 from "../../../assets/Home/Products/Pro4.webp";
import LazyImage from "../../../Components/LazyImage";

const ProductData = [
  {
    id: 1,
    proimg: Pro1,
    Proname: "Valves & Flow Control",
    Subtext:
      "A wide range of industrial valves from trusted brands like Crane, Saunders, Forbes Marshall, Swastik, and Leser, delivering precision, durability, and reliable flow control for every application.",
    btn: "Explore Valves",
    size: "lg:w-7/12",
    url: "/product?category=Valve",
  },
  {
    id: 2,
    proimg: Pro2,
    Proname: "Pumps & Fluid Handling",
    Subtext:
      "From Wilo centrifugal pumps to Sandpiper air-operated diaphragm pumps, we supply efficient and high-performance solutions for smooth fluid transfer across industries.",
    btn: "Explore Pumps",
    size: "lg:w-5/12",
    url: "/product?category=Pumps",
  },
  {
    id: 3,
    proimg: Pro3,
    Proname: "Motors & Power Solutions",
    Subtext:
      "Trusted Havells motors built for efficiency, safety, and consistent performance, ensuring reliable power solutions for diverse industrial operations.",
    btn: "Explore Motors",
    size: "lg:w-5/12",
    url: "/product?category=Motors",
  },
  {
    id: 4,
    proimg: Pro4,
    Proname: "Sealing & Gaskets",
    Subtext:
      "Premium sealing solutions from Teadit, including gaskets, sealants, and packing materials designed for leak-proof, long-lasting performance in critical applications.",
    btn: "Explore Gaskets",
    size: "lg:w-7/12",
    url: "/product?category=Gasket",
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
              className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full"
            >
              {row.map(({ id, proimg, Proname, Subtext, btn, size, url }) => (
                <div
                  data-aos="zoom-in"
                  key={id}
                  className={`relative ${size} flex-shrink-0 bg-opacity-40 group duration-500 overflow-hidden rounded-xl`}
                >
                  {/* Image Container with aspect ratio control */}
                  <div className="relative w-full aspect-[4/3] h-full">
                    <LazyImage
                      loading="lazy"
                      src={proimg}
                      alt={Proname}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Overlay */}
                  <div
                    data-aos="fade" data-aos-duration="500"
                    className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 md:py-6 px-4 md:px-7 space-y-1 md:space-y-2"
                  >
                    <h2 className="text-2xl md:text-4xl font-lexend font-medium leading-tight text-start">
                      <span className="text-primary">
                        {Proname.split("&")[0]}&
                      </span>{" "}
                      {Proname.split("&")[1]}
                    </h2>
                    <p className="text-sm sm:text-lg 2xl:text-xl md:w-[80%] opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40  duration-700 overflow-hidden transition-transform">
                      {Subtext}
                    </p>
                  </div>

                  {/* Button */}
                  <PrimaryBtn
                    to={url}
                    className="absolute top-5 right-5 bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  >
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
