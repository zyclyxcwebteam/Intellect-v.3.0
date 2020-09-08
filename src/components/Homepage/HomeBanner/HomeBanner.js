import React, { useState } from "react";
// import Particles from "react-particles-js";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
} from "reactstrap";
// import img from "../../../../static/images/tech.svg";
import "./HomeBanner.css";
import Automation from "../../../../static/images/home-banner/manufacturing.svg";
import Fuel from "../../../../static/images/home-banner/project.svg";
import Solution from "../../../../static/images/home-banner/innovation.svg";

// data.allFile.edges.node.childImageSharp.fluid
const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const captions = [
    {
      img: Fuel,
      altText: "Slide 3",
      caption1: "Fueling change with",
      caption2: "transformative technology",
      index: 1,
    },
    {
      img: Automation,
      altText: "Slide 1",
      caption1: "Optimizing Business performance",
      caption2: "with Intelligent Automation",
      index: 2,
    },
    {
      img: Solution,
      altText: "Slide 2",
      caption1: "Moving forward",
      caption2: "with innovative solutions",
      index: 3,
    },
  ];

  const nextSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === captions.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previousSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? captions.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToSlide = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = captions.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.index}
        className={`hero-slide slide-${item.index}`}
      >
        <Row className="h-100">
          <Col sm="12" md="7">
            <h1 className="home-banner-title">
              <span>{item.caption1}</span>
              <br />
              <span>{item.caption2}</span>
            </h1>
          </Col>
          <Col
            sm="12"
            md="5"
            className="d-flex justify-content-center align-items-center"
          >
            <img src={item.img} alt="automation" className="banner-img" />
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={nextSlide}
      previous={previousSlide}
      className="banner-carousel"
    >
      <CarouselIndicators
        items={captions}
        activeIndex={activeIndex}
        onClickHandler={goToSlide}
        className="h-banner-indicator"
      />
      {slides}
    </Carousel>
  );
};
export default ImageCarousel;
