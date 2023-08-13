let str1 = 'guvi';
let str2 = 'guvi';
function func(input1, input2)
{
    for (let i = 0; i < input1.length; i++)
    {
        if (input1[i] === input2[i])
        {
            return 'yes';
        }
        else {
            return 'no';
        }
        }
}
let result = func(str1, str2);
console.log(result);