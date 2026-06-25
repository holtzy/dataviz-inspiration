"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import TitleAndDescription from "../components/TitleAndDescription";
import Footer from "../components/Footer";
import { WallFilters } from "../components/WallFilters";
import { Wall } from "../components/Wall";
import { RestGallery } from "../components/RestGallery";
import { KitEmbedForm } from "../components/Newsletter/KitEmbedForm";
import { favoriteVizList } from "../util/favorite-viz-list";
import { filterVizList } from "../util/filterVizList";
import {
  Luminosity,
  Tool,
  VizItem,
  VizLabel,
  TOTAL_VIZ_COUNT,
} from "../util/viz-types";

export default function Page() {
  // Filters are stored in the URL, same as the chart-type pages.
  const searchParams = useSearchParams();
  const columnNumber = Number(searchParams.get("columnNumber") || "3");
  const luminosity = (searchParams.get("luminosity") || undefined) as
    | Luminosity
    | undefined;
  const tools = searchParams.getAll("tools") as Tool[];
  const labels = searchParams.getAll("labels").slice(0, 1) as VizLabel[];

  const hasFilter = Boolean(luminosity) || tools.length > 0 || labels.length > 0;

  // The big viz-list is loaded lazily (code-split). `restList` = the non-favorites
  // for the bottom gallery; `fullList` = everything, for the filtered view.
  const [restList, setRestList] = useState<VizItem[] | null>(null);
  const [fullList, setFullList] = useState<VizItem[] | null>(null);
  const loadingRef = useRef(false);

  // Load the full list once, from whichever trigger fires first (scroll, click or
  // filter). Subsequent calls are no-ops.
  const loadFull = useCallback(async () => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    const mod = await import("../util/viz-list");
    setRestList([...mod.vizList].reverse());
    setFullList(mod.fullVizList);
  }, []);

  // Trigger #3 — decision A: applying any filter loads the full catalog so the
  // filtered results are complete (favorites included).
  useEffect(() => {
    if (hasFilter) loadFull();
  }, [hasFilter, loadFull]);

  // Favorites are statically available (small module), newest first.
  const favorites = useMemo(() => [...favoriteVizList].reverse(), []);

  // Filtered view over the full catalog. Memoized on stable primitives (tools/labels
  // are fresh arrays from the URL each render) so the result keeps a stable reference
  // — otherwise the wall's positioner would reset its layout on every re-render.
  const filteredFull = useMemo(
    () =>
      fullList
        ? filterVizList(fullList, luminosity, undefined, tools, labels).reverse()
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fullList, luminosity, tools.join(","), labels.join(",")],
  );

  const siteDescription = (
    <p>
      <a href="https://www.dataviz-inspiration.com">Dataviz-inspiration.com</a>
      <span>
        {" aims at being the biggest list of chart examples available on the web. It showcases " +
          TOTAL_VIZ_COUNT +
          " of the most beautiful and impactful dataviz projects I know. The collection is a good place to visit when you're designing a new graph, together with "}
      </span>
      <a href="https://www.data-to-viz.com">data-to-viz.com</a>
      <span>{" that shares dataviz best practices."}</span>
    </p>
  );

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <main>
        <TitleAndDescription
          title="Dataviz Inspiration"
          description={siteDescription}
        />

        <WallFilters
          columnNumber={columnNumber}
          luminosity={luminosity}
          selectedChart={undefined}
          tools={tools}
          labels={labels}
        />

        {hasFilter ? (
          // Filtered view: one normal gallery over the full catalog.
          filteredFull ? (
            <Wall items={filteredFull} columnNumber={columnNumber} />
          ) : (
            <div className="w-full py-20 text-center text-gray-400">
              Loading…
            </div>
          )
        ) : (
          // Default view: favorites first → newsletter CTA → the rest of the gallery.
          <>
            <div className="relative">
              <Wall
                items={favorites}
                columnNumber={columnNumber}
                onItemClick={loadFull}
              />
              {/* Fade the favorites wall into the white newsletter section below. */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />
            </div>

            {/* Newsletter call-to-action */}
            <div className="mt-4 mb-16 flex flex-col items-center text-center px-6">
              <h2 className="!text-5xl">Want more?</h2>
              <p className="max-w-md mt-4 text-gray-600">
                These are just my favorites. I hunt down the best charts all year
                long — join the newsletter to get the finest dataviz inspiration
                in your inbox, and scroll on to explore the full gallery.
              </p>
              <div className="w-full max-w-md pt-16">
                <KitEmbedForm />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Join 19,000+ subscribers. Opt out anytime.
              </p>
            </div>

            <RestGallery
              items={restList}
              columnNumber={columnNumber}
              onNeedLoad={loadFull}
            />
          </>
        )}
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}
