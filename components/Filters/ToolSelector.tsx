"use client";

import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Tool, allTools } from "../../util/viz-list";
import { Pill } from "../Pill";
import Link from "next/link";
import { buildUrlWithUpdatedParam } from "../../util/build-url-with-updated-param";
import { useRouter } from "next/navigation";

// The selected charts appear in the filter area
// We can not display all of them. Let's keep only the n first ones.
const MAX_PILL_ITEMS_DISPLAYED = 2;

type ToolSelectorProps = {
  tools: Tool[] | undefined;
};

// -
//  Short list of logos that appear at the top of the wall
// -
export const ToolSelector = ({ tools }: ToolSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // List of logos that have been selected by the user
  const selectedToolPills = tools?.map((tool, i) => {
    if (i >= MAX_PILL_ITEMS_DISPLAYED) {
      return null;
    }
    return (
      <div key={i} className="mr-1">
        <Pill text={tool} />
      </div>
    );
  });

  const notDisplayedLogoNumber = tools
    ? tools.length - MAX_PILL_ITEMS_DISPLAYED
    : 0;

  const selectedToolArea = (
    <div style={{ height: 25 }} className="h-4 max-w-32 flex items-center ">
      {selectedToolPills}
      {notDisplayedLogoNumber > 0 && (
        <span className="text-sm ml-1">{"+" + notDisplayedLogoNumber}</span>
      )}
    </div>
  );

  // Message displayed when all chart types are selected
  const allChartMsg = (
    <div className="flex items-center">
      <span className="text-sm text-gray-700 font-light truncate">
        select tools
      </span>
    </div>
  );

  return (
    <div
      className="flex max-w-40 items-center cursor-pointer opacity-80 hover:opacity-100 px-2"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      {tools && tools.length > 0 ? selectedToolArea : allChartMsg}
      {isModalOpen && (
        <ToolSelectorModal setIsModalOpen={setIsModalOpen} tools={tools} />
      )}
    </div>
  );
};

// -
//
//  Modal that opens to select/unselect chart
//
// -
type ToolSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
  tools: Tool[] | undefined;
};

const ToolSelectorModal = ({
  setIsModalOpen,
  tools,
}: ToolSelectorModalProps) => {
  const router = useRouter();

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

  const validateButton = (
    <span
      onClick={() => {
        setIsModalOpen(false);
      }}
      className="text-white bg-brand text-sm cursor-pointer p-1 rounded border-brand border opacity-80 hover:opacity-100"
    >
      {"validate"}
    </span>
  );

  const selectAllButton = (
    <Link
      href={buildUrlWithUpdatedParam("tools")}
      className="text-brand text-sm mr-1 cursor-pointer p-1 rounded border-brand border opacity-40 hover:opacity-100"
    >
      {"select all"}
    </Link>
  );

  const pillList = allTools.map((tool, i) => {
    const isCurrentlySelected = tools?.includes(tool) || !tools;

    const newTools = isCurrentlySelected
      ? tools?.filter((item) => item !== tool)
      : [...tools, tool];

    const onPillClick = (event: any) => {
      const updatedUrl = buildUrlWithUpdatedParam("tools", newTools);
      router.push(updatedUrl);
      event.stopPropagation();
    };

    return (
      <div
        className={"relative my-2 mx-1 cursor-pointer opacity-100"}
        key={i}
        onClick={onPillClick}
      >
        <Pill
          text={tool}
          className={
            isCurrentlySelected || tools.length === 0
              ? "opacity-100"
              : "opacity-30"
          }
        />
      </div>
    );
  });

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className={
        "fixed inset-0 h-screen w-screen z-20 flex justify-center items-center"
      }
      onClick={() => setIsModalOpen(false)}
    >
      <div className="flex flex-col max-w-lg bg-white rounded-md border drop-shadow-md ">
        {topCross}
        <div className="flex justify-start p-16 flex-wrap">{pillList}</div>
        <div className="flex justify-end p-4">
          {selectAllButton}
          {validateButton}
        </div>
      </div>
    </div>
  );
};
