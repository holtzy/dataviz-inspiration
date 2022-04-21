import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { MasonryItem } from "../components/MasonryItem";
import TitleAndDescription from "../components/TitleAndDescription";
import { VizItemModal } from "../components/VizItemModal";
import { Luminosity, Tool, VizItem, vizList } from "../util/viz-list";
import { useRouter } from "next/router";
import { WallFilters } from "../components/WallFilters";
import { ChartId, chartTypesInfo } from "../util/sectionDescription";
import { filterVizList } from "../util/filterVizList";
import { AppHeader } from "../components/AppHeader";
import Navbar from "../components/Navbar";
import { ParsedUrlQueryInput } from "querystring";
import { Barplot } from "../components/Dataviz/Barplot";

const About: NextPage = () => {
  const siteDescription = (
    <p>
      <a href="dataviz-inspiration">Dataviz-inspiration.com</a>{" "}
      <span>
        showcases hundreds of dataviz project I love. The following section
        explains why I created this project, summarize what's in it and explains
        what I've learned in the process.
      </span>
    </p>
  );

  // Compute dataset for the authors:
  let authorData: { [key: string]: number } = {};
  vizList.forEach((viz) => {
    if (viz.author in authorData) {
      authorData[viz.author] += 1;
    } else {
      authorData[viz.author] = 1;
    }
  });
  const authorDataClean = Object.keys(authorData)
    .map((item) => {
      return { group: item, value: authorData[item] };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <main className="flex flex-col items-center">
        <TitleAndDescription
          title="About this project"
          description={siteDescription}
        />
        <h1>The story behing dataviz-inspiration.com</h1>
        <p>
          How I got the idea. How I started with a gallery of chart, then
          created data-to-viz.com. Then needed something to gather inspiration.
          Give some concurrent websites. Explains why it is better
        </p>

        <h1>What's in there?</h1>
        <p>
          What's in the website? How many projects? What kind of tool? Who are
          the biggest authors?
        </p>
        <Barplot width={700} height={500} data={authorDataClean} />

        <h1>Contributing</h1>
        <p>How to suggest a chart? Not sure to publish it though</p>
      </main>

      <div className="wrapper">
        <Footer />
      </div>
    </>
  );
};

export default About;
