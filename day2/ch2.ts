import fs from 'fs';



function calculateDistance(arr: string[]) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let inst of arr) {
    let dir: string;
    let dist: string | number;

    [dir, dist] = inst.split(' ');
    dist = parseInt(dist);

    switch (dir) {
      case "forward":
        horizontal += dist;
        depth += (dist * aim);
        break;
      case "down":
        aim += dist;
        break;
      case "up":
        aim -= dist;
        break;
    }
  }
  console.log(horizontal * depth);
}

fs.readFile(`${__dirname}/input.txt`, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const lines = data.split('\n');
    calculateDistance(lines);
  }
});

