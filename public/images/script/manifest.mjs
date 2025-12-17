// scripts/generate-manifest.mjs
// Scans /images and builds images/manifest.json:
// { countries: { CountryName: [{name, file, url}], ... }, india: { StateName: [...] } }
// - Uses slug file names (e.g., "john-smith.jpg")
// - Pretty title from slug: "John Smith"
// - Limits to max 6 images per region/state

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const ROOT   = path.resolve(__dirname, "..");
const IMGDIR = path.join(ROOT, "images");
const OUT    = path.join(IMGDIR, "manifest.json");

const IMG_RE = /\.(jpe?g|png|webp|gif)$/i;
const MAX_PER_GROUP = 6;

// Helpers
const isDir  = (p) => fs.existsSync(p) && fs.statSync(p).isDirectory();
const isFile = (p) => fs.existsSync(p) && fs.statSync(p).isFile();

const toTitle = (slug) =>
  slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());

function listImageFiles(dir) {
  if (!isDir(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMG_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .slice(0, MAX_PER_GROUP);
}

function buildManifest() {
  const manifest = { countries: {}, india: {} };

  if (!isDir(IMGDIR)) {
    throw new Error(`images/ folder not found at: ${IMGDIR}`);
  }

  const top = fs.readdirSync(IMGDIR).filter((name) => !name.startsWith("."));

  for (const entry of top) {
    const entryPath = path.join(IMGDIR, entry);
    if (!isDir(entryPath)) continue;

    if (entry.toLowerCase() === "india") {
      // India → states
      const states = fs.readdirSync(entryPath).filter((s) => isDir(path.join(entryPath, s)));
      for (const state of states) {
        const stateDir = path.join(entryPath, state);
        const files = listImageFiles(stateDir);
        manifest.india[state] = files.map((file) => {
          const slug = path.basename(file).replace(IMG_RE, "");
          return {
            name: toTitle(slug),
            file,
            url: `images/India/${encodeURIComponent(state)}/${encodeURIComponent(file)}`
          };
        });
      }
    } else {
      // Countries (non-India)
      const files = listImageFiles(entryPath);
      manifest.countries[entry] = files.map((file) => {
        const slug = path.basename(file).replace(IMG_RE, "");
        return {
          name: toTitle(slug),
          file,
          url: `images/${encodeURIComponent(entry)}/${encodeURIComponent(file)}`
        };
      });
    }
  }

  return manifest;
}

function main() {
  const manifest = buildManifest();
  fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`✅ Wrote ${OUT}`);
}

main();
