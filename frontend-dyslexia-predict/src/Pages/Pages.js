import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Reports from "./Report";

const Pages = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full">
      <Routes Location={location.pathname} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/test/" element={<Test />} />
        <Route path="/result" element={<Reports />} />

      </Routes>
    </div>
  );
};

export default Pages;
