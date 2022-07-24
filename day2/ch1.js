"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function calculateDistance(arr) {
    let horizontal = 0;
    let depth = 0;
    for (let inst of arr) {
        let dir;
        let dist;
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
fs_1.default.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const lines = data.split('\n');
        calculateDistance(lines);
    }
});
