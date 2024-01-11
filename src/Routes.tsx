import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieClip from "./MovieClip";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/interview" element={<MovieClip />} />
      <Route path="/" element={<Home />} />

    </Routes>
  );
};

export default AppRoutes;
