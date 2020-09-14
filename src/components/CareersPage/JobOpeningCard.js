import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "reactstrap";
import "./JobOpeningCard.css";

const JobOpeningCard = ({ id, title, location, experience }) => {
  return (
    <Col sm="12" className="job-card my-3 py-3">
      <Row className="px-3">
        <Col sm="12" md="6">
          <h2 className="job-title">{title}</h2>
          <p className="job-location job-info mb-0">{location}</p>
        </Col>
        <Col sm="12" md="3">
          <p className="job-info">{experience}</p>
          <p className="job-info mb-0">Permanent</p>
        </Col>
        <Col sm="12" md="3" className="d-flex align-items-center">
          <p className="d-flex justify-content-center  m-0">
            <Link
              to="/job-details/"
              state={{ id }}
              className="button d-flex align-items-center job-card-btn"
            >
              Apply Now
            </Link>
          </p>
        </Col>
      </Row>
    </Col>
  );
};
export default JobOpeningCard;
