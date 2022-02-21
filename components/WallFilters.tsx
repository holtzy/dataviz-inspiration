import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { Luminosity } from "../util/viz-list";

type WallFiltersProps = {
  columnNumber: number;
  updateColumnNumber: (arg: number) => void;
  luminosity: Luminosity[];
  updateLuminosity: (arg: Luminosity[]) => void;
};

export const WallFilters = ({
  updateColumnNumber,
  columnNumber,
  updateLuminosity,
  luminosity,
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
          luminosity.includes("light")
            ? updateLuminosity(luminosity.filter((l) => l !== "light"))
            : updateLuminosity([...luminosity, "light"])
        }
        className={
          luminosity.includes("light")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
      <MoonIcon
        onClick={() =>
          luminosity.includes("dark")
            ? updateLuminosity(luminosity.filter((l) => l !== "dark"))
            : updateLuminosity([...luminosity, "dark"])
        }
        className={
          luminosity.includes("dark")
            ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
            : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
        }
      />
    </div>
  );

  return (
    <div className="wrapper">
      <div className="flex">
        <div className="w-full flex mr-6">{columnNumberSelection}</div>
        <div className="w-full flex ">{lightVsDarkSelection}</div>
      </div>
    </div>
  );
};
