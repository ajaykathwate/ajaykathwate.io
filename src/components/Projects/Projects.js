import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              isBlog={false}
              title="Blogging App API Service"
              description="In this project, I developed a robust and secure API Service for a Blogging
                            Application using Java, Spring Boot, Spring Data JPA, JWT, and Spring Security with role-based authentication,and authorization. Utilized JWT for token-based authentication and Spring Security for managing user authentication and authorization. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Management System"
              description="Developed a web-based Employee Management System using Java, Spring
                Boot, Hibernate, and MySQL. Implemented CRUD (Create, Read, Update, Delete) functionalities for managing employee records. Employee Management System project showcased my ability to utilize Java, Spring Boot, Hibernate, and MySQL to build a functional application with CRUD functionalities."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="My Calender"
              description="Developed a Google Calendar clone using React.js and Tailwind CSS. Implemented the core functionalities of the calendar application, including creating and managing events, setting reminders, drag-and-drop functionality for easy event scheduling and rearrangement."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
