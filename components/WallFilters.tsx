import { ChartId } from "../util/sectionDescription";
import { Luminosity, Tool, VizLabel } from "../util/viz-list";
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
    <div className="sticky bg-white top-0 w-full z-40 flex justify-center items-center">
      <FilterWrapper>
        <ColumnNumberSelector columnNumber={columnNumber} />
      </FilterWrapper>

      <FilterWrapper>
        <LuminositySelector luminosity={luminosity} />
      </FilterWrapper>

      <FilterWrapper>
        <ChartIdSelector selectedChart={selectedChart} />
      </FilterWrapper>

      <FilterWrapper>
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
  );
};

const FilterWrapper = (props: { children: JSX.Element }) => {
  return (
    <div className="flex h-8 px-2 mx-2 py-2 my-2 hover:outline outline-1 rounded-md outline-gray-200">
      {props.children}
    </div>
  );
};
