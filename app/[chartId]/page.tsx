"use client";

import { AppHeader } from "../../components/AppHeader";
import Navbar from "../../components/Navbar";
import TitleAndDescription from "../../components/TitleAndDescription";
import Footer from "../../components/Footer";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import { usePathname } from "next/navigation";
import { PictureWall } from "../../components/PictureWall";

export type Project = { projectId: number; imgId: number };

export default function Page() {
  const pathname = usePathname();

  // Extract the chartType from the pathname
  const chartType = pathname.split("/")[1] as ChartId;
  const chartTypeInfo = chartTypesInfo.find((c) => c.id === chartType);

  const vizItemNumber = 44; // TODO

  if (!chartTypeInfo) {
    return <p>hmmmm, we don't know this chart type.</p>;
  }

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
        <TitleAndDescription
          title={chartTypeInfo.label + " inspiration"}
          description={chartTypeInfo.description}
        />
        <PictureWall />
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}
