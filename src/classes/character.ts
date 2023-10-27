

export default class Character {
    constructor(
        private _id: string,
        private _name: string,
        private _image: string,
        private _origin: string,
    ) {}

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get image() {
        return this._image;
    }

    get origin() {
        return this._origin;
    }

    static createCharacter(data: any): Character {
        return new Character(data.id, data.name, data.image, data.origin.name);
    }
}