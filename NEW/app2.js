console.log('Object Literals');
//helps us store datas 
//objects are collections of properties.
//properties are a key-value pair.
//rather than accessing data using an index, we use custom keys
//we can store all types of values , like arrays too inside object

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5754,
    workoutsThisWeek : 5,
    avgGoodSleep : '2:13'
};

console.log(fitBitData);

const kitchenSink = {
    favNum: 37401374,
    isFunny: true,
    colors: ['red', 'orange']
};
console.log(kitchenSink);

console.log(kitchenSink["favNum"]);
console.log(fitBitData.totalMiles);

// VALID KEYS: All keys are converted to strings, except for symbols

const dumb = {  //here true and null is converted t0 string so it will work
    true : 'yes',
    null : 'no'
};
console.log(dumb);


const years = {
    1999 : 'good',
    2020 : 'Bad'
};
let birthYear = 2020; 
console.log(years[birthYear]);  //In this case we cant use '.'

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant.address + ", " + restaurant.city + ", " + restaurant.state + " " + restaurant.zipcode;
console.log(fullAddress);