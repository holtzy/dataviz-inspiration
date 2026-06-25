import { ChartId } from "../util/sectionDescription";
import { Luminosity, Tool, VizLabel } from "../util/viz-types";
import { ChartIdSelector } from "./Filters/ChartIdSelector";
import { ColumnNumberSelector } from "./Filters/ColumnNumberSelector";
import { FilterReset } from "./Filters/FilterReset";
import { LabelSelector } from "./Filters/LabelSelector";
import { LuminositySelector } from "./Filters/LuminositySelector";
import { ToolSelector } from "./Filters/ToolSelector";

type WallFiltersProps = {
  columnNumber: number;
  luminosity: Luminosity[] | undefined;
  selectedChart: ChartId | undefined;
  tools: Tool[] | undefined;
  labels: VizLabel[] | undefined;
};

export const WallFilters = ({
  columnNumber,
  luminosity,
  selectedChart,
  tools,
  labels,
}: WallFiltersProps) => {
  return (
    // overflow-x-auto keeps any horizontal scrolling INSIDE this bar (so the page itself
    // never scrolls sideways on mobile). The inner row uses w-max + mx-auto: it centers
    // on wide screens when it fits, and scrolls from the left when it's too wide to fit.
    <div className="sticky bg-white top-0 w-full z-40 overflow-x-auto">
      <div className="flex items-center w-max mx-auto">
        <FilterWrapper>
          <ColumnNumberSelector columnNumber={columnNumber} />
        </FilterWrapper>

        <FilterWrapper>
          <LuminositySelector luminosity={luminosity} />
        </FilterWrapper>

        <FilterWrapper>
          <ChartIdSelector selectedChart={selectedChart} />
        </FilterWrapper>

        {/* Tools filter is hidden on phones to save horizontal space */}
        <FilterWrapper className="hidden sm:flex">
          <ToolSelector tools={tools} />
        </FilterWrapper>

        <FilterWrapper>
          <LabelSelector labels={labels} />
        </FilterWrapper>

        {/* A "x" button allowing to reset all filters to default (=no filter at all) */}
        <FilterWrapper>
          <FilterReset />
        </FilterWrapper>
      </div>
    </div>
  );
};

const FilterWrapper = (props: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <div
      className={`flex h-8 px-2 mx-2 py-2 my-2 hover:outline outline-1 rounded-md outline-gray-200 ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </div>
  );
};
