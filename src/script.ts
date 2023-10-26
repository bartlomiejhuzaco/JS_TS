// SET

// const set: Set<number> = new Set([15, 20, 30, 15, 20, 10, 10, 10, 10]);
// console.log(set);

// const setGenerator = set.values();
// const setGeneratorKeys = set.keys();

// for (let item of setGenerator) {
//     console.log(item);
// }

// console.log(set.has(15));


// MAP
// const map: Map<string, Array<string>> = new Map([
//     ["key1", ["a", "b", "c"]],
//     ["key2", ["d", "e", "f"]],
// ]);
// console.log(map);

// map.forEach((value, key, map) => {
//     console.log(value);
//     console.log(key);
//     console.log("HEllo");
// });

// MAP FUNCTION
// const arr = [15, 20, 30, 15, 20, 10, 10, 10, 10].map((value, index, array) => {
//     console.log(value, index);
//     console.log(array);

//     return value;
// });

// console.log(arr);

// SYMBOL
const sym1 = Symbol("uuid");
const sym2 = Symbol("Email");

Symbol.iterator;