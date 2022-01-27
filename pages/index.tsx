import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { vizList } from "../util/viz-list";

const siteDescription = (
  <p>
    <a href="https://reactjs.org">React</a> manipulates the DOM. So does{" "}
    <a href="https://www.d3-graph-gallery.com">D3.js</a>. Its hard to make them
    work together. This website is a set of chart examples where d3 is used to
    compute the viz layout, and React is used for the rendering.
  </p>
);

const Home: NextPage = () => {
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

        <div
          style={{
            columnCount: 3,
            width: "100%",
            columnGap: "1rem",
            paddingTop: 10,
          }}
        >
          {vizList.map((vizItem, i) => {
            return <MasonryItem key={i} vizItem={vizItem} />;
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
