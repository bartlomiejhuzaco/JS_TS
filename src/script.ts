class Human {
    // public, private, protected

    public id: string;
    public firstname: string;
    protected lastname: string;
    public age: number;
    private isMarried: boolean;
    private birthday: Date;

    constructor(
        id: string,
        firstname: string,
        lastname: string,
        age: number,
        isMarried: boolean,
        birthday: Date,
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.isMarried = isMarried;
        this.birthday = birthday;
    }
}

const john: Human = new Human(
    "1",
    "John",
    "Smith",
    40,
    false,
    new Date(),
);

console.log(john);
console.log(john.id);