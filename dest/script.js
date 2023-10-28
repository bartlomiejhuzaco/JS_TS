"use strict";
// literal notion
const regexp1 = /ab+c/i;
// class
const regexp2 = new RegExp("ab+c", "i");
console.log(regexp1[Symbol.match] === undefined);
