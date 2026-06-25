"use client";

import { useState } from "react";
import { VizLabel, vizLabels } from "../../util/viz-types";
import { Pill } from "../Pill";
import Link from "next/link";
import { buildUrlWithUpdatedParam } from "../../util/build-url-with-updated-param";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

// "labels" are cross-cutting design-technique tags (legend, annotation, radial...).
// SINGLE-SELECT: only one tag can be active at a time. Selecting a tag navigates to a
// URL with a ?labels=<tag> search param (same URL-driven approach as the other filters),
// so the filtered view is shareable/bookmarkable.

type LabelSelectorProps = {
  labels: VizLabel[] | undefined;
};

export const LabelSelector = ({ labels }: LabelSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selected = labels ?? [];

  // Single-select: at most one tag is active.
  const selectedArea = (
    <div style={{ height: 25 }} className="h-4 max-w-32 flex items-center">
      <Pill text={selected[0]} />
    </div>
  );

  const placeholder = (
    <div className="flex items-center">
      <span className="text-sm text-gray-700 font-light truncate">
        <span className="sm:hidden">tags</span>
        <span className="hidden sm:inline">select tags</span>
      </span>
    </div>
  );

  return (
    <div
      className="flex max-w-40 items-center cursor-pointer opacity-80 hover:opacity-100 px-2"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      {selected.length > 0 ? selectedArea : placeholder}
      {isModalOpen && (
        <LabelSelectorModal setIsModalOpen={setIsModalOpen} labels={labels} />
      )}
    </div>
  );
};

type LabelSelectorModalProps = {
  setIsModalOpen: (arg: boolean) => void;
  labels: VizLabel[] | undefined;
};

const LabelSelectorModal = ({
  setIsModalOpen,
  labels,
}: LabelSelectorModalProps) => {
  const router = useRouter();
  const selected = labels ?? [];

  const topCross = (
    <div className="flex justify-end items-center">
      <div className="p-4 cursor-pointer" onClick={() => setIsModalOpen(false)}>
        <X className="cursor-pointer h-5 w-5 opacity-40 hover:text-red-600 hover:fill-red-100 hover:opacity-40" />
      </div>
    </div>
  );

  const validateButton = (
    <span
      onClick={() => setIsModalOpen(false)}
      className="text-sm text-white cursor-pointer px-3 py-1 rounded-md bg-purple-500 hover:bg-purple-600"
    >
      {"validate"}
    </span>
  );

  // Clearing removes the "labels" param entirely (no label filter).
  const clearButton = (
    <Link
      href={buildUrlWithUpdatedParam("labels")}
      className="text-sm text-gray-600 cursor-pointer px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 no-underline"
    >
      {"clear tags"}
    </Link>
  );

  const pillList = vizLabels.map((label, i) => {
    const isSelected = selected.includes(label);
    // Single-select: pick this tag only, or clear it if it was already active.
    const newLabel = isSelected ? undefined : label;

    const onPillClick = (event: any) => {
      router.push(buildUrlWithUpdatedParam("labels", newLabel));
      event.stopPropagation();
    };

    return (
      <div
        className="relative my-2 mx-1 cursor-pointer"
        key={i}
        onClick={onPillClick}
      >
        <Pill
          text={label}
          className={
            isSelected || selected.length === 0 ? "opacity-100" : "opacity-30"
          }
        />
      </div>
    );
  });

  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
      className="fixed inset-0 h-screen w-screen z-20 flex justify-center items-center"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="flex flex-col max-w-lg bg-white rounded-md border drop-shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        {topCross}
        <div className="flex justify-start px-10 pb-6 flex-wrap">{pillList}</div>
        <div className="flex justify-end items-center gap-2 p-4">
          {clearButton}
          {validateButton}
        </div>
      </div>
    </div>
  );
};
