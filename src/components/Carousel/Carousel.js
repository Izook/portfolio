import React, { useState } from "react";

import "./Carousel.css";

let currentSlide = 0;

const Carousel = ({ children }) => {
  const [carouselTransltation, setCarouselTranslation] = useState(0);

  const slideCount = children.length;
  const changeSlide = (slideDiff) => {
    currentSlide += slideDiff;
    // mod(currentSlide, slideCount) operation
    currentSlide =
      currentSlide - slideCount * Math.floor(currentSlide / slideCount);

    const newTranslation = -currentSlide * (100 / slideCount);
    setCarouselTranslation(newTranslation);
  };

  return (
    <div className="Carousel">
      <button
        onClick={() => {
          changeSlide(-1);
        }}
        className="LeftArrow"
      >
        <div className="chevron top"></div>
        <div className="chevron bottom"></div>
      </button>
      <div
        className="CarouselTrack"
        style={{
          transform: `translateX(${carouselTransltation}%)`,
          width: `${slideCount * 100}%`,
        }}
      >
        {children}
      </div>
      <button
        onClick={() => {
          changeSlide(1);
        }}
        className="RightArrow"
      >
        <div className="chevron top"></div>
        <div className="chevron bottom"></div>
      </button>
    </div>
  );
};

const Pane = ({ children }) => {
  return <div className="Pane">{children}</div>;
};

export { Carousel, Pane };
