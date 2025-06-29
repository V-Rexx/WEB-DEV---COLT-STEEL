// function grumps(){
//     console.log('ugh....you again....');
//     console.log('for the last time....');
//     console.log('LEAVE ME ALONE!!!');
// }

// singSong(); i can call the function before defining it.

// function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
//     console.log("PA")
// }

// singSong();

// function greet(person) {   //if no argument is passed its gonna give undefined.
//     console.log(`Hi, ${person}!`);
// }

// greet('Arya');
// greet('Dolby');


// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}!`);
// }

// greet('George', 'Clooney');

// repeat('hi', 3);

// function repeat(str, numTimes){
//     let result = '';
//     for(let i = 0; i<numTimes; i++){
//         result += str;
//     }
//     console.log(result);
// }

// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     }
//     return x+y;
// }

// let total = add(add(1, 5), 9);
// console.log(total);

//--SCOPE--
// let total = 0;
// function collectEggs() {
//     total = 6;
// }
// console.log(total);
// collectEggs();
// console.log(total);

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     //  let bird = 'Great Blue Heron';
//      console.log(bird);
     
// }
// birdWatch();

// const creature = "Common sea dragon";

// function scubaDive() {
//     const creature = "Spanish Dancer";
//     console.log(creature);
// }
// scubaDive();

//--BLOCK SCOPED--  
// let radius = 8;
// if(radius > 0){
//     const PI = 3.14159;
// }
// console.log(radius);
// // console.log(PI);

// for(let i = 0; i<5; i++){  // let and const are block scoped. // where as var is not.
//     let msg = "ASDKGHDS";
//     console.log(msg);
// }
// console.log(msg);

//--LEXICAL SCOPE--

// function bankRobbery(){
//     const heroes = ['Spiderman', 'Batman', 'Wolverine', 'Thor'];
//     function cryForHelp() {
//         function inner() {
//             for(let hero of heroes){
//                 console.log(`PLESE HELP US, ${hero}`);
//             }
//         }
//         inner();
//     }
//     cryForHelp();
// }

// const add = function (x, y){
//     return x + y;
// }

//--Higher order functions--
//functions that operate on/with other functions.
//they can:
//accept other functions as arguments
//return a function.

// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f){
//     for(let i = 0; i<10; i++){
//         f();
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function () {
//             console.log("Congrts, you win a million dollars");
//         }
//     }
//     else {
//         return function () {
//             alert("YOU HAVE A VIRUS");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//             alert("STOP");
//         }
//     }
// }

// const mystery = makeMysteryFunc();

// function isBetween(num){
//     return num>=50 && num<=100;
// }

// function makeBetweenFunc(min, max) {
//     return function (num){
//         return num>= min && num<=max;
//     }
// }


//we can add functions as properties on objects.
//we call them methods!
//methods are wrapped in objects.

// const myMath = {
//     PI: 3.14159,
//     square: function(num){
//         return num*num;
//     },
//     cube: function(num){
//         return num**3;
//     }
// };
//Every method is a function. but not vice versa.
//myMath["cube"](4) - one way to access.

//Shorter way to define methods. 
const myMath = {
    PI: 3.14159,
    square(num) {
        return num**2;
    },
    cube(num) {
        return num**3;
    }
}