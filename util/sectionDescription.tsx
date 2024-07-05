import { ReactNode } from "react";

export type ChartLogo =
  | "Violin150"
  | "Density150"
  | "Histogram150"
  | "Box1150"
  | "Joyplot150"
  | "ScatterPlot150"
  | "Heatmap150"
  | "Correlogram150"
  | "BubblePlot150"
  | "ScatterConnected150"
  | "Bar150"
  | "Spider150"
  | "Wordcloud150"
  | "Parallel1150"
  | "Lollipop150"
  | "CircularBarplot150"
  | "Tree150"
  | "Venn150"
  | "Doughnut150"
  | "Pie150"
  | "Dendrogram150"
  | "CircularPacking150"
  | "Line150"
  | "Area150"
  | "StackedArea150"
  | "Stream150"
  | "time150"
  | "Map150"
  | "Choropleth150"
  | "MapHexbin150"
  | "Cartogram150"
  | "ConnectedMap150"
  | "BubbleMap150"
  | "Chord150"
  | "Network150"
  | "Sankey150"
  | "Arc150"
  | "Bundle150"
  | "Colours150"
  | "Interactive150"
  | "anim150"
  | "Cheat150"
  | "Bad150"
  | "3d150"
  | "2dDensity150";

export const chartIds = [
  "violin",
  "density",
  "histogram",
  "boxplot",
  "ridgeline",
  "scatter",
  "heatmap",
  "correlogram",
  "bubble",
  "connectedScatter",
  "density2d",
  "barplot",
  "radar",
  "wordcloud",
  "parallel",
  "lollipop",
  "circularBarplot",
  "treemap",
  "venn",
  "donut",
  "pie",
  "dendrogram",
  "circularPacking",
  "line",
  "area",
  "stackedArea",
  "stream",
  "timeseries",
  "map",
  "choropleth",
  "hexbin",
  "cartogram",
  "connection",
  "bubbleMap",
  "chordDiagram",
  "network",
  "sankey",
  "arc",
  "edgeBundling",
  "colors",
  "plotly",
  "animation",
  "cheatSheets",
  "caveats",
  "3d",
  "waffle",
  "marimekko",
  "beeswarm",
  "table",
  "voronoi",
] as const;

export type ChartId = (typeof chartIds)[number];

export const chartFamilies = [
  "distribution",
  "correlation",
  "evolution",
  "ranking",
  "partOfAWhole",
  "flow",
  "map",
] as const;
export type ChartFamily = (typeof chartFamilies)[number];

export type ChartTypesInfo = {
  id: ChartId;
  family: ChartFamily;
  logo: ChartLogo;
  dataToVizURL: string;
  reactURL: string;
  rURL: string;
  pythonURL: string;
  d3URL: string;
  description: ReactNode;
  label: string;
};

