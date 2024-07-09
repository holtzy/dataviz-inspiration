"use client";

import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";
import TitleAndDescription from "../components/TitleAndDescription";
import Footer from "../components/Footer";
import { vizList } from "../util/viz-list";
import { PictureWall } from "../components/PictureWall";

export default function Page() {
  const siteDescription = (
    <p>
      <a href="https://www.dataviz-inspiration.com">Dataviz-inspiration.com</a>
      <span>
        {" aims at being the biggest list of chart examples available on the web. It showcases " +
          vizList.length +
          " of the most beautiful and impactful dataviz projects I know. The collection is a good place to visit when you're designing a new graph, together with "}
      </span>
      <a href="https://www.data-to-viz.com">data-to-viz.com</a>
      <span>{" that shares dataviz best practices."}</span>
    </p>
  );

  return (
    <>
      <AppHeader
        title={"Dataviz Inspiration | Hundreds of chart examples"}
        description={
          "The biggest list of chart examples available on the web. " +
          vizList.length +
          " of the best viz projects displayed using a pinterest style sorted by tool and chart type."
        }
      />

      <div className="wrapper">
        <Navbar />
      </div>

      <main>
        <TitleAndDescription
          title="Dataviz Inspiration"
          description={siteDescription}
        />
        <PictureWall />
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
}
