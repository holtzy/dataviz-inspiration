import Image from "next/image";
import { vizList } from "../util/viz-list";
import { ChartIdPill } from "./ChartIdPill";
import { LinkAsButton } from "./LinkAsButton";
import { Pill } from "./Pill";

// VizItemModalContent manages the content
type VizItemModalContentProps = {
  projectId: number;
  imgId: number;
};

export const VizItemModalContent = ({
  projectId,
  imgId,
}: VizItemModalContentProps) => {
  const vizItem = vizList[projectId];

  const allChartIds = vizItem.chartId.map((id, i) => {
    return (
      <span key={i} className="mr-1 mb-1">
        <ChartIdPill chartId={id} />
      </span>
    );
  });

  const allTools = vizItem?.tools?.map((tool, i) => {
    return (
      <span key={i} className="mr-1">
        <Pill className="" text={tool.name} />
      </span>
    );
  });

  return (
    <div
      style={{
        maxHeight: 1200,
        maxWidth: 1200,
        overflow: "scroll",
      }}
      className="h-full w-full md:grid md:grid-cols-3 md:gap-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-full md:col-span-2 relative flex justify-center items-center"
      >
        <Image
          placeholder="empty"
          src={require(`../public/img/${vizItem.img[imgId].full}`)}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="p-2 flex flex-col justify-center"
      >
        <p className="font-bold">{vizItem.title}</p>
        <p>
          <span className="text-xs font-extralight">by </span>
          <span className="text-xs italic font-extralight">
            {vizItem.author}
          </span>
        </p>
        <br />

        <div>
          <span className="font-light text-gray-500 text-sm">Chart type: </span>
          <div className="flex flex-wrap">{allChartIds}</div>
        </div>
        <br />

        {allTools && allTools.length > 0 && (
          <>
            <span className="font-light text-gray-500 text-sm">Tool: </span>
            <span>{allTools[0]}</span>
            <br />
          </>
        )}

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
        <br />

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
      </div>
    </div>
  );
};
