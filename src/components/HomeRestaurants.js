import RestaurantCard,  {withPromotedLabel} from "./RestaurantCard";

import { useContext, useEffect, useState } from "react";
import SimmerUIResList from "./SimmerUIResList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const HomeRestaurants = () =>{
    const [list, setList] = useState([]);
    const [resList, setResList] = useState([])
    const [searchText, setSearchText] = useState('');
    const PromotedRestoCards = withPromotedLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();
    const {name, setUserName} = useContext(UserContext);
    // if(onlineStatus === false ) return <h1> Looks like you are offline. Please check your internet connection</h1>;

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
        <main>
            <div className="flex">
                <div className="m-1 p-4 ">
                    <input 
                    data-testid="SearchTextBox"
                    className="border border-solid border-black"
                    type="text" 
                    placeholder="Search..." 
                    value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                        name="Search" 
                        className=" m-4 py-1 px-4 bg-green-100 rounded-2xl" 
                        type="button" 
                        onClick={()=>{
                            const filtCards = list.filter((card)=> card.info.name.includes(searchText) );
                            setResList(filtCards);
                        }}
                    >Search</button>
                </div>
                <div className="m-1 p-4 flex items-center">
                    <button className="bg-gray-200 px-4 py-1 rounded-2xl" onClick={()=>{
                        const filtCards = list.filter((card)=> {
                            console.log(card.info.avgRating);
                            return card.info.avgRating > 4.5; } );
                        setResList(filtCards);

                        //const newList = list.filter(res=> res.rating >= 4);
                        //setList(newList);
                    }}>Top Rated Restaurant</button>
                </div>
                <div className="m-1 p-4 flex items-center">
                    <label>Welcome : 
                        <input type="text" className="border-lime-100 p-1 shadow-xl" value={name} onChange={(e)=>{
                            setUserName(e.target.value);
                        }}/>
                    </label>
                        
                </div>
            </div>
            
            <div className='flex flex-wrap'>
                    {resList.map((res, index) => (
                        <Link key={res.info.id} to={'restaurants/'+res.info.id}>
                            {res.info.avgRating > 4.5 ?  <PromotedRestoCards resData = {res}/> : <RestaurantCard resData = {res}/>  }
                        </Link>
                        
                    ))}
            </div>
            
        </main>
    )
}
export default HomeRestaurants;