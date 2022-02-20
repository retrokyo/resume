import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar
      variant="dark"
      bg="dark"
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="border-bottom border-3 border-light"
    >
      <Navbar.Brand href="#top">Reeves Froning</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarColapse">
        <Nav className="me-auto my-3 my-lg-0">
          <Nav.Link href="#contact-info" target="_top">
            Contact
          </Nav.Link>
          <Nav.Link href="#pro-skills" target="_top">
            Professional Skills
          </Nav.Link>
          <Nav.Link href="#dev-skills" target="_top">
            Developing/At Home Skills
          </Nav.Link>
          <NavDropdown title="Work Experience" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#rakuten" target="_top">
              Rakuten Inc.
            </NavDropdown.Item>
            <NavDropdown.Item href="#oyo" target="_top">
              OYO
            </NavDropdown.Item>
            <NavDropdown.Item href="#honestbee" target="_top">
              honestbee
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
