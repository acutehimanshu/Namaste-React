import RestaurantCard from "./RestaurantCard";

import { useEffect, useState } from "react";
import SimmerUIResList from "./SimmerUIResList";
const HomeRestaurants = () =>{
    const [list, setList] = useState([]);
    const [resList, setResList] = useState([])
    const [searchText, setSearchText] = useState('');
    
    useEffect(()=>{
        callSwiggyAPi()
    }, []);
    const callSwiggyAPi = async () =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(list.length === 0){
        return <SimmerUIResList />
    }
    return (
        <main className="main-content">
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button type="button" onClick={()=>{
                    
                    const filtCards = list.filter((card)=> card.info.name.includes(searchText) );
                    setResList(filtCards);
                }}>Search</button>
            </div>
            <div className="col-md-12">
                <button className="filter-btn" onClick={()=>{
                    const filtCards = list.filter((card)=> {
                        console.log(card.info.avgRating);
                        return card.info.avgRating > 4.5; } );
                    setResList(filtCards);

                    //const newList = list.filter(res=> res.rating >= 4);
                    //setList(newList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                    {resList.map((res, index) => (
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