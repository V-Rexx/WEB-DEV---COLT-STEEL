//newer syntax for function . 
// function square(x) {
//     return x*x;
// }

//alternative with arrow function.
const square = x => { // if single argument we can write without parenthesis.
    return x*x; 
}

const add = (x,y) => {
    return x+y;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// Implicit Return : only works if there is only one statement in the body
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
//or 
const rollDie = () => Math.floor(Math.random() * 6) + 1

const addition = (a, b) => a+b

// const isEven = function(num){ //regular function expression
//     return num%2===0;
// }

// const isEven = (num) => { //arrow fucntion with parens around param
//     return num%2===0; 
// }

// const isEven = num => { // no parens around param
//     return num%2===0;
// }

// const isEven = num => ( //implicit return 
//     num%2===0
// )

const isEven = num => num%2===0;  //one-liner implicit return

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`;
// })

const newMovies = movies.map((movie) => (
     `${movie.title} - ${movie.score / 10}`
))