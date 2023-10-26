import Wolf from './abstract/animal/wolf.js';

const wolf1 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf2 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf3 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf4 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");

console.log(Wolf.counter);

wolf1.whoAreYou();
wolf3.bark();
console.log(wolf4.showMe());