let a = 10;
let b = 1;

try {
    if (b === 0) throw new Error("Nie wolno dzielić przez 0!");

    let result = a / b; // Infinity
    console.log(result);
} catch(err) {
    console.error(err);
} finally {
    console.log("It's done");
}