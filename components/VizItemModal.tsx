import React, { useCallback, useEffect } from "react";
import { vizList } from "../util/viz-list";
import { VizItemModalContent } from "./VizItemModalContent";

// This component is the modal that opens when user clicks on an image of the wall.
// VizItemModal manages the modal opening & closing

type VizItemModalProps = {
  closeModal: () => void;
  selectedProjectId: number;
  setSelectedProjectId: (arg: number) => void;
  isModalOpen: boolean;
};

export const VizItemModal = ({
  isModalOpen,
  closeModal,
  selectedProjectId,
  setSelectedProjectId,
}: VizItemModalProps) => {
  const slideClass = isModalOpen ? "" : "-left-full";

  const keyboardCallback = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
      // Right arrow
      if (event.keyCode == "39") {
        setSelectedProjectId((selectedProjectId || 0) + 1);
      }
      // Left arrow
      if (event.keyCode == "37") {
        setSelectedProjectId((selectedProjectId || 0) - 1);
      }
    },
    [selectedProjectId]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardCallback, false);
    return () => {
      document.removeEventListener("keydown", keyboardCallback, false);
    };
  }, [keyboardCallback]);

  const vizItem = vizList[selectedProjectId];

  return (
    <div
      style={{ backgroundColor: "rgba(250,250,250,.99)" }}
      className={
        "z-60 transition-all duration-700 fixed inset-0 h-screen w-screen z-20 flex justify-center items-center " +
        slideClass
      }
      onClick={() => closeModal()}
    >
      {/* X to close the modal */}
      <span
        className="text-black cursor-pointer text-4xl absolute top-0 right-0 mr-10 mt-10 p-12 "
        onClick={() => closeModal()}
      >
        &#10005;
      </span>

      {/* content */}
      <VizItemModalContent vizItem={vizItem} />

      {/* Shortcuts */}
      <div className="absolute bottom-4 right-4 flex">
        <ShortCut buttonText="Esc" text="close the modal" onClick={() => ""} />
        <ShortCut buttonText="&rarr;" text="next" onClick={() => ""} />
        <ShortCut buttonText="&larr;" text="previous" onClick={() => ""} />
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
