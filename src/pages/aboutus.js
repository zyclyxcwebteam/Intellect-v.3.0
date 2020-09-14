import React from "react";
import { Container, Row, Col } from "reactstrap";
import RotatingText from "react-rotating-text";
import Layout from "../components/Layout/Layout";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import MissionAndVision from "../components/AboutUsPage/MissionAndVision/MissionAndVision";
import CoreValues from "../components/AboutUsPage/CoreValues/CoreValues";

import "../css/aboutus.css";

const aboutus = () => {
  // const [showMission, setShowMission] = useState(true);
  return (
    <Layout
      showBanner
      active="about"
      title="About us"
      description="A Fast-Growing Technology Leader in Artificial Intelligence,automation,bigdata"
    >
      <Container fluid className="hero-banner">
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className="title-box d-flex flex-column justify-content-center align-items-center"
          >
            <h2 className="banner-title">
              A Fast-Growing Technology Leader in
            </h2>
            <h2 className="banner-title title-green">
              <RotatingText
                items={[
                  "Artificial Intelligence",
                  "Automation",
                  "BigData",
                  "Cyber Security",
                  "Blockchain",
                  "Internet of Things",
                ]}
              />
            </h2>
          </Col>
          <Col
            sm="12"
            md="6"
            className="img-box d-flex justify-content-center align-items-center"
          >
            <div className="banner-img about-banner" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="py-md-5 py-3 overview-wrapper">
        <Container className="py-md-4 py-2">
          <p>
            INTELLECT Technologies is the world&apos;s leading automated IT
            solution provider with a diverse range of solutions aimed to enhance
            your operating performance. Our expertise includes Robotic Process
            Automation, AI, OCR, Network Security, Cyber Security, Outsourcing,
            and other services.
          </p>
          <p>
            In 2018, we were established to share our innovative solutions and
            core technology expertise to optimize the customer experience. The
            team at INTELLECT Technologies provides efficient integrated systems
            after meticulous evaluation of risks and opportunities which address
            both short and long term challenges.
          </p>
          <p>
            In collaboration with internationally recognized IT solution
            providers, we have catered to some of the leading brands in
            industries like Banking, Finance, Telecom, and more. We provide
            complete project management support right from conceptualization to
            implementation and assessment.
          </p>
        </Container>
      </Container>
      <MissionAndVision />

      {/* Core Values */}
      <CoreValues />
      <Container className="py-5">
        <SectionTitle title="How we do it" />

        <Row className="h-wrapper">
          <Col className="px-0 hw-card col-12 col-md-2 d-flex flex-column">
            <div className="h-card-content h-bottom order-2 order-md-1">
              <h4 className="text-center">STEP 1</h4>
              <p>
                Strategize, document and decipher - goals, objectives,
                information and financial forecasts for building the right
                business plan.
              </p>
            </div>
            <h3 className="h-title-dark plan order-1 order-md-2 mb-0 mb-md-2">
              PLAN
            </h3>
          </Col>
          <Col className="px-0 hw-card col-12 col-md-2 my-2 my-md-0">
            <h3 className="h-title-green mb-0 mb-md-2">EXECUTE</h3>
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 2</h4>
              <p>
                Communicate, set goals, track, report, manage performance and
                remunerate for the execution of a decision.
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card col-12 col-md-2 d-flex flex-column mb-2 mb-md-0">
            <div className="h-card-content h-bottom order-2 order-md-1">
              <h4 className="text-center">STEP 3</h4>
              <p>
                Identification and elimination of discrepancie for improvement
                of the organizations&apos;s process.
              </p>
            </div>
            <h3 className="h-title-dark mb-0 mb-md-2 order-1 order-md-2">
              RECTIFY
            </h3>
          </Col>
          <Col className="px-0 hw-card col-12 col-md-2 mb-2 mb-md-0">
            <h3 className="h-title-green mb-0 mb-md-2">ANALYZE</h3>
            <div className="h-card-content h-bottom">
              <h4 className="text-center">STEP 4</h4>
              <p>
                RECTIFY Interpret and comprehend the executed decision for
                analysis of the collected data..
              </p>
            </div>
          </Col>
          <Col className="px-0 hw-card col-12 col-md-2 d-flex flex-column">
            <div className="h-card-content h-bottom order-2 order-md-1">
              <h4 className="text-center">STEP 5</h4>
              <p>
                After project completion, the client is called in to review the
                final product awaiting their feedback on the same before launch.
              </p>
            </div>
            <h3 className="h-title-dark feedback mb-0 mb-md-2 order-1 order-md-2">
              FEEDBACK
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default aboutus;
