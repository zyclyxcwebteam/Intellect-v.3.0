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
import NetworkBG from "../../../../static/images/services/Infra.png";
import RPABG from "../../../../static/images/services/RPA.png";
import OCRBG from "../../../../static/images/services/OCR.png";

const items = [
  {
    img: NewAgeBG,
    serviceText:
      "The smart machines developed through Artificial Intelligence work on the human intelligence concept. Our team works to make them imitate and perform functions ranging from the easiest to the most complex, which involves thinking, reasoning, and understanding.",
    captionOne: "Embrace the future with",
    captionTwo: "Artificial Intelligence",
    imgLeft: true,
    key: 1,
    link: true,
    linkTo: "/artificial-intelligence",
  },
  {
    img: RPABG,
    serviceText:
      "Robotic Process Automation involves the development of an interface involving the current IT Systems to automate repetitive human tasks without any complex integrations. We innovate, invent, and automate high-quality business processes to optimize your operational performance and minimize your costs.",
    captionOne: "Transform your business with",
    captionTwo: "Robotic Process Automation",
    imgLeft: false,
    key: 2,
    link: true,
    linkTo: "/robotic-process-automation",
  },
  {
    img: OCRBG,
    serviceText:
      "This technology caters to the virtual conversion of any kind of documents into machine-readable text data which can be edited and searched. These documents include PDF files, scanned paper documents, or images captured by a digital camera. Adapting this process will save your organization time and effort required for creating, processing, and repurposing various documents",
    captionOne: "Adopt smart solutions with",
    captionTwo: "Optical Character Recognition",
    imgLeft: true,
    key: 3,
    link: true,
    linkTo: "/optical-character-recognition",
  },
  {
    img: NetworkBG,
    serviceText:
      "Adopt Infrastructure services to ensure that you can spontaneously scale up or down depending on the usage demand. We offer a variety of services to cater to your varying infra needs like contact center, Storage services, data center services, and more. It helps you avoid unnecessary expenses and saves you from the complexity of managing your infrastructure.",
    captionOne: "Get dynamic solutions with",
    captionTwo: "Infrastructure Services",
    imgLeft: false,
    key: 4,
    link: false,
    linkTo: "/",
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
        <div className="spacer-div" />
        <Row className="h-100">
          <Col
            md="6"
            sm="12"
            className="service-img d-md-flex align-items-center justify-content-center d-none"
          >
            <img
              src={item.img}
              alt={item.captionTwo}
              className="core-service-img"
            />
          </Col>

          <Col md="6" sm="12" className="">
            <div className="service-text-box">
              <h2 className="service-title text-center">
                <small>{item.captionOne}</small>
                <br />
                {item.captionTwo}
              </h2>
              <p className="px-md-5 px-2 text-justify">{item.serviceText}</p>
              {item.link && (
                <p className="text-center mt-md-5">
                  <Link
                    to={item.linkTo}
                    className="service-link text-center"
                    rel="canonical"
                  >
                    Discover More
                  </Link>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </CarouselItem>
    );
  });
  return (
    <Container fluid className="service-slider">
      <Container>
        <SectionTitle title="Core Services" />
      </Container>
      <Container fluid className="px-md-5 px-1 py-md-1">
        {/* <div className="spacer-div" /> */}
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          className="slides-wrapper mx-md-4 mx-0"
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
