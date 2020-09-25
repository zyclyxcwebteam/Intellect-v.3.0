/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import fetch from "isomorphic-fetch";
import { Container, Row, Col } from "reactstrap";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import ContactDetails from "../components/ContactUsPage/ContactDetails/ContactDetails";

import Layout from "../components/Layout/Layout";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import "react-phone-number-input/style.css";
import "../css/contactus.css";
import "../css/form-floating-label.css";
import "../components/Button/Button.css";

const Contact = () => {
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
      Full_Name: data.fullname,
      Email: data.email,
      Phone: formatPhoneNumberIntl(value),
      Date: new Date(),
      Message: data.message,
      Website: "INTELLECT",
    };

    fetch("https://admin-zyclyx.herokuapp.com/business-enquiries", {
      // fetch("http://localhost:1337/business-enquiries", {
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

      <ContactDetails />

      <Container fluid>
        <Row>
          <Col
            md="6"
            sm="12"
            className="c-wrapper-left address-wrapper d-flex align-items-center"
          >
            <Container className="c-form-wrapper">
              <div className="py-4">
                <h4 className="text-center c-info-title mt-4 mb-0 px-md-4">
                  We are happy to assist you with your queries
                </h4>
              </div>

              {success && (
                <div className="success-msg">
                  <h4 className="text-center">Thank you for contacting us!</h4>
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
                      required
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
                id="embedmap-display"
                style={{ height: "100%", width: "100%", maxWidth: "100%" }}
              >
                <iframe
                  title="intellect"
                  style={{ height: "100%", width: "100%", border: 0 }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=Intellect+Technologies,+Doha,+Qatar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </div>
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
