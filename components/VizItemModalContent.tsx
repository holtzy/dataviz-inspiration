import { ChevronLeft, ChevronRight } from "lucide-react";
import { VizItem } from "../util/viz-types";
import { ChartIdPill } from "./ChartIdPill";
import { LinkAsButton } from "./LinkAsButton";
import { Pill } from "./Pill";

// VizItemModalContent manages the content
type VizItemModalContentProps = {
  projectId: number;
  // The set of items currently available on the page (favorites and/or the full
  // list once loaded). The modal looks the project up here instead of importing
  // the big vizList, so the homepage stays out of that bundle.
  vizItems: VizItem[];
  onPrevious: () => void;
  onNext: () => void;
};

export const VizItemModalContent = ({
  projectId,
  vizItems,
  onPrevious,
  onNext,
}: VizItemModalContentProps) => {
  const vizItem = vizItems.find((item) => item.id === projectId);

  if (!vizItem) {
    return null;
  }

  // Title and Pills showing the chart type
  const chartPills = vizItem.img.chartId.map((id, i) => {
    return (
      <span key={i} className="mr-1 mb-1">
        <ChartIdPill chartId={id} />
      </span>
    );
  });
  const chartIdsSection = (
    <div>
      <span className="font-light text-gray-500 text-sm">Chart type: </span>
      <div className="flex flex-wrap">{chartPills}</div>
    </div>
  );

  // Pills showing the tool
  const toolPills = vizItem?.tools?.map((tool, i) => (
    <span key={i} className="mr-1">
      <Pill className="" text={tool.name} />
    </span>
  ));
  const toolSection =
    toolPills && toolPills.length > 0 ? (
      <div>
        <span className="font-light text-gray-500 text-sm">Tool: </span>
        <span>{toolPills}</span>
      </div>
    ) : null;

  const titleAndAuthor = (
    <>
      <p className="font-bold">{vizItem.title}</p>
      <p>
        <span className="text-xs font-extralight">by </span>
        <span className="text-xs italic font-extralight">{vizItem.author}</span>
      </p>
    </>
  );

  const callToActionButtons = (
    <div className="flex">
      <LinkAsButton href={vizItem.url} size="sm">
        Visit project
      </LinkAsButton>
      {vizItem.tools?.[0].link && (
        <div>
          <LinkAsButton href={vizItem.tools[0].link} size="sm">
            Read code
          </LinkAsButton>
        </div>
      )}
    </div>
  );

  const contextDescription = (
    <>
      <div>
        <span className="font-light text-gray-500 text-sm">Context: </span>
        <p
          dangerouslySetInnerHTML={{
            __html: vizItem.contextDescription,
          }}
        />
      </div>
      <br />

      <div>
        <span className="font-light text-gray-500 text-sm">
          Visualization:{" "}
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: vizItem.chartDescription,
          }}
        />
      </div>
    </>
  );

  // Clickable prev/next arrows (mirror the keyboard arrows) shown below the image.
  const navArrows = (
    <div className="flex flex-col items-center mt-3">
      <div className="flex justify-center items-center gap-8">
        <button
          type="button"
          aria-label="Previous project"
          onClick={onPrevious}
          className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={onNext}
          className="flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <span className="text-xs text-gray-400 font-light mt-2">
        keyboard arrows work too
      </span>
    </div>
  );

  const smallScreenLayout = (
    <div
      style={{
        maxHeight: 1200,
        maxWidth: 1200,
        overflow: "scroll",
      }}
      className="p-4 pb-10 h-screen"
      onClick={(e) => e.stopPropagation()}
    >
      {titleAndAuthor}
      <br />
      {chartIdsSection}
      <br />
      {toolSection}
      <br />
      <img
        src={`/img/${vizItem.img.full}`}
        alt={"Chart showing " + vizItem.title}
      />
      {navArrows}
      <br />
      {contextDescription}
      <br />
      {callToActionButtons}
    </div>
  );

  const wideScreenLayout = (
    <div
      style={{
        maxHeight: 1200,
        maxWidth: 1200,
        overflow: "scroll",
      }}
      className="p-4 h-full w-full grid grid-cols-3 gap-5"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative flex flex-col justify-center items-center h-full col-span-2">
        <img
          src={`/img/${vizItem.img.full}`}
          style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
          alt={"Chart showing " + vizItem.title}
        />
        {navArrows}
      </div>

      <div className="p-2 flex flex-col justify-center">
        {titleAndAuthor}
        <br />
        {chartIdsSection}
        <br />
        {toolSection}
        <br />
        {contextDescription}
        <br />
        {callToActionButtons}
      </div>
    </div>
  );

  return (
    <>
      <div className="md:hidden">{smallScreenLayout}</div>
      <div className="hidden md:block">{wideScreenLayout}</div>
    </>
  );
};
