import Select, { StylesConfig } from "react-select";
import {
  ChartId,
  chartIds,
  ChartLogo,
  chartTypesInfo,
} from "../util/sectionDescription";
import SectionLogo from "./SectionLogo";

// List of options (= chart types) to display on the select dropdown
type Option = {
  value: ChartId;
  label: string;
  logo: ChartLogo;
};
const options: Option[] = chartIds.map((id) => {
  const chartInfo = chartTypesInfo.filter((chart) => chart.id === id)[0];
  return { value: id, label: chartInfo.label, logo: chartInfo.logo };
});

const styles: StylesConfig<Option, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "solid .5px",
    borderRadius: "0px",
    borderColor: "grey",
    height: 40,
    maxHeight: 40,
    overflow: "scroll",
  }),
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "black",
  }),
};

type ChartIdSelectButtonProps = {
  selectedChartIds: ChartId[] | undefined;
  updateChartId: (arg: ChartId[]) => void;
};

export const ChartIdSelectButton = ({
  selectedChartIds,
  updateChartId,
}: ChartIdSelectButtonProps) => {
  const formatOptionLabel = (data: Option) => (
    <div className="flex items-center">
      <div className="relative w-6 h-6 mr-2">
        <SectionLogo chartLogo={data.logo} />
      </div>
      <p>{data.label}</p>
    </div>
  );

  return (
    <Select
      options={options}
      isMulti={true}
      formatOptionLabel={formatOptionLabel}
      placeholder={"All chart types"}
      onChange={(selectedOptions) =>
        updateChartId(selectedOptions.map((opt) => opt.value))
      }
      defaultValue={
        selectedChartIds
          ? options.filter((opt) => selectedChartIds.includes(opt.value))
          : undefined
      }
      styles={styles}
      minMenuHeight={430}
    />
  );
};
