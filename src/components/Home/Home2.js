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
              By day, I'm a Ph.D. student, and by night, I'm also a Ph.D. student. Cause, you know. Academy.
              <br />
              But I do enjoy stealing some time to myself and do the things I (also) enjoy and that are not related to my research.
              My field is _experimental astroparticle physics_. Sounds cool? Well, while I spend majority of the time in front of a computer,
              every now and then there are nice hardware works that I get involved, if not, twice a year I go to "Gran Sasso" to baby-sit our precious experiment.
              I have been doing science for many years now. For the most part,
              I sit in front of a computer and analyze or simulate stuff.️
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are &nbsp;
              <i>
                Statistics, Supernovae, Dark Matter, Machine Learning, Visualisation,
                Entrepreneurship, Financial Technologies.
              </i>
              <br />
              I also like to simplify and automate things! I believe that explaining things in a level that anyone can
              understand is a crucial aspect.
              <br />
              Whenever possible, I also try to develop interactive tools using dash, heroku, and node!
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
