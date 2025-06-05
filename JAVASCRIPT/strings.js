
let str1 = "Hello"; 
let str2 = 'World'; //we can use both single and double quotes.

console.log(str1);
console.log(str2);

let str = "I told her to 'go away' ";
console.log(str);

let animals = "Dumbo Octopus";
let char = animals[88]; //undefined. 
console.log(char);
console.log(animals.length);
console.log("lol".length);
console.log("lol"+"lol");

let firstName = "Vigoraj";
let lastName = "Bty";
console.log(firstName + " " + lastName);

let result = 1 + "hi"; // number + string . 
console.log(result); // we get result as a string.
console.log(typeof result);
console.log(typeof 1);


//String Methods
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Methods are built in actions that we can perform with individual strings.
// Searching within a string.
// Replacing part of a string.
// changing the casing of a string.

let msg = 'I am a King';
let yellMsg = msg.toUpperCase();
console.log(msg); // msg will remain unchanged.
console.log(yellMsg); // output: I AM A KING.

//trim
let userInput = "    hello my name in tim tom tammy ping pong";
let afterTrim = userInput.trim();
console.log(userInput);
console.log(afterTrim);

//IN JS we can use as many string methods as we want.
let res = "   Hello World   "
    .trim() //-> "Hello World"
    .toUpperCase() //-> "HELLO WORLD"
    .replace("WORLD", "RAJ") //-> "HELLO RAJ"
    .slice(0, 7);//->"HELLO R"

console.log(res);

//Each method returns a string -> so we can chain next method on it.
//Limitations: 
// We cant chain a method that returns a non-string unless the next method applies to that type.


//Methods with arguments.
//1. indexOf() method returns the first occurence of the specified value. returns -1 if the value
// is not found.

let tvShow = 'catdog';
let r = tvShow.indexOf('cat');
let e = tvShow.indexOf('dog');
let s = tvShow.indexOf('z');

console.log(r, e, s);

//2. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
const strr = 'The quick brown fox jumps over the lazy dog.';

console.log(strr.slice(31)); // output: "the lazy dog", index of t = 31
console.log(strr.slice(4, 19)); //output: quick brown fox;
console.log(strr.slice(-4)); // output: dog;
console.log(strr.slice(-9, -5)); // lazy 

console.log('lol'.repeat(10));


//Template Literals
//Template literals are strings that allow embedded expressions, which will be evaluated
//ans then turned into a resulting string.
// use back ticks ``

let product = 'Artichoke';
let price = 2.25;
let qty = 5;
console.log(`You bought ${qty} ${product.toUpperCase()}. Total is: $${price*qty}`);