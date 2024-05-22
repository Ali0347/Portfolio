import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiNodemon,
  SiNpm,
  SiYarn,
  SiBootstrap,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodemon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYarn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
    </Row>
  );
}

export default Toolstack;
