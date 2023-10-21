"use strict";
const fruits = ["apple", "orange", "cherry", "strawberries", "plum", "pepper", "pineapple"];
;
const user = {
    email: "bartlomiej.huza@gmail.com",
    password: "qwerty123",
    workInJS: 7,
    married: false,
    siblings: ["Sister 1", "Sister 2", "Brother"]
};
// console.log(user.email);
// console.log(user['email']);
// console.log(fruits[2]);
// FOR
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for (let i = 0, j = 0; j < 5 || i < 10; i++, j++) {
//     console.log("i: ", i);
//     console.log("j: ", j);
// }
const arrays = [
    [10, 20, 30, 40, 50],
    [100, 1000, 10000, 100000],
    [Math.PI, Math.E, Math.LN2]
];
// for (let i = 0; i < arrays.length; i++) {
//     for (let j = 0; j < arrays[i].length; j++) {
//         console.log(arrays[i][j]);
//     }
//     console.log("PAUZA");
// }
// WHILE
// let i: number = 0;
// while(i < 20) {
//     console.log(i);
//     console.log(i % 2 === 0 ? true : false);
//     i++;
//     console.log(i);
// }
// let isLoading: boolean = true;
// while(isLoading) {
//     console.log("Hurra ładuje się!");
//     if (true) {
//         isLoading = false;
//     }
// }
// for(;;) {
//     console.log("Infinity");
//     // break; 
//     // return;
// }
// DO...WHILE
// let i : number = 0;
// do {
//     console.log(i);
//     console.log(i % 2 === 0 ? true : false);
//     i++;
//     console.log(i);
// } while(i < 10);
// FOR..IN / FOR..OF
// for (let key in fruits) {
//    console.log(key);
// }
// for (let value of fruits) {
//     console.log(value);
// }
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
});
Object.entries(user).forEach((item) => {
    console.log(item);
});
