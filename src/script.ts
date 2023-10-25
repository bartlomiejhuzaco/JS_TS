// INTERFACE oraz TYPE

interface IUser {
    email: string;
    fullname: string;
    age: number;
    func: (index: number) => void;
}

type TUser = {
    email: string,
    fullname: string,
    age: number,
    func: (index: number) => void
}

const user: TUser = {
    email: "email",
    fullname: "Bartłomiej Huza",
    age: 20,
    func: function(index) {
        console.log(this.email, this.fullname, this.age);
    }
}

// ENUM
enum ELetter {
    A = "A",
    B = "B",
    C = "Cebula",
    D = "D",
};

console.log(ELetter.C);

// UNIONS
// | => SHIFT + \
let nickname: string | string[] | number = 7867;

let array: (string | number | boolean)[] = ["Hello", 123, false];
let arr: string[] | number[] | boolean[] = ["Hello", "123" , "false"];