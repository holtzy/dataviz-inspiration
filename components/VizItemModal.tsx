import React from "react";

import Link from "next/link";
import { VizItem } from "../util/viz-list";
import Image from "next/image";
import { LinkAsButton } from "./LinkAsButton";
import { ChartIdPill } from "./ChartIdPill";

type VizItemModalProps = {
  closeModal: () => void;
  vizItem: VizItem | null;
};

export const VizItemModal = (props: VizItemModalProps) => {
  if (!props.vizItem) {
    return;
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
      style={{ backgroundColor: "rgba(250,250,250,.95)" }}
      className="fixed inset-0 h-screen w-screen z-20 flex justify-center items-center"
    >
      {/* X to close the modal */}
      <span
        className="text-black cursor-pointer text-4xl absolute top-0 right-0 mr-10 mt-10 p-12 "
        onClick={() => props.closeModal()}
      >
        &#10005;
      </span>

      {/* Content */}
      <div
        style={{ maxHeight: 700, maxWidth: 1200 }}
        className="h-full w-full flex items-center justify-around "
      >
        <div className="relative h-full w-2/3 p-10 flex justify-center items-center">
          <Image src={require(`../public/img/${props.vizItem.img}`)} />
        </div>
        <div className=" w-1/3 p-2">
          <p className="font-bold">{props.vizItem.title}</p>
          <p className="font-extralight">{"by " + props.vizItem.author}</p>
          <br />
          <div>
            <span>{allChartIds}</span>
            <span> | </span>
            <span>{allTools}</span>
          </div>
          <br />
          <p>{props.vizItem.description}</p>
          <br />
          {props.vizItem.code && (
            <div>
              <LinkAsButton href={props.vizItem.code} size="sm">
                Code
              </LinkAsButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
