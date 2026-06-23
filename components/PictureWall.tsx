import { Masonry } from "masonic";
import { WallFilters } from "./WallFilters";
import { VizItemModal } from "./VizItemModal";
import { usePathname, useSearchParams } from "next/navigation";
import { MasonryItem } from "./MasonryItem";
import { useState, useEffect } from "react";
import { Luminosity, Tool, VizItem, VizLabel, vizList } from "../util/viz-list";
import { filterVizList } from "../util/filterVizList";
import { ChartId } from "../util/sectionDescription";

export type Project = { projectId: number };

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
  // Single-select: only ever honor the first label, even if the URL carries several.
  const labels = searchParams.getAll("labels").slice(0, 1) as VizLabel[];
  const pathname = usePathname();
  const chartType = pathname.split("/")[1] as ChartId;

  //
  // Additional state that is NOT in the URL
  //
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(); // specify the project (id in the viz-list.ts array)
  const [isModalOpen, setIsModalOpen] = useState(false); // State of this specific page

  // Masonic relies on ResizeObserver, which doesn't exist during server-side
  // rendering. Render the grid only after the component has mounted (client-only).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const filteredVizList = filterVizList(vizList, luminosity, chartType, tools, labels).reverse();

  // Ordered ids of the currently-filtered wall, so the modal's prev/next arrows
  // navigate within this set (in display order) instead of across the whole list.
  const orderedIds = filteredVizList.map((item) => item.id);

  // Masonic caches cell positions and assumes the `items` array never shrinks.
  // Filtering can make it shorter, which crashes Masonic ("No data was found at index").
  // Remount the grid whenever the filtered set changes by keying it on the active filters.
  const masonryKey = `${chartType ?? ""}|${luminosity ?? ""}|${(tools ?? []).join(",")}|${labels.join(",")}`;

  const MasonryCard = ({ index, data, width }: MasonryCardProps) => {
    return (
      <MasonryItem
        vizItem={data}
        onClick={() => {
          setSelectedProject({ projectId: data.id });
          setIsModalOpen(true);
        }}
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
        labels={labels}
      />

      <div
        style={{
          backgroundColor: "rgb(245, 245, 245)",
        }}
        className="w-full flex justify-center py-5"
      >
        <div className="w-full px-4" style={{ maxWidth: 1100, marginTop: 25 }}>
          <div className="w-full">
            {mounted && (
              <Masonry
                key={masonryKey}
                items={filteredVizList}
                render={MasonryCard}
                columnCount={Number(columnNumber)}
                columnGutter={12}
                rowGutter={12}
              />
            )}
          </div>
        </div>
      </div>

      {selectedProject && (
        <VizItemModal
          isModalOpen={isModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          closeModal={() => setIsModalOpen(false)}
          orderedIds={orderedIds}
        />
      )}
    </>
  );
};
