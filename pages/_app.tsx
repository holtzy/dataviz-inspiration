import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Luminosity, Tool } from "../util/viz-list";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";

export type ApplicationState = {
  columnNumber: number;
  setColumnNumber: (arg: number) => void;
  selectedLuminosities: Luminosity[];
  setLuminosity: (arg: Luminosity[]) => void;
  selectedChartIds: ChartId[];
  selectedTools: Tool[];
  updateState: (
    chartIds: ChartId[] | undefined,
    tools: Tool[] | undefined
  ) => void;
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // State of the application = shared between pages = written as query params in the URL
  const [columnNumber, setColumnNumber] = useState<number>(4);
  const [selectedLuminosities, setLuminosity] = useState<Luminosity[]>([
    "light",
    "dark",
  ]);
  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();
  const [selectedTools, setSelectedTools] = useState<Tool[]>();

  // Update state from URL param
  useEffect(() => {
    const { chart, tool } = router.query;

    if (chart && typeof chart === "string") {
      const ids = chart.split("--") as ChartId[];
      setSelectedChartIds(ids);
    } else {
      setSelectedChartIds(undefined);
    }

    if (tool && typeof tool === "string") {
      const ids = tool.split("--") as Tool[];
      setSelectedTools(ids);
    } else {
      setSelectedTools(undefined);
    }
  }, [router]);

  // Update the URL using the application state
  const updateRouter = (
    chartIds: ChartId[] | undefined,
    tools: Tool[] | undefined
  ) => {
    let newQuery = {
      chart: chartIds?.join("--"),
      tool: tools?.join("--"),
    };
    router.push({ query: removeUndefinedProps(newQuery) }, undefined, {
      shallow: true,
    });
  };

  // Functions to update the chart and tool states
  // Mechanism: updateChartId -> updates the URL with updateRouter -> useRouter() updates -> useEffect is triggered and update state
  const updateState = (
    chartIds: ChartId[] | undefined,
    tools: Tool[] | undefined
  ) => {
    updateRouter(chartIds, tools);
  };

  return (
    <Component
      {...pageProps}
      columnNumber={columnNumber}
      setColumnNumber={setColumnNumber}
      selectedLuminosities={selectedLuminosities}
      setLuminosity={setLuminosity}
      selectedChartIds={selectedChartIds}
      selectedTools={selectedTools}
      updateState={updateState}
    />
  );
}

export default MyApp;

const removeUndefinedProps = (obj: Object): ParsedUrlQueryInput => {
  return JSON.parse(JSON.stringify(obj));
};
