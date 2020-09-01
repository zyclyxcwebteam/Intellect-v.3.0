/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout/Layout";
import Clients from "../components/Homepage/Clients";
import Partners from "../components/Homepage/Partners";
import ImageCarousel from "../components/Homepage/ImageCarousel";
import OurServices from "../components/Homepage/OurServices";
import Industries from "../components/Homepage/Industries";
import "../css/home.css";
import "../components/Homepage/Clients.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
  const [showClients, setShowClients] = useState(true);
  return (
    <>
      <Layout
        showBanner
        active="home"
        title="INTELLECT Technologies"
        description="providing IT services"
      >
        <ImageCarousel />
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
                  A global automation technology provider leading the industry
                  with innovative ideas. With our agile collaborative approach
                  our team strives to provide custom solutions. These solutions
                  together with our next-gen technologies enable the businesses
                  to outperform their competition. Our deep expertise in the
                  area of process automation, infrastructure and application
                  management is our strategic asset. Whether you want to improve
                  your business efficiency or accelerate revenue growth,
                  INTELLECT Technologies will go an extra mile to get you there.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <OurServices />

        <Industries />
        <Container fluid className="stats-wrapper py-2 py-md-5">
          <Container className=" py-2 py-md-5">
            <Row>
              <Col sm={12} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">20+</h3>
                  <p className="stat-caption text-center">Clients Served</p>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">40+</h3>
                  <p className="stat-caption text-center">Projects Delivered</p>
                </div>
              </Col>
              <Col sm={3} md={4}>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3 className="stat-title text-center">350+</h3>
                  <p className="stat-caption text-center">
                    Processess Automated
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        {/* Proof of Concept */}
        <Container fluid className="py-5 poc-wrapper">
          <Container>
            <h2 className="text-md-center text-left poc-title">
              Fostering your trust in us with
              <br />
              <span className="poc-title-bg">Free Proof of Concept</span>
            </h2>
            <p className="text-justify py-md-4 py-2">
              We believe in developing a trusting partnership with our clients
              by offering free proof of concept as part of our value added
              services. With this we demonstrate our work potential by creating
              an advanced prototype of the project. This allows you to checkout
              its feasibility in your business process, hence optimizing the
              experience.
            </p>

            <Row className="py-3">
              <Col sm="1" />
              <Col sm="11" className="d-flex align-items-center">
                <h4 className="mb-0">Forecast</h4>
                <p className="mb-0 ml-3">
                  Act as a tool to forecast the feasibility of the projects.
                </p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col sm="1" />
              <Col sm="11" className="d-flex align-items-center">
                <h4 className="mb-0">Report</h4>
                <p className="mb-0 ml-3">
                  Provides a complete report on project evaluation
                </p>
              </Col>
            </Row>
            <Row className="py-3">
              <Col sm="1" />
              <Col sm="11" className="d-flex align-items-center">
                <h4 className="mb-0">Cost Effective</h4>
                <p className="mb-0 ml-3">
                  Saves your businesses time and money
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        {/* our clients */}
        <Container className="clients py-5">
          <div className="title-buttons d-flex justify-content-center align-items-center pb-5">
            <button
              type="button"
              className={`t-btn btn-left ${!showClients && "t-btn-active"}`}
              onClick={() => setShowClients(!showClients)}
              disabled={!showClients}
            >
              Our Clients
            </button>
            <button
              type="button"
              className={`t-btn ${showClients && "t-btn-active"}`}
              disabled={showClients}
              onClick={() => setShowClients(!showClients)}
            >
              Technology Partners
            </button>
          </div>
          {showClients ? <Partners /> : <Clients />}
        </Container>
      </Layout>
    </>
  );
};
