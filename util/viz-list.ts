import { ChartFamily, ChartId } from "./sectionDescription"

export type Tool = "R" | "python" | "tableau" | "data wrapper" | "d3.js" | "react" | "excel" | "javascript"
export type Luminosity = "light" | "dark"

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
    luminosity: Luminosity[];
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
        imgZoomed: ["HBCU_trends_gender-zoom.png"],
        img: "HBCU_trends_gender.png",
        contextDescription: "---",
        chartDescription: "",
        tool: ["R"],
        code: undefined,
        chartFamily: ["ranking"],
        chartId: ["lollipop"],
        luminosity: ["light"],
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
    {
        title: "Vaccines and Infectious Diseases",
        date: new Date(2015, 1),
        author: "Dov Friedman & Tynan DeBold",
        url: "https://graphics.wsj.com/infectious-diseases-and-vaccines/",
        imgZoomed: ["vaccine-heatmap-zoom.png"],
        img: "vaccine-heatmap.png",
        contextDescription: "Probably the most famous viz about vaccines. It represents the number of measle infected people measured over 70-some years and across all 50 states. It shows a clear trend of decline after vaccines were introduced.",
        chartDescription: "A clean heatmap that shows the number of cases per 100,000 people. Available for other diseases with similar result.",
        tool: ["excel"],
        code: undefined,
        chartFamily: ["evolution", "correlation"],
        chartId: ["heatmap"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "A Nation Divided",
        date: new Date(2014, 9),
        author: "Die Zeit",
        url: "https://www.zeit.de/feature/german-unification-a-nation-divided",
        imgZoomed: ["east-vs-west-germany-zoom.png"],
        img: "east-vs-west-germany.png",
        contextDescription: "In the early euphoria following the fall of the Berlin Wall in 1989, Germany moved quickly to erase the scars of its Cold War division. But East Germany’s legacy remains visible in statistics. Die Zeit offers a set of maps showing the remaining discrepancies between the West and the East.",
        chartDescription: "A massive load of hexbin maps, showing various variables like the average income, the proportion of people called Ronny or the avera farm size. Smooth transition between variables and clean design.",
        tool: undefined,
        code: undefined,
        chartFamily: ["map"],
        chartId: ["hexbin"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Nobels, no degrees",
        date: new Date(2012, 10),
        author: "G. Lupi, S. Quadri, G. Rossi, D. Ciuffi, F. Fragapane, F. Majno",
        url: "https://www.behance.net/gallery/14159439/Nobel-no-degrees",
        imgZoomed: ["nobel-prices-zoom.png"],
        img: "nobel-prices.png",
        contextDescription: "This visualization explores the story of Nobel prizes through years.Visualized for each laureate are prize category, year the prize was awarded, and age of the recipient at the time, as well as principal academic affiliations and hometown.",
        chartDescription: "Each dot represents a Nobel laureate, and each recipient is positioned according to the year the prize was awarded (x axis) and his or her age at the time of the award (y axis).",
        tool: undefined,
        code: undefined,
        chartFamily: ["evolution", "flow"],
        chartId: ["line", "sankey", "barplot"],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Shipmap.org",
        date: new Date(2012, 10),
        author: "Kiln",
        url: "https://www.shipmap.org",
        imgZoomed: ["shipmap-zoom.png", "shipmap-2-zoom.png"],
        img: "shipmap.png",
        contextDescription: "Shipmap.org is an interactive map of commercial shipping movements based on hundreds of millions of data points from throughout 2012. The project's aim is to highlight for a broad audience the extraordinary scale of modern commercial shipping, the routes these huge vessels take around the world, the geographic spread of different types of cargo boats, and the amount of carbon dioxide they produce.",
        chartDescription: "The unique base map shows ocean depth and major rivers, while the ships can be viewed as a high-resolution animation of movements over time (the 'ships' view) or as a plot showing all the positions at once (the 'routes' view), optionally colour-coded by ship type. A Talkie voiceover with music introduction sets the scene and provides an explanatory tour of the map.",
        tool: ["javascript"],
        code: undefined,
        chartFamily: ["map"],
        chartId: ["connection"],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Rhythm of Food",
        date: new Date(2016, 1),
        author: "M. Stefaner, Y. Vishnevsky, S. Rogers, A. Cairo et al.",
        url: "http://rhythm-of-food.net",
        imgZoomed: ["rhythm-food-zoom.png"],
        img: "rhythm-food.png",
        contextDescription: "An interactive explorer based on the weekly Google Trends data for hundreds of dishes and ingredients, gathered over 15 years. It allows investigating the seasons and rhythm of food around the world",
        chartDescription: "The main viz of this project is a radial diagram. One viz per ingredient. The color of each square is for the year. The distance to center (radius) is for the number of google search.",
        tool: ["javascript"],
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["heatmap"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "The State of Javascript",
        date: new Date(2020, 1),
        author: "A. Wattenberger, S. Greif and R. Benitte",
        url: "https://2020.stateofjs.com/en-US/technologies/",
        imgZoomed: ["state-of-js-zoom.png"],
        img: "state-of-js.png",
        contextDescription: "The State of Js is a survey that describes how Javascript (a programing language) evolved in the past few years. In the chart below they describe what libraries are trending, and which one are slowly disappearing. The whole webpage is awesome and you should definitely take a look.",
        chartDescription: "My favorite grouped connected scatterplot! Each line goes from 2016 to 2020. A higher point means a technology has been used by more people, and a point further to the right means more users want to learn it; or have used it and would use it again.",
        tool: ["javascript", "d3.js"],
        code: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js",
        chartFamily: ["evolution"],
        chartId: ["connectedScatter"],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Quantifying the evolution of individual scientific impact",
        date: new Date(2017, 0),
        author: "Kim Albrecht",
        url: "sciencepaths.kimalbrecht.com",
        imgZoomed: ["scientific-impact-zoom.png"],
        img: "scientific-impact.png",
        contextDescription: "How does the impact of a scientist's work change over a scientific career? Does impact, arguably the most relevant performance measure, follow predictable patterns? Can we predict the timing of a scientist’s outstanding achievement? Kim checked the evolution of scientific author citation levels to answer those questions.<br/><br/>The result is called the <b>random impact rule</b>: the highest impact paper of a researcher can be anywhere in the sequence of papers!",
        chartDescription: "Each row is a scientist. From left to right, the first to the last paper of a scientist are arranged, ignoring their timing of publication. The line height shows the number of citation of the paper. The app has nice controls on top, including interactive histograms that I really like.",
        tool: ["javascript", "d3.js"],
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["line", "ridgeline"],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Rappers, Sorted by Size of Vocabulary",
        date: new Date(2019, 0),
        author: "Matthew Daniels",
        url: "https://pudding.cool/projects/vocabulary/index.html",
        imgZoomed: ["rapper-lyrics-zoom.png", "rapper-lyrics-2-zoom.png"],
        img: "rapper-lyrics.png",
        contextDescription: "A projects that compares the number of unique words used by some of the most famous artists in hip hop using each artist’s first 35,000 lyrics. Jedi Mind Tricks used 6424 unique words, compared to DMX that counts 2936.",
        chartDescription: "A 1 dimension scatterplot where the X axis shows the number of unique words and each item is an artist, represented by a circle and an avatar. The Y position is random, just using <a href='https://www.data-to-viz.com/caveat/boxplot.html>jittering</a> to avoid overlap.",
        tool: ["javascript", "d3.js"],
        code: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js",
        chartFamily: ["ranking", "distribution"],
        chartId: ["scatter", "circularPacking", "histogram"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Shifting Parent Work Hours, Mom vs. Dad",
        date: new Date(2018, 0),
        author: "Nathan Yau",
        url: "https://flowingdata.com/2016/04/20/parent-work-hours/",
        imgZoomed: ["parent-work-zoom.png"],
        img: "parent-work.png",
        contextDescription: " Is it more common these days for dads to spend time with kids and work around the house? If so, is time spent that much different from decades past? How do dads’ times compare to moms’ times? An answer based on the American Time Use Survey that show hours spent with unpaid housework and childcare against hours spent at a job by moms and dads.",
        chartDescription: "2 interactive histograms with animated transition between datasets and control buttons on top.",
        tool: ["javascript", "d3.js"],
        code: undefined,
        chartFamily: ["distribution"],
        chartId: ["histogram"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Ukrain War: Poutine's assault organization",
        date: new Date(2022, 1),
        author: "Le Monde",
        url: "https://www.lemonde.fr/international/article/2022/02/25/guerre-en-ukraine-l-ordre-de-bataille-de-poutine_6115167_3210.html",
        imgZoomed: ["ukraine-attack-leMonde-zoom.png"],
        img: "ukraine-attack-leMonde.jpeg",
        contextDescription: "On the 24th of February Russian troops invaded Ukraine. <i>Le monde</i> created a full page on the topic based on a map of the area.",
        chartDescription: "Not really dataviz since this map does not display any data. But still interesting for design inspiration, notably for the whole page layout.",
        tool: undefined,
        code: undefined,
        chartFamily: ["map"],
        chartId: ["map"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "At least half a million refugees flee Ukraine",
        date: new Date(2022, 1),
        author: "The New York Times",
        url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
        imgZoomed: ["ukraine-migration-nyt-zoom.png"],
        img: "ukraine-migration-nyt-zoom.png",
        contextDescription: "The New York Times covered the migration of Ukrainians fleeing the war with a very complete article full of migration maps.",
        chartDescription: "This snapshot shows a sankey diagram drawn on top of a map. Read the article for more map examples.",
        tool: undefined,
        code: undefined,
        chartFamily: ["map", "flow"],
        chartId: ["map", "connection"],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Rouble tumbles to record low",
        date: new Date(2022, 1),
        author: "The New York Times",
        url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
        imgZoomed: ["rouble-tumbles-low-zoom.png", "rouble-tumbles-low-zoom-dark.png"],
        img: "rouble-tumbles-low.png",
        contextDescription: "A good proportion of the world countries have applied heavy sanctions to Russia following the Ukraine invasion. As a result the Rouble value is quickly decreasing.",
        chartDescription: "A line chart of the Ruble / USD exchange rate evolution. Two things are interesting here. Annotations are very clear and truly make a difference in the chart quality. The Y scale is inverted which is usually a bad thing, but works well here.",
        tool: undefined,
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["line"],
        luminosity: ["light", "dark"],
        interactive: false
    },
    {
        title: "Change in common household types",
        date: new Date(2022, 1),
        author: "Nathan Yau",
        url: "https://flowingdata.com/2022/03/01/change-in-common-household-types-in-the-u-s/",
        imgZoomed: ["household-zoom.png"],
        img: "household.png",
        contextDescription: "In the 1970s, the most common household type in the U.S. was a married couple with kids. But over time, as people wait longer to get married and have fewer kids (if any), it’s grown more common to live alone or with non-family.",
        chartDescription: "This project describes this kind of effect using an alluvial diagram, showing both the rank and the percentage of each household type over the years.",
        tool: undefined,
        code: undefined,
        chartFamily: ["evolution"],
        chartId: ["area"],
        luminosity: ["light"],
        interactive: false
    },
]
