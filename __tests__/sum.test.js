import { Sum } from "../src/components/Sum"

test("Perform Addition of two numbers via Sum Component", ()=>{
    const res =Sum(4,5);

    //Assertion
    expect(res).toBe(9);
})