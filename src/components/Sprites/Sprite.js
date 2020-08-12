import React from "react";
import anime from "animejs";
import uniqid from "uniqid";

const spriteColors = [
  "#3BA363",
  "#3DA88F",
  "#3EA0AD",
  "#3E65AD",
  "#6240B3",
  "#9FB340",
];
const randomColor = () => {
  return spriteColors[Math.floor(Math.random() * spriteColors.length)];
};

const Sprite = () => {
  const spriteID = uniqid();

  React.useEffect(() => {
    const randomMovement = () => {
      const randomDuration = (Math.random() * 4 + 4) * 1000;
      const randomInitialScale = Math.random() * 1.5 + 0.75;
      const randomFinalScale = Math.random() * 1.5 + 0.75;

      // Position Randomly in Window
      anime.set(`#sprite-${spriteID}`, {
        backgroundColor: randomColor(),
        translateX: anime.random(0, window.outerWidth),
        translateY: anime.random(0, window.outerHeight),
        scaleX: randomInitialScale,
        scaleY: randomInitialScale,
      });

      // Curve in Random Direction
      anime
        .timeline({
          targets: `#sprite-${spriteID}`,
          easing: "linear",
          duration: randomDuration,
          complete: () => {
            randomMovement();
          },
        })
        .add(
          {
            duration: randomDuration / 2,
            opacity: Math.random(),
          },
          0
        )
        .add(
          {
            backgroundColor: randomColor(),
            scaleX: randomFinalScale,
            scaleY: randomFinalScale,
            translateX: {
              value: anime.random(0, window.outerWidth),
              easing: () => {
                const amplitude = Math.random() * 1.5;
                const period = Math.random() * 1.5;
                return (time) => {
                  return amplitude * Math.sin(period * time);
                };
              },
            },
            translateY: {
              value: anime.random(0, window.outerHeight),
              easing: () => {
                const amplitude = Math.random() * 1.5;
                const period = Math.random() * 1.5;
                return (time) => {
                  return amplitude * Math.cos(period * time);
                };
              },
            },
          },
          0
        )
        .add(
          {
            duration: randomDuration / 2,
            opacity: 0,
          },
          randomDuration / 2
        );
    };
    randomMovement();
  }, []);

  return <div className="sprite" id={`sprite-${spriteID}`}></div>;
};

export default Sprite;
