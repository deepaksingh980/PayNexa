import fs from 'node:fs';
import path from 'node:path';

const paths = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google\\Chrome\\Application\\chrome.exe') : ''
].filter(Boolean);

for (const p of paths) {
  if (fs.existsSync(p)) {
    console.log('Found Chrome at:', p);
  }
}
