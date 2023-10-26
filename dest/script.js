"use strict";
// ITERABLE
const a = [1, 2, 3, 4];
const it = a[Symbol.iterator]();
console.log(it);
while (true) {
    let next = it.next();
    if (!next.done) {
        console.log(next.value);
    }
    else {
        break;
    }
}
// SIMPLE IMPLEMENTATION
const obj = {
    email: "email@domain",
    fullname: "Name",
    age: 50,
    [Symbol.iterator]: function () {
        return {
            value: this,
            done: false,
        };
    }
};
console.log(obj[Symbol.iterator]().value);
// Generator
function* generator() {
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    yield 5; // { value: 5, done: false }
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    yield 10; // { value: 10, done: false }
    return 15; // { value: 15, done: false }
}
const gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
