function Student(firstName, lastName, ects) {
    this.firstName = firstName
    this.lastName = lastName
    this.ects = ects
    this.print = function () {
        return this.firstName.slice(0, 1).toUpperCase() + this.firstName.slice(1).toLowerCase()
            + " "
            + this.lastName.slice(0, 1).toUpperCase() + this.lastName.slice(1).toLowerCase();
    }
}

const student = new Student("adam", "kowal", 1234)
console.log(student.print())    //Adam Kowal
student.lastName = "Zięba"
console.log(student.print())    //Adam Zięba
console.log(student.ects + 10)  //1244