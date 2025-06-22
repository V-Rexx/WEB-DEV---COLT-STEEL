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

const SECRET =  "BabyHippo";

let guess = prompt("enter the secret code.....");
while(guess !== SECRET){
    guess = prompt("enter the secret code.....");
}
console.log("congrats you got the secret");

