"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

type BigNumberProps = {
  number: number;
};

const BigNumber = ({ number }: BigNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    const controls = animate(count, number, { duration: 1 });
    return () => controls.stop();
  }, [count, number]);

  return (
    <motion.div style={{ fontSize: "3rem", fontWeight: "bold" }}>
      {rounded}
    </motion.div>
  );
};

export default BigNumber;
