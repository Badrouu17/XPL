import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Maps = () => {
  return (
    <div id="maps">
      <h1 className="maps-title">MAPS</h1>
      <div>
        <Container>
          <Row className="maps-rows" data-aos="fade-right" data-aos-delay="500">
            <Col md>
              <div>
                <Image
                  className="maps-images"
                  src={require("./../img/moon.png")}
                />
              </div>
            </Col>
            <Col className="maps-desc" md>
              <div>
                <h3>MOON</h3>
                <p>
                  The Moon is an astronomical body that orbits planet Earth and
                  is Earth's only permanent natural satellite. It is the
                  fifth-largest natural satellite in the Solar System, and the
                  largest among planetary satellites relative to the size of the
                  planet that it orbits (its primary).
                </p>
                <Button variant="outline-secondary">
                  <a href="http://coryg89.github.io/MoonDemo/">EXPLORE MAP</a>
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="maps-rows" data-aos="fade-left" data-aos-delay="500">
            <Col className="maps-desc" md>
              <div>
                <h3>MARS</h3>
                <p>
                  Mars is the fourth planet from the Sun and the second-smallest
                  planet in the Solar System after Mercury. In English, Mars
                  carries a name of the Roman god of war, and is often referred
                  to as the "Red Planet" because the reddish iron oxide
                  prevalent on its surface gives it a reddish appearance that is
                  distinctive.
                </p>
                <Button variant="outline-secondary">
                  <a href="https://itch.io/embed-upload/788033?color=333333">
                    EXPLORE MAP
                  </a>
                </Button>
              </div>
            </Col>
            <Col md>
              <div>
                <Image
                  className="maps-images"
                  src={require("./../img/mars.png")}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Maps;
