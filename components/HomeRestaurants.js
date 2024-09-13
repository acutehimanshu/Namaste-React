import RestaurantCard from "./RestaurantCard";
import mokData from "../utils/mokdata";
import { useState } from "react";
const HomeRestaurants = () =>{
    const [list, setList] = useState(mokData);
    console.log(list);
    
    return (
        <main className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="button">Search</button>
            </div>
            <div className="col-md-12">
                <button className="filter-btn" onClick={()=>{
                    const newList = list.filter(res=> res.rating >= 4);
                    setList(newList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                    {list.map((res, index) => (
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