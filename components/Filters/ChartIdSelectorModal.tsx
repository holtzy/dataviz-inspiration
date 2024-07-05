"use client";

import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import {
  chartFamilies,
  ChartFamily,
  chartTypesInfo,
} from "../../util/sectionDescription";
import SectionLogo from "../SectionLogo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// -
//  Modal that allows to select a specific chart type
// -
type ChartIdSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
};

export const ChartIdSelectorModal = ({
  setIsModalOpen,
}: ChartIdSelectorModalProps) => {
  const searchParams = useSearchParams();

  const searchParamsStringToAdd = searchParams
    ? "?" + searchParams.toString()
    : "";

  // name of the chart type that is hovered over (appears at the very bottom of the modal)
  const [name, setName] = useState<string | undefined>(undefined);

  // A list of all logos for a specific family
  const logoList = (family: ChartFamily) => {
    return chartTypesInfo
      .filter((chart) => chart.family === family)
      .map((chart, i) => {
        const newHref = "/" + chart.id + searchParamsStringToAdd;

        return (
          <Link
            key={i}
            href={newHref}
            style={{ width: 45, height: 45, marginLeft: 2, marginRight: 2 }}
            className={
              "relative cursor-pointer hover:border hover:border-black rounded-full hover:opacity-100"
            }
            onMouseEnter={() => setName(chart.label)}
            onMouseLeave={() => setName(undefined)}
          >
            <SectionLogo chartLogo={chart.logo} />
          </Link>
        );
      });
  };

  // For a familySection, display a title, an horizontal separator and the logos
  const familySection = (family: ChartFamily) => {
    return (
      <div className="mb-2">
        <span className={family + " capitalize text-sm"}>{family}</span>
        <hr className="opacity-60" />
        <div className="flex justify-start flex-no-wrap mt-1">
          {logoList(family)}
        </div>
      </div>
    );
  };

  /* At the very top, X to close the modal (important for mobile) */
  const topCross = (
    <div className="flex justify-end items-center ">
      <div
        className="p-4 cursor-pointer"
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        <XIcon className="cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40" />
      </div>
    </div>
  );

  /* Display the name of the currently hovered chart type */
  const hoveredChartName = (
    <span className="text-gray-700 text-xs italic font-extralight">
      {name || "Click a chart to filter"}
    </span>
  );

  const selectAllButton = (
    <Link
      href={"/" + searchParamsStringToAdd}
      className="text-brand text-sm mr-1 cursor-pointer p-1 rounded border-brand border opacity-40 hover:opacity-100"
    >
      {"select all"}
    </Link>
  );

  return (
    // This div takes the whole screen. It allows to close the modal when user clicks outside the content
    <div
      className={
        "fixed bg-white inset-0 h-screen w-screen z-20 flex justify-center items-center"
      }
      onClick={() => {
        setIsModalOpen(false);
      }}
    >
      {/* This div is the content with white background */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="px-8 py-2 overflow-scroll max-h-screen max-w-lg bg-white rounded-md cursor-default"
      >
        {topCross}
        {chartFamilies.map((family) => familySection(family))}
        <div className="flex justify-between items-center mt-10">
          {hoveredChartName}
          <div>{selectAllButton}</div>
        </div>
      </div>
    </div>
  );
};
