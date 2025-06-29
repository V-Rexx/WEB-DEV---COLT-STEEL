// Creates a new array with all elements that pass the test
// implemented by the provided function.

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.filter(n => {
    return n<10;
})


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
    },
    {
        title: 'LALALALa',
        score: 39
    },
    {
        title: 'HEraPHERI',
        score: 50
    }
]

const goodMovies = movies.filter(m => m.score>80);
const goodTitles = goodMovies.map(m => m.title);
const badMovies = movies.filter(m => m.score<80).map(m => m.title);
