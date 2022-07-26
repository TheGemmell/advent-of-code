import fs from 'fs';

function isItBigger(arr: number[]) {
  let increases = 0;
  for (let i = 0; i <= arr.length+2; i++) {
    if (arr[i] > arr[i-1]) {
      increases++;
    }
  }
  return increases;
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const lines = data.split('\n').map(line => parseInt(line));
    const numOfIncreases = isItBigger(lines);
    console.log(numOfIncreases);
  }
});

