import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAtom,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

import { AiOutlineStock } from "react-icons/ai"
import {DiPython} from "react-icons/di";

function Interests() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <h2> Python </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineStock />
          <h2> Statistics </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
          <h2> Science </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
          <h2> Investment </h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
          <h2> Coding </h2>
      </Col>
    </Row>
  );
}

export default Interests;

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";
//
// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }
//
// export default Toolstack;
