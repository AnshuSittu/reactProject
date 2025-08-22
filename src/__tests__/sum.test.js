import { sum } from "../sum"; // adjust the path based on your project structure

test ("sum function should be caluclate the sum of two numbers",()=>{
    const result = sum (2,3);

    // Assertion
    expect(result).toBe(5);
})