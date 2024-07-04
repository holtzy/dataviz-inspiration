import { ChartId } from "../util/sectionDescription";
import { Luminosity, Tool } from "../util/viz-list";
import { ChartIdSelector } from "./Filters/ChartIdSelector";
import { ColumnNumberSelector } from "./Filters/ColumnNumberSelector";
import { FilterReset } from "./Filters/FilterReset";
import { LuminositySelector } from "./Filters/LuminositySelector";
import { ToolSelector } from "./Filters/ToolSelector";

type WallFiltersProps = {
  columnNumber: number;
  luminosity: Luminosity[] | undefined;
  selectedChartIds: ChartId[] | undefined;
  selectedTools: Tool[] | undefined;
  updateState: (
    chartIds: ChartId[] | undefined,
    tools: Tool[] | undefined
  ) => void;
};

export const WallFilters = ({
  columnNumber,
  luminosity,
  selectedChartIds,
  selectedTools,
  updateState,
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
        <ChartIdSelector
          selectedChartIds={selectedChartIds}
          updateChartId={(chartIds: ChartId[] | undefined) => {
            updateState(chartIds, selectedTools);
          }}
        />
      </FilterWrapper>

      <FilterWrapper>
        <ToolSelector
          selectedTools={selectedTools}
          updateTool={(tools: Tool[] | undefined) => {
            updateState(selectedChartIds, tools);
          }}
        />
      </FilterWrapper>

      {/* A "x" button allowing to reset all filters to default (=no filter at all) */}
      <FilterWrapper>
        <FilterReset
          onClick={() => {
            updateState(undefined, undefined);
          }}
        />
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
