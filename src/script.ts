// GENERIC TYPES - Typy generyczna

enum EAppCategory {
    SPORT,
    EDUCATION,
    VIDEOS
}

interface IApp<T, K, V> {
    id: string,
    category: T
}

const app: IApp<string | EAppCategory, number, boolean> = {
    id: "1",
    category: EAppCategory.EDUCATION
};

// FUNCTION

function add<T, K>(arg1: T, arg2: K): string {
    let a: T | null = null;

    const text = `${arg1} + ${arg2}`;

    a = arg1;

    return text;
}

console.log(add<string, number>("Hello", 100))

// PRACTICE;

interface IServiceBenefits<T> {
    economic: T[],
    standard: T[],
    premium: T[]
}

// CONNECTION DB
const serviceBenefits1: IServiceBenefits<string> = {
    economic: ["helo", "Oi"],
    standard: [],
    premium: ["Tylko", "dla", " bogatych"]
} 

const serviceBenefits2: IServiceBenefits<boolean> = {
    economic: [false],
    standard: [false],
    premium: [true]
} 

const serviceBenefits3: IServiceBenefits<string[]> = {
    economic: [["a"], ["b"], ["c"]],
    standard: [["d"], ["e"], ["f"]],
    premium: []
} 