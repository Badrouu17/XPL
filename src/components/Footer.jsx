import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaClipboard, FaNewspaper, FaSpaceShuttle } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row className="footer-row">
          <Col md data-aos="fade-in" data-aos-delay="500">
            <div className="footer-cols">
              <FaClipboard className="footer-cols-icon"></FaClipboard>
              <h3>NASA's api list</h3>
              <p className="footer-cols-p">
                NASA encourages developers to leverage their apis and use them
                in their applications!
              </p>
              <Button variant="secondary">
                <a href="https://api.nasa.gov/#getting-started">Learn more</a>
              </Button>
            </div>
          </Col>
          <Col md data-aos="fade-in" data-aos-delay="1000">
            <div className="footer-cols">
              <FaNewspaper className="footer-cols-icon"></FaNewspaper>
              <h3>Daily News Api</h3>
              <p className="footer-cols-p">
                Official page for the rendering api I used to map out NASA's
                Daily news.
              </p>
              <Button variant="secondary">
                <a href="https://api.nasa.gov/api.html#apod">Learn more</a>
              </Button>
            </div>
          </Col>
          <Col md data-aos="fade-in" data-aos-delay="1500">
            <div className="footer-cols">
              <FaSpaceShuttle className="footer-cols-icon"></FaSpaceShuttle>
              <h3>NASA's open source page</h3>
              <p className="footer-cols-p">
                Want to contribute to the wonders of space exploration?
              </p>
              <Button variant="secondary">
                <a href="https://www.nasa.gov/open/open-source-development.html">
                  Learn more
                </a>
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              ©2019 Code and Design by Badrouu Laabed. Data provided by NASA.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
