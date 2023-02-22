import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import Header from "./Header/Header";
import Home from "./Home/Home.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
    
  </BrowserRouter>
);
