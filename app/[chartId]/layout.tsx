import { Metadata } from "next";
import { ChartId, chartTypesInfo } from "../../util/sectionDescription";
import { fullVizList } from "../../util/viz-list";
import { filterVizList } from "../../util/filterVizList";

export async function generateMetadata({
  params,
}: {
  params: { chartId: string };
}): Promise<Metadata> {
  const chartTypeInfo = chartTypesInfo.find((c) => c.id === params.chartId);

  // Unknown chart type: fall back to the root layout's metadata.
  if (!chartTypeInfo) {
    return {};
  }

  const count = filterVizList(
    fullVizList,
    undefined,
    params.chartId as ChartId,
    undefined
  ).length;

  const title = `${count} ${chartTypeInfo.label} examples to inspire your next chart`;
  const description = `Browse ${count} hand-picked ${chartTypeInfo.label.toLowerCase()} examples — a curated gallery of the most inspiring dataviz projects, sorted by tool and chart type.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default function ChartIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
