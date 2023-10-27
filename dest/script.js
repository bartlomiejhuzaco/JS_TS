"use strict";
// ... -> Spread operator
const arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr);
const arr2 = ["g", "h", "i", ...arr];
console.log(arr2 === arr);
console.log(arr2);
const obj = {
    email: "email@domain",
    fullname: "Imie i nazwisko",
    age: 50
};
const obj2 = { ...obj };
const obj3 = obj;
console.log(obj2 === obj);
console.log(obj3 === obj);
const { email, fullname, age } = obj;
// const email = obj.email;
console.log({ ...obj });
console.log(email, fullname, age);
// Object.entries(obj).forEach(([key, value]: [string, string | number]) => {
//     console.log(key, value);
// })
Object.entries(obj).forEach((item) => {
    console.log(item);
});
