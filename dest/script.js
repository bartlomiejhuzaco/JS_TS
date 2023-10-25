"use strict";
// GENERIC TYPES - Typy generyczna
var EAppCategory;
(function (EAppCategory) {
    EAppCategory[EAppCategory["SPORT"] = 0] = "SPORT";
    EAppCategory[EAppCategory["EDUCATION"] = 1] = "EDUCATION";
    EAppCategory[EAppCategory["VIDEOS"] = 2] = "VIDEOS";
})(EAppCategory || (EAppCategory = {}));
const app = {
    id: "1",
    category: EAppCategory.EDUCATION
};
// FUNCTION
function add(arg1, arg2) {
    let a = null;
    const text = `${arg1} + ${arg2}`;
    a = arg1;
    return text;
}
console.log(add("Hello", 100));
// CONNECTION DB
const serviceBenefits1 = {
    economic: ["helo", "Oi"],
    standard: [],
    premium: ["Tylko", "dla", " bogatych"]
};
const serviceBenefits2 = {
    economic: [false],
    standard: [false],
    premium: [true]
};
const serviceBenefits3 = {
    economic: [["a"], ["b"], ["c"]],
    standard: [["d"], ["e"], ["f"]],
    premium: []
};
