/*
const { render } = require("@testing-library/react");
import Header from "../src/components/Header";

test("Should load header component with login button", ()=>{
    render(<Header />)
});

Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
*/
/*
// strep 2
const { render } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../src/components/Header";
import appStore from '../src/utils/appStore';

test("Should load header component with login button", ()=>{
    render(
        <Provider store={appStore}>
            <Header />
        </Provider>
    )
});

Error: The above error occurred in the <Link> component: */
//and link is coming from react-rounter-dom
// step 3

const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../src/components/Header";
import appStore from '../src/utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

test("Should render header component with login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");
    
    expect(loginButton).toBeInTheDocument();
});
// done suggessfully

test("Should have Logout button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", { name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
})