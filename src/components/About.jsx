import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  FaUserAstronaut,
  FaFingerprint,
  FaWpexplorer,
  FaSearch
} from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <h1>ABOUT</h1>
      <div>
        <Container>
          <Row className="about-row">
            <Col md data-aos="fade-down" data-aos-delay="500">
              <div>
                <Image
                  className="about-images"
                  src={require("./../img/nasa-2.jpg")}
                  rounded
                />
                <h1>
                  {" "}
                  <span>
                    {" "}
                    <FaWpexplorer></FaWpexplorer>{" "}
                  </span>{" "}
                  Explore :
                </h1>
                <p>Explore space through maps pulled from NASA's api.</p>
              </div>
            </Col>
            <Col md data-aos="fade-left" data-aos-delay="500">
              <div>
                <Image
                  className="about-images"
                  src={require("./../img/nasa-7.jpg")}
                  rounded
                />
                <h1>
                  {" "}
                  <span>
                    {" "}
                    <FaSearch></FaSearch>{" "}
                  </span>{" "}
                  Browse :
                </h1>
                <p>
                  Browse through exciting layers and learn more about how NASA
                  collects data.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="about-row">
            <Col
              className="about-3-desc"
              md
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div>
                <h1>
                  {" "}
                  <span>
                    {" "}
                    <FaFingerprint></FaFingerprint>{" "}
                  </span>{" "}
                  Interact :
                </h1>
                <p>Interact with view layers of a map's surfaces.</p>
                <Button variant="outline-secondary">
                  <a href="https://api.nasa.gov/">
                    LEARN ABOUT NASA'S API{" "}
                    <span>
                      {" "}
                      <FaUserAstronaut></FaUserAstronaut>{" "}
                    </span>
                  </a>
                </Button>
              </div>
            </Col>
            <Col md data-aos="fade-up" data-aos-delay="500">
              <div>
                <Image
                  className="about-images"
                  src={require("./../img/nasa-5.jpg")}
                  rounded
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
