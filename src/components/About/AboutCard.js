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
            <br /> Got the <span className="purple">B.Sc. degree</span> in Physics Engineering from Istanbul Technical University, ITU.
            <br /> Later, I moved to Bonn, Germany where I got my <span className="purple">M.Sc. degree</span> in Astrophysics and Cosmology.
            <br /> Currently, a <span className="purple">Ph.D. candidate</span> at Karlsruhe Institute Technology, KIT.
            <br />
            <br />
            I work in an experiment called
            <a href="https://xenonexperiment.org/" target="_blank" rel="noopener noreferrer" className="purple"> XENONnT</a>, we are trying to detect signals from rare events, such as Dark Matter.
            <br /> My main task is however to hunt <span className="purple">Supernovae</span> and study our detectors sensitivities.
            <br /> Along with the analysis, I also do a lot of programming work for SuperNova Early Warning System,
            <a href="https://snews2.org/" target="_blank" rel="noopener noreferrer" className="purple"> SNEWS</a>.
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

