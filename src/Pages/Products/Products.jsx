import React from "react";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/Contact/HeadImg.webp";
import Together from "../../Components/Together";
import OurProduct from "./OurProduct";

const Products = () => {
  return (
    <div>
      <SubHeader Head={Head} text={"Products"} />
      <OurProduct />

      <Together />
    </div>
  );
};

export default Products;
