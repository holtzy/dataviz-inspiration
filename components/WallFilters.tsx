import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { ChartId } from "../util/sectionDescription";
import { Luminosity } from "../util/viz-list";
import { ChartIdSelectButton } from "./ChartIdSelectButton";

type WallFiltersProps = {
  columnNumber: number;
  updateColumnNumber: (arg: number) => void;
  selectedLuminosities: Luminosity[];
  updateLuminosity: (arg: Luminosity[]) => void;
  selectedChartIds: ChartId[] | undefined;
  updateChartId: (arg: ChartId[]) => void;
};

export const WallFilters = ({
  updateColumnNumber,
  columnNumber,
  updateLuminosity,
  selectedLuminosities,
  updateChartId,
  selectedChartIds,
}: WallFiltersProps) => {
  const columnNumberSelection = (
    <div className="flex py-2">
      <DeviceMobileIcon
        onClick={() => updateColumnNumber(2)}
        className={
          columnNumber === 2
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
      <DeviceTabletIcon
        onClick={() => updateColumnNumber(3)}
        className={
          columnNumber === 3
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
      <DesktopComputerIcon
        onClick={() => updateColumnNumber(4)}
        className={
          columnNumber === 4
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
    </div>
  );

  const lightVsDarkSelection = (
    <div className="flex py-2">
      <SunIcon
        onClick={() =>
          selectedLuminosities.includes("light")
            ? updateLuminosity(
                selectedLuminosities.filter((l) => l !== "light")
              )
            : updateLuminosity([...selectedLuminosities, "light"])
        }
        className={
          selectedLuminosities.includes("light")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
      <MoonIcon
        onClick={() =>
          selectedLuminosities.includes("dark")
            ? updateLuminosity(selectedLuminosities.filter((l) => l !== "dark"))
            : updateLuminosity([...selectedLuminosities, "dark"])
        }
        className={
          selectedLuminosities.includes("dark")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
    </div>
  );

  const chartIdSelection = (
    <div className="w-96 text-xs">
      <ChartIdSelectButton
        selectedChartIds={selectedChartIds}
        updateChartId={updateChartId}
      />
    </div>
  );

  return (
    <div className="wrapper">
      <div className="flex py-2 ">
        <div className="w-full flex mr-6">{columnNumberSelection}</div>
        <div className="w-full flex mr-6 ">{lightVsDarkSelection}</div>
        <div className="w-full flex mr-6">{chartIdSelection}</div>
      </div>
    </div>
  );
};
