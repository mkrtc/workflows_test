

export const increment = (number: number) => ++number;

export const decrement = (number: number) => --number;

export const addNumbers = (a: number, b: number) => a + b;

console.log("Increment:", increment(1));
console.log("Decrement:", decrement(2));
console.log("Adds numbers:", addNumbers(1, 2));
console.log("Adds numbers 2:", addNumbers(2, 2));
