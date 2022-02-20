import React, { useRef } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar/CustomNavbar.js";
import Contact from "./Contact/Contact.js";
import DevSkills from "./DevSkills/DevSkills.js";
import Education from "./Education/Education";
import Header from "./Header/Header.js";
import PrinterWrapper from "./PrinterWrapper/PrinterWrapper.js";
import ProSkills from "./ProSkills/ProSkills";
import WorkExp from "./WorkExp/WorkExp";

const App = () => {
  const printableRef = useRef();

  return (
    <div className="App">
      <CustomNavbar printableRef={printableRef} />
      <PrinterWrapper printableRef={printableRef} bodyClass="text-dark">
        <Container fluid className="text-light printable">
          <Header />
          <Row className="gx-0 mt-4">
            <Col
              md="4"
              className="border-md-end border-end border-3 border-light px-2"
            >
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
      </PrinterWrapper>
    </div>
  );
};

export default App;
