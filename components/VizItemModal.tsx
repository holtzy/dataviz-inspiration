import React, { useCallback, useEffect } from "react";
import { Project } from "../pages";
import { vizList } from "../util/viz-list";
import { VizItemModalContent } from "./VizItemModalContent";

// This component is the modal that opens when user clicks on an image of the wall.
// VizItemModal manages the modal opening & closing

type VizItemModalProps = {
  closeModal: () => void;
  selectedProject: Project;
  setSelectedProject: (arg: Project) => void;
  isModalOpen: boolean;
};

export const VizItemModal = ({
  isModalOpen,
  closeModal,
  selectedProject,
  setSelectedProject,
}: VizItemModalProps) => {
  const { projectId, imgId } = selectedProject;

  const slideClass = isModalOpen ? "" : "-left-full";

  const keyboardCallback = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
      const projectNumber = vizList.length;

      // Right arrow
      if (event.keyCode == "39") {
        let nextId = projectId + 1;
        if (nextId >= projectNumber) {
          nextId = 0;
        }
        setSelectedProject({ projectId: nextId, imgId: 0 });
      }
      // Left arrow
      if (event.keyCode == "37") {
        let previousId = projectId - 1;
        if (previousId < 0) {
          previousId = projectNumber - 1;
        }
        setSelectedProject({ projectId: previousId, imgId: 0 });
      }
    },
    [projectId]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardCallback, false);
    return () => {
      document.removeEventListener("keydown", keyboardCallback, false);
    };
  }, [keyboardCallback]);

  return (
    <div
      style={{ backgroundColor: "rgba(250,250,250,.99)" }}
      className={
        "z-50 transition-all duration-700 fixed inset-0 h-screen w-screen flex justify-center items-center " +
        slideClass
      }
      onClick={() => closeModal()}
    >
      {/* X to close the modal */}
      <span
        className="text-black cursor-pointer text-2xl absolute top-0 right-0 mr-4 mt-1 p-2 z-50"
        onClick={() => closeModal()}
      >
        &#10005;
      </span>

      {/* content */}
      <VizItemModalContent
        key={selectedProject.projectId}
        projectId={projectId}
        imgId={imgId}
      />

      {/* Shortcuts */}
      <div className="absolute bottom-4 right-4 sm:flex hidden ">
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
