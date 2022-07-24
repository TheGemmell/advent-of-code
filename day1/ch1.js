"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile('./ch1input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        const lines = data.split('\n');
        isItBigger(lines);
    }
});
function isItBigger(arr) {
    let increases = 0;
    console.log(increases);
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            console.log('ye');
        }
        else {
            increases++;
        }
    }
    console.log(increases);
}
let myarr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
isItBigger(myarr);
