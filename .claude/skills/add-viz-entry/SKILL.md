---
name: add-viz-entry
description: Add a new data-visualization entry to the dataviz-inspiration gallery. Use when the user pastes messy content (a link, screenshots, notes) about a viz and wants it added to the site. Handles the viz-list.ts entry, image placement, chart-type tagging, and the two descriptions.
---

# Add a new viz entry

Turn a messy paste (a URL, one or two screenshots, a few notes) into a clean `VizItem`
appended to `util/viz-list.ts`, with images placed in `public/img/`.

## Files & vocab
- **Data array**: `util/viz-list.ts` → `export const vizList: VizItem[]`. Append at the END.
- **Type**: `VizItem` (top of `viz-list.ts`).
- **Valid chart tags** (`ChartId`): `util/sectionDescription.tsx` → `chartIds`.
- **Valid tools** (`Tool`): `viz-list.ts` ~line 4 → `allTools`.
- **Images**: `public/img/`. Every entry needs a `full` (modal) and a `zoom` (wall thumbnail) file.

### chartId vocabulary
violin, density, histogram, boxplot, ridgeline, scatter, heatmap, correlogram, bubble,
connectedScatter, density2d, barplot, radar, wordcloud, parallel, lollipop, circularBarplot,
treemap, venn, donut, pie, dendrogram, circularPacking, line, area, stackedArea, stream,
timeseries, map, choropleth, hexbin, cartogram, connection, bubbleMap, chordDiagram, network,
sankey, arc, edgeBundling, colors, plotly, animation, cheatSheets, caveats, 3d, waffle,
marimekko, beeswarm, table, voronoi

> "circle pack" → `circularPacking`. Connected/time-trajectory scatter → `connectedScatter`.
> Validate every tag against this list; the build sets `ignoreBuildErrors: true`, so a bad
> tag will NOT fail the build — it just silently breaks filtering. Check by eye.

### tools vocabulary
R, python, tableau, data wrapper, d3.js, react, excel, javascript, rawGraphs, illustrator

## Schema (VizItem)
```ts
{
  id: number;            // sequential — see "find the next id" below
  title: string;
  date: new Date(YYYY, M);   // M is 0-INDEXED (July = 6)
  author: string;
  url: string;
  img: { full: string, zoom: string, chartId: ChartId[] }[];  // one project, possibly several images
  contextDescription: string;   // the WHY / story / background (HTML ok: <a> <i> <b> <br/>)
  chartDescription: string;     // the WHAT / HOW + personal take (1st person ok; HTML ok)
  tools?: { name: Tool, link?: string }[];   // or `undefined`
  luminosity: ("light"|"dark")[];
  interactive: boolean;
  labels?: VizLabel[];   // optional — cross-cutting design techniques/features (see below)
}
```

### labels vocabulary (`VizLabel`, defined in `viz-list.ts` as `vizLabels`)
Cross-cutting design techniques/features, orthogonal to chart type — they let people find
inspiration for a specific need (e.g. "a good color legend", "scrollytelling") regardless of
chart family. Pick the few that genuinely stand out in the viz; omit the field if none do.

annotation, legend, direct labeling, color palette, bivariate coloring, gradient, texture, typography,
icons & pictograms, highlight, storytelling, scrollytelling, comparison, uncertainty,
animation, shape morphism, interactive controls, tooltip, hover effect, zoom & pan, brushing,
small multiples, full-page layout, minimalist, flow & arrows, 3d, log scale

