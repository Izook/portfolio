import React from "react";
import anime from "animejs";

import "./Background.css";

const Background = () => {
  React.useEffect(() => {
    anime
      .timeline({
        targets: ".background",
        easing: "easeInOutBack",
        duration: 5000,
        loop: true,
      })
      .add({
        backgroundColor: "#030633",
      })
      .add({
        backgroundColor: "#330332",
      })
      .add({
        backgroundColor: "#180033",
      });
  }, []);

  return <div className="background"></div>;
};

export default Background;
