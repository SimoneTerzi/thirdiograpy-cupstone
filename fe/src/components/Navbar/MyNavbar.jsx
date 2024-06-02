import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MyNavbar.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand className="justify-content-center navarbrand">
          <img
            src="https://res.cloudinary.com/dtem45qog/image/upload/v1715430959/Logo_Thirdiograpy-favicon_orytj3.png"
            width="80"
            height="80"
            className="d-inline-block align-center"
            alt="Thirdiography Logo"
            style={{ marginRight: "5px" }}
          />
          <strong>Thirdiograpy</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-center NavAcc"
            style={{ width: "70%" }}
          >
            <Nav.Link
              to="/#home"
              className="Navlink"
              style={{ marginRight: "3rem", marginLeft: "25px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              to="/Portfolio"
              className="Navlink"
              style={{ marginRight: "3rem" }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              to="/Ethical"
              className="Navlink"
              style={{ marginRight: "3rem" }}
            >
              Etichal
            </Nav.Link>

            <Nav.Link
              to="/biography"
              className="Navlink"
              style={{ marginRight: "3rem" }}
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
