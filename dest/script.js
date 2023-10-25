"use strict";
class Human {
    constructor(id, firstname, lastname, age, isMarried, birthday) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.isMarried = isMarried;
        this.birthday = birthday;
    }
}
const john = new Human("1", "John", "Smith", 40, false, new Date());
console.log(john);
console.log(john.id);
