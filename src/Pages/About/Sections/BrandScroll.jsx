import React from "react";
import Wilo from "../../../assets/Home/Brand/Brand1.svg";
import Saunders from "../../../assets/Home/Brand/Brand2.svg";
import Havells from "../../../assets/Home/Brand/Brand3.webp";
import Idex from "../../../assets/Home/Brand/Brand4.webp";
import Forbes from "../../../assets/Home/Brand/Brand5.webp";
import Teadit from "../../../assets/Home/Brand/Brand6.webp";
import Crane from "../../../assets/Home/Brand/Brand7.svg";
import Sandpiper from "../../../assets/Home/Brand/Brand8.webp";
import Leser from "../../../assets/Home/Brand/Brand9.webp";
import Swastik from "../../../assets/Home/Brand/Brand10.webp";
import Cognito from "../../../assets/Home/Brand/Brand11.webp";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import LazyImage from "../../../Components/LazyImage";

const brands = [
  Crane,
  Saunders,
  Forbes,
  Swastik,
  Leser,
  Wilo,
  Havells,
  Idex,
  Sandpiper,
  Teadit,
  Cognito,
];

const BrandScroll = () => {
  return (
    <section className="overflow-hidden md:py-32 pb-48 md:pb-32 container px-0 relative">
      <div className="">
        <div data-aos="fade-left" className="overflow-hidden">
          <div className="overflow-hidden w-full">
            <div
              className="flex animate-slide whitespace-nowrap w-max"
              style={{ animationDuration: "20s" }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <LazyImage
                  key={index}
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="h-16 md:h-20 lg:h-24 object-contain mx-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* overlay */}
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

export default BrandScroll;
