import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./WelcomeText.css";

const WelcomeText = () => {
  return (
    <Container fluid className="overview py-5">
      <Container>
        <Row>
          <Col className="col-lg-3 col-12 d-flex justify-content-center align-items-center text-center">
            <div>
              <h2 className="text-center welcome-title">Welcome to</h2>
              <h2 className="text-center brand">INTELLECT</h2>
            </div>
          </Col>
          <Col className="col-lg-9 col-12 d-flex align-items-center">
            <p className="mb-0 welcome-text">
              A global automation technology provider leading the industry with
              innovative ideas. With our agile collaborative approach our team
              strives to provide custom solutions. These solutions together with
              our next-gen technologies enable the businesses to outperform
              their competition. Our deep expertise in the area of process
              automation, infrastructure and application management is our
              strategic asset. Whether you want to improve your business
              efficiency or accelerate revenue growth, INTELLECT Technologies
              will go an extra mile to get you there.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeText;
