import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../Components/SubHeader";
import Head from "../../assets/Products/HeadImg.webp";
import Footer from "../../Components/Footer";
import Together from "../../Components/Together";
import ShortTitle from "../../Components/ShortTitle";
import TitleText from "../../Components/TitleText";
import useMetaTags from "../../hooks/useMetaTags";

import { FaHome, FaAngleRight, FaLayerGroup, FaTags, FaBuilding, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { categories } from "../../Data/CategoryList";
import { Brands } from "../../Data/Brands";

const Sitemap = () => {
  // SEO Meta tags for Sitemap page
  useMetaTags({
    title: "Sitemap | Shah Traders – Industrial Valves, Pumps & Equipment",
    description: "Explore the site map of Shah Traders. Quickly access our main pages, product categories (valves, pumps, motors, gaskets), and brand partners.",
    keywords: "Shah Traders sitemap, website directory, industrial valves sitemap, Wilo pumps, Havells motors, Teadit gaskets",
  });

  const mainPages = [
    { title: "Home Page", path: "/", desc: "Overview of Shah Traders, core offerings, featured brands, and industrial strength." },
    { title: "About Us", path: "/aboutus", desc: "Company history since 1992, mission, core values, certifications, and brand partnerships." },
    { title: "Products Directory", path: "/product", desc: "Full catalog of valves, pumps, electric motors, and industrial gasket solutions." },
    { title: "Contact Us", path: "/contact", desc: "Get in touch with our sales team, view office locations, and request quotes." },
    { title: "HTML Sitemap", path: "/sitemap", desc: "Complete visual structure and navigation map of Shah Traders website." },
  ];

  return (
    <div className="overflow-hidden bg-[#EBF1F3] min-h-screen">
      {/* SubHeader */}
      <SubHeader Head={Head} text="Sitemap" scrollTarget="#SitemapContent" />

      {/* Breadcrumb Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 py-3 shadow-sm">
        <div className="container flex items-center gap-2 text-sm md:text-base font-karla text-textcolor">
          <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <FaHome className="text-primary" />
            <span>Home</span>
          </Link>
          <FaAngleRight className="text-gray-400 text-xs" />
          <span className="text-primary font-semibold">Sitemap</span>
        </div>
      </div>

      {/* Main Sitemap Content */}
      <section id="SitemapContent" className="py-12 md:py-20">
        <div className="container space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3">
            <ShortTitle className="mx-auto">Website Structure</ShortTitle>
            <TitleText colorText="Visual" text="Sitemap & Directory" brclass="hidden" />
            <p className="max-w-2xl mx-auto text-textcolor text-base md:text-lg font-karla">
              Easily navigate through all sections, product categories, authorized brand partners, and contact channels of Shah Traders.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Main Pages */}
            <div
              data-aos="fade-up"
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FaHome />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-lexend text-textdark">Main Pages</h3>
                    <p className="text-xs text-textcolor font-karla">Core website sections</p>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {mainPages.map((page, index) => (
                    <li key={index} className="group/item">
                      <Link
                        to={page.path}
                        className="flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-center justify-between text-textdark font-lexend font-semibold group-hover/item:text-primary transition-colors">
                          <span>{page.title}</span>
                          <FaAngleRight className="text-xs text-gray-400 group-hover/item:translate-x-1 transition-transform" />
                        </div>
                        <span className="text-xs text-textcolor font-karla line-clamp-1">{page.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Product Categories */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FaLayerGroup />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-lexend text-textdark">Product Categories</h3>
                    <p className="text-xs text-textcolor font-karla">Filter by category</p>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {categories.map((cat, index) => (
                    <li key={index} className="group/item">
                      <Link
                        to={`/product?category=${encodeURIComponent(cat.name)}`}
                        className="flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex items-center justify-between text-textdark font-lexend font-semibold group-hover/item:text-primary transition-colors">
                          <span>{cat.name}s</span>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-karla">
                            View All
                          </span>
                        </div>
                        <span className="text-xs text-textcolor font-karla">
                          {cat.subcategories.slice(1).join(", ")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Authorized Brands */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FaTags />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-lexend text-textdark">Authorized Brands</h3>
                    <p className="text-xs text-textcolor font-karla">Global manufacturing partners</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  {Brands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/product?brand=${encodeURIComponent(brand.name)}`}
                      className="p-2.5 rounded-lg border border-gray-100 bg-gray-50/50 flex items-center justify-between text-sm font-lexend text-textdark hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-200 group/brand"
                    >
                      <span className="font-semibold text-xs md:text-sm">{brand.name}</span>
                      <FaAngleRight className="text-xs text-gray-400 group-hover/brand:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Address Card */}
          <div
            data-aos="zoom-in"
            className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl shrink-0">
                <FaBuilding />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold font-lexend text-textdark">Shah Traders Head Office</h4>
                <p className="text-sm text-textcolor font-karla flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary shrink-0" />
                  321-322, 3rd Floor, B wing, Phase 2, GIDC, Vapi, Gujarat 396195
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+919879614936"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 text-primary font-lexend font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <FaPhoneAlt /> Call Us
              </a>
              <a
                href="mailto:info@shahtraders.biz"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-100 text-textdark font-lexend font-semibold text-sm hover:bg-textdark hover:text-white transition-colors duration-200"
              >
                <FaEnvelope /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer>
        <Together />
      </Footer>
    </div>
  );
};

export default Sitemap;
