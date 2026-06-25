"use client";

import Navbar from "../../components/Navbar";
import TitleAndDescription from "../../components/TitleAndDescription";
import Footer from "../../components/Footer";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import { usePathname } from "next/navigation";
import { PictureWall } from "../../components/PictureWall";
import BigNumber from "../../components/BigNumber";
import { Separator } from "../../components/ui/separator";
import { Pill } from "../../components/Pill";
import { vizList } from "../../util/viz-list";
import { filterVizList } from "../../util/filterVizList";
import { VerticalSeparator } from "../../components/VerticalSeparator";
import SectionLogo from "../../components/SectionLogo";

export type Project = { projectId: number };

export default function Page() {
  const pathname = usePathname();

  // Extract the chartType from the pathname
  const chartType = pathname.split("/")[1] as ChartId;
  const chartTypeInfo = chartTypesInfo.find((c) => c.id === chartType);

  if (!chartTypeInfo) {
    return <p>hmmmm, we don't know this chart type.</p>;
  }

  const filteredVizList = filterVizList(
    vizList,
    undefined,
    chartType,
    undefined
  );

  const vizItemNumber = filteredVizList.length;

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <main>
        <div className="w-full sm:pt-12 pb-10 px-10 flex flex-col items-center align-center">
          <h1 className="text-4xl text-center">
            {chartTypeInfo.label + " inspiration"}
          </h1>
          <VerticalSeparator />
          <div className="w-24 h-24 relative">
            <SectionLogo chartLogo={chartTypeInfo.logo} />
          </div>
        </div>

        <div className="wrapper mb-4">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-0 sm:space-x-4 text-sm">
            <div className="max-w-sm text-center sm:text-left">
              <p className="text-lg">{chartTypeInfo.description}</p>
            </div>

            {/* Sections below (count + tutorial links) only show from sm up */}
            <Separator orientation="vertical" className="hidden sm:block" />

            <div className="hidden sm:flex flex-col gap-4 items-center justify-center w-24 h-full">
              <div>
                <BigNumber number={vizItemNumber} />
              </div>
              <p>Projects</p>
            </div>

            <Separator orientation="vertical" className="hidden sm:block" />

            <div className="hidden sm:block">
              <p className="text-sm text-gray-500">
                {"Learn more about " + chartTypeInfo.label}{" "}
              </p>
              <div className="my-1">
                <a
                  href={chartTypeInfo.dataToVizURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Pill text="Data To Viz" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">Code tutorials</p>
              <div className="my-1 flex gap-1">
                <a href={chartTypeInfo.rURL} target="_blank" rel="noopener noreferrer">
                  <Pill text="R" />
                </a>
                <a
                  href={chartTypeInfo.pythonURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Pill text="Python" />
                </a>
                <a
                  href={chartTypeInfo.d3URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Pill text="D3.js" />
                </a>
                <a
                  href={chartTypeInfo.reactURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Pill text="React" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <PictureWall />
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}
