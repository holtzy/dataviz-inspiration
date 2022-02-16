import { chartTypesInfo } from "../util/sectionDescription";
import { Pill } from "./Pill";

type ChartIdPillProps = {
  chartId: string;
};

export const ChartIdPill = ({ chartId }: ChartIdPillProps) => {
  const chartInfo = chartTypesInfo.find((chart) => chart.id === chartId);

  // the family (e.g. "evolution") will be used to color the pill.
  const family = chartInfo?.family;

  // the label will be used... for the label :)
  const label = chartInfo?.label;

  if (!label) {
    return null;
  }

  return <Pill className={family} text={label} />;
};
