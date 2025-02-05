class Person {
    constructor(name, batch, age, year) {
        this.name = name
        this.batch = batch
        this.age = age
        this.year = year
    }


    showDetails() {
        console.log(`Hello I am ${this.name}, I am in batch ${this.batch}, I am ${this.age} years old and I am in year ${this.year}`)
    }
}

Person.getName = function(){
    console.log(this.name)
}

const person1 = new Person("John", 2020, 25, 3)
person1.showDetails()
// person1.getName() // This will throw an error because getName is not a function of person1

//Implementing inheritance in JavaScript

class Student extends Person {
    constructor(name, batch, age, year, subject) {
        super(name, batch, age, year)
        this.subject = subject
    }

    showDetails() {
        console.log(`Hello I am ${this.name}, I am in batch ${this.batch}, I am ${this.age} years old and I am in year ${this.year} and I am studying ${this.subject}`)
    }
}


const student1 = new Student("Ujjwal", 2020, 25, 3, "MBBS")
student1.showDetails()