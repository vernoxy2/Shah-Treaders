import React from "react";
import ShortTitle from "../../../Components/ShortTitle";
import TitleText from "../../../Components/TitleText";
import clint from "../../../assets/Home/Clint.webp";
import comma from "../../../assets/Home/Comma.svg";

const ClientS = [
  {
    id: 1,
    img: clint,
    name: "Jay Vashi",
    company: "Co. founder",
    review:
      "The team delivered exceptional quality and reliability. Their solutions have greatly improved our operations",
  },
  {
    id: 2,
    img: clint,
    name: "Jay Vashi",
    company: "Co. founder",
    review:
      "The team delivered exceptional quality and reliability. Their solutions have greatly improved our operations",
  },
  {
    id: 3,
    img: clint,
    name: "Jay Vashi",
    company: "Co. founder",
    review:
      "The team delivered exceptional quality and reliability. Their solutions have greatly improved our operations",
  },
];

const ClientsFeedback = () => {
  return (
    <section className="container pb-96 lg:pb-72">
      <ShortTitle className="mx-auto lg:ml-0">ClientS Feedback</ShortTitle>
      <div className=" flex justify-between ">
        <div className=" w-7/12">
          <TitleText
            colorText={"Client Testimonials /"}
            text={"Our Customers"}
            className="text-start w-[]"
          />
        </div>
        <div className="flex items-center gap-3 w-5/12">
          <div className={`w-1 h-16 bg-primary rounded-lg `}></div>
          <p>
            Our valves, pumps, and motors deliver reliable performance across
            key industries
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ClientS.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between items-start space-y-8 border-2 duration-500 border-transparent hover:border-primary bg-white py-10 px-8 rounded-xl text-start group"
            >
              <img src={comma} alt="" />
              <p className=" transition-colors duration-500 ">
                {item.review}
              </p>
              <div className="border border-dashed border-textdark  w-full"></div>
              <div className="flex justify-between w-full items-center group bg-white rounded-xl transition-colors duration-500">
                {/* Name & Company */}
                <div className="flex flex-col mt-auto">
                  <p className="text-primary gr text-2xl  font-lexend transition-colors duration-500">
                    {item.name}
                  </p>
                  <p className="font-lexend gr transition-colors duration-500">
                    {item.company}
                  </p>
                </div>

                {/* Avatar */}
                <div className="flex items-center justify-center h-28 w-28 rounded-full overflow-hidden bg-primary/10  transition-all duration-500">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientsFeedback;
