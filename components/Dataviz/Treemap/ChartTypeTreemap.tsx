import { vizList } from "../../../util/viz-list";
import { Treemap } from "./Treemap";
import { treemapDataFromVizList } from "./treemapDataFromVizList";

export const ChartTypeTreemap = () => {
  const treemapData = treemapDataFromVizList(vizList);
  return <Treemap data={treemapData} width={800} height={400} />;
};
