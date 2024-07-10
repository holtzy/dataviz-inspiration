import React from "react";
import { useSpring, animated } from "@react-spring/web";

type BigNumberProps = {
  number: number;
};

const BigNumber = ({ number }: BigNumberProps) => {
  const props = useSpring({
    number,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={{ fontSize: "3rem", fontWeight: "bold" }}>
      {props.number.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

export default BigNumber;
