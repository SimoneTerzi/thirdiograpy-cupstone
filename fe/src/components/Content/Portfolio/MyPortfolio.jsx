import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Homepage from "../../../pages/HomePage";
import "./MyPortfolio.css";


const MyPortfolio = () => {
  return (
    <main className="PortfoliolMain">
      <h2 className="PortfolioTitle">My Portfolio</h2>

      
      <Link to="/#home">
        <Homepage />
        <Button className="PortfolioButton" variant="primary">
          Return to Homepage
        </Button>
      </Link>
    </main>
  );
};

export default MyPortfolio;
