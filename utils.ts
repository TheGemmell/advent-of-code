import { promises as fs } from 'fs';

export default async function importLines(folder: string) {
  let data = await fs.readFile(`${folder}/input.txt`, 'utf8');
  // let lines = data.split('\n');
  let lines = data
  return lines;
}


export { importLines };