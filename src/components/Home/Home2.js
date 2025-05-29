import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

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
              Hey! I’m <b className="purple">Geetisha Tandon</b>, a final-year IT undergrad and an ambitious, self-driven developer with a passion for excellence in software engineering and tech innovation.
              <br />
              <br />
              I’m highly proficient in
              <i>
                <b className="purple"> C++, JavaScript, Node.js, Express.js, MongoDB, SQL, Git, Docker, Redis, and AWS</b>
              </i>. My development toolkit also includes
              <b className="purple"> React.js, Redux, HTML, and CSS</b>.
              <br />
              <br />
              I specialize in building scalable full-stack applications and cloud-integrated platforms. I'm especially interested in backend engineering, real-time applications, and distributed systems.
              <br />
              <br />
              My technical journey is backed by hands-on experience with 
              <i>
                <b className="purple"> containerization, databases, and RESTful APIs</b>
              </i>. I'm currently focused on mastering data structures and algorithms to further solidify my problem-solving expertise.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{borderTopRightRadius:"50px", borderBottomLeftRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VnFVIcr1dlRvnsPu8V03suoTk4zMK848EA&s" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ONLINE</h1>
            <p>
              Let’s connect through the platforms below:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Geetisha17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/geetishatandon"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;