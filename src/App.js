import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeRestaurants from './components/HomeRestaurants';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery'; // this will load in index.js 

const Grocery= lazy(()=> import('./components/Grocery') );
const AppLayout = () =>{
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
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
