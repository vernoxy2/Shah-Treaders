import React, { useEffect } from "react";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/Contact/HeadImg.webp";
import Together from "../../Components/Together";
import OurProduct from "./OurProduct";
import Footer from "../../Components/Footer";
import { useLocation ,useNavigate } from "react-router-dom";

const Products = () => {
   const location = useLocation(); // ✅ get current location
    const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  // const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const selectedBrand = queryParams.get("brand");
  const searchQuery = queryParams.get("search");

    useEffect(() => {
    if (location.search) {
      // Replace current history entry without query params
      navigate("/product", { replace: true });
    }
  }, [location.search, navigate]);
  return (
    <div>
      <SubHeader Head={Head} text={"Products"} scrollTarget={"#OurProduct"} />
      <OurProduct  selectedCategory={selectedCategory}  selectedBrand={selectedBrand}  searchQuery={searchQuery} />

      {/* <Together /> */}
      <Footer>
        <Together />
      </Footer>
    </div>
  );

};

export default Products;