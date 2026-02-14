import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./assets/ShortLogo.svg";
import LazyImage from "./Components/LazyImage";

// ✅ Lazy load pages
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const NotFound = lazy(() => import("./Components/NotFound"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      offset: -10,
    });

    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-[#EBF1F3]">
        <Navbar />

        {/* ✅ Wrap Routes with Suspense */}
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center h-screen text-xl space-y-5">

              <LazyImage src={Logo} alt="" loading="lazy" className="animate-pulse scale-125"/>
              <p className="text-primary text-sm">Loading...</p>

            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
