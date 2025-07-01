const scores = [1, 2, 3,5, 5, 6, 5];

// const [gold, silver, bronze] = scores;

const raceResults = ['Rina', 'Mina', 'Tina'];

const [gold, silver, bronze] = raceResults

const [fastest, ...everyoneElse] = raceResults;

//destructing objects

const user = {
    email: '@GMAIL.com',
    password: 'asgsdgdng',
    firstName: 'Aton',
    lastName: 'dash',
    city: 'ghy',
    born: '2003'
}

// const firstName = user.firstName;

// const {firstName, email, city, password } = user;

// const {born} = user;

const {born: birthYear} = user; //same as const birthyear = user.born

const {city, silly = "n/a"} = user;


//Destructuring params

// function fullName(user){
//     const { firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

function fullName({firstName, lastName}){  //can give default value too.
    return `${firstName} ${lastName}`;
}



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

// movies.filter((movie) => movie.score>=90)

movies.filter(({score}) => score>=90);

// movies.map(movie => {
//     return `${movie.title} is rated ${movie.score}`;
// })

movies.map(({title, score}) => {
    return `${title} ${score}`;
})