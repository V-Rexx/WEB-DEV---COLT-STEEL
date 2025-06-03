
let year = 1985; //block scoped, can be updated but not redeclared int the same scope, Hoisted but not redeclared.
let age = 21;
age = 22; //allowed;
//let age = 22;  not allowed 



var name = "Alice"; 
var name = "Bob"; //allowed 
/* 
    Function-scoped

Can be re-declared and updated

Hoisted (but initialized as undefined)
*/


const PI = 3.14;
// PI = 3.14159;  not allowed, will give and error . 
// Block_scoped ,  cannot be redclared or updated , must be initialized at declaration.

