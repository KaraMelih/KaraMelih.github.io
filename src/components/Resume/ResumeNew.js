// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Melih_Kara-resume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function ResumeNew() {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download CV
//           </Button>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default ResumeNew;
// import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import Particle from "../Particle";

import { AiOutlineDownload } from "react-icons/ai";
import melihImage from "../../Assets/MelihKara-suit.jpg";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";

function ResumeNew() {
  const headers = [
  {
    title: "Experience",
    content: (
      <div>
        <p><strong>Post-doctoral Researcher</strong> at KIT<br />
        Extended PhD work; boosted detection efficiency and co-authored a publication.</p>
        <p><strong>PhD Researcher</strong> at KIT<br />
        Developed real-time alert systems (SNEWS), statistical modeling, and ML pipelines for detector data.</p>
        <p><strong>Student Assistant</strong> at KIT and Uni-Bonn<br />
        Taught experimental physics and programming (C++/Python), supported data-driven coursework.</p>
      </div>
    )
  },
  {
    title: "Education",
    content: (
      <div>
        <p><strong>Ph.D. in Astroparticle Physics</strong><br />
        Karlsruhe Institute of Technology (Magna Cum Laude)</p>
        <p><strong>M.Sc. in Astrophysics</strong><br />
        University of Bonn</p>
        <p><strong>B.Sc. in Physics Engineering</strong><br />
        Istanbul Technical University</p>
      </div>
    )
  },
  {
    title: "Certificates",
    content: (
      <div>
        <p>• The Equities Trader – Financial Edge (2025)</p>
        <p>• Markets Quant Simulation – Forage (2025)</p>
        <p>• Algorithmic Trading & Financial Foundations – LinkedIn (2024)</p>
        <p>• Physics Computing & Data Tech – CERN (2022)</p>
      </div>
    )
  },
  {
    title: "Skills",
    content: (
      <div>
        <p><strong>Languages & Tools:</strong> Python, Git, LaTeX, VSCode, Linux</p>
        <p><strong>Data & ML:</strong> Statistical modeling, visualization, ML pipelines, time series</p>
        <p><strong>Development:</strong> OOP, Agile, APIs, CI/CD, scientific computing</p>
      </div>
    )
  }
];


  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", zIndex: 10 }} className="mb-4">
          <Button
            variant="primary"
            href="/Melih_Kara-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />&nbsp;Download Full Resume (PDF)
          </Button>


        </Row>

        <Row className="align-items-start">
          <Col md={7}>
          <p style={{ fontSize: '1.5rem' }}> <strong>Dr. Melih Kara</strong><br /></p>
          <div className="intro-box mb-4">
  <p>
    Quantitative researcher with a Ph.D. in Astroparticle Physics, transitioning into finance and analytics.
    Experienced in data analysis, statistical modeling, and machine learning.
  </p>
</div>

            <Accordion defaultActiveKey="-1" >
              {headers.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>{item.content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          <Col md={5} className="text-center">
            <img
              src={melihImage}
              alt="Melih Kara"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
