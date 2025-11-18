import React, { useEffect, useRef, useState } from "react";
import ShortTitle from "../../Components/ShortTitle";
import TitleText from "../../Components/TitleText";
import { BiSolidFilePdf } from "react-icons/bi";
import { ProductData } from "../../Data/ProductList";
import { Brands } from "../../Data/Brands";
import { BsCheckLg } from "react-icons/bs";

const OurProduct = ({selectedCategory,selectedBrand})  => {
  // ✅ State
 const [selectedBrands, setSelectedBrands] = React.useState(
    selectedBrand ? [selectedBrand] : []
  );
    const [selectedCategories, setSelectedCategories] = React.useState(
    selectedCategory ? [selectedCategory] : []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(15);
  const productSectionRef = useRef(null);

  // ✅ Extract unique category list from ProductData
  const categories = [...new Set(ProductData.map((p) => p.category))];

useEffect(() => {
  if ((selectedCategory || selectedBrand) && productSectionRef.current) {
    const yOffset = -25;
    const elementTop =
      productSectionRef.current.getBoundingClientRect().top +
      window.scrollY +
      yOffset;
    window.scrollTo({ top: elementTop, behavior: "smooth" });
  }
}, [selectedCategory, selectedBrand]);


  // ✅ Brand toggle
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  // ✅ Category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  // ✅ Clear filters
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setCurrentPage(1);
  };

  // ✅ Filter logic
  const filteredProducts = ProductData.filter(
    (p) =>
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(p.category))
  );

  // ✅ Update productsPerPage based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth >= 1536) {
        // Tailwind's 2xl breakpoint = 1536px
        setProductsPerPage(15);
      } else {
        setProductsPerPage(14);
      }
    };

    updateProductsPerPage(); // Run on mount
    window.addEventListener("resize", updateProductsPerPage);

    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // ✅ Scroll on pagination
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    if (productSectionRef.current) {
      const yOffset = -25;
      const elementTop =
        productSectionRef.current.getBoundingClientRect().top +
        window.scrollY +
        yOffset;
      window.scrollTo({ top: elementTop, behavior: "smooth" });
    }
  };

  // ✅ PDF download
  const handleDownload = (pdf) => {
    window.open(pdf, "_blank");
  };

  return (
    <section id="OurProduct" className="container pb-96 lg:pb-72">
      <ShortTitle className="mx-auto">Our Products</ShortTitle>
      <TitleText colorText={"Quality Products Reliable"} text={" Solutions"} />

      <div className="flex flex-col lg:flex-row gap-7 mt-8">
        {/* ================= FILTER SECTION ================= */}
        <div data-aos="fade-right" className="lg:w-4/12 2xl:w-3/12 h-fit p-4 md:p-6 bg-primary rounded space-y-3 md:space-y-5">
          {/* Header */}
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium text-white">Choose Products</h3>
            <button
              onClick={clearFilters}
              className="text-white/90 underline text-sm hover:text-white"
            >
              Clear All
            </button>
          </div>

          {/* Brand Filter */}
          <h3 className="bg-white text-primary p-2 md:p-3 rounded-md">
            Brands
          </h3>
          <div className="grid grid-cols-3 gap-4 py-3">
            {Brands.map((brand) => (
              <div
                key={brand.id}
                onClick={() => toggleBrand(brand.name)}
                className="relative cursor-pointer overflow-hidden"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className={`w-full object-contain transition-transform duration-300 ${
                    selectedBrands.includes(brand.name)
                      ? "scale-105 opacity-90"
                      : ""
                  }`}
                />
                {selectedBrands.includes(brand.name) && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 rounded-sm flex items-center justify-center">
                    <span className="text-white text-3xl font-semibold">
                      <BsCheckLg />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <h3 className="bg-white text-primary p-2 md:p-3 rounded-md">
            Product Categories
          </h3>
          <div className="bg-white/90 border rounded-md mt-1.5 p-3 space-y-2 shadow-md">
            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center space-x-2 text-lg text-gray-700"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-5 h-5 accent-primary"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* ================= PRODUCT SECTION ================= */}
        <div
          ref={productSectionRef}
          className="lg:w-8/12 2xl:w-9/12 flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-3 md:gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                  key={item.id}
                  className="relative flex flex-col justify-between items-start text-start space-y-4 bg-white hover:bg-white hover:text-white duration-500 group rounded-lg shadow-md"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-40 md:h-52 object-contain group-hover:scale-110 duration-500 transition-transform pt-5"
                  />
                  <div className="text-start bg-primary w-full duration-500 space-y-5 flex flex-col items-center justify-between p-2 md:p-4 2xl:p-3 backdrop-blur-sm h-full">
                    <h4 className="text-xl text-white mr-auto text-start leading-5">
                      {item.name}
                    </h4>
                    <button
                      type="button"
                      onClick={() => handleDownload(item.pdf)}
                      className="flex items-center bg-white hover:bg-primary hover:text-white duration-300 transition-colors rounded-md text-primary py-1 px-4 gap-2 text-sm md:text-base ml-auto"
                    >
                      <BiSolidFilePdf className="md:text-3xl" />
                      <span className="leading-none">
                        Download <br /> Brochure
                      </span>
                    </button>
                  </div>
                  <div className="absolute right-2">
                    <img src={item.logo} alt={item.name} className="object-contain w-full " />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 text-lg">
                No products found for selected filters.
              </div>
            )}
          </div>

          {/* Pagination */}
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
