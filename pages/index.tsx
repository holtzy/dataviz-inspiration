import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { Luminosity, VizItem, vizList } from "../util/viz-list";
import { useRouter } from "next/router";
import { WallFilters } from "../components/WallFilters";
import { ChartId } from "../util/sectionDescription";
import { filterVizList } from "../util/filterVizList";

const Home: NextPage = () => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  //
  // State of the application
  // Initialized with default values. Those default can be overriden by URL params in the next useEffect
  //
  const [columnNumber, setColumnNumber] = useState<number>(4);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [selectedLuminosities, setLuminosity] = useState<Luminosity[]>([
    "light",
    "dark",
  ]);
  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();

  //
  // Update state from URL param if needed once 1st render happened
  // Note that I don't know how to type useRouter, so it just return string or string[] :(
  //
  useEffect(() => {
    const { col, luminosity, chartId } = router.query;
    if (col) {
      setColumnNumber(Number(col));
    }
    if (luminosity) {
      const luminosityArray = Array.isArray(luminosity)
        ? (luminosity as Luminosity[])
        : ([luminosity] as Luminosity[]);
      setLuminosity(luminosityArray);
    }
    if (chartId) {
      const chartIdArray = Array.isArray(chartId)
        ? (chartId as ChartId[])
        : ([chartId] as ChartId[]);
      setSelectedChartIds(chartIdArray);
    }
  }, [router]);

  //
  // Functions that change the state AND update URL params
  // Use only them to update state
  //
  const updateColumnNumber = (colNumber: number) => {
    setColumnNumber(colNumber);
    router.push({ query: { ...router.query, col: colNumber } });
  };
  const updateLuminosity = (luminosity: Luminosity[]) => {
    setLuminosity(luminosity);
    router.push({ query: { ...router.query, luminosity: luminosity } });
  };
  const updateChartId = (ids: ChartId[] | undefined) => {
    // If nothing is selected ids will be empty array. In this case, set undefined
    if (!ids || ids.length === 0) {
      setSelectedChartIds(undefined);
    }
    setSelectedChartIds(ids);
    router.push({ query: { ...router.query, chartId: ids } });
  };

  //
  // Apply the filters on the viz list!
  //
  const filteredVizList = filterVizList(
    vizList,
    selectedLuminosities,
    selectedChartIds
  );

  const VizItemNumber = filteredVizList.length;
  const siteDescription = (
    <p>
      {"Data visualization is an endless world where it's easy to get lost. When you build a new chart it is a good idea to rely on the shoulder of giants. This website helps. It provides " +
        VizItemNumber +
        " viz examples coming from the people I admire on this virtual planet that we call internet."}
    </p>
  );

  return (
    <>
      <Head>
        <title>Dataviz Inspiration</title>
        <meta name="description" content="Dataviz Inspiration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <TitleAndDescription
          title="Dataviz Inspiration"
          description={siteDescription}
        />

        <WallFilters
          columnNumber={columnNumber}
          updateColumnNumber={updateColumnNumber}
          selectedLuminosities={selectedLuminosities}
          updateLuminosity={updateLuminosity}
          selectedChartIds={selectedChartIds}
          updateChartId={updateChartId}
        />

        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div className="wrapper">
            <div
              style={{
                columnCount: columnNumber,
                width: "100%",
                columnGap: "20px",
              }}
            >
              {filteredVizList.map((vizItem, i) => {
                return vizItem.imgZoomed.map((img, j) => {
                  return (
                    <MasonryItem
                      key={j}
                      vizItem={vizItem}
                      onClick={() => setSelectedProjectId(i)}
                      imgId={j}
                    />
                  );
                });
              })}
            </div>
          </div>
        </div>
      </main>

      <VizItemModal
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
        closeModal={() => setSelectedProjectId(null)}
      />

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};

export default Home;
