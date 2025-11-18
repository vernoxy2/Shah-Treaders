import React from "react";
// import { ChevronDown } from "lucide-react";
import { PiMouseSimpleFill } from "react-icons/pi";

const SubHeader = ({ Head, text, scrollTarget }) => {
  // Scroll down handler
  const handleScrollDown = () => {
    if (scrollTarget) {
      const targetElement = document.querySelector(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative p-3">
      {/* Background Image */}
      <img
      data-aos="fade"
        src={Head}
        alt="Header background"
        className="object-cover h-auto w-full mx-auto"
      />

      {/* Dark Overlay (optional for readability) */}
      <div className="absolute inset-0 " />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 data-aos="zoom-in" className="text-3xl md:text-6xl lg:text-7xl uppercase font-lexend text-center text-white drop-shadow-lg">
          {text}
        </h1>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={handleScrollDown}
        className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        
        <PiMouseSimpleFill size={30} />
      </button>
    </section>
  );
};

export default SubHeader;
