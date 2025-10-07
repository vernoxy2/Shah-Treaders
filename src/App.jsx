import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" bg-[#EBF1F3]">
        <Routes>
        <Route path="/" element={<h1><Home/></h1>} />
        <Route path="/about" element={<h1><About/></h1>} />
        <Route path="/product" element={<h1><Products/></h1>} />
        <Route path="/contact" element={<h1><Contact/></h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
