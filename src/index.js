import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"

import Header from "./Header/Header";
import Home from "./Home/Home.js";
import Contact from "./Contact/Contact";
import About from "./About/About";

import Footer from "./Footer/Footer";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
     
    </Routes>
    <Footer />
  </BrowserRouter>
);
