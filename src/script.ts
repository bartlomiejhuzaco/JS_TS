
const emailInputElement: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
const passwordInputElement: HTMLInputElement = document.getElementById('password') as HTMLInputElement;

const selectElement: HTMLSelectElement = document.getElementById("select") as HTMLSelectElement;

const result: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName("result") as HTMLCollectionOf<HTMLDivElement>;

const form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
const button: NodeListOf<HTMLButtonElement> = document.getElementsByName("button") as NodeListOf<HTMLButtonElement>;

// OBSŁUGA SELECT
let chosenValue: string = "";
// Event - Zdarzenie
// ONCHANGE
selectElement.onchange = (event: any) => {
    if (event.target === null) return;

    console.log(event.target.value);
    chosenValue = event.target.value;
}

// OBSŁUGA INPUTS

let email: string = "";
let password: string = "";

emailInputElement.addEventListener("change", function(e: any) {
    if (e.target === null) return;

    email = e.target.value;
});

passwordInputElement.addEventListener("change", function(e: any) {
    if (e.target === null) return;

    password = e.target.value;
});

form.onsubmit = (e) => {
    e.preventDefault();
}

button[0].addEventListener("click", (e) => {
    console.log(email, password, chosenValue);

    // console.log(result);
    result[0].innerHTML = `
        <p> ${email} </p>
        <p> ${password} </p>
        <h1> You have chosen ${chosenValue} </h1>
    `;
});