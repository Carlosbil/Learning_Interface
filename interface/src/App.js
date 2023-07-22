import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import DogNet from "./DogNet";
import DogsVsCats from "./Dogs_VS_Cats";
import Cifar100 from "./Cifar100";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogNet" element={<DogNet />} />
        <Route path="/dogs_vs_cats" element={<DogsVsCats />} />
        <Route path="/cifar100" element={<Cifar100 />} />

      </Routes>
    </Router>
  );
}

export default App;
