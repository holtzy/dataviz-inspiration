import { ChartId } from "./sectionDescription";

export const allTools = [
  "R",
  "python",
  "tableau",
  "data wrapper",
  "d3.js",
  "react",
  "excel",
  "javascript",
  "rawGraphs",
  "illustrator",
] as const;
export type Tool = (typeof allTools)[number];

export type Luminosity = "light" | "dark";

export type VizItem = {
  id: number;
  title: string;
  date: Date;
  author: string;
  url: string;
  img: { full: string; zoom: string; chartId: ChartId[] }[]; // zoom is on the wall. full is on the modal
  contextDescription: string;
  chartDescription: string;
  tools?: { name: Tool; link?: string }[];
  luminosity: Luminosity[];
  interactive: boolean;
};

export const vizList: VizItem[] = [
  {
    id: 1,
    title: "Here’s When We Expect Omicron to Peak",
    date: new Date(2022, 0),
    author: "The New York Times",
    url: "https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html",
    img: [
      {
        full: "omicron-NYT.png",
        zoom: "omicron-NYT-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "We're in early 2022, the Omicron variant importance is raising across the globe and the New york times decides to represent the Covid pandemic evolution of the last 2 years.",
    chartDescription:
      "The New York Times <a href='https://twitter.com/FreedZach/status/1479132573578240001'>literally broke the internet</a> with this circular streamgraph. The dataviz community is divided, trying to understand if this unconventional figure is pure genius or trash, since it does not respect most of the comon rules.<br/><br/>Hint: when so many people talk about a chart, there is probably something good about it!",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 2,
    title: "Covid 19 Dashboard - India",
    date: new Date(2021, 10),
    author: "Group of dedicated volunteers",
    url: "https://www.covid19india.org",
    img: [
      {
        full: "covid19India.png",
        zoom: "covid19India-zoom.png",
        chartId: ["map", "bubbleMap"],
      },
      {
        full: "covid19India-bar.png",
        zoom: "covid19India-bar-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "covid19India-line.png",
        zoom: "covid19India-line-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The covid crisis is a world wide pandemic and India is certainly not spared. Some volunteer decided to create a dashboard to help Indian politics to take information driven decisions.",
    chartDescription:
      "A dashboard describing the spread of Covid 19 in India. Highly interactive with a pretty slick design. Dark mode support, many different types of viz with smooth transition between dataset.",
    tools: [
      {
        name: "react",
        link: "https://github.com/covid19india/covid19india-react",
      },
      {
        name: "d3.js",
        link: "https://github.com/covid19india/covid19india-react",
      },
    ],
    luminosity: ["light", "dark"],
    interactive: true,
  },
  {
    id: 3,
    title: "Migration waves",
    date: new Date(1000, 0),
    author: "National Geographic",
    url: "https://www.nationalgeographic.com/magazine/graphics/graphic-shows-past-50-years-of-global-human-migration",
    img: [
      {
        full: "migration-waves.png",
        zoom: "migration-waves-zoom.png",
        chartId: ["density", "ridgeline"],
      },
    ],
    contextDescription:
      "The flow of people across borders has long shaped our world. Data from the past 50 years of international migration helped National Geographic understand why people make the choice to leave and where they go. Less than 10 percent of these migrants are forced to flee; most are seeking a better life and move only when they can afford to.",
    chartDescription:
      "The article describes the evolution of the immigration of many countries using smoothed area charts. The last figure looks pretty much like a ridgeline chart that is usually used to compare distributions, but smartly used here to compare evolutions.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 4,
    title: "Russia, Gas, and the Ukraine Conflict",
    date: new Date(2022, 2),
    author: "The New York Times",
    url: "https://www.nytimes.com/interactive/2022/02/15/business/energy-environment/russia-gas-europe-ukraine.html",
    img: [
      {
        full: "russia-gas-ukraine.png",
        zoom: "russia-gas-ukraine-zoom.png",
        chartId: ["sankey"],
      },
    ],
    contextDescription:
      "Europe relies on Russia’s natural gas to help heat millions of homes, generate electricity and power factories. With Russian troops massed along Ukraine’s border, Europe’s heavy dependence on Russia is limiting its diplomatic options and threatening to throw its energy supplies into turmoil. This map describes what proportion of the gas supply is distributed to each European country.",
    chartDescription:
      "This viz is a choropleth map with a sankey diagram on top. The choropleth shows how much each country relies on Russian gaz. The sankey diagram (arrows) shows where the Russian gas is distributed.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 5,
    title: "Mario Kart world's records",
    date: new Date(2021, 4),
    author: "Cédric Scherer",
    url: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html",
    img: [
      {
        full: "lollipop-plot-with-r-mario-kart-64-world-records.png",
        zoom: "lollipop-plot-with-r-mario-kart-64-world-records-zoom.png",
        chartId: ["lollipop"],
      },
    ],
    contextDescription:
      "Mario Kart on Nintendo 64 is probably one of the most famous game of all time (at least it is for me 😃). In this chart Cédric Scherer visualized the world records to understand what's the best character to play with.",
    chartDescription:
      "A lollipop chart grouped by character. It's interesting to notice that character names are not aligned vertically, but displayed next to each segment for better readability.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 6,
    title: "Appearance of the Five Most Popular X-Men Characters",
    date: new Date(2020, 6),
    author: "Cédric Scherer",
    url: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html",
    img: [
      {
        full: "streamchart-xmen.png",
        zoom: "streamchart-xmen-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "A chart that studies the appearances of the most popular characters in Chris Claremont’s X-Men comics",
    chartDescription:
      "A set of aligned streamcharts with helpful annotations. Nice attention to details with striking color palette, great fonts and clear legend.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 7,
    title: "Cracking your favorite password",
    date: new Date(2020, 0),
    author: "Cédric Scherer",
    url: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html",
    img: [
      {
        full: "web-circular-lollipop-plot-with-ggplot2.png",
        zoom: "web-circular-lollipop-plot-with-ggplot2-zoom.png",
        chartId: ["lollipop", "circularBarplot"],
      },
    ],
    contextDescription:
      "Visualization of the time it takes to crack the 500 most common passwords by online guessing.",
    chartDescription:
      "A circular lollipop chart where each item is a password. Sorted by rank and colored by category. Annotation for the most extreme password, cool split by category at the bottom.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 8,
    title: "Infections caught in laboratories are surprisingly common",
    date: new Date(2021, 7),
    author: "the Economist",
    url: "https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common",
    img: [
      {
        full: "infection-from-lab.png",
        zoom: "infection-from-lab-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "In the middle of a worlwide pandemic, some people wonder if covid-19 escaped from a Chinese lab. The economist checked the probability of this by comparing with other diseases.",
    chartDescription:
      "A simple barplot with the Economist's well known style signature. Note bars are displayed horizontally, each being labeled using a very readable manner.",
    tools: [
      {
        name: "python",
        link: "https://www.python-graph-gallery.com/web-horizontal-barplot-with-labels-the-economist",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 9,
    title: "Enrollments in historically black colleges",
    date: new Date(2022, 2),
    author: "Tobias Stalder",
    url: "https://www.r-graph-gallery.com/web-extended-dumbbell-plot-ggplot2.html",
    img: [
      {
        full: "HBCU_trends_gender.png",
        zoom: "HBCU_trends_gender-zoom.png",
        chartId: ["lollipop"],
      },
    ],
    contextDescription:
      "A tidy tuesday challenge looking at how many males and females enrolled at historically black colleges and universities.",
    chartDescription:
      "A dumbbell plot made with ggplot2. On top of the nice layout and annotations, it also have additional grouped mean and standart deviation for each year.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-extended-dumbbell-plot-ggplot2.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 10,
    title: "Covid dashboard",
    date: new Date(2021, 1),
    author: "Le Monde",
    url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
    img: [
      {
        full: "covid-dash-lemonde-1.png",
        zoom: "covid-dash-lemonde-1.png",
        chartId: ["map"],
      },
      {
        full: "covid-dash-lemonde-2.png",
        zoom: "covid-dash-lemonde-2-zoom.png",
        chartId: ["line"],
      },
      {
        full: "covid-dash-lemonde-3.png",
        zoom: "covid-dash-lemonde-3-zoom.png",
        chartId: ["stream"],
      },
      {
        full: "covid-dash-lemonde-4.png",
        zoom: "covid-dash-lemonde-4.png",
        chartId: ["line", "barplot"],
      },
    ],
    contextDescription:
      "Covid is everywhere in the news and every newspaper is trying to summarize the situation in its country. Le Monde is one of the most famous newspapers in France and does a pretty good job in its daily updated dashboard.",
    chartDescription:
      "Several viz are provided, going from mirror area charts to streamcharts, with different kinds of map and several tables. Worth a read if you speak 🇫🇷.",
    tools: [{ name: "d3.js" }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 11,
    title: "Eigenfactor project",
    date: new Date(2018, 1),
    author: "Eigenfactor Project & Moritz Stefaner",
    url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
    img: [
      {
        full: "scientific-pub-connection.png",
        zoom: "scientific-pub-connection-zoom.png",
        chartId: ["edgeBundling"],
      },
    ],
    contextDescription:
      "A visualization of scientific publication citation network. More than 60M citations coming from more than 7k journals were considered. Goal was to look for patterns on how journals tend to cite each other.",
    chartDescription:
      "An interactive hierarchical edge bundling where each node is a scientific journal. A journal is linked with another through an edge if it cites it in one of its publication. Clicking on a specific journal highlights its connections.",
    tools: [{ name: "d3.js" }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 12,
    title: "Inequality in Spain",
    date: new Date(2021, 11),
    author: "Dominic Royé",
    url: "https://dominicroye.github.io/en/project/population/",
    img: [
      {
        full: "map-inequality-spain.png",
        zoom: "map-inequality-spain-zoom.png",
        chartId: ["map", "choropleth"],
      },
    ],
    contextDescription:
      "A visualization of Spain, looking a both inequality (using the Gini Index) and average rent prices.",
    chartDescription:
      "A dichotomous choropleth map with nice annotation, good looking color palette and a 2D color mapping.",
    tools: [
      {
        name: "R",
        link: "https://dominicroye.github.io/en/project/population/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 13,
    title: "Troops Vs. Cost",
    date: new Date(2013, 10),
    author: "Jorge Camoes",
    url: "https://excelcharts.com/redraw-troops-vs-cost-time-magazine/",
    img: [
      {
        full: "Troops-vs-Costs.png",
        zoom: "Troops-vs-Costs-zoom.png",
        chartId: ["connectedScatter"],
      },
    ],
    contextDescription:
      "The Time Magazine published a Dual-Y axis chart showing the evolution of both the army budget and the Number of troops between 1980 and 2012. Jorge Camoes decided to transform it with his own chart type.",
    chartDescription:
      "The result is a connected scatterplot. I personally prefer it since dual Y axis are notoriously <a href='https://www.data-to-viz.com/caveats.html'>broken</a>, but it's hard to know if people truly understand it when they're not used to it.",
    tools: [{ name: "excel" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 14,
    title: "Vaccines and Infectious Diseases",
    date: new Date(2015, 1),
    author: "Dov Friedman & Tynan DeBold",
    url: "https://graphics.wsj.com/infectious-diseases-and-vaccines/",
    img: [
      {
        full: "vaccine-heatmap.png",
        zoom: "vaccine-heatmap-zoom.png",
        chartId: ["heatmap"],
      },
    ],
    contextDescription:
      "Probably the most famous viz about vaccines. It represents the number of measle infected people measured over 70-some years and across all 50 states. It shows a clear trend of decline after vaccines were introduced.",
    chartDescription:
      "A clean heatmap that shows the number of cases per 100,000 people. Available for other diseases with similar result.",
    tools: [{ name: "excel" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 15,
    title: "A Nation Divided",
    date: new Date(2014, 9),
    author: "Die Zeit",
    url: "https://www.zeit.de/feature/german-unification-a-nation-divided",
    img: [
      {
        full: "east-vs-west-germany.png",
        zoom: "east-vs-west-germany-zoom.png",
        chartId: ["hexbin"],
      },
    ],
    contextDescription:
      "In the early euphoria following the fall of the Berlin Wall in 1989, Germany moved quickly to erase the scars of its Cold War division. But East Germany’s legacy remains visible in statistics. Die Zeit offers a set of maps showing the remaining discrepancies between the West and the East.",
    chartDescription:
      "A massive load of hexbin maps, showing various variables like the average income, the proportion of people called Ronny or the avera farm size. Smooth transition between variables and clean design.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 16,
    title: "Nobels, no degrees",
    date: new Date(2012, 10),
    author: "G. Lupi, S. Quadri, G. Rossi, D. Ciuffi, F. Fragapane, F. Majno",
    url: "https://www.behance.net/gallery/14159439/Nobel-no-degrees",
    img: [
      {
        full: "nobel-prices.png",
        zoom: "nobel-prices-zoom.png",
        chartId: ["line", "sankey", "barplot"],
      },
    ],
    contextDescription:
      "This visualization explores the story of Nobel prizes through years.Visualized for each laureate are prize category, year the prize was awarded, and age of the recipient at the time, as well as principal academic affiliations and hometown.",
    chartDescription:
      "Each dot represents a Nobel laureate, and each recipient is positioned according to the year the prize was awarded (x axis) and his or her age at the time of the award (y axis).",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 17,
    title: "Shipmap.org",
    date: new Date(2012, 10),
    author: "Kiln",
    url: "https://www.shipmap.org",
    img: [
      {
        full: "shipmap.png",
        zoom: "shipmap-zoom.png",
        chartId: ["connection"],
      },
      {
        full: "shipmap.png",
        zoom: "shipmap-2-zoom.png",
        chartId: ["connection"],
      },
    ],
    contextDescription:
      "Shipmap.org is an interactive map of commercial shipping movements based on hundreds of millions of data points from throughout 2012. The project's aim is to highlight for a broad audience the extraordinary scale of modern commercial shipping, the routes these huge vessels take around the world, the geographic spread of different types of cargo boats, and the amount of carbon dioxide they produce.",
    chartDescription:
      "The unique base map shows ocean depth and major rivers, while the ships can be viewed as a high-resolution animation of movements over time (the 'ships' view) or as a plot showing all the positions at once (the 'routes' view), optionally colour-coded by ship type. A Talkie voiceover with music introduction sets the scene and provides an explanatory tour of the map.",
    tools: [{ name: "javascript" }],
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 18,
    title: "Rhythm of Food",
    date: new Date(2016, 1),
    author: "M. Stefaner, Y. Vishnevsky, S. Rogers, A. Cairo et al.",
    url: "http://rhythm-of-food.net",
    img: [
      {
        full: "rhythm-food.png",
        zoom: "rhythm-food.png",
        chartId: ["heatmap"],
      },
    ],
    contextDescription:
      "An interactive explorer based on the weekly Google Trends data for hundreds of dishes and ingredients, gathered over 15 years. It allows investigating the seasons and rhythm of food around the world",
    chartDescription:
      "The main viz of this project is a radial diagram. One viz per ingredient. The color of each square is for the year. The distance to center (radius) is for the number of google search.",
    tools: [{ name: "javascript" }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 19,
    title: "The State of Javascript",
    date: new Date(2020, 1),
    author: "A. Wattenberger, S. Greif and R. Benitte",
    url: "https://2020.stateofjs.com/en-US/technologies/",
    img: [
      {
        full: "state-of-js.png",
        zoom: "state-of-js-zoom.png",
        chartId: ["connectedScatter"],
      },
    ],
    contextDescription:
      "The State of Js is a survey that describes how Javascript (a programing language) evolved in the past few years. In the chart below they describe what libraries are trending, and which one are slowly disappearing. The whole webpage is awesome and you should definitely take a look.",
    chartDescription:
      "My favorite grouped connected scatterplot! Each line goes from 2016 to 2020. A higher point means a technology has been used by more people, and a point further to the right means more users want to learn it; or have used it and would use it again.",
    tools: [
      {
        name: "javascript",
        link: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js",
      },
      {
        name: "d3.js",
        link: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js",
      },
    ],
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 20,
    title: "Quantifying the evolution of individual scientific impact",
    date: new Date(2017, 0),
    author: "Kim Albrecht",
    url: "sciencepaths.kimalbrecht.com",
    img: [
      {
        full: "scientific-impact.png",
        zoom: "scientific-impact-zoom.png",
        chartId: ["line", "ridgeline"],
      },
    ],
    contextDescription:
      "How does the impact of a scientist's work change over a scientific career? Does impact, arguably the most relevant performance measure, follow predictable patterns? Can we predict the timing of a scientist’s outstanding achievement? Kim checked the evolution of scientific author citation levels to answer those questions.<br/><br/>The result is called the <b>random impact rule</b>: the highest impact paper of a researcher can be anywhere in the sequence of papers!",
    chartDescription:
      "Each row is a scientist. From left to right, the first to the last paper of a scientist are arranged, ignoring their timing of publication. The line height shows the number of citation of the paper. The app has nice controls on top, including interactive histograms that I really like.",
    tools: [{ name: "javascript" }, { name: "d3.js" }],
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 21,
    title: "Rappers, Sorted by Size of Vocabulary",
    date: new Date(2019, 0),
    author: "Matthew Daniels",
    url: "https://pudding.cool/projects/vocabulary/index.html",
    img: [
      {
        full: "rapper-lyrics.png",
        zoom: "rapper-lyrics-zoom.png",
        chartId: ["scatter", "bubble", "circularPacking"],
      },
      {
        full: "rapper-lyrics-2.png",
        zoom: "rapper-lyrics-2-zoom.png",
        chartId: ["histogram"],
      },
    ],
    contextDescription:
      "A projects that compares the number of unique words used by some of the most famous artists in hip hop using each artist’s first 35,000 lyrics. Jedi Mind Tricks used 6424 unique words, compared to DMX that counts 2936.",
    chartDescription:
      "A 1 dimension scatterplot where the X axis shows the number of unique words and each item is an artist, represented by a circle and an avatar. The Y position is random, just using <a href='https://www.data-to-viz.com/caveat/boxplot.html>jittering</a> to avoid overlap.",
    tools: [{ name: "javascript" }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 22,
    title: "Shifting Parent Work Hours, Mom vs. Dad",
    date: new Date(2018, 0),
    author: "Nathan Yau",
    url: "https://flowingdata.com/2016/04/20/parent-work-hours/",
    img: [
      {
        full: "parent-work.png",
        zoom: "parent-work-zoom.png",
        chartId: ["histogram"],
      },
    ],
    contextDescription:
      " Is it more common these days for dads to spend time with kids and work around the house? If so, is time spent that much different from decades past? How do dads’ times compare to moms’ times? An answer based on the American Time Use Survey that show hours spent with unpaid housework and childcare against hours spent at a job by moms and dads.",
    chartDescription:
      "2 interactive histograms with animated transition between datasets and control buttons on top.",
    tools: [{ name: "javascript" }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 23,
    title: "Ukrain War: Poutine's assault organization",
    date: new Date(2022, 1),
    author: "Le Monde",
    url: "https://www.lemonde.fr/international/article/2022/02/25/guerre-en-ukraine-l-ordre-de-bataille-de-poutine_6115167_3210.html",
    img: [
      {
        full: "ukraine-attack-leMonde.jpeg",
        zoom: "ukraine-attack-leMonde-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "On the 24th of February Russian troops invaded Ukraine. <i>Le monde</i> created a full page on the topic based on a map of the area.",
    chartDescription:
      "Not really dataviz since this map does not display any data. But still interesting for design inspiration, notably for the whole page layout.",
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 24,
    title: "At least half a million refugees flee Ukraine",
    date: new Date(2022, 1),
    author: "The New York Times",
    url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
    img: [
      {
        full: "ukraine-migration-nyt.png",
        zoom: "ukraine-migration-nyt-zoom.png",
        chartId: ["map", "connection"],
      },
    ],
    contextDescription:
      "The New York Times covered the migration of Ukrainians fleeing the war with a very complete article full of migration maps.",
    chartDescription:
      "This snapshot shows a sankey diagram drawn on top of a map. Read the article for more map examples.",
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 25,
    title: "Big mac price",
    date: new Date(2021, 2),
    author: "Cédric Scherer",
    url: "https://www.r-graph-gallery.com/web-line-chart-with-labels-at-end-of-line.html",
    img: [
      {
        full: "big-mac-price.png",
        zoom: "big-mac-price-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "Compared to the financial crisis in 2008, how much more or less do you have to pay for a Big Mac today?",
    chartDescription:
      "A clean line chart allowing to compare the evolution of several groups. Note the clean inline legend that avoids the <a href='https://www.data-to-viz.com/caveat/spaghetti.html'>spaghetti effect</a>.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-line-chart-with-labels-at-end-of-line.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-line-chart-with-labels-at-line-end",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 26,
    title: "Rouble tumbles to record low",
    date: new Date(2022, 1),
    author: "The New York Times",
    url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
    img: [
      {
        full: "rouble-tumbles-low.png",
        zoom: "rouble-tumbles-low-zoom.png",
        chartId: ["line"],
      },
      {
        full: "rouble-tumbles-low.png",
        zoom: "rouble-tumbles-low-zoom-dark.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "A good proportion of the world countries have applied heavy sanctions to Russia following the Ukraine invasion. As a result the Rouble value is quickly decreasing.",
    chartDescription:
      "A line chart of the Ruble / USD exchange rate evolution. Two things are interesting here. Annotations are very clear and truly make a difference in the chart quality. The Y scale is inverted which is usually a bad thing, but works well here.",
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 27,
    title: "Change in common household types",
    date: new Date(2022, 1),
    author: "Nathan Yau",
    url: "https://flowingdata.com/2022/03/01/change-in-common-household-types-in-the-u-s/",
    img: [
      { full: "household.png", zoom: "household-zoom.png", chartId: ["area"] },
    ],
    contextDescription:
      "In the 1970s, the most common household type in the U.S. was a married couple with kids. But over time, as people wait longer to get married and have fewer kids (if any), it’s grown more common to live alone or with non-family.",
    chartDescription:
      "This project describes this kind of effect using an alluvial diagram, showing both the rank and the percentage of each household type over the years.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 28,
    title: "Decline in sex",
    date: new Date(2019, 3),
    author: "Washington Post",
    url: "https://www.washingtonpost.com/business/2019/03/29/share-americans-not-having-sex-has-reached-record-high/",
    img: [
      {
        full: "decline-sex.png",
        zoom: "decline-sex-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The share of Americans not having sex has reached a record high. The washington post made a full article on the topic, explaining why this is mainly due to young people which sounds scary to me.",
    chartDescription:
      "A simple timeseries line chart showing the evolution of 2 groups (male and female). Note the on-chart annotation of both the group names and the current values.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 29,
    title: "Student exchanges in Europe",
    date: new Date(2022, 2),
    author: "Benjamin Nowak",
    url: "https://www.washingtonpost.com/business/2019/03/29/share-americans-not-having-sex-has-reached-record-high/",
    img: [
      {
        full: "student-exchance-europe.png",
        zoom: "student-exchance-europe-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Erasmus is an exchange program allowing students to study abroad for a semester or more. This figure allows to see which countries are the most involved.",
    chartDescription:
      "The chart is a mirror barplot, showing both the number of outgoing and incoming students. I love the general layout and visual, even though I'm not sure about the opacity used to encode the year.",
    tools: [{ name: "R", link: "https://t.co/LgnyJ3w63Y" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 30,
    title: "Sentiment in Russian tweets",
    date: new Date(2022, 2),
    author: "The Economist",
    url: "https://www.economist.com/graphic-detail/2022/03/12/the-war-in-ukraine-has-made-russian-social-media-users-glum",
    img: [
      {
        full: "sentiment-russia-twitter.png",
        zoom: "sentiment-russia-twitter-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The war in Ukraine has made Russian social-media users glum. Posts on Twitter became far sadder than at the start of the covid-19 pandemic. A proof using sentiment analysis.",
    chartDescription:
      "A timeseries where evolution is represented using circles (average per day) and a line (7-day average). Having both information on the same figure is truly insightful. And the annotation of the outlier weeks help understand the full story.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 31,
    title: "Cat rescues by the London fire brigade",
    date: new Date(2021, 2),
    author: "Georgios Karamanis",
    url: "https://www.r-graph-gallery.com/web-time-series-and-facetting.html",
    img: [
      {
        full: "cat-rescues.png",
        zoom: "cat-rescues-zoom.png",
        chartId: ["line", "area"],
      },
    ],
    contextDescription:
      "How many cats are rescued by the London fire brigade each year? How does it compare with other animals? An answer with data, split by suburbs",
    chartDescription:
      "Each item of the small multiple is a suburb. For each, we quickly see the number of cats (blue line) and other animals (red lines). Coloring the area between both in blue or red makes it easy to compare both at a higher scale.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-time-series-and-facetting.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-time-series-and-facetting-with-matplotlib",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 32,
    title: "A world of language",
    date: new Date(2021, 8),
    author: "South China Morning Post",
    url: "https://www.scmp.com/infographics/article/1810040/infographic-world-languages",
    img: [
      {
        full: "world-of-language.png",
        zoom: "world-of-language-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "A deep look into the 7102 known languages alive in the world. What are the main ones? In which country are they spoken?",
    chartDescription:
      "A circular Voronoi diagram showing the importance of each language. So much information packed on the same figure, in a very eye-catching style.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 33,
    title: "Hong Kong and the Omicron variant",
    date: new Date(2022, 2),
    author: "the Financial Times",
    url: "https://www.scmp.com/infographics/article/1810040/infographic-world-languages",
    img: [
      {
        full: "hong-kong-omicron.png",
        zoom: "hong-kong-omicron-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "hong-kong-omicron-2.png",
        zoom: "hong-kong-omicron-zoom-2.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "Hong Kong’s vaccination rate has lagged far behind peer countries, especially among the most vulnerable. This article by the financial times goes deep into this matter and compares the situation with other countries.",
    chartDescription:
      "Some timeseries line chart with clean on-graph legends and a set of 3 stacked bar chart clearly showing how Hong-Kong differs to other countries.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 34,
    title: "Topography of Switzerland",
    date: new Date(2022, 2),
    author: "Tobias Stalder",
    url: "https://twitter.com/toeb18/status/1503129088663433219",
    img: [
      {
        full: "switzerland-topography.png",
        zoom: "switzerland-topography-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "A transect from the Swiss Alps over the Swiss lowlands to the Jura mountains.",
    chartDescription:
      "A very clean 3D map made with R with a minigraph, very clean and concise.",
    tools: [
      {
        name: "R",
        link: "https://twitter.com/toeb18/status/1503129095433080838/photo/1",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 35,
    title: "Palmer Penguins",
    date: new Date(2021, 2),
    author: "Tuo Wang",
    url: "https://www.r-graph-gallery.com/web-scatterplot-and-ggrepel.html",
    img: [
      {
        full: "palmer-penguins.png",
        zoom: "palmer-penguins-zoom.png",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "Analyse the features of 3 penguins species: show the relationship between bill length and flipper length",
    chartDescription:
      "A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with R and the tidyverse.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-scatterplot-and-ggrepel.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-text-repel-with-matplotlib",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 36,
    title: "Corruption and Human Development",
    date: new Date(2021, 2),
    author: "Claus O. Wilke",
    url: "https://www.r-graph-gallery.com/web-scatterplot-corruption-and-human-development.html",
    img: [
      {
        full: "corruption-hdi.png",
        zoom: "corruption-hdi-zoom.png",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "A scatterplot that shows the relationship between the Human Development Index and the Corruption Perceptions Index.",
    chartDescription:
      "A scatterplot with regression fit and automatic text repel. Relationship is striking.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-scatterplot-corruption-and-human-development.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-scatterplot-text-annotation-and-regression-matplotlib",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 37,
    title: "Penguin Radar",
    date: new Date(2021, 2),
    author: "Tuo Wang",
    url: "https://www.r-graph-gallery.com/web-radar-chart-with-R.html",
    img: [
      {
        full: "penguin-radar.png",
        zoom: "penguin-radar-zoom.png",
        chartId: ["radar"],
      },
    ],
    contextDescription:
      "Compares the bill length, bill debt, flipper length and body mass of 2 penguin species.",
    chartDescription:
      "A radar chart that compares the features of 3 groups for 4 numeric variables.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-radar-chart-with-R.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-radar-chart-with-matplotlib",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 38,
    title: "Hiking locations in Washington",
    date: new Date(2021, 2),
    author: "Tobias Stadler",
    url: "https://www.r-graph-gallery.com/web-circular-barplot-with-R-and-ggplot2.html",
    img: [
      {
        full: "hiking-washington.png",
        zoom: "hiking-washington-zoom.png",
        chartId: ["circularBarplot"],
      },
    ],
    contextDescription:
      "This Visualisation shows the cummulative length of tracks, the amount of tracks and the mean gain in elevation per location for a set of hikes in the Washington area.",
    chartDescription:
      "A circular barplot with clear group annotation, nice layout and great on-chart legend to explain what's shown.",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-circular-barplot-with-R-and-ggplot2.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-circular-barplot-with-matplotlib",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 39,
    title: "Child Labour",
    date: new Date(2021, 7),
    author: "The Economist",
    url: "https://www.r-graph-gallery.com/web-lineplots-and-area-chart-the-economist.html",
    img: [
      {
        full: "child-labour.png",
        zoom: "child-labour-zoom.png",
        chartId: ["line"],
      },
      {
        full: "child-labour.png",
        zoom: "child-labour-zoom-2.png",
        chartId: ["area"],
      },
    ],
    contextDescription: "A deep comparison of child labour across the globe.",
    chartDescription:
      "A line chart next to an area chart. Note that the first one is used for a percentage (does not make sense to add numbers up), when the second is used to a number where we are interested in the total number (stacking makes sense)",
    tools: [
      {
        name: "R",
        link: "https://www.r-graph-gallery.com/web-lineplots-and-area-chart-the-economist.html",
      },
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-lineplots-and-area-chart-the-economist",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 40,
    title: "Climate stripes",
    date: new Date(2018, 4),
    author: "Ed Hawkins",
    url: "https://showyourstripes.info/s/globe",
    img: [
      {
        full: "climate-stripes.png",
        zoom: "climate-stripes-zoom.png",
        chartId: ["heatmap"],
      },
    ],
    contextDescription:
      "Warming stripes reflect a minimalist style, conceived to use colour alone to avoid technical distractions and intuitively convey global warming trends to non-scientists.",
    chartDescription:
      "Warming stripes (sometimes referred to as climate stripes, climate timelines or stripe graphics are data visualization graphics that use a series of coloured stripes chronologically ordered to visually portray long-term temperature trends.",
    tools: undefined,
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 41,
    title: "Violin & Boxplot with ggplot2",
    date: new Date(2018, 4),
    author: "Yan Holtz",
    url: "https://www.data-to-viz.com/graph/violin.html",
    img: [
      {
        full: "violin-boxplot-ggplot2.png",
        zoom: "violin-boxplot-ggplot2-zoom.png",
        chartId: ["violin", "boxplot"],
      },
    ],
    contextDescription:
      "A boxplot can hide the real underlying distribution of a set of data. The violin chart is a great alternative.",
    chartDescription:
      "Combination of a violin plot with a boxplot. Sample size added on the x axis. Build with ggplot2.",
    tools: [
      { name: "R", link: "https://www.data-to-viz.com/graph/violin.html" },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 42,
    title: "Vaccine and FDA approval",
    date: new Date(2021, 7),
    author: "The Wall Street Journal",
    url: "https://www.wsj.com/articles/covid-19-vaccinations-rise-as-delta-variant-spreads-pfizer-receives-full-fda-approval-11629905741",
    img: [
      {
        full: "vaccine-fda-approval.png",
        zoom: "vaccine-fda-approval-zoom.png",
        chartId: ["waffle"],
      },
    ],
    contextDescription:
      "The whole planet is trying to get vaccinated. Some people don't want to. Does an FDA approval would convince them?",
    chartDescription: "Using 3 waffle charts to compare 3 proportions.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 43,
    title: "Violin chart - Seaborn",
    date: new Date(2018, 1),
    author: "Yan Holtz",
    url: "https://python-graph-gallery.com/violin-plot/",
    img: [
      {
        full: "violin-seaborn.png",
        zoom: "violin-seaborn-zoom.png",
        chartId: ["violin"],
      },
    ],
    contextDescription: "Random data are used here.",
    chartDescription:
      "This example just shows the default style of the Seaborn Python library.",
    tools: [
      { name: "python", link: "https://python-graph-gallery.com/violin-plot/" },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 44,
    title: "revenues compared to pre-pandemic",
    date: new Date(2018, 1),
    author: "The Wall Street Journal",
    url: "https://www.wsj.com/articles/how-the-biggest-companies-have-fared-during-the-covid-19-pandemic-11630229403?st=ntrtz9fpufqjchy&reflink=share_mobilewebshare",
    img: [
      {
        full: "revenu-pre-pandemic.png",
        zoom: "revenu-pre-pandemic-zoom.png",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "Covid19 Pandemic got a massive impact on some company revenues. This chart studies how revenues evolved during and after the pandemic.",
    chartDescription:
      "A Scatterplot that split the graph area in 4 sections, showing 4 potential behaviour of companies. As often, single data points are labeled to understand what are the most important data points.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 45,
    title: "Control of states",
    date: new Date(2021, 5),
    author: "Washington Post",
    url: "https://www.washingtonpost.com/politics/interactive/2021/redistricting-faq/",
    img: [
      {
        full: "control-of-states.png",
        zoom: "control-of-states-zoom.png",
        chartId: ["parallel"],
      },
    ],
    contextDescription:
      "How many states are controled by which party in the US. How did it change between 2010 and 2020?",
    chartDescription:
      "Two parallel charts showing the evolution of each political party, measured by state and by district.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 46,
    title: "Piano Notes",
    date: new Date(2022, 2),
    author: "Alice Feng",
    url: "https://www.behance.net/gallery/139799525/Piano-Notes",
    img: [
      {
        full: "piano-notes.png",
        zoom: "piano-notes-zoom.png",
        chartId: ["bubble"],
      },
    ],
    contextDescription:
      "A visualization of what parts of the piano keyboard are played the most in well-known classical music pieces.",
    chartDescription:
      "A bubble chart where the Y axis is a categoric variable. Very clean design, with an extensive legend.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 47,
    title: "The Art of the High Line",
    date: new Date(2016, 2),
    author: "Studio Terp",
    url: "https://www.studioterp.nl/the-art-of-the-high-line/",
    img: [
      {
        full: "art-of-the-high-line.png",
        zoom: "art-of-the-high-line-zoom.png",
        chartId: ["bubble"],
      },
    ],
    contextDescription:
      "<a href='https://www.thehighline.org'>The High Line</a> is a elevated linear park in New York that showcases the work of artists. This viz describes the artists that have been exposed there.",
    chartDescription:
      "This piece is mainly a circular barplot. But it manages to store a massive amount of information thanks to the inner circles supplementary charts.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 48,
    title: "Carbon Tax",
    date: new Date(2016, 2),
    author: "Studio Terp",
    url: "http://www.studioterp.nl/carbon-taxes-a-datavisualization-for-scientific-american/",
    img: [{ full: "carbon-tax.png", zoom: "carbon-tax-zoom.png", chartId: [] }],
    contextDescription:
      "This viz compares carbon tax features of several countries. It checks the revenue, the tax rate and the emmisioins portion covered by Tax.",
    chartDescription:
      "It's hard to classify this poster in a viz type. Each country is represented by several shapes, with shape size mapped to a numeric variable. Small multiples is used here to showcases all countries.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 49,
    title: "Squashing Malaria",
    date: new Date(2017, 2),
    author: "Beautiful News Daily",
    url: "https://informationisbeautiful.net/beautifulnews/1172-africa-squashing-malaria/",
    img: [
      {
        full: "squashing-malaria.png",
        zoom: "squashing-malaria-zoom.png",
        chartId: ["parallel"],
      },
    ],
    contextDescription:
      "90% of malaria cases occur in Africa. That’s 200m infections and 400,000 deaths, mainly children under the age of 5. But the numbers are falling.",
    chartDescription:
      "A slope chart showing the # of cases per 1000 people in 2007 and 2017 for several African countries. A good way to highlight the global decrease while ranking the countries.",
    tools: undefined,
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 50,
    title: "Cycling to work",
    date: new Date(2017, 2),
    author: "Beautiful News Daily",
    url: "https://informationisbeautiful.net/beautifulnews/614-cycling-to-work/",
    img: [
      {
        full: "cycling-to-work.png",
        zoom: "cycling-to-work-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "Cycling is getting more and more popular on planet earth. This viz checks what are the cities with most bicycle commuters.",
    chartDescription:
      "A circular packing chart with one level of information. Each bubble map is sized according to its proportion of bicycle commuters. I'm not a big fan of the gradient effect though.",
    tools: undefined,
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 51,
    title: "Global weather conditions",
    date: new Date(2013, 11),
    author: "Cameron Beccario",
    url: "https://earth.nullschool.net",
    img: [
      {
        full: "global-weather-conditions.png",
        zoom: "global-weather-conditions-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "An animated map of global weather conditions. Includes wind, waves, temperature and much more. Show real time data.",
    chartDescription:
      "An interactive map showing global flows. You can rotate and zoom the globe. I like how the webpage is viz focused, with an optional control panel to decide what to display.",
    tools: [{ name: "javascript", link: "https://github.com/cambecc/earth" }],
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 52,
    title: "Wind Map",
    date: new Date(2012, 9),
    author: "F. Viégas and M. Wattenberg ",
    url: "http://hint.fm/wind/",
    img: [
      { full: "wind-map.png", zoom: "wind-map-zoom.png", chartId: ["map"] },
    ],
    contextDescription:
      "A novel way to observe how wind blows on a geographical area. This work inspired Cameron Beccario to create the <a href='https://earth.nullschool.net'>Global Weather Conditions</a> app.",
    chartDescription:
      "Please read <a href='https://www.earthisland.org/journal/index.php/articles/entry/imagining-the-wind'>this article</a> that explains how this project was born and what impact it had.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 53,
    title: "Running stats",
    date: new Date(2020, 9),
    author: "Unknown",
    url: "https://analyticsindiamag.com/7-types-of-tableau-charts-graphs-to-make-your-data-visually-interactive/",
    img: [
      {
        full: "running-stats.png",
        zoom: "running-stats-zoom-1.png",
        chartId: ["line", "area"],
      },
      {
        full: "running-stats.png",
        zoom: "running-stats-zoom-2.png",
        chartId: ["histogram"],
      },
      {
        full: "running-stats.png",
        zoom: "running-stats-zoom-3.png",
        chartId: ["histogram"],
      },
      {
        full: "running-stats.png",
        zoom: "running-stats-zoom-4.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "A few vizzes giving running stats. I do not have more details on the project, this is just a snapshot",
    chartDescription:
      "I don't know much about this project, but wanted to show it for its slick design. Be careful, the radial barchart is definitely not a good viz type.",
    tools: undefined,
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 54,
    title: "Codebase visualization",
    date: new Date(2021, 9),
    author: "Amelia Wattenberger",
    url: "https://next.github.com/projects/repo-visualization/",
    img: [
      {
        full: "codebase-viz.png",
        zoom: "codebase-viz-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "A project by github that takes a repository and visualize its content. Each circle is a folder containing sub-folders, down until files.",
    chartDescription:
      "Two things I really love on this circular packing project: the way labels are set around each circles, and the scrolly-telling that works like a charm.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 55,
    title: "Where are Americans born",
    date: new Date(2022, 1),
    author: "Erin",
    url: "https://erdavis.com/2022/02/09/how-i-made-the-viral-map/",
    img: [
      {
        full: "american-born.png",
        zoom: "american-born-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "Where does citizen of each US state come from? Where they born in this state? Or are they from abroad?",
    chartDescription:
      "A small multiple map that quickly conveys a pretty complicated information. No wonders it became viral on <a href='https://twitter.com/erindataviz/status/1489009794245541888?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1489009794245541888%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Ferdavis.com%2F2022%2F02%2F09%2Fhow-i-made-the-viral-map%2F'>twitter</a>!",
    tools: [
      {
        name: "R",
        link: "https://erdavis.com/2022/02/09/how-i-made-the-viral-map/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 56,
    title: "Art, Women posing and upvotes",
    date: new Date(2021, 5),
    author: "Erin",
    url: "https://erdavis.com/2021/06/14/do-women-who-pose-with-their-art-on-reddit-get-more-upvotes/",
    img: [
      {
        full: "art-women-posing-1.png",
        zoom: "art-women-posing-zoom-1.png",
        chartId: ["line"],
      },
      {
        full: "art-women-posing-2.png",
        zoom: "art-women-posing-zoom-2.png",
        chartId: ["density"],
      },
    ],
    contextDescription:
      "Do women who pose with their art on Reddit get more upvotes? Erin gathered reddit data on the topic to proove that yes, posing with your art helps getting upvoted, especially if you're a woman.",
    chartDescription:
      "Erin's article is well written and vizzes are unusual and very well thought. A masterpiece of data analysis!",
    tools: [
      {
        name: "R",
        link: "https://erdavis.com/2021/06/14/do-women-who-pose-with-their-art-on-reddit-get-more-upvotes/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 57,
    title: "Obama’s 2013 Budget Proposal",
    date: new Date(2012, 1),
    author: "The New York Times",
    url: "https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html?",
    img: [
      {
        full: "obama-budget-proposal.png",
        zoom: "obama-budget-proposal-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "An interactive visualization of the Obama's budget proposal. A powerful way to see where the money should go based on Obama's opinion.",
    chartDescription:
      "An interactive circle packing chart with great tooltip. The transitions between viz types are very smooth and make it a delight to explore.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 58,
    title: "French presidential election",
    date: new Date(2022, 2),
    author: "Le Monde",
    url: "https://www.lemonde.fr/les-decodeurs/article/2022/02/22/presidentielle-2022-le-tableau-de-bord-des-parrainages-sondages-et-temps-de-parole_6114816_4355770.html",
    img: [
      {
        full: "french-presidential-election-1.png",
        zoom: "french-presidential-election-zoom-1.png",
        chartId: ["barplot"],
      },
      {
        full: "french-presidential-election-2.png",
        zoom: "french-presidential-election-zoom-2.png",
        chartId: ["scatter"],
      },
      {
        full: "french-presidential-election-3.png",
        zoom: "french-presidential-election-zoom-3.png",
        chartId: ["bubbleMap"],
      },
    ],
    contextDescription:
      "French presidential elections are happening soon. <i>Le Monde</i> wrote a in-depth article showing some of the candidate features: who talks the most on media, who's the richest, who has the best chances to win according to polls?",
    chartDescription:
      "A data-based article with clean design. I mainly selected it for the clean horizontal barplots that can probably be used on other projects.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 59,
    title: "The Spread of QAnon",
    date: new Date(2022, 2),
    author: "Cédric Scherer",
    url: "https://cemas.io/en/publikationen/q-vadis-the-spread-of-qanon-in-the-german-speaking-world/CeMAS_Q_Vadis_The_Spread_of_QAnon_in_the_German-Speaking_World.pdf",
    img: [
      {
        full: "spread-of-qanon-1.png",
        zoom: "spread-of-qanon-zoom-1.png",
        chartId: ["stream"],
      },
      {
        full: "spread-of-qanon-2.png",
        zoom: "spread-of-qanon-zoom-2.png",
        chartId: ["barplot"],
      },
      {
        full: "spread-of-qanon-3.png",
        zoom: "spread-of-qanon-zoom-3.png",
        chartId: ["area"],
      },
    ],
    contextDescription:
      "The central piece of a study on the spread of QAnon in the german-speaking world. It shows the amount of QAnon related messages exchanged on Telegram.",
    chartDescription:
      "A massive streamchart showing the raise of QAnon on private channels, with a spike next to the Storming of the Capitol. In the printed version this viz is folded in 4 parts.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 60,
    title: "Worst & Highest paid NBA player",
    date: new Date(2019, 11),
    author: "The Pudding",
    url: "https://pudding.cool/2019/12/real-mvp/",
    img: [
      {
        full: "worst-paid-nba-player.png",
        zoom: "worst-paid-nba-player-zoom.png",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "Using advanced NBA stats to rank player performance against pay.",
    chartDescription:
      "A colorfull scatterplot with gradient. Original design choices, especially when it comes to the axes.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 61,
    title: "Airports and world's megacities",
    date: new Date(2018, 6),
    author: "The Pudding",
    url: "https://pudding.cool/2018/07/airports/",
    img: [
      {
        full: "airport-world-megacities-1.png",
        zoom: "airport-world-megacities-zoom-1.png",
        chartId: ["connection"],
      },
      {
        full: "airport-world-megacities-2.png",
        zoom: "airport-world-megacities-zoom-2.png",
        chartId: ["barplot"],
      },
      {
        full: "airport-world-megacities-3.png",
        zoom: "airport-world-megacities-zoom-3.png",
        chartId: ["connectedScatter"],
      },
      {
        full: "airport-world-megacities-4.png",
        zoom: "airport-world-megacities-zoom-4.png",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "Biggest cities tend to have more departing flights per day. But some cities don't follow the trend. This data-based article tries to explain it.",
    chartDescription:
      "A set of charts following the same design, spread around a well-written article. I really like the mirror barplot and the clear annotations that make the vizs very insightful.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 62,
    title: "Eating alone",
    date: new Date(2017, 6),
    author: "The Pudding",
    url: "https://pudding.cool/2017/07/eating-alone/",
    img: [
      {
        full: "eating-alone-1.png",
        zoom: "eating-alone-zoom-1.png",
        chartId: ["scatter", "line"],
      },
      {
        full: "eating-alone-2.png",
        zoom: "eating-alone-zoom-2.png",
        chartId: ["lollipop"],
      },
    ],
    contextDescription:
      "An exploration of the dining habits and companions of Americans.",
    chartDescription:
      "A nicely animate scatterplot with linear trend. The page uses scrollytelling, progressively adding features to the chart as the story goes.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 63,
    title: "Rigid middle class?",
    date: new Date(2020, 7),
    author: "The Pudding",
    url: "https://pudding.cool/2020/08/income/",
    img: [
      {
        full: "rigid-middle-class.png",
        zoom: "rigid-middle-class-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "If you were to ask random Americans what income class they fall into, there’s a good chance they’ll say “middle class”. But what does that mean?",
    chartDescription:
      "Three colorfull barplots allowing to compare features of 3 groups. The article uses scrollytelling.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 64,
    title: "What is Congress tweeting about?",
    date: new Date(2020, 7),
    author: "The Pudding",
    url: "https://congress.pudding.cool",
    img: [
      {
        full: "congress-tweeting-1.png",
        zoom: "congress-tweeting-zoom-1.png",
        chartId: ["barplot", "treemap"],
      },
      {
        full: "congress-tweeting-2.png",
        zoom: "congress-tweeting-zoom-2.png",
        chartId: ["area", "line"],
      },
      {
        full: "congress-tweeting-3.png",
        zoom: "congress-tweeting-zoom-3.png",
        chartId: ["hexbin", "map"],
      },
    ],
    contextDescription:
      "An article describing the topics that dominate members of Congress public discourse.",
    chartDescription:
      "A complete app with various chart types showing different features of the dataset. Nice design and consistent styling and palettes among charts.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 65,
    title: "Switching between phone brands",
    date: new Date(2014, 11),
    author: "Nadieh Bremer",
    url: "https://nbremer.github.io/Chord-Diagram-Storytelling/",
    img: [
      {
        full: "switching-phone-1.png",
        zoom: "switching-phone-zoom-1.png",
        chartId: ["chordDiagram"],
      },
      {
        full: "switching-phone-2.png",
        zoom: "switching-phone-zoom-2.png",
        chartId: ["chordDiagram"],
      },
    ],
    contextDescription:
      "A study asked 2000 residents of the Netherlands about their mobile phone behavior. The respondents gave information about the brand of their current main phone, and the brand of their previous main phone, and their answers are visualized in this data story.",
    chartDescription:
      "Probably the best chord diagram example I know so far. The project incrementally add each part of the final figure to explain how it works.",
    tools: [
      {
        name: "d3.js",
        link: "https://github.com/nbremer/Chord-Diagram-Storytelling",
      },
    ],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 66,
    title: "Satellite Surge",
    date: new Date(2020, 1),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/sciam-satellite-surge/",
    img: [
      {
        full: "satellite-surge.png",
        zoom: "satellite-surge-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "A visualization showing the rise and recent surge of the number of satellites that orbit Earth for the “Graphic Science” magazine.",
    chartDescription:
      "A vertical streamgraph with a lot of annotations telling the story. Note that each group of the stream are divided in substreams that follow a 'bump chart' logic.",
    tools: [
      { name: "d3.js", link: undefined },
      { name: "R", link: undefined },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 67,
    title: "Digital Trackers",
    date: new Date(2019, 7),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/new-york-times-digital-trackers/",
    img: [
      {
        full: "digital-tracker.png",
        zoom: "digital-tracker-zoom.png",
        chartId: ["network", "circularPacking"],
      },
    ],
    contextDescription:
      "Visualizing the insane number of digital trackers that you gather when you browse the web for the new York times.",
    chartDescription:
      "This is not exactly a network chart but more a diagram representing the day of a regular internet user. The design is very clean and definitely worth a read.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 68,
    title: "Frontex: EU’s Deportation Machine",
    date: new Date(2019, 6),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/lighthouse-reports-frontex/",
    img: [
      {
        full: "frontex-deportation-1.png",
        zoom: "frontex-deportation-zoom-1.png",
        chartId: ["connection"],
      },
      {
        full: "frontex-deportation-1.png",
        zoom: "frontex-deportation-zoom-2.png",
        chartId: ["area"],
      },
    ],
    contextDescription:
      "Frontex is the EU coast and border agency. It is in charge of organizing the flights that send deportees back home. This viz shows this sad flow on the globe.",
    chartDescription:
      "The static version already does a great job at showing the flow thanks to subtle color gradients and icons. But the <a href='https://vimeo.com/351673775'>video</a> is definitely worth a look to, as it depict the acceleration of the process in another way.",
    tools: [
      { name: "d3.js", link: undefined },
      { name: "R", link: undefined },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 69,
    title: "Shareholder Report",
    date: new Date(2019, 1),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/adyen-report-2019/",
    img: [
      {
        full: "shareholder-report-1.png",
        zoom: "shareholder-report-zoom-1.png",
        chartId: ["sankey"],
      },
      {
        full: "shareholder-report-2.png",
        zoom: "shareholder-report-zoom-2.png",
        chartId: ["treemap"],
      },
      {
        full: "shareholder-report-3.png",
        zoom: "shareholder-report-zoom-3.png",
        chartId: ["waffle"],
      },
    ],
    contextDescription:
      "Some figures for a shareholder letter & annual report. Four extensive visuals about the income statement, costs, regional and FTE growth.",
    chartDescription:
      "Several chart types following the same design guidelines: sankey, treemap and waffle. I really like that they each have their own personal touch: sankey start with a gradient, treemap and waffle items have a 45° rotation.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 70,
    title: "Intangible Cultural Heritage",
    date: new Date(2018, 9),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/intangible-cultural-heritage/",
    img: [
      {
        full: "cultural-heritage.png",
        zoom: "cultural-heritage-zoom.png",
        chartId: ["network"],
      },
    ],
    contextDescription:
      "Since 2003 UNESCO safeguards an ever growing list of our Intangible Cultural Heritage and these days there are almost 500 unique cultural elements inscribed on the list.",
    chartDescription:
      "A network chart showing those cultural heritage items and their connections. The interactive version is <a href='https://ich.unesco.org/en/dive&display=constellation#tabs'>available here</a>.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 71,
    title: "Bussed out",
    date: new Date(2017, 11),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/bussed-out/",
    img: [
      {
        full: "bussed-out-1.png",
        zoom: "bussed-out-zoom-1.png",
        chartId: ["density"],
      },
      {
        full: "bussed-out-2.png",
        zoom: "bussed-out-zoom-2.png",
        chartId: ["bubbleMap"],
      },
      {
        full: "bussed-out-3.png",
        zoom: "bussed-out-zoom-3.png",
        chartId: ["arc"],
      },
    ],
    contextDescription:
      "Each year, US cities give thousands of homeless people one-way bus tickets out of town. An 18-month nationwide investigation by the Guardian reveals, for the first time, what really happens at journey’s end.",
    chartDescription:
      "A master piece of scrollytelling feature a wide range of viz types. I am a big fan of the vertical density chart with this flow diagram on the left, beautiful.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 72,
    title: "Baby spike",
    date: new Date(2017, 3),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/baby-spike/",
    img: [
      {
        full: "baby-spike.png",
        zoom: "baby-spike-zoom.png",
        chartId: ["density"],
      },
    ],
    contextDescription:
      "Visualizing the number of babies born across different time frames; from weeks down to the minute, to reveal the role of scheduling & intervention in births.",
    chartDescription:
      "Those density charts are highly customized. They are made circular to show the cyclic nature of the data. The distribution is also spread around the median line, instead of using 0 as a baseline.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 73,
    title: "Words in the Lord of the Rings",
    date: new Date(2016, 6),
    author: "Nadieh Bremer",
    url: "https://www.visualcinnamon.com/portfolio/words-lord-of-the-rings/",
    img: [
      {
        full: "lord-of-rings-words.png",
        zoom: "lord-of-rings-words-zoom.png",
        chartId: ["chordDiagram", "sankey"],
      },
    ],
    contextDescription:
      "In this visualization you can find out how many words a member of the lord of the rings has spoken at each different location throughout the trilogy.",
    chartDescription:
      "This chart is looking a lot like a chord diagram but has nodes in the center of the figures. Check the <a href='https://lotr.visualcinnamon.com'>interactive version</a> for a better exploration.",
    tools: [{ name: "d3.js", link: undefined }],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 74,
    title: "Annual working hours",
    date: new Date(2022, 3),
    author: "Ansgar Wolsing",
    url: "https://github.com/bydata/30DayChartChallenge/blob/main/2022/06/06-owid-slope.png",
    img: [
      {
        full: "annual-workinf-hours.png",
        zoom: "annual-workinf-hours-zoom.png",
        chartId: ["parallel"],
      },
    ],
    contextDescription:
      "In this visualization you can find out how many words a member of the lord of the rings has spoken at each different location throughout the trilogy.",
    chartDescription:
      "Just a clean parallel chart. Great way to legend the chart using an inline color in the chart explanation on top.",
    tools: [
      {
        name: "R",
        link: "https://github.com/bydata/30DayChartChallenge/blob/main/2022/06/06-owid-slope.png",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 75,
    title: "FM Radios",
    date: new Date(2020, 3),
    author: "Erin",
    url: "https://erdavis.com/2020/01/04/visualizing-the-geography-of-fm-radio/",
    img: [
      {
        full: "fm-radios-map.png",
        zoom: "fm-radios-map-zoom.png",
        chartId: ["bubbleMap", "map"],
      },
    ],
    contextDescription:
      "Checking where FM radios are broadcasting from, split by type.",
    chartDescription:
      "Probably more data art than data viz but I very like the global style of this map.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 76,
    title: "Upvotes are beautiful",
    date: new Date(2020, 2),
    author: "Erin",
    url: "https://erdavis.com/2020/03/17/6-weeks-of-activity-on-dataisbeautiful-also-coronavirus/",
    img: [
      {
        full: "upvotes-are-beautiful.png",
        zoom: "upvotes-are-beautiful-zoom.png",
        chartId: ["line", "connectedScatter", "timeseries"],
      },
    ],
    contextDescription:
      "Some awesome viz are posted on Reddit every day, on a channel called <a href='https://www.reddit.com/r/dataisbeautiful/'>DataIsBeautiful</a>. This viz checks how popular each viz became for a month. Only a few per day make it to popularity!",
    chartDescription:
      "This is a very specific grouped line chart. There are many groups. The value can only increase and data is recorded for 36 hours only. It results in a very original shape. The annotation on top allow to learn what titles where the most popular.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 77,
    title: "Hidden logic of cities",
    date: new Date(2019, 8),
    author: "Erin",
    url: "https://erdavis.com/2019/09/20/the-beautiful-hidden-logic-of-cities-worldwide/",
    img: [
      {
        full: "hidden-logic-of-cities.png",
        zoom: "hidden-logic-of-cities-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "Driving around your city, you’re probably somewhat aware of Avenues and Boulevards and Streets and Roads and so on. This project aims at showing where each type takes place.",
    chartDescription:
      "Those map are just representing what kind of area each place is (street, place, river..). A bunch of cities are available as prints <a href='https://society6.com/erdavis'>here</a>.",
    tools: [{ name: "R", link: "https://github.com/erdavis1/RoadColors" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 78,
    title: "Mapping road intersections",
    date: new Date(2020, 6),
    author: "Erin",
    url: "https://erdavis.com/2020/07/06/how-common-are-roundabouts-plus-a-bunch-of-other-maps/",
    img: [
      {
        full: "road-intersections.png",
        zoom: "road-intersections-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "A project that maps the 34 million road intersections in Europe. Visit the project to see other great images about roundabouts and empty places.",
    chartDescription:
      "It's important to understand that the process results in a population density map. But the “city lights from space” + “starry sky” effect is definitely working here.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 79,
    title: "Reading list",
    date: new Date(2020, 6),
    author: "Erin",
    url: "https://erdavis.com/2022/01/04/my-2021-in-reading/",
    img: [
      {
        full: "reading-list.png",
        zoom: "reading-list-zoom.png",
        chartId: ["line", "timeseries"],
      },
    ],
    contextDescription:
      "The author read a bunch of book in 2021, and track the progress of each book along the year. This viz allows to see which book she was reading at each period of the year.",
    chartDescription:
      "In my opinion this is a very clever way to represent this dataset. It allows to have a very global vision of the year, and to see which book behaviour. Check how Sapiens became a struggle, I did not finish it either!",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 80,
    title: "Genome collection",
    date: new Date(2021, 6),
    author: "Maarten Lambrechts",
    url: "https://www.maartenlambrechts.com/2021/07/02/visualizing-a-genome-collection-with-cactustrees.html",
    img: [
      {
        full: "genome-collection-1.png",
        zoom: "genome-collection-zoom-1.png",
        chartId: ["dendrogram"],
      },
      {
        full: "genome-collection-2.png",
        zoom: "genome-collection-zoom-2.png",
        chartId: ["network"],
      },
      {
        full: "genome-collection-3.png",
        zoom: "genome-collection-zoom-3.png",
        chartId: ["edgeBundling", "network"],
      },
    ],
    contextDescription:
      "How do you visualize a genome collection of more than 44.000 soil microbes? A project that takes gene sequences of different kinds of soil organisms, and tries to find species and specimens that are biologically active against crop pests.",
    chartDescription:
      "This final piece of this project is a <a href='http://ceur-ws.org/Vol-1947/paper05.pdf'>Cactus Trees</a> visualization, a kind I did not know until today. The author explains the full process leading there, an interesting read and some unconventional shapes.",
    tools: [
      { name: "R", link: undefined },
      { name: "d3.js", link: undefined },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 81,
    title: "Bundling on map",
    date: new Date(2021, 6),
    author: "Holten et al.",
    url: "https://www.data-to-viz.com/graph/edge_bundling.html",
    img: [
      {
        full: "map-bundling.png",
        zoom: "map-bundling-zoom.png",
        chartId: ["map", "edgeBundling", "connection"],
      },
    ],
    contextDescription:
      "This figure is part of a paper called 'Force-Directed Edge Bundling for Graph Visualization'. It represents the US airlines connections and studies a variety of bundling algorithms.",
    chartDescription:
      "You can read the complete research paper <a href='https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.212.7989&rep=rep1&type=pdf'>here</a>, that compares different values for the bundling. It shows very well how useful can be bundling.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 82,
    title: "Co-autorship network",
    date: new Date(2018, 6),
    author: "Yan Holtz",
    url: "https://www.data-to-viz.com/graph/arc.html",
    img: [
      {
        full: "co-autorship-network.png",
        zoom: "co-autorship-network-zoom.png",
        chartId: ["arc"],
      },
    ],
    contextDescription:
      "An example showing the co-authorship network of a researcher. Vincent Ranwez is author of several scientific publications and counts more than 100 co-authors. How are those co-authors interconnected?",
    chartDescription:
      "Vincent Ranwez has about 100 co-authors, all represented by a node on the following chart. If two people have already been on the same paper, they are linked by an arc.",
    tools: [{ name: "R", link: "https://www.data-to-viz.com/graph/arc.html" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 83,
    title: "Metal recovery",
    date: new Date(2012, 6),
    author: "Golev et al.",
    url: "https://www.data-to-viz.com/graph/sankey.html",
    img: [
      {
        full: "metal-recovery.png",
        zoom: "metal-recovery-zoom.png",
        chartId: ["sankey"],
      },
    ],
    contextDescription:
      "A sankey diagram showing the flow of metals in Australia. Import, Export, waste, all the in and out are included.",
    chartDescription: "Clean and un-cluttered design for this Sankey diagram.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 84,
    title: "Migration flow",
    date: new Date(2018, 6),
    author: "Gui J. Abel",
    url: "https://www.data-to-viz.com/graph/chord.html",
    img: [
      {
        full: "migration-flow.png",
        zoom: "migration-flow-zoom.png",
        chartId: ["chordDiagram"],
      },
    ],
    contextDescription:
      "Everyday, people leave a country to join another, creating migration flows. This img is a reproduction of a figure from this <a href='https://onlinelibrary.wiley.com/doi/abs/10.1111/imre.12327'>scientific paper</a> that studies those flows.",
    chartDescription:
      "An insightful chord diagram showing migration flows between continent. I really like how easy it is to understand the direction of the flow thanks to the arrow and the start vs end position shift of the connection.",
    tools: [
      { name: "R", link: "https://www.data-to-viz.com/graph/chord.html" },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 85,
    title: "EU Regions",
    date: new Date(2019, 3),
    author: "Maarten Lambrechts",
    url: "https://pudding.cool/2019/04/eu-regions/",
    img: [
      {
        full: "eu-regions-1.png",
        zoom: "eu-regions-zoom-1.png",
        chartId: ["map", "choropleth"],
      },
      {
        full: "eu-regions-2.png",
        zoom: "eu-regions-zoom-2.png",
        chartId: ["lollipop", "scatter"],
      },
    ],
    contextDescription:
      "A in-depth analysis of the european regions. It tries to explain why Budapest, Warsaw, and Lithuania split themselves in two.",
    chartDescription:
      "The choropleth map presented in this scrolltelling article is very clean, and so are the animations telling the story. Definitely worth checking the whole <a href='https://pudding.cool/2019/04/eu-regions/'>interactive project</a>, at least for the choropleth to lollipop transition.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 86,
    title: "Animated treemap",
    date: new Date(2019, 3),
    author: "Maarten Lambrechts",
    url: "https://themasites.pbl.nl/o/duurzaam-voedsel/",
    img: [
      {
        full: "animated-treemap.png",
        zoom: "animated-treemap-zoom.png",
        chartId: ["treemap"],
      },
    ],
    contextDescription:
      "Not sure about the context of this chart, it's all written in flamish 😀 .",
    chartDescription:
      "Clean treemap with illustrations. The transition between dataset is nice in the first tries, but then feels a bit long when you keep playing with it.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 87,
    title: "Eurosearch song contest",
    date: new Date(2019, 3),
    author: "Maarten Lambrechts",
    url: "https://googletrends.github.io/eurosearch-song-contest/",
    img: [
      {
        full: "eurosearch-song-contest.png",
        zoom: "eurosearch-song-contest-zoom.png",
        chartId: ["map", "hexbin"],
      },
    ],
    contextDescription:
      "What if Google searches were used to award points in the Eurovision Song Contest? What countries would make the final and who would cry victory?",
    chartDescription:
      "Many countries are small, sometimes barely visible on the map. But they're value is worth as much as big countries. This article suggests to squarify Europe to put all countries on the same scale.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 88,
    title: "The 200+ beer brands",
    date: new Date(2015, 9),
    author: "Maarten Lambrechts",
    url: "https://www.maartenlambrechts.com/2015/10/16/interactive-the-200-beer-brands-of-sab-inbev.html",
    img: [
      {
        full: "the-200-beer-brands.png",
        zoom: "the-200-beer-brands-zoom.png",
        chartId: ["dendrogram"],
      },
    ],
    contextDescription:
      "The merging of AB InBev and SABMiller creates a brewing giant, more than one third of all beer worldwide will be produced by just one company. Here is an overview of all the beers that are concerned.",
    chartDescription:
      "This is a radial dendrogram, where beers are subdivided in continent and country. Fun interactive touch: hovering a beer makes you see the bottle. Made me thirsty 🌴 !",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 89,
    title: "Who speaks when in Shakespeare's MacBeth?",
    date: new Date(2022, 3),
    author: "Ansgar Wolsing",
    url: "https://github.com/bydata/30DayChartChallenge/tree/main/2022/10",
    img: [
      {
        full: "who-speaks-in-shakespeare.png",
        zoom: "who-speaks-in-shakespeare-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "Distribution of speech share (number of words) per character in each scene. Acts are separated with vertical lines.",
    chartDescription: "A dark mode streamgraph with clean annotations.",
    tools: [
      {
        name: "R",
        link: "https://github.com/bydata/30DayChartChallenge/tree/main/2022/10",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 90,
    title: "Mortality and mental disorders",
    date: new Date(2018, 3),
    author: "Yan Holtz",
    url: "https://holtzy.github.io/Mortality/",
    img: [
      {
        full: "mortality-and-mental-disorders-1.png",
        zoom: "mortality-and-mental-disorders-zoom-1.png",
        chartId: ["line"],
      },
      {
        full: "mortality-and-mental-disorders-2.png",
        zoom: "mortality-and-mental-disorders-zoom-2.png",
        chartId: ["lollipop"],
      },
      {
        full: "mortality-and-mental-disorders-3.png",
        zoom: "mortality-and-mental-disorders-zoom-3.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "An interactive webpage that goes along with a <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(19)32316-5/fulltext'>scientific publication</a>. The goal was to study the links between mortality rates and mental disorders.",
    chartDescription:
      "The webpage includes several chart types, all with buttons allowing to control what part of the dataset is displayed. It is a mix between a data storytelling and a data exploration tool.",
    tools: [{ name: "d3.js", link: "https://github.com/holtzy/Mortality" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 91,
    title: "The World Mental Health Survey",
    date: new Date(2018, 3),
    author: "Yan Holtz",
    url: "https://holtzy.github.io/Mortality/",
    img: [
      {
        full: "world-mental-health-survey-1.png",
        zoom: "world-mental-health-survey-zoom-1.png",
        chartId: ["heatmap"],
      },
      {
        full: "world-mental-health-survey-2.png",
        zoom: "world-mental-health-survey-zoom-2.png",
        chartId: ["barplot"],
      },
      {
        full: "world-mental-health-survey-3.png",
        zoom: "world-mental-health-survey-zoom-3.png",
        chartId: ["sankey"],
      },
      {
        full: "world-mental-health-survey-4.png",
        zoom: "world-mental-health-survey-zoom-4.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "A set of data visualization on comorbidity between mental disorders. This is a webpage that goes along this scientific publication, allowing readers to explore the data themselves.",
    chartDescription:
      "The webpage includes several chart types, all with buttons allowing to control what part of the dataset is displayed. It is a mix between a data storytelling and a data exploration tool.",
    tools: [
      {
        name: "d3.js",
        link: "https://github.com/holtzy/Como-in-World-Heath-Survey",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 92,
    title: "End of the Covid-19 pandemic",
    date: new Date(2020, 3),
    author: "Mc Kinsey",
    url: "https://www.mckinsey.com/industries/healthcare-systems-and-services/our-insights/when-will-the-covid-19-pandemic-end",
    img: [
      {
        full: "end-of-covid-pandemic-1.png",
        zoom: "end-of-covid-pandemic-zoom-1.png",
        chartId: ["scatter"],
      },
      {
        full: "end-of-covid-pandemic-2.png",
        zoom: "end-of-covid-pandemic-zoom-2.png",
        chartId: ["line"],
      },
      {
        full: "end-of-covid-pandemic-3.png",
        zoom: "end-of-covid-pandemic-zoom-3.png",
        chartId: ["heatmap"],
      },
      {
        full: "end-of-covid-pandemic-4.png",
        zoom: "end-of-covid-pandemic-zoom-4.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Mc Kinsey regularly post updates on the covid situation, especially concerning future potential trends. Luckily this report is full of nice visuals.",
    chartDescription:
      "It's great to see such a variety of vizzes in a business report. They are very epurated and all follow the same style guideline which make them worth sharing here.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 93,
    title: "French folks migration",
    date: new Date(2018, 3),
    author: "Etienne Come",
    url: "https://www.comeetie.fr/galerie/wind/",
    img: [
      {
        full: "french-folks-migration.png",
        zoom: "french-folks-migration-zoom.png",
        chartId: ["map", "connection"],
      },
    ],
    contextDescription:
      "A migration map showing how french people are moving inside their country. What's really interesting here is that you can select a subset of the population based on sex or work category. Stunning result!",
    chartDescription:
      "This migration map is very much inspired from the wind map of Tobler et al. that is also feature in dataviz-inspiration.com.<br>Note: the static visual is disappointing but the animated version is mesmerizing!",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 94,
    title: "Transphobic hate crimes in Sweden",
    date: new Date(2022, 0),
    author: "Georgios Karamanis",
    url: "https://karaman.is/blog/2022/1/tidytuesday-20221",
    img: [
      {
        full: "transphobic-crimes-sweden.png",
        zoom: "transphobic-crimes-sweden-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Reported crimes that the police classified as hate crimes and where killer identified hate as the underlying motive.",
    chartDescription: "A simple yet clean horizontal barplot.",
    tools: [
      {
        name: "R",
        link: "https://github.com/gkaramanis/tidytuesday/tree/master/2022/2022-week_01",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 95,
    title: "Visit Vincent",
    date: new Date(2022, 4),
    author: "Julia Borsi",
    url: "https://public.tableau.com/app/profile/j.lia.borsi5912/viz/VisitVincent/VisitVincent",
    img: [
      {
        full: "visit-vincent.png",
        zoom: "visit-vincent-zoom.png",
        chartId: ["map", "sankey"],
      },
    ],
    contextDescription:
      "St Vincent and the Grenadines is a southern Caribbean island country. The country is made of 32 islands, only 9 of them are actually inhabited. It is a tropical paradise visited by many people.",
    chartDescription:
      "The project is a mix between a map of the country and a sankey diagram.",
    tools: [
      {
        name: "tableau",
        link: "https://public.tableau.com/app/profile/j.lia.borsi5912/viz/VisitVincent/VisitVincent",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 96,
    title: "The new normal",
    date: new Date(2021, 4),
    author: "Alberto Cairo",
    url: "https://public.tableau.com/app/profile/j.lia.borsi5912/viz/VisitVincent/VisitVincent",
    img: [
      {
        full: "the-new-normal-1.png",
        zoom: "the-new-normal-zoom-1.png",
        chartId: ["line"],
      },
      {
        full: "the-new-normal-2.png",
        zoom: "the-new-normal-zoom-2.png",
        chartId: ["line"],
      },
      {
        full: "the-new-normal-3.png",
        zoom: "the-new-normal-zoom-3.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "This visualization uses Google Trends to explore shopping interest for various products before and during the Covid-19 pandemic.",
    chartDescription:
      "A scrollytelling article mainly based on line charts, and using small multiple to explore a high number of groups in an efficient manner.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 97,
    title: "Orion",
    date: new Date(2022, 4),
    author: "Orion team",
    url: "https://setproduct.com/orion/templates",
    img: [
      {
        full: "orion-figma-template-1.png",
        zoom: "orion-figma-template-zoom-1.png",
        chartId: ["radar"],
      },
      {
        full: "orion-figma-template-2.png",
        zoom: "orion-figma-template-zoom-2.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "Orion is a Figma plugin to quickly embed chart templates into a design system.",
    chartDescription:
      "I'm not really a fan of most of the viz that are often, but I selected this project for their 'futuristic' style that can be useful to mimick.",
    tools: undefined,
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 98,
    title: "League of legend analytics",
    date: new Date(2022, 3),
    author: "Kris Akerstrom",
    url: "http://akerstrom.co.uk/league-of-legends-analytics-dashboard/",
    img: [
      {
        full: "league-of-legends-analytics-1.png",
        zoom: "league-of-legends-analytics-zoom-1.png",
        chartId: ["radar"],
      },
      {
        full: "league-of-legends-analytics-2.png",
        zoom: "league-of-legends-analytics-zoom-2.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "An analytics dashboard design to show your stats and help you improve at League of Legends.",
    chartDescription:
      "What I find interesting here is the 'futuristic' design: dark mode, flashy & glowy colors with gradients.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 99,
    title: "Dynamic planning",
    date: new Date(2019, 1),
    author: "César Neri",
    url: "https://cesarneri.com/pages/dynamicPlanning.html",
    img: [
      {
        full: "dynamic-planning-1.png",
        zoom: "dynamic-planning-zoom-1.png",
        chartId: ["barplot"],
      },
      {
        full: "dynamic-planning-2.png",
        zoom: "dynamic-planning-zoom-2.png",
        chartId: ["radar"],
      },
    ],
    contextDescription:
      "Dynamic Planning is a proof of concept for a SaaS planning platform that allows for data-driven decisions based on live building occupancy. In its current state, it is a data visualization dashboard that connects sensor data and institutional datasets to a building information model (BIM) in order to track an organization's planning goals.",
    chartDescription:
      "A set of viz designed for branding. Most of them cannot be used as-is in a dataviz project but there are some design inspiration to get.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 100,
    title: "50 billions birds",
    date: new Date(2021, 1),
    author: "Léa Desrayaud",
    url: "https://www.epsiloon.com",
    img: [
      {
        full: "fifty-billions-birds.png",
        zoom: "fifty-billions-birds-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "There are 50 billions birds on this planet. The epsiloon mag (science popularization magazine) made a full page about bird classificatio, giving a pretty insightful result.",
    chartDescription:
      "A circular packing chart showing the main chart families and their importance in term of number of animals. Annotation are in french but I love stories that are told around a chart like this.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 101,
    title: "Marine organism biomass",
    date: new Date(2021, 1),
    author: "Léa Desrayaud",
    url: "https://www.epsiloon.com",
    img: [
      {
        full: "marine-biomass.png",
        zoom: "marine-biomass-zoom.png",
        chartId: ["circularBarplot", "histogram"],
      },
    ],
    contextDescription:
      "An infographic studying the biomass of marine organisms. It basically split organisms by size buckets, and check their total weights. Surprisingly, it's always clost to 1 gigatonne!",
    chartDescription:
      "A circular barplot showing the total biomass of each organism size bucket. Interesting to see that a lot of information has been added to it: circles to show the recent evolution of the values, stacking to split the value by organism type.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 102,
    title: "Microbiota of big cities",
    date: new Date(2021, 1),
    author: "Léa Desrayaud",
    url: "https://www.epsiloon.com",
    img: [
      {
        full: "microbiota-big-cities.png",
        zoom: "microbiota-big-cities-zoom.png",
        chartId: ["treemap"],
      },
    ],
    contextDescription:
      "Each city has its own microbiota. Researchers took samples in some major city metro stations. The viz checks which micro-organism is present in which city.",
    chartDescription:
      "Six treemaps allowing to understand and compare the behavior of 6 cities. The viz allows to understand how diverse the microbiota is in each city, but it's still hard to compare one specific specie across cities.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 103,
    title: "How cancer kills mammals",
    date: new Date(2021, 1),
    author: "Léa Desrayaud",
    url: "https://www.epsiloon.com",
    img: [
      {
        full: "cancer-mammals.png",
        zoom: "cancer-mammals-zoom.png",
        chartId: ["dendrogram"],
      },
    ],
    contextDescription:
      "When a mammal dies, it is about 5% of the time because of cancer. This inforgraphic checks which kind of mammal is more prone to get cancer and shows how spread this disease is.",
    chartDescription:
      "This viz is a dendrogram showing the classification of mammals. The distance to center of each node provides its life expectancy, and the node features (size and color) gives more info on the specie. All of that makes the figure very insightful imo.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 104,
    title: "What kills who in G.o.T.",
    date: new Date(2021, 1),
    author: "Vivek",
    url: "https://stateastic.home.blog/2022/04/04/30-days-30-charts-challenge/",
    img: [
      {
        full: "what-kills-who-got.png",
        zoom: "what-kills-who-got-zoom.png",
        chartId: ["sankey"],
      },
    ],
    contextDescription:
      "How different Houses of Game Of Thrones killed?. A project part of the <a href='https://twitter.com/30daychartchall?lang=en'>30 days 30 charts challenge</a>",
    chartDescription:
      "A sankey diagram with just 1 origin and 1 destination. I like how it highlights that most murders happened from a dragon.",
    tools: [
      {
        name: "python",
        link: "https://github.com/probablyvivek/Code/blob/main/sankey.ipynb",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 105,
    title: "1M Covid deaths",
    date: new Date(2022, 4),
    author: "Tina Reed and al.",
    url: "https://www.axios.com/one-million-us-covid-19-deaths",
    img: [
      {
        full: "1M-covid-deaths.png",
        zoom: "1M-covid-deaths-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "We are in 2022 and the U.S. has reached 1 million deaths even as COVID has faded from the headlines. At this grim milestone, this project sought to refocus on the scale of loss suffered.",
    chartDescription:
      "Authors used growing rectangles to make us understand more the scale of numbers. There is a traditional line chart at the bottom right, but the big rectangles make the data more 'alive'.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 106,
    title: "Global Carbon Footprint",
    date: new Date(2011, 3),
    author: "Stanford Kay",
    url: "https://see.isbscience.org/wp-content/uploads/files/mmw_CO2footprint_111510.pdf",
    img: [
      {
        full: "global-carbon-footprint.png",
        zoom: "global-carbon-footprint-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "The design depicts global carbon emissions by country, colour-coded by continent and proportional to the amount of emissions. The arrangement of the spheres beautifully pays off the carbon footprint metaphor with a critical sense of scale.",
    chartDescription:
      "This is a circular packing chart with very specific shape for the root node. It makes the visualization shine, and made it a dataviz well-known masterpiece.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 107,
    title: "Madagascar Relief Map",
    date: new Date(2022, 4),
    author: "@researchremora",
    url: "https://twitter.com/researchremora/status/1527361112022593538",
    img: [
      {
        full: "madagascar-relief-map.png",
        zoom: "madagascar-relief-map-zoom.png",
        chartId: ["map"],
      },
      {
        full: "madagascar-relief-map-2.png",
        zoom: "madagascar-relief-map-2-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "Part of a project called '#rayshader adventures, an #rstats tale'. Many countries have their equivalent in the project. It is made with <a href='https://www.rayshader.com'>rayshader</a>, an open source package for producing 2D and 3D data visualizations in R",
    chartDescription:
      "A map showing the elevation of each part of Madagascar, with an eye catching color palette.",
    tools: [
      {
        name: "R",
        link: "https://twitter.com/researchremora/status/1418392590244892673",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 108,
    title: "How I've spent my time",
    date: new Date(2022, 1),
    author: "Alli Torban",
    url: "https://twitter.com/researchremora/status/1527361112022593538",
    img: [
      {
        full: "how-i-have-spent-my-time.png",
        zoom: "how-i-have-spent-my-time-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "A visual representation on how Alli spent here time through her life, split by categories like caretaking, leisure, work and more. Inspired by <a href='https://www.carniklirs.com/project/spare-time-over-a-lifetime'>Carni Klirs</a> work.",
    chartDescription:
      "A great streamgraph, totally adapted at showing the evolution of each category through time in a flowing style. I really like the texture employed here, giving it a personal nature.",
    tools: [{ name: "rawGraphs", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 109,
    title: "Spare time over a life time",
    date: new Date(2017, 1),
    author: "Carni Klirs",
    url: "https://www.carniklirs.com/project/spare-time-over-a-lifetime",
    img: [
      {
        full: "how-i-have-spent-my-time-carni.png",
        zoom: "how-i-have-spent-my-time-carni-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "A visual representation on how Carni spent his time through his life, split by categories like time  wasters, career and more.",
    chartDescription:
      "Pretty insightful streamgraph. The first one afaik showing the evolution of one's life activities.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 110,
    title: "World Resources Report",
    date: new Date(2022, 1),
    author: "Carni Klirs",
    url: "https://www.carniklirs.com/project/spare-time-over-a-lifetime",
    img: [
      {
        full: "world-resources-report-1.png",
        zoom: "world-resources-report-1-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "world-resources-report-2.png",
        zoom: "world-resources-report-2-zoom.png",
        chartId: ["sankey"],
      },
      {
        full: "world-resources-report-3.png",
        zoom: "world-resources-report-3-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "world-resources-report-4.png",
        zoom: "world-resources-report-4-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The <a href='https://research.wri.org/wrr-food'>World Resource Institute</a> (WRI) studies how to create a sustainable food future. It published a final report giving solutions to ensure the world can feed 10 billion people by 2050 in a sustainable way. It contains many great vizs.",
    chartDescription:
      "Several charts are available in the <a href='https://research.wri.org/wrr-food'>report</a>. You can also find them in <a href='https://www.carniklirs.com/project/creating-a-sustainable-food-future'>Carni's portfolio</a>.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 111,
    title: "Untitled-Ui",
    date: new Date(2022, 1),
    author: "untitledUi",
    url: "https://www.untitledui.com",
    img: [
      {
        full: "untitled-ui-1.png",
        zoom: "untitled-ui-1-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "untitled-ui-2.png",
        zoom: "untitled-ui-2-zoom.png",
        chartId: ["line"],
      },
      {
        full: "untitled-ui-3.png",
        zoom: "untitled-ui-3-zoom.png",
        chartId: ["donut"],
      },
      {
        full: "untitled-ui-4.png",
        zoom: "untitled-ui-4-zoom.png",
        chartId: ["radar"],
      },
    ],
    contextDescription:
      "<a href='https://www.untitledui.com'>Untitled UI</a> is the largest UI kit and design system for Figma in the world. Some of its components are dataviz related.",
    chartDescription:
      "Some charts of this design system are worth a read for inspiration. I like the use of gradients that can make it look modern.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 112,
    title: "Datylon",
    date: new Date(2022, 4),
    author: "Datylon",
    url: "https://insights.datylon.com/stories",
    img: [
      {
        full: "datylon-1.png",
        zoom: "datylon-1-zoom.png",
        chartId: ["scatter"],
      },
      {
        full: "datylon-2.png",
        zoom: "datylon-2-zoom.png",
        chartId: ["pie", "donut"],
      },
      {
        full: "datylon-3.png",
        zoom: "datylon-3-zoom.png",
        chartId: ["treemap"],
      },
      { full: "datylon-4.png", zoom: "datylon-4-zoom.png", chartId: ["donut"] },
      {
        full: "datylon-5.png",
        zoom: "datylon-5-zoom.png",
        chartId: ["lollipop"],
      },
      {
        full: "datylon-6.png",
        zoom: "datylon-6-zoom.png",
        chartId: ["heatmap"],
      },
      {
        full: "datylon-7.png",
        zoom: "datylon-7-zoom.png",
        chartId: ["scatter", "bubble"],
      },
      {
        full: "datylon-8.png",
        zoom: "datylon-8-zoom.png",
        chartId: ["density"],
      },
      {
        full: "datylon-9.png",
        zoom: "datylon-9-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "datylon-10.png",
        zoom: "datylon-10-zoom.png",
        chartId: ["heatmap"],
      },
      {
        full: "datylon-11.png",
        zoom: "datylon-11-zoom.png",
        chartId: ["lollipop"],
      },
      {
        full: "datylon-12.png",
        zoom: "datylon-12-zoom.png",
        chartId: ["circularBarplot"],
      },
      {
        full: "datylon-13.png",
        zoom: "datylon-13-zoom.png",
        chartId: ["treemap"],
      },
      {
        full: "datylon-14.png",
        zoom: "datylon-14-zoom.png",
        chartId: ["ridgeline"],
      },
      {
        full: "datylon-15.png",
        zoom: "datylon-15-zoom.png",
        chartId: ["parallel"],
      },
      {
        full: "datylon-16.png",
        zoom: "datylon-16-zoom.png",
        chartId: ["connectedScatter"],
      },
      {
        full: "datylon-17.png",
        zoom: "datylon-17-zoom.png",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "Datylon is a data visualization platform dedicated to graphic designers and report designers who work with <b>Adobe Illustrator</b>. It is a robust chart maker plugin for Illustrator to create beautiful charts and graphs for inspiring data stories.",
    chartDescription:
      "Datylon has a great <a href='https://insights.datylon.com/stories'>gallery</a> of example that are all of good quality. Check it out for more inspiration!",
    tools: [{ name: "illustrator" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 113,
    title: "Individual carbon footprint",
    date: new Date(2022, 4),
    author: "Le Monde",
    url: "https://www.lemonde.fr/economie/article/2022/05/30/le-defi-de-la-sobriete-pour-repondre-a-l-urgence-climatique_6128136_3234.html",
    img: [
      {
        full: "individual-carbon-footprint.png",
        zoom: "individual-carbon-footprint-zoom.png",
        chartId: ["treemap"],
      },
    ],
    contextDescription:
      "Greenhouse gas emissions are a hot topics nowadays. Le Monde wrote an <a href='https://www.lemonde.fr/economie/article/2022/05/30/le-defi-de-la-sobriete-pour-repondre-a-l-urgence-climatique_6128136_3234.html'>article</a> describing what part of our lifestyle have the strongest impact.",
    chartDescription:
      "A perfect treemap with impactful color sheme and a great design making it crystal clear what to do to decrease your personal effect on global warming.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 114,
    title: "0 points to go",
    date: new Date(2022, 5),
    author: "Lisa Hornung",
    url: "https://github.com/Lisa-Ho/100DaysOfDataviz/blob/main/Day5/TidyTuesday_eurovision_notebook.ipynb",
    img: [
      {
        full: "0-points-to-go.png",
        zoom: "0-points-to-go-zoom.png",
        chartId: ["heatmap", "timeseries"],
      },
    ],
    contextDescription:
      "Receiving 'Nul Points' at Eurovision (failing to earn a single point) is the most dreaded outcome for any participating country. This viz visualizes the 37 times it happened, split by countries.",
    chartDescription:
      "A timeseries heatmap where each cell is represented as a dot. The cell can be empty (no participation), grey (earned some points) or orange when no points were earned.",
    tools: [
      {
        name: "python",
        link: "https://github.com/Lisa-Ho/100DaysOfDataviz/blob/main/Day5/TidyTuesday_eurovision_notebook.ipynb",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 115,
    title: "Color Dodge",
    date: new Date(2022, 5),
    author: "Dmitry Novikov",
    url: "https://twitter.com/novikoff/status/1534136043414372352",
    img: [
      {
        full: "color-dodge.png",
        zoom: "color-dodge-zoom.png",
        chartId: ["bubble"],
      },
    ],
    contextDescription:
      "Not really dataviz related but I liked those colors and would love to re-use them on a bubble chart or related.",
    chartDescription:
      "Playing with color dodge / Color Burn / Overlay to create some good looking logos.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 116,
    title: "Bruxelles Malade",
    date: new Date(2022, 5),
    author: "Catherine Joie et al.",
    url: "https://bxl-malade.medor.coop",
    img: [
      {
        full: "bruxelle-malade-1.png",
        zoom: "bruxelle-malade-zoom-1.png",
        chartId: ["map", "choropleth"],
      },
      {
        full: "bruxelle-malade-2.png",
        zoom: "bruxelle-malade-zoom-2.png",
        chartId: ["map", "bubbleMap"],
      },
      {
        full: "bruxelle-malade-3.png",
        zoom: "bruxelle-malade-zoom-3.png",
        chartId: ["circularPacking", "bubble"],
      },
      {
        full: "bruxelle-malade-4.png",
        zoom: "bruxelle-malade-zoom-4.png",
        chartId: ["scatter", "bubble"],
      },
      {
        full: "bruxelle-malade-5.png",
        zoom: "bruxelle-malade-zoom-5.png",
        chartId: ["heatmap"],
      }, // marimekko
      {
        full: "bruxelle-malade-6.png",
        zoom: "bruxelle-malade-zoom-6.png",
        chartId: ["lollipop"],
      },
      {
        full: "bruxelle-malade-7.png",
        zoom: "bruxelle-malade-zoom-7.png",
        chartId: ["cartogram", "map"],
      },
      {
        full: "bruxelle-malade-8.png",
        zoom: "bruxelle-malade-zoom-8.png",
        chartId: ["parallel"],
      },
    ],
    contextDescription:
      "A scrollytelling article (in french) that talks about health in Bruxelles, the capital of Belgium. It highlights the discrepencies that exist between suburbs. A in-depth investigation definitely worth a read.",
    chartDescription:
      "Heaps of different chart types, all very clean with perfect annotations and stunning animations between the story steps. Masterpiece!",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 117,
    title: "What is Wikipedia about?",
    date: new Date(2014, 5),
    author: "Ask Media",
    url: "https://askmedia.fr/blog/ask-media-short-listee-aux-information-is-beautiful-awards-2014/",
    img: [
      {
        full: "what-is-wikipedia-about.png",
        zoom: "what-is-wikipedia-about-zoom.png",
        chartId: ["dendrogram", "bubble"],
      },
    ],
    contextDescription:
      "In 2014 there were about 10M elements in wikipedia. This infografic groups them by type (e.g. geographical entity) and checks what are the most numerous items.",
    chartDescription:
      "Beautiful infographic making the best of dark mode. I really like the slight gradients that truly make a difference on the final appearance.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 118,
    title: "Pairplot function of Seaborn",
    date: new Date(2013, 5),
    author: "Yan Holtz",
    url: "https://www.data-to-viz.com/graph/correlogram.html",
    img: [
      {
        full: "seaborn-pairplot-function.png",
        zoom: "seaborn-pairplot-function-zoom.png",
        chartId: ["correlogram"],
      },
    ],
    contextDescription:
      "This is a correlogram made using the pairplot function of the seaborn python library for data visualization.",
    chartDescription:
      "Clean and simple correlogram. Distributions on the diagonal. Scatterplots on other facets.",
    tools: [
      {
        name: "python",
        link: "https://www.data-to-viz.com/graph/correlogram.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 119,
    title: "Correlograms with R",
    date: new Date(2013, 5),
    author: "Yan Holtz",
    url: "https://r-graph-gallery.com/correlogram.html",
    img: [
      {
        full: "correlograms-with-R-1.png",
        zoom: "correlograms-with-R-zoom-1.png",
        chartId: ["correlogram"],
      },
      {
        full: "correlograms-with-R-2.png",
        zoom: "correlograms-with-R-zoom-2.png",
        chartId: ["correlogram"],
      },
      {
        full: "correlograms-with-R-3.png",
        zoom: "correlograms-with-R-zoom-3.png",
        chartId: ["correlogram"],
      },
      {
        full: "correlograms-with-R-4.png",
        zoom: "correlograms-with-R-zoom-4.png",
        chartId: ["correlogram"],
      },
      {
        full: "correlograms-with-R-5.png",
        zoom: "correlograms-with-R-zoom-5.png",
        chartId: ["correlogram"],
      },
    ],
    contextDescription:
      "An overview of what <a href='https://r-graph-gallery.com/correlogram.html'>R</a> can provide when it comes to build correlograms.",
    chartDescription:
      "Several libraries can be used to build correlograms with R. <code>GGally</code>, <code>Corrgram</code>, <code>Ellipse</code> and more. Visit the <a href='https://r-graph-gallery.com/correlogram.html'>R graph gallery</a> for more.",
    tools: [
      { name: "R", link: "https://r-graph-gallery.com/correlogram.html" },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 120,
    title: "Plastic waste",
    date: new Date(2022, 6),
    author: "Lisa Hornung",
    url: "https://inside-numbers.com/six-things-i-learned-by-tracking-my-plastic-waste-everyday-in-2021",
    img: [
      {
        full: "plastic-waste-1.png",
        zoom: "plastic-waste-zoom-1.png",
        chartId: ["circularBarplot"],
      },
      {
        full: "plastic-waste-2.png",
        zoom: "plastic-waste-zoom-2.png",
        chartId: ["heatmap"],
      },
      {
        full: "plastic-waste-3.png",
        zoom: "plastic-waste-zoom-3.png",
        chartId: ["bubble"],
      },
      {
        full: "plastic-waste-4.png",
        zoom: "plastic-waste-zoom-4.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Lisa tracked her plastic waste details for a year and wrote a blogpost full of insightful dataviz to explain the result.",
    chartDescription:
      "I really like the visual identity that is created here. The blogpost also includes an infographic shared on <a href='https://twitter.com/LisaHornung_/status/1541739547645583360'>twitter</p>.",
    tools: [{ name: "python", link: undefined }, { name: "illustrator" }],
    luminosity: ["light", "dark"],
    interactive: false,
  },
  {
    id: 121,
    title: "Rude Compounds",
    date: new Date(2022, 6),
    author: "Colin Morris",
    url: "https://colinmorris.github.io/blog/compound-curse-words",
    img: [
      {
        full: "rude-compounds.png",
        zoom: "rude-compounds-zoom.png",
        chartId: ["heatmap"],
      },
    ],
    contextDescription:
      "A deep dive into Reddit's most comon dirty words, trying to understand how those words are combined together.",
    chartDescription:
      "This heatmap does not have anything crazy in term of viz, but with more than 5000 likes on <a href='https://twitter.com/HalfEatenScone/status/1541868671789932545'>twitter</a> it's one of the most viral viz I know.",
    tools: [
      {
        name: "python",
        link: "https://github.com/colinmorris/pejorative-compounds",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 122,
    title: "Drag Race",
    date: new Date(2022, 6),
    author: "Tanya Shapiro",
    url: "https://github.com/tashapiro/drag-race",
    img: [
      {
        full: "drag-race.png",
        zoom: "drag-race-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Analysis of all lip sync songs featured on different seasons of Drag Race across all franchises.",
    chartDescription:
      "Simple barplot with slick design and especially nice annotations.",
    tools: [{ name: "R", link: "R" }],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 123,
    title: "Windguru live wind",
    date: new Date(2022, 6),
    author: "windguru",
    url: "https://www.windguru.cz/station/869",
    img: [
      { full: "windguru.png", zoom: "windguru-zoom.png", chartId: ["barplot"] },
    ],
    contextDescription:
      "Windguru.cz is the most famous service for wind prediction, used by a myriad of surfers. It has a page for each spot, showing the most recent wind force and direction.",
    chartDescription:
      "The area chart is very powerful and informative. It displays both wind speed and direction, including gust values and average values. Color gradient allows to know what's happening in a glimpse.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 124,
    title: "Generative design",
    date: new Date(2022, 6),
    author: "Thi Ng",
    url: "https://medium.com/@thi.ng/workshop-report-generative-design-with-clojure-7d6d8ea9a6e8",
    img: [
      {
        full: "generative-thi-ng.png",
        zoom: "generative-thi-ng-zoom.png",
        chartId: ["network"],
      },
    ],
    contextDescription:
      "I've always been interested by viz that looks futuristic. This generative shape is good inspiration for this.",
    chartDescription:
      "Not a dataviz. But I would like to create a network chart based on this design.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 125,
    title: "Tech startup evolution",
    date: new Date(2018, 6),
    author: "Bureau Oberhaeuser",
    url: "https://www.behance.net/gallery/59504801/Tech-Startup-Evolution-Calendar-2018",
    img: [
      {
        full: "tech-startup-evolution.png",
        zoom: "tech-startup-evolution-zoom.png",
        chartId: ["network"],
      },
    ],
    contextDescription:
      "A circular calendar showing the evolution of the most significant tech companies of our time. Show features like market value, purchase price, number of employees and more.",
    chartDescription:
      "This is a circular lollipop chart. It displays a big amount of information for each company and I like the color choices that makes it look futuristic.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 126,
    title: "What it takes to go to space",
    date: new Date(2018, 6),
    author: "Anurag Sachan",
    url: "https://www.behance.net/gallery/86241381/Data-Visualisation-What-it-takes-to-go-to-space",
    img: [
      {
        full: "what-it-takes-to-space.png",
        zoom: "what-it-takes-to-space-zoom.png",
        chartId: ["network"],
      },
    ],
    contextDescription:
      "This visualization helps one understand the likelihood and probable career path one can take to become a NASA Astronaut.",
    chartDescription:
      "Vertical sankey diagram with stunning colors. I wonder how insightful it is with such a complexity in the data, but design is good.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 127,
    title: "Fiction User Interface",
    date: new Date(2018, 6),
    author: "Denis Lugansky",
    url: "https://www.behance.net/gallery/92170213/FUI-HUD-Screens",
    img: [
      {
        full: "fiction-user-interface.png",
        zoom: "fiction-user-interface-zoom.png",
        chartId: ["network", "barplot", "sankey", "line"],
      },
    ],
    contextDescription:
      "Not a real viz. This is a fiction user interface made for movies or video game. But some concept can definitely be borrowed to create real futuristic style dataviz.",
    chartDescription:
      "Many different chart types are represented, especially if you watch the whole <a href='https://videohive.net/item/ultimate-fui-hud-library/25744407'>video</a>.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 128,
    title: "A tree for U.S. immigration",
    date: new Date(2018, 6),
    author: "Pedro Cruz et al.",
    url: "https://web.northeastern.edu/naturalizing-immigration-dataviz/",
    img: [
      {
        full: "tree-us-immigration.png",
        zoom: "tree-us-immigration-zoom.png",
        chartId: ["circularBarplot"],
      },
    ],
    contextDescription:
      "A circular graph mimicking the shape of a tree. It represents immigration in the U.S: each dot represents 100 immigrants. Distance to the center represents the date. Angle represents the migrant origin.",
    chartDescription:
      "This chart is unique, it does not belong to any chart type I know. And that's probably what makes it so famous and inspiring. Awesome metaphor, probably closer to data art than dataviz though.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 129,
    title: "Remixing Rosling",
    date: new Date(2018, 6),
    author: "Moritz Stefaner",
    url: "https://truth-and-beauty.net/projects/remixing-rosling",
    img: [
      {
        full: "remixing-rosling.png",
        zoom: "remixing-rosling-zoom.png",
        chartId: ["connectedScatter"],
      },
    ],
    contextDescription:
      "This chart is a remix of Hans Rosling's famous gapminder <a href='https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1'>bubble chart</a>. It shows the evolution of life expectancy and fertility rate for a few countries.",
    chartDescription:
      "This is a very unique connected scatterplot. Bubble size is mapped to the year, which ease the understanding of the evolution and making the flow very smooth. It truly allows to 'feel' the evolution of each country!.",
    tools: [
      {
        name: "tableau",
        link: "https://public.tableau.com/app/profile/jeffrey.shaffer/viz/RemixingRoslinginTableau/RemixingRosling",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 130,
    title: "Waves of Interest",
    date: new Date(2021, 6),
    author: "Moritz Stefaner",
    url: "https://truth-and-beauty.net/projects/waves-of-interest",
    img: [
      {
        full: "wave-of-interest-1.png",
        zoom: "wave-of-interest-1-zoom.png",
        chartId: ["density2d"],
      },
      {
        full: "wave-of-interest-2.png",
        zoom: "wave-of-interest-2-zoom.png",
        chartId: ["line"],
      },
      {
        full: "wave-of-interest-3.png",
        zoom: "wave-of-interest-3-zoom.png",
        chartId: ["connectedScatter"],
      },
    ],
    contextDescription:
      "Which topics capture the attention of Americans during US election years? And how have our interests shifted from one election cycle to the next? This project investigates these questions with the help of Google Search Trends data.",
    chartDescription:
      "The density 2d heatmap is the one that caught my eyes here, especially due to its nice annotation. But the whole <a hef='https://waves-of-interest.truth-and-beauty.net/#US'>project</a> is definitely worth a look.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 131,
    title: "Serena Williams's career",
    date: new Date(2022, 7),
    author: "Washington Post",
    url: "https://www.washingtonpost.com/sports/2022/08/28/serena-williams-career-rankings/",
    img: [
      {
        full: "serena-williams.png",
        zoom: "serena-williams-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "Since her debut in the 1990s, Serena Williams has spent a total of 319 weeks atop the WTA rankings, a tally that spans three time periods in her career.",
    chartDescription:
      "This chart is a vertical line chart. Making it vertical allows to fit many more annotation, what makes the chart very insightful.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 132,
    title: "Leonardo DiCaprio Refuses to Date a Woman Over 25",
    date: new Date(2019, 7),
    author: "TrustLittleBrother",
    url: "https://www.reddit.com/r/dataisbeautiful/comments/azjti7/leonardo_dicaprio_refuses_to_date_a_woman_over_25/",
    img: [
      {
        full: "leonardo-dicaprio-girlfriends.png",
        zoom: "leonardo-dicaprio-girlfriends-zoom.png",
        chartId: ["line", "barplot"],
      },
    ],
    contextDescription:
      "A highly viral viz showing how Leonardo DiCaprio always broke with his girlfriend once she turned 25, even at 42 y.o.",
    chartDescription:
      "Not sure what made this viz viral. The topic? The eye catching look? The fact that it was originally made using excel? <a href='https://twitter.com/tanya_shapiro/status/1565029412428562433'>ggplot2 version</a>.",
    tools: [
      {
        name: "R",
        link: "https://github.com/tashapiro/tanya-data-viz/blob/main/dicaprio-gfs/dicaprio-gfs.R",
      },
    ],
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 133,
    title: "The shape of happiness",
    date: new Date(2019, 7),
    author: "TrustLittleBrother",
    url: "https://www.nber.org/papers/w23724",
    img: [
      {
        full: "shape-happiness.png",
        zoom: "shape-happiness-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The result of a research paper on 51 countries and 1.3 M people. Trying to understand when people are the most happy, and why there is a mid-life dip.",
    chartDescription:
      "A line chart showing the relationship between happiness and age across several surveys. The chart could be greatly improved but I find the topic very interesting.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 134,
    title: "Europe gaz reserves",
    date: new Date(2022, 7),
    author: "De Tijd",
    url: "https://www.tijd.be/politiek-economie/europa/algemeen/europa-in-sneltempo-op-weg-naar-volle-gasreserves/10410695.html",
    img: [
      {
        full: "europe-gaz-reserves.png",
        zoom: "europe-gaz-reserves-zoom.png",
        chartId: ["marimekko"],
      },
    ],
    contextDescription:
      "Talks about gaz reserves in Europe. But I do not understand much about the article to be honest :).",
    chartDescription: "Marimekko chart.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 135,
    title: "Economic growth and CO2",
    date: new Date(2022, 7),
    author: "Max Roser",
    url: "https://twitter.com/MaxCRoser/status/1566182467010273280",
    img: [
      {
        full: "economy-and-co2.png",
        zoom: "economy-and-co2-zoom.png",
        chartId: ["line", "timeseries", "parallel"],
      },
    ],
    contextDescription:
      "More and more countries achieve to decouple economic growth from CO₂ emissions.This chart shows the evidence for 25 countries.",
    chartDescription:
      "What strikes me here is that I'm not sure what kind of viz it is 🤔. But with 12k likes on <a href='https://twitter.com/MaxCRoser/status/1566182467010273280'>twitter</a>, the message is definitely conveyed efficiently.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 136,
    title: "French salaries",
    date: new Date(2022, 8),
    author: "Judith Chetrit",
    url: "https://twitter.com/judithchetrit/status/1567191486126587904",
    img: [
      {
        full: "french-salaries.png",
        zoom: "french-salaries-zoom.png",
        chartId: ["histogram", "barplot"],
      },
    ],
    contextDescription: "Distribution of salaries in France in 2020. ",
    chartDescription:
      "I do not particularly like the look of the chart, but I like the annotation showing the sum value of a group of bars. 19k likes on <a href='https://twitter.com/judithchetrit/status/1567191486126587904'>twitter</a>!",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 137,
    title: "Missing migrants",
    date: new Date(2022, 8),
    author: "Soha Elghany",
    url: "https://twitter.com/SohaElghany/status/1570725861384654849",
    img: [
      {
        full: "missing-migrants.png",
        zoom: "missing-migrants-zoom.png",
        chartId: ["circularPacking"],
      },
    ],
    contextDescription:
      "A sad project tracking people who have died in the process of migration towards an internation destination. ",
    chartDescription:
      "A circular packing chart where each bubble is an incident that caused arms to migrants. Color related to origin location. Beautiful but sad.",
    tools: [
      {
        name: "tableau",
        link: "https://public.tableau.com/app/profile/soha.elghany/viz/MissingMigrantsprintpt_1/Dashboard13",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 138,
    title: "Climate change: vulnerability and co2",
    date: new Date(2022, 8),
    author: "David Wendler",
    url: "https://blog.datawrapper.de/climate-risk-readiness-responsibility/",
    img: [
      {
        full: "climat-change-co2-vulnerability.png",
        zoom: "climat-change-co2-vulnerability-zoom.png",
        chartId: ["scatter", "bubble"],
      },
    ],
    contextDescription:
      "Not every country is truly facing an equal risk from climate change, nor has the capability to prepare and protect itself. This project highlights that countries with low readiness are often the most vulnerable, and the least responsible.",
    chartDescription:
      "This is a scatterplot using squares instead of circles. It has a third dimension mapped to the square size. A toolip allows to get the name of each country with its precise numbers. Clean annotation. Nice hover effect. I love data wrapper.",
    tools: [
      {
        name: "data wrapper",
        link: "https://blog.datawrapper.de/climate-risk-readiness-responsibility/",
      },
    ],
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 139,
    title: "How Britain ended its coal addiction",
    date: new Date(2022, 8),
    author: "Financial Times",
    url: "https://www.ft.com/content/a05d1dd4-dddd-11e9-9743-db5a370481bc",
    img: [
      {
        full: "britain-ends-coal-addiction.png",
        zoom: "britain-ends-coal-addiction-zoom.png",
        chartId: ["area", "stackedArea"],
      },
      {
        full: "britain-ends-coal-addiction-2.png",
        zoom: "britain-ends-coal-addiction-zoom-2.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "The shift in the UK is an important victory for environmentalists in their fight against fossil fuels.",
    chartDescription:
      "Clean area and bar charts used as timeseries, with the very recognizable style of the financial times.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 140,
    title: "AVS 21 Reform",
    date: new Date(2022, 8),
    author: "Financial Times",
    url: "https://www.ft.com/content/a05d1dd4-dddd-11e9-9743-db5a370481bc",
    img: [
      {
        full: "avs-21-reform.png",
        zoom: "avs-21-reform-zoom.png",
        chartId: ["beeswarm"],
      },
    ],
    contextDescription:
      "A graph showing the striking difference between linguistic regions in switzerland concerning a recent reform proposal.",
    chartDescription:
      "Interactive beeswarm chart where each dot is a council. Split in 3 groups (one per region). Very cool to see an uncommon chart <a href='https://twitter.com/duc_qn/status/1574663295365177349/photo/1'>printed</a> in a newpaper.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 141,
    title: "Tree Species in Germany",
    date: new Date(2022, 8),
    author: "Jens Wiesehahn",
    url: "https://twitter.com/JensWiesehahn/status/1576553354276151296",
    img: [
      {
        full: "tree-species-germany.png",
        zoom: "tree-species-germany-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription: "A map showing the dominant tree species in Germany.",
    chartDescription:
      "A stunning map built with R and rayshader. Simply beautiful and insightful.",
    tools: [
      {
        name: "R",
        link: "https://twitter.com/JensWiesehahn/status/1576553354276151296",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 142,
    title: "Flood Phenomena",
    date: new Date(2020, 8),
    author: "Tamás Varga",
    url: "https://public.tableau.com/app/profile/tam.s.varga/viz/FloodPhenomenainEurope/FloodPhenomenainEurope",
    img: [
      {
        full: "flood-phenomena.png",
        zoom: "flood-phenomena-zoom.png",
        chartId: ["barplot", "stream"],
      },
    ],
    contextDescription:
      "A visual showing the number of flood phenomena in each of the European countries. A barchart on the left shows the most impacted countries. A stream chart on the right shows the evolution of the number of events.",
    chartDescription:
      "Data talks about floods, and the visual definitely goes along with it. The color palette and the organic shapes of the streamchart are going so well together. As often with nice visuals, the annotation tells the story.",
    tools: [
      {
        name: "tableau",
        link: "https://public.tableau.com/app/profile/tam.s.varga/viz/FloodPhenomenainEurope/FloodPhenomenainEurope",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 143,
    title: "Endangered languages",
    date: new Date(2020, 8),
    author: "Nature",
    url: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-022-14479-1/MediaObjects/41598_2022_14479_Fig1_HTML.png?as=webp",
    img: [
      {
        full: "endangered-languages.png",
        zoom: "endangered-languages-zoom.png",
        chartId: ["barplot", "stream"],
      },
    ],
    contextDescription:
      "Some languages are about disappear from the planet. This visual quantifies this and shows where in the world those languages are.",
    chartDescription:
      "A clean world map with dots and 2d density on top. There is also a stacked barchart at the bottom showing how vulnerable the languages of each zone are.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 144,
    title: "Carbon Emissions",
    date: new Date(2021, 11),
    author: "Anshool Deshmukh",
    url: "https://www.visualcapitalist.com/visualizing-global-per-capita-co2-emissions/",
    img: [
      {
        full: "carbon-emissions.png",
        zoom: "carbon-emissions-zoom.png",
        chartId: ["circularBarplot"],
      },
    ],
    contextDescription:
      "Carbon emissions is such a hot topic nowadays. This chart summarizes how much C02 a country emitts, in regard of its population",
    chartDescription:
      "This chart is a circular barchart with unequal bar widths. Indeed, bar widths are proportional to the country population. This is such an interesting tweak that makes the chart much more insightful.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 145,
    title: "Hate Crime In Uk",
    date: new Date(2022, 9),
    author: "Saverio Rocchetti",
    url: "https://public.tableau.com/app/profile/saveriorocchetti/viz/HateCrimeInUk/HATECRIMEINUK",
    img: [
      {
        full: "hate-crime-uk.png",
        zoom: "hate-crime-uk-zoom.png",
        chartId: ["waffle"],
      },
    ],
    contextDescription:
      "This view shows the number of hate crimes recorded by the police in UK. In particular, on the progress of thes crimes and against which category they are mainly carried out.",
    chartDescription:
      "A time series showing the general trend on the left. On the right, a waffle chart with small multiple: instead of having all the groups on the same waffle, each group is represented on its own waffle.<br/>It's a surprising strategy, but it works well to show the weight of each group on the whole.",
    tools: [
      {
        name: "tableau",
        link: "https://public.tableau.com/app/profile/saveriorocchetti/viz/HateCrimeInUk/HATECRIMEINUK",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 146,
    title: "Brazilian Economy and Inequality",
    date: new Date(2010, 9),
    author: "Alberto Cairo",
    url: "https://twitter.com/AlbertoCairo/status/1582885556240797697",
    img: [
      {
        full: "brazilian-economy-and-inequality.png",
        zoom: "brazilian-economy-and-inequality-zoom.png",
        chartId: ["connectedScatter"],
      },
    ],
    contextDescription:
      "The graphic shows the correlation between Brazilian GDP (horizontal axis) and inequality (vertical axis). Each dot represents a year.",
    chartDescription:
      "This is a connected scatterplot. It is very powerful as it shows both a correlation and an evolution on the same figure. However, it takes a while to understand it properly, so make sure to share it with an audience used to complex charts.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 147,
    title: "The slow loss",
    date: new Date(2022, 10),
    author: "Michela Lazzaroni",
    url: "https://www.behance.net/gallery/151474693/The-Slow-Loss-La-Lettura-dataviz",
    img: [
      {
        full: "the-slow-loss.png",
        zoom: "the-slow-loss-zoom.png",
        chartId: ["dendrogram"],
      },
      {
        full: "the-slow-loss-2.png",
        zoom: "the-slow-loss-zoom-2.png",
        chartId: ["dendrogram"],
      },
    ],
    contextDescription:
      "This diptych shows the species of endangered birds and fishes in Italy, according to the IUCN's 'Red list'. For each animal, the following are indicated: common name, order, degree of danger, size and habitat.",
    chartDescription:
      "Those circular dendrograms are a poetic way to represent the information. The animal size is mapped to a shape that makes us think at a feather or a scale. Not the most scientific way to do it, but beautiful result.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 148,
    title: "Number of Elizabeths",
    date: new Date(2022, 9),
    author: "Brodsky",
    url: "https://twitter.com/a_drewsky/status/1583082040932474880/photo/1",
    img: [
      {
        full: "number-of-elizabeth.png",
        zoom: "number-of-elizabeth-zoom.png",
        chartId: ["timeseries"],
      },
    ],
    contextDescription:
      "<a href='https://en.wikipedia.org/wiki/Elizabeth_II'>Elizabeth II</a>, was the queen of the UK until the 8th of September. <a href='https://fr.wikipedia.org/wiki/Liz_Truss'>Liz Truss</a> was prime minister from the 6th of September.",
    chartDescription:
      "A dataviz joke with a simple timeseries that gathered more than <a href='https://twitter.com/a_drewsky/status/1583082040932474880/photo/1'>100k likes</a>.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 149,
    title: "NYT best sellers",
    date: new Date(2022, 9),
    author: "Brodsky",
    url: "https://github.com/tashapiro/TidyTuesday/tree/master/2022/W19",
    img: [
      {
        full: "NYT-best-sellers.png",
        zoom: "NYT-best-sellers-zoom.png",
        chartId: ["table"],
      },
    ],
    contextDescription:
      "Top authors by decade. Ranking based on number of weeks author appeared on list. Sparkline depicts total weeks by year. Top performing book included beneath each author's name. Data from Post45 Data Collective.",
    chartDescription:
      "Such a clean table providing heaps of info. What I love the most is that it's been created <a href='https://github.com/tashapiro/TidyTuesday/tree/master/2022/W19'>using R</a>.",
    tools: [
      {
        name: "R",
        link: "https://github.com/tashapiro/TidyTuesday/tree/master/2022/W19",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 150,
    title: "Climate & Conflict",
    date: new Date(2022, 9),
    author: "Thomas Mayer",
    url: "https://climate-conflict.org",
    img: [
      {
        full: "climate-and-conflicts-1.png",
        zoom: "climate-and-conflicts-1-zoom.png",
        chartId: ["map"],
      },
      {
        full: "climate-and-conflicts-2.png",
        zoom: "climate-and-conflicts-2-zoom.png",
        chartId: ["bubbleMap"],
      },
    ],
    contextDescription:
      "What is the relation between climate change and violent conflicts? Which role do socio-economic scope conditions play in exacerbating climate impact? How can we allow analysts and policymaker to make better decisions — based on heterogenous, multi-faceted information sources?",
    chartDescription:
      "A scrollytelling experience that drives you through several animated map views, all done with a nice dark-mode theme.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 151,
    title: "All you need is love",
    date: new Date(2022, 10),
    author: "Robert Janezic",
    url: "https://www.behance.net/gallery/110336341/All-you-need-is-love",
    img: [
      {
        full: "all-you-need-is-love.png",
        zoom: "all-you-need-is-love-zoom.png",
        chartId: ["circularBarplot", "bubble"],
      },
    ],
    contextDescription:
      "An homage to the Beatles. It represents their core thirteen albums and breaks down every song in each album.",
    chartDescription:
      "A circular layout displaying several layouts of information. Bubbles to show the total number of the word 'love' being said, line showing when it happened in the song.",
    tools: [{ name: "illustrator", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 152,
    title: "Ebb & Flow",
    date: new Date(2022, 10),
    author: "Robert Janezic",
    url: "https://www.behance.net/gallery/110376739/Ebb-Flow",
    img: [
      {
        full: "ebb-and-flow.png",
        zoom: "ebb-and-flow-zoom.png",
        chartId: ["sankey", "stream"],
      },
    ],
    contextDescription:
      "An infographic that looks at music genre popularity over time, based on billboard hot 100 frequency.",
    chartDescription:
      "A stream graph. What's interesting here is that it does not go straight from left to right, but does its own way. Definitely not a scientific strategy but increases the flow feeling of the data.",
    tools: [{ name: "illustrator", link: undefined }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 153,
    title: "Europe and its gaz dependency",
    date: new Date(2022, 9),
    author: "Lea Desrayaud",
    url: "https://twitter.com/Lea_Des/status/1588064433019813888",
    img: [
      {
        full: "europe-gaz-dependency.png",
        zoom: "europe-gaz-dependency-zoom.png",
        chartId: ["cartogram"],
      },
    ],
    contextDescription:
      "How much of the gaz of European countries comes from russia?",
    chartDescription:
      "Smart way to represent info. Size of the square shows percentage of dependency to Russia. Then inner rects show usage of coal, gaz and petrol.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },

  // {
  //     id: 154,
  //     title: "Geopolitics and Globalization",
  //     date: new Date(2022, 9),
  //     author: "Financial Times",
  //     url: "https://www.ft.com/content/8954a5f8-8f03-4044-8401-f1efefe9791b",
  //     img: [
  //         { full: "geopolitics-and-globalization-1.png", zoom: "geopolitics-and-globalization-1-zoom.png", chartId: ["line"] },
  //         { full: "geopolitics-and-globalization-2.png", zoom: "geopolitics-and-globalization-2-zoom.png", chartId: ["treemap"] },
  //         { full: "geopolitics-and-globalization-3.png", zoom: "geopolitics-and-globalization-3-zoom.png", chartId: ["scatter"] },
  //     ],
  //     contextDescription: "Some charts about globalization, GDP, gini indexes and other economic metrics.",
  //     chartDescription: "Another set of clean chart examples, always with a good style and some insightful annotation as always for the FT.",
  //     tools: undefined,
  //     luminosity: ["light"],
  //     interactive: false
  // },

  // {
  //     id: 155,
  //     title: "Famous Uni",
  //     date: new Date(2022, 9),
  //     author: "Les echos",
  //     url: "https://media.lesechos.com/api/v1/images/view/633eff162467d568456da8f8/par_defaut/image.jpg",
  //     img: [
  //         { full: "famous-uni.png", zoom: "famous-uni-zoom.png", chartId: ["barplot"] },
  //     ],
  //     contextDescription: "You're most likely to go to a famous uni if you come from a rich/educated family. This arcticle quantifies this.",
  //     chartDescription: "Just a barplot, sorted, that communicates a strong message.",
  //     tools: undefined,
  //     luminosity: ["light"],
  //     interactive: false
  // },

  {
    id: 156,
    title: "How far by train",
    date: new Date(2022, 9),
    author: "Benjamin Td",
    url: "https://www.chronotrains.com",
    img: [
      {
        full: "how-far-by-train.png",
        zoom: "how-far-by-train-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "An interactive map that shows you how far you can travel from a specific point in a specific amount of time.",
    chartDescription: "This kind of map is called isochrone maps. ",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 157,
    title: "The most important problem",
    date: new Date(2022, 9),
    author: "Gregor Aisch",
    url: "https://driven-by-data.net/2017/02/28/most-important-problem.html",
    img: [
      {
        full: "most-important-problem.png",
        zoom: "most-important-problem-zoom.png",
        chartId: ["treemap"],
      },
    ],
    contextDescription:
      "Since the presidency of Franklin D. Roosevelt, the Gallup polling organization has asked Americans an open-ended question: “What do you think is the most important problem facing this country today?”",
    chartDescription: "A set of treemaps made for the New York Times",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 158,
    title: "How Britain Voted",
    date: new Date(2017, 9),
    author: "Gregor Aisch",
    url: "https://driven-by-data.net/2017/06/08/how-britain-voted.html",
    img: [
      {
        full: "how-britain-voted-1.png",
        zoom: "how-britain-voted-1-zoom.png",
        chartId: ["choropleth"],
      },
      {
        full: "how-britain-voted-2.png",
        zoom: "how-britain-voted-2-zoom.png",
        chartId: ["cartogram"],
      },
    ],
    contextDescription: "Checking who voted for what in Britain's election.",
    chartDescription:
      "A set of annotated choropleth and hexbin maps accurately describing the results of the election.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 159,
    title: "Nations Compromised by Terrorism",
    date: new Date(2016, 9),
    author: "Gregor Aisch",
    url: "https://driven-by-data.net/2016/07/22/trump-immigration.html",
    img: [
      {
        full: "nation-compromised-by-terrorism.png",
        zoom: "nation-compromised-by-terrorism-zoom.png",
        chartId: ["cartogram"],
      },
    ],
    contextDescription:
      "Trump Vows to Stop Immigration From Nations ‘Compromised’ by Terrorism. How Could It Work?",
    chartDescription:
      "Some cartograms where each country is represented as a rectangle, with size proportional to the number of immigrants.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 160,
    title: "The billionaire boom",
    date: new Date(2021, 5),
    author: "Financial Times",
    url: "https://www.ft.com/content/747a76dd-f018-4d0d-a9f3-4069bf2f5a93",
    img: [
      {
        full: "billionaire-boom.png",
        zoom: "billionaire-boom-zoom.png",
        chartId: ["barplot"],
      },
      {
        full: "billionaire-boom-2.png",
        zoom: "billionaire-boom-zoom-2.png",
        chartId: ["area"],
      },
      {
        full: "billionaire-boom-3.png",
        zoom: "billionaire-boom-zoom-3.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "Pandemic stimulus has made the world’s wealthiest wealthier. Ruchir Sharma charts the rise of ‘good’ and ‘bad’ billionaires around the world",
    chartDescription:
      "Some clean bar charts and area charts highlighting the reality of a somewhat grim topic. Leading to a <a href='https://twitter.com/NicolasFramont/status/1594648574217928704'>tweet with 13k likes</a>",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 161,
    title: "Musk and Followers",
    date: new Date(2022, 11),
    author: "Washington Post",
    url: "https://www.washingtonpost.com/technology/2022/11/27/musk-followers-bernie-cruz/",
    img: [
      {
        full: "musk-and-followers.png",
        zoom: "musk-and-followers-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "Musk is now owning twitter. Shift in follower counts for Elizabeth Warren, Ted Cruz and others shows how the platform is beginning to change.",
    chartDescription:
      "It's very unusual to see a line chart displayed from top to bottom instead of from left to right. But since the figure is wider then tall, it increases the insight of the figure message. Smart move!",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 162,
    title: "My career in a graph",
    date: new Date(2022, 10),
    author: "Shit Product Manager",
    url: "https://twitter.com/shitPM/status/1584901769766883328",
    img: [
      {
        full: "My-career-in-a-graph.jpeg",
        zoom: "My-career-in-a-graph-zoom.jpeg",
        chartId: ["parallel"],
      },
    ],
    contextDescription:
      "A humorous Twitter account that tackles here the subject of excitement for work throughout someone's career.",
    chartDescription:
      "Not much to say about this chart, except that topic definitely makes a diff for virality 😋",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 163,
    title: "Pornstars per inhabitants",
    date: new Date(2022, 11),
    author: "Terrible Maps",
    url: "https://twitter.com/TerribleMaps/status/1588240724277231616",
    img: [
      {
        full: "Pornstars-per-million-inhabitants.png",
        zoom: "Pornstars-per-million-inhabitants-zoom.png",
        chartId: ["map", "choropleth"],
      },
    ],
    contextDescription:
      "A Twitter account that describes itself as « the home of terribles maps with a pinch of humour », and that illustrates here the differences in numbers of pornstars in different European countries.",
    chartDescription:
      "This choropleth map is far from perfect, but the topic makes it highly viral.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 164,
    title: "France's smallest city names",
    date: new Date(2022, 11),
    author: "Clara Dealberto",
    url: "https://twitter.com/claradealberto/status/1587793756572499972?lang=fr",
    img: [
      {
        full: "Plus-petits-noms-communes.png",
        zoom: "Plus-petits-noms-communes-zoom.png",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "French graphic designer Clara Dealberto layed out the smallest town names by department in her country.",
    chartDescription: "Just a map with interesting labeling",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 165,
    title: "ChatGPT vs. Lensa",
    date: new Date(2022, 12),
    author: "Tanya Shapiro",
    url: "https://twitter.com/tanya_shapiro/status/1601612680619753473",
    img: [
      {
        full: "ChatGPT-vs-Lensa.jpeg",
        zoom: "ChatGPT-vs-Lensa-zoom.jpeg",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "A Google keyword search comparison of ChatGPT and Lensa over a two week period in November 2022.",
    chartDescription:
      "Interesting way of labeling the 2 lines here. Inline labeling on the right hand side is usually used to avoid having a legend. But the labeling over the line allows to not waste real eastate!",
    tools: [
      {
        name: "R",
        link: "https://github.com/tashapiro/tanya-data-viz/blob/main/chatgpt-lensa/chatgpt-lensa.R",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 166,
    title: "Smoking populations",
    date: new Date(2022, 12),
    author: "Pablo Alvarez",
    url: "https://www.visualcapitalist.com/cp/visualizing-country-smoking-population/",
    img: [
      {
        full: "Smoking-population-by-country.png",
        zoom: "Smoking-population-by-country-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "This visual depicts the share of men vs the share of women who smoke tobacco in different countries, in a more general inquiry about world smokers.",
    chartDescription:
      "This graph is a mirrored vertical barplot: left hand side is for women, right hand side for men. What's interesting here is that the bar height encodes a second numeric variable: the population size.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 167,
    title: "Paid vacation days",
    date: new Date(2022, 12),
    author: "Samo Drole",
    url: "https://twitter.com/samodrole/status/1604341547817918464",
    img: [
      {
        full: "Paid-vacation-days.jpeg",
        zoom: "Paid-vacation-days-zoom.jpeg",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "This chart compares the number of paid vacation days in different countries around the world.",
    chartDescription:
      "A surprising way of showing a distribution: a scatterplot with jittering is used instead of a more classic histogram or density chart.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 168,
    title: "Population density",
    date: new Date(2022, 12),
    author: "Terence Fosstodon",
    url: "https://creapills.com/cartographie-densite-population-rayshader-20221230",
    img: [
      {
        full: "Population-density-maps.jpeg",
        zoom: "Population-density-maps-zoom.jpg",
        chartId: ["map", "choropleth"],
      },
    ],
    contextDescription:
      "25 maps that illustrate the population densities of different countries in a very visual way.",
    chartDescription:
      "Using the very awesome RayShader to build stunning 3d maps with R.",
    tools: [{ name: "R", link: "https://www.rayshader.com/" }],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 169,
    title: "Chinese repression via Twitter",
    date: new Date(2022, 12),
    author: "Tom Février",
    url: "https://twitter.com/TomFevrier/status/1598651997862989825",
    img: [
      {
        full: "Chinese-repression-via-Twitter.jpeg",
        zoom: "Chinese-repression-via-Twitter-zoom.jpeg",
        chartId: ["bubble"],
      },
    ],
    contextDescription:
      "Thanks to all sorts of data retrieved from Twitter, three journalists from the French paper «Les Échos» were able to illustrate how Twitter has become a powerful tool for Chinese diplomats.",
    chartDescription:
      "I really like it when a Viz is fully integrated in a newspaper full page.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 170,
    title: "India's unsung freedom fighters",
    date: new Date(2022),
    author: "Rajiv Surya",
    url: "https://www.figma.com/proto/mpkUGNMhgctguJOp9GkRhW/Project-I---Data-Viz-project-1?page-id=0%3A1&node-id=10-3646&viewport=-155%2C87%2C0.41&scaling=scale-down-width&starting-point-node-id=10%3A3646",
    img: [
      {
        full: "Indias-unsung-freedom-fighters.png",
        zoom: "Indias-unsung-freedom-fighters-zoom.png",
        chartId: ["circularBarplot"],
      },
    ],
    contextDescription:
      "Everybody remembers Gandhi and Nehru, but here is an overview into 50 underrated heroes who were active in the Indian freedom struggle between 1900 to 1947.",
    chartDescription:
      "A circular layour with a kind of clevelent chart (inside), labels (middle slice) and bubbles (outside).",
    tools: undefined,
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 171,
    title: "Population movements in Germany",
    date: new Date(2023, 1),
    author: "Zeit Online",
    url: "https://twitter.com/lisacmuth/status/1613558715155898373",
    img: [
      {
        full: "Population-movements-in-Germany.jpeg",
        zoom: "Population-movements-in-Germany-zoom.jpeg",
        chartId: ["map", "choropleth", "connection"],
      },
    ],
    contextDescription:
      "Depictions of population movements from and to major German cities, by Zeit Online, the web version of the German newspaper Die Zeit.",
    chartDescription:
      "Beautiful way to show connections on a map. Dark mode is very well done and bundling adds such a nice touch.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 172,
    title: "Biggest accident in history",
    date: new Date(2023, 2),
    author: "Tomas Pueyo",
    url: "https://twitter.com/tomaspueyo/status/1622753371663867905",
    img: [
      {
        full: "Biggest-accident-in-history.jpg",
        zoom: "Biggest-accident-in-history-zoom.jpeg",
        chartId: ["map"],
      },
    ],
    contextDescription:
      "Through the use of maps, videos and drawings, Tomas Pueyo gives us a great story about how India just passed China as the most populous country in the world. Spoiler alert: the causes go back a few million years.",
    chartDescription:
      "Very nice storry telling based on various visuals. Note the use of RayShader for the 3d map.",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 173,
    title: "Super Bowl commercials",
    date: new Date(2023, 2),
    author: "Simran Parwani",
    url: "https://twitter.com/simranparwani/status/1624435538433392642",
    img: [
      {
        full: "Super-Bowl-commercials.jpeg",
        zoom: "Super-Bowl-commercials-zoom.jpeg",
        chartId: ["stream"],
      },
    ],
    contextDescription:
      "Simran Parwani takes us through her creative dataviz process about the various commercials that are broadcast during the Super Bowl.",
    chartDescription:
      "The streamgraph is very elegant and convey the information efficitently. Note that it is a rare case of vertical streamgraph!",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 174,
    title: "Consumer confidence around the world",
    date: new Date(2023, 2),
    author: "Gilbert Fontana",
    url: "https://www.visualcapitalist.com/cp/charting-the-global-decline-in-consumer-confidence/",
    img: [
      {
        full: "Consumer-Confidence-around-the-world.png",
        zoom: "Consumer-Confidence-around-the-world-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "This graphic uses OECD data from 2019-2022 to chart the rise and fall of consumer confidence (expected income and confidence in the economy) in nine major countries.",
    chartDescription:
      "Small multiple is a very powerfull in data visualization. It works even better when all series are repeated but greyed out on all units! 👏",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 175,
    title: "The time at which films are born",
    date: new Date(2023, 3),
    author: "Tom Février",
    url: "https://media.lesechos.fr/infographie/9h-halles/",
    img: [
      {
        full: "The-time-at-which-films-are-born-2.jpeg",
        zoom: "The-time-at-which-films-are-born-zoom.jpeg",
        chartId: ["scatter"],
      },
    ],
    contextDescription:
      "The 9am Wednesday screenings at the UGC in the Halles district of Paris have become a true barometer to evaluate the success of a film very early on. What are the real correlations? An article by the newspaper Les Échos, and its great scrollytelling version on the web.",
    chartDescription:
      "Very good scrollytelling with animation between chart types. Each dot remains the same thing but moves along the story what allows to keep the focus.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 176,
    title: "Circular Republic",
    date: new Date(2023, 4),
    author: "Tom Février",
    url: "http://media.lesechos.fr/infographie/comprendre-legislatives/",
    img: [
      {
        full: "French-legislative-elections.jpg",
        zoom: "French-legislative-elections-zoom.jpg",
        chartId: ["circularPacking", "barplot", "voronoi"],
      },
    ],
    contextDescription:
      "A well-done scrollytelling to understand how the French legislative elections work, using an imaginary « Circular Republic ». By the French newspaper Les Échos.",
    chartDescription:
      "An awesome scrollytelling animating from a voronoi treemap to a circular packing to a barplot.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 177,
    title: "Who speaks about whom in The Office",
    date: new Date(2023, 4),
    author: "Ansgar Wolsing",
    url: "https://twitter.com/_ansgar/status/1647905766479732736",
    img: [
      {
        full: "Who-speaks-about-whom-in-The-Office.jpeg",
        zoom: "Who-speaks-about-whom-in-The-Office-zoom.jpeg",
        chartId: ["chordDiagram"],
      },
    ],
    contextDescription:
      "A visualization showing who the main characters of the tv show The Office mention by name, and how often.",
    chartDescription:
      "Using the small multiples technique with a set of chord diagram is a nice way to show the various flows of this dataset.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 178,
    title: "Wine, oil and fruit",
    date: new Date(2023, 5),
    author: "Dominic Royé",
    url: "https://twitter.com/_ansgar/status/1647905766479732736",
    img: [
      {
        full: "Wine-oil-fruit-southwestern-Europe.jpeg",
        zoom: "Wine-oil-fruit-southwestern-Europe-zoom.jpeg",
        chartId: ["map", "bubbleMap", "hexbin"],
      },
    ],
    contextDescription:
      "The cartography of wine, oil and fruit in southwestern Europe.",
    chartDescription:
      "A bubble map showing both a numeric value (area of culture) and a categoric one (type of culture)",
    tools: undefined,
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 179,
    title: "Commute noise pollution",
    date: new Date(),
    author: "Ludovic Riffault",
    url: "https://commute.dataveyes.com/",
    img: [
      {
        full: "Noise-pollution-commute-1.jpg",
        zoom: "Noise-pollution-commute-1-zoom.jpg",
        chartId: ["bubble", "line"],
      },
    ],
    contextDescription:
      "Visualisation of the ambient noise during parisian subway journeys, with algorithmically generated melodies.",
    chartDescription:
      "Pretty hard to describe this chart type as it goes more into data art than data analysis 🙃",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 180,
    title: "Commute noise pollution",
    date: new Date(),
    author: "Ludovic Riffault",
    url: "https://commute.dataveyes.com/",
    img: [
      {
        full: "Noise-pollution-commute-2.jpg",
        zoom: "Noise-pollution-commute-2-zoom.jpg",
        chartId: ["bubble", "line"],
      },
    ],
    contextDescription:
      "Visualisation of the ambient noise during parisian subway journeys, with algorithmically generated melodies.",
    chartDescription:
      "Pretty hard to describe this chart type as it goes more into data art than data analysis 🙃",
    tools: undefined,
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 181,
    title: "French short-haul flights",
    date: new Date(2023, 5),
    author: "Le Monde",
    url: "https://www.lemonde.fr/les-decodeurs/article/2023/05/24/l-interdiction-des-vols-interieurs-courts-en-france-une-mesure-videe-de-sa-substance_6174641_4355770.html",
    img: [
      {
        full: "French-short-haul-flights.jpg",
        zoom: "French-short-haul-flights-zoom.jpg",
        chartId: ["connection"],
      },
    ],
    contextDescription:
      "French legislation aims to prohibit air connections for which there is an alternative by train in less than 2h30. A measure emptied of its initial substance, which will have limited consequences in the fight against global warming.",
    chartDescription:
      "Connection map. Note the usage of arcs and not lines to show the connections.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 182,
    title: "Migrants' searches and realities",
    date: new Date(),
    author: "Mohamad Waked",
    url: "https://migrationinsearch.com/",
    img: [
      {
        full: "Migrants-searches-and-realities.jpg",
        zoom: "Migrants-searches-and-realities-zoom.jpg",
        chartId: ["stackedArea", "chordDiagram"],
      },
    ],
    contextDescription:
      "Using different types of graphs, this article shows how, all over the world, migrants' search interests differ from migration realities.",
    chartDescription:
      "Stunning project with so much information packed into this circular layout.",
    tools: undefined,
    luminosity: ["dark"],
    interactive: true,
  },
  {
    id: 183,
    title: "A day in the life of Americans",
    date: new Date(),
    author: "Nathan Yau",
    url: "https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/",
    img: [
      {
        full: "A-day-in-the-life-of-Americans.jpg",
        zoom: "A-day-in-the-life-of-Americans-zoom.jpg",
        chartId: ["bubble", "network"],
      },
    ],
    contextDescription:
      "A animated simulation of 1000 Americans' average day, from sleeping to working, leisure, and all other activities that tend to take place in a 24 hour time span.",
    chartDescription: "",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
  },
  {
    id: 184,
    title: "CO2 emissions in Europe",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-map-with-custom-legend/",
    img: [
      {
        full: "choropleth-map-with-a-customized-legend.png",
        zoom: "choropleth-map-with-a-customized-legend-zoom.png",
        chartId: ["map", "choropleth"],
      },
    ],
    contextDescription:
      "Europe has been actively working to reduce CO2 emissions, with many countries implementing diverse strategies based on their economic structures and policies. This has resulted in varying levels of emissions across the region.",
    chartDescription:
      "The Choropleth map features a well-crafted legend that guides viewers through different levels of CO2 emissions. It includes clear annotations and uses a vibrant color scheme, making it both engaging and informative.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-map-with-custom-legend/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 185,
    title: "Evolution of unemployment rates",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-small-multiple-with-highlights/",
    img: [
      {
        full: "small-multilple-line-chart-unemployment-linecharts.png",
        zoom: "small-multilple-line-chart-unemployment-linecharts-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "COVID-19 has had a major economic impact on most countries in the world, and unemployment is no exception. Most regions have seen dramatic changes in their unemployment rates in a very short space of time, but some have managed to remain stable.",
    chartDescription:
      "This small multi-line graph shows all 9 lines on each of its sub-graphs, but only one of them is highlighted at a time, making it easy to understand how each country's metric system evolved over the period, thanks to a clear colour scheme and precise annotations using arrows.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-small-multiple-with-highlights/",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 186,
    title: "Earthquake around the world",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-bubble-map-with-arrows/",
    img: [
      {
        full: "earthquakes-around-the-world.png",
        zoom: "earthquakes-around-the-world-zoom.png",
        chartId: ["map", "bubbleMap"],
      },
    ],
    contextDescription:
      "The Earth's crust is divided into several plates that float on the semi-fluid asthenosphere. When these plates move, they can collide, pull apart, or slide past each other.",
    chartDescription:
      "This bubble map illustrates that points can be used to represent the shape of tectonic plates. The low opacity of the bubbles, the absence of borders between countries and the clear annotations make it easy to read and quickly understand the position of earthquakes around the world.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-bubble-map-with-arrows/",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 187,
    title: "Evolution of movie rating",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-stacked-charts/",
    img: [
      {
        full: "evolution-movie-rating.png",
        zoom: "evolution-movie-rating-zoom.png",
        chartId: ["line", "connectedScatter"],
      },
    ],
    contextDescription:
      "The number of new films released each year has never been higher, but if we look at the average rating per year, we see that this doesn't mean they're any better, especially when compared to iconic films such as The Godfather.",
    chartDescription:
      "This chart is a combination of a word cloud in the background and a line graph in the foreground. The word cloud is based on film titles to highlight the most common words, while the line graph is very minimalist to display only relevant information.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-stacked-charts/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 188,
    title: "Evolution of number of natural disasters",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-stacked-area-with-inflexion-arrows/",
    img: [
      {
        full: "evolution-natural-disasters.png",
        zoom: "evolution-natural-disasters-zoom.png",
        chartId: ["stackedArea"],
      },
    ],
    contextDescription:
      "There are different types of natural disaster, but most tend to increase in frequency every year. In today's world, there is an average of at least one natural disaster every day. Most of these are floods or extreme weather events.",
    chartDescription:
      "This stacked area chart uses arrows with an inflection point in combination with a relevant colour scheme to help the user quickly understand what each element is and measures.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-stacked-area-with-inflexion-arrows/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 189,
    title: "Number of fiscal sponsorship",
    date: new Date(2024, 7),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-barplot-with-annotations-and-arrows/",
    img: [
      {
        full: "sponsored-projects.png",
        zoom: "sponsored-projects-zoom.png",
        chartId: ["barplot"],
      },
    ],
    contextDescription:
      "The Fiscal Sponsorship Directory is an organisation that provides a comprehensive list of fiscal sponsorship opportunities, searchable by state and service category. Its aim is to help people find a non-profit organisation for their project when they need help with financial management.",
    chartDescription:
      "This bar chart features a relevant colour scheme that makes it easy to understand which category each bar relates to. What's more, the curved arrows add a pleasant touch.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-barplot-with-annotations-and-arrows/",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 190,
    title: "Human Development Index in Sao Paulo",
    date: new Date(2024, 7),
    author: "Vinicius Oike Reginatto",
    url: "https://r-graph-gallery.com/web-choropleth-barchart-map.html",
    img: [
      {
        full: "hdi-sao-polo.png",
        zoom: "hdi-sao-polo-zoom.png",
        chartId: ["map", "choropleth", "histogram"],
      },
    ],
    contextDescription:
      "This visualization shows the Human Development Index (HDI) at the subregional level in Sao Paulo, Brazil’s largest city. The values follow the standard United Nations’s HDI: values are in the 0 to 1 range.",
    chartDescription:
      "This is a clean choropleth map with a histogram on the side. The histogram is great as it gives additional context to the map and serves as a legend",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-choropleth-barchart-map.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 191,
    title: "Evolution of global temperature",
    date: new Date(2024, 9),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-lollipop-with-colormap-and-arrow/",
    img: [
      {
        full: "lollipop-evolution-global-temperature.png",
        zoom: "lollipop-evolution-global-temperature-zoom.png",
        chartId: ["lollipop"],
      },
    ],
    contextDescription:
      "Climate change, and in particular rising temperatures, is one of the major issues of the 21st century. We are predicting a warming of around 1.5° Celsius by 2050, and 2 to 4° Celsius by 2100.",
    chartDescription:
      "This lollipop plot is beautifully designed with a colour palette from PyPalettes, curved arrows with DrawArrow and cool fonts loaded via PyFonts. It perfectly highlights the rising temperatures we're facing.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-lollipop-with-colormap-and-arrow/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 192,
    title: "Japan's population decline",
    date: new Date(2024, 9),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-area-chart-with-different-colors-for-positive-and-negative-values/",
    img: [
      {
        full: "area-chart-japan-population.png",
        zoom: "area-chart-japan-population-zoom.png",
        chartId: ["area"],
      },
    ],
    contextDescription:
      "For several decades now, Japan's population has been growing more slowly, and has even been declining since 2010. This trend appears to be continuing, even though Japan is losing around 0.5% of its population every year.",
    chartDescription:
      "This minimalist graph changes colour when the values fall below 0, underlining the fact that this is a major change. What's more, the annotations around the graph provide the key contextual information you need.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-area-chart-with-different-colors-for-positive-and-negative-values/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 193,
    title: "Comparing winters in the US",
    date: new Date(2023, 9),
    author: "United States Geological Survey",
    url: "https://www.usgs.gov/media/images/distributions-highlow-a-tale-two-winters",
    img: [
      {
        full: "two-winters-usa.jpg",
        zoom: "two-winters-usa-zoom.png",
        chartId: ["hexbin", "lollipop"],
      },
    ],
    contextDescription:
      "Climate change is affecting weather patterns across the board. Although extreme heat often takes the spotlight, winter conditions are shifting as well. The 2022–2023 winter season experienced unexpected shifts in both the timing and locations of snowfall.",
    chartDescription:
      "This display is a combination of a hexagonal map and a lollipop-shaped graph. The x-axis of the lollipop is actually the longitude, which makes it easier to read the map and draw parallels.",
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 194,
    title: "Changes in infant mortality rates",
    date: new Date(2023, 9),
    author: "Saloni Dattani",
    url: "https://ourworldindata.org/child-mortality",
    img: [
      {
        full: "infant-death-rates-evolution.png",
        zoom: "infant-death-rates-evolution-zoom.png",
        chartId: ["line"],
      },
    ],
    contextDescription:
      "The chart shows that infant death rates are significantly higher on the first day of life, but decrease sharply in the following days and continue to decline over the year. Over time, the overall curve has shifted down, indicating that infant survival has improved, making every day of infancy safer compared to previous decades.",
    chartDescription:
      "This graph uses one line per year, and even if the trend is not displayed on the x or y axis, the trend over time can be quickly understood thanks to the data and a relevant colour pattern.",
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 195,
    title: "Summer films themes",
    date: new Date(2024, 9),
    author: "Georgios Karamanis",
    url: "https://r-graph-gallery.com/web-sankey-diagram-with-highlight.html",
    img: [
      {
        full: "sankey-summer-movies.png",
        zoom: "sankey-summer-movies-zoom.png",
        chartId: ["sankey"],
      },
    ],
    contextDescription:
      "This graph shows the evolution of film themes containing the word ‘summer’, according to IMDb data.",
    chartDescription:
      "The sankey diagram highlights the trend at a glance, while the annotations give us more information about the data.",
    tools: [
      {
        name: "python",
        link: "https://r-graph-gallery.com/web-sankey-diagram-with-highlight.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 196,
    title: "Recycling rates by London borough",
    date: new Date(2024, 9),
    author: "Lisa Hornung",
    url: "https://python-graph-gallery.com/web-waffle-with-small-multiples/",
    img: [
      {
        full: "map-waffle-chart-london-recycling.png",
        zoom: "map-waffle-chart-london-recycling-zoom.png",
        chartId: ["waffle", "map"],
      },
    ],
    contextDescription:
      "This graph shows the recycling rates for each London borough, highlighting significant differences: some boroughs recycle 17% (minimum) and others nearly 50%.",
    chartDescription:
      "The waffle charts are represented in such a way that the overall figure has the same shape as that of London and each borough is well located.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-waffle-with-small-multiples/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 197,
    title: "Share of cereals for animals",
    date: new Date(2024, 9),
    author: "Benjamin Nowak",
    url: "https://r-graph-gallery.com/web-waffle-chart-share.html",
    img: [
      {
        full: "waffle-share-animal-feeds.png",
        zoom: "waffle-share-animal-feeds-zoom.png",
        chartId: ["waffle"],
      },
    ],
    contextDescription:
      "This graph shows the proportion of cereals used for animal feed on different continents.",
    chartDescription:
      "Using the waffle chart to highlight the differences between the continents makes it much easier to understand and compare them.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-waffle-chart-share.html",
      },
    ],
    luminosity: ["dark"],
    interactive: false,
  },
  {
    id: 198,
    title: "Energy consumption per French region",
    date: new Date(2024, 9),
    author: "Joseph Barbier",
    url: "https://python-graph-gallery.com/web-heatmap-comparison/",
    img: [
      {
        full: "double-heatmap.png",
        zoom: "double-heatmap-zoom.png",
        chartId: ["heatmap"],
      },
    ],
    contextDescription:
      "Energy consumption by region can be a misleading indicator, whereas normalisation per capita ensures comparability between regions.",
    chartDescription:
      "A double heat map for time series comparison makes it easy to understand the two different measurements.",
    tools: [
      {
        name: "python",
        link: "https://python-graph-gallery.com/web-heatmap-comparison/",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 199,
    title: "Rent in San Francisco",
    date: new Date(2024, 9),
    author: "Ansgar Wolsing",
    url: "https://r-graph-gallery.com/web-ridgeline-plot-with-inside-plot-and-annotations.html",
    img: [
      {
        full: "ridgeline-with-small-legend.png",
        zoom: "ridgeline-with-small-legend-zoom.png",
        chartId: ["ridgeline"],
      },
    ],
    contextDescription:
      "Relationship between labels describing flats and their associated price distribution in the Bay Area.",
    chartDescription:
      "Ridgeline plot with an isolated density chart as a legend.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-ridgeline-plot-with-inside-plot-and-annotations.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 200,
    title: "Party Advantage in the U.S",
    date: new Date(2024, 9),
    author: "Aman Bhargava",
    url: "https://r-graph-gallery.com/web-vertical-line-chart-with-ggplot2.html",
    img: [
      {
        full: "party-advantages-us.png",
        zoom: "party-advantages-us-zoom.png",
        chartId: ["ridgeline"],
      },
    ],
    contextDescription:
      "Evolution of the most popular party (Democrats VS Republicans) over time.",
    chartDescription:
      "Graph with vertical lines that change colour over time and a minimalist yet insightful legend on the right.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-vertical-line-chart-with-ggplot2.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 201,
    title: "Storms in the Atlantic Ocean",
    date: new Date(2024, 9),
    author: "Muhammad Azhar",
    url: "https://r-graph-gallery.com/web-waffle-for-time-evolution.html",
    img: [
      {
        full: "storms-atlantic-waffle.png",
        zoom: "storms-atlantic-waffle-zoom.png",
        chartId: ["waffle", "timeseries"],
      },
    ],
    contextDescription:
      "Evolution of the different types of storms in the Atlantic Ocean, highlighting that tropical storms are the most frequent.",
    chartDescription:
      "Waffle chart combined with a time series chart, divided by category, with a beautiful colour palette and legend.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-waffle-for-time-evolution.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 202,
    title: "Density map in the style of Jacques Bertin",
    date: new Date(2024, 9),
    author: "Benjamin Nowak",
    url: "https://r-graph-gallery.com/web-valued-dots-map-bertin.html",
    img: [
      {
        full: "densitymap-jacques-bertin.png",
        zoom: "densitymap-jacques-bertin-zoom.png",
        chartId: ["density2d", "map"],
      },
    ],
    contextDescription:
      "Distribution of the French population in a map in the style of Jacques Bertin.",
    chartDescription: "Density map in a minimalist black and white style.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-valued-dots-map-bertin.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 203,
    title: "Dorling cartogram of the world",
    date: new Date(2024, 9),
    author: "Benjamin Nowak",
    url: "https://r-graph-gallery.com/web-dorling-cartogram-with-R.html",
    img: [
      {
        full: "dorling-cartogram-bubble.png",
        zoom: "dorling-cartogram-bubble-zoom.png",
        chartId: ["map", "cartogram"],
      },
    ],
    contextDescription:
      "Comparison of grassland and arable land in each agricultural region of each country.",
    chartDescription:
      "Dorling cartogram (bubble map distorted to represent the proportion of land use) with a comparison within each bubble.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-dorling-cartogram-with-R.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
  {
    id: 204,
    title: "Evolution of wealth per country",
    date: new Date(2024, 9),
    author: "Gilbert Fontana",
    url: "https://r-graph-gallery.com/web-stacked-area-chart-inline-labels.html",
    img: [
      {
        full: "stacked-area-chart-fontana.png",
        zoom: "stacked-area-chart-fontana-zoom.png",
        chartId: ["stackedArea"],
      },
    ],
    contextDescription:
      "Changes in household wealth in some countries and in the rest of the world.",
    chartDescription:
      "Stacked area chart with a beautiful colour palette and perfectly aligned in-line labels.",
    tools: [
      {
        name: "R",
        link: "https://r-graph-gallery.com/web-stacked-area-chart-inline-labels.html",
      },
    ],
    luminosity: ["light"],
    interactive: false,
  },
];
