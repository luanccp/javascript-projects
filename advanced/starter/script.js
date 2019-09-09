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
