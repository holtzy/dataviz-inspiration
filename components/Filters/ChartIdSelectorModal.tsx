import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import {
  chartFamilies,
  ChartFamily,
  ChartId,
  chartTypesInfo,
} from "../../util/sectionDescription";
import SectionLogo from "../SectionLogo";

// -
//  Modal that allows to select/unselect chart types
// -
type ChartIdSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
  selectedChartIds: ChartId[] | undefined;
  updateChartId: (arg: ChartId[] | undefined) => void;
};

export const ChartIdSelectorModal = ({
  setIsModalOpen,
  selectedChartIds,
  updateChartId,
}: ChartIdSelectorModalProps) => {
  // name of the chart type that is hovered over (appears at the very bottom of the modal)
  const [name, setName] = useState<string | undefined>(undefined);

  const [newSelectedChartIds, setNewSelectedChartIds] = useState<
    ChartId[] | undefined
  >(selectedChartIds);

  // A list of all logos for a specific family
  const logoList = (family: ChartFamily) => {
    return chartTypesInfo
      .filter((chart) => chart.family === family)
      .map((chart, i) => {
        const isCurrentlySelected =
          newSelectedChartIds?.includes(chart.id) || !newSelectedChartIds;

        const onLogoClick = (event: React.MouseEvent<HTMLElement>) => {
          if (!newSelectedChartIds) {
            setNewSelectedChartIds([chart.id]);
          } else {
            if (isCurrentlySelected) {
              const remainingIds = newSelectedChartIds.filter(
                (item) => item !== chart.id
              );
              // If no more chart are selected, send undefined to select them all
              if (remainingIds.length === 0) {
                setNewSelectedChartIds(undefined);
              } else {
                setNewSelectedChartIds(remainingIds);
              }
            } else {
              setNewSelectedChartIds([...newSelectedChartIds, chart.id]);
            }
          }
          event.stopPropagation();
        };

        const logoOpacity = isCurrentlySelected ? "opacity-100" : "opacity-30";

        return (
          <div
            style={{ width: 45, height: 45, marginLeft: 2, marginRight: 2 }}
            className={
              "relative cursor-pointer hover:border hover:border-black rounded-full hover:opacity-100" +
              " " +
              logoOpacity
            }
            key={i}
            onMouseEnter={() => setName(chart.label)}
            onMouseLeave={() => setName(undefined)}
            onClick={onLogoClick}
          >
            <SectionLogo chartLogo={chart.logo} />
          </div>
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
          updateChartId(newSelectedChartIds);
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

  /* At the very top, X to close the modal (important for mobile) */
  const selectAllButton = (
    <span
      onClick={() => {
        updateChartId(undefined);
      }}
      className="text-brand text-sm mr-1 cursor-pointer p-1 rounded border-brand border opacity-40 hover:opacity-100"
    >
      {"select all"}
    </span>
  );

  const validateButton = (
    <span
      onClick={() => {
        updateChartId(newSelectedChartIds);
        setIsModalOpen(false);
      }}
      className="text-white bg-brand text-sm cursor-pointer p-1 rounded border-brand border opacity-80 hover:opacity-100"
    >
      {"validate"}
    </span>
  );

  return (
    // This div takes the whole screen. It allows to close the modal when user clicks outside the content
    <div
      className={
        "fixed bg-white inset-0 h-screen w-screen z-20 flex justify-center items-center"
      }
      onClick={() => {
        updateChartId(newSelectedChartIds);
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
          <div>
            {selectAllButton}
            {validateButton}
          </div>
        </div>
      </div>
    </div>
  );
};
