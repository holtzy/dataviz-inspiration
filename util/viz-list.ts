import { ChartFamily, ChartId } from "./sectionDescription"

export type Tool = "R" | "python" | "tableau" | "data wrapper" | "d3.js" | "react"

export type VizItem = {
    title: string;
    author: string;
    url: string
    img: string
    description: string
    tool?: Tool[],
    code?: string, // Url to read the code
    chartFamily: ChartFamily[],
    chartId: ChartId[],
    luminosity: ("light" | "dark")[],
    interactive: boolean
}

export const vizList: VizItem[] = [
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
        tool: ["react", "d3.js"],
        code: "https://github.com/covid19india/covid19india-react",
        chartFamily: ["map", "evolution"],
        chartId: ["map", "line"],
        luminosity: ["light", "dark"],
        interactive: true
    },
    {
        title: "Migration waves",
        author: "National Geographic",
        url: "https://www.nationalgeographic.com/magazine/graphics/graphic-shows-past-50-years-of-global-human-migration?sf215829698=1&sf217104276=1",
        img: "migration-waves.png",
        description: "The ebb and flow of people across borders has long shaped our world. Data from the past 50 years of international migration help us understand why people make the choice to leave and where they go. Less than 10 percent of these migrants are forced to flee; most are seeking a better life and move only when they can afford to. Global migrants totaled fewer than 100 million in the 1960s, and although the number has increased substantially since then, it remains a fraction of the world's 7.6 billion people today.",
        tool: undefined,
        code: undefined,
        chartFamily: ["distribution"],
        chartId: ["density", "ridgeline"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "---",
        author: "---",
        url: "---",
        img: "HBCU_trends_gender.png",
        description: "---",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },{
        title: "---",
        author: "---",
        url: "---",
        img: "lollipop-plot-with-r-mario-kart-64-world-records.png",
        description: "---",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },{
        title: "---",
        author: "---",
        url: "---",
        img: "streamchart-xmen.png",
        description: "---",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },{
        title: "---",
        author: "---",
        url: "---",
        img: "web-circular-lollipop-plot-with-ggplot2.png",
        description: "---",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },{
        title: "---",
        author: "---",
        url: "---",
        img: "web-horizontal-barplot-with-labels-the-economist.png",
        description: "---",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },
]
