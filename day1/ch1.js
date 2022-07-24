"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function isItBigger(arr) {
    let increases = 0;
    for (let i = 0; i <= arr.length + 2; i++) {
        if (arr[i] > arr[i - 1]) {
            increases++;
        }
    }
    return increases;
}
fs_1.default.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const lines = data.split('\n').map(line => parseInt(line));
        const numOfIncreases = isItBigger(lines);
        console.log(numOfIncreases);
    }
});