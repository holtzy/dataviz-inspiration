import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { Luminosity, Tool, VizItem, vizList } from "../util/viz-list";
import { useRouter } from "next/router";
import { WallFilters } from "../components/WallFilters";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import { filterVizList } from "../util/filterVizList";
import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  //
  // State of the application
  // Initialized with default values. Those default can be overriden by URL params in the next useEffect
  //
  const [selectedProjectId, setSelectedProjectId] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [columnNumber, setColumnNumber] = useState<number>(4);
  const [selectedLuminosities, setLuminosity] = useState<Luminosity[]>([
    "light",
    "dark",
  ]);
  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();
  const [selectedTools, setSelectedTools] = useState<Tool[]>();

  //
  // Update state from URL param if needed once 1st render happened
  // Note that I don't know how to type useRouter, so it just return string or string[] :(
  //
  useEffect(() => {
    const { col, luminosity, chartId, tool } = router.query;
    if (col) {
      setColumnNumber(Number(col));
    }
    if (luminosity) {
      const luminosityArray = Array.isArray(luminosity)
        ? (luminosity as Luminosity[])
        : ([luminosity] as Luminosity[]);
      setLuminosity(luminosityArray);
    }
    if (chartId) {
      const chartIdArray = Array.isArray(chartId)
        ? (chartId as ChartId[])
        : ([chartId] as ChartId[]);
      setSelectedChartIds(chartIdArray);
    }
    if (tool) {
      const toolArray = Array.isArray(tool)
        ? (tool as Tool[])
        : ([tool] as Tool[]);
      setSelectedTools(toolArray);
    }
  }, []);

  //
  // Functions that changes the state AND updates URL params
  // Use only them to update state
  //
  const updateColumnNumber = (colNumber: number) => {
    setColumnNumber(colNumber);
    router.push({ query: { ...router.query, col: colNumber } }, undefined, {
      shallow: true,
    });
  };
  const updateLuminosity = (luminosity: Luminosity[]) => {
    setLuminosity(luminosity);
    router.push(
      { query: { ...router.query, luminosity: luminosity } },
      undefined,
      {
        shallow: true,
      }
    );
  };
  const updateChartId = (ids: ChartId[] | undefined) => {
    // If nothing is selected ids will be empty array. In this case, set undefined
    if (!ids || ids.length === 0) {
      setSelectedChartIds(undefined);
    }
    setSelectedChartIds(ids);
    router.push({ query: { ...router.query, chartId: ids } }, undefined, {
      shallow: true,
    });
  };
  const updateTool = (tools: Tool[] | undefined) => {
    // If nothing is selected tools will be empty array. In this case, set undefined
    if (!tools || tools.length === 0) {
      setSelectedTools(undefined);
      router.push({ query: { ...router.query, tool: undefined } });
    } else {
      setSelectedTools(tools);
      router.push({ query: { ...router.query, tool: tools } }, undefined, {
        shallow: true,
      });
    }
  };

  //
  // Apply the filters on the viz list!
  //
  const filteredVizList = filterVizList(
    vizList,
    selectedLuminosities,
    selectedChartIds
  );

  const vizItemNumber = filteredVizList.length;

  // When 1 chart type is selected, the website description is updated to show the chart label
  const selectedChartLabel =
    selectedChartIds && selectedChartIds.length === 1
      ? chartTypesInfo.filter((chart) => chart.id === selectedChartIds[0])[0]
          .label
      : "chart";

  const siteDescription = (
    <p>
      <a href="dataviz-inspiration">Dataviz-inspiration.com</a>
      <span>
        {" is the biggest list of " +
          selectedChartLabel +
          " examples available on the web. It showcases " +
          vizItemNumber +
          " of the most beautiful and impactful dataviz projects I know. The collection is a good place to visit when you're designing a new graph, together with "}
      </span>
      <a href="https://www.data-to-viz.com">data-to-viz.com</a>
      <span>{" that shares dataviz best practices."}</span>
    </p>
  );

  return (
    <>
      <AppHeader
        vizItemNumber={vizItemNumber}
        selectedChartLabel={selectedChartLabel}
      />

      <div className="wrapper">
        <Navbar />
      </div>

      <main className="flex flex-col items-center">
        <TitleAndDescription
          title="Dataviz Inspiration"
          description={siteDescription}
        />

        <WallFilters
          columnNumber={columnNumber}
          updateColumnNumber={updateColumnNumber}
          selectedLuminosities={selectedLuminosities}
          updateLuminosity={updateLuminosity}
          selectedChartIds={selectedChartIds}
          updateChartId={updateChartId}
          selectedTools={selectedTools}
          updateTool={updateTool}
        />

        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div className="wrapper">
            <div style={{ columns: columnNumber }} className={"gap-2 sm:gap-4"}>
              {/* Each project (i) can have several images associated (j) */}
              {filteredVizList.map((vizItem, i) => {
                return vizItem.imgZoomed.map((img, j) => {
                  return (
                    <MasonryItem
                      key={i + " " + j}
                      vizItem={vizItem}
                      onClick={() => {
                        setSelectedProjectId(i);
                        setIsModalOpen(true);
                      }}
                      imgId={j}
                    />
                  );
                });
              })}
            </div>
          </div>
        </div>
      </main>

      <VizItemModal
        isModalOpen={isModalOpen}
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
        closeModal={() => setIsModalOpen(false)}
      />

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};

export default Home;
