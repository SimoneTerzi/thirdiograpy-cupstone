import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand className="navarbrand">
          <img
            src="https://res.cloudinary.com/dtem45qog/image/upload/v1715430959/Logo_Thirdiograpy-favicon_orytj3.png"
            width="80"
            height="80"
            className="d-inline-block align-center Logo"
            alt="Thirdiography Logo"
            style={{ marginRight: "5px" }}
          />
          <strong>Thirdiograpy</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto NavAcc">
            <Nav.Link
              as={Link}
              to="/#home"
              className="Navlink"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Portfolio"
              className="Navlink"
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Ethical"
              className="Navlink"
            >
              Etichal
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/biography"
              className="Navlink"
            >
              Biografia
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
