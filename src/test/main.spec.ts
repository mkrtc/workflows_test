import { addNumbers, decrement, increment } from "../main";



test("increment", () => {
    expect(increment(1)).toBe(2);
})

test("decrement", () => {
    expect(decrement(2)).toBe(1);
})

test("Adds 1 + 2 to equal 3", () => {
    expect(addNumbers(1, 2)).toBe(3)
})