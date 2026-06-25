import { useRef } from "react";
import { useDimensions } from "../../../hooks/use-dimensions";
import { fullVizList } from "../../../util/viz-list";
import { Treemap } from "./Treemap";
import { treemapDataFromVizList } from "./treemapDataFromVizList";

export const ChartTypeTreemap = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);
  const treemapData = treemapDataFromVizList(fullVizList);
  return (
    <div style={{ width: "100%", maxWidth: 1300 }} ref={chartRef}>
      <Treemap data={treemapData} width={chartSize.width} height={400} />
    </div>
  );
};
