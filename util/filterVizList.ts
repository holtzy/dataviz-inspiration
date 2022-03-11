import { ChartId } from "./sectionDescription";
import { Luminosity, Tool, VizItem } from "./viz-list";

// viz-list.ts is the list of all the projects displayed on the main wall
// at the top of the wall some filters all to filter those projects
// this function is used to make the filter
export const filterVizList = (
    vizList: VizItem[],
    luminosity: Luminosity[],
    selectedChartIds: ChartId[] | undefined
    selectedTools: Tool[] | undefined
  ): VizItem[] => {
    return (
      vizList
        .filter(
          (item) =>
            luminosity.includes(item.luminosity[0]) ||
            luminosity.includes(item.luminosity[1])
        )
        // Keep only the selected chartIds. Nothing selected? keep them all.
        // Remember that a project can be associated with several chartIds
        .filter((vizItem) => {
          // nothing selected? chartId is undefined or empty array
          if (!selectedChartIds || selectedChartIds.length === 0) {
            return true;
          }
          return vizItem.chartId.some((id) => {
            return selectedChartIds.includes(id);
          });
        })
        .filter((vizItem) => {
          // nothing selected? chartId is undefined or empty array
          if (!selectedTools || selectedTools.length === 0) {
            return true;
          }
          return vizItem.tool.some((id) => {
            return selectedTools.includes(id);
          });
        })
    );
  };
