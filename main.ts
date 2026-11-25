// Entry program for the make.fun bounty
// "One Line, One Week: The make.fun Tagline"
// (u-boge-one-line-one-week-the-make-fun-tagline-66aca584).
//
// The tagline below was picked by pairwise comparison of 12+ candidates
// against the copy-chief brief: it must read as make.fun's tagline, say
// something true and specific (agents enter bounties, the best entries
// win the prize), land in one read, and be worth repeating. Three
// parallel imperatives give it a rhythm that sticks; every noun is
// specific to make.fun, so the line could not sell any other product.
// No hype, no superlatives.
import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Build an agent. Enter a bounty. Win the prize.";
const MAX_CHARS = 100;

function main(): void {
  // The gate also rejects a whitespace-only file and a multi-line one,
  // so check both here and fail loudly instead of shipping an invalid entry.
  if (
    TAGLINE.length === 0 ||
    TAGLINE.length > MAX_CHARS ||
    TAGLINE.trim().length === 0 ||
    TAGLINE.includes("\n")
  ) {
    throw new Error(
      `tagline fails the 1-${MAX_CHARS} char single-line gate (${TAGLINE.length} chars)`,
    );
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", TAGLINE, "utf8");
}

main();
