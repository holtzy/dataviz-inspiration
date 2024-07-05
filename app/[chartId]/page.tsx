"use client";

import { useState } from "react";
import { AppHeader } from "../../components/AppHeader";
import Navbar from "../../components/Navbar";
import TitleAndDescription from "../../components/TitleAndDescription";
import { WallFilters } from "../../components/WallFilters";
import { MasonryItem } from "../../components/MasonryItem";
import { VizItemModal } from "../../components/VizItemModal";
import Footer from "../../components/Footer";
import { filterVizList } from "../../util/filterVizList";
import { Luminosity, Tool, VizItem, vizList } from "../../util/viz-list";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import { usePathname, useSearchParams } from "next/navigation";
import { Masonry } from "masonic";

export type Project = { projectId: number; imgId: number };

type MasonryCardProps = {
  index: number;
  data: VizItem;
  width: number;
};

export default function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Extract the chartType from the pathname
  const chartType = pathname.split("/")[1] as ChartId;
  const chartTypeInfo = chartTypesInfo.find((c) => c.id === chartType);

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

  // Apply the filters on the viz list!
  const filteredVizList = filterVizList(vizList, luminosity, chartType, tools);

  const vizItemNumber = filteredVizList.length;

  const MasonryCard = ({ index, data, width }: MasonryCardProps) => {
    return (
      <MasonryItem
        vizItem={data}
        onClick={() => {
          setSelectedProject({ projectId: data.id, imgId: 0 });
          setIsModalOpen(true);
        }}
        imgId={0}
      />
    );
  };

  if (!chartTypeInfo) {
    return <p>hmmmm, we don't know this chart type.</p>;
  }

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

      <main>
        <TitleAndDescription
          title={chartTypeInfo.label + " inspiration"}
          description={chartTypeInfo.description}
        />

        <WallFilters
          columnNumber={Number(columnNumber)}
          luminosity={luminosity}
          tools={tools}
          selectedChart={chartType}
        />

        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
          }}
          className="w-full flex justify-center py-5"
        >
          <div
            className="w-full px-4"
            style={{ maxWidth: 1100, marginTop: 25 }}
          >
            <div className="w-full">
              <Masonry
                items={filteredVizList}
                render={MasonryCard}
                columnCount={Number(columnNumber)}
                columnGutter={12}
                rowGutter={12}
              />
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
