import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { Tool, vizList } from "../util/viz-list";
import { useRouter } from "next/router";
import { WallFilters } from "../components/WallFilters";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import { filterVizList } from "../util/filterVizList";
import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";
import { ParsedUrlQueryInput } from "querystring";
import { ApplicationState } from "./_app";

export type Project = { projectId: number; imgId: number };

const removeUndefinedProps = (obj: Object): ParsedUrlQueryInput => {
  return JSON.parse(JSON.stringify(obj));
};

const Home: NextPage<ApplicationState> = ({
  columnNumber,
  setColumnNumber,
  selectedLuminosities,
  setLuminosity,
  selectedChartIds,
  setSelectedChartIds,
  selectedTools,
  setSelectedTools,
}: ApplicationState) => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  // State of this specific page
  const [isModalOpen, setIsModalOpen] = useState(false);

  // specify the project (id in the viz-list.ts array) + the img id (some projects have several imgs)
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

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

  //
  // Apply the filters on the viz list!
  //
  const filteredVizList = filterVizList(
    vizList,
    selectedLuminosities,
    selectedChartIds,
    selectedTools
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
          updateColumnNumber={setColumnNumber}
          selectedLuminosities={selectedLuminosities}
          updateLuminosity={setLuminosity}
          selectedChartIds={selectedChartIds}
          selectedTools={selectedTools}
          updateState={updateState}
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
                return vizItem.img.map((img, j) => {
                  return (
                    <MasonryItem
                      key={i + " " + j}
                      vizItem={vizItem}
                      onClick={() => {
                        setSelectedProject({ projectId: vizItem.id, imgId: j });
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

      {selectedProject && (
        <VizItemModal
          isModalOpen={isModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          closeModal={() => setIsModalOpen(false)}
        />
      )}

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};

export default Home;
