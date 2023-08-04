// Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
// Sample Testcase:
// INPUT
// XCODE
// OUTPUT
// // XOE CD
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let str = userInput[0];
    let odd = '';
    let even = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even = even + str[i];
        }
        else {
            odd = odd + str[i];
        }
    }
    console.log(even + " " + odd);
});