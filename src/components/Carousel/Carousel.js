import React from "react";

import "./Carousel.css";

const Carousel = ({ children }) => {
  return (
    <div className="Carousel">
      <div className="CarouselTrack">
        <button className="LeftArrow"></button>
        {children}
        <button className="RightArrow"></button>
      </div>
    </div>
  );
};

const Pane = ({ children, className, key }) => {
  return (
    <div className={`Pane ${className}`} key={key}>
      {children}
    </div>
  );
};

export { Carousel, Pane };
