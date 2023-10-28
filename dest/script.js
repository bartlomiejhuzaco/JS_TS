"use strict";
const person = {
    iam: function () {
        console.log(this);
        console.log(this.name || "", this.email || "");
    },
    ilike: function (thing) {
        console.log(this.name, " likes ", thing);
    }
};
// person.iam();
// class User {
//     constructor(
//         public id: string,
//         public name: string,
//     ) {}
//     toString() {
//         console.log(this);
//         return this.id + " " + this.name;
//     }
// }
// const u = new User("1", "Tom");
// console.log(u.toString());
// CALL, APPLY, BIND
const person1 = {
    name: "Tom",
    email: "tom@gmail.com",
};
const person2 = {
    name: "Artur",
    email: "artur@gmail.com",
};
// CALL
// person.iam.call(person1); // this -> person
// person.iam.call(person2); // this -> person
person.ilike.call(person1, "books"); // this -> person
// APPLY
// person.iam.apply(person1); // this -> person
// person.iam.apply(person2); // this -> person
const argsILikeFunc = ['books'];
person.ilike.apply(person1, argsILikeFunc); // this -> person
// BIND
const ilike = person.ilike.bind(person2, "books");
ilike();
