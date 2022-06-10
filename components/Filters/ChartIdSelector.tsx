import { useState } from "react";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import SectionLogo from "../SectionLogo";
import { ChartIdSelectorModal } from "./ChartIdSelectorModal";

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
      <span className="text-sm text-gray-700 font-light mr-2 truncate">
        select chart types
      </span>
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
          updateChartId={updateChartId}
        />
      )}
    </div>
  );
};
