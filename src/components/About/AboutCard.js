import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Bahadur </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently getting Education at Suffah university.
            <br />
            I have completed Intermediate from Ziauddin University.
            <br />
            <br />
            I  am sewing machine operator 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> sewing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ali Bahadur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
