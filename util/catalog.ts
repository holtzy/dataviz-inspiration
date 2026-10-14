import { fullVizList, VizItem } from "./viz-list";

// Public, machine-readable view of the catalog, served at /viz-list.json and
// summarized in /llms.txt. Generated at build time from viz-list.ts, which stays
// the single source of truth.

export const SITE_URL = "https://www.dataviz-inspiration.com";
export const LICENSE_URL =
  "https://github.com/holtzy/dataviz-inspiration/blob/main/LICENSE";
export const ATTRIBUTION =
  "Data from dataviz-inspiration.com by Yan Holtz, licensed under CC BY 4.0";

// Descriptions are written with a little inline HTML (<a>, <i>, <b>, <br/>).
const toPlainText = (html: string) =>
  html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

// "YYYY-MM" (Date months are 0-indexed).
const toYearMonth = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

const toPublicItem = (item: VizItem) => ({
  id: item.id,
  title: item.title,
  author: item.author,
  date: toYearMonth(item.date),
  url: item.url,
  chartTypes: item.img.chartId,
  labels: item.labels ?? [],
  tools: item.tools ?? [],
  luminosity: item.luminosity,
  interactive: item.interactive,
  favorite: item.favorite ?? false,
  contextDescription: toPlainText(item.contextDescription),
  chartDescription: toPlainText(item.chartDescription),
  contextDescriptionHtml: item.contextDescription,
  chartDescriptionHtml: item.chartDescription,
  images: {
    full: `${SITE_URL}/img/${item.img.full}`,
    thumbnail: `${SITE_URL}/img/${item.img.zoom}`,
  },
});

export const buildCatalog = () => ({
  name: "Dataviz Inspiration catalog",
  description:
    "A curated collection of data visualization projects, each tagged by chart type and design technique, with a short context and critique.",
  homepage: SITE_URL,
  license: "CC-BY-4.0",
  licenseUrl: LICENSE_URL,
  attribution: ATTRIBUTION,
  imagesNotice:
    "Images show visualizations by their respective authors and are NOT covered by CC BY 4.0. Reusing them requires permission from their authors.",
  generatedAt: new Date().toISOString(),
  count: fullVizList.length,
  items: fullVizList.map(toPublicItem),
});
