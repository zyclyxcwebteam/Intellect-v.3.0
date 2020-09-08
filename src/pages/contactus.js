/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-fetch";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput, {
  formatPhoneNumberIntl,
  parsePhoneNumber,
} from "react-phone-number-input";

import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "react-phone-number-input/style.css";
import "../css/contactus.css";
import "../css/form-floating-label.css";
import "../components/Button/Button.css";

const Contact = () => {
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [success, setSuccess] = useState(false);
  const [submintForm, setSubmitForm] = useState(false);
  const [country, setCountry] = useState("");
  const [value, setValue] = useState();

  useEffect(() => {
    // fetch("http://ip-api.com/json/")
    // fetch("https://freegeoip.app/json/")
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=16c06a48afce45e5a1c1427e1c4b628f"
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCountry(data.country_code2);
      });
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, event) => {
    setSubmitForm(true);
    const payload = {
      fullname: data.fullname,
      email: data.email,
      phone: formatPhoneNumberIntl(value),
      date: new Date(),
      message: data.message,
      countryCode: parsePhoneNumber(value)
        ? parsePhoneNumber(value).country
        : "",
      website: "intellect",
    };

    fetch("https://zyclyx-backend-api.herokuapp.com/business-enquiries", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(res => {
        setSuccess(true);
        return res.json();
      })
      .then(() => {
        event.target.reset();
        setValue("");
        setTimeout(() => {
          setSuccess(false);
        }, 6000);
        setSubmitForm(false);
        fetch("https://zyclyx-email-sender.herokuapp.com/contact", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then(res => {
            return res.json();
          })
          .then(() => {});
      });
  };

  function resetForm() {
    setShowContactInfo(true);
    setSuccess(false);
  }
  return (
    <Layout
      showBanner={false}
      active="contact"
      title="Contact us"
      description="We are happy to assist you with your queries"
    >
      <HeroBanner
        title="We are happy to assist you with your queries"
        imageClass="contact"
      />

      <Container fluid>
        <Row>
          <Col
            md="6"
            sm="12"
            className="c-wrapper-left address-wrapper d-flex align-items-center"
          >
            {showContactInfo ? (
              <Container className="c-info-wrapper py-4">
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col md="7" sm="12">
                    <Row>
                      <Col sm="3">
                        <p className="icons mt-4">
                          <FontAwesomeIcon
                            icon="map-marked-alt"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">OFFICE</h4>
                        <p className="contact-text">
                          Commercial Bank Plaza, Level 14, West Bay, P.O 27111,
                          Doha, Qatar
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col sm="12" md="7">
                    <Row>
                      <Col sm="3">
                        <p className="icons">
                          <FontAwesomeIcon
                            icon="phone"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">CONTACT</h4>
                        <p className="contact-text">(+974) 44528242</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center py-3">
                  <Col sm="12" md="7">
                    <Row>
                      <Col sm="3">
                        <p className="icons">
                          <FontAwesomeIcon
                            icon="envelope"
                            className="contact-icon"
                          />
                        </p>
                      </Col>
                      <Col sm="9">
                        <h4 className="contact-title">EMAIL</h4>
                        <p className="contact-text">info@intellect-qa.com</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center py-4">
                  <button
                    type="button"
                    className="button d-flex align-items-center"
                    id="contactBtn"
                    onClick={() => {
                      return setShowContactInfo(!showContactInfo);
                    }}
                  >
                    Message Us
                    <span />
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </Container>
            ) : (
              <Container className="c-form-wrapper">
                <div className="py-4">
                  <h4 className="text-center c-info-title mt-4 mb-0">
                    We are happy to assist
                    <br />
                    you with your queries
                  </h4>
                </div>

                <button
                  type="submit"
                  className="btn form-close"
                  id="contactBtn"
                  onClick={() => {
                    return resetForm();
                  }}
                >
                  <span id="btnText">
                    <FontAwesomeIcon icon="times" />
                  </span>
                </button>
                {success && (
                  <div className="success-msg">
                    <h4 className="text-center">
                      Thank you for contacting us!
                    </h4>
                    <p className="text-center">
                      We will get in touch with you soon
                    </p>
                  </div>
                )}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="floating-label-form c-form"
                >
                  <div className="row py-md-2 d-flex justify-content-center">
                    <div className="col-lg-7 col-12">
                      <div className="form-group floating-label py-1">
                        <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          placeholder="Full Name"
                          ref={register({ required: true })}
                        />
                        {errors.fullname && (
                          <span className="err-msg">*Fullname is required</span>
                        )}
                        <label htmlFor="username">
                          Full Name
                          <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-7 col-12">
                      <div className="form-group floating-label py-1">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          autoComplete="off"
                          placeholder="Email"
                          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                          ref={register({ required: true })}
                        />
                        {errors.email && (
                          <span className="err-msg">*Email is required</span>
                        )}
                        <label htmlFor="email">
                          Email
                          <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-7 col-12">
                      <PhoneInput
                        placeholder="Phone"
                        className="form-group floating-label py-1"
                        value={value}
                        onChange={setValue}
                        defaultCountry={country}
                      />
                    </div>
                    <div className="col-lg-7 col-12">
                      <div className="form-group floating-label py-1">
                        <textarea
                          className="form-control pt-3 pb-4"
                          name="message"
                          placeholder="Message"
                          ref={register({ required: true, max: 300 })}
                        />
                        {errors.message && (
                          <span className="err-msg">*Message is required</span>
                        )}
                        <label htmlFor="message">
                          Message
                          <span className="required">*</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-12" />
                    <button
                      type="submit"
                      className="button d-flex align-items-center"
                      disabled={submintForm}
                    >
                      {submintForm ? (
                        <>
                          Sending..
                          <div
                            className="spinner-border spinner-border-sm ml-3 text-warning"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </>
                      ) : (
                        "Message us"
                      )}
                      <span />
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>
                </form>
              </Container>
            )}
          </Col>

          <Col
            sm="12"
            md="6"
            className="c-wrapper-right google-map-wrapper p-0"
          >
            <div
              style={{
                textDecoration: "none",
                overflow: "hidden",
                maxWidth: "100%",
                width: "100%",
                height: "80vh",
              }}
            >
              <div
                id="mymap-display"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  style={{ height: "100%", width: "100%", border: 0 }}
                  title="INTELLECT Technologies"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7213.451362497201!2d51.518291!3d25.313419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x614e24d824b8c339!2sServcorp%20Commercial%20Bank%20Plaza%20-%20Coworking%2C%20Offices%2C%20Virtual%20Offices%20%26%20Meeting%20Rooms!5e0!3m2!1sen!2sin!4v1576837668959!5m2!1sen!2sin"
                />
              </div>
              <a
                className="googlemaps-code"
                rel="nofollow"
                href="https://www.embed-map.com"
                id="grabmap-authorization"
              >
                https://www.embed-map.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      {/* spacer */}
      <Container fluid className="py-4 spacer" />
    </Layout>
  );
};

export default Contact;
