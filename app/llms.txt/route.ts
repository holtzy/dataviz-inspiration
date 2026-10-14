import { chartTypesInfo } from "../../util/sectionDescription";
import { vizLabels } from "../../util/viz-types";
import { fullVizList } from "../../util/viz-list";
import { ATTRIBUTION, LICENSE_URL, SITE_URL } from "../../util/catalog";

export const dynamic = "force-static";

export function GET() {
  const chartTypes = chartTypesInfo
    .map((c) => `- [${c.label}](${SITE_URL}/${c.id}): \`${c.id}\``)
    .join("\n");

  const body = `# Dataviz Inspiration

> A curated gallery of ${fullVizList.length} data visualization projects by Yan Holtz. Each entry links to the original project and is tagged by chart type and design technique, with a short context and critique.

Use the JSON catalog below as the official source rather than parsing the website or the TypeScript source code.

## Data

- [viz-list.json](${SITE_URL}/viz-list.json): the full catalog. Fields: id, title, author, date (YYYY-MM), url (original project), chartTypes, labels, tools, luminosity, interactive, favorite, contextDescription, chartDescription (plain text, with HTML variants), images.
- [License](${LICENSE_URL}): catalog data under CC BY 4.0. Please credit: "${ATTRIBUTION}".
- Images are screenshots of work by their respective authors and are NOT covered by CC BY 4.0.

## Chart types

Each page lists the projects using that chart type. The value in backticks is what appears in \`chartTypes\`.

${chartTypes}

## Labels

Cross-cutting design techniques used in \`labels\`: ${vizLabels.join(", ")}.

## Optional

- [About](${SITE_URL}/about): who curates the gallery and why.
- [Source code](https://github.com/holtzy/dataviz-inspiration)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
