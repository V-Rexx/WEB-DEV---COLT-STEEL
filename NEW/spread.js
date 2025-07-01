Math.max(13, 42, 124, 5, 6, 675, 753, 4, 24, 454, 6443, 65);
//.max expects multiple arguments .

const nums = [13, 42, 124, 5, 6, 675, 753, 4, 24, 454, 6443, 65];

Math.max(...nums); // use ...nums to spread the array.

Math.min(...nums);


const cats = ['Blue', 'Scout', 'Rocket'];
const copy = [...cats];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs, 'tommy'];

//Spread with objects
//copies properties from one object into another object literal

const feline = { legs: 4, family: 'Felidae'};
const canine = { family: 'Caninae', furry: true};

const dog = {...canine, isPet: true};

const lion = {...feline, genus: 'Panthera'};

const catDog = {...feline, ...canine};

const a = {...[2, 3, 4, 5]};
const s = {..."HELLO"};




const dataFromForm = {
    email: "bluemagic@gmail.com",
    password: "tobias123",
    username: "tefuke"
}

const newUser = {...dataFromForm, id: 2345, isAdmin: false};