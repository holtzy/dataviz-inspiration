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

const Home: NextPage = () => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  // States
  const [columnNumber, setColumnNumber] = useState<number>(5);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );
  const [luminosity, setLuminosity] = useState<Luminosity[]>(["light", "dark"]);

  // Update state from URL param if needed once 1st render happened
  useEffect(() => {
    setColumnNumber(Number(router.query.col));
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

  const VizItemNumber = vizList.length;

  const siteDescription = (
    <p>
      Data visualization is an endless world where it's easy to get lost. When
      you build a new chart it is a good idea to rely on the shoulder of giants.
      This website helps. It provides many viz examples coming from the people I
      admire on this virtual planet that we call internet.
    </p>
  );

  // URL parameters = Query strings = Query parameters
  // You can add them like: http://localhost:3000/?toto=2&titi=3
  // Then useRouter get them in the "query" property

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
          luminosity={luminosity}
          updateLuminosity={updateLuminosity}
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
              {vizList
                .filter(
                  (item) =>
                    luminosity.includes(item.luminosity[0]) ||
                    luminosity.includes(item.luminosity[1])
                )
                .map((vizItem, i) => {
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
