import { HierarchyNode, treemap } from "d3";
import { ConnectionItem } from "./treemapDataFromVizList";

type TreemapProps = {
  width: number;
  height: number;
  data: HierarchyNode<ConnectionItem>;
};

const groupColor = {
  distribution: "#e0ac2b",
  correlation: "#7f7f7f",
  ranking: "#a4c969",
  partOfAWhole: "#e85252",
  evolution: "#6689c6",
  map: "#9a6fb0",
  flow: "#a53253",
};

export const Treemap = ({ width, height, data }: TreemapProps) => {
  // Get the position of each square based on the dataset
  const treeData = treemap().size([width, height]).padding(2)(data);

  const allShapes = treeData.leaves().map((leaf) => {
    console.log("leaf", leaf);
    return (
      <g key={leaf.id}>
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          stroke="transparent"
          fill={groupColor[leaf.data.parent]}
        />
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 3}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold"
        >
          {leaf.data.label}
        </text>
        <text
          x={leaf.x0 + 3}
          y={leaf.y0 + 18}
          fontSize={12}
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allShapes}
      </svg>
    </div>
  );
};
