"use strict";
// INTERFACE oraz TYPE
const user = {
    email: "email",
    fullname: "Bartłomiej Huza",
    age: 20,
    func: function (index) {
        console.log(this.email, this.fullname, this.age);
    }
};
// ENUM
var ELetter;
(function (ELetter) {
    ELetter["A"] = "A";
    ELetter["B"] = "B";
    ELetter["C"] = "Cebula";
    ELetter["D"] = "D";
})(ELetter || (ELetter = {}));
;
console.log(ELetter.C);
// UNIONS
// | => SHIFT + \
let nickname = 7867;
let array = ["Hello", 123, false];
let arr = ["Hello", "123", "false"];
