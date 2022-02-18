import { ChartFamily, ChartId } from "./sectionDescription"

export type Tool = "R" | "python" | "tableau" | "data wrapper" | "d3.js" | "react" | "excel"

export type VizItem = {
    title: string;
    date: Date;
    author: string;
    url: string;
    imgZoomed: string[]; // Image displayed on the wall, zoomed with no titles or legends
    img: string; // Image displayed on the modal, more global
    contextDescription: string;
    chartDescription: string;
    tool?: Tool[];
    code?: string; // Url to read the code
    chartFamily: ChartFamily[];
    chartId: ChartId[];
    luminosity: ("light" | "dark")[];
    interactive: boolean
}

export const vizList: VizItem[] = [
    {
        title: "Here’s When We Expect Omicron to Peak",
        date: new Date(2022, 0),
        author: "The New York Times",
        url: "https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html",
        imgZoomed: ["omicron-NYT-zoom.png"],
        img: "omicron-NYT.jpeg",
        contextDescription: "We're in early 2022, the Omicron variant importance is raising across the globe and the New york times decides to represent the Covid pandemic evolutioin of the last 2 years.",
        chartDescription: "The New York Times <a href='https://twitter.com/FreedZach/status/1479132573578240001'>literally broke the internet</a> with this circular streamgraph. The dataviz community is divided, trying to understand if this unconventional figure is pure genius or trash, since it does not respect most of the comon rules.<br/><br/>Hint: when so many people talk about a chart, there is probably something good about it!",
        tool: undefined,
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["stream"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Covid 19 Dashboard - India",
        date: new Date(2021, 10),
        author: "Group of dedicated volunteers",
        url: "https://www.covid19india.org",
        imgZoomed: ["covid19India-zoom.png"],
        img: "covid19India.png",
        contextDescription: "The covid crisis is a world wide pandemic and India is certainly not spared. Some volunteer decided to create a dashboard to help Indian politics to take information driven decisions.",
        chartDescription: "A dashboard describing the spread of Covid 19 in India. Highly interactive with a pretty slick design. Dark mode support, many different types of viz with smooth transition between dataset.",
        tool: ["react", "d3.js"],
        code: "https://github.com/covid19india/covid19india-react",
        chartFamily: ["map", "evolution"],
        chartId: ["map", "line"],
        luminosity: ["light", "dark"],
        interactive: true
    },
    {
        title: "Migration waves",
        date: new Date(1000, 0),
        author: "National Geographic",
        url: "https://www.nationalgeographic.com/magazine/graphics/graphic-shows-past-50-years-of-global-human-migration",
        imgZoomed: ["migration-waves-zoom.png"],
        img: "migration-waves.png",
        contextDescription: "The flow of people across borders has long shaped our world. Data from the past 50 years of international migration helped National Geographic understand why people make the choice to leave and where they go. Less than 10 percent of these migrants are forced to flee; most are seeking a better life and move only when they can afford to.",
        chartDescription: "The article describes the evolution of the immigration of many countries using smoothed area charts. The last figure looks pretty much like a ridgeline chart that is usually used to compare distributions, but smartly used here to compare evolutions.",
        tool: undefined,
        code: undefined,
        chartFamily: ["distribution"],
        chartId: ["density", "ridgeline"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Russia, Gas, and the Ukraine Conflict",
        date: new Date(2022, 2),
        author: "New York Times",
        url: "https://www.nytimes.com/interactive/2022/02/15/business/energy-environment/russia-gas-europe-ukraine.html",
        imgZoomed: ["russia-gas-ukraine-zoom.png"],
        img: "russia-gas-ukraine.png",
        contextDescription: "Europe relies on Russia’s natural gas to help heat millions of homes, generate electricity and power factories. With Russian troops massed along Ukraine’s border, Europe’s heavy dependence on Russia is limiting its diplomatic options and threatening to throw its energy supplies into turmoil. This map describes what proportion of the gas supply is distributed to each European country.",
        chartDescription: "This viz is a choropleth map with a sankey diagram on top. The choropleth shows how much each country relies on Russian gaz. The sankey diagram (arrows) shows where the Russian gas is distributed.",
        tool: undefined,
        code: undefined,
        chartFamily: ["map", "flow"],
        chartId: ["choropleth", "sankey"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Mario Kart world's records",
        date: new Date(2021, 4),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html",
        imgZoomed: ["lollipop-plot-with-r-mario-kart-64-world-records-zoom.png"],
        img: "lollipop-plot-with-r-mario-kart-64-world-records.png",
        contextDescription: "Mario Kart on Nintendo 64 is probably one of the most famouse game of all time (at least it is for me 😃). In this chart Cédric Scherer visualized the world records to understand what's the best character to play with.",
        chartDescription: "A lollipop chart grouped by character. It's interesting to notice that character names are not aligned vertically, but displayed next to each segment for better readability.",
        tool: ["R"],
        code: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html",
        chartFamily: ["ranking"],
        chartId: ["lollipop"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Appearance of the Five Most Popular X-Men Characters",
        date: new Date(2020, 6),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html",
        imgZoomed: ["streamchart-xmen-zoom.png"],
        img: "streamchart-xmen.png",
        contextDescription: "A chart that studies the appearances of the most popular characters in Chris Claremont’s X-Men comics",
        chartDescription: "A set of aligned streamcharts with helpful annotations. Nice attention to details with striking color palette, great fonts and clear legend.",
        tool: ["R"],
        code: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html",
        chartFamily: ["evolution"],
        chartId: ["stream"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Cracking your favorite password",
        date: new Date(2020, 0),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html",
        imgZoomed: ["web-circular-lollipop-plot-with-ggplot2-zoom.png"],
        img: "web-circular-lollipop-plot-with-ggplot2.png",
        contextDescription: "Visualization of the time it takes to crack the 500 most common passwords by online guessing.",
        chartDescription: "A circular lollipop chart where each item is a password. Sorted by rank and colored by category. Annotation for the most extreme password, cool split by category at the bottom.",
        tool: ["R"],
        code: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html",
        chartFamily: ["ranking"],
        chartId: ["lollipop", "circularBarplot"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Infections caught in laboratories are surprisingly common",
        date: new Date(2021, 7),
        author: "the Economist",
        url: "https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common",
        imgZoomed: ["infection-from-lab-zoom.png"],
        img: "infection-from-lab.png",
        contextDescription: "In the middle of a worlwide pandemic, some people wonder if covid-19 escaped from a Chinese lab. The economist checked the probability of this by comparing with other diseases.",
        chartDescription: "A simple barplot with the well known Economics style signature. Note bars are displayed horizontally, each being labeled using a very readable manner.",
        tool: undefined,
        code: "https://www.python-graph-gallery.com/web-horizontal-barplot-with-labels-the-economist",
        chartFamily: ["ranking"],
        chartId: ["barplot"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "ddd",
        date: new Date(2022, 2),
        author: "dddd",
        url: "https://www.nytimes.com/interactive/2022/02/15/business/energy-environment/russia-gas-europe-ukraine.html",
        imgZoomed: ["HBCU_trends_gender.png"],
        img: "HBCU_trends_gender.png",
        contextDescription: "---",
        chartDescription: "",
        tool: undefined,
        code: undefined,
        chartFamily: ["---"],
        chartId: ["---"],
        luminosity: ["---"],
        interactive: false
    },
    {
        title: "Covid dashboard",
        date: new Date(2021, 1),
        author: "Le Monde",
        url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
        imgZoomed: ["covid-dash-lemonde-1.png", "covid-dash-lemonde-2-zoom.png", "covid-dash-lemonde-3-zoom.png", "covid-dash-lemonde-4-zoom.png"],
        img: "covid-dash-lemonde-1.png",
        contextDescription: "Covid is everywhere in the news and every newspaper is trying to summarize the situation in its country. Le Monde is one of the most famouse newspaper in France and does a pretty good job in its daily updated dashboard.",
        chartDescription: "Several viz are provided, going from mirror area charts to streamcharts, with different kinds of map and several tables. Worth a read if you speak 🇫🇷.",
        tool: ["d3.js"],
        code: undefined,
        chartFamily: ["evolution", "map"],
        chartId: ["stream", "area", "choropleth", "line", "heatmap"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Eigenfactor project",
        date: new Date(2018, 1),
        author: "Eigenfactor Project & Moritz Stefaner",
        url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
        imgZoomed: ["scientific-pub-connection-zoom.png"],
        img: "scientific-pub-connection.png",
        contextDescription: "A visualization of scientific publication citation network. More than 60M citations coming from more than 7k journals were considered. Goal was to look for patterns on how journals tend to cite each other.",
        chartDescription: "An interactive hierarchical edge bundling where each node is a scientific journal. A journal is linked with another through an edge if it cites it in one of its publication. Clicking on a specific journal highlights its connections.",
        tool: ["d3.js"],
        code: undefined,
        chartFamily: ["flow"],
        chartId: ["edgeBundling"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Inequality in Spain",
        date: new Date(2021, 11),
        author: "Dominic Royé",
        url: "https://dominicroye.github.io/en/project/population/",
        imgZoomed: ["map-inequality-spain-zoom.png"],
        img: "map-inequality-spain.png",
        contextDescription: "A visualization of Spain, looking a both inequality (using the Gini Index) and average rent prices.",
        chartDescription: "A dichotomous choropleth map with nice annotation, good looking color palette and a 2D color mapping.",
        tool: ["R"],
        code: undefined,
        chartFamily: ["map"],
        chartId: ["choropleth"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Troops Vs. Cost",
        date: new Date(2013, 10),
        author: "Jorge Camoes",
        url: "https://excelcharts.com/redraw-troops-vs-cost-time-magazine/",
        imgZoomed: ["Troops-vs-Costs-zoom.png"],
        img: "Troops-vs-Costs.png",
        contextDescription: "The Time Magazine published a Dual-Y axis chart showing the evolution of both the army budget and the Number of troops between 1980 and 2012. Jorge Camoes decided to transform it with his own chart type.",
        chartDescription: "The result is a connected scatterplot. I personally prefer it since dual Y axis are notoriously <a href='https://www.data-to-viz.com/caveats.html'>broken</a>, but it's hard to know if people truely understand it when they're not used to it.",
        tool: ["excel"],
        code: undefined,
        chartFamily: ["correlation"],
        chartId: ["connectedScatter"],
        luminosity: ["light"],
        interactive: false
    },
]
