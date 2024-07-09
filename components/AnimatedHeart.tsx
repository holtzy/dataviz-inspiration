import { scaleLinear } from "d3";
import { useEffect, useState } from "react";
import { MAX_NUMBER_OF_LIKE_PER_IMG } from "./LikeButton";

type AnimatedHeartProps = {
  likeNumber: number;
};

export const AnimatedHeart = ({ likeNumber }: AnimatedHeartProps) => {
  console.log("likeNumber", likeNumber);

  const [animate, setAnimate] = useState(false);
  const [shake, setShake] = useState(false);

  const sizeScale = scaleLinear()
    .range([140, 260])
    .domain([0, MAX_NUMBER_OF_LIKE_PER_IMG]);
  const size = sizeScale(likeNumber);

  const opacityScale = scaleLinear()
    .range([0.4, 1])
    .domain([1, MAX_NUMBER_OF_LIKE_PER_IMG]);
  const opacity = opacityScale(likeNumber);

  const onClick = () => {
    if (likeNumber === MAX_NUMBER_OF_LIKE_PER_IMG) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
      return;
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  return (
    <svg
      className={shake ? "heartShake" : animate ? "heartIncrease" : ""}
      x="0px"
      y="0px"
      viewBox={"0 0 200 200"}
      style={{ fill: "red", opacity }}
      onClick={onClick}
    >
      <g transform="translate(0,-952.36218)">
        <path
          d="M15.33293,980.7616c-19.11968,19.8092-19.10147,51.68518,0,71.51379l84.61456,87.86926
			c28.23759-29.25574,56.47517-58.51135,84.71275-87.76758c19.11969-19.80969,19.11969-51.70477,0-71.51422
			c-19.12007-19.80945-49.90512-19.80994-69.02521,0l-15.58933,16.15155l-15.68754-16.25305
			c-19.12008-19.80945-49.90513-19.80945-69.02521,0L15.33293,980.7616z"
        />
      </g>
    </svg>
  );
};
