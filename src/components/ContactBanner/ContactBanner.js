import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../Button/Button";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <Container fluid className="contact-banner py-5 py-md-5">
      <Row>
        <Col
          sm={12}
          md={12}
          className="d-flex justify-content-center flex-row flex-md-column align-items-center py-5 mb-3"
        >
          <div className="d-flex flex-column align-items-center">
            <h2 className="contact-b-title py-2">Get in touch with us</h2>
            <Button buttonText="Let's Connect" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactBanner;
