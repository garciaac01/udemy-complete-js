/*var firstName = "John";
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job); //undefined

job = "Teacher";
console.log(job);
*/

/************
 * Variable mutation and type coersion
 */
/*
var firstName = "John";
var age = 28;

console.log(firstName + " " + age);

var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);

var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
*/

/*******************
 * Basic operators
 */
/*var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof "Mark is older than John");
var x;
console.log(typeof x);
*/

/******************
 * Operator precedence
 */
/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x *= 2;
console.log(x);
x += 2;
console.log(x);
x++;
*/

/*****************
 * CODING CHALLENGE 1
 *
 * Mark and John are trying to compare their BMI,
 * which is calculated using the formula
 * BMI = mass / height^2
 * mass in kg, height in m
 *
 * 1. Store Mark and John's mass and height in vars
 * 2. Calculate their BMIs
 * 3. Create a boolean that contains whether Mark has a higher
 * BMI than John
 * 4. Print the result to the console
 */
/*
var markMass = 75,
    johnMass = 70,
    markHeight = 1.8,
    johnHeight = 1.9;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var isMarkBmiGreatest = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + isMarkBmiGreatest);
*/

/*******************
 * If/else statements
 */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
    console.log(firstName + " is married.");
} else {
    console.log(firstName + " is single.");
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + " is married.");
} else {
    console.log(firstName + " is single.");
}
*/

/*****************
 * Boolean logic
 */
/*
var firstName = "John";
var age = 16;

if (age < 13) {
    console.log(firstName + " is a boy.");
} else if (13 <= age && age < 20) {
    console.log(firstName + " is a teenager.");
} else if (age > 20 && age <= 30) {
    console.log(firstName + " is a man.");
} else {
    console.log(firstName + " is a man.");
}
*/

/******************
 * Ternary operator and switch statement
 */

// ternary operator
/*
var firstName = "John";
var age = 16;

age >= 18 ? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice.");

// condition ? true behavior : false behavior
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// switch statement
var job = "teacher";

switch (job) {
    case "teacher":
    case "instructor": // will run if either case is true
        console.log(firstName + " teaches kids how to code.");
        break
    case "driver":
        console.log(firstName + " drives an uber.");
        break;
    case "designer":
        console.log(firstName + " designs beautiful websites");
        break;
    default:
        console.log(firstName + " does something else.");
}

var firstName = "John";
var age = 16;

switch (true) {
    case age < 13:
        console.log(firstName + " is a boy.");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + " is a teenager.");
        break;
    case age > 20 && age <= 30:
        console.log(firstName + " is a man.");
        break;
    default:
        console.log(firstName + " is a man.");
}
*/

/***************
 * truthy and falsey values
 */

// falsey values: undefined, null, 0, "", NaN
// truthy values: everything else
/*
var height;

height = 23;
if (height || height === 0) {
    console.log("Variable is defined.");
} else {
    console.log("Variable has not been defined");
}

// Equality operators
if (height == "23") {
    console.log("The == operator does type coercion!");
}
*/

/**************
 * CODING CHALLENGE 2
 *
 * John and Mike both play basketball on different teams.
 * In the latest 3 games, John's team scored 80, 120, and 103 points, while
 * Mike's team scored 116, 94 and 123 points.
 *
 * 1. Calculate the average score for each team
 * 2. Decide which teams wins in average (highest average score),
 * and print the winner to the console. Also include the average score in the output.
 * 3. Then change the scores to show different winners. Don't forget to take into account there might
 * be a draw (the same average score)
 *
 * 4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before,
 * log the average winner to the console. HINT: you will need the && operator.
 */
/*
var johnAverage = (80 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (116 + 94 + 123) / 3;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    console.log("John's average is highest");
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    console.log("Mike's average is highest");
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log("Mary's average is highest.");
} else {
    console.log("There was a tie in averages.");
}
*/

/**********************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1984);
console.log(ageJohn, ageMike);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
*/

/***************
 * Function Statements and Expressions
 */

// function expression
/*
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case "teacher":
            return firstName + ' teaches kids how to code';
        case "driver":
            return firstName + ' drives for Uber.';
        case "designer":
            return firstName + ' creates cool websites.';
        default:
            return firstName + " does something else.";
    }
}

console.log(whatDoYouDo("teacher", "John"));
*/

/********************
 * Arrays
 */
/*
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

names[1] = "Ben";
console.log(names);

names[names.length] = "Andy";
names[5] = "Mary";

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); // add to end of array
john.unshift("Mr."); // add to beginning of array
john.pop(); // remove element from end of the array
john.shift(); // remove the first element from the array
john.indexOf(1990); // return index where this appears, or -1
*/

