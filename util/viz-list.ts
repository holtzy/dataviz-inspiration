import { ChartId } from "./sectionDescription";

export const Tools = ["R" , "python" , "tableau" , "data wrapper" , "d3.js" , "react" , "excel" , "javascript"] as const;
export type Tool = typeof Tools[number];

export type Luminosity = "light" | "dark"

export type VizItem = {
    title: string;
    date: Date;
    author: string;
    url: string;
    img: {full: string, zoom: string, chartId: ChartId[]}[]; // zoom is on the wall. full is on the modal
    contextDescription: string;
    chartDescription: string;
    tools?: {name: Tool, link?: string}[]
    luminosity: Luminosity[];
    interactive: boolean
}

export const vizList: VizItem[] = [
    {
        title: "Here’s When We Expect Omicron to Peak",
        date: new Date(2022, 0),
        author: "The New York Times",
        url: "https://www.nytimes.com/2022/01/06/opinion/omicron-covid-us.html",
        img: [{full: "omicron-NYT.png", zoom: "omicron-NYT-zoom.png", chartId: ["stream"]}],
        contextDescription: "We're in early 2022, the Omicron variant importance is raising across the globe and the New york times decides to represent the Covid pandemic evolutioin of the last 2 years.",
        chartDescription: "The New York Times <a href='https://twitter.com/FreedZach/status/1479132573578240001'>literally broke the internet</a> with this circular streamgraph. The dataviz community is divided, trying to understand if this unconventional figure is pure genius or trash, since it does not respect most of the comon rules.<br/><br/>Hint: when so many people talk about a chart, there is probably something good about it!",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Covid 19 Dashboard - India",
        date: new Date(2021, 10),
        author: "Group of dedicated volunteers",
        url: "https://www.covid19india.org",
        img: [{full: "covid19India.png", zoom: "covid19India-zoom.png", chartId: ["map", "bubbleMap"]}],
        contextDescription: "The covid crisis is a world wide pandemic and India is certainly not spared. Some volunteer decided to create a dashboard to help Indian politics to take information driven decisions.",
        chartDescription: "A dashboard describing the spread of Covid 19 in India. Highly interactive with a pretty slick design. Dark mode support, many different types of viz with smooth transition between dataset.",
        tools: [{name: "react", link: "https://github.com/covid19india/covid19india-react"}, {name: "d3.js", link:"https://github.com/covid19india/covid19india-react"}],
        luminosity: ["light", "dark"],
        interactive: true
    },
    {
        title: "Migration waves",
        date: new Date(1000, 0),
        author: "National Geographic",
        url: "https://www.nationalgeographic.com/magazine/graphics/graphic-shows-past-50-years-of-global-human-migration",
        img: [{full: "migration-waves.png", zoom: "migration-waves-zoom.png", chartId:  ["density", "ridgeline"]}],
        contextDescription: "The flow of people across borders has long shaped our world. Data from the past 50 years of international migration helped National Geographic understand why people make the choice to leave and where they go. Less than 10 percent of these migrants are forced to flee; most are seeking a better life and move only when they can afford to.",
        chartDescription: "The article describes the evolution of the immigration of many countries using smoothed area charts. The last figure looks pretty much like a ridgeline chart that is usually used to compare distributions, but smartly used here to compare evolutions.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Russia, Gas, and the Ukraine Conflict",
        date: new Date(2022, 2),
        author: "New York Times",
        url: "https://www.nytimes.com/interactive/2022/02/15/business/energy-environment/russia-gas-europe-ukraine.html",
        img: [{full: "russia-gas-ukraine.png", zoom: "russia-gas-ukraine-zoom.png", chartId: ["sankey"]}],
        contextDescription: "Europe relies on Russia’s natural gas to help heat millions of homes, generate electricity and power factories. With Russian troops massed along Ukraine’s border, Europe’s heavy dependence on Russia is limiting its diplomatic options and threatening to throw its energy supplies into turmoil. This map describes what proportion of the gas supply is distributed to each European country.",
        chartDescription: "This viz is a choropleth map with a sankey diagram on top. The choropleth shows how much each country relies on Russian gaz. The sankey diagram (arrows) shows where the Russian gas is distributed.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Mario Kart world's records",
        date: new Date(2021, 4),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html",
        img: [{full: "lollipop-plot-with-r-mario-kart-64-world-records.png", zoom: "lollipop-plot-with-r-mario-kart-64-world-records-zoom.png", chartId: ["lollipop"]}],
        contextDescription: "Mario Kart on Nintendo 64 is probably one of the most famouse game of all time (at least it is for me 😃). In this chart Cédric Scherer visualized the world records to understand what's the best character to play with.",
        chartDescription: "A lollipop chart grouped by character. It's interesting to notice that character names are not aligned vertically, but displayed next to each segment for better readability.",
        tools: [{name: "R", link: "https://www.r-graph-gallery.com/web-lollipop-plot-with-r-mario-kart-64-world-records.html"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Appearance of the Five Most Popular X-Men Characters",
        date: new Date(2020, 6),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html",
        img: [{full: "streamchart-xmen.png", zoom: "streamchart-xmen-zoom.png", chartId: ["stream"]}],
        contextDescription: "A chart that studies the appearances of the most popular characters in Chris Claremont’s X-Men comics",
        chartDescription: "A set of aligned streamcharts with helpful annotations. Nice attention to details with striking color palette, great fonts and clear legend.",
        tools: [{name: "R", link: "https://www.r-graph-gallery.com/web-streamchart-with-ggstream.html"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Cracking your favorite password",
        date: new Date(2020, 0),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html",
        img: [{full: "web-circular-lollipop-plot-with-ggplot2.png", zoom: "web-circular-lollipop-plot-with-ggplot2-zoom.png", chartId: ["lollipop", "circularBarplot"]}],
        contextDescription: "Visualization of the time it takes to crack the 500 most common passwords by online guessing.",
        chartDescription: "A circular lollipop chart where each item is a password. Sorted by rank and colored by category. Annotation for the most extreme password, cool split by category at the bottom.",
        tools: [{name: "R", link: "https://www.r-graph-gallery.com/web-circular-lollipop-plot-with-ggplot2.html"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Infections caught in laboratories are surprisingly common",
        date: new Date(2021, 7),
        author: "the Economist",
        url: "https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common",
        img: [{full: "infection-from-lab.png", zoom: "infection-from-lab-zoom.png", chartId: ["barplot"]}],
        contextDescription: "In the middle of a worlwide pandemic, some people wonder if covid-19 escaped from a Chinese lab. The economist checked the probability of this by comparing with other diseases.",
        chartDescription: "A simple barplot with the well known Economics style signature. Note bars are displayed horizontally, each being labeled using a very readable manner.",
        tools: [{name: "python", link: "https://www.python-graph-gallery.com/web-horizontal-barplot-with-labels-the-economist"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Enrollments in historically black colleges",
        date: new Date(2022, 2),
        author: "Tobias Stalder",
        url: "https://www.r-graph-gallery.com/web-extended-dumbbell-plot-ggplot2.html",
        img: [{full: "HBCU_trends_gender.png", zoom: "HBCU_trends_gender-zoom.png", chartId: ["lollipop"]}],
        contextDescription: "A tidy tuesday challenge looking at how many males and females enrolled at historically black colleges and universities.",
        chartDescription: "A dumbbell plot made with ggplot2. On top of the nice layout and annotations, it also have additional grouped mean and standart deviation for each year.",
        tools: [{name: "R", link: "https://www.r-graph-gallery.com/web-extended-dumbbell-plot-ggplot2.html"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Covid dashboard",
        date: new Date(2021, 1),
        author: "Le Monde",
        url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
        img: [{full: "covid-dash-lemonde-1.png", zoom: "covid-dash-lemonde-1.png", chartId: ["map"]}, {full: "covid-dash-lemonde-2.png", zoom: "covid-dash-lemonde-2-zoom.png", chartId: ["line"]}, {full: "covid-dash-lemonde-3.png", zoom: "covid-dash-lemonde-3-zoom.png", chartId: ["stream"]}, {full: "covid-dash-lemonde-4.png", zoom: "covid-dash-lemonde-4.png", chartId: ["line", "barplot"]}],
        contextDescription: "Covid is everywhere in the news and every newspaper is trying to summarize the situation in its country. Le Monde is one of the most famouse newspaper in France and does a pretty good job in its daily updated dashboard.",
        chartDescription: "Several viz are provided, going from mirror area charts to streamcharts, with different kinds of map and several tables. Worth a read if you speak 🇫🇷.",
        tools: [{name: "d3.js"}],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Eigenfactor project",
        date: new Date(2018, 1),
        author: "Eigenfactor Project & Moritz Stefaner",
        url: "https://www.lemonde.fr/les-decodeurs/article/2020/05/05/coronavirus-age-mortalite-departements-pays-suivez-l-evolution-de-l-epidemie-en-cartes-et-graphiques_6038751_4355770.html",
        img: [{full: "scientific-pub-connection.png", zoom: "scientific-pub-connection-zoom.png", chartId: ["edgeBundling"]}],
        contextDescription: "A visualization of scientific publication citation network. More than 60M citations coming from more than 7k journals were considered. Goal was to look for patterns on how journals tend to cite each other.",
        chartDescription: "An interactive hierarchical edge bundling where each node is a scientific journal. A journal is linked with another through an edge if it cites it in one of its publication. Clicking on a specific journal highlights its connections.",
        tools: [{name: "d3.js"}],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Inequality in Spain",
        date: new Date(2021, 11),
        author: "Dominic Royé",
        url: "https://dominicroye.github.io/en/project/population/",
        img: [{full: "map-inequality-spain.png", zoom: "map-inequality-spain-zoom.png", chartId: ["map", "choropleth"]}],
        contextDescription: "A visualization of Spain, looking a both inequality (using the Gini Index) and average rent prices.",
        chartDescription: "A dichotomous choropleth map with nice annotation, good looking color palette and a 2D color mapping.",
        tools: [{name: "R", link: "https://dominicroye.github.io/en/project/population/"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Troops Vs. Cost",
        date: new Date(2013, 10),
        author: "Jorge Camoes",
        url: "https://excelcharts.com/redraw-troops-vs-cost-time-magazine/",
        img: [{full: "Troops-vs-Costs.png", zoom: "Troops-vs-Costs-zoom.png", chartId: ["connectedScatter"]}],
        contextDescription: "The Time Magazine published a Dual-Y axis chart showing the evolution of both the army budget and the Number of troops between 1980 and 2012. Jorge Camoes decided to transform it with his own chart type.",
        chartDescription: "The result is a connected scatterplot. I personally prefer it since dual Y axis are notoriously <a href='https://www.data-to-viz.com/caveats.html'>broken</a>, but it's hard to know if people truely understand it when they're not used to it.",
        tools: [{name: "excel"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Vaccines and Infectious Diseases",
        date: new Date(2015, 1),
        author: "Dov Friedman & Tynan DeBold",
        url: "https://graphics.wsj.com/infectious-diseases-and-vaccines/",
        img: [{full: "vaccine-heatmap.png", zoom: "vaccine-heatmap-zoom.png", chartId: ["heatmap"]}],
        contextDescription: "Probably the most famous viz about vaccines. It represents the number of measle infected people measured over 70-some years and across all 50 states. It shows a clear trend of decline after vaccines were introduced.",
        chartDescription: "A clean heatmap that shows the number of cases per 100,000 people. Available for other diseases with similar result.",
        tools: [{name: "excel"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "A Nation Divided",
        date: new Date(2014, 9),
        author: "Die Zeit",
        url: "https://www.zeit.de/feature/german-unification-a-nation-divided",
        img: [{full: "east-vs-west-germany.png", zoom: "east-vs-west-germany-zoom.png", chartId: ["hexbin"]}],
        contextDescription: "In the early euphoria following the fall of the Berlin Wall in 1989, Germany moved quickly to erase the scars of its Cold War division. But East Germany’s legacy remains visible in statistics. Die Zeit offers a set of maps showing the remaining discrepancies between the West and the East.",
        chartDescription: "A massive load of hexbin maps, showing various variables like the average income, the proportion of people called Ronny or the avera farm size. Smooth transition between variables and clean design.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Nobels, no degrees",
        date: new Date(2012, 10),
        author: "G. Lupi, S. Quadri, G. Rossi, D. Ciuffi, F. Fragapane, F. Majno",
        url: "https://www.behance.net/gallery/14159439/Nobel-no-degrees",
        img: [{full: "nobel-prices.png", zoom: "nobel-prices-zoom.png", chartId: ["line", "sankey", "barplot"]}],
        contextDescription: "This visualization explores the story of Nobel prizes through years.Visualized for each laureate are prize category, year the prize was awarded, and age of the recipient at the time, as well as principal academic affiliations and hometown.",
        chartDescription: "Each dot represents a Nobel laureate, and each recipient is positioned according to the year the prize was awarded (x axis) and his or her age at the time of the award (y axis).",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Shipmap.org",
        date: new Date(2012, 10),
        author: "Kiln",
        url: "https://www.shipmap.org",
        img: [{full: "shipmap.png", zoom: "shipmap-zoom.png", chartId: ["connection"]}, {full: "shipmap.png", zoom: "shipmap-2-zoom.png", chartId: ["connection"]}],
        contextDescription: "Shipmap.org is an interactive map of commercial shipping movements based on hundreds of millions of data points from throughout 2012. The project's aim is to highlight for a broad audience the extraordinary scale of modern commercial shipping, the routes these huge vessels take around the world, the geographic spread of different types of cargo boats, and the amount of carbon dioxide they produce.",
        chartDescription: "The unique base map shows ocean depth and major rivers, while the ships can be viewed as a high-resolution animation of movements over time (the 'ships' view) or as a plot showing all the positions at once (the 'routes' view), optionally colour-coded by ship type. A Talkie voiceover with music introduction sets the scene and provides an explanatory tour of the map.",
        tools: [{name: "javascript"}],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Rhythm of Food",
        date: new Date(2016, 1),
        author: "M. Stefaner, Y. Vishnevsky, S. Rogers, A. Cairo et al.",
        url: "http://rhythm-of-food.net",
        img: [{full: "rhythm-food.png", zoom: "rhythm-food.png", chartId: ["heatmap"]}],
        contextDescription: "An interactive explorer based on the weekly Google Trends data for hundreds of dishes and ingredients, gathered over 15 years. It allows investigating the seasons and rhythm of food around the world",
        chartDescription: "The main viz of this project is a radial diagram. One viz per ingredient. The color of each square is for the year. The distance to center (radius) is for the number of google search.",
        tools: [{name: "javascript"}],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "The State of Javascript",
        date: new Date(2020, 1),
        author: "A. Wattenberger, S. Greif and R. Benitte",
        url: "https://2020.stateofjs.com/en-US/technologies/",
        img: [{full: "state-of-js.png", zoom: "state-of-js-zoom.png", chartId: ["connectedScatter"]}],
        contextDescription: "The State of Js is a survey that describes how Javascript (a programing language) evolved in the past few years. In the chart below they describe what libraries are trending, and which one are slowly disappearing. The whole webpage is awesome and you should definitely take a look.",
        chartDescription: "My favorite grouped connected scatterplot! Each line goes from 2016 to 2020. A higher point means a technology has been used by more people, and a point further to the right means more users want to learn it; or have used it and would use it again.",
        tools: [{name: "javascript", link: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js"}, {name: "d3.js", link: "https://github.com/StateOfJS/StateOfJS-2019/blob/master/src/core/charts/tools/ToolsArrowsChart/ToolsArrowsChart.js"}],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Quantifying the evolution of individual scientific impact",
        date: new Date(2017, 0),
        author: "Kim Albrecht",
        url: "sciencepaths.kimalbrecht.com",
        img: [{full: "scientific-impact.png", zoom: "scientific-impact-zoom.png", chartId: ["line", "ridgeline"]}],
        contextDescription: "How does the impact of a scientist's work change over a scientific career? Does impact, arguably the most relevant performance measure, follow predictable patterns? Can we predict the timing of a scientist’s outstanding achievement? Kim checked the evolution of scientific author citation levels to answer those questions.<br/><br/>The result is called the <b>random impact rule</b>: the highest impact paper of a researcher can be anywhere in the sequence of papers!",
        chartDescription: "Each row is a scientist. From left to right, the first to the last paper of a scientist are arranged, ignoring their timing of publication. The line height shows the number of citation of the paper. The app has nice controls on top, including interactive histograms that I really like.",
        tools: [{name: "javascript"}, {name: "d3.js"}],
        luminosity: ["dark"],
        interactive: true
    },
    {
        title: "Rappers, Sorted by Size of Vocabulary",
        date: new Date(2019, 0),
        author: "Matthew Daniels",
        url: "https://pudding.cool/projects/vocabulary/index.html",
        img: [{full: "rapper-lyrics.png", zoom: "rapper-lyrics-zoom.png", chartId: ["scatter", "bubble", "circularPacking"]}, {full: "rapper-lyrics-2.png", zoom: "rapper-lyrics-2-zoom.png", chartId: ["histogram"]}],
        contextDescription: "A projects that compares the number of unique words used by some of the most famous artists in hip hop using each artist’s first 35,000 lyrics. Jedi Mind Tricks used 6424 unique words, compared to DMX that counts 2936.",
        chartDescription: "A 1 dimension scatterplot where the X axis shows the number of unique words and each item is an artist, represented by a circle and an avatar. The Y position is random, just using <a href='https://www.data-to-viz.com/caveat/boxplot.html>jittering</a> to avoid overlap.",
        tools: [{name: "javascript"}],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Shifting Parent Work Hours, Mom vs. Dad",
        date: new Date(2018, 0),
        author: "Nathan Yau",
        url: "https://flowingdata.com/2016/04/20/parent-work-hours/",
        img: [{full: "parent-work.png", zoom: "parent-work-zoom.png", chartId: ["histogram"]}],
        contextDescription: " Is it more common these days for dads to spend time with kids and work around the house? If so, is time spent that much different from decades past? How do dads’ times compare to moms’ times? An answer based on the American Time Use Survey that show hours spent with unpaid housework and childcare against hours spent at a job by moms and dads.",
        chartDescription: "2 interactive histograms with animated transition between datasets and control buttons on top.",
        tools: [{name: "javascript"}],
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Ukrain War: Poutine's assault organization",
        date: new Date(2022, 1),
        author: "Le Monde",
        url: "https://www.lemonde.fr/international/article/2022/02/25/guerre-en-ukraine-l-ordre-de-bataille-de-poutine_6115167_3210.html",
        img: [{full: "ukraine-attack-leMonde.jpeg", zoom: "ukraine-attack-leMonde-zoom.png", chartId: ["map"]}],
        contextDescription: "On the 24th of February Russian troops invaded Ukraine. <i>Le monde</i> created a full page on the topic based on a map of the area.",
        chartDescription: "Not really dataviz since this map does not display any data. But still interesting for design inspiration, notably for the whole page layout.",
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "At least half a million refugees flee Ukraine",
        date: new Date(2022, 1),
        author: "The New York Times",
        url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
        img: [{full: "ukraine-migration-nyt.png", zoom: "ukraine-migration-nyt-zoom.png", chartId: ["map", "connection"]}],
        contextDescription: "The New York Times covered the migration of Ukrainians fleeing the war with a very complete article full of migration maps.",
        chartDescription: "This snapshot shows a sankey diagram drawn on top of a map. Read the article for more map examples.",
        luminosity: ["light"],
        interactive: true
    },
    {
        title: "Big mac price",
        date: new Date(2021, 2),
        author: "Cédric Scherer",
        url: "https://www.r-graph-gallery.com/web-line-chart-with-labels-at-end-of-line.html",
        img: [{full: "big-mac-price.png", zoom: "big-mac-price-zoom.png", chartId: ["line"]}],
        contextDescription: "Compared to the fincancial crisis in 2008, how much more or less do you have to pay for a Big Mac today?",
        chartDescription: "A clean line chart allowing to compare the evolution of several groups. Note the clean inline legend that avoids the <a href='https://www.data-to-viz.com/caveat/spaghetti.html'>spaghetti effect</a>.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-line-chart-with-labels-at-end-of-line.html"}, {name: "python", link:"https://python-graph-gallery.com/web-line-chart-with-labels-at-line-end"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Rouble tumbles to record low",
        date: new Date(2022, 1),
        author: "The New York Times",
        url: "https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",
        img: [{full: "rouble-tumbles-low.png", zoom: "rouble-tumbles-low-zoom.png", chartId: ["line"]}, {full: "rouble-tumbles-low.png", zoom: "rouble-tumbles-low-zoom-dark.png", chartId: ["line"]}],
        contextDescription: "A good proportion of the world countries have applied heavy sanctions to Russia following the Ukraine invasion. As a result the Rouble value is quickly decreasing.",
        chartDescription: "A line chart of the Ruble / USD exchange rate evolution. Two things are interesting here. Annotations are very clear and truly make a difference in the chart quality. The Y scale is inverted which is usually a bad thing, but works well here.",
        luminosity: ["light", "dark"],
        interactive: false
    },
    {
        title: "Change in common household types",
        date: new Date(2022, 1),
        author: "Nathan Yau",
        url: "https://flowingdata.com/2022/03/01/change-in-common-household-types-in-the-u-s/",
        img: [{full: "household.png", zoom: "household-zoom.png", chartId: ["area"]}],
        contextDescription: "In the 1970s, the most common household type in the U.S. was a married couple with kids. But over time, as people wait longer to get married and have fewer kids (if any), it’s grown more common to live alone or with non-family.",
        chartDescription: "This project describes this kind of effect using an alluvial diagram, showing both the rank and the percentage of each household type over the years.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Decline in sex",
        date: new Date(2019, 3),
        author: "Washington Post",
        url: "https://www.washingtonpost.com/business/2019/03/29/share-americans-not-having-sex-has-reached-record-high/",
        img: [{full: "decline-sex.png", zoom: "decline-sex-zoom.png", chartId: ["line"]}],
        contextDescription: "The share of Americans not having sex has reached a record high. The washington post made a full article on the topic, explaining why this is mainly due to young people which sounds scary to me.",
        chartDescription: "A simple timeseries line chart showing the evolution of 2 groups (male and female). Note the on-chart annotation of both the group names and the current values.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Student exchanges in Europe",
        date: new Date(2022, 2),
        author: "Benjamin Nowak",
        url: "https://www.washingtonpost.com/business/2019/03/29/share-americans-not-having-sex-has-reached-record-high/",
        img: [{full: "student-exchance-europe.png", zoom: "student-exchance-europe-zoom.png", chartId: ["barplot"]}],
        contextDescription: "Erasmus is an exchange program allowing students to study abroad for a semester or more. This figure allows to see which countries are the most involved.",
        chartDescription: "The chart is a mirror barplot, showing both the number of outgoing and incoming students. I love the general layout and visual, even though I'm not sure about the opacity used to encode the year.",
        tools: [{name: "R", link:"https://t.co/LgnyJ3w63Y"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Sentiment in Russian tweets",
        date: new Date(2022, 2),
        author: "The Economist",
        url: "https://www.economist.com/graphic-detail/2022/03/12/the-war-in-ukraine-has-made-russian-social-media-users-glum",
        img: [{full: "sentiment-russia-twitter.png", zoom: "sentiment-russia-twitter-zoom.png", chartId: ["line"]}],
        contextDescription: "The war in Ukraine has made Russian social-media users glum. Posts on Twitter became far sadder than at the start of the covid-19 pandemic. A proof using sentiment analysis.",
        chartDescription: "A timeseries where evolution is represented using circles (average per day) and a line (7-day average). Having both information on the same figure is truly insightful. And the annotation of the outlier weeks help understand the full story.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Cat rescues by the London fire brigade",
        date: new Date(2021, 2),
        author: "Georgios Karamanis",
        url: "https://www.r-graph-gallery.com/web-time-series-and-facetting.html",
        img: [{full: "cat-rescues.png", zoom: "cat-rescues-zoom.png", chartId: ["line", "area"]}],
        contextDescription: "How many cats are rescued by the London fire brigade each year? How does it compare with other animals? An answer with data, split by suburbs",
        chartDescription: "Each item of the small multiple is a suburb. For each, we quickly see the number of cats (blue line) and other animals (red lines). Coloring the area between both in blue or red makes it easy to compare both at a higher scale.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-time-series-and-facetting.html"}, {name: "python", link:"https://python-graph-gallery.com/web-time-series-and-facetting-with-matplotlib"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "A world of language",
        date: new Date(2021, 8),
        author: "South China Morning Post",
        url: "https://www.scmp.com/infographics/article/1810040/infographic-world-languages",
        img: [{full: "world-of-language.png", zoom: "world-of-language-zoom.png", chartId: ["circularPacking"]}],
        contextDescription: "A deep look into the 7102 known languages alive in the world. What are the main ones? In which country are they spoken?",
        chartDescription: "A circular Voronoi diagram showing the importance of each language. So much information packed on the same figure, in a very eye-catching style.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Hong Kong and the Omicron variant",
        date: new Date(2022, 2),
        author: "the Financial Times",
        url: "https://www.scmp.com/infographics/article/1810040/infographic-world-languages",
        img: [{full: "hong-kong-omicron.png", zoom: "hong-kong-omicron-zoom.png", chartId: ["barplot"]}, {full: "hong-kong-omicron-2.png", zoom: "hong-kong-omicron-zoom-2.png", chartId: ["line"]}],
        contextDescription: "Hong Kong’s vaccination rate has lagged far behind peer countries, especially among the most vulnerable. This article by the financial times goes deep into this matter and compares the situation with other countries.",
        chartDescription: "Some timeseries line chart with clean on-graph legends and a set of 3 stacked bar chart clearly showing how Hong-Kong differs to other countries.",
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Topography of Switzerland",
        date: new Date(2022, 2),
        author: "Tobias Stalder",
        url: "https://twitter.com/toeb18/status/1503129088663433219",
        img: [{full: "switzerland-topography.png", zoom: "switzerland-topography-zoom.png", chartId: ["map"]}],
        contextDescription: "A transect from the Swiss Alps over the Swiss lowlands to the Jura mountains.",
        chartDescription: "A very clean 3D map made with R with a minigraph, very clean and concise.",
        tools: [{name: "R", link:"https://twitter.com/toeb18/status/1503129095433080838/photo/1"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Palmer Penguins",
        date: new Date(2021, 2),
        author: "Tuo Wang",
        url: "https://www.r-graph-gallery.com/web-scatterplot-and-ggrepel.html",
        img: [{full: "palmer-penguins.png", zoom: "palmer-penguins-zoom.png", chartId: ["scatter"]}],
        contextDescription: "Analyse the features of 3 penguins species: show the relationship between bill length and flipper length",
        chartDescription: "A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with R and the tidyverse.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-scatterplot-and-ggrepel.html"}, {name: "python", link:"https://python-graph-gallery.com/web-text-repel-with-matplotlib"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Corruption and Human Development",
        date: new Date(2021, 2),
        author: "Claus O. Wilke",
        url: "https://www.r-graph-gallery.com/web-scatterplot-corruption-and-human-development.html",
        img: [{full: "corruption-hdi.png", zoom: "corruption-hdi-zoom.png", chartId: ["scatter"]}],
        contextDescription: "A scatterplot that shows the relationship between the Human Development Index and the Corruption Perceptions Index.",
        chartDescription: "A scatterplot with regression fit and automatic text repel. Relationship is striking.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-scatterplot-corruption-and-human-development.html"}, {name: "python", link:"https://python-graph-gallery.com/web-scatterplot-text-annotation-and-regression-matplotlib"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Penguin Radar",
        date: new Date(2021, 2),
        author: "Tuo Wang",
        url: "https://www.r-graph-gallery.com/web-radar-chart-with-R.html",
        img: [{full: "penguin-radar.png", zoom: "penguin-radar-zoom.png", chartId: ["radar"]}],
        contextDescription: "Compares the bill length, bill debt, flipper length and body mass of 2 penguin species.",
        chartDescription: "A radar chart that compares the features of 3 groups for 4 numeric variables.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-radar-chart-with-R.html"}, {name: "python", link:"https://python-graph-gallery.com/web-radar-chart-with-matplotlib"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Hiking locations in Washington",
        date: new Date(2021, 2),
        author: "Tobias Stadler",
        url: "https://www.r-graph-gallery.com/web-circular-barplot-with-R-and-ggplot2.html",
        img: [{full: "hiking-washington.png", zoom: "hiking-washington-zoom.png", chartId: ["circularBarplot"]}],
        contextDescription: "This Visualisation shows the cummulative length of tracks, the amount of tracks and the mean gain in elevation per location for a set of hikes in the Washington area.",
        chartDescription: "A circular barplot with clear group annotation, nice layout and great on-chart legend to explain what's shown.",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-circular-barplot-with-R-and-ggplot2.html"}, {name: "python", link:"https://python-graph-gallery.com/web-circular-barplot-with-matplotlib"}],
        luminosity: ["light"],
        interactive: false
    },
    {
        title: "Child Labour",
        date: new Date(2021, 7),
        author: "The Economist",
        url: "https://www.r-graph-gallery.com/web-lineplots-and-area-chart-the-economist.html",
        img: [{full: "child-labour.png", zoom: "child-labour-zoom.png", chartId: ["line"]}, {full: "child-labour.png", zoom: "child-labour-zoom-2.png", chartId: ["area"]}],
        contextDescription: "A deep comparison of child labour across the globe.",
        chartDescription: "A line chart next to an area chart. Note that the first one is used for a percentage (does not make sense to add numbers up), when the second is used to a number where we are interested in the total number (stacking makes sense)",
        tools: [{name: "R", link:"https://www.r-graph-gallery.com/web-lineplots-and-area-chart-the-economist.html"}, {name: "python", link:"https://python-graph-gallery.com/web-lineplots-and-area-chart-the-economist"}],
        luminosity: ["light"],
        interactive: false
    },
]
