"use client";

import {
  MasonryScroller,
  usePositioner,
  useContainerPosition,
  useResizeObserver,
} from "masonic";
import { useCallback, useEffect, useRef, useState } from "react";
import { Project, VizItem } from "../util/viz-types";
import { MasonryItem } from "./MasonryItem";
import { VizItemModal } from "./VizItemModal";

// Presentational masonry wall + modal for a given list of items. It owns only the
// modal open/selected state; WHICH items to show is the caller's concern. This lets
// the homepage render a favorites-only wall (and a lazily-loaded rest wall) without
// the wall component knowing anything about filters or the full viz-list.
//
// We use masonic's lower-level primitives instead of the high-level <Masonry> on
// purpose: <Masonry> only re-measures the grid's distance-from-top of the document on
// WINDOW resize. When a visitor scrolls fast past images above this grid that haven't
// finished loading, those images load late and push the grid down — leaving <Masonry>
// with a stale offset, so it renders the wrong window of cells and they flash in then
// vanish. Here we also re-measure on any document-height change (see layoutVersion).

type WallProps = {
  items: VizItem[];
  columnNumber: number;
  // Optional side-effect fired when any item is clicked (used by the homepage to
  // prefetch the full viz-list as soon as the visitor engages).
  onItemClick?: () => void;
};

type MasonryCardProps = {
  index: number;
  data: VizItem;
  width: number;
};

export const Wall = ({ items, columnNumber, onItemClick }: WallProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);

  // Window size [w, h], known only on the client (used as masonic's viewport height
  // and to gate rendering until mounted). `layoutVersion` bumps whenever the document
  // height changes so the grid's offset gets re-measured (the fast-scroll fix above).
  const [size, setSize] = useState<[number, number]>([0, 0]);
  const [layoutVersion, setLayoutVersion] = useState(0);

  useEffect(() => {
    const onResize = () => setSize([window.innerWidth, window.innerHeight]);
    onResize();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => setLayoutVersion((v) => v + 1));
    ro.observe(document.documentElement);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, []);

  const { offset, width } = useContainerPosition(containerRef, [
    size[0],
    size[1],
    layoutVersion,
    columnNumber,
  ]);

  const positioner = usePositioner(
    {
      width: width || size[0],
      columnGutter: 12,
      rowGutter: 12,
      columnCount: columnNumber,
    },
    // Recreate the positioner (and reset its cached layout) when the item set or the
    // column count changes — masonic otherwise assumes items never change.
    [items, columnNumber],
  );

  // Re-measures a cell when its content resizes (e.g. an image finishing loading and
  // changing the card height), so the masonry layout stays correct.
  const resizeObserver = useResizeObserver(positioner);

  // Modal prev/next navigates within the items shown on THIS wall, in display order.
  const orderedIds = items.map((item) => item.id);

  // Stable identity so the layoutVersion re-renders (during image loading) don't
  // needlessly re-render every visible masonry cell.
  const MasonryCard = useCallback(
    ({ data }: MasonryCardProps) => (
      <MasonryItem
        vizItem={data}
        onClick={() => {
          setSelectedProject({ projectId: data.id });
          setIsModalOpen(true);
          onItemClick?.();
        }}
      />
    ),
    [onItemClick],
  );

  return (
    <>
      <div
        className="w-full flex justify-center py-5"
        style={{ backgroundColor: "rgb(245, 245, 245)" }}
      >
        <div className="w-full px-4" style={{ maxWidth: 1100 }}>
          {/* size[1] > 0 means we're mounted on the client (ResizeObserver exists). */}
          {size[1] > 0 && (
            <MasonryScroller
              containerRef={containerRef}
              positioner={positioner}
              resizeObserver={resizeObserver}
              offset={offset}
              height={size[1]}
              items={items}
              overscanBy={3}
              render={MasonryCard}
            />
          )}
        </div>
      </div>

      {selectedProject && (
        <VizItemModal
          isModalOpen={isModalOpen}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          closeModal={() => setIsModalOpen(false)}
          orderedIds={orderedIds}
          vizItems={items}
        />
      )}
    </>
  );
};
