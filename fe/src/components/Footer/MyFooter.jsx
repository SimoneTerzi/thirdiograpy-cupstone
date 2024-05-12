import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./MyFooter.css";

const MyFooter = () => {
  return (
    <footer className="footer">
      <Container className="FooterCont">
        <Row>
          <Col md={4} className="text-center">
            <h3 className="h3title">Numero di Telefono</h3>
            <p className="contact">+39 3475177824</p>
          </Col>
          <Col md={4} className="text-center">
            <h3 className="h3title">Email</h3>
            <p className="contact">thirdiograpy@gmail.com</p>
          </Col>
          <Col md={4} className="text-center">
            <h3 className="h3title">Seguimi</h3>
            <div className="icon-container">
              <a
                href="https://www.linkedin.com/in/simone-terzi-57a92a184"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="iconStyle" />
              </a>
              <a
                href="https://www.instagram.com/thirdiograpy/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" className="iconStyle" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <p className="contactSD">
              Designed by Thirdiograpy | Powered by Thirdiograpy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
