// alert("Hi");

// () => {
    // $("div").html("Kenneth");
// }

//Create Object
// const people = {
//     name: "Jomar",
//     age: 26,
//     gender: "Male"
// }

//Create Objet using es5
function People(name, age, gender) {

    this.name = name;
    this.age = age;
    this.gender = gender;

    //Creating method which will be save also inside the object
    // this.getInfo = function(){
    //     return `${this.name} is ${this.gender} and age ${this.age}`;
    // }
}

//Protype method save inside the prototype
People.prototype.getInfo = function(){
    return `${this.name} is ${this.gender} and age ${this.age}`;
}

People.prototype.getAge = function(){
    return this.name + " is " + this.age + " years Old"
}

//Intantiate in People Object
// const person = new People("Jomar",26,"Male")

// Ingeritance
function Students(name, age, gender, yearEnrolled){

    People.call(this, name, age, gender);
        this.year = yearEnrolled;
}


//Getting methods on People object to Students Object
Students.prototype = Object.create(People.prototype)


//Creating prototype for student
Students.prototype.enRoll = function(yearEnrolled){
    this.year = yearEnrolled
    this.enrolled = true;
}

//intantiate in student object
const student = new Students("Jomar",26,"Male", "2021")


student.enRoll("2022")
console.log(student)