export default function Card(character) {
    return `<div id="${character.id}">
        <div>
            <img src="${character.image}" />
        </div>
        <header>
            <h1> ${character.name} </h1>
            <p> ${character.origin} </p>
        </header>
        <button>
            Lubię to
        </button>
    </div>`;
}
