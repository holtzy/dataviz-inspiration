"use client";

import { useState } from "react";
import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";
import TitleAndDescription from "../components/TitleAndDescription";
import { WallFilters } from "../components/WallFilters";
import { MasonryItem } from "../components/MasonryItem";
import { VizItemModal } from "../components/VizItemModal";
import Footer from "../components/Footer";
import { filterVizList } from "../util/filterVizList";
import { Luminosity, Tool, vizList } from "../util/viz-list";
import { ChartId } from "../util/sectionDescription";
import { useSearchParams } from "next/navigation";

export type Project = { projectId: number; imgId: number };

export default function Page() {
  const searchParams = useSearchParams();
  const columnNumber = searchParams.get("columnNumber") || "3";
  const luminosity = (searchParams.get("luminosity") || undefined) as
    | Luminosity
    | undefined;
  const tools = (searchParams.getAll("tools") || undefined) as
    | Tool[]
    | undefined;

  // State of this specific page
  const [isModalOpen, setIsModalOpen] = useState(false);
  // specify the project (id in the viz-list.ts array) + the img id (some projects have several imgs)
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();

  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();

  // Apply the filters on the viz list!
  const filteredVizList = filterVizList(
    vizList,
    luminosity,
    selectedChartIds,
    tools
  );

  const vizItemNumber = filteredVizList.length;

  const siteDescription = (
    <p>
      <a href="https://www.dataviz-inspiration.com">Dataviz-inspiration.com</a>
      <span>
        {" aims at being the biggest list of chart examples available on the web. It showcases " +
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
        title={"Dataviz Inspiration | Hundreds of chart examples"}
        description={
          "The biggest list of chart examples available on the web. " +
          vizItemNumber +
          " of the best viz projects displayed using a pinterest style sorted by tool and chart type."
        }
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
          columnNumber={Number(columnNumber)}
          luminosity={luminosity}
          selectedChartIds={selectedChartIds}
          tools={tools}
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
}
