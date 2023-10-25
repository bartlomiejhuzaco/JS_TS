"use strict";
// function showHelloConsole(): void {
//     console.log("hello world!");
// }
// showHelloConsole();
// console.log(showHelloConsole);
// function showHello(): string {
//     return "Hello Course TS";
// }
// let text = showHello();
// console.log(text);
// let age = (() => {
//     return 30;
// })();
// console.log(age);
// const add = (a: number, b: number): string => {
//     let age = a + b;
//     const msg = `You are ${age} years old!`;
//     return msg;
// }
// console.log(add(15, 27));
const obj = {
    email: "bartlomiej.huza@gmail.com",
    fullname: "Bartłomiej Huza",
    func: () => {
        // console.log(this);
    }
};
obj.func();
