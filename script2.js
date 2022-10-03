//Create Class Object People Using ES6 called constructor
class People{
    
    constructor(name, age , gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo() {
        return `${this.name} is a ${this.gender} and ${this.age} years old`
    }

    getAge(){
        return `${this.age}`
    }
}



//Inherit from People
class Students extends People {

    constructor(name, age, gender, yearEnrolled){
        super(name, age, gender);
        this.year = yearEnrolled;
    }


    enRolled(yearEnrolled) {
        this.year = yearEnrolled;
        this.enroll = true;
    }
}


//Instantiate Class People
// const person = new People("Jomar Pogi", 26, "Male");

// const person = new People("jomar", 26, "Male");

//instatiate Class Students
const student1 = new Students("Jomar", 26 , "Male", "2021")

student1.enRolled("2022");
console.log(student1);