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
      <title>Dataviz Inspiration</title>
      <meta name="description" content={siteDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
