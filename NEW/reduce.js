// executes a reducer function on each elements of the array, resulting in a single value.

const prices = [9.99, 1.50, 19.89, 94.4 ];

const total = prices.reduce((total, price) => {
    return total + price;
})

//single line
//const total  = prices.reduce((total, price) => total+price)

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
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
    }
]

const highRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum+num, 100);