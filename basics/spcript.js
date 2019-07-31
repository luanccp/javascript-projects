var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names.length )

names[2] = 'Luan'


var person = ['Luan', 'Castheloge', 123, true]
person.push('Final da lista')
person.unshift('No começo')

//removing from the tail of array
person.pop()

//removing from top of the array
person.shift()

//returning the index of array, if return -1 isn't on the array
person.indexOf(123)

// working with functions inside the arrays
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

//when I use calcBMI once, after that I just have to call bmi props
if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}