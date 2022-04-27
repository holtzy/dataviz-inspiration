import type { NextPage } from "next";
import Footer from "../components/Footer";
import TitleAndDescription from "../components/TitleAndDescription";
import { vizList } from "../util/viz-list";

import Navbar from "../components/Navbar";
import { Barplot } from "../components/Dataviz/Barplot";
import Link from "next/link";
import { TakeHome } from "../components/TakeHome";
import { ParallaxSection } from "../components/ParallaxSection";
import { ChartTypeTreemap } from "../components/Dataviz/Treemap/ChartTypeTreemap";

const About: NextPage = () => {
  const siteDescription = (
    <p>
      <a href="dataviz-inspiration">Dataviz-inspiration.com</a>{" "}
      <span>
        showcases hundreds of dataviz project I love. The following section
        explains why I created this project, summarizes what&apos;s in it and
        explains what I&apos;ve learned in the process.
      </span>
    </p>
  );

  // A few metrics
  const vizNumber = vizList.length;
  const authorNumber = new Set(vizList.map((viz) => viz.author)).size;

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

      <TitleAndDescription
        title="About this project"
        description={siteDescription}
      />

      <main className="wrapper">
        <h2>
          🤔 What is <Link href="/">data-visualization.com</Link> ?
        </h2>
        <p className="pb-3">
          Data visualization is defined as the{" "}
          <a href="https://en.wikipedia.org/wiki/Data_visualization">
            graphic representation
          </a>{" "}
          of data.
        </p>
        <p className="pb-3">
          This website is a collection of stunning dataviz project I&apos;ve
          seen in my career as a dataviz practitioner. It&apos;s by no mean a
          complete list and is highly influenced by my taste 👨‍🍳.
          <br />
          But hopefully it should help you stand on the shoulders of giant next
          time you have a chart to build.
        </p>
        <p className="pb-3">
          <a href="https://www.dataviz-inspiration.com">
            Dataviz-inspiration.com
          </a>{" "}
          currently counts {vizNumber} projects by {authorNumber} different
          authors but is progressively growing. It aims to become the biggest
          source of quality chart images in the future, using a pinterest-kind
          layout that makes it pleasant to explore.
        </p>

        <div className="full-bleed">
          <ParallaxSection
            imgLink="https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true"
            opacity={0.6}
            height={300}
          />
        </div>
        <p className="text-gray-500 font-light mt-3 italic text-sm">
          A glimpse of the viz showcased in dataviz-inspiration.com, presented
          in a pinterest style.
        </p>

        <h2>📖 Why I built this project</h2>
        <p className="pb-3">
          A few years ago I created the{" "}
          <a href="https://www.r-graph-gallery.com">R graph gallery</a>, a
          website providing hundreds of chart examples made with the{" "}
          <a href="https://www.r-project.org">R</a> programming language. Soon I
          created the equivalent for{" "}
          <a href="https://www.python-graph-gallery.com">python</a>,{" "}
          <a href="https://www.d3-graph-gallery.com">d3.js</a> and{" "}
          <a href="https://www.react-graph-gallery.com">react</a>. Those
          websites are now used by thousands of people every day but only help
          for solving technical issues.
        </p>
        <p className="pb-3">
          This is why I created{" "}
          <a href="https://www.data-to-viz.com">data-to-viz.com</a>, a
          classification of chart types based on the data input format. It
          describes the main chart types, explains in what situation
          they&apos;re useful and what are their main associated{" "}
          <a href="https://www.data-to-viz.com/caveats.html">caveats</a>.
        </p>
        <p className="pb-3">
          Once you know what kind of chart to draw and how to make it,{" "}
          <b>one more crucial step</b> is missing on the pipeline: How do you
          make your viz original, insightful and beautiful?
        </p>
        <p className="pb-3">
          This is when you start googling in the quest of inspiration, browsing
          the work of other people who faced the same challenged before.
        </p>
        <p className="pb-3">
          Being someone in love with data visualization for a while now,
          I&apos;ve gathered my favorite snapshots in this portfolio and{" "}
          <TakeHome>
            hope it will make your life easier next time you have something
            awesome to build
          </TakeHome>
          .
        </p>
        <div className="flex justify-center items-center">
          <div className="flex max-w-sm flex-col w-96">
            <img src="/misc/filterOverview.png" />
            <p className="text-gray-500 font-light mt-3 italic text-sm">
              All viz projects are assigned to a chart type of the
              <br />
              <a href="https://www.data-to-viz.com">data-to-viz</a>{" "}
              classification. It makes it easy to target the viz you&apos;re
              looking for.
            </p>
          </div>
        </div>

        <h2>💛 The best sources for great charts</h2>
        <p className="pb-3">
          The viz projects displayed in this gallery are coming from many
          different places, and I often discover them on{" "}
          <a href="https://twitter.com/R_Graph_Gallery">twitter</a>. It is
          nonetheless possible to group them in a few categories.
        </p>
        <p className="pb-3">
          <b>Newspaper</b> have became a continuous source of visuals, and it
          gets more true every day. Papers like the{" "}
          <a href="https://www.nytimes.com">New York Time</a>, the{" "}
          <a href="https://www.ft.com">Financial Times</a>, le{" "}
          <a href="https://www.lemonde.fr">Monde</a> or{" "}
          <a href="https://www.zeit.de/index">die Zeit</a> are constantly basing
          their studies on dataviz to better share the stories.
        </p>
        <p className="pb-3">
          Some <b>specialized magazines</b> even base their editorial line on
          dataviz. It is the case of{" "}
          <a href="https://pudding.cool">the Pudding</a> that explains ideas
          using visual essays. If you love scrolly telling don&apos;t go now!
          You will most likely loose your day if you do 😀.
        </p>
        <p className="pb-3">
          Dataviz <b>competition and challenges</b> are also some terrific
          source of nice visuals. I&apos;m thinking for instance at the{" "}
          <a href="https://www.informationisbeautifulawards.com">
            information is beautiful award
          </a>{" "}
          or at the{" "}
          <a href="https://github.com/rfordatascience/tidytuesday">
            tidy tuesday
          </a>{" "}
          challenge where I got a lot of this website entries.
        </p>
        <p className="pb-3">
          But to be honnest what I really love is browsing the home page of{" "}
          <b>individual practitioners</b>. Watching the work of dataviz
          superstars like Nadieh{" "}
          <a href="https://www.visualcinnamon.com">Bremer</a>, Cédric{" "}
          <a href="https://www.cedricscherer.com">Scherer</a>, Maarten{" "}
          <a href="https://www.maartenlambrechts.com">Lambrechts</a>, Nathan{" "}
          <a href="https://flowingdata.com">Yau</a> and a myriad of other people
          is truely a hobby for me and it taught me so much both in term of
          dataviz and general knowledge.
        </p>

        <h2>💪 Best examples for each chart type</h2>
        <p className="pb-3">
          I&apos;ve tried to find examples for each chart type. However,
          it&apos;s interesting to realize that some chart types are very common
          (barplot, line chart) when some others are much lesser known
          (hierarchical edge bundling, ridgeline chart and many more.)
        </p>
        <p className="pb-3">
          Here is an overview of the occurence of each chart type in the
          project. Types are grouped by family following the classification of{" "}
          <a href="https://data-to-viz.com">data-to-viz.com</a>.
        </p>
        <p className="pb-3">
          <span className="evolution font-semibold">Evolution</span> and{" "}
          <span className="ranking font-semibold">Ranking</span> are the 2 main
          families, closely followed by{" "}
          <span className="map font-semibold">Maps</span>.{" "}
          <span className="flow font-semibold">Flows</span> are,{" "}
          <span className="distribution font-semibold">Distribution</span> is,{" "}
          <span className="correlation font-semibold">Correlation</span> has
        </p>
        <div className="full-bleed flex justify-center">
          <ChartTypeTreemap />
        </div>
        <p className="text-gray-500 font-light mt-3 italic text-sm">
          A treemap showing how many chart of each kind is represented in{" "}
          <a href="https://www.dataviz-inspiration.com">
            dataviz-inspiration.com
          </a>
          .
        </p>

        <div className="full-bleed bg-gray-100 pb-24 mt-12">
          <div className="wrapper">
            <h2>👋 Contribution | Contact | Future</h2>
            <p className="pb-3">
              <a href="https://www.dataviz-inspiration.com">
                Dataviz-inspiration.com
              </a>{" "}
              is a work in progress! It does not have much content yet, and
              probably a ton of UX bugs. Please be tolerant and respectful when
              giving feedback!
            </p>
            <p className="pb-3">
              That being said, I would love to hear from you! The best way (from
              far) is to{" "}
              <a href="https://github.com/holtzy/dataviz-inspiration/issues">
                open an issue on github
              </a>
              , but you can also contact me on{" "}
              <a href="https://twitter.com/R_Graph_Gallery">twitter</a> or send
              me an email at <TakeHome>yan.holtz.data@gmail.com</TakeHome>.
            </p>
            <p className="pb-3">
              You have a mind blowing dataviz project that should appear in this
              collection? Please let me know! 🙏🏻
            </p>
          </div>
        </div>
      </main>

      <div className="wrapper mt-12">
        <Footer />
      </div>
    </>
  );
};

export default About;
