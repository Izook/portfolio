import React from "react";

import "./Carousel.css";

const Carousel = ({ children }) => {
  return (
    <div className="Carousel">
      <button className="LeftArrow"></button>
      <div className="CarouselTrack">{children}</div>
      <button className="RightArrow"></button>
    </div>
  );
};

const Pane = ({ children }) => {
  return <div className="Pane">{children}</div>;
};

export { Carousel, Pane };
