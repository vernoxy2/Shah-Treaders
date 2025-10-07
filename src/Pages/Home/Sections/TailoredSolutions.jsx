import React from "react";
import TitleText from "../../../Components/TitleText";
import TailoredSolutionsImg from "../../../assets/Home/TailoredSolutionsImg.webp";

const TailoredSolutions = () => {
  return (
    <section className="py-12 md:py-20">
      <TitleText colorText="Tailored Solutions" text="for Every Industry" />
      
      <div className="container relative mt-8">
        {/* Image */}
        <div className="">
            <img
          src={TailoredSolutionsImg}
          alt="Tailored Solutions"
          className="w-full rounded-xl object-cover "
        />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/50 rounded-xl w-5/12"></div>

        {/* Optional content on top of image */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-2xl md:text-4xl font-lexend">
            Overlay Text Here
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default TailoredSolutions;
