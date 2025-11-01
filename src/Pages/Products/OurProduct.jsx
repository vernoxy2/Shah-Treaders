import React, { useState } from "react";
import ShortTitle from "../../Components/ShortTitle";
import TitleText from "../../Components/TitleText";
import { BiChevronDown, BiChevronUp, BiSolidFilePdf } from "react-icons/bi";
import { categories } from "../../Data/CategoryList";
import { ProductData } from "../../Data/ProductList";
import { Brands } from "../../Data/Brands";
import { BsCheckLg } from "react-icons/bs";

const OurProduct = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  // ✅ Helper to get actual subcategories (excluding "All")
  const getActualSubcategories = (catName) => {
    const cat = categories.find((c) => c.name === catName);
    if (!cat) return [];
    return cat.subcategories.filter((s) => !/^All/i.test(s));
  };

  // ✅ Updated checkbox handler
  const handleCheckboxChange = (category, sub) => {
    setSelectedItems((prev) => {
      const key = `${category}-${sub}`;
      const updated = { ...prev };

      // If user clicked an "All ..." option
      if (/^All/i.test(sub)) {
        const subs = getActualSubcategories(category);
        const allSelected = subs.every((s) => !!updated[`${category}-${s}`]);

        if (allSelected) {
          // Unselect all
          subs.forEach((s) => delete updated[`${category}-${s}`]);
        } else {
          // Select all
          subs.forEach((s) => (updated[`${category}-${s}`] = true));
        }
        return updated;
      }

      // ✅ Normal single subcategory toggle
      if (updated[key]) delete updated[key];
      else updated[key] = true;
      return updated;
    });
  };

  // ✅ Filtering logic (no change needed)
  const selectedKeys = Object.keys(selectedItems);

  const filteredProducts = ProductData.filter((product) => {
    const catMatch =
      selectedKeys.length === 0
        ? true
        : selectedItems[`${product.category}-${product.subcategory}`];
    const brandMatch = !selectedBrand || product.brand === selectedBrand;
    return catMatch && brandMatch;
  });

  const clearFilters = () => {
    setSelectedItems({});
    setSelectedBrand(null);
  };

  const handleDownload = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <section className="container">
      <ShortTitle className="mx-auto">Our Products</ShortTitle>
      <TitleText colorText={"Quality Products Reliable"} text={" Solutions"} />

      <div className="flex flex-col lg:flex-row gap-7 mt-8">
        {/* Filter section */}
        <div className="lg:w-4/12 h-fit p-6 bg-primary rounded space-y-5">
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium text-white">Choose Products</h3>
            <button
              onClick={clearFilters}
              className="text-white/90 underline text-sm hover:text-white"
            >
              Clear All
            </button>
          </div>

          {/* Brand section */}
          <h3 className="bg-white text-primary p-3 rounded-md">Brands</h3>
          <div className="grid grid-cols-3 gap-4 py-3">
            {Brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() =>
                  setSelectedBrand(
                    selectedBrand === brand.name ? null : brand.name
                  )
                }
                className="relative cursor-pointer overflow-hidden "
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className={`w-full object-contain transition-transform duration-300 ${
                    selectedBrand === brand.name ? "scale-105 opacity-90" : ""
                  }`}
                />
                {selectedBrand === brand.name && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-sm flex items-center justify-center">
                    <span className="text-white text-3xl font-semibold">
                      <BsCheckLg />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category section */}
          <h3 className="bg-white text-primary p-3 rounded-md">
            Product Category
          </h3>

          <div className="py-2 pb-6 space-y-4">
            {categories.map((cat) => {
              const subs = getActualSubcategories(cat.name);
              const isAllSelected =
                subs.length > 0 &&
                subs.every((s) => !!selectedItems[`${cat.name}-${s}`]);

              return (
                <div key={cat.name}>
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

                  {openCategory === cat.name && (
                    <div className="bg-white/90 border rounded-md mt-1.5 p-3 space-y-2 shadow-md">
                      {cat.subcategories.map((sub) => {
                        const isAll = /^All/i.test(sub);
                        const checked = isAll
                          ? isAllSelected
                          : !!selectedItems[`${cat.name}-${sub}`];

                        return (
                          <label
                            key={sub}
                            className="flex items-center space-x-2 text-lg text-gray-700"
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleCheckboxChange(cat.name, sub)}
                              className="w-5 h-5 accent-primary"
                            />
                            <span>{sub}</span>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Product section */}
        <div className="lg:w-8/12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="relative h-fit justify-between items-start space-y-4 bg-white py-9 px-4 hover:bg-white hover:text-white duration-500 group rounded-lg shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-contain group-hover:scale-110 duration-500 transition-transform"
                />
                <div className="absolute bg-primary/50 w-full bottom-0 left-0 duration-500 flex items-center justify-between py-5 ps-3 backdrop-blur-sm">
                  <h4 className="md:text-xl text-white">{item.name}</h4>
                  <button
                    type="button"
                    onClick={() => handleDownload(item.pdf)}
                    className="flex items-center bg-white hover:bg-primary hover:text-white duration-300 transition-colors rounded-s-3xl text-primary py-1 px-3 gap-1"
                  >
                    <BiSolidFilePdf className="md:text-3xl" />
                    <span className="leading-none">
                      Download <br /> Brochure
                    </span>
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
