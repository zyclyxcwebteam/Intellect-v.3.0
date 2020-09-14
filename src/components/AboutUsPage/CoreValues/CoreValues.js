import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IconDeliver from "../../../../static/images/c-deliver.svg";
import IconOwnership from "../../../../static/images/c-val-2.svg";
import IconCommit from "../../../../static/images/c-val-3.svg";
import IconBuild from "../../../../static/images/c-val-4.svg";
import IconCreative from "../../../../static/images/c-val-5.svg";
import IconCount from "../../../../static/images/c-val-6.svg";

import "./CoreValues.css";

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const CoreValueCard = ({ title, text, icon }) => {
  return (
    <div className="card m-4 p-2">
      <img className="card-img-top p-5 " src={icon} alt="Card cap" />
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>
        <p className="card-text text-center">{text}</p>
      </div>
    </div>
  );
};

const CoreValues = () => {
  return (
    <Container fluid className="py-5 core-values">
      <h2 className="text-center text-white core-section-title">Core Values</h2>
      <Container className="py-3">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <CoreValueCard
            title="Deliver"
            text="amazing service"
            icon={IconDeliver}
          />
          <CoreValueCard
            title="Commit"
            text="to evolve"
            icon={IconCommit}
            left
          />
          <CoreValueCard
            title="Embrace Creativity"
            text="and innovation"
            icon={IconCreative}
          />
          <CoreValueCard
            title="Take Ownership"
            text="and drive change"
            icon={IconOwnership}
          />

          <CoreValueCard
            title="Build"
            text="Positive Environment"
            icon={IconBuild}
          />
          <CoreValueCard title="Make it" text="Count" icon={IconCount} />
        </Slider>
      </Container>
    </Container>
  );
};

export default CoreValues;
