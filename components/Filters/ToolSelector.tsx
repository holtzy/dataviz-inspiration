import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Tool, Tools } from "../../util/viz-list";
import { Pill } from "../Pill";

// The selected charts appear in the filter area
// We can not display all of them. Let's keep only the n first ones.
const MAX_PILL_ITEMS_DISPLAYED = 2;

type ToolSelectorProps = {
  selectedTools: Tool[] | undefined;
  updateTool: (arg: Tool[] | undefined) => void;
};

// -
//  Short list of logos that appear at the top of the wall
// -
export const ToolSelector = ({
  updateTool,
  selectedTools,
}: ToolSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // List of logos that have been selected by the user
  const selectedToolPills = selectedTools?.map((tool, i) => {
    if (i >= MAX_PILL_ITEMS_DISPLAYED) {
      return null;
    }
    return (
      <div key={i} className="mr-1">
        <Pill text={tool} />
      </div>
    );
  });

  const notDisplayedLogoNumber = selectedTools
    ? selectedTools.length - MAX_PILL_ITEMS_DISPLAYED
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
      {selectedTools ? selectedToolArea : allChartMsg}
      {isModalOpen && (
        <ToolSelectorModal
          setIsModalOpen={setIsModalOpen}
          selectedTools={selectedTools}
          updateTool={updateTool}
        />
      )}
    </div>
  );
};

// -
//  Modal that opens to select/unselect chart
// -
type ToolSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
  selectedTools: Tool[] | undefined;
  updateTool: (arg: Tool[] | undefined) => void;
};

const ToolSelectorModal = ({
  setIsModalOpen,
  selectedTools,
  updateTool,
}: ToolSelectorModalProps) => {
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
    <span
      onClick={() => {
        updateTool(undefined);
      }}
      className="text-brand text-sm mr-1 cursor-pointer p-1 rounded border-brand border opacity-40 hover:opacity-100"
    >
      {"select all"}
    </span>
  );

  const pillList = Tools.map((tool, i) => {
    const isCurrentlySelected = selectedTools?.includes(tool) || !selectedTools;

    const onPillClick = (event: any) => {
      if (!selectedTools) {
        updateTool([tool]);
      } else {
        if (isCurrentlySelected) {
          const remainingIds = selectedTools.filter((item) => item !== tool);
          if (remainingIds.length === 0) {
            updateTool(undefined);
          } else {
            updateTool(remainingIds);
          }
        } else {
          updateTool([...selectedTools, tool]);
        }
      }
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
          className={isCurrentlySelected ? "opacity-100" : "opacity-30"}
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
