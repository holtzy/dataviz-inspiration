"use client";

import { AppHeader } from "../../components/AppHeader";
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

export type Project = { projectId: number; imgId: number };

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
      <AppHeader
        title={"Dataviz Inspiration | Hundreds of chart examples"}
        description={
          "The biggest list of chart examples available on the web. " +
          vizItemNumber +
          " of the best viz projects displayed using a pinterest style sorted by tool and chart type."
        }
      />

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
          <div className="flex items-center space-x-4 text-sm">
            <div className="max-w-sm">
              <p className="text-lg">{chartTypeInfo.description}</p>
            </div>

            <Separator orientation="vertical" />

            <div className="flex flex-col gap-4 items-center justify-center w-24 h-full">
              <div>
                <BigNumber number={vizItemNumber} />
              </div>
              <p>Projects</p>
            </div>

            <Separator orientation="vertical" />

            <div>
              <p className="text-sm text-gray-500">
                {"Learn more about " + chartTypeInfo.label}{" "}
              </p>
              <div className="my-1">
                <Pill text="Data To Viz" />
              </div>
              <p className="text-sm text-gray-500 mt-6">Code tutorials</p>
              <div className="my-1 flex gap-1">
                <Pill text="R" />
                <Pill text="Python" />
                <Pill text="D3.js" />
                <Pill text="React" />
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
