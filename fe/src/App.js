import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "././components/Navbar/MyNavbar";
import MyFooter from "././components/Footer/MyFooter";
import HomePage from "../src/pages/HomePage";
import Biography from "./pages/Biography";
import Ethical from "./pages/Ethical";
import Portfolio from "./pages/Portfolio";
import MyPhotoPage from "./components/Content/PhotoPage/MyPhotoPage";

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/Ethical" element={<Ethical />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/photo/:photoId" element={<MyPhotoPage />} />
        </Routes>
        <MyFooter />
      </div>
    </Router>
  );
};

export default App;
