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
import { fullVizList } from "../../util/viz-list";
import { filterVizList } from "../../util/filterVizList";
import { VerticalSeparator } from "../../components/VerticalSeparator";
import SectionLogo from "../../components/SectionLogo";
import { KitEmbedForm } from "../../components/Newsletter/KitEmbedForm";

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
    fullVizList,
    undefined,
    chartType,
    undefined,
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
                  className="no-underline hover:bg-slate-100"
                >
                  <Pill text="Data To Viz" />
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-6">Code tutorials</p>
              <div className="my-1 flex gap-1">
                <a
                  href={chartTypeInfo.rURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:bg-slate-100"
                >
                  <Pill text="R" />
                </a>
                <a
                  href={chartTypeInfo.pythonURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:bg-slate-100"
                >
                  <Pill text="Python" />
                </a>
                <a
                  href={chartTypeInfo.d3URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:bg-slate-100"
                >
                  <Pill text="D3.js" />
                </a>
                <a
                  href={chartTypeInfo.reactURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:bg-slate-100"
                >
                  <Pill text="React" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <PictureWall />

        {/* Newsletter call-to-action below the wall */}
        <div className="mt-16 mb-20 flex flex-col items-center text-center px-6">
          <h2 className="!text-5xl">Want more?</h2>
          <p className="max-w-md mt-4 text-gray-600">
            I hunt down the best {chartTypeInfo.label.toLowerCase()} examples —
            and every other kind of chart — all year long. Join the newsletter
            to get the finest dataviz inspiration delivered straight to your
            inbox.
          </p>
          {/* pt-16 compensates for the form's custom margin-top: -40px set in Kit,
              so the pulled-up form doesn't overlap the paragraph above. */}
          <div className="w-full max-w-md pt-16">
            <KitEmbedForm />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Join 19,000+ subscribers. Opt out anytime.
          </p>
        </div>
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}
