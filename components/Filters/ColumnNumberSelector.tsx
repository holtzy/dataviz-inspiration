"use client";

import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { buildUrlWithUpdatedParam } from "../../util/build-url-with-updated-param";

type ColumnNumberSelectorProps = {
  columnNumber: number;
};

export const ColumnNumberSelector = ({
  columnNumber,
}: ColumnNumberSelectorProps) => {
  return (
    <div className="flex">
      <Link href={buildUrlWithUpdatedParam("columnNumber", "2")}>
        <DeviceMobileIcon
          className={
            columnNumber === 2
              ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
              : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
          }
        />
      </Link>
      <Link href={buildUrlWithUpdatedParam("columnNumber", "3")}>
        <DeviceTabletIcon
          className={
            columnNumber === 3
              ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
              : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
          }
        />
      </Link>
      <Link href={buildUrlWithUpdatedParam("columnNumber", "4")}>
        <DesktopComputerIcon
          className={
            columnNumber === 4
              ? "cursor-pointer h-5 w-5 text-red-800 fill-red-200 opacity-100"
              : "cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40"
          }
        />
      </Link>
    </div>
  );
};
