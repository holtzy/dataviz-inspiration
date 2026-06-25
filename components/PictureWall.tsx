import { WallFilters } from "./WallFilters";
import { usePathname, useSearchParams } from "next/navigation";
import { Luminosity, Tool, VizLabel } from "../util/viz-types";
import { fullVizList } from "../util/viz-list";
import { filterVizList } from "../util/filterVizList";
import { ChartId } from "../util/sectionDescription";
import { Wall } from "./Wall";

// Used on the chart-type pages (/[chartId]): the filter bar on top of a wall of the
// full, URL-filtered viz-list. The homepage no longer uses this — it composes its
// own favorites-first layout (see app/page.tsx) to avoid loading the full list up front.

export const PictureWall = () => {
  //
  // Most of the state is stored in the URL:
  //
  const searchParams = useSearchParams();
  const columnNumber = searchParams.get("columnNumber") || "3";
  const luminosity = (searchParams.get("luminosity") || undefined) as
    | Luminosity
    | undefined;
  const tools = (searchParams.getAll("tools") || undefined) as
    | Tool[]
    | undefined;
  // Single-select: only ever honor the first label, even if the URL carries several.
  const labels = searchParams.getAll("labels").slice(0, 1) as VizLabel[];
  const pathname = usePathname();
  const chartType = pathname.split("/")[1] as ChartId;

  const filteredVizList = filterVizList(
    fullVizList,
    luminosity,
    chartType,
    tools,
    labels,
  ).reverse();

  return (
    <>
      <WallFilters
        columnNumber={Number(columnNumber)}
        luminosity={luminosity}
        selectedChart={undefined}
        tools={tools}
        labels={labels}
      />

      <Wall items={filteredVizList} columnNumber={Number(columnNumber)} />
    </>
  );
};
