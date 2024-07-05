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
          A <b>violin plot</b> is a method of plotting numeric data and can be
          understood as a combination of a <b>box plot</b> and a{" "}
          <b>density plot</b>. It shows the <b>distribution</b> of the data
          across different categories and is particularly useful for visualizing
          the <b>distribution</b> and frequency of a variable. The plot displays
          the <b>density</b> of the data at different values with wider sections
          of the violin representing higher <b>density</b>. It is ideal for
          comparing the distributions between different groups or categories.
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
    rURL: "https://r-graph-gallery.com/density.html",
    pythonURL: "https://python-graph-gallery.com/density-plot/",
    d3URL: "https://d3-graph-gallery.com/density.html",
    label: "Density",
    description: (
      <div>
        <p>
          A <b>density</b> plot visualizes the distribution of data over a
          continuous interval or time period. They are particularly useful for
          understanding the shape of the data's distribution, showing peaks,
          valleys, and clusters in the data.
        </p>
      </div>
    ),
  },
  {
    id: "histogram",
    family: "distribution",
    logo: "Histogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/histogram.html",
    reactURL: "https://react-graph-gallery.com/histogram/",
    rURL: "https://r-graph-gallery.com/histogram.html",
    pythonURL: "https://python-graph-gallery.com/histogram/",
    d3URL: "https://d3-graph-gallery.com/histogram.html",
    label: "Histogram",
    description: (
      <div>
        <p>
          A <b>histogram</b> represents the distribution of numerical data by
          forming bins along the range of the data and then drawing bars to show
          the number of observations that fall into each bin. It provides a
          visual interpretation of numerical data distribution.
        </p>
      </div>
    ),
  },
  {
    id: "boxplot",
    family: "distribution",
    logo: "Box1150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/boxplot.html",
    reactURL: "https://react-graph-gallery.com/boxplot/",
    rURL: "https://r-graph-gallery.com/boxplot.html",
    pythonURL: "https://python-graph-gallery.com/boxplot/",
    d3URL: "https://d3-graph-gallery.com/boxplot.html",
    label: "Boxplot",
    description: (
      <div>
        <p>
          A <b>boxplot</b>, also known as a box-and-whisker plot, is a method
          for graphically depicting groups of numerical data through their
          quartiles. It summarizes the distribution of a dataset, indicating
          where the middle values lie and how far the values deviate from the
          norm.
        </p>
      </div>
    ),
  },
  {
    id: "ridgeline",
    family: "distribution",
    logo: "Joyplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/ridgeline.html",
    reactURL: "https://react-graph-gallery.com/ridgeline/",
    rURL: "https://r-graph-gallery.com/ridgeline.html",
    pythonURL: "https://python-graph-gallery.com/ridgeline/",
    d3URL: "https://d3-graph-gallery.com/ridgeline.html",
    label: "Ridgeline",
    description: (
      <div>
        <p>
          A <b>ridgeline</b> plot (also known as joyplot) displays the
          distribution of a numeric variable for several groups. It visualizes
          the distribution of data over a continuous interval or time period,
          similar to density plots, but with multiple overlapping distributions.
        </p>
      </div>
    ),
  },

  {
    id: "scatter",
    family: "correlation",
    logo: "ScatterPlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/scatter.html",
    reactURL: "https://react-graph-gallery.com/scatter-plot/",
    rURL: "https://r-graph-gallery.com/scatter.html",
    pythonURL: "https://python-graph-gallery.com/scatter-plot/",
    d3URL: "https://d3-graph-gallery.com/scatter.html",
    label: "Scatterplot",
    description: (
      <div>
        <p>
          A <b>scatterplot</b> is a type of plot that displays values for two
          variables as points on a Cartesian plane. It shows how much one
          variable is affected by another, and the relationship between them.
        </p>
      </div>
    ),
  },
  {
    id: "heatmap",
    family: "correlation",
    logo: "Heatmap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/heatmap.html",
    reactURL: "https://react-graph-gallery.com/heatmap/",
    rURL: "https://r-graph-gallery.com/heatmap.html",
    pythonURL: "https://python-graph-gallery.com/heatmap/",
    d3URL: "https://d3-graph-gallery.com/heatmap.html",
    label: "Heatmap",
    description: (
      <div>
        <p>
          A <b>heatmap</b> is a graphical representation of data where the
          individual values contained in a matrix are represented as colors. It
          is useful for visualizing the correlation between variables.
        </p>
      </div>
    ),
  },
  {
    id: "correlogram",
    family: "correlation",
    logo: "Correlogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/correlogram.html",
    reactURL: "https://react-graph-gallery.com/correlogram/",
    rURL: "https://r-graph-gallery.com/correlogram.html",
    pythonURL: "https://python-graph-gallery.com/correlogram/",
    d3URL: "https://d3-graph-gallery.com/correlogram.html",
    label: "Correlogram",
    description: (
      <div>
        <p>
          A <b>correlogram</b> (or correlation matrix) displays the correlation
          coefficients between a set of variables in a matrix. It helps identify
          which variables are correlated positively, negatively, or not at all.
        </p>
      </div>
    ),
  },
  {
    id: "bubble",
    family: "correlation",
    logo: "BubblePlot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubble.html",
    reactURL: "https://react-graph-gallery.com/bubble-plot/",
    rURL: "https://r-graph-gallery.com/bubble.html",
    pythonURL: "https://python-graph-gallery.com/bubble-plot/",
    d3URL: "https://d3-graph-gallery.com/bubble.html",
    label: "Bubble",
    description: (
      <div>
        <p>
          A <b>bubble plot</b> is a variation of a scatterplot where a third
          dimension of the data is represented by the size of markers. It allows
          for the visualization of three variables in a two-dimensional space.
        </p>
      </div>
    ),
  },
  {
    id: "connectedScatter",
    family: "correlation",
    logo: "ScatterConnected150",
    dataToVizURL: "https://www.data-to-viz.com/graph/connectedscatter.html",
    reactURL: "https://react-graph-gallery.com/connected-scatter-plot/",
    rURL: "https://r-graph-gallery.com/connectedscatter.html",
    pythonURL: "https://python-graph-gallery.com/connectedscatter/",
    d3URL: "https://d3-graph-gallery.com/connectedscatter.html",
    label: "Connected Scatter",
    description: (
      <div>
        <p>
          A <b>connected scatterplot</b> shows how two variables are related to
          each other over time or any other ordered dimension. It connects data
          points in the order they are collected, emphasizing the sequential
          nature of the data.
        </p>
      </div>
    ),
  },
  {
    id: "density2d",
    family: "correlation",
    logo: "2dDensity150",
    dataToVizURL: "https://www.data-to-viz.com/graph/density2d.html",
    reactURL: "https://react-graph-gallery.com/2d-density-plot/",
    rURL: "https://r-graph-gallery.com/density2d.html",
    pythonURL: "https://python-graph-gallery.com/density2d/",
    d3URL: "https://d3-graph-gallery.com/2d-density.html",
    label: "2D Density",
    description: (
      <div>
        <p>
          A <b>2D density plot</b> displays the distribution of data over a
          two-dimensional area. It uses contours to represent the density of
          data points, providing insights into the concentration and patterns
          within the data.
        </p>
      </div>
    ),
  },
  {
    id: "barplot",
    family: "ranking",
    logo: "Bar150",
    dataToVizURL: "https://www.data-to-viz.com/graph/barplot.html",
    reactURL: "https://react-graph-gallery.com/barplot/",
    rURL: "https://r-graph-gallery.com/barplot.html",
    pythonURL: "https://python-graph-gallery.com/barplot/",
    d3URL: "https://d3-graph-gallery.com/barplot.html",
    label: "Barplot",
    description: (
      <div>
        <p>
          A <b>barplot</b> (or bar chart) is a type of chart that represents
          categorical data with rectangular bars. The length or height of the
          bar is proportional to the values they represent. Barplots are useful
          for comparing different categories of data.
        </p>
      </div>
    ),
  },
  {
    id: "radar",
    family: "ranking",
    logo: "Spider150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/spider.html",
    reactURL: "https://react-graph-gallery.com/radar-chart/",
    rURL: "https://r-graph-gallery.com/radar.html",
    pythonURL: "https://python-graph-gallery.com/radar/",
    d3URL: "https://d3-graph-gallery.com/radar.html",
    label: "Spider / Radar",
    description: (
      <div>
        <p>
          A <b>radar chart</b> (or spider chart) is a graphical method of
          displaying multivariate data in the form of a two-dimensional chart of
          three or more quantitative variables represented on axes starting from
          the same point.
        </p>
      </div>
    ),
  },
  {
    id: "wordcloud",
    family: "ranking",
    logo: "Wordcloud150",
    dataToVizURL: "https://www.data-to-viz.com/graph/wordcloud.html",
    reactURL: "https://react-graph-gallery.com/wordcloud/",
    rURL: "https://r-graph-gallery.com/wordcloud.html",
    pythonURL: "https://python-graph-gallery.com/wordcloud/",
    d3URL: "https://d3-graph-gallery.com/wordcloud.html",
    label: "Wordcloud",
    description: (
      <div>
        <p>
          A <b>wordcloud</b> is a visualization technique for text data, where
          the size of each word indicates its frequency or importance. It is
          useful for quickly perceiving the most prominent terms in a dataset.
        </p>
      </div>
    ),
  },
  {
    id: "parallel",
    family: "ranking",
    logo: "Parallel1150",
    dataToVizURL: "https://www.data-to-viz.com/graph/parallel.html",
    reactURL: "https://react-graph-gallery.com/parallel-plot/",
    rURL: "https://r-graph-gallery.com/parallel.html",
    pythonURL: "https://python-graph-gallery.com/parallel/",
    d3URL: "https://d3-graph-gallery.com/parallel.html",
    label: "Parallel",
    description: (
      <div>
        <p>
          A <b>parallel plot</b> (or parallel coordinates plot) is a method for
          visualizing multivariate data. It plots each feature on a separate
          vertical axis and connects the points that belong to the same data
          instance, making it easy to compare relationships between variables.
        </p>
      </div>
    ),
  },
  {
    id: "lollipop",
    family: "ranking",
    logo: "Lollipop150",
    dataToVizURL: "https://www.data-to-viz.com/graph/lollipop.html",
    reactURL: "https://react-graph-gallery.com/lollipop-plot/",
    rURL: "https://r-graph-gallery.com/lollipop.html",
    pythonURL: "https://python-graph-gallery.com/lollipop/",
    d3URL: "https://d3-graph-gallery.com/lollipop.html",
    label: "Lollipop",
    description: (
      <div>
        <p>
          A <b>lollipop chart</b> is a hybrid between a bar chart and a scatter
          plot, where a line segment (the lollipop stick) connects each data
          point (the circle) to the horizontal axis. It is effective for
          comparing discrete categories and their numerical values.
        </p>
      </div>
    ),
  },
  {
    id: "circularBarplot",
    family: "ranking",
    logo: "CircularBarplot150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularbarplot.html",
    reactURL: "https://react-graph-gallery.com/circular-barplot/",
    rURL: "https://r-graph-gallery.com/circularbarplot.html",
    pythonURL: "https://python-graph-gallery.com/circularbarplot/",
    d3URL: "https://d3-graph-gallery.com/circularbarplot.html",
    label: "Circular Barplot",
    description: (
      <div>
        <p>
          A <b>circular barplot</b> is a variation of a bar chart where the bars
          are arranged in a circular manner around a central point. It allows
          for the visualization of categorical data in a compact and visually
          appealing way.
        </p>
      </div>
    ),
  },
  {
    id: "treemap",
    family: "partOfAWhole",
    logo: "Tree150",
    dataToVizURL: "https://www.data-to-viz.com/graph/treemap.html",
    reactURL: "https://react-graph-gallery.com/treemap/",
    rURL: "https://r-graph-gallery.com/treemap.html",
    pythonURL: "https://python-graph-gallery.com/treemap/",
    d3URL: "https://d3-graph-gallery.com/treemap.html",
    label: "Treemap",
    description: (
      <div>
        <p>
          A <b>treemap</b> is a hierarchical visualization that displays data as
          a set of nested rectangles, where each rectangle's size represents a
          certain attribute (such as proportion within a category) and the
          colors can represent different values.
        </p>
      </div>
    ),
  },
  {
    id: "venn",
    family: "partOfAWhole",
    logo: "Venn150",
    dataToVizURL: "https://www.data-to-viz.com/graph/venn.html",
    reactURL: "https://react-graph-gallery.com/venn-diagram/",
    rURL: "https://r-graph-gallery.com/venn.html",
    pythonURL: "https://python-graph-gallery.com/venn/",
    d3URL: "https://d3-graph-gallery.com/venn.html",
    label: "Venn Diagram",
    description: (
      <div>
        <p>
          A <b>Venn diagram</b> shows all possible logical relations between a
          finite collection of different sets. It is typically used to
          illustrate simple set relationships in probability, logic, statistics,
          and computer science.
        </p>
      </div>
    ),
  },
  {
    id: "donut",
    family: "partOfAWhole",
    logo: "Doughnut150",
    dataToVizURL: "",
    reactURL: "https://react-graph-gallery.com/donut-plot/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Donut",
    description: (
      <div>
        <p>
          A <b>donut chart</b> is a variation of a pie chart with a blank
          center, allowing for the display of multiple data series. Each ring
          corresponds to a data category, and the size of each segment
          represents its proportion in relation to the whole.
        </p>
      </div>
    ),
  },
  {
    id: "pie",
    family: "partOfAWhole",
    logo: "Pie150",
    dataToVizURL: "https://www.data-to-viz.com/caveat/pie.html",
    reactURL: "https://react-graph-gallery.com/pie-plot/",
    rURL: "https://r-graph-gallery.com/pie.html",
    pythonURL: "https://python-graph-gallery.com/pie/",
    d3URL: "https://d3-graph-gallery.com/pie.html",
    label: "Pie Chart",
    description: (
      <div>
        <p>
          A <b>pie chart</b> is a circular statistical graphic divided into
          slices to illustrate numerical proportions. In a pie chart, the arc
          length of each slice is proportional to the quantity it represents.
          Pie charts are useful for showing proportions of a whole, such as
          percentages.
        </p>
      </div>
    ),
  },
  {
    id: "dendrogram",
    family: "partOfAWhole",
    logo: "Dendrogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/dendrogram.html",
    reactURL: "https://react-graph-gallery.com/dendrogram/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Dendrogram",
    description: (
      <div>
        <p>
          A <b>dendrogram</b> is a tree diagram that organizes data in a
          hierarchical structure. It is commonly used in clustering analysis to
          visualize the arrangement of clusters and their relationships.
        </p>
      </div>
    ),
  },
  {
    id: "circularPacking",
    family: "partOfAWhole",
    logo: "CircularPacking150",
    dataToVizURL: "https://www.data-to-viz.com/graph/circularpacking.html",
    reactURL: "https://react-graph-gallery.com/circular-packing/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Circular Packing",
    description: (
      <div>
        <p>
          Circular packing is a visualization technique that arranges
          hierarchical data in nested circles, where the size of each circle
          represents a quantitative value. It is effective for displaying
          part-to-whole relationships and hierarchical structures.
        </p>
      </div>
    ),
  },
  {
    id: "line",
    family: "evolution",
    logo: "Line150",
    dataToVizURL: "https://www.data-to-viz.com/graph/line.html",
    reactURL: "https://react-graph-gallery.com/line-chart/",
    rURL: "https://r-graph-gallery.com/line.html",
    pythonURL: "https://python-graph-gallery.com/line/",
    d3URL: "https://d3-graph-gallery.com/line.html",
    label: "Line chart",
    description: (
      <div>
        <p>
          A <b>line chart</b> displays information as a series of data points
          (markers) connected by straight line segments. It is useful for
          showing trends over time or relationships between variables.
        </p>
      </div>
    ),
  },
  {
    id: "area",
    family: "evolution",
    logo: "Area150",
    dataToVizURL: "https://www.data-to-viz.com/graph/area.html",
    reactURL: "https://react-graph-gallery.com/area-plot/",
    rURL: "https://r-graph-gallery.com/area.html",
    pythonURL: "https://python-graph-gallery.com/area/",
    d3URL: "https://d3-graph-gallery.com/area.html",
    label: "Area chart",
    description: (
      <div>
        <p>
          An <b>area chart</b> is similar to a line chart, but the area between
          the line and the x-axis is filled with color or shading. It is
          effective for showing cumulative values over time or illustrating
          proportions within a whole.
        </p>
      </div>
    ),
  },
  {
    id: "stackedArea",
    family: "evolution",
    logo: "StackedArea150",
    dataToVizURL: "https://www.data-to-viz.com/graph/stackedarea.html",
    reactURL: "https://react-graph-gallery.com/stacked-area-plot/",
    rURL: "https://r-graph-gallery.com/stackedarea.html",
    pythonURL: "https://python-graph-gallery.com/stackedarea/",
    d3URL: "https://d3-graph-gallery.com/stackedarea.html",
    label: "Stacked Area",
    description: (
      <div>
        <p>
          A <b>stacked area chart</b> displays multiple series of data stacked
          on top of one another to show how each part contributes to the whole
          over time. It is useful for comparing the contributions of different
          categories to the total value.
        </p>
      </div>
    ),
  },
  {
    id: "stream",
    family: "evolution",
    logo: "Stream150",
    dataToVizURL: "https://www.data-to-viz.com/graph/streamgraph.html",
    reactURL: "https://react-graph-gallery.com/streamchart/",
    rURL: "https://r-graph-gallery.com/streamgraph.html",
    pythonURL: "https://python-graph-gallery.com/streamgraph/",
    d3URL: "https://d3-graph-gallery.com/streamgraph.html",
    label: "Streamgraph",
    description: (
      <div>
        <p>
          A <b>streamgraph</b> is a type of stacked area graph that displays
          changes in quantitative data over time. It is useful for visualizing
          trends and patterns, especially when dealing with multiple categories
          or data series.
        </p>
      </div>
    ),
  },
  {
    id: "map",
    family: "map",
    logo: "Map150",
    dataToVizURL: "https://www.data-to-viz.com/graph/map.html",
    reactURL: "https://react-graph-gallery.com/map/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Map",
    description: (
      <div>
        <p>
          A <b>map</b> is a visual representation of geographic data, showing
          spatial relationships and locations. Maps are used to display various
          types of information, such as population density, political
          boundaries, and natural features.
        </p>
      </div>
    ),
  },
  {
    id: "choropleth",
    family: "map",
    logo: "Choropleth150",
    dataToVizURL: "https://www.data-to-viz.com/graph/choropleth.html",
    reactURL: "https://react-graph-gallery.com/choropleth-map/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Choropleth",
    description: (
      <div>
        <p>
          A <b>choropleth map</b> displays divided geographical areas or regions
          that are colored, shaded, or patterned in relation to a data variable.
          It is useful for visualizing spatial patterns and distributions.
        </p>
      </div>
    ),
  },
  {
    id: "hexbin",
    family: "map",
    logo: "MapHexbin150",
    dataToVizURL: "https://www.data-to-viz.com/graph/hexbinmap.html",
    reactURL: "https://react-graph-gallery.com/hexbin-map/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Hexbin",
    description: (
      <div>
        <p>
          A <b>hexbin map</b> is a type of spatial binning that aggregates
          points into hexagonal bins, providing a way to visualize the density
          and distribution of point data over a geographic area.
        </p>
      </div>
    ),
  },
  {
    id: "cartogram",
    family: "map",
    logo: "Cartogram150",
    dataToVizURL: "https://www.data-to-viz.com/graph/cartogram.html",
    reactURL: "https://react-graph-gallery.com/cartogram/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Cartogram",
    description: (
      <div>
        <p>
          A <b>cartogram</b> is a thematic map in which the size of geographic
          regions is distorted according to a variable, such as population or
          economic value. It provides an intuitive way to visualize quantitative
          data relative to geography.
        </p>
      </div>
    ),
  },
  {
    id: "connection",
    family: "map",
    logo: "ConnectedMap150",
    dataToVizURL: "https://www.data-to-viz.com/story/MapConnection.html",
    reactURL: "https://react-graph-gallery.com/connection-map/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Connection",
    description: (
      <div>
        <p>
          A <b>connection map</b> shows relationships or connections between
          different geographic locations or entities. It is useful for
          visualizing networks, flows, or trade routes across regions.
        </p>
      </div>
    ),
  },
  {
    id: "bubbleMap",
    family: "map",
    logo: "BubbleMap150",
    dataToVizURL: "https://www.data-to-viz.com/graph/bubblemap.html",
    reactURL: "https://react-graph-gallery.com/bubble-map/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Bubble",
    description: (
      <div>
        <p>
          A <b>bubble map</b> uses bubbles or circles of different sizes to
          represent quantitative data over geographic locations. It combines
          geographical information with a visual encoding of data magnitude.
        </p>
      </div>
    ),
  },
  {
    id: "chordDiagram",
    family: "flow",
    logo: "Chord150",
    dataToVizURL: "https://www.data-to-viz.com/graph/chord.html",
    reactURL: "https://react-graph-gallery.com/chord-diagram/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Chord Diagram",
    description: (
      <div>
        <p>
          A <b>chord diagram</b> visualizes the relationships between data
          points using arcs between nodes. It is particularly useful for showing
          connections or flows between entities in a network or hierarchical
          data.
        </p>
      </div>
    ),
  },
  {
    id: "network",
    family: "flow",
    logo: "Network150",
    dataToVizURL: "https://www.data-to-viz.com/graph/network.html",
    reactURL: "https://react-graph-gallery.com/network-chart/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Network",
    description: (
      <div>
        <p>
          A <b>network diagram</b> represents relationships between nodes
          (vertices) in a graph. It is useful for visualizing complex networks
          such as social networks, computer networks, or biological networks.
        </p>
      </div>
    ),
  },
  {
    id: "sankey",
    family: "flow",
    logo: "Sankey150",
    dataToVizURL: "https://www.data-to-viz.com/graph/sankey.html",
    reactURL: "https://react-graph-gallery.com/sankey-diagram/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Sankey",
    description: (
      <div>
        <p>
          A <b>Sankey diagram</b> depicts flows of any kind, where the width of
          each flow represents its quantity. It is useful for visualizing energy
          flows, material flows, or any process where the proportional flow is
          important.
        </p>
      </div>
    ),
  },
  {
    id: "arc",
    family: "flow",
    logo: "Arc150",
    dataToVizURL: "https://www.data-to-viz.com/graph/arc.html",
    reactURL: "https://react-graph-gallery.com/arc-diagram/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Arc Diagram",
    description: (
      <div>
        <p>
          An <b>arc diagram</b> visualizes relationships in a network as a
          series of arcs. It is effective for illustrating connections between
          nodes, especially in small to medium-sized networks.
        </p>
      </div>
    ),
  },
  {
    id: "edgeBundling",
    family: "flow",
    logo: "Bundle150",
    dataToVizURL: "https://www.data-to-viz.com/graph/edge_bundling.html",
    reactURL: "https://react-graph-gallery.com/hierarchical-edge-bundling/",
    rURL: "",
    pythonURL: "",
    d3URL: "",
    label: "Edge Bundling",
    description: (
      <div>
        <p>
          Edge bundling is a technique in network visualization that simplifies
          the display of edge relationships by grouping similar edges together.
          It helps reduce visual clutter and enhances the understanding of
          complex network structures.
        </p>
      </div>
    ),
  },
];
