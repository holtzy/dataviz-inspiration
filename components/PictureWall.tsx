import { Masonry } from "masonic";
import { WallFilters } from "./WallFilters";
import { VizItemModal } from "./VizItemModal";
import { usePathname, useSearchParams } from "next/navigation";
import { MasonryItem } from "./MasonryItem";
import { useState } from "react";
import useLikesData from "../hooks/use-likes";
import { Luminosity, Tool, VizItem, vizList } from "../util/viz-list";
import { filterVizList } from "../util/filterVizList";
import { ChartId } from "../util/sectionDescription";

export type Project = { projectId: number; imgId: number };

type MasonryCardProps = {
  index: number;
  data: VizItem;
  width: number;
};

export const PictureWall = () => {
  //
  // Most of the state is stored in the URL:
  //
  const searchParams = useSearchParams();
  const columnNumber = searchParams.get("columnNumber") || "3";
  const luminosity = (searchParams.get("luminosity") || undefined) as
    | Luminosity
    | undefined;
  const tools = (searchParams.getAll("tools") || undefined) as
    | Tool[]
    | undefined;
  const pathname = usePathname();
  const chartType = pathname.split("/")[1] as ChartId;

  //
  // Additional state that is NOT in the URL
  //
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(); // specify the project (id in the viz-list.ts array) + the img id (some projects have several imgs)
  const [isModalOpen, setIsModalOpen] = useState(false); // State of this specific page

  const likesData = useLikesData();
  const filteredVizList = filterVizList(vizList, luminosity, chartType, tools);

  const MasonryCard = ({ index, data, width }: MasonryCardProps) => {
    return (
      <MasonryItem
        vizItem={data}
        onClick={() => {
          setSelectedProject({ projectId: data.id, imgId: 0 });
          setIsModalOpen(true);
        }}
        imgId={0}
        likeNumber={likesData[data.id] || 0}
      />
    );
  };

  return (
    <>
      <WallFilters
        columnNumber={Number(columnNumber)}
        luminosity={luminosity}
        selectedChart={undefined}
        tools={tools}
      />

      <div
        style={{
          backgroundColor: "rgb(245, 245, 245)",
        }}
        className="w-full flex justify-center py-5"
      >
        <div className="w-full px-4" style={{ maxWidth: 1100, marginTop: 25 }}>
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

      {selectedProject && (
        <VizItemModal
          isModalOpen={isModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          closeModal={() => setIsModalOpen(false)}
          likeNumber={likesData[selectedProject.projectId] || 0}
        />
      )}
    </>
  );
};
