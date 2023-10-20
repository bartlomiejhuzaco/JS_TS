/*
const array: string[] = ["Hello", "World!", "It's", "Beautiful", "Day!"];

// console.log(array[1]);
// array.push("It's TS");

// console.log(array[5], array);
console.log(array);

array.shift();
console.log(array);

array.pop();

console.log(array);
*/

let a = "INDEX";

const obj: object = {
    4: "Four",
    "email": "domain@email.pl",
    false: "FAŁSZ",
    [`${a}`]: "WARTOŚĆ"
};

console.log(obj);

console.log(`Hello user ${a} ${obj}`);
console.log("Hello user" + a + obj);