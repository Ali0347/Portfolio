import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shop from "../../Assets/Projects/shop.png";
import emotion from "../../Assets/Projects/emotion.png";
import liveClock from "../../Assets/Projects/live.png";
import science from "../../Assets/Projects/science.png";
import simple from "../../Assets/Projects/simp.png";
import calculator from "../../Assets/Projects/cal.png";
import karate from "../../Assets/Projects/karate.png";
import gym from "../../Assets/Projects/gym.png";
import online from "../../Assets/Projects/online.png";
import full from "../../Assets/Projects/full.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={science}
              isBlog={false}
              title="Science Technology"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/science-technology"
              demoLink="https://book-bootstrap-5.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online}
              isBlog={false}
              title="Online Shope"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/online-shope"
              demoLink="https://stbootstrapweb.web.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={karate}
              isBlog={false}
              title=" Karate Club"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/karate-club"
              demoLink="https://princealiweb.web.app/"
            />
          </Col>

     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="My Shope"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/my-shope"
              demoLink="https://newbagwebsite.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simple}
              isBlog={false}
              title="Simple Website "
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project. You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/simple-web"
              demoLink="https://newdesertwebsite.web.app/#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="My Gym"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/my-gym"
              demoLink="https://newgymwebsite.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={full}
              isBlog={false}
              title="Full Bootstrap Web"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/full-bootstrap-web"
              demoLink="https://mysecondbootstrap.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/react_calculator"
              demoLink="https://react-calculator-ali.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liveClock}
              isBlog={false}
              title="Live Clock"
              description="In making this project, I got a lot of help to develop my skills
              and I had a lot of fun making this project.You can also see demo.Click below to view the demo."
              ghLink="https://github.com/Ali0347/live_clock"
              demoLink="https://live-clock-ali.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
