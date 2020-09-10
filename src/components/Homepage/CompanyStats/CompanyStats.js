import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClientsGIF from "../../../../static/images/user.gif";
import ProjectsGIF from "../../../../static/images/rocket.gif";
import ProcessGIF from "../../../../static/images/settings.gif";
import "./CompanyStats.css";

const StatsCard = props => {
  const { icon, animation, number, text } = props;
  return (
    <Col sm={12} md={4}>
      <div className="d-flex flex-column justify-content-center align-items-center shadow shadow-lg p-4 rounded-lg stats">
        <div className="d-flex align-items-center justify-content-center">
          <img src={icon} alt="clients" className={`${animation}`} />
          <div className="d-flex flex-column py-3">
            <h3 className="stat-title text-center">{`${number}+`}</h3>
          </div>
        </div>
        <p className="stat-caption text-center mb-0 py-3">{text}</p>
      </div>
    </Col>
  );
};

const CompanyStats = () => {
  return (
    <Container fluid className="stats-wrapper py-2 py-md-5">
      <Container className=" py-2 py-md-5">
        <Row>
          <StatsCard
            text="Clients Served"
            icon={ClientsGIF}
            number="20"
            animation="clients-icon"
          />
          <StatsCard
            text="Projects Delivered"
            icon={ProjectsGIF}
            number="40"
            animation="projects-icon"
          />
          <StatsCard
            text="Processess Automated"
            icon={ProcessGIF}
            number="350"
            animation="process-icon"
          />
        </Row>
      </Container>
    </Container>
  );
};

export default CompanyStats;
