import { ChartId } from "./sectionDescription";

// Types and small constants for the viz catalog. Kept SEPARATE from viz-list.ts (which
// holds the large `vizList` data array) so that importing a type or a small constant
// never pulls the whole catalog into a bundle. The full data lives in viz-list.ts and
// is loaded on demand (dynamic import) on the homepage.

export const allTools = ["R", "python", "tableau", "data wrapper", "d3.js", "react", "excel", "javascript", "rawGraphs", "illustrator"] as const;
export type Tool = typeof allTools[number];

export type Luminosity = "light" | "dark"

// "labels" are cross-cutting design techniques / features, orthogonal to the chart type.
// They let people search for inspiration on a specific need (e.g. "a good color legend",
// "scrolly-telling", "a clean annotation") regardless of which chart family they're building.
export const vizLabels = [
    "annotation",          // on-chart text that explains or points at key data
    "legend",              // thoughtful color / size / shape legend design
    "direct labeling",     // labels placed directly on the data instead of a separate legend
    "color palette",       // notable or beautiful color choices
    "bivariate coloring",  // a 2D color scale encoding two variables at once
    "gradient",            // gradient fills or strokes
    "texture",             // patterns / textures used inside shapes
    "typography",          // standout use of type and fonts
    "icons & pictograms",  // icons or pictograms used to encode or decorate data
    "highlight",           // emphasizing one series while greying out the rest
    "storytelling",        // strong data-driven narrative / article structure
    "scrollytelling",      // a narrative that unfolds as you scroll
    "comparison",          // mirror / diverging / side-by-side comparison layouts
    "uncertainty",         // showing confidence intervals, error or uncertainty
    "animation",           // animated transitions between states or datasets
    "shape morphism",      // smooth morphing between shapes or chart types
    "interactive controls",// buttons, dropdowns, sliders to change the view
    "tooltip",             // informative hover tooltips
    "hover effect",        // hover-based highlighting or interaction
    "zoom & pan",          // a zoomable / pannable canvas
    "brushing",            // select a range to filter or zoom
    "small multiples",     // repeated mini-charts (faceting)
    "radial",              // circular / polar layout (spirals, sunbursts, radial bars)
    "full-page layout",    // viz fully integrated into an editorial page
    "minimalist",          // clean, stripped-down design
    "flow & arrows",       // arrows / flows showing direction or movement
    "3d",                  // three-dimensional rendering
    "log scale",           // logarithmic axis
] as const;
export type VizLabel = typeof vizLabels[number];

export type VizItem = {
    id: number;
    title: string;
    date: Date;
    author: string;
    url: string;
    img: { full: string, zoom: string, chartId: ChartId[] }; // zoom is on the wall. full is on the modal
    contextDescription: string;
    chartDescription: string;
    tools?: { name: Tool, link?: string }[]
    luminosity: Luminosity[];
    interactive: boolean
    labels?: VizLabel[]; // cross-cutting design techniques / features (see vizLabels above)
    favorite?: boolean; // hand-picked favorites, shown first on the homepage
}
