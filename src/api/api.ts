import Character from "../classes/character.js";
import { EAPIKinds } from "../enums/api_kinds.js";

export default class API {

    public static readonly link: string = "https://rickandmortyapi.com/api/";

    constructor() {}

    sendToAPI(kind: EAPIKinds): Promise<Character[]> {
        const characters: Character[] = [];

        switch(kind) {
            case EAPIKinds.CHARACTER:
            case EAPIKinds.EPISODE:
            case EAPIKinds.LOCATION:
                break;
            default:
                return new Promise((_, __) => []);
        }

        return fetch(`${API.link}${kind}`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < data.results.length; i++) {
                    characters.push(Character.createCharacter(data.results[i]));
                }

                return characters;
            })
            .catch((err) => {
                console.error("Błąd w aplikacji!");
                console.error(err);

                return [];
            })
            .finally(() => {
                console.log("JUST FINISHED! Finally!");
            });
    }
}