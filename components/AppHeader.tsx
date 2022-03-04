import Head from "next/head";

type AppHeaderProps = {
  vizItemNumber: number;
  selectedChartLabel: string;
};

export const AppHeader = ({
  vizItemNumber,
  selectedChartLabel,
}: AppHeaderProps) => {
  const siteDescription =
    "Dataviz-inspiration.com is the biggest list of " +
    selectedChartLabel +
    " examples available on the web. It showcases " +
    vizItemNumber +
    " of the most beautiful and impactful dataviz projects I know. The collection is a good place to visit when you're designing a new graph, together with data-to-viz.com that shares dataviz best practices.";

  return (
    <Head>
      <title>Dataviz Inspiration | Hundreds of chart examples</title>
      <meta name="description" content={siteDescription} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💡</text></svg>"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Mono:wght@300&display=swap"
        rel="stylesheet"
      />
      <meta
        name="keywords"
        content="Viz, dataviz, data visualization, example, catalog, list, chart, graph, plot"
      />
      <meta name="author" content="Yan Holtz" />

      <meta
        property="og:title"
        content={"Dataviz Inspiration | Hundreds of chart examples"}
      />
      <meta property="og:description" content={siteDescription} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/holtzy/dataviz-inspiration/main/public/overview.png"
      />
    </Head>
  );
};
