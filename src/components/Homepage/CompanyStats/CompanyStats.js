import React from "react";
import { Container, Row, Col } from "reactstrap";
import RocketGIF from "../../../../static/images/rocket.gif";
import SettingsGIF from "../../../../static/images/settings.gif";
import UserGIF from "../../../../static/images/user.gif";
import "./CompanyStats.css";

const CompanyStats = () => {
  return (
    <Container fluid className="stats-wrapper py-2 py-md-5">
      <Container className=" py-2 py-md-5">
        <Row>
          <Col sm={12} md={4}>
            <div className="d-flex justify-content-center flex-column align-items-center shadow shadow-lg p-5 rounded-lg">
              <div>
                <img
                  src={UserGIF}
                  alt="clients"
                  className="stats-icon client-icon"
                />
              </div>
              <h3 className="stat-title text-center">20+</h3>
              <p className="stat-caption text-center">Clients Served</p>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className="d-flex justify-content-center flex-column align-items-center shadow shadow-lg p-5 rounded-lg">
              <div>
                <img
                  src={RocketGIF}
                  alt="clients"
                  className="stats-icon project-icon"
                />
              </div>
              <h3 className="stat-title text-center">40+</h3>
              <p className="stat-caption text-center">Projects Delivered</p>
            </div>
          </Col>
          <Col sm={3} md={4}>
            <div className="d-flex justify-content-center flex-column align-items-center shadow shadow-lg p-5 rounded-lg">
              <div>
                <img
                  src={SettingsGIF}
                  alt="clients"
                  className="stats-icon process-icon"
                />
              </div>
              <h3 className="stat-title text-center">350+</h3>
              <p className="stat-caption text-center">Processess Automated</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CompanyStats;
