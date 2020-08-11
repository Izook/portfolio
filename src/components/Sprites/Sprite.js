import React from "react";
import anime from "animejs";

const Sprite = () => {
  React.useEffect(() => {
    const randomMovement = () => {
      anime.set({
        targets: ".sprite",
        translateX: () => Math.random() * window.outerWidth,
        translateY: () => Math.random() * window.outerHeight,
      });
      anime
        .timeline({
          targets: ".sprite",
          easing: "linear",
          duration: 4000,
          complete: () => {
            randomMovement();
          },
        })
        .add(
          {
            duration: 2000,
            opacity: () => Math.random(),
          },
          0
        )
        .add(
          {
            translateX: {
              value: () => Math.random() * window.outerWidth,
              easing: "easeInCubic",
            },
            translateY: {
              value: () => Math.random() * window.outerHeight,
              easing: "easeOutCubic",
            },
          },
          0
        )
        .add(
          {
            duration: 2000,
            opacity: () => Math.random(),
          },
          2000
        );
    };
    randomMovement();
  }, []);

  return <div className="sprite"></div>;
};

export default Sprite;
