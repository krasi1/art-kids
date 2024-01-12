import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "./Artlcles";
import Home from "./Home";
import MovieClip from "./MovieClip";
import Statistics from "./Statistics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interview" element={<MovieClip />} />
      <Route path="/statistics/" element={<Statistics />} />
      <Route path="/articles/" element={<Articles />} />


    </Routes>
  );
};

export default AppRoutes;
