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
              I am doing a <b className="purple"> Ph.D. </b> in experimental astroparticle physics at the Karlsruhe
              Institute of Technology, where I mostly focus on direct <b className="purple">dark matter</b> searches and
              <b className="purple"> supernova</b> neutrino detection.
              <br /><br/>
              Not so surprisingly, my days and nights blur together like any other academic. While spending most of
              my time in front of a computer,
              running simulations, analyzing data, writing papers, and occasionally doing some small hardware work,
              I also enjoy doing other things.
              <br/><br/>
              Data visualization, automation, interactive tools, statistical analysis, and machine learning are some of the things
              I enjoy doing.
              <br /><br/>
              I am also a passive market investor with an interest in financial technologies. My non-scholar interests
              include <i>rowing, vinyl records, cooking, acrylic painting, poker and sudoku.</i>
              <br />
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
