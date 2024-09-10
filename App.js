import React from 'react';
import ReactDOM from 'react-dom/client';

const restaurantData = {
    "data": [
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant One",
        "cousins": "Italian, Mediterranean",
        "rating": "★★★★☆",
        "cost": 25,
        "time": "20 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Two",
        "cousins": "Chinese, Thai",
        "rating": "★★★☆☆",
        "cost": 15,
        "time": "25 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Three",
        "cousins": "Indian, Punjabi",
        "rating": "★★★★★",
        "cost": 30,
        "time": "30 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Four",
        "cousins": "Mexican, Tex-Mex",
        "rating": "★★★☆☆",
        "cost": 20,
        "time": "15 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Five",
        "cousins": "Japanese, Sushi",
        "rating": "★★★★☆",
        "cost": 35,
        "time": "40 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Six",
        "cousins": "American, Fast Food",
        "rating": "★★☆☆☆",
        "cost": 10,
        "time": "10 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Seven",
        "cousins": "French, Gourmet",
        "rating": "★★★★★",
        "cost": 50,
        "time": "50 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Eight",
        "cousins": "Greek, Mediterranean",
        "rating": "★★★★☆",
        "cost": 28,
        "time": "25 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Nine",
        "cousins": "Vietnamese, Asian",
        "rating": "★★★☆☆",
        "cost": 22,
        "time": "30 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Ten",
        "cousins": "Lebanese, Middle Eastern",
        "rating": "★★★★☆",
        "cost": 27,
        "time": "35 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Eleven",
        "cousins": "Korean, Asian Fusion",
        "rating": "★★★☆☆",
        "cost": 18,
        "time": "20 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Twelve",
        "cousins": "Brazilian, South American",
        "rating": "★★★☆☆",
        "cost": 23,
        "time": "25 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Thirteen",
        "cousins": "Russian, Eastern European",
        "rating": "★★★★☆",
        "cost": 29,
        "time": "30 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Fourteen",
        "cousins": "Indian, South Indian",
        "rating": "★★☆☆☆",
        "cost": 17,
        "time": "15 mins"
      },
      {
        "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        "resName": "Restaurant Fifteen",
        "cousins": "Turkish, Middle Eastern",
        "rating": "★★★★★",
        "cost": 40,
        "time": "45 mins"
      }
    ]
  };

const Heading = () =>{
    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className="navbar">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Services</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
        </header>
    )
}
// const RestaurantCard = ({resName,cousins,rating,cost,time,image}) =>{
    const RestaurantCard = (props) => {
        // console.log(props.resData.resName);
        props = props?.resData;
        return (
            <div className="card-container">
                <div className="card">
                    <img src={props.image} alt="Card Image" className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{props.resName}</h2>
                        <p className="card-description">{props.cousins}</p>
                        <div className="card-details">
                            <span className="card-rating">Rating: {props.rating}</span>
                            <span className="card-cost">Cost: ${props.cost}</span>
                            <span className="card-time">Time: {props.time}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
const AppLayout = () =>{
    return (
        <div>
            <Heading />
        <main className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className='res-container'>
                    {restaurantData.data.map((res, index) => (
                        <RestaurantCard 
                            key={index}
                            resData = {res}
                            
                        />
                    ))}
                {/* <RestaurantCard 
                    resName = "Meghna Foods"
                    cousins = "Biryani, North Indian, South Indian"
                    rating = "★★★★☆"
                    cost = "20"
                    time = "30 minutes"
                    image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek'
                />
                <RestaurantCard 
                resName = "KFC"
                cousins = "Burger, Pizza"
                rating = "★★★☆☆"
                cost = "10"
                time = "20 minutes"
                image = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek'
                /> */}
            </div>
            
        </main>

        <footer className="footer">
            <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
            </div>
            <p className="footer-copyright">&copy; 2024 MyWebsite. All rights reserved.</p>
        </footer>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
