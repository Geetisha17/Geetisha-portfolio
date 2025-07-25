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
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that showcase my skills and passion for tech.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Real-Time Code Editor"
              description="A collaborative real-time code editor with live preview and multi-user sync. Built with React, Node.js, and WebSockets, deployed with AWS. Features syntax highlighting, multi-language support, and session persistence."
              ghLink="https://github.com/Geetisha17/Realtime-Code-Editor"
              demoLink="https://code-sync-zeta-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              title="AI Chatbot Assistant"
              description="Conversational AI chatbot using Node.js, OpenAI API, Firebase, and Docker. Features real-time backend, user authentication, chat history, and multilingual responses. Integrated with Redis for performance."
              ghLink="https://github.com/Geetisha17/synChat"
              demoLink="https://syn-chat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Smart Commute App"
              description="A real-time public transportation web app using React Native, Firebase, and Maps API. Tracks buses and trains with live location data, optimized for both web and mobile platforms."
              ghLink="https://github.com/Geetisha17/Smart_Commute"
              demoLink="https://drive.google.com/file/d/1KozmVOhwq7itgSL0GWv_60EkRnM2IUbx/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI Glasses"
              description="Voice-activated glasses prototype using speech-to-text and computer vision. Features object detection and verbal output for accessibility. Built using TensorFlow, React, and integrated microcontroller firmware."
              ghLink="https://github.com/Geetisha17/AI-Glasses"
              demoLink="https://drive.google.com/drive/folders/1OUQ39E4KJz_sdSYM9hdNZo9N2OI8JVBV"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
