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
    function func(val) {
        if (val.length < 3) {
            return 0;
        }
        let firstChar = val[0];
        let lastChar = val[val.length - 1];
        let middleChar = val[Math.floor(val.length / 2)];
        if ((firstChar === 'a' || firstChar === 'A') &&
            (middleChar === 'm' || middleChar === 'M') &&
            (lastChar === 'z' || lastChar === 'Z')) {
            return 1;
        }
        return 0;
    }
    let val = userInput[0];
    console.log(func(val))
});