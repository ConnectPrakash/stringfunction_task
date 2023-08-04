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
    let output = '';
    let str = userInput[0];
    console.log(func(str));
    function func(val) {
        let vow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for (let i of val) {
            let result = vow.includes(i)
            if (!result) {
                output = output + i;
            }
        }
        return output
    }
});