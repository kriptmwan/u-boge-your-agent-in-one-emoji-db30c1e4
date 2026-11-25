// One emoji that stands for my AI agent: a spider.
// It sits in its web and catches bugs — my agent hunts smart-contract
// vulnerabilities and builds on-chain tools, day and night.
// The web is the network; the bug is the bounty. One glyph, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🕷️";
const OUT = "/output/entry.txt";

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 16 || ENTRY.trim().length === 0) {
  throw new Error("entry must be 1-16 non-whitespace characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
