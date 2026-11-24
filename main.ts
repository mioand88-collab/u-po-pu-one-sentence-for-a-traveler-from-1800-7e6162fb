// One Sentence for a Traveler from 1800 — one sentence explaining the
// modern internet using only things a person of 1800 already knows:
// a post road, a library, a printing press, a market stall, a letter.
// Writes a single sentence to $MAKEFUN_OUTPUT_DIR/entry.txt
// (defaults to /output when the variable is absent).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Imagine a post road joining every library, printing press, and market stall on Earth, where a letter you write at breakfast is read aloud in China before your tea cools.";

// The sealed gate wants 1–200 characters, one line, not only whitespace.
if (line.length < 1 || line.length > 200 || line.includes("\n") || line.trim() === "") {
  throw new Error(`entry line is invalid (${line.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
