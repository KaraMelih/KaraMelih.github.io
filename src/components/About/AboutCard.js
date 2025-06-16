import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Melih Kara </span>
              <br /> Born in 1994 in Istanbul, Turkey.
              <br /><span className="purple">B.Sc. degree</span> in Physics Engineering from Istanbul Technical University (ITU).
              <br /><span className="purple">M.Sc. degree</span> in Astrophysics and Cosmology at the University of Bonn, Germany.
              <br /><span className="purple">Ph.D.</span> in Experimental Astroparticle Physics from Karlsruhe Institute of Technology (KIT).
              <br />
              <br />
              During my PhD, I worked with the 
              <a href="https://xenonexperiment.org/" target="_blank" rel="noopener noreferrer" className="purple"> XENONnT</a> experiment, focusing on signal detection from rare astrophysical events, including <span className="purple">dark matter</span> and <span className="purple">supernova neutrinos</span>.
              <br /> 
              My work centered on developing real-time software and statistical pipelines to enhance detector sensitivity and performance.
              <br />
              I also contributed actively to the 
              <a href="https://snews2.org/" target="_blank" rel="noopener noreferrer" className="purple"> SuperNova Early Warning System (SNEWS)</a>, building tools to identify and respond to transient astrophysical signals.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Sail away from the safe harbor. <br />
             Catch the trade winds in your sails. explore. dream. discover!"{" "}
          </p>
          <footer className="blockquote-footer">Mark Twain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

