// Understanding Hoisting

// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// variables
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age)

/**
 * NOTES:
 * - the only way to create a new scope in javascript is creating a function
 * - Lexical scope: the javascript always look up to the parent scope and verify about the variables
 */
 
/** - THIS keyword always set the global context */

console.log(this) //return window object
 
 
 var test = {
     name: "Luan",
     yearOfBirth: 1991,
     calculateAge: function() {
         console.log(this) // return the object because this refer to parent object

         /*function innerFunction(){
             console.log(this) //return window object because is the parent object
         }
         innerFunction()*/
     }
 }
 
 test.calculateAge()

 //BORROWING

 var mike = {
    name: "Mike",
    yearOfBirth: 1992
 }
 mike.calculateAge = test.calculateAge()
 mike.calculateAge() // return mike object