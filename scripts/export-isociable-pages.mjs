import { cpSync, existsSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const website = resolve(root, 'artifacts/isociable-website');
const output = resolve(website, 'dist/public');

const build = spawnSync(
  'pnpm',
  ['--filter', '@workspace/isociable-website', 'run', 'build'],
  {
    cwd: root,
    env: {
      ...process.env,
      BASE_PATH: './',
      NODE_ENV: 'production',
      PORT: process.env.PORT || '4173',
    },
    stdio: 'inherit',
  },
);

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

for (const entry of ['index.html', 'assets', 'favicon.svg', 'robots.txt']) {
  const source = resolve(output, entry);
  const destination = resolve(root, entry);

  if (!existsSync(source)) {
    throw new Error(`Expected build output is missing: ${source}`);
  }

  rmSync(destination, { force: true, recursive: true });
  cpSync(source, destination, { recursive: true });
}

writeFileSync(resolve(root, '.nojekyll'), '');
console.log('GitHub Pages files exported to the repository root.');