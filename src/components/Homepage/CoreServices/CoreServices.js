import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Container,
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import "./CoreServices.css";
import SectionTitle from "../../SectionTitle/SectionTitle";
import NewAgeBG from "../../../../static/images/services/4.png";
import NetworkBG from "../../../../static/images/services/3.png";
import RPABG from "../../../../static/images/services/2.png";
import OCRBG from "../../../../static/images/services/1.png";

const items = [
  {
    img: NewAgeBG,
    serviceText:
      "Artificial intelligence is a branch that allows creating smart machines based on the principle of human intelligence. Our team of AI experts works on machines to help them mimic and execute tasks, from the simplest to complex. It aims to include learning, reasoning, and perception.",
    captionOne: "Embrace the future with",
    captionTwo: "Artificial Intelligence",
    imgLeft: true,
    key: 1,
    linkTo: "/artificial-intelligence",
  },
  {
    img: RPABG,
    serviceText:
      "Robotic Process Automation automates repetitive human tasks by developing an interface with current IT systems without any complex integrations. We assist you to minimize operating costs and optimize performance by innovating, inventing and automating high-quality business processes.",
    captionOne: "Transform your business with",
    captionTwo: "Robotic Process Automation",
    imgLeft: false,
    key: 2,
    linkTo: "/robotic-process-automation",
  },
  {
    img: OCRBG,
    serviceText:
      "The OCR technology converts virtually any kind of documents, such as scanned paper documents, PDF files, or images captured by a digital camera into machine-readable text data which is editable and searchable. It saves you a lot of time and effort when creating, processing, and repurposing various documents.",
    captionOne: "Adopt smart solutions with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    linkTo: "/optical-character-recognition",
  },
  {
    img: NetworkBG,
    serviceText:
      "When you have to work in a world of devious cybercriminals, it’s important to ensure that your network and data are safe. We at ZYCLYX use a combination of effective hardware and software solutions to protect you from multiple layers of intrusions and breaches.",
    captionOne: "Effective Data protection with",
    captionTwo: "Network Security",
    imgLeft: false,
    key: 4,
    linkTo: "/network-security",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="service-item"
      >
        <Row>
          {/* {item.imgLeft && ( */}
          <Col md={6} sm={12} className="service-img d-md-block d-none">
            <img src={item.img} alt="new age" />
          </Col>
          {/* )} */}
          <Col md={6} sm={12} className="">
            <div className="service-text-box">
              <h2 className="service-title text-center">
                <small>{item.captionOne}</small>
                <br />
                {item.captionTwo}
              </h2>
              <p className="px-md-5 px-2 text-justify">{item.serviceText}</p>
              <p className="text-center mt-5">
                <Link to={item.linkTo} className="service-link text-center">
                  Discover More
                </Link>
              </p>
            </div>
          </Col>
          {/* {!item.imgLeft && (
            <Col sm={12} md={6} className="service-img d-md-block d-none">
              <img src={item.src} alt="new age" />
            </Col>
          )} */}
        </Row>
      </CarouselItem>
    );
  });
  return (
    <Container fluid className="service-slider">
      <Container>
        <SectionTitle title="Core Services" />
      </Container>
      <Container fluid className="px-5">
        <div className="spacer-div" />
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="slides-wrapper mx-4"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            className="s-banner-indicators"
          />
          {slides}
        </Carousel>
      </Container>
    </Container>
  );
};

export default OurServices;
