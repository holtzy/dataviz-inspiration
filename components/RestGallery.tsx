"use client";

import { useEffect, useRef } from "react";
import { VizItem } from "../util/viz-types";
import { Wall } from "./Wall";

// The bottom half of the homepage: the rest of the gallery (everything that isn't a
// favorite). It is NOT rendered until the visitor scrolls near it — at which point a
// sentinel triggers `onNeedLoad`, the parent dynamically imports the big viz-list, and
// `items` arrives. Until then this is just a lightweight sentinel div.

type RestGalleryProps = {
  items: VizItem[] | null; // null until the full list has been loaded
  columnNumber: number;
  onNeedLoad: () => void; // ask the parent to load the full list
};

export const RestGallery = ({
  items,
  columnNumber,
  onNeedLoad,
}: RestGalleryProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items) return; // already loaded — nothing to watch
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          onNeedLoad();
        }
      },
      // Start loading a bit before the sentinel is actually on screen.
      { rootMargin: "600px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [items, onNeedLoad]);

  if (!items) {
    return <div ref={sentinelRef} className="h-10 w-full" aria-hidden />;
  }

  return <Wall items={items} columnNumber={columnNumber} />;
};
