// Пререндер: вставляет готовую разметку раздела «О нас» в dist/index.html.
// Запускается после `vite build` и `vite build --ssr` (см. package.json → scripts.build).
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');
const indexPath = resolve(root, 'dist/index.html');

const { render } = await import(pathToFileURL(ssrEntry).href);
const html = render();

const template = readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error('В dist/index.html не найден <div id="root"></div>');
}
writeFileSync(indexPath, template.replace(marker, `<div id="root">${html}</div>`), 'utf8');
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

console.log(`prerender: в index.html вставлено ${html.length} символов разметки`);
