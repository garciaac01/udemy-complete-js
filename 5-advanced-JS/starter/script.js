//"Classes" are called "Constructors" or "Prototypes" in JS
//Each js object has a prototype property that makes inheritence possible
//Prototype is where you put objects and properties that you want to be inherited
//Objects we create are instances of the Object object, so it they inherit methods
//from the Object prototype.

/*
// manual way of creating an object
var john = {
    name: "John",
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
};

// not really best practice to make properties part of the proto.
//Just shown here to show it is possible.
Person.prototype.species = "human";

// new operator creates empty object, causes the Person
// function to point at the empty object instead of the global object.
var john = new Person("John", 1990, "teacher");
john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1984, 'retired');
jane.calculateAge();
mark.calculateAge();

// Creating your own object inherits the prototype from the
// object object. A couple of useful methods inherited are shown here:
john.hasOwnProperty('job'); // true
john.hasOwnProperty('species'); // false. Even though john has this property,
// it's not considered his own property since it's inherited from the Person proto

john instanceof Person; // true
*/






/**************
 * Another way to make objects: object.create method
 */
/*
var personProto = {
    calculateAge: function () {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//better way (aside from the weird syntax)
//send second param to Object.create that includes
//key values:
var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });
*/








/************
 * Primitives vs objects
 */

// variables declared as primitives hold the actual primitive value
// variables declared as objects hold a reference to the location of the object in memory
// (same as java)
/*
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions
var age = 27;
var obj = {
    name: 'Andy',
    city: 'Indy'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age); //  27 -- pass by value
console.log(obj.city); // San Francisco -- pass by reference
*/




/**********
 * first class functions
 */
//functions are objects--they inherit from the object object
//first class function means they can do anything an object can
//like get sent to a function as a param or returned from a function
/*
var years = [1990, 1965, 1937, 2005, 1998];

// fn is a callback function--a function sent as a param to another function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

let fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

let rates = arrayCalc(ages, maxHeartRate);
console.log(rates);*/


/****************
 * functions returning functions
 */
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Bob'); //What subject do you teach, Bob?

let designerQuestion = interviewQuestion('designer');
designerQuestion('Giz'); // Giz, can you please explain what UX design is?
designerQuestion('Giac');

interviewQuestion('teacher')('Joe');
*/






/***************
 * Immediately invoked function expressions (iife)
 */
/*
// common js pattern
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

console.log(score); // undefined

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // pass the arg in the parenthesis at the end
*/







/******************
 * CLOSURES
 * "An inner function alwatys has access to the
 * variables and parameters of its outer function, even
 * after the outer function has returned."
 */
/*
function retirement(retirementAge) {
    let a = ' years left until retirement.';

    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
let retirementGermany = retirement(65);
let retirementIceland = retirement(67);

retirementUS(1980);
retirementGermany(1980);
retirementIceland(1980);



function interviewQuestion(job) {
    return function (name) {
        if (name === 'designer') {
            console.log(name + ", can you please explain what UX design is?");
        } else if (name === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

let teacherQuestion = interviewQuestion('teacher');
let designerQuestion = interviewQuestion('designer');
*/







/*******************
 * BIND, CALL, APPLY
 * Methods that functions inherit from the fuction object
 */
/*
let john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen!' +
                ' I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' +
                this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// use call method to give presentation function to emily
// called "method borrowing"
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method is similar, but it takes the arguments as an array
// john.presentation.array(emily, ['friendly', 'afternoon']); doesn't work for this example since we're not expecting an array

// bind is similar to call, but doesn't immediately call the function.
// it generates a copy that you can store somewhere
let johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night'); // creating a function based on another function like this is called "carrying"

let emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];

// fn is a callback function--a function sent as a param to another function
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

let ages = arrayCalc(years, calculateAge);
let fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/








/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
(function () {
    let Question = function (questionText, answers, answer) {
        this.questionText = questionText;
        this.answers = answers;
        this.answer = answer;

    };

    Question.prototype.displayQuestion = function () {
        let output = this.questionText;

        for (let i = 0; i < this.answers.length; i++) {
            output += `\n${i}. ${this.answers[i]}`;
        }
        console.log(output);
    }

    Question.prototype.checkAnswer = function (response) {
        return response === this.answer;
    }

    let question1 = new Question("What color is Gizmo?", ["black", "brown", "yellow"], 0);
    let question2 = new Question("How old is Harrison?", [0, 1, 2, 3], 1);
    let question3 = new Question("Where do we live?", ["Fort Wayne", "Broad Ripple", "Chicago"], 1);

    let questions = [question1, question2, question3];
    let question = questions[Math.floor(Math.random() * questions.length)];
    question.displayQuestion();
    let response = parseInt(prompt("Enter your answer"));

    if (question.checkAnswer(response)) {
        console.log("You got it right!");
    } else {
        console.log("Sorry, that's the wrong answer.");
    }
})();
*/


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function () {
    let Question = function (questionText, answers, answer) {
        this.questionText = questionText;
        this.answers = answers;
        this.answer = answer;

    };

    Question.prototype.displayQuestion = function () {
        let output = this.questionText;

        for (let i = 0; i < this.answers.length; i++) {
            output += `\n${i}. ${this.answers[i]}`;
        }
        console.log(output);
    }

    Question.prototype.checkAnswer = function (response, callback) {
        let sc;
        if (response === this.answer) {
            console.log("Correct answer!");
            sc = callback(true);
        } else {
            console.log("Wrong answer. Try again.");
            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is ' + score);
        console.log('-----------------')
    }

    let question1 = new Question("What color is Gizmo?", ["black", "brown", "yellow"], 0);
    let question2 = new Question("How old is Harrison?", [0, 1, 2, 3], 1);
    let question3 = new Question("Where do we live?", ["Fort Wayne", "Broad Ripple", "Chicago"], 1);
    let questions = [question1, question2, question3];

    function score() {
        let score = 0;
        return function (correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    }

    let keepScore = score();

    function nextQuestion() {
        let question = questions[Math.floor(Math.random() * questions.length)];
        question.displayQuestion();
        let response = prompt("Enter your answer");

        if (response !== "exit") {
            question.checkAnswer(parseInt(response), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();