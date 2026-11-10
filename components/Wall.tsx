"use client";

import {
  MasonryScroller,
  usePositioner,
  useContainerPosition,
  useResizeObserver,
} from "masonic";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { VizItem } from "../util/viz-types";
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
//
// The open project lives in the URL as `?viz=<id>`, so a project can be shared and the
// browser's Back button closes the modal instead of leaving the site. We use the native
// history API (which Next keeps in sync with useSearchParams) rather than router.push,
// to avoid a navigation that would re-render the page and reset the scroll position.
// A page can hold several walls (favorites + rest): each one only opens the modal when
// the id in the URL belongs to its own items.

const vizUrl = (id: number | undefined) => {
  const url = new URL(window.location.href);
  if (id === undefined) {
    url.searchParams.delete("viz");
  } else {
    url.searchParams.set("viz", String(id));
  }
  return url;
};

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
  const searchParams = useSearchParams();
  const vizParam = Number(searchParams.get("viz"));
  const openId = items.some((item) => item.id === vizParam) ? vizParam : undefined;
  const isModalOpen = openId !== undefined;

  // Keep showing the last project while the modal slides out after closing.
  const [lastOpenId, setLastOpenId] = useState<number | undefined>();
  useEffect(() => {
    if (openId !== undefined) setLastOpenId(openId);
  }, [openId]);
  const shownId = openId ?? lastOpenId;

  // True when the modal was opened by a click here, i.e. there is a history entry
  // without `viz` right behind us. Closing then goes back to it; otherwise (a shared
  // link opened directly) we just strip `viz` from the URL.
  const pushedRef = useRef(false);

  const openModal = useCallback((id: number) => {
    pushedRef.current = true;
    window.history.pushState(null, "", vizUrl(id));
  }, []);

  const closeModal = useCallback(() => {
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", vizUrl(undefined));
    }
  }, []);

  // Prev/next replace the URL, so a single Back still returns to the wall.
  const showProject = useCallback((id: number) => {
    window.history.replaceState(null, "", vizUrl(id));
  }, []);

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
          openModal(data.id);
          onItemClick?.();
        }}
      />
    ),
    [onItemClick, openModal],
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

      {shownId !== undefined && (
        <VizItemModal
          isModalOpen={isModalOpen}
          selectedProject={{ projectId: shownId }}
          setSelectedProject={({ projectId }) => showProject(projectId)}
          closeModal={closeModal}
          orderedIds={orderedIds}
          vizItems={items}
        />
      )}
    </>
  );
};
