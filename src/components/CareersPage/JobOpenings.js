import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import fetch from "isomorphic-fetch";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./JobOpenings.css";

const JobOpeningCard = ({ id, title, location, experience }) => {
  return (
    <Col sm="12" className="job-card my-3 py-3">
      <Row className="px-3">
        <Col sm="12" md="6">
          <h2 className="job-title">{title}</h2>
          <p className="job-location job-info mb-0">{location}</p>
        </Col>
        <Col sm="12" md="3">
          <p className="job-info">
            <FontAwesomeIcon icon="briefcase" className="mr-2 icon" />
            {experience}
          </p>
          <p className="job-info mb-0">
            <FontAwesomeIcon icon="user-tie" className="mr-2 icon" />
            Permanent
          </p>
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

const JobOpenings = () => {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://admin-zyclyx.herokuapp.com/job-openings")
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setLoading(false);
        setOpenings(jsonData);
      });
  }, [openings]);
  return (
    <Container>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Row className="">
          {openings.length !== 0 &&
            openings.map(opening => {
              return (
                <JobOpeningCard
                  title={opening.Title}
                  location={opening.Location}
                  experience={opening.Experience}
                  id={opening.id}
                  key={opening.id}
                />
              );
            })}
        </Row>
      )}
    </Container>
  );
};
export default JobOpenings;
