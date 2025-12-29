import React, {  useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop"; // 👈 add this
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    // Initialize AOS once after component mounts
    AOS.init({
      duration: 800, // animation duration in ms
      delay: 100, // default delay in ms
      offset: -10,
    });

    // Refresh AOS in case new elements are added dynamically
    AOS.refresh();
  }, []); // empty dependency array = run only once
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 ensures top scroll on navigation */}
      <div className="bg-[#EBF1F3]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
