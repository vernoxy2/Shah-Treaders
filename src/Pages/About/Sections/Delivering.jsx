import React from "react";
import DeliveringImg from "../../../assets/About/DeliveringImg.webp";
import BottomLine from "../../../Components/BottomLine";

const style = {
  backgroundImage: `url(${DeliveringImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Delivering = () => {
  return (
    <section id="Delivering" className="px-3">
      <div
      data-aos="zoom-out"
        style={style}
        className="container relative text-white text-center rounded-3xl overflow-hidden"
      >
        {/* Overlay (behind text) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-0 lg:hidden"></div>

        {/* Content */}
        <div className="w-11/12 mx-auto relative py-12 space-y-6 z-10">
          {" "}
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-lexend md:w-[65%] lg:w-[55%] mx-auto">
            {" "}
            Delivering Quality with Cost-Effectiveness{" "}
          </h1>{" "}
          <p className="text-white text-justify md:text-center">
            Since 1992, Shah Traders has been a trusted name in the industrial
            sector, driven by its core principle of “QUALITY PRODUCT WITH COST
            EFFECTIVENESS.” With decades of experience, we have grown into a
            leading distributor of high-performance industrial products such as
            Valves, Pumps, Motors, and Fluid Sealing Gaskets. Our dedication to
            quality and customer satisfaction has enabled us to successfully
            cater to diverse industries including Pulp & Paper, Chemical,
            Pharmaceutical, Textile, Sugar, Distilleries, Refineries, Power
            Plants, and Engineering, delivering reliable solutions that empower
            businesses to achieve efficiency and growth.
          </p>{" "}
          <BottomLine className="mx-auto "  width="w-[200px]"/>{" "}
          <p className="text-white text-justify md:text-center">
            At Shah Traders, our strength lies in a technically trained team
            that understands customer needs and delivers cost-effective
            solutions without compromising on world-class quality. Today, we
            proudly serve over 500 satisfied industrial clients, earning their
            trust and long-term loyalty through our commitment to integrity,
            excellence, and customer-focused service.
          </p>{" "}
        </div>
      </div>
    </section>
  );
};

export default Delivering;
