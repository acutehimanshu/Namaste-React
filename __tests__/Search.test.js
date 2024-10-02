import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, json } from 'react-router-dom';
import HomeRestaurants from '../src/components/HomeRestaurants';
import { act } from 'react';
import MOCK_DATA from './mockHomePageData.json';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
test("Should filter card with Search functionality", async ()=>{
    await act( async ()=>{
        return render(
            <BrowserRouter>
                <HomeRestaurants />
            </BrowserRouter>
        )
    })
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchTextBox = screen.getByTestId("SearchTextBox");
    fireEvent.change(searchTextBox, {target: {value:"KFC"}});
    fireEvent.click(searchBtn);
    const getAllTestCards= screen.getAllByTestId('resCardTest');
    expect(getAllTestCards.length).toBe(1);
})

test("Search Top Rated Restaurant", async ()=>{
    await act( async ()=>{
        return render(
            <BrowserRouter>
                <HomeRestaurants />
            </BrowserRouter>
        )
    })
    const topBtn = screen.getByRole("button", {name:"Top Rated Restaurant"});
    fireEvent.click(topBtn);
    const getAllTestCards= screen.getAllByTestId('resCardTest');
    expect(getAllTestCards.length).toBe(7);
})