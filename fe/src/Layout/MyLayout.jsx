import React from "react";
import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";


const Mylayout = ({ children }) => {
  return (
    <>
      <MyNavbar />
      {children}
      <MyFooter />
    </>
  );
};

export default Mylayout;
