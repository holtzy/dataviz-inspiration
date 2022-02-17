import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { VizItem, vizList } from "../util/viz-list";
import { useRouter } from "next/router";
import {
  DeviceMobileIcon,
  DeviceTabletIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

const Home: NextPage = () => {
  // useRouter returns an object with information on the URL
  const router = useRouter();

  // States
  const [columnNumber, setColumnNumber] = useState<number>(5);
  const [selectedVizItem, setSelectedVizItem] = useState<VizItem | null>(null);

  // Update state from URL param if needed once 1st render happened
  useEffect(() => {
    setColumnNumber(Number(router.query.col));
  }, []);

  // Functions that changes the state and update URL params
  const updateColumnNumber = (colNumber: number) => {
    setColumnNumber(colNumber);
    router.push({ query: { col: colNumber } });
  };

  const VizItemNumber = vizList.length;

  const siteDescription = (
    <p>
      Looking for dataviz inspiration? Here is a showcase of{" "}
      <span>{VizItemNumber}</span> dataviz examples I love, ready to help you
      create the next awesome graph of this planet.
    </p>
  );

  // URL parameters = Query strings = Query parameters
  // You can add them like: http://localhost:3000/?toto=2&titi=3
  // Then useRouter get them in the "query" property

  return (
    <div className="wrapper">
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

        <div className="w-full flex">
          <div className="flex border-y py-2">
            <DeviceMobileIcon
              onClick={() => updateColumnNumber(2)}
              className={
                columnNumber === 2
                  ? "cursor-pointer h-6 w-6 text-red-800 fill-red-200 opacity-100"
                  : "cursor-pointer h-6 w-6 opacity-40 hover:text-red-800 hover:fill-red-200 hover:opacity-100"
              }
            />
            <DeviceTabletIcon
              onClick={() => updateColumnNumber(3)}
              className={
                columnNumber === 3
                  ? "cursor-pointer h-6 w-6 text-red-800 fill-red-200 opacity-100"
                  : "cursor-pointer h-6 w-6 opacity-40 hover:text-red-800 hover:fill-red-200 hover:opacity-100"
              }
            />
            <DesktopComputerIcon
              onClick={() => updateColumnNumber(4)}
              className={
                columnNumber === 4
                  ? "cursor-pointer h-6 w-6 text-red-800 fill-red-200 opacity-100"
                  : "cursor-pointer h-6 w-6 opacity-40 hover:text-red-800 hover:fill-red-200 hover:opacity-100"
              }
            />
          </div>{" "}
        </div>

        <div
          style={{
            columnCount: columnNumber,
            width: "100%",
            columnGap: "1rem",
          }}
        >
          {vizList.map((vizItem, i) => {
            return vizItem.imgZoomed.map((img, j) => {
              return (
                <MasonryItem
                  key={j}
                  vizItem={vizItem}
                  onClick={setSelectedVizItem}
                  imgId={j}
                />
              );
            });
          })}
        </div>
      </main>

      {selectedVizItem && (
        <VizItemModal
          vizItem={selectedVizItem}
          closeModal={() => setSelectedVizItem(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Home;
