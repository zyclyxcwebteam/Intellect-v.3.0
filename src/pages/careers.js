import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Layout from "../components/Layout/Layout";
import Comejoin from "../../static/images/comejoin.svg";
import "../css/careers.css";
import JobOpenings from "../components/CareersPage/JobOpenings";

const careers = () => {
  return (
    <Layout
      showBanner
      active="career"
      title="Career Opportunities"
      description="In INTELLECT Technologies, we empower employees to explore their talents
    and abilities in tandem with their careers"
    >
      <HeroBanner title="Build your future with us" imageClass="career" />
      <Container fluid className="c-overview-wrapper py-3 py-md-5">
        <Container>
          <h3 className="c-overview-text mb-0">
            If you have a desire to excel, we have the potential to help you
            prosper. In INTELLECT Technologies, we empower employees to explore
            their talents and abilities in tandem with their careers.
          </h3>
        </Container>
      </Container>

      <Container fluid className="join-us-wrapper py-md-5 py-3">
        <Container>
          <Row>
            <Col md="4" className="c-title-border">
              <div className="py-md-5 py-3">
                <h2 className="c-section-title">Come Join Us</h2>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <img src={Comejoin} alt="new age" className="mt-4 imgstyle" />
              </div>
            </Col>
            <Col
              md={8}
              sm={12}
              className="d-flex justify-content-center align-items-center"
            >
              <ul className="join-us-points">
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    As we believe a team of great minds will produce greater
                    results
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Explore numerous opportunities to grow and innovate
                  </span>
                </li>

                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Be a part of the team that encourages imaginative and out of
                    box thinking
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Excel in your career with our training and development
                    programmes
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    If you’ve got a smarter way to get the job done.
                  </span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="arrow-wrapper d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="arrow-right"
                    />
                  </span>

                  <span className="ml-3 join-us-text">
                    Experience working with a supportive and enthusiastic team
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <div className="py-5">
            <h2 className="c-section-title">Open Positions</h2>
          </div>
        </Container>
        <JobOpenings />
      </Container>
      {/* Spacer */}
      <Container fluid className="py-4" />
    </Layout>
  );
};

export default careers;
