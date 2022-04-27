import { stratify } from "d3";
import { ChartId, chartTypesInfo } from "../../../util/sectionDescription";
import { VizItem } from "../../../util/viz-list";

export type ConnectionItem = {
  name: string;
  parent: string;
  value: number | null;
  label?: string;
};

export const treemapDataFromVizList = (vizList: VizItem[]) => {
  // Count how many of each chart type I have (ex: stream: 23, sankey: 12...)
  let chartTypeCounts: { [key: string]: number } = {};
  vizList.forEach((vizItem, i) => {
    vizItem.img.forEach((img) => {
      img.chartId.forEach((chartId: string) => {
        if (chartId in chartTypeCounts) {
          chartTypeCounts[chartId] += 1;
        } else {
          chartTypeCounts[chartId] = 1;
        }
      });
    });
  });

  // Initialize a list of connection, including a root for the hierarchy
  let connectionList: ConnectionItem[] = [
    { name: "root", parent: "", value: null },
    { name: "distribution", parent: "root", value: null },
    { name: "correlation", parent: "root", value: null },
    { name: "evolution", parent: "root", value: null },
    { name: "ranking", parent: "root", value: null },
    { name: "partOfAWhole", parent: "root", value: null },
    { name: "flow", parent: "root", value: null },
    { name: "map", parent: "root", value: null },
  ];

  // Add each chart type to the list of connection
  Object.entries(chartTypeCounts).forEach(([key, value]) => {
    const family = chartTypesInfo.find((info) => info.id === key)?.family;
    const label = chartTypesInfo.find((info) => info.id === key)?.label; // #ugly
    const name = key === "map" ? "backgroundMap" : key;
    if (family) {
      connectionList.push({ name, parent: family, value, label });
    }
  });

  const treemapDataGenerator = stratify<ConnectionItem>()
    .id((d) => d.name)
    .parentId((d) => d.parent);

  const treemapData = treemapDataGenerator(connectionList).sum(
    (d) => d.value || 0
  );

  return treemapData;
};
