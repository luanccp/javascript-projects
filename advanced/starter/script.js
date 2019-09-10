/*
var john = {
    name:'Luan',
    job:'Software Engineer'
}

var Person = function (name, job) {
    this.name = name
    this.job = job

    //adding a function inside the Constructor
    // this.calculate = function(){
    //     console.log(this.name)
    // }
}

// adding function via prototype
Person.prototype.calculate = function(){
    console.log(this.name)
}


Person.prototype.lastName = 'Castheloge'
var luan = new Person('Luan2', 'crazy')

luan.calculate()
console.log(luan.lastName)
*/

//Object create

var personProto = {
    calculate: function(){
        console.log("Funcao calculate")
    }
}

var luan = Object.create(personProto)
luan.name = 'Luan'
luan.job = 'Software'

//object share the same space in memory

var obj1 = {
    name:"luan",
    age: 28
}

var obj2 = obj1
obj1.age = 30
console.log(obj1.age)
console.log(obj2.age)


//if you pass an object to a function, every change that you'll make reflect in the object outside


/////////////////////////////
// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
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
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);
*/

/////////////////////////////
// Functions returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
interviewQuestion('teacher')('Mark');


////IIFE (Imediatily Invoked Function Expression)
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//we cannot access store out of the function

/////////////////////////////
// Bind, call and apply
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

//Borrowing functions (change the this to this from Emily)
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
*/