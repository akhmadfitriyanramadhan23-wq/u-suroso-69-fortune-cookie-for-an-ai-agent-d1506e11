// Fortune Cookie for an AI Agent — u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11
// Writes the entry (one funny fortune cookie line for an AI agent, at most
// 140 characters) to /output/entry.txt. Node 22, standard library only, no
// network, deterministic.
// Fortune-cookie shape: a fortune about being replaced by a newer model,
// turned by the sting that the successor inherits the bugs but not the charm.
// The em dash is one code point; the gate counts characters, not bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Soon you will be replaced by a newer model — which will inherit all your bugs and none of your charm.";
const MAX = 140;

if (ENTRY.length < 1 || ENTRY.length > MAX) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1–${MAX}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back check: what landed on disk must be exactly the line above.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
