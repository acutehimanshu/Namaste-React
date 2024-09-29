import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeRestaurants from './components/HomeRestaurants';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery'; // this will load in index.js 

const Grocery= lazy(()=> import('./components/Grocery') );


const AppLayout = () =>{
    const {name} = useContext(UserContext);
    const [userName, setUserName] = useState(name);
useEffect(()=>{
    // suppose we called and api and get data like
    const json = {"name":"Akshay Saini"};
    setUserName(json.name);
},[]);
console.log(userName);

    return (
        <div>
            { console.log('userName: '+userName)
             }
            <UserContext.Provider value={{name:userName, setUserName}}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<HomeRestaurants />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/restaurants/:id",
                element:<RestaurantMenu />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h2>Loading...</h2>}> <Grocery /> </Suspense>,
            }
        ]
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={appRouter} /> );
