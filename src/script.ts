class Human {
    private _id: string;
    private _firstname: string;
    private _lastname: string;
    private _age: number;
    private _isMarried: boolean;
    private _birthday: Date;

    constructor(
        id: string,
        firstname: string,
        lastname: string,
        age: number,
        isMarried: boolean,
        birthday: Date,
    ) {
        this._id = id;
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this._isMarried = isMarried;
        this._birthday = birthday;
    }

    /*
        constructor(
            private _id: string,
            private _firstname: string,
            private _lastname: string,
            private _age: number,
            private _isMarried: boolean,
            private _birthday: Date,
        ) {}
    */

    get id() {
        return this._id;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    set firstname(s: string) {
        this._firstname = s;
    }

    set lastname(s: string) {
        this._lastname = s;
    }
}

const human = new Human("1", "John", "Smith", 30, false, new Date());

console.log(human.firstname);

human.firstname = "Empty string";

console.log(human.firstname);