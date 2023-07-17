import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import DogNet from "./DogNet";
import DogsVsCats from "./Dogs_VS_Cats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogNet" element={<DogNet />} />
        <Route path="/dogs_vs_cats" element={<DogsVsCats />} />
      </Routes>
    </Router>
  );
}

export default App;
