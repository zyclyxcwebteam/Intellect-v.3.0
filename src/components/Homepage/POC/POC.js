// POC - Proof of Concept section

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./POC.css";

const POC = () => {
  return (
    <Container fluid className="py-5 poc-wrapper">
      <Container>
        <h2 className="text-md-center text-left poc-title">
          <small>Fostering your trust in us with</small>
          <br />
          Free Proof of Concept
        </h2>
        <p className="text-justify py-md-4 py-2">
          We work towards establishing a trusting partnership with our clients
          by offering free proof of concept as part of our value-added services
          in some projects. It allows us to demonstrate our work potential by
          developing an advanced prototype of the project. Also, you get an
          opportunity to test its feasibility in your business process, hence
          optimizing the experience.
        </p>

        <Row className="py-3">
          <Col sm="12" md="4">
            <Row className="forecast py-4">
              <Col className="d-flex flex-column align-items-center">
                <h3 className="poc-card-title">Forecast</h3>
                <p className="pt-3">
                  Provides a tool to forecast the feasibility of the projects.
                </p>
              </Col>
            </Row>
          </Col>

          <Col sm="12" md="4">
            <Row className="report py-4">
              <Col className="d-flex flex-column align-items-center">
                <h3 className="poc-card-title">Report</h3>
                <p className="pt-3">
                  Get a complete report on project evaluation.
                </p>
              </Col>
            </Row>
          </Col>

          <Col sm="12" md="4">
            <Row className="effective py-4">
              <Col className="d-flex flex-column align-items-center">
                <h3 className="poc-card-title">Cost Effective</h3>
                <p className="pt-3">Saves your business time and money.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default POC;
