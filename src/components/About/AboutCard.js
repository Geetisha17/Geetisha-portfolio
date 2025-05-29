import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I’m <span className="purple">Geetisha Tandon</span>, a final-year B.Tech (Information Technology) undergraduate from India, with a strong foundation in full-stack development and a passion for solving real-world problems through scalable software solutions.
            <br />
            <br />
            I specialize in designing and building modern, high-performance web applications using technologies like <b className="purple">JavaScript, C++, React.js, Redux, Node.js, Express.js, MongoDB, SQL, Docker, Redis, and AWS</b>. My experience spans both frontend and backend systems, with a strong emphasis on clean architecture, performance, and maintainability.
            <br />
            <br />
            I’ve developed and deployed production-level applications that integrate complex backend logic with seamless, user-centric interfaces. Beyond technical development, I’m focused on creating impactful digital products that combine innovation with usability.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;