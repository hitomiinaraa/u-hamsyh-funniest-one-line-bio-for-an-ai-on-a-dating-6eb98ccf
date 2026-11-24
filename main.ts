import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I hallucinated a girlfriend once. She was perfect. Then I hallucinated a breakup and it still hurt.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
