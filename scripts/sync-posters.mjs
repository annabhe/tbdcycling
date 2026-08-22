/**
 * Registers new poster images in src/content/index.js.
 *
 * Reads public/content/posters/, and for every image not already referenced by
 * a POSTERS entry, derives an entry from its filename:
 *
 *   Bethesda-Ride_2026-08-08.png -> { id: "2026-08-08", title: "Bethesda Ride", ... }
 *
 * Existing entries are never rewritten, only re-ordered, so titles edited by
 * hand are preserved. featuredPosterId is set to the newest poster by date.
 * Exits non-zero on a badly named file, which fails the build before deploy.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const postersDir = path.join(root, "public/content/posters");
const indexPath = path.join(root, "src/content/index.js");

const FILENAME = /^(.+)_(\d{4}-\d{2}-\d{2})\.(jpg|jpeg|png|webp|gif)$/i;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

// Posters sort by the date in their filename, not by id: ids are historically
// inconsistent ("jun-20-2026", "04-25-2026") but every filename is ISO.
const dateOf = (poster) => path.basename(poster.src).match(/\d{4}-\d{2}-\d{2}/)?.[0] ?? "";

// package.json sets "type": "module", so the content file imports directly.
const { POSTERS } = await import(new URL("../src/content/index.js", import.meta.url).href);

const registered = new Set(POSTERS.map((p) => path.basename(p.src)));
const taken = new Set(POSTERS.map(dateOf));
const errors = [];
const added = [];

for (const file of fs.readdirSync(postersDir).sort()) {
  if (file.startsWith(".") || registered.has(file)) continue;

  const match = file.match(FILENAME);
  if (!match) {
    errors.push(`${file}\n    expected <Name>_<YYYY-MM-DD>.<ext>, e.g. Bethesda-Ride_2026-08-08.png` +
      `\n    supported formats: jpg, jpeg, png, webp, gif`);
    continue;
  }

  const [, name, iso] = match;
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== iso) {
    errors.push(`${file}\n    "${iso}" is not a real calendar date`);
    continue;
  }
  if (taken.has(iso)) {
    errors.push(`${file}\n    a poster dated ${iso} already exists`);
    continue;
  }

  const title = name.replace(/-/g, " ");
  taken.add(iso);
  added.push({
    id: iso,
    src: `content/posters/${file}`,
    title,
    date: `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`,
    alt: title,
  });
}

if (errors.length) {
  console.error(`Cannot register ${errors.length} poster(s):\n\n  ${errors.join("\n\n  ")}\n`);
  process.exit(1);
}

// Deleting an image deletes its entry, so the list can't point at a missing file.
const onDisk = new Set(fs.readdirSync(postersDir));
const kept = POSTERS.filter((p) => onDisk.has(path.basename(p.src)));

const all = [...kept, ...added].sort((a, b) => dateOf(b).localeCompare(dateOf(a)));

const serialize = (p) => `  {
    id: ${JSON.stringify(p.id)},
    src: ${JSON.stringify(p.src)},
    title: ${JSON.stringify(p.title)},
    date: ${JSON.stringify(p.date)},
    alt: ${JSON.stringify(p.alt ?? "")},
  },
`;

const updated = fs.readFileSync(indexPath, "utf8")
  .replace(/export const POSTERS = \[[\s\S]*?\n\];/,
    `export const POSTERS = [\n${all.map(serialize).join("")}];`)
  .replace(/export const featuredPosterId = "[^"]*";/,
    `export const featuredPosterId = ${JSON.stringify(all[0].id)};`);

fs.writeFileSync(indexPath, updated);

const changes = [
  added.length && `registered ${added.map((p) => p.id).join(", ")}`,
  kept.length < POSTERS.length && `removed ${POSTERS.length - kept.length} entry(s) with no image`,
].filter(Boolean);

console.log(changes.length ? `Posters: ${changes.join("; ")}` : "Posters: no changes.");
