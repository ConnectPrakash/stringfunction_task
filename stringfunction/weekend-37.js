// //
// Given a day, print 'yes' if it is a holiday otherwise print'no'.Assume that weekend days are holidays
// Sample Testcase:
// INPUT
// saturday
// OUTPUT
// yes
// INPUT
// monday
// OUTPUT
// no

let week= ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let weekend1 = "monday";
let weekend = weekend1.toLowerCase();
function func(weekend)
{
    for (let i = 0; i < weekend.length; i++) {
        if (week[i] !== weekend) {
           return "yes";
        }
        else {
            return "no";
        }
    }
}
let result = func(weekend)
console.log(result);