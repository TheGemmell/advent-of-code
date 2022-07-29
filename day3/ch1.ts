import importLines from "../utils.js";
import { fileURLToPath } from "url";
import path from "path";

// Grab the directory path of the current file
let dirName = path.dirname(fileURLToPath(import.meta.url));

const data = await importLines(dirName);
let lines = data.split('\r\n');

const nums = {
  0: [0, 0],
  1: [0, 0],
  2: [0, 0],
  3: [0, 0],
  4: [0, 0],
  5: [0, 0],
  6: [0, 0],
  7: [0, 0],
  8: [0, 0],
  9: [0, 0],
  10: [0, 0],
  11: [0, 0]
}

for (let i = 0; i < lines.length; i++) {
  for (let option in nums) {
    if (lines[i][option] === "0") {
      nums[option][0]++;
    }
    else {
      nums[option][1]++;
    }
  }
}

let gammaBinary = "";
let epsilonBinary = "";

for (let option in nums) {
  if (nums[option][0] > nums[option][1]) {
    gammaBinary += "0";
    epsilonBinary += "1";

  } else {
    gammaBinary += "1";
    epsilonBinary += "0";
  }
}

console.log(gammaBinary);
console.log(epsilonBinary);