import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./MissionAndVision.css";

const MissionAndVision = () => {
  const [showMission, setShowMission] = useState(true);
  return (
    <Container fluid className="py-4 px-0 px-md-3">
      <Container className="mission-wrapper my-md-5 pl-0">
        <div className="mission-space d-none d-md-block" />
        <Row className="h-100">
          <Col
            md="6"
            sm="12"
            className="d-none d-md-flex  h-100 d-flex justify-content-center align-items-center"
          >
            <div
              className={`mission-img-container ${
                showMission ? "mission" : "vision"
              }`}
            />
            {/* <img src={showMission ? Mission : Vision} alt="Mission" /> */}
          </Col>
          <Col md="6" sm="12" className="px-2">
            <div className="mission-text-container px-2 py-md-5 mx-md-5 px-md-4">
              <h2 className="text-center pb-2 pb-md-4">
                {showMission ? "Mission" : "Vision"}
              </h2>
              <p className="px-3 px-md-5 text-justify">
                {showMission
                  ? `To offer custom solutions to Clients using unique combination of data science, amazing design philosophy, software engineering, and architecture.`
                  : `To provide diverse solutions in the area of Futuristic IT development with a strong commitment towards corporate citizenship and sustainability.`}
              </p>
            </div>
          </Col>
        </Row>
        <div className="mission-links d-flex justify-content-center w-100 py-3">
          <button
            type="button"
            className={`m-btn d-flex align-items-center ${
              !showMission && "m-btn-active"
            }`}
            onClick={() => setShowMission(!showMission)}
          >
            Mission
          </button>
          <button
            type="button"
            className={`m-btn d-flex align-items-center ml-3 ${
              showMission && "m-btn-active"
            }`}
            onClick={() => setShowMission(!showMission)}
          >
            Vision
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default MissionAndVision;
