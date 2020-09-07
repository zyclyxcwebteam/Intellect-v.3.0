import React, { useState } from "react";
import { Container } from "reactstrap";
import "./ClientsAndPartners.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";
import Slider from "react-slick";
import Bayancb from "../../../../static/images/clients/3.jpg";
import Elm from "../../../../static/images/clients/6.jpg";
import Stcs from "../../../../static/images/clients/9.png";
import ValueMomentum from "../../../../static/images/clients/1.png";
import Monster from "../../../../static/images/clients/13.png";
import RedTag from "../../../../static/images/clients/14.png";

import Blueprism from "../../../../static/images/clients/4.jpg";
import UIpath from "../../../../static/images/clients/7.png";
import Automation from "../../../../static/images/clients/2.jpg";
import Microsoft from "../../../../static/images/clients/8.png";
import AntLabs from "../../../../static/images/clients/10.png";
import Lenovo from "../../../../static/images/clients/11.png";
import TrustPortal from "../../../../static/images/clients/12.png";

const CLIENTS = [Bayancb, Elm, Stcs, ValueMomentum, Monster, RedTag];
const PARTNERS = [
  Blueprism,
  UIpath,
  Automation,
  Microsoft,
  AntLabs,
  Lenovo,
  TrustPortal,
];

const settings = {
  dots: true,
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

const Carousel = ({ itemsArray }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings}>
      {itemsArray.map(item => {
        return (
          <div>
            <img src={item} alt="" className="client" />
          </div>
        );
      })}
    </Slider>
  );
};

const ClientsAndPartners = () => {
  const [showClients, setShowClients] = useState(true);
  return (
    <Container className="clients py-5">
      <div className="title-buttons d-flex justify-content-center align-items-center pb-5">
        <button
          type="button"
          className={`t-btn btn-left ${!showClients && "t-btn-active"}`}
          onClick={() => setShowClients(!showClients)}
          disabled={!showClients}
        >
          Our Clients
        </button>
        <button
          type="button"
          className={`t-btn ${showClients && "t-btn-active"}`}
          disabled={showClients}
          onClick={() => setShowClients(!showClients)}
        >
          Technology Partners
        </button>
      </div>
      {showClients ? (
        <Carousel itemsArray={PARTNERS} />
      ) : (
        <Carousel itemsArray={CLIENTS} />
      )}
    </Container>
  );
};

export default ClientsAndPartners;
