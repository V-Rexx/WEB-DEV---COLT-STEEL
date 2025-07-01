//Default Params 
// function rollDie(numsSides){
//     if(numsSides === undefined){
//         numsSides = 6;
//     }
//     return Math.floor(Math.random() * numsSides) + 1;
// }

//mew way
function rollDie(numsSides = 6){
    return Math.floor(Math.random() * numsSides) + 1;
}

function greet(person, msg="Hey there", punc="!"){
    console.log(`${msg}, ${person}${punc}`);
}

