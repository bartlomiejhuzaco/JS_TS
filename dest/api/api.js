import Character from "../classes/character.js";
import { EAPIKinds } from "../enums/api_kinds.js";
class API {
    constructor() { }
    async sendToAPI(kind) {
        try {
            const characters = [];
            switch (kind) {
                case EAPIKinds.CHARACTER:
                case EAPIKinds.EPISODE:
                case EAPIKinds.LOCATION:
                    break;
                default:
                    return [];
            }
            const response = await fetch(`${API.link}${kind}`);
            const data = await response.json();
            for (let i = 0; i < data.results.length; i++) {
                characters.push(Character.createCharacter(data.results[i]));
            }
            return characters;
        }
        catch (err) {
            console.error(err);
            return [];
        }
        finally {
            alert("Finally!");
        }
    }
}
API.link = "https://rickandmortyapi.com/api/";
export default API;
