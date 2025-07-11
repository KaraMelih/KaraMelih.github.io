import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I hold a <b className="purple">Ph.D.</b> in experimental astroparticle physics from the Karlsruhe
              Institute of Technology, where I specialized in <b className="purple">dark matter</b> detection and
              <b className="purple"> supernova</b> neutrino signal analysis.
              <br /><br />
              Much of my work has revolved around data-driven research — developing real-time software, running simulations,
              analyzing detector data, and publishing results in peer-reviewed journals.
              <br /><br />
              I enjoy building tools for <b className="purple">data analysis</b>, <b className="purple">visualization</b>,
              and <b className="purple">machine learning</b>. My current focus is on applying these skills in
              the finance and technology sectors, particularly in data science and quantitative research roles.
              <br /><br />
              Outside of work, I’m a passive investor with a growing interest in financial technologies.
              I also enjoy <i>rowing, collecting vinyl records, cooking, acrylic painting, poker, and sudoku.</i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KaraMelih"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://twitter.com/Soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour  home-social-icons"*/}
              {/*  >*/}
              {/*    <AiOutlineTwitter />*/}
              {/*  </a>*/}
              {/*</li>*/}

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/karamelih/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              {/*<li className="social-icons">*/}
              {/*  <a*/}
              {/*    href="https://www.instagram.com/soumyajit4419"*/}
              {/*    target="_blank"*/}
              {/*    rel="noreferrer"*/}
              {/*    className="icon-colour home-social-icons"*/}
              {/*  >*/}
              {/*    <AiFillInstagram />*/}
              {/*  </a>*/}
              {/*</li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
