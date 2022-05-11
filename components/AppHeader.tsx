import Head from "next/head";

type AppHeaderProps = {
  title: string;
  description: string;
};

export const AppHeader = ({ title, description }: AppHeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Favicon That I have built thanks to a online service */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto+Mono:wght@300&display=swap"
        rel="stylesheet"
      />

      <meta
        name="keywords"
        content="Viz, dataviz, data visualization, example, catalog, list, chart, graph, plot"
      />
      <meta name="author" content="Yan Holtz" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/holtzy/dataviz-inspiration/main/public/overview.png"
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-TRQ20SZLV3`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TRQ20SZLV3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};
