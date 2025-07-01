// every - tests whether all elements in the array pass the provided function. it returns a boolean value.
// some - similar to every, but returns true if any of the elements pass the test function.

const words = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

words.every(word => {
    return word.length === 3;
})//true

words.every(word => word[0] === 'd'); //false

words.every(w => {
    let last_letter = w[w.length-1];
    return last_letter === 'g';
}) // false

const exams = [88, 80, 98, 92, 78, 77, 65, 31, 56]

exams.every(score => score>=75) //false

exams.some(score => score>=75) //true


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

movies.some(movie => movie.score>=90)