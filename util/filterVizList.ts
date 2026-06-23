import { ChartId } from "./sectionDescription";
import { Luminosity, Tool, VizItem } from "./viz-list";

// viz-list.ts is the list of all the projects displayed on the main wall
// at the top of the wall some filters all to filter those projects
// this function is used to make the filter
export const filterVizList = (
  vizList: VizItem[],
  luminosity: Luminosity | undefined,
  selectedChartId: ChartId | undefined,
  tools: Tool[] | undefined
): VizItem[] => {
  return (
    vizList
      .filter(
        (item) => {
          return typeof luminosity === "undefined" ? true : item.luminosity.includes(luminosity)
        }
      )

      // Apply the chart type filter: each entry has a single image, so keep the
      // entry when its image is tagged with the selected chart type.
      .filter((element) => {
        if (!selectedChartId) {
          return true
        }
        return element.img.chartId.includes(selectedChartId)
      })

      .filter((vizItem) => {
        // No selected tool? Keep this item
        if (!tools || tools.length === 0) {
          return true;
        }
        if (!vizItem.tools) {
          return false
        }
        return vizItem?.tools.some((item) => {
          return tools.includes(item.name);
        });
      })
  );
};
