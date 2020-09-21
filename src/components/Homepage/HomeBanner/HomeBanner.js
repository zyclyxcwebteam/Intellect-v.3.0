import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Row,
  Col,
} from "reactstrap";
import "./HomeBanner.css";
// import Automation from "../../../../static/images/home-banner/manufacturing.svg";
// import Fuel from "../../../../static/images/home-banner/project.svg";
// import Solution from "../../../../static/images/home-banner/innovation.svg";
import Automation from "../../../../static/images/home-banner/8.svg";
import Fuel from "../../../../static/images/home-banner/5.png";
import Solution from "../../../../static/images/home-banner/6.png";

// data.allFile.edges.node.childImageSharp.fluid
const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const SLIDES_CONTENT = [
    {
      img: Fuel,
      altText: "slide_1",
      caption1: "Fueling Change with",
      caption2: "Transformative Technology",
      index: 1,
    },
    {
      img: Automation,
      altText: "slide_2",
      caption1: "Optimizing Business Performance",
      caption2: "with Intelligent Automation",
      index: 2,
    },
    {
      img: Solution,
      altText: "slide_3",
      caption1: "Moving Forward",
      caption2: "with Innovative Solutions",
      index: 3,
    },
  ];

  const nextSlide = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === SLIDES_CONTENT.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previousSlide = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? SLIDES_CONTENT.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToSlide = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = SLIDES_CONTENT.map(slide => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={slide.index}
        className={`hero-slide slide-${slide.index}`}
      >
        <Row className="h-100">
          <Col
            sm="12"
            md="6"
            className={`title-container d-flex justify-content-center align-items-center ${slide.caption}`}
          >
            <h1 className="home-banner-title">
              <span>{slide.caption1}</span>
              <br />
              <span>{slide.caption2}</span>
            </h1>
          </Col>
          <Col
            sm="12"
            md="5"
            className="d-flex justify-content-center align-items-center"
          >
            <img src={slide.img} alt="automation" className="banner-img" />
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
        items={SLIDES_CONTENT}
        activeIndex={activeIndex}
        onClickHandler={goToSlide}
        className="h-banner-indicator"
      />
      {slides}
    </Carousel>
  );
};
export default ImageCarousel;
