import RestaurantCard from "./RestaurantCard";
import mokData from "../utils/mokdata";
const HomeRestaurants = () =>{
    return (
        <main className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="col-md-12">
                <button className="filter-btn" onClick={ ()=>{
                    console.log("Button Clikced");
                    
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                    {mokData.data.map((res, index) => (
                        <RestaurantCard
                            key={index}
                            resData = {res}
                            
                        />
                    ))}
            </div>
            
        </main>
    )
}
export default HomeRestaurants;