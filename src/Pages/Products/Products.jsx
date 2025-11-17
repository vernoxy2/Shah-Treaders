import React from "react";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/Contact/HeadImg.webp";
import Together from "../../Components/Together";
import OurProduct from "./OurProduct";
import Footer from "../../Components/Footer";

const Products = () => {
  return (
    <div>
      <SubHeader Head={Head} text={"Products"} scrollTarget={"#OurProduct"} />
      <OurProduct />

      {/* <Together /> */}
      <Footer>
        <Together />
      </Footer>
    </div>
  );
};

export default Products;
