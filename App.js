import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeRestaurants from './components/HomeRestaurants';

const AppLayout = () =>{
    return (
        <div>
            <Header />
            <HomeRestaurants />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
