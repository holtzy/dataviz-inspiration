import React, { useCallback, useEffect } from "react";
import { Project } from "./PictureWall";
import { VizItemModalContent } from "./VizItemModalContent";

// This component is the modal that opens when user clicks on an image of the wall.
// VizItemModal manages the modal opening & closing

type VizItemModalProps = {
  closeModal: () => void;
  selectedProject: Project;
  setSelectedProject: (arg: Project) => void;
  isModalOpen: boolean;
  orderedIds: number[];
};

export const VizItemModal = ({
  isModalOpen,
  closeModal,
  selectedProject,
  setSelectedProject,
  orderedIds,
}: VizItemModalProps) => {
  const { projectId } = selectedProject;

  const slideClass = isModalOpen ? "" : "-left-full";

  // Move by an offset within the currently-filtered wall (in display order), so we
  // only ever land on items that actually exist on this page. Used by both the
  // keyboard arrows and the on-screen arrow buttons below the image.
  const goToOffset = useCallback(
    (offset: number) => {
      const count = orderedIds.length;
      if (count === 0) {
        return;
      }
      const currentIndex = orderedIds.indexOf(projectId);
      const newIndex = (currentIndex + offset + count) % count;
      setSelectedProject({ projectId: orderedIds[newIndex] });
    },
    [orderedIds, projectId, setSelectedProject]
  );

  const keyboardCallback = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.keyCode == "39") {
        goToOffset(1); // Right arrow
      }
      if (event.keyCode == "37") {
        goToOffset(-1); // Left arrow
      }
    },
    [goToOffset, closeModal]
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
        onPrevious={() => goToOffset(-1)}
        onNext={() => goToOffset(1)}
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
