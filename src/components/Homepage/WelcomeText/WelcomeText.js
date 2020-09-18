import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./WelcomeText.css";

const WelcomeText = () => {
  return (
    <Container fluid className="overview py-md-5 py-4">
      <Container>
        <Row>
          <Col className="col-lg-3 col-12 d-flex justify-content-center align-items-center text-center">
            <div>
              <h2 className="text-center welcome-title">Welcome to</h2>
              <h2 className="text-center brand">INTELLECT</h2>
            </div>
          </Col>
          <Col className="col-lg-9 col-12 d-flex align-items-center px-0 px-md-2">
            <p className="mb-0 welcome-text">
              A leading technology service provider enables companies globally
              to automate processes and transform digitally. Our solutions are a
              combination of an agile collaborative approach and next-gen
              technologies aimed to enhance your business performance. At
              INTELLECT, our deep expertise in the area of process automation,
              infrastructure, and application management is our strategic asset.
              We have been catering to clients from a broad spectrum of
              industries. So if you are looking to improve your business
              efficiency or accelerate revenue growth, we will go the extra mile
              to get you there.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WelcomeText;
