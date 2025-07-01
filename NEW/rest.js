// function sum() {
//     console.log(arguments); //arguments holds all the arguments passed to the function 
// }
//looks like array but we cannot use array methods.

// Rest params: collects all remaining arguments into an actual array.

function sumAll(...nums){
    let total = 0;
    for(let n of nums) total+=n;
    return total;
}

function sum(...nums){
    return nums.reduce((total, el) => total+el);
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`and Thanks to everyone else: ${everyoneElse}`);
}