import React from "react";
import type { ChartLogo } from "../util/sectionDescription";

// This component displays a logo representing a chart type of the gallery. Example: bar chart
// The logo will fit the height of its container

type SectionLogoProps = {
  chartLogo: ChartLogo;
};

export default function SectionLogo({ chartLogo }: SectionLogoProps) {
  if (chartLogo === "anim150") {
    return (
      <img
        height={300}
        width={300}
        alt={"animation logo"}
        src={"/section/anim150.gif"}
      />
    );
  }

  if (chartLogo === "time150") {
    return (
      <img
        height={300}
        width={300}
        alt={"animation logo"}
        src={"/section/time150.gif"}
      />
    );
  }

  return (
    <img
      src={"/section/" + chartLogo + ".png"}
      alt={"chart logo for the " + chartLogo + " family"}
      className="w-full h-full object-contain"
    />
  );
}
