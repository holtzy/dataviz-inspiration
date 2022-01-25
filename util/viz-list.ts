export type ChartId = "violin" | "density" | "histogram" | "boxplot" | "ridgeline" | "scatter" | "heatmap" | "correlogram" | "bubble" | "connectedScatter" | "density2d" | "barplot" | "radar" | "wordcloud" | "parallel" | "lollipop" | "circularBarplot" | "treemap" | "venn" | "donut" | "pie" | "dendrogram" | "circularPacking" | "line" | "area" | "stackedArea" | "stream" | "timeseries" | "map" | "choropleth" | "hexbin" | "cartogram" | "connection" | "bubbleMap" | "chordDiagram" | "network" | "sankey" | "arc" | "edgeBundling" | "colors" | "plotly" | "animation" | "cheatSheets" | "caveats" | "3d"

export type ChartFamily = "distribution" | "correlation" | "evolution" | "ranking" | "partOfAWhole" | "general" | "flow" | "map"

type VizList = {
    title: string;
    author: string;
    url: string
    img: string
    description: string
    tool?: "R" | "python" | "tableau" | "data wrapper" | "d3.js" | "react",
    code?: string, // Url to read the code
    chartFamily: ChartFamily[],
    chartId: ChartId[],
    luminosity: ("light" | "dark")[],
    interactive: boolean
}

export const vizList: VizList[] = [
    {
        title: "Here’s When We Expect Omicron to Peak",
        author: "The New York Times",
        url: "https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html",
        img: "omicron_NYT.jpeg",
        description: "We're in early 2022, the Omicron variant importance is raising across the globe and the New York Times <a href='https://twitter.com/FreedZach/status/1479132573578240001'>broke the internet</a> with a circular streamgraph.",
        tool: undefined,
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["stream"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Covid 19 Dashboard - India",
        author: "Group of dedicated volunteers",
        url: "https://www.covid19india.org/about",
        img: "covid19India.png",
        description: "A dashboard describing the spread of Covid 19 in india. Highly interactive with a pretty slick design. Dark mode support, many different types of viz with smooth transition between dataset.",
        tool: "react",
        code: "https://github.com/covid19india/covid19india-react",
        chartFamily: ["map", "evolution"],
        chartId: ["map", "line"],
        luminosity: ["light", "dark"],
        interactive: true
    }
]
