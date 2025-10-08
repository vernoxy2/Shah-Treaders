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
];

const Brand = () => {
  return (
    <section className="overflow-hidden py-24 container px-0">
      <div className=" flex flex-row animate-slide gap-8 w-max">
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="h-16 md:h-20 lg:h-24 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Brand;
