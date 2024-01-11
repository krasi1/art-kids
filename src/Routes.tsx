import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "./Artlcles";
import Home from "./Home";
import MovieClip from "./MovieClip";
import Statistics from "./Statistics";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/art-kids/" element={<Home />} />
      <Route path="/art-kids/interview" element={<MovieClip />} />
      <Route path="/art-kids/statistics/" element={<Statistics />} />
      <Route path="/art-kids/articles/" element={<Articles />} />


    </Routes>
  );
};

export default AppRoutes;
