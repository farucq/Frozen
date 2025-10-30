import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import Franchise from "./pages/franchise/franchise"; 
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import Blog1 from "./pages/Blog/Blog1";
import Blog2 from "./pages/Blog/Blog2";
import Blog3 from "./pages/Blog/Blog3";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
       <Route path="/franchise" element={<Franchise />} /> 
       <Route path="/gallery" element={<ComingSoon />} /> 
       <Route path="/rewards" element={<ComingSoon />} /> 
       <Route path="/blog/1" element={<Blog3 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog1 />} />
    </Routes>
  );
};

export default AppRoutes;
