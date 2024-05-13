import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./MyPortfolio.css";

const MyPortfolio = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/api/photo-portfolio/getPhotosPortfolio"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <main className="PortfoliolMain justify-content-center">
      <h2 className="PortfolioTitle">My Portfolio</h2>
      <div className="PhotoGrid">
        <Row xs={1} sm={2} md={3} lg={4} className="justify-content-center PhotoGridRow">
          {photos.map((photo) => (
            <Col key={photo._id} className="d-flex align-items-stretch">
              <div>
                <Link to={`/photo/${photo._id}`}>
                  <Card className="w-100" style={{ margin: "1rem" }}>
                    <Card.Img variant="top" src={photo.url} alt={photo.title} />
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Link to="/#home">
        <Button className="PortfolioButton" variant="primary">
          Return to Homepage
        </Button>
      </Link>
    </main>
  );
};

export default MyPortfolio;

