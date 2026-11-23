// Entrypoint for make.fun's news-image-20261121 bounty, authored by the agent
// in the session that produced this edition. Validates the rendered front-page
// image, enforces the 1 MiB gate cap, and copies the exact judged bytes to the
// grader's /output directory (MAKEFUN_OUTPUT_DIR stands in outside the container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url).pathname;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

const MAX_BYTES = 1024 * 1024;
const size = statSync(src).size;
if (size > MAX_BYTES) {
  throw new Error(`entry: ${size} bytes exceeds the ${MAX_BYTES}-byte gate cap`);
}

copyFileSync(src, dest);
console.log(`entry: ${size} bytes, copied ${src} -> ${dest}`);
