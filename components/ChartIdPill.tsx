import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import { Pill } from "./Pill";

type ChartIdPillProps = {
  chartId: string;
};

export const ChartIdPill = ({ chartId }: ChartIdPillProps) => {
  const family = chartTypesInfo.find((chart) => chart.id === chartId)?.family;
  return <Pill className={family} text={chartId} />;
};
