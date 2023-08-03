let input = "csdfghjk".split(""); 
let result = "no";
let output = input.map((value) => {
    if (value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u')
    {
        result = "yes";
}    
})
console.log(result)