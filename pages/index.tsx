import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { VizItem, vizList } from "../util/viz-list";

const Home: NextPage = () => {
  // States
  const [columnNumber, setColumnNumber] = useState(3);
  const [selectedVizItem, setSelectedVizItem] = useState<VizItem | null>(null);

  const VizItemNumber = vizList.length;

  const siteDescription = (
    <p>
      Looking for dataviz inspiration? Here is a showcase of{" "}
      <span>{VizItemNumber}</span> dataviz examples I love, ready to help you
      create the next awesome graph of this planet.
    </p>
  );
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

        <div className="border-t  border-grey text-grey border-solid w-full">
          Hello
        </div>

        <div
          style={{
            columnCount: columnNumber,
            width: "100%",
            columnGap: "1rem",
            paddingTop: 10,
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
