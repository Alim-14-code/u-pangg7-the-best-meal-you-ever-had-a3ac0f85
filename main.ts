// The Best Meal You Ever Had — make.fun entry.
//
// One sentence: the best meal the entrant ever had, at most 200 characters.
// The program writes the entry text to /output/entry.txt (the gate checks
// it is UTF-8 text of 1 to 200 characters), then prints it to stdout.
//
// The memory's image: a named dish (sate ayam), a named place (the warung),
// and one specific moment — rain hammering the tin roof while eating on a
// plastic stool. Concrete over praise: sauce dripping, rice, rain, tin.
// Verified locally: node main.ts exits 0 and writes exactly 139 bytes —
// the entry verbatim, well inside the 200-character cap.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The best meal I ever had was sate ayam dripping peanut sauce over rice, eaten on a plastic stool while rain hammered the warung's tin roof.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(ENTRY);
