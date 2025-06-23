// // let random = Math.random();
// // if(random < 0.5){
// //     console.log("Your number is less than 0.5");
// //     console.log(random);
// // }

// // const dayOfWeek = prompt("Enter a day").toLowerCase();

// // if(dayOfWeek === 'monday'){
// //     console.log("UGG I hate Mondays");
// // }
// // else if(dayOfWeek === 'friday'){
// //     console.log("I love Fridays");
// // }
// // else {
// //     console.log("MEH");
// // }


// // const userInput = prompt("Enter something");

// // if(NaN){
// //     console.log("Truthy");
// // }
// // else {
// //     console.log("False");
// // }

// // if(undefined){
// //     console.log('truth');
// // }
// // else {
// //     console.log('false');
// // }

// // if(' '){
// //     console.log('truth');
// // }
// // else {
// //     console.log('false');
// // }

// // const age = 65;
// // if(( age > 0 && age < 5)|| age>=65){
// //     console.log("Free");
// // }
// // else if(age >=5 && age < 10){
// //     console.log("$10");
// // }
// // else if(age >= 10 && age < 65){
// //     console.log("$20");
// // }
// // else {
// //     console.log("INVALID AGE")
// // }

// //Arrays--------------------------------------------------------------
// //Empty array
// let students = [];

// //array of strings
// // let colors = ['red', 'orange', 'yellow'];

// //array of numbers
// // let lottoNums = [19, 22, 56, 12, 51];

// // //mixed array
// // let stuff = [true, 68, 'cat', null];

// // console.log(colors[0]);
// // console.log(lottoNums.length);
// // console.log(colors[1][1]);

// // colors[0] = 'black';
// // console.log(colors);

// // colors[3] = 'green';
// // console.log(colors);

// //Array Methods
// //push and pop
// /* 
// Push = add to end
// pop = remove from end
// shift = remove from start
// unshift = add to start
// */
// //---------------------------------
// let movieLine = ['tom', 'nancy'];
// movieLine.push('oliver');
// movieLine.push('harry', 'hermione');
// movieLine.pop();
// console.log(movieLine);

// movieLine.shift();
// console.log(movieLine);
// movieLine.unshift('VIP');
// console.log(movieLine);
// //------------------------------------
// const a1 = [1, 2, 4];
// const a2 = [5, 6, 7];
// const a3 = a1.concat(a2);

// console.log(a3);
// //-----------------------------------
// console.log(movieLine);
// console.log(movieLine.indexOf('harry'));
// movieLine.push('VIP');
// console.log(movieLine);
// console.log(movieLine.indexOf('VIP'));
// movieLine.pop();
// movieLine.reverse();
// console.log(movieLine);

// //-------------------------------------
// console.log('This is slice of');
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let half = colors.slice(3, 5);
// console.log(half);
// console.log(colors);

// console.log('This is splice of');
// colors.splice(1, 0, 'green'); //(start, no. of deletes, replace by this)
// console.log(colors);   // splice will make changes to original array.

// colors.splice(3, 3, 'black');
// console.log(colors);

// //------------------------------------
// console.log('This is reference Types and Equality testing')
// let ex1 = ['hi'];
// let ex2 = ['hi'];
// console.log(ex1 === ex2);  //We get false because its not comparing the contents
// //when a new array is created it has its own reference number which is different for 
// //different array which is compared by '===' or '=='.

// let nums = [1, 2, 3];
// let numsCopy = nums;

// console.log(nums);
// console.log(numsCopy);
// nums.push(4);
// console.log(nums);
// console.log(numsCopy);
// console.log(nums === numsCopy);  //we get true because we are referring to same thing in memory.

// //----------------------------
// console.log(" ");
// console.log('Array and const');
// //for arrays if we define const array , we can still change the values
// //as long as the reference remains the same.
// //but we cannot redeclare because it will change the reference.
// const nums1 = [1,2,3];
// console.log(nums1);
// nums1.reverse();
// console.log(nums1);
// nums1.push(4);
// console.log(nums1);
// //--------------------------------------
// console.log('');
// console.log('Multidimensional arrays');
// const board = [
//     ['x', 'o', 'x'],
//     ['0', 'null', 'x'],
//     ['0', '0', 'o']
// ];
// console.log(board);
// console.log(board[0]);
// console.log(board[2][2]);
// board[1][1] = 'YAAAAH';
// console.log(board);

////-------------------------------------
////Guess Game
let maximum = parseInt(prompt("Enter the maximum number!"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = prompt("Enter you first guess! or press q to quit");
let attempts = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q'){
        break;
    }
    guess = parseInt(guess);
    if(guess>targetNum) {
        guess = prompt("Too high! Guess again");
        attempts++;
    }
    else if(guess<targetNum) {
        guess = prompt("Too Low! Guess again");
        attempts++;
    }
    else {
        guess = prompt("Invalid guess. Please enter a number or q to quit");
    }
}
if(guess == 'q'){
    console.log('You QUIT!');
}
else{
    console.log(`YAY! You got it, you took ${attempts} guesses`);
}

