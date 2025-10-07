import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";

const Core_Values = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[500px] w-full bg-textcolor/20 rounded-lg"></div>
        <div>
            <ShortTitle>Get to Know Us</ShortTitle>
            <TitleText colorText={'Our Mission, Vision and'} text={'Core Values'} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default Core_Values;
