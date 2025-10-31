import React, { useState } from "react";
import ShortTitle from "../../Components/ShortTitle";
import TitleText from "../../Components/TitleText";
import B1 from "../../assets/Products/Brands/B1.svg";
import B2 from "../../assets/Products/Brands/B2.svg";
import B3 from "../../assets/Products/Brands/B3.svg";
import B4 from "../../assets/Products/Brands/B4.svg";
import B5 from "../../assets/Products/Brands/B5.svg";
import B6 from "../../assets/Products/Brands/B6.svg";
import B7 from "../../assets/Products/Brands/B7.svg";
import B8 from "../../assets/Products/Brands/B8.svg";
import B9 from "../../assets/Products/Brands/B9.svg";
import B10 from "../../assets/Products/Brands/B10.svg";
import { BiChevronDown, BiChevronUp, BiSolidFilePdf } from "react-icons/bi";
import { categories } from "../../Data/CategoryList";
import { ProductData } from "../../Data/ProductList";

const OurProduct = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const handleCheckboxChange = (category, sub) => {
    setSelectedItems((prev) => {
      const key = `${category}-${sub}`;
      const updated = { ...prev };
      if (updated[key]) delete updated[key];
      else updated[key] = true;
      return updated;
    });
  };

  // ✅ Filter logic
  const selectedKeys = Object.keys(selectedItems);
  const filteredProducts =
    selectedKeys.length === 0
      ? ProductData
      : ProductData.filter((product) => {
          // Adjust according to your product structure
          const catKey = `${product.category}-${product.subcategory}`;
          return selectedItems[catKey];
        });

  return (
    <section className="container">
      <ShortTitle className="mx-auto">Our Products</ShortTitle>
      <TitleText colorText={"Quality Products Reliable"} text={" Solutions"} />

      <div className="flex flex-col lg:flex-row gap-7 mt-8">
        {/* Filter section */}
        <div className="lg:w-4/12 p-6 bg-primary rounded space-y-5">
          <h3 className="font-medium text-white">Choose Products</h3>

          {/* Brand section */}
          <h3 className="bg-white text-primary p-3 rounded-md">Brands</h3>
          <div className="grid grid-cols-3 gap-4 py-3">
            <img src={B1} alt="" className="w-full h-full object-contain" />
            <img src={B2} alt="" className="w-full h-full object-contain" />
            <img src={B3} alt="" className="w-full h-full object-contain" />
            <img src={B4} alt="" className="w-full h-full object-contain" />
            <img src={B5} alt="" className="w-full h-full object-contain" />
            <img src={B6} alt="" className="w-full h-full object-contain" />
            <img src={B7} alt="" className="w-full h-full object-contain" />
            <img src={B8} alt="" className="w-full h-full object-contain" />
            <img src={B9} alt="" className="w-full h-full object-contain" />
            <img src={B10} alt="" className="w-full h-full object-contain" />
          </div>

          {/* Category section */}
          <h3 className="bg-white text-primary p-3 rounded-md">
            Product Category
          </h3>

          <div className="py-2 pb-6 space-y-4">
            {categories.map((cat) => (
              <div key={cat.name}>
                {/* Category Button */}
                <button
                  onClick={() => toggleCategory(cat.name)}
                  className="bg-white text-textdark p-3 rounded-md w-full text-xl text-start font-lexend flex justify-between items-center"
                >
                  {cat.name}
                  {openCategory === cat.name ? (
                    <BiChevronUp className="text-primary" size={28} />
                  ) : (
                    <BiChevronDown className="text-primary" size={28} />
                  )}
                </button>

                {/* Dropdown Subcategories */}
                {openCategory === cat.name && (
                  <div className="bg-white/90 border rounded-md mt-1.5 p-3 space-y-2 shadow-md">
                    {cat.subcategories.map((sub) => (
                      <label
                        key={sub}
                        className="flex items-center space-x-2 text-lg text-gray-700"
                      >
                        <input
                          type="checkbox"
                          checked={!!selectedItems[`${cat.name}-${sub}`]}
                          onChange={() => handleCheckboxChange(cat.name, sub)}
                          className="w-5 h-5 accent-primary"
                        />
                        <span>{sub}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Product section */}
        <div className="lg:w-8/12 grid grid-cols-2   sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-between items-start space-y-4 bg-white py-9 px-4 hover:bg-white hover:text-white duration-500 group rounded-lg shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
                <div className="absolute bg-primary/50 w-full bottom-0 left-0  duration-500 flex items-center justify-between py-4 ps-3 backdrop-blur-sm">
                  <h4 className="md:text-xl text-white">
                    {item.name}
                  </h4>
                    <button className="flex items-center bg-white rounded-s-3xl text-primary w-1/2  py-1 ps-2 gap-0">
                      <BiSolidFilePdf className="lg:text-4xl" />
                      <span className="leading-none">Download Brochure</span>
                    </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No products found for selected categories.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
