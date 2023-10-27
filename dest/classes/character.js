export default class Character {
    constructor(_id, _name, _image, _origin) {
        this._id = _id;
        this._name = _name;
        this._image = _image;
        this._origin = _origin;
    }
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
    static createCharacter(data) {
        return new Character(data.id, data.name, data.image, data.origin.name);
    }
}
