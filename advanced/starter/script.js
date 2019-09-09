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