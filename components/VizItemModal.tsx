import React, { useCallback, useEffect, useState } from "react";

import { VizItem, vizList } from "../util/viz-list";
import Image from "next/image";
import { LinkAsButton } from "./LinkAsButton";
import { ChartIdPill } from "./ChartIdPill";

// This component is the modal that opens when user clicks on an image of the wall.
// VizItemModal manages the modal opening & closing
type VizItemModalProps = {
  closeModal: () => void;
  selectedProjectId: number | null;
};

export const VizItemModal = (props: VizItemModalProps) => {
  const slideClass = props.selectedProjectId ? "" : "-left-full";

  const [projectId, setProjectId] = useState(props.selectedProjectId || 0);

  // The escape key closes the modal
  const keyboardCallback = useCallback((event) => {
    if (event.key === "Escape") {
      props.closeModal();
    }
    if (event.keyCode == "39") {
      setProjectId(projectId + 1);
    }
    if (event.keyCode == "37") {
      setProjectId(projectId + 1);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyboardCallback, false);
    return () => {
      document.removeEventListener("keydown", keyboardCallback, false);
    };
  }, []);

  const vizItem = vizList[projectId];

  return (
    <div
      style={{ backgroundColor: "rgba(250,250,250,.99)" }}
      className={
        "transition-all duration-700  fixed inset-0 h-screen w-screen z-20 flex justify-center items-center " +
        slideClass
      }
      onClick={() => props.closeModal()}
    >
      {/* X to close the modal */}
      <span
        className="text-black cursor-pointer text-4xl absolute top-0 right-0 mr-10 mt-10 p-12 "
        onClick={() => props.closeModal()}
      >
        &#10005;
      </span>

      {/* content */}
      <ModalContent vizItem={vizItem} />

      {/* Shortcuts */}
      <div className="absolute bottom-4 right-4 flex">
        <ShortCut buttonText="Esc" text="close the modal" onClick={() => ""} />
        <ShortCut buttonText="&rarr;" text="next" onClick={() => ""} />
        <ShortCut buttonText="&larr;" text="previous" onClick={() => ""} />
      </div>
    </div>
  );
};

// ModalContent manages the content
type ModalContentProps = {
  vizItem: VizItem | null;
};

const ModalContent = (props: ModalContentProps) => {
  if (!props.vizItem) {
    return null;
  }

  const allChartIds = props.vizItem.chartId.map((id, i) => {
    return (
      <span key={i} className="mr-1">
        <ChartIdPill chartId={id} />
      </span>
    );
  });

  const allTools = props.vizItem?.tool?.map((tool, i) => {
    return (
      <span key={i} className="mr-1">
        <ChartIdPill chartId={tool} />
      </span>
    );
  });

  return (
    <div
      style={{ maxHeight: 700, maxWidth: 1200 }}
      className="h-full w-full flex items-center justify-around "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-full w-2/3 p-10 flex justify-center items-center"
      >
        <Image
          placeholder="blur"
          src={require(`../public/img/${props.vizItem.img}`)}
        />
      </div>

      <div onClick={(e) => e.stopPropagation()} className="w-1/3 p-2">
        <p className="font-bold">{props.vizItem.title}</p>
        <p>
          <span className="text-xs font-extralight">by </span>
          <span className="text-xs italic font-extralight">
            {props.vizItem.author}
          </span>
        </p>
        <br />

        <div>
          <span className="font-light text-gray-500 text-sm">Chart type: </span>
          <span>{allChartIds}</span>
        </div>
        <br />

        {allTools && allTools.length > 0 && (
          <>
            <span className="font-light text-gray-500 text-sm">Tool: </span>
            <span>{allTools[0]}</span>
            <br />
          </>
        )}
        <br />

        <div>
          <span className="font-light text-gray-500 text-sm">Context: </span>
          <p
            dangerouslySetInnerHTML={{
              __html: props.vizItem.contextDescription,
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
              __html: props.vizItem.chartDescription,
            }}
          />
        </div>
        <br />

        <div className="flex">
          <LinkAsButton href={props.vizItem.url} size="sm">
            Visit project
          </LinkAsButton>
          {props.vizItem.code && (
            <div>
              <LinkAsButton href={props.vizItem.code} size="sm">
                Read code
              </LinkAsButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Little shortCut component for the 3 grey shortcuts displayed at the bottom right of the modal

type ShortCutProps = {
  buttonText: string;
  text: string;
  onClick: () => void;
};

const ShortCut = ({ buttonText, text }: ShortCutProps) => {
  return (
    <div className="mr-4">
      <span
        dangerouslySetInnerHTML={{
          __html: buttonText,
        }}
        className="border-gray-400 border text-gray-400 text-xs font-light rounded-sm px-1"
      />
      <span className=" text-gray-400 text-xs font-light rounded-sm px-1">
        {text}
      </span>
    </div>
  );
};
