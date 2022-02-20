import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar/CustomNavbar.js";
import Contact from "./Contact/Contact.js";
import DevSkills from "./DevSkills/DevSkills.js"
import Education from "./Education/Education";
import Header from "./Header/Header.js";
import ProSkills  from "./ProSkills/ProSkills";
import WorkExp from "./WorkExp/WorkExp";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Container fluid className="text-light">
        <Header />
        <Row className="gx-0 mt-4">
          <Col md="4" className="border-md-end border-end border-3 border-light px-2">
            <Contact />
            <ProSkills />
            <DevSkills />
          </Col>
          <Col md="8">
            <WorkExp />
            <Education />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
