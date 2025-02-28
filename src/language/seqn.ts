import { buildParser } from '@lezer/generator';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const SeqnParser = (() => {
  const grammarPath = path.resolve(__dirname, 'seqn.grammar');
  const grammarText = fs.readFileSync(grammarPath, 'utf8');
  return buildParser(grammarText);
})();
