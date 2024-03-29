import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <Container fluid className="footer-contact pt-4">
        <ul className="contact-links">
          <li>
            <FontAwesomeIcon icon="phone-alt" />
            <a href="tel:+974 44528242">(+974) 44528242</a>
          </li>
          <li>
            <FontAwesomeIcon icon="at" />
            <a href="mailto:info@intellect-qa.com">info@intellect-qa.com</a>
          </li>
          <li className="visit-us-link">
            <FontAwesomeIcon icon="map-marker-alt" />
            <a href="https://www.google.com/maps/place/Intellect+Technologies/@25.3134277,51.5182265,15z/data=!4m5!3m4!1s0x0:0xc13f26eb8cd56046!8m2!3d25.3134277!4d51.5182265">
              Visit us
            </a>
          </li>
        </ul>
      </Container>
      <Container fluid className="pt-3">
        <Row>
          <Col sm="12" md="4" className="social-media px-0">
            <ul className="py-1">
              <li>
                <a
                  href="https://www.facebook.com/Intellect.QA"
                  title="facebook"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/intellect.qa/"
                  title="instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Intellect_QA" title="twitter">
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/intellect-qa/"
                  title="Linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="4">
            <p className="m-0 text-center">
              &copy;2019 INTELLECT-QA. All rights reserved
            </p>
          </Col>
          <Col sm="12" md="4" className="privacy px-0">
            <ul className="py-1 ml-auto">
              <li>
                <a href="/privacy" title="privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" title="Terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/sitemap" title="sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
