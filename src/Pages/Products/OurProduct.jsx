import React, { useRef, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const productSectionRef = useRef(null); // ✅ create a ref


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
          subs.forEach((s) => delete updated[`${category}-${s}`]);
        } else {
          subs.forEach((s) => (updated[`${category}-${s}`] = true));
        }
        return updated;
      }

      // ✅ Normal single subcategory toggle
      if (updated[key]) delete updated[key];
      else updated[key] = true;
      return updated;
    });
    setCurrentPage(1); // reset page when filters change
  };

  // ✅ Filtering logic
  const selectedKeys = Object.keys(selectedItems);

  const filteredProducts = ProductData.filter((product) => {
    const catMatch =
      selectedKeys.length === 0
        ? true
        : selectedItems[`${product.category}-${product.subcategory}`];
    const brandMatch = !selectedBrand || product.brand === selectedBrand;
    return catMatch && brandMatch;
  });

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

const goToPage = (page) => {
  if (page < 1 || page > totalPages) return;
  setCurrentPage(page);

  if (productSectionRef.current) {
    const yOffset = -25; // 👈 offset in pixels (adjust to your header height)
    const elementTop = productSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: elementTop, behavior: "smooth" });
  }
};



  const clearFilters = () => {
    setSelectedItems({});
    setSelectedBrand(null);
    setCurrentPage(1);
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
        <div className="lg:w-3/12 h-fit p-4 md:p-6 bg-primary rounded space-y-3 md:space-y-5">
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
          <h3 className="bg-white text-primary p-2 md:p-3 rounded-md">Brands</h3>
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
          <h3 className="bg-white text-primary p-2 md:p-3 rounded-md">
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
                    className="bg-white text-textdark p-2 md:p-3 rounded-md w-full md:text-xl text-start font-lexend flex justify-between items-center"
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
        <div ref={productSectionRef} className="lg:w-9/12 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <div
                  key={item.id}
                  className="relative h-fit justify-between items-start text-start space-y-4 bg-white py-8 md:py-9 px-4 hover:bg-white hover:text-white duration-500 group rounded-lg shadow-md"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-52 md:h-64 object-contain group-hover:scale-110 duration-500 transition-transform"
                  />
                  <div className="absolute bg-primary/50 w-full bottom-0 left-0 duration-500 space-y-2 md:flex flex-col items-center justify-between px-2 py-2 md:py-4  backdrop-blur-sm">
                    <h4 className="md:text-lg text-white  md:ps-0 text-start">{item.name}</h4>
                    <button
                      type="button"
                      onClick={() => handleDownload(item.pdf)}
                      className="flex items-center bg-white hover:bg-primary hover:text-white duration-300 transition-colors rounded-md text-primary py-1 px-3 gap-1 text-sm md:text-base ml-auto"
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

          {/* ✅ Pagination Controls */}
          {filteredProducts.length > productsPerPage && (
            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-white ${
                  currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80"
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === page
                          ? "bg-primary text-white"
                          : "bg-white border text-primary hover:bg-primary hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-white ${
                  currentPage === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-primary/80"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
