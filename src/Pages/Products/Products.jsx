import React, { useEffect, useState } from "react";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/Products/HeadImg.webp";
import Together from "../../Components/Together";
import OurProduct from "./OurProduct";
import Footer from "../../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Store query params in state
  const [selectedCategory, setSelectedCategory] = useState(
    new URLSearchParams(location.search).get("category")
  );
  const [selectedBrand, setSelectedBrand] = useState(
    new URLSearchParams(location.search).get("brand")
  );
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(location.search).get("search")
  );

  // ✅ Update state whenever query params change
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSelectedCategory(queryParams.get("category"));
    setSelectedBrand(queryParams.get("brand"));
    setSearchQuery(queryParams.get("search"));
  }, [location.search]);

  // ✅ Only navigate if not already on /product
  useEffect(() => {
    if (location.search && location.pathname !== "/product") {
      navigate("/product", { replace: true });
    }
  }, [location.search, location.pathname, navigate]);

  return (
    <div>
      <SubHeader Head={Head} text={"Products"} scrollTarget={"#OurProduct"} />
      <OurProduct
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        searchQuery={searchQuery}
      />

      <Footer>
        <Together />
      </Footer>
    </div>
  );
};

export default Products;
