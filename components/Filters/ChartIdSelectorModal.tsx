import { useState } from "react";
import {
  chartFamilies,
  ChartFamily,
  ChartId,
  chartTypesInfo,
} from "../../util/sectionDescription";
import SectionLogo from "../SectionLogo";

// -
//  Modal that opens to select/unselect chart
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
  // name of the chart type that is hovered over
  const [name, setName] = useState<string | undefined>(undefined);

  // A list of all logos of a specific family
  const logoList = (family: ChartFamily) => {
    return chartTypesInfo
      .filter((chart) => chart.family === family)
      .map((chart, i) => {
        const isCurrentlySelected =
          selectedChartIds?.includes(chart.id) || !selectedChartIds;

        const onLogoClick = (event: React.MouseEvent<HTMLElement>) => {
          if (!selectedChartIds) {
            updateChartId([chart.id]);
          } else {
            if (isCurrentlySelected) {
              const remainingIds = selectedChartIds.filter(
                (item) => item !== chart.id
              );
              if (remainingIds.length === 0) {
                updateChartId(undefined);
              } else {
                updateChartId(remainingIds);
              }
            } else {
              updateChartId([...selectedChartIds, chart.id]);
            }
          }
          event.stopPropagation();
        };

        return (
          <div
            style={{ width: 45, height: 45, marginLeft: 2, marginRight: 2 }}
            className={"relative cursor-pointer opacity-100"}
            key={i}
            onMouseEnter={() => setName(chart.label)}
            onMouseLeave={() => setName(undefined)}
            onClick={onLogoClick}
          >
            <span
              className={isCurrentlySelected ? "opacity-100" : "opacity-30"}
            >
              <SectionLogo chartLogo={chart.logo} />
            </span>
          </div>
        );
      });
  };

  //   For a familySection, display a title, an horizontal separator and the logos
  const familySection = (family: ChartFamily) => {
    return (
      <div className="mb-4">
        <span className={family + " capitalize"}>{family}</span>
        <hr className="opacity-60" />
        <div className="flex justify-start flex-wrap mt-2">
          {logoList(family)}
        </div>
      </div>
    );
  };

  /* Display the name of the currently hovered chart type */
  const hoveredChartName = (
    <div className="absolute bottom-2">
      <span className="text-gray-700 text-sm italic font-extralight">
        {name || "Click on a chart to filter"}
      </span>
    </div>
  );

  return (
    // This div takes the whole screen. It allows to close the modal when user clicks outside the content
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className={
        "fixed inset-0 h-screen w-screen z-20 flex justify-center items-center"
      }
      onClick={() => setIsModalOpen(false)}
    >
      {/* This div is the content with white background */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex flex-col justify-start p-10 max-w-lg bg-white rounded-md border drop-shadow-md "
      >
        {chartFamilies.map((family) => familySection(family))}
        {hoveredChartName}
      </div>
    </div>
  );
};
