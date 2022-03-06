import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

type ColumnNumberSelectorProps = {
  columnNumber: number;
  updateColumnNumber: (arg: number) => void;
};

export const ColumnNumberSelector = ({
  columnNumber,
  updateColumnNumber,
}: ColumnNumberSelectorProps) => {
  return (
    <div className="flex">
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
};
