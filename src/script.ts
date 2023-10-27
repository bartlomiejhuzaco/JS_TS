import API from "./api/api.js";
import Card from "./components/card.js";
import { EAPIKinds } from "./enums/api_kinds.js";

// SEND TO API
const api: API = new API();

async function sendAPI() {
    const data = await api.sendToAPI(EAPIKinds.CHARACTER);

    const cardsElement: HTMLDivElement = document.getElementById("cards") as HTMLDivElement;

    for (let i = 0; i < data.length ; i++) {
        cardsElement.innerHTML = cardsElement.innerHTML + Card(data[i]);
    }

    alert("JUST FINISHED");
}

// CREATE CHARACTERS

// CREATE COMPONENTS

// SHOW COMPONENTS

const btn: HTMLButtonElement = document.getElementById("btn") as HTMLButtonElement;
btn.addEventListener("click", async (event: any) => {
    await sendAPI();
});