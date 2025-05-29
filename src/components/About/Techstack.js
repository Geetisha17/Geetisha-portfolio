import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiRedux,
  SiFirebase,
  SiAppwrite,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        <CgCPlusPlus />,
        <DiJava />,
        <DiJavascript1 />,
        <DiHtml5 />,
        <DiCss3 />,
        <DiReact />,
        <SiRedux />,
        <DiNodejs />,
        <DiMongodb />,
        <SiPostgresql />,
        <SiRedis />,
        <SiFirebase />,
        <SiAppwrite />,
        <SiDocker />,
        <SiAmazonaws />,
        <DiGit />,
      ].map((Icon, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {Icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;