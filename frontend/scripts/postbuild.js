/*import { renameSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(`Running frontend post build script...`)
renameSync(path.resolve(__dirname, '../dist/index.html'), path.resolve(__dirname, '../dist/_index.html'));
console.log(`index.html renamed to _index.html so SSR of the index page can be assumed.`);*/

// scripts/postbuild.js
import { copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(`Running frontend post build script…`);

// copy index.html → _index.html, but leave index.html in place
copyFileSync(
  path.resolve(__dirname, '../dist/index.html'),
  path.resolve(__dirname, '../dist/_index.html')
);

console.log(`Copied index.html to _index.html for SSR assumptions.`);
