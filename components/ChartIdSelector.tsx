import { useState } from "react";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import SectionLogo from "./SectionLogo";

// The selected charts appear in the filter area
// We can not display all of them. Let's keep only the n first ones.
const MAX_LOGO_ITEMS_DISPLAYED = 4;

type ChartIdSelectorProps = {
  selectedChartIds: ChartId[] | undefined;
  updateChartId: (arg: ChartId[] | undefined) => void;
};

// -
//  Short list of logos that appear at the top of the wall
// -
export const ChartIdSelector = ({
  selectedChartIds,
  updateChartId,
}: ChartIdSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // List of logos that have been selected by the user
  const selectedLogos = chartTypesInfo
    .filter((chart) => selectedChartIds?.includes(chart.id))
    .map((chart, i) => {
      if (i >= MAX_LOGO_ITEMS_DISPLAYED) {
        return null;
      }
      return (
        <div
          style={{ width: 25, height: 25, margin: 1 }}
          className={"relative opacity-100"}
          key={i}
        >
          <SectionLogo chartLogo={chart.logo} />
        </div>
      );
    });

  const notDisplayedLogoNumber = selectedChartIds
    ? selectedChartIds.length - MAX_LOGO_ITEMS_DISPLAYED
    : 0;

  const selectedVizs = (
    <div style={{ height: 25 }} className="h-4 max-w-32 flex items-center ">
      {selectedLogos}
      {notDisplayedLogoNumber > 0 && (
        <span className="text-sm ml-1">{"+" + notDisplayedLogoNumber}</span>
      )}
    </div>
  );

  // Message displayed when all chart types are selected
  const allChartMsg = (
    <div className="flex items-center">
      <span className="text-sm text-gray-700 font-light mr-2">all charts</span>
    </div>
  );

  return (
    <div
      className="flex max-w-40 items-center cursor-pointer opacity-80 hover:opacity-100"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      {selectedChartIds ? selectedVizs : allChartMsg}
      {isModalOpen && (
        <ChartIdSelectorModal
          setIsModalOpen={setIsModalOpen}
          selectedChartIds={selectedChartIds}
          updateChartId={updateChartId}
        />
      )}
    </div>
  );
};

// -
//  Modal that opens to select/unselect chart
// -
type ChartIdSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
  selectedChartIds: ChartId[] | undefined;
  updateChartId: (arg: ChartId[] | undefined) => void;
};

const ChartIdSelectorModal = ({
  setIsModalOpen,
  selectedChartIds,
  updateChartId,
}: ChartIdSelectorModalProps) => {
  const [name, setName] = useState<string | undefined>(undefined);

  const logoList = chartTypesInfo.map((chart, i) => {
    const isCurrentlySelected =
      selectedChartIds?.includes(chart.id) || !selectedChartIds;
    return (
      <div
        style={{ width: 45, height: 45 }}
        className={"relative my-2 mx-1 cursor-pointer opacity-100"}
        key={i}
        onMouseEnter={() => setName(chart.label)}
        onMouseLeave={() => setName(undefined)}
        onClick={(event) => {
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
        }}
      >
        <span className={isCurrentlySelected ? "opacity-100" : "opacity-30"}>
          <SectionLogo chartLogo={chart.logo} />
        </span>
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
        <div className="flex justify-around flex-wrap p-16">{logoList}</div>
        <div className="absolute bottom-2 flex justify-center w-full">
          {name ? (
            <span className="text-gray-700 text-sm font-light">{name}</span>
          ) : (
            <span className="text-gray-700 text-sm italic font-extralight">
              {"select as many chart types as you want"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