/***************
 * CODING CHALLENGE 3
 *
 * John and his family went on a holiday and went to 3
 * different restaurants. The bills were $124, $48, and $268.
 *
 * To tip the waiter a fair amount, John created a simple tip calculator
 * (as a function). He likes to tip 20% of the bill when the bill is less than
 * $50, 15% when the bill is between $50 and $200, and 10% if over $200.
 *
 * In the end, John would like to have 2 arrays.
 * 1 ) containing all 3 tips
 * 2 ) Containing all three final amounts paid (bill + tip)
 *
 * Note: to calculate 20%, 20/100 = .2)
 *
 */
/*
var tipCalculator = function (bill) {
    if (bill < 50) {
        return bill * .2;
    } else if (bill <= 200) {
        return bill * .15;
    } else {
        return bill * .1
    }
}

var billOne = 124, billTwo = 48, billThree = 268;
var tips = [tipCalculator(billOne), tipCalculator(billTwo), tipCalculator(billThree)];
var totals = [billOne + tips[0], billTwo + tips[1], billThree + tips[2]];
console.log(tips);
console.log(totals);
*/

/*****************
 * Objects and properties
 */
/*
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false
};
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "driver";
john["isMarried"] = true;

// new object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);
*/

/***************
 * Objects and methods
 */
/*
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    calcAge: function () {
        this.age = 2020 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/********************
 * CODING CHALLENGE 4
 *
 * Back to first coding challenge. Implement same functionality
 * but with objects and methods.
 *
 * 1. For each, create object with properties for full name, mass, height
 * 2. Add method on object to calculate bmi. Save the bmi to the object and also return
 * it from the method.
 * 3. Log to the console who has the highest bmi, together with the full name and
 * their respective bmi. Don't forget they might have the same bmi.
 *
 * bmi = mass / height^2
 *
 */
/*
var mark = {
    fullName: "Mark Smith",
    mass: 94,
    height: 3,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: "John Doe",
    mass: 100,
    height: 3.3,
    calculateBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calculateBMI();
john.calculateBMI();

if (mark.bmi > john.bmi) {
    console.log("Mark has the greater bmi");
    console.log(mark, john);
} else if (mark.bmi < john.bmi) {
    console.log("John has the greater bmi");
    console.log(mark, john);
} else {
    console.log("The bmis are equal");
    console.log(mark, john);
}
*/

/*************
 * Loops and iteration
 */
/*
for (var i = 0; i < 10; i++) {
    console.log(i); // print values from 0 to 9
}

for (var i = 0; i < 10; i += 2) {
    console.log(i); // print values from 0 to 9
}

var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ["John", "Smith", 1990, "designer", false];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// loop in reverse
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/**************
 * CODING CHALLENGE 5
 *
 * Back to the tip calculator
 * John's bills were $124, $48, $268, $180, and $42.
 * tip is 20% for < $50, 15% when between $50 and $200,
 * and 10% if over $200.
 *
 * 1. Create an object with an array for the bill values
 * 2. Add a method to calculate the tip
 * 3. The method should include a loop to iterate over all the paid bills
 * and do the tip calculations.
 * 4. As an output, create 1) a new array containing all tips, and 2)
 * an array containing final paid amounts (bill + tip). HINT: Start with two empty
 * arrays as properties and then fill them up in the loop
 *
 * EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
 * The bills were $77, $375, $110, and $45.
 * Mark likes to tip 20% of the bill when the bill is < $100, 10%
 * when the bill is between $100 and $300, and 25% if the bill is more than $300.
 *
 * 5. Implement the same functionality as before, this time using Mark's tipping rules.
 * 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the
 * array, and in each iteration store the current sum in a variables (starting from 0). After you have
 * the sum of the array, divide it by the number of elements in it (that's how you calculate the average).
 * 7. Calculate the average tip for each family.
 * 8. Log to the console which family paid the highest tips on average.
 *
 */

var johnTips = {
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.total = [];
        var rate;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                rate = .2;
            } else if (this.bills[i] <= 200) {
                rate = .15;
            } else {
                rate = .1;
            }
            this.tips[i] = this.bills[i] * rate;
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
}

var markTips = {
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.total = [];
        var rate;
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                rate = .2;
            } else if (this.bills[i] <= 300) {
                rate = .1;
            } else {
                rate = .25;
            }
            this.tips[i] = this.bills[i] * rate;
            this.total[i] = this.bills[i] + this.tips[i];
        }
    }
}

function averageTips(tips) {
    sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

johnTips.calcTips();
markTips.calcTips();

johnTips.average = averageTips(johnTips.tips);
markTips.average = averageTips(markTips.tips);

if (johnTips.average > markTips.average) {
    console.log("John's average tip was greater.");
    console.log(johnTips.average, markTips.average);
} else if (johnTips.average < markTips.average) {
    console.log("Mark's average tip was greater.");
    console.log(johnTips.average, markTips.average);
} else {
    console.log("The average tips are equal.");
    console.log(johnTips.average, markTips.average);
}