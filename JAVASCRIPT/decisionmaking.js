// < , > , >=, <=, != , ==, ===, !==
//We can compare characters too.

// == vs ===
/*
 == (double equals): checks for equality of value, but not equality of type.
 It coerce both values to the same type and then compares them.
 This can lead to some unexpected results. 
 
 eg: 1 == '1' -> true.
     nul == undefined  -> true.
     1 == 2 -> false
     'a' == 'b' -> false
     0 == false -> true

 */

// === (strict equals)
/*
    It does care about the type. to compare both operands must be of same type.

    eg: 0 === false -> false


*/
 
//let userInput = prompt("Please enter a number: ");
//alert("HI There")
let int = parseInt("101");  //-> converts string to int
console.log(int); 