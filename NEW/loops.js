// for(let i = 0; i<=10; i++){
//     console.log(i);
// }

// for(let i = 0; i<=20; i+=2){
//     console.log(i);
// }

// for(let i = 100; i>=0; i-=10){
//     console.log(i);
// }


// const animals = ['lions', 'tigers', 'bears'];
// for(let i = 0; i<animals.length; i++){
//     console.log(i, animals[i]);
// }
// console.log(" ");

// for(let i = animals.length-1; i>=0; i--){
//     console.log(i, animals[i]);
// }

// const seatingChart = [
//     ['kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for(let i = 0; i<seatingChart.length; i++){
//     console.log(`Row #${i + 1}`);
//     for(let j = 0; j<seatingChart[i].length; j++){
//         console.log(seatingChart[i][j]);
//     }

// }

// const SECRET =  "BabyHippo";

// let guess = prompt("enter the secret code.....");
// while(guess !== SECRET){
//     guess = prompt("enter the secret code.....");
// }
// console.log("congrats you got the secret");

//-----------------------------------------------------
// For...of loop : nice and easy way to iterate over arrays.

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// for(let i = 0; i<subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for(let sub of subreddits){
//     console.log(`Visit reddit.com/r/${sub}`);
// }


// const seatingChart = [
//     ['kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for(let row of seatingChart){
//     for(let students of row){
//         console.log(students);
//     }
// }

//----------------------------------------------
//Iterate over object literals. however objects are not iterable.
const testScores = {
    keeman: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for(let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// Object.keys(testScores) -> returns array of keys of objects
// Object.values(testScores) -> returns array of values of objects
// Object.entries(testScores) -> returns nested array of key-value pairs

let total = 0;
let scores = Object.values(testScores);
for(let s of scores){
    total += s;
}
console.log(total);
console.log(`Average is: ${total/scores.length}`);
