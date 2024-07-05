import { useState } from "react";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import SectionLogo from "../SectionLogo";
import { ChartIdSelectorModal } from "./ChartIdSelectorModal";

type ChartIdSelectorProps = {
  selectedChart: ChartId | undefined;
};

export const ChartIdSelector = ({ selectedChart }: ChartIdSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedChartInfo = chartTypesInfo.find((c) => c.id === selectedChart);

  const allChartMsg = (
    <div className="flex items-center">
      <span className="text-sm text-gray-700 font-light mr-2 truncate">
        select chart types
      </span>
    </div>
  );

  const selectedButtonMsg = selectedChartInfo ? (
    <div
      style={{ width: 25, height: 25, margin: 1 }}
      className={"relative opacity-100"}
    >
      <SectionLogo chartLogo={selectedChartInfo.logo} />
    </div>
  ) : (
    allChartMsg
  );

  return (
    <div
      className="flex max-w-40 items-center cursor-pointer opacity-80 hover:opacity-100"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      {selectedButtonMsg}
      {isModalOpen && <ChartIdSelectorModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};
