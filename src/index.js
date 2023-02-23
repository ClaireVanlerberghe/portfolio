import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"

import Header from "./Header/Header";
import Home from "./Home/Home.js";
import Footer from "./Footer/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
