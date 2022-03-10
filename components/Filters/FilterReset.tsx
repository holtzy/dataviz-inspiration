import { XIcon } from "@heroicons/react/outline";
import { ChartId } from "../../util/sectionDescription";
import { Luminosity, Tool } from "../../util/viz-list";

type FilterResetProps = {
  updateTool: (arg: Tool[] | undefined) => void;
  updateChartId: (arg: ChartId[] | undefined) => void;
  updateLuminosity: (arg: Luminosity[]) => void;
};

export const FilterReset = ({
  updateTool,
  updateChartId,
  updateLuminosity,
}: FilterResetProps) => {
  return (
    <div className="flex">
      <XIcon
        onClick={() => {
          updateLuminosity(["dark", "light"]);
          updateTool(undefined);
          updateChartId(undefined);
        }}
        className="cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
      />
    </div>
  );
};
