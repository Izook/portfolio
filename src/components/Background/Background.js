import React from "react";
import anime from "animejs";

import "./Background.css";

const Background = () => {
  React.useEffect(() => {
    anime({
      targets: ".background",
      backgroundColor: "#FF0000",
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return <div className="background"></div>;
};

export default Background;
