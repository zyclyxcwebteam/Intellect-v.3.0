import React, { useState } from "react";
import Particles from "react-particles-js";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
// import img from "../../../../static/images/tech.svg";
import "./HomeBanner.css";

// data.allFile.edges.node.childImageSharp.fluid
const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const captions = [
    {
      altText: "Slide 1",
      caption1: "Rooted in knowledge",
      caption2: "built on trust",
      index: 1,
    },
    {
      altText: "Slide 2",
      caption1: "Taking technology forward",
      caption2: "with possibilities",
      index: 2,
    },
    {
      altText: "Slide 3",
      caption1: "Save time and money with",
      caption2: "business automation",
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
        <Particles
          params={{
            detectRetina: false,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onDiv: {
                  elementId: "repulse-div",
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 8,
                  size: 10,
                  speed: 3,
                },
                connect: {
                  distance: 120,
                  lineLinked: {
                    opacity: 0.8,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                slow: {
                  active: false,
                  radius: 0,
                  factor: 1,
                },
              },
            },
            particles: {
              color: {
                value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
              },
              lineLinked: {
                blink: true,
                color: "random",
                consent: false,
                distance: 40,
                enable: true,
                opacity: 0.8,
                width: 2,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 2500,
                },
                limit: 0,
                value: 250,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.3,
                  speed: 3,
                  sync: false,
                },
                random: false,
                value: 0.8,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: {
                  height: 400,
                  replaceColor: true,
                  //   src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 400,
                },
                polygon: {
                  sides: 5,
                },
                stroke: {
                  color: "#000000",
                  width: 0,
                },
                type: "circle",
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 20,
                  sync: false,
                },
                random: true,
                value: 6,
              },
            },
            polygon: {
              draw: {
                enable: false,
                lineColor: "rgba(255,255,255,0.2)",
                lineWidth: 1,
              },
              enable: true,
              move: {
                radius: 5,
              },
              position: {
                x: 30,
                y: 10,
              },
              inlineArrangement: "equidistant",
              scale: 1,
              type: "inline",
              url: "https://cdn.matteobruni.it/images/particles/google.svg",
            },
            background: {
              image: "",
              position: "0% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
        <h1 className="home-banner-title">
          <span>{item.caption1}</span>
          <br />
          <span>{item.caption2}</span>
        </h1>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={nextSlide}
      previous={previousSlide}
      className="banner-carousel carousel-fade"
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
