import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

test("test loading of contact us component", ()=>{
    render(<Contact />)
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("search number of textbox on the page", ()=>{
    render(<Contact />)
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
})