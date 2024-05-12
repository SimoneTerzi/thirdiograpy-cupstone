import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import Biography from "./pages/Biography";
import Ethical from "./pages/Ethical";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/Ethical" element={<Ethical />} />
      </Routes>
    </Router>
  );
};

export default App;
