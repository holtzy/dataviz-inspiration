// Generates util/featured-viz-list.ts from the `favorite: true` entries in viz-list.ts.
// Single source of truth = viz-list.ts. The homepage imports the (small) featured list
// statically and loads the full list on demand, so the full catalog stays out of the
// initial bundle. Runs automatically on predev/prebuild; or `npm run generate:featured`.
import { readFileSync, writeFileSync } from "node:fs";

const SRC = "util/viz-list.ts";
const OUT = "util/featured-viz-list.ts";

const src = readFileSync(SRC, "utf8");

// Index of the "    {" that opens every entry object.
const starts = [];
const idRe = /\n {4}\{\n {8}id: \d+,/g;
let m;
while ((m = idRe.exec(src))) {
  starts.push(m.index + 1); // skip the leading "\n"
}
starts.push(src.lastIndexOf("\n]")); // closing bracket of the array

const total = starts.length - 1;
const favorites = [];

for (let i = 0; i < total; i++) {
  let block = src.slice(starts[i], starts[i + 1]);
  if (/\n {8}favorite: true/.test(block)) {
    // Drop the trailing whitespace + the comma that separated entries.
    block = block.replace(/\s+$/, "").replace(/,$/, "");
    favorites.push(block);
  }
}

const out = `// AUTO-GENERATED from viz-list.ts by scripts/generate-featured.mjs — DO NOT EDIT BY HAND.
// Contains only the \`favorite: true\` entries so the homepage can render them without
// bundling the full catalog. Regenerate with \`npm run generate:featured\`.
import type { VizItem } from "./viz-list-types";

export const featuredVizList: VizItem[] = [
${favorites.join(",\n")}
];

// Total number of entries in the full list (for copy like "showcases N projects").
export const totalVizCount = ${total};
`;

writeFileSync(OUT, out);
console.log(`Wrote ${OUT}: ${favorites.length} favorites, ${total} total entries.`);
