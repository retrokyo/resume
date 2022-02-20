import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Header.css";
import profilePic from "../resume_img_sq.jpeg";

function Header() {
  return (
    <Row className="gx-0">
      <Col md="3" className="profilePicDiv px-0">
        <Image roundedCircle src={profilePic} className="profilePic border"></Image>
      </Col>
      <Col md="9" className="title ps-md-4">
        <h1 className="display-6 text-start">Reeves Froning</h1>
        <h2 className="text-start">Data Science Engineer </h2>
        <p className="text-start">
          I am part software engineer, and part data analyst with a passion for
          learning and applying new technologies
        </p>
      </Col>
    </Row>
  );
}

export default Header;
