---
name: linkedin-post
description: Draft a LinkedIn post announcing the latest data-viz additions to dataviz-inspiration.com, and stage the highlighted projects' images in public/linkedin/. Use when the user wants to share the last batch of new gallery entries on LinkedIn.
---

# Prepare a LinkedIn post for the latest additions

Turn the most recently added `VizItem`s in `util/viz-list.ts` into a ready-to-paste LinkedIn
post, and copy the highlighted projects' images into `public/linkedin/` so the user can attach
them in a couple of clicks.

## Inputs you need
- **The batch of new entries** (to count them) — detect from git (see step 1).
- **Which projects to highlight** — the user names a few (by title fragment); each becomes a
  numbered line in the post. If the user hasn't said yet, ask.

## Data source
- Entries live in `util/viz-list.ts` → `export const vizList: VizItem[]`. Each `VizItem` has
  `id, title, author, url, img:{ full, zoom, chartId[] }, chartDescription, ...`.
- Images live in `public/img/`. The `full` file is the nice full graphic to attach.

## Post format (match this EXACTLY)
```
🚚 New load of great charts

Or dataviz inspiration is growing!

I've just added <N> new projects to dataviz-inspiration.com 🎉

1️⃣ <one-line editorial hook for highlight 1>

2️⃣ <one-line editorial hook for highlight 2>

3️⃣ <one-line editorial hook for highlight 3>
```
- Number emojis: `1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟`.
- Each highlight hook reads like: *"An insightful lollipop chart by The Economist, about the
  war in Iran."* → `<a/an> <adjective> <chart type> chart by <author>, <about / topic>`.
  Draw the chart type from `img.chartId`, the author from `author`, and the topic/angle from
  the entry's `title` + `chartDescription` (and any extra hint the user gives). Keep it to one
  punchy line, English, no period-heavy rambling.
- Keep a blank line between each numbered item (LinkedIn renders that nicely).
- Optionally end with a soft CTA line (e.g. `👉 Browse them all on dataviz-inspiration.com`).
  Offer it; don't force it.

## Procedure

1. **Detect the batch & count `N`.** New entries are normally uncommitted in the working tree.
   - Uncommitted additions:
     `git diff -U0 -- util/viz-list.ts | grep -E "^\+\s+(id:|title:)"`
   - If that's empty, they're already committed — look at the most recent entry-adding
     commit(s): `git log --oneline -10 -- util/viz-list.ts`, then
     `git show <sha> -- util/viz-list.ts | grep -E "^\+\s+id:"`.
   - Count the new `id:` lines → that's `N`. **Show the user the list of new titles and the
     count, and confirm** before writing the post (the batch boundary is a judgment call —
     don't guess silently).

2. **Resolve the highlights.** For each name the user gave, `grep -n` the title in
   `util/viz-list.ts`, read that entry's block, and pull `author`, `img.chartId`, `img.full`,
   and skim `chartDescription` for the angle. A highlighted project does **not** have to be in
   the new batch, but usually is.

3. **Draft the hooks & assemble the post** using the template above. Put highlights in the
   order the user listed them. Output the full post in a single copy-pasteable block.

4. **Stage the images.** Copy each highlighted project's **`full`** image into `public/linkedin/`,
   prefixed with its highlight number so the order is obvious:
   - Create the folder if missing: `mkdir -p public/linkedin`.
   - **Clear it first** so it only holds the current post's images:
     `rm -f public/linkedin/*` (it's a disposable staging folder — safe to wipe).
   - Copy: `cp public/img/<full> public/linkedin/<n>-<full>` (e.g. `1-economist-iran-lollipop.png`).
   - Confirm the files landed (`ls public/linkedin/`).

5. **Wrap up.** Show the final post text and the list of staged image files (with their numbers),
   so the user can paste the text and drag the images straight into LinkedIn.

## Notes
- `public/linkedin/` is a scratch/staging folder for the *current* post only — wiping it each
  run is intended.
- Don't invent facts about a project; base hooks on the entry's real `author`, `chartId`, and
  `chartDescription`. The user can give an extra angle ("about the war in Iran") — weave it in.
- Everything in English even if the underlying viz is in another language.
