

// You are given a number with duplicate digits your task is to remove the immediate duplicate digits and print the result

// Input Description:
// You are given a long string of digits

// Output Description:
// Print the desired result print - 1 if result length is 0

// Sample Input:
// 1331

// Sample Output:
// 11

function func(val)
{
    let result = " ";
    for (let i = 0; i < val.length; i++)
    {
        if (val[i] !== val[i + 1])
        {
            result += val[i];
        }
        
    }
    return result.length > 0 ? result : -1;
}
let input = "1331";
let out = func(input);
console.log(out);