> `highlight` = emphasizing one series while greying out the rest (very common in good editorial
> viz). `direct labeling` = labels on the data instead of a separate legend. Don't use a label
> for something already captured by another field (e.g. no "dark mode" label — that's `luminosity`).

## Procedure

1. **Find the next id.** `grep -oE "id: [0-9]+" util/viz-list.ts | tail -1`, then `+1`.
   (As of this writing the max was 319.) The current last entry usually has **no trailing
   comma** — your Edit must add a `,` after its closing `}` before appending the new object.

2. **Get the images.** When the user pastes/attaches screenshots, Claude Code embeds the
   local source paths inline in their message, e.g.
   `[Image: source: /Users/.../image-cache/<session>/4.png]`. Use those paths — do NOT search
   the filesystem. The user usually labels them ("the big" = `full`, "the small" = `zoom`);
   the order of `[Image #N]` tags matches the order of the source-path tags.
   - Copy/convert into `public/img/` with a clean kebab-case name + `-zoom` suffix:
     - PNG source: `cp src public/img/<name>.png` and `cp smallsrc public/img/<name>-zoom.png`
     - Non-PNG (jpeg/webp): convert with `sips -s format png src --out public/img/<name>.png`
       (most existing files are PNG; keep that convention).
   - If the user describes an image but attaches nothing, you have no path → ask for it.

3. **Resolve the `url` = the ORIGINAL project**, not where the user found it (a LinkedIn/
   Twitter post is a *source*, not the project). If the original is a known publisher
   (Our World in Data, NYT, an R/Python gallery, etc.) and the exact URL isn't in the paste,
   **WebSearch the canonical URL** (restrict `allowed_domains` to the publisher) so you don't
   link a 404.

4. **Write the two descriptions** in ENGLISH (the list is English even when the viz is in
   another language). Match the house voice:
   - `contextDescription`: the story/why — what question or situation the viz addresses.
     Translate foreign-language annotations into the context when useful.
   - `chartDescription`: what the chart IS and what's notable about the technique, often with
     a light first-person opinion ("I love the dotted texture…", "I'm not a fan of the
     gradient…"). Link to data-to-viz caveats where relevant.

5. **Judgment calls — pick a sensible value, then FLAG it for the user** (these are rarely in
   the paste):
   - `date`: a rough guess is fine (use data range / publication era). 0-indexed month.
   - `tools`: if it clearly looks like d3 (custom interactive web viz, SVG circle packing,
     etc.) tag `d3.js`; otherwise `undefined`. Don't invent a `link`.
   - `interactive`: `true` for live web graphics/scrollytelling, `false` for static figures.
   - `luminosity`: `["light"]`, `["dark"]`, or both — judge from the image background.
   - `labels`: pick the few `VizLabel`s (from the vocab above) that genuinely stand out in the
     viz — what would make someone with that specific need want to study it. Omit if none do.

6. **Verify**: `grep -n "id: <new>"`, confirm both image files exist in `public/img/`, and
   run `npx tsc --noEmit` (filter to the viz-list line range) to confirm the object parses.
   Then summarize the entry in a small table, calling out the flagged guesses for review.

## Example entry (id 319)
```ts
{
    id: 319,
    title: "How Apple's supply chain evolves",
    date: new Date(2023, 0),
    author: "CommonWealth Magazine",
    url: "https://www.cw.com.tw/graphics/how-apples-supply-chain-evolves/",
    img: [
        { full: "apple-supply-chain-circle-packing.png", zoom: "apple-supply-chain-circle-packing-zoom.png", chartId: ["circularPacking"] },
    ],
    contextDescription: "A scrollytelling piece by Taiwan's CommonWealth Magazine (天下雜誌) on how Apple's manufacturing supply chain has shifted over the years. In this 2012 snapshot, more than 40% of Apple's suppliers — 333 manufacturing sites — were located in China, by far the largest share in the world.",
    chartDescription: "A circular packing chart where each tiny dot is a single Apple manufacturing site, grouped into nested bubbles by region. Highlighting the China group in red against the greyed-out rest makes its dominance obvious at a glance. I love the dotted texture inside each circle: it turns an abstract proportion into something you can almost count.",
    tools: undefined,
    luminosity: ["light"],
    interactive: true,
    labels: ["highlight", "texture", "legend", "scrollytelling"]
}
```

## Notes / gotchas
- The build ignores TS errors, so validate `chartId`/`tool` values by hand against the vocab.
- Don't forget the trailing-comma fix on the previous last entry.
- One entry can hold several images (e.g. a dashboard) — each image carries its own `chartId[]`.
- `zoom` is the wall thumbnail; a tight, eye-catching crop of the viz works better than a
  shrunk full image.
