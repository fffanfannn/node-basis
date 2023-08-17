let first = process.argv[2];
let second = process.argv[3];
// console.log(first + second);
// console.log(process.argv[2] + " " + process.argv[3]);
// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));

if (isNaN(first) && isNaN(second)) {
    console.log(first + " " + second);
} else if (!isNaN(first) && !isNaN(second)) {
    console.log(parseInt(first) + parseInt(second));
} else { console.log("no match type"); }


