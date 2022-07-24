import fs from 'fs';

function calculateDistance(arr: string[]) {
  let horizontal = 0;
  let depth = 0;

  for (let inst of arr) {
    let dir: string;
    let dist: string | number;

    [dir, dist] = inst.split(' ');
    dist = parseInt(dist);

    switch (dir) {
      case "forward":
        horizontal += dist;
        break;
      case "down":
        depth += dist;
        break;
      case "up":
        depth -= dist;
        break;
    }
  }
  console.log(horizontal * depth);
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const lines = data.split('\n');
    calculateDistance(lines);
  }
});

