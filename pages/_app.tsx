import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Luminosity, Tool } from "../util/viz-list";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";

export type ApplicationState = {
  columnNumber: number;
  setColumnNumber: (arg: number) => void;
  selectedLuminosities: Luminosity[];
  setLuminosity: (arg: Luminosity[]) => void;
  selectedChartIds: ChartId[];
  setSelectedChartIds: (arg: ChartId[] | undefined) => void;
  selectedTools: Tool[];
  setSelectedTools: (arg: Tool[] | undefined) => void;
};

function MyApp({ Component, pageProps }: AppProps) {
  // State of the application = shared between pages = written as query params in the URL
  const [columnNumber, setColumnNumber] = useState<number>(4);
  const [selectedLuminosities, setLuminosity] = useState<Luminosity[]>([
    "light",
    "dark",
  ]);
  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();
  const [selectedTools, setSelectedTools] = useState<Tool[]>();

  return (
    <Component
      {...pageProps}
      columnNumber={columnNumber}
      setColumnNumber={setColumnNumber}
      selectedLuminosities={selectedLuminosities}
      setLuminosity={setLuminosity}
      selectedChartIds={selectedChartIds}
      setSelectedChartIds={setSelectedChartIds}
      selectedTools={selectedTools}
      setSelectedTools={setSelectedTools}
    />
  );
}

export default MyApp;
