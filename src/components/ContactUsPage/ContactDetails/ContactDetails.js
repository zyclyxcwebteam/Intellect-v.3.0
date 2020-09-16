import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <Container fluid className="py-4">
      <Container className="py-3">
        <Row>
          <Col
            sm="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="contact-icon mx-4">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div>
              <h4 className="contact-title">OFFICE</h4>
              <p className="contact-text">
                Commercial Bank Plaza, Level 14, West Bay, P.O 27111, Doha,
                Qatar
              </p>
            </div>
          </Col>
          <Col
            sm="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="contact-icon mx-4">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div>
              <h4 className="contact-title">CONTACT</h4>
              <p className="contact-text">(+974) 44528242</p>
            </div>
          </Col>
          <Col
            sm="12"
            md="4"
            className="d-flex align-items-center justify-content-center"
          >
            <div className="contact-icon mx-4">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div>
              <h4 className="contact-title">EMAIL</h4>
              <p className="contact-text">info@intellect-qa.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactDetails;
