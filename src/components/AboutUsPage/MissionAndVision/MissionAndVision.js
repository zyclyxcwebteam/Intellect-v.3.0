import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import Mission from "../../../../static/images/mission2.svg";
// import Vision from "../../../../static/images/focus2.svg";
import Mission from "../../../../static/images/aboutus/mission.svg";
import Vision from "../../../../static/images/aboutus/vision.svg";
import "./MissionAndVision.css";

const MissionAndVision = () => {
  const [showMission, setShowMission] = useState(true);
  return (
    <Container fluid className="py-4">
      <Container className="mission-wrapper my-5 pl-0">
        <div className="mission-space" />
        <Row className="h-100">
          <Col
            md="6"
            sm="12"
            className="d-none d-md-flex mission-img-container h-100 d-flex justify-content-center align-items-center"
          >
            <img src={showMission ? Mission : Vision} alt="Mission" />
          </Col>
          <Col md="6" sm="12">
            <div className="mission-text-container py-5 mx-5">
              <h2 className="text-center pb-4">
                {showMission ? "Mission" : "Vision"}
              </h2>
              <p className="text-justify px-5">
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
