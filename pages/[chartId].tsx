import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { vizList } from "../util/viz-list";
import { WallFilters } from "../components/WallFilters";
import { chartTypesInfo } from "../util/sectionDescription";
import { filterVizList } from "../util/filterVizList";
import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";
import { ApplicationState } from "./_app";

export type Project = { projectId: number; imgId: number };

const SpecificChartTypePage: NextPage<ApplicationState> = ({
  columnNumber,
  setColumnNumber,
  selectedLuminosities,
  setLuminosity,
  selectedChartIds,
  selectedTools,
  updateState,
}: ApplicationState) => {
  // State of this specific page
  const [isModalOpen, setIsModalOpen] = useState(false);
  // specify the project (id in the viz-list.ts array) + the img id (some projects have several imgs)
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

  if (!selectedChartIds) {
    return null;
  }

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

  const labels = selectedChartIds.map(
    (id) => chartTypesInfo.filter((chart) => chart.id === id)[0].label
  );

  // Build the page title
  const formattedLabels =
    labels.length === 1
      ? labels[0] + " examples"
      : labels.length === 2
      ? labels[0] + " and " + labels[1] + " examples"
      : labels.length === 3
      ? labels[0] + ", " + labels[1] + " and " + labels[2] + " examples"
      : labels.length === 4
      ? labels[0] +
        ", " +
        labels[1] +
        ", " +
        labels[2] +
        " and " +
        labels[3] +
        " examples"
      : "chart examples for your selection";

  const pageTitle = "Best " + formattedLabels;

  const siteDescription = (
    <p>
      <a href="dataviz-inspiration">Dataviz-inspiration.com</a>
      <span>
        {" showcases hundreds of stunning dataviz projects. The best works including a " +
          labels.join(", a ") +
          " are currently selected, leading to a total of " +
          vizItemNumber +
          " projects. Please enjoy your visit and check "}
      </span>
      <a href="https://www.data-to-viz.com">data-to-viz.com</a>
      <span>{" for complementary dataviz best practices."}</span>
    </p>
  );

  return (
    <>
      <AppHeader
        title={"Dataviz Inspiration | Best " + formattedLabels}
        description={
          "The biggest list of " +
          formattedLabels +
          " available on the web. " +
          vizItemNumber +
          " of the best viz projects displayed using a pinterest style sorted by tool and chart type."
        }
      />
      <div className="wrapper">
        <Navbar />
      </div>

      <main className="flex flex-col items-center">
        <TitleAndDescription title={pageTitle} description={siteDescription} />

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

export default SpecificChartTypePage;
