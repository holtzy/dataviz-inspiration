import { useRef } from "react";
import { useDimensions } from "../../../hooks/use-dimensions";
import { vizList } from "../../../util/viz-list";
import { Treemap } from "./Treemap";
import { treemapDataFromVizList } from "./treemapDataFromVizList";

export const ChartTypeTreemap = () => {
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);
  const treemapData = treemapDataFromVizList(vizList);
  return (
    <div style={{ width: "100%", maxWidth: 1300 }} ref={chartRef}>
      <Treemap data={treemapData} width={chartSize.width} height={400} />
    </div>
  );
};
