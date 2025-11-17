import React from "react";
import Brand1 from "../../../assets/Home/Brand/Brand1.webp";
import Brand2 from "../../../assets/Home/Brand/Brand2.webp";
import Brand3 from "../../../assets/Home/Brand/Brand3.webp";
import Brand4 from "../../../assets/Home/Brand/Brand4.webp";
import Brand5 from "../../../assets/Home/Brand/Brand5.webp";
import Brand6 from "../../../assets/Home/Brand/Brand6.webp";
import Brand7 from "../../../assets/Home/Brand/Brand7.webp";
import Brand8 from "../../../assets/Home/Brand/Brand8.webp";
import Brand9 from "../../../assets/Home/Brand/Brand9.webp";
import Brand10 from "../../../assets/Home/Brand/Brand10.webp";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";

const brands = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
  Brand10,
  Brand1,
  Brand2,
  Brand3,
];

const Brand = () => {
  return (
    <section className="overflow-hidden py-24 container px-0 relative">
      <div className="">
        <div data-aos="fade-left" className="overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 md:h-20 lg:h-24 object-contain mx-4"
              />
            ))}
          </div>
        </div>

        <div className=" absolute inset-0 flex items-center justify-center">
          <div
            data-aos="zoom-in"
            className=" text-center hidden h-[280px] w-[280px] bg-white/50 xl:flex gap-3 flex-col items-center justify-center rounded-full backdrop-blur border-dashed border border-textcolor "
          >
            <h2
              className={`lg:px-0 text-xl md:text-3xl text-center font-lexend font-medium leading-tight `}
            >
              <span className="text-primary">{"Meet"}</span> {"the Brand"}
            </h2>
            <p>
              Crafting excellence, <br />
              building lasting trust
            </p>
            <BottomLine />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
