import '@testing-library/jest-dom'
import { act } from 'react'
import MOCK_DATA from './mockMenuPageData.json'
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import RestaurantMenu from '../src/components/RestaurantMenu';
import Cart from '../src/components/Cart';
import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import appStore from '../src/utils/appStore';
global.fetch = jest.fn(()=>{
    return Promise.resolve(()=>{
        return Promise.resolve(MOCK_DATA);
    });
})

it("Should test the Cart Flow", async ()=>{
    await act(()=>{
        <BrowserRouter>
        <Provider store={appStore}/>
            <Header/>
            <RestaurantMenu />
            <Cart />
            <Provider />            
        </BrowserRouter>
    });
})