export const chartTypesInfo: ChartTypesInfo[] = [
  {
    id: "violin",
    family: "distribution",
    logo: "Violin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/violin.html",
    reactURL: "https://react-graph-gallery.com/violin-plot/",
    rURL: "https://r-graph-gallery.com/violin.html",
    pythonURL: "https://python-graph-gallery.com/violin-plot/",
    d3URL: "https://d3-graph-gallery.com/violin.html",
    label: "Violin Plot",
    description: (
      <div>
        <p>
          A violin plot is a method of plotting numeric data and can be
          understood as a combination of a boxplot and a densityplot. It shows
          the distribution of the data across different categories and is
          particularly useful for visualizing the distribution and frequency of
          a variable. The plot displays the density of the data at different
          values with wider sections of the violin representing higher density.
          It is ideal for comparing the distributions between different groups
          or categories.
        </p>
      </div>
    ),
  },

  {
    id: "density",
    family: "distribution",
    logo: "Density150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density.html",
    reactURL: "https://react-graph-gallery.com/density-plot/",
    label: "Density",
  },
  {
    id: "histogram",
    family: "distribution",
    logo: "Histogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/histogram.html",
    reactURL: "https://react-graph-gallery.com/histogram/",
    label: "Histogram",
  },
  {
    id: "boxplot",
    family: "distribution",
    logo: "Box1150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/boxplot.html",
    reactURL: "https://react-graph-gallery.com/boxplot/",
    label: "Boxplot",
  },
  {
    id: "ridgeline",
    family: "distribution",
    logo: "Joyplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/ridgeline.html",
    reactURL: "https://react-graph-gallery.com/ridgeline/",
    label: "Ridgeline",
  },
  {
    id: "scatter",
    family: "correlation",
    logo: "ScatterPlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/scatter.html",
    reactURL: "https://react-graph-gallery.com/scatter-plot/",
    label: "Scatterplot",
  },
  {
    id: "heatmap",
    family: "correlation",
    logo: "Heatmap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/heatmap.html",
    reactURL: "https://react-graph-gallery.com/heatmap/",
    label: "Heatmap",
  },
  {
    id: "correlogram",
    family: "correlation",
    logo: "Correlogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/correlogram.html",
    reactURL: "https://react-graph-gallery.com/correlogram/",
    label: "Correlogram",
  },
  {
    id: "bubble",
    family: "correlation",
    logo: "BubblePlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubble.html",
    reactURL: "https://react-graph-gallery.com/bubble-plot/",
    label: "Bubble",
  },
  {
    id: "connectedScatter",
    family: "correlation",
    logo: "ScatterConnected150",
    dataToVizURL: "https://www.data-to-viz.com/graph/connectedscatter.html",
    reactURL: "https://react-graph-gallery.com/connected-scatter-plot/",
    label: "Connected Scatter",
  },
  {
    id: "density2d",
    family: "correlation",
    logo: "2dDensity150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density2d.html",
    reactURL: "https://react-graph-gallery.com/2d-density-plot/",
    label: "2D Density",
  },
  {
    id: "barplot",
    family: "ranking",
    logo: "Bar150",
    dataToVizURL: "https://www.data-to-viz.com/graph/barplot.html",
    reactURL: "https://react-graph-gallery.com/barplot/",
    label: "Barplot",
  },
  {
    id: "radar",
    family: "ranking",
    logo: "Spider150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/spider.html",
    reactURL: "https://react-graph-gallery.com/radar-chart/",
    label: "Spider / Radar",
  },
  {
    id: "wordcloud",
    family: "ranking",
    logo: "Wordcloud150",
    dataToVizURL: "https://www.data-to-viz.com/graph/wordcloud.html",
    reactURL: "https://react-graph-gallery.com/wordcloud/",
    label: "Wordcloud",
  },
  {
    id: "parallel",
    family: "ranking",
    logo: "Parallel1150",
    dataToVizURL: "https://www.data-to-viz.com/graph/parallel.html",
    reactURL: "https://react-graph-gallery.com/parallel-plot/",
    label: "Parallel",
  },
  {
    id: "lollipop",
    family: "ranking",
    logo: "Lollipop150",
    dataToVizURL: "https://www.data-to-viz.com/graph/lollipop.html",
    reactURL: "https://react-graph-gallery.com/lollipop-plot/",
    label: "Lollipop",
  },
  {
    id: "circularBarplot",
    family: "ranking",
    logo: "CircularBarplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularbarplot.html",
    reactURL: "https://react-graph-gallery.com/circular-barplot/",
    label: "Circular Barplot",
  },
  {
    id: "treemap",
    family: "partOfAWhole",
    logo: "Tree150",
    dataToVizURL: "https://www.data-to-viz.com/graph/treemap.html",
    reactURL: "https://react-graph-gallery.com/treemap/",
    label: "Treemap",
  },
  {
    id: "venn",
    family: "partOfAWhole",
    logo: "Venn150",
    dataToVizURL: "https://www.data-to-viz.com/graph/venn.html",
    reactURL: "https://react-graph-gallery.com/venn-diagram/",
    label: "Venn Diagram",
  },
  {
    id: "donut",
    family: "partOfAWhole",
    logo: "Doughnut150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/donut-plot/",
    label: "Donut",
  },
  {
    id: "pie",
    family: "partOfAWhole",
    logo: "Pie150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/pie.html",
    reactURL: "https://react-graph-gallery.com/pie-plot/",
    label: "Pie Chart",
  },
  {
    id: "dendrogram",
    family: "partOfAWhole",
    logo: "Dendrogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/dendrogram.html",
    reactURL: "https://react-graph-gallery.com/dendrogram/",
    label: "Dendrogram",
  },
  {
    id: "circularPacking",
    family: "partOfAWhole",
    logo: "CircularPacking150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularpacking.html",
    reactURL: "https://react-graph-gallery.com/circular-packing/",
    label: "Circular Packing",
  },
  {
    id: "line",
    family: "evolution",
    logo: "Line150",
    dataToVizURL: "https://www.data-to-viz.com/graph/line.html",
    reactURL: "https://react-graph-gallery.com/line-chart/",
    label: "Line chart",
  },
  {
    id: "area",
    family: "evolution",
    logo: "Area150",
    dataToVizURL: "https://www.data-to-viz.com/graph/area.html",
    reactURL: "https://react-graph-gallery.com/area-plot/",
    label: "Area chart",
  },
  {
    id: "stackedArea",
    family: "evolution",
    logo: "StackedArea150",
    dataToVizURL: "https://www.data-to-viz.com/graph/stackedarea.html",
    reactURL: "https://react-graph-gallery.com/stacked-area-plot/",
    label: "Stacked Area",
  },
  {
    id: "stream",
    family: "evolution",
    logo: "Stream150",
    dataToVizURL: "https://www.data-to-viz.com/graph/streamgraph.html",
    reactURL: "https://react-graph-gallery.com/streamchart/",
    label: "Streamgraph",
  },
  {
    id: "map",
    family: "map",
    logo: "Map150",
    dataToVizURL: "https://www.data-to-viz.com/graph/map.html",
    reactURL: "https://react-graph-gallery.com/map/",
    label: "Map",
  },
  {
    id: "choropleth",
    family: "map",
    logo: "Choropleth150",
    dataToVizURL: "https://www.data-to-viz.com/graph/choropleth.html",
    reactURL: "https://react-graph-gallery.com/choropleth-map/",
    label: "Choropleth",
  },
  {
    id: "hexbin",
    family: "map",
    logo: "MapHexbin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/hexbinmap.html",
    reactURL: "https://react-graph-gallery.com/hexbin-map/",
    label: "Hexbin",
  },
  {
    id: "cartogram",
    family: "map",
    logo: "Cartogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/cartogram.html",
    reactURL: "https://react-graph-gallery.com/cartogram/",
    label: "Cartogram",
  },
  {
    id: "connection",
    family: "map",
    logo: "ConnectedMap150",
    dataToVizURL: "https://www.data-to-viz.com/story/MapConnection.html",
    reactURL: "https://react-graph-gallery.com/connection-map/",
    label: "Connection",
  },
  {
    id: "bubbleMap",
    family: "map",
    logo: "BubbleMap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubblemap.html",
    reactURL: "https://react-graph-gallery.com/bubble-map/",
    label: "Bubble",
  },
  {
    id: "chordDiagram",
    family: "flow",
    logo: "Chord150",
    dataToVizURL: "https://www.data-to-viz.com/graph/chord.html",
    reactURL: "https://react-graph-gallery.com/chord-diagram/",
    label: "Chord Diagram",
  },
  {
    id: "network",
    family: "flow",
    logo: "Network150",
    dataToVizURL: "https://www.data-to-viz.com/graph/network.html",
    reactURL: "https://react-graph-gallery.com/network-chart/",
    label: "Network",
  },
  {
    id: "sankey",
    family: "flow",
    logo: "Sankey150",
    dataToVizURL: "https://www.data-to-viz.com/graph/sankey.html",
    reactURL: "https://react-graph-gallery.com/sankey-diagram/",
    label: "Sankey",
  },
  {
    id: "arc",
    family: "flow",
    logo: "Arc150",
    dataToVizURL: "https://www.data-to-viz.com/graph/arc.html",
    reactURL: "https://react-graph-gallery.com/arc-diagram/",
    label: "Arc Diagram",
  },
  {
    id: "edgeBundling",
    family: "flow",
    logo: "Bundle150",
    dataToVizURL: "https://www.data-to-viz.com/graph/edge_bundling.html",
    reactURL: "https://react-graph-gallery.com/hierarchical-edge-bundling/",
    label: "Edge Bundling",
  },
];