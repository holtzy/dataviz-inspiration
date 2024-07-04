import { ChartId } from "./sectionDescription";
import { Luminosity, Tool, VizItem } from "./viz-list";

const hasIntersection = (array1: any[], array2: any[]) => {
  return array1.filter(value => array2.includes(value)).length > 0
}

// viz-list.ts is the list of all the projects displayed on the main wall
// at the top of the wall some filters all to filter those projects
// this function is used to make the filter
export const filterVizList = (
  vizList: VizItem[],
  luminosity: Luminosity | undefined,
  selectedChartIds: ChartId[] | undefined,
  selectedTools: Tool[] | undefined
): VizItem[] => {
  return (
    vizList
      .filter(
        (item) => {
          return typeof luminosity === "undefined" ? true : item.luminosity.includes(luminosity)
        }
      )

      // Apply the chart type filter
      // A project can have several associated images.
      // Keep only the appropriate images
      .reduce((acc: VizItem[], element) => {
        if (!selectedChartIds || selectedChartIds.length === 0) {
          acc.push(element)
        } else {
          const images = element.img.filter(image => hasIntersection(image.chartId, selectedChartIds))
          if (images.length > 0) {
            acc.push({ ...element, img: images })
          }
        }
        return acc
      }, [])

      .filter((vizItem) => {
        // No selected tool? Keep this item
        if (!selectedTools || selectedTools.length === 0) {
          return true;
        }
        if (!vizItem.tools) {
          return false
        }
        return vizItem?.tools.some((item) => {
          return selectedTools.includes(item.name);
        });
      })
  );
};
