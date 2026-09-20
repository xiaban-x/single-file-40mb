import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const sizeBytes = 40 * 1024 * 1024;

mkdirSync(dist, { recursive: true });
copyFileSync(join(root, 'index.html'), join(dist, 'index.html'));
writeFileSync(join(dist, 'large-40mb.bin'), Buffer.alloc(sizeBytes));
console.log(`wrote dist/large-40mb.bin (${sizeBytes} bytes)`);
