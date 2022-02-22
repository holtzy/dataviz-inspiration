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

const Home: NextPage = () => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  // States
  const [columnNumber, setColumnNumber] = useState<number>(4);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [selectedLuminosities, setLuminosity] = useState<Luminosity[]>([
    "light",
    "dark",
  ]);
  const [selectedChartIds, setSelectedChartIds] = useState<ChartId[]>();

  // Update state from URL param if needed once 1st render happened
  useEffect(() => {
    if (router.query.col) {
      setColumnNumber(Number(router.query.col));
    }
  }, []);

  // Functions that changes the state and update URL params
  const updateColumnNumber = (colNumber: number) => {
    setColumnNumber(colNumber);
    router.push({ query: { col: colNumber } });
  };
  const updateLuminosity = (luminosity: Luminosity[]) => {
    setLuminosity(luminosity);
    router.push({ query: { luminosity: "toto" } });
  };
  const updateChartId = (ids: ChartId[] | undefined) => {
    // If nothing is selected ids will be empty array. In this case, set undefined
    if (!ids || ids.length === 0) {
      setSelectedChartIds(undefined);
    }
    setSelectedChartIds(ids);
    router.push({ query: { chartId: ids } });
  };

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

const filterVizList = (
  vizList: VizItem[],
  luminosity: Luminosity[],
  selectedChartIds: ChartId[] | undefined
) => {
  return (
    vizList
      .filter(
        (item) =>
          luminosity.includes(item.luminosity[0]) ||
          luminosity.includes(item.luminosity[1])
      )
      // Keep only the selected chartIds. Nothing selected? keep them all.
      // Remember that a project can be associated with several chartIds
      .filter((vizItem) => {
        // nothing selected? chartId is undefined or empty array
        if (!selectedChartIds || selectedChartIds.length === 0) {
          return true;
        }
        return vizItem.chartId.some((id) => {
          return selectedChartIds.includes(id);
        });
      })
  );
};
