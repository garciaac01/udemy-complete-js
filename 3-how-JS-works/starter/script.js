/*************
 * Notes on how js works
 *
 * Execution context:
 * the context in which your code is evaluated, ie
 * global, function, etc.
 * Default is global, which in the browser is the window object
 * lastName === window.lastName //true
 */
///////////////////////////////////////
// Lecture: Hoisting
// functions defined at start of execution phase
// variables defined and set to undefined

/*
// functions
calculateAge(1965); // can call the function before it is declared
// hoisting makes it available


function calculateAge(year) {
    console.log(2020 - year);
}

// retirement(1990); // hoisting only works with function
// declarations, not function expressions. This throws an error.

var retirement = function (year) {
    console.log(65 - (2020 - year));
}


// variables
console.log(age); // undefined - hoisting makes it available but undefined
var age = 23;
console.log(age); // 23

// scope example
function foo() {
    var age = 65;
    console.log(age);
}
foo(); // 65
console.log(age); // 23


*/






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// scope includes the scope of where the function sits "lexically"
// ie second has access to vars in first and global
// first has access to global
// global does NOT has access to vars in first or second
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third();
    }
}

// cannot access vars in first and second
// because it is not written in second's scope
function third() {
    var d = "John";
    console.log(a + b + c + d);
}

*/

///////////////////////////////////////
// Lecture: The this keyword
// in regular function -- "this" refers to the global object (in the browser, that's the window)
// in method (function on object) -- refers to the instance of the object calling the method

//console.log(this); // window object


calculateAge(1985);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}


var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this); // refers to the john object
        console.log(2016 - this.yearOfBirth);

        // considered a "regular" function, not a method
        // so this refers to the window
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();


var mike = {
    name: "Mike",
    yearOfBirth: 1984
};

// "method borrowing"
mike.calculateAge = john.calculateAge;
mike.calculateAge();

