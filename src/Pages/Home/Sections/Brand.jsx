import React from "react";
import wilo from "../../../assets/Home/Brand/wilo.svg";
import saunders from "../../../assets/Home/Brand/Saunders.svg";
import havells from "../../../assets/Home/Brand/havells.svg";
import idex from "../../../assets/Home/Brand/IDEX.svg";
import forbes from "../../../assets/Home/Brand/FORBES.svg";
import teadit from "../../../assets/Home/Brand/teadit.svg";
import Crane from "../../../assets/Home/Brand/CRANE.svg";
import sandpiper from "../../../assets/Home/Brand/sandpiper.svg";
import leser from "../../../assets/Home/Brand/leser.svg";
import swastik from "../../../assets/Home/Brand/swastik.svg";
import TitleText from "../../../Components/TitleText";
import BottomLine from "../../../Components/BottomLine";
import ShortTitle from "../../../Components/ShortTitle";
import PrimaryBtn from "../../../Components/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const BrandData = [
  {
    id: 1,
    logo: Crane,
    text: "Crane Co., a diversified manufacturer of highly engineered industrial like  Saunders Diaphragm Valve, etc.",
    url: "/product?brand=Crane",
  },
  {
    id: 2,
    logo: saunders,
    text: "Engineered diaphragm valve systems trusted for durability, safety, and efficiency.",
    url: "/product?brand=Saunders",
  },
  {
    id: 3,
    logo: forbes,
    text: "Leading provider of steam engineering and energy efficiency industrial solutions.",
    url: "/product?brand=Forbes",
  },
  {
    id: 4,
    logo: swastik,
    text: "Reliable industrial valves designed for consistent performance in tough environments.",
    url: "/product?brand=Swastik",
  },
  {
    id: 5,
    logo: leser,
    text: "Global leader in pressure relief valves ensuring maximum safety and protection.",
    url: "/product?brand=Leser",
  },
  {
    id: 6,
    logo: wilo,
    text: "Advanced pumping technology delivering efficient, sustainable water movement solutions worldwide.",
    url: "/product?brand=Wilo",
  },
  {
    id: 7,
    logo: havells,
    text: "Premium electrical equipment built for safety, reliability, and daily industrial operations.",
    url: "/product?brand=Havells",
  },
  {
    id: 8,
    logo: idex,
    text: "Innovative fluid-handling technologies offering precision, performance, and industrial efficiency.",
    url: "/product?brand=IDEX",
  },
  {
    id: 9,
    logo: sandpiper,
    text: "Durable air-operated pumps designed for heavy-duty industrial material transfer applications.",
    url: "/product?brand=Sandpiper",
  },
  {
    id: 10,
    logo: teadit,
    text: "High-performance sealing solutions engineered to prevent leaks and ensure reliability.",
    url: "/product?brand=Teadit",
  },
];

const Brand = () => {
  const navigate = useNavigate();
  return (
    <section>
      <ShortTitle className="mx-auto">Meet the brand</ShortTitle>
      <TitleText
        colorText={"Authorised "}
        text={"Distributor Of"}
        brclass="hidden"
      />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {BrandData.map((item) => (
          <div
            data-aos="flip-right"
            key={item.id}
            className="group flex flex-col justify-between items-center space-y-4 bg-white py-6  px-[33px] hover:shadow-lg hover:scale-105 duration-500 hover:text-white"
          >
            <img src={item.logo} alt={item.title} className=" object-cover" />
            <p className=" text-center text-textdark">{item.text}</p>
            <PrimaryBtn
              className="group-hover:bg-primary group-hover:text-white transition-colors duration-300"
              onClick={() => navigate(item.url)}
            >
              Read More
            </PrimaryBtn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brand;
