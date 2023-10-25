"use strict";
const emailInputElement = document.getElementById('email');
const passwordInputElement = document.getElementById('password');
const selectElement = document.getElementById("select");
const result = document.getElementsByClassName("result");
const form = document.getElementById("form");
const button = document.getElementsByName("button");
// OBSŁUGA SELECT
let chosenValue = "";
// Event - Zdarzenie
// ONCHANGE
selectElement.onchange = (event) => {
    if (event.target === null)
        return;
    console.log(event.target.value);
    chosenValue = event.target.value;
};
// OBSŁUGA INPUTS
let email = "";
let password = "";
emailInputElement.addEventListener("change", function (e) {
    if (e.target === null)
        return;
    email = e.target.value;
});
passwordInputElement.addEventListener("change", function (e) {
    if (e.target === null)
        return;
    password = e.target.value;
});
form.onsubmit = (e) => {
    e.preventDefault();
};
button[0].addEventListener("click", (e) => {
    console.log(email, password, chosenValue);
    // console.log(result);
    result[0].innerHTML = `
        <p> ${email} </p>
        <p> ${password} </p>
        <h1> You have chosen ${chosenValue} </h1>
    `;
});
