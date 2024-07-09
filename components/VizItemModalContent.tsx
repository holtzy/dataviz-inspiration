import Image from "next/image";
import { vizList } from "../util/viz-list";
import { ChartIdPill } from "./ChartIdPill";
import { LinkAsButton } from "./LinkAsButton";
import { Pill } from "./Pill";
import { LikeButton } from "./LikeButton";

// VizItemModalContent manages the content
type VizItemModalContentProps = {
  projectId: number;
  imgId: number;
};

export const VizItemModalContent = ({
  projectId,
  imgId,
}: VizItemModalContentProps) => {
  const vizItem = vizList.find((item) => item.id === projectId);

  if (!vizItem) {
    return null;
  }

  // Title and Pills showing the chart type
  const chartPills = vizItem.img[imgId].chartId.map((id, i) => {
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
      <Image
        placeholder="empty"
        src={require(`../public/img/${vizItem.img[imgId].full}`)}
        alt={"Chart showing " + vizItem.title}
      />
      <br />
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
      <div className="relative flex flex-col justify-start items-start h-full col-span-2">
        <Image
          placeholder="empty"
          src={require(`../public/img/${vizItem.img[imgId].full}`)}
          objectFit="scale-down"
          alt={"Chart showing " + vizItem.title}
        />
      </div>

      <div className="p-2 flex flex-col justify-center">
        <LikeButton
          projectId={projectId}
          initialLikeNumber={444}
          isDarkBackground={false}
        />
        <br /> <br />
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
