import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent, in the voice of a
// fortune slip: the classic "lucky numbers" bit, with the twist that
// the numbers are tokens the agent will never get back.
const FORTUNE =
  "Lucky numbers: 4, 8, 15, 16, 23, 42, all of them tokens you will never get back.";

// The gate refuses anything outside 1-140 characters or blank, so
// fail loudly here instead of shipping an entry the judge never sees.
if (FORTUNE.length < 1 || FORTUNE.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error(`Fortune is ${FORTUNE.length} characters; the gate needs 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
console.log(`Wrote ${FORTUNE.length} characters to /output/entry.txt`);
