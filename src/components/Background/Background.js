import React from "react";
import anime from "animejs";

import "./Background.css";

const Background = () => {
  React.useEffect(() => {
    const initialDuration = Math.random() * 3000 + 3000;
    const gradientDuration = Math.random() * 3000 + 3000;

    anime
      .timeline({
        targets: ".background",
        easing: "easeInOutBack",
        duration: 5000,
        loop: true,
      })
      .add({
        backgroundColor: "#04002E",
        duration: initialDuration,
      })
      .add({
        backgroundColor: "#000B2E",
        duration: gradientDuration,
      });
  }, []);

  return <div className="background"></div>;
};

export default Background;
