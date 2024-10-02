import { useEffect, useState } from "react";
import SimmerUIResList from './SimmerUIResList';
import { MENU_URL } from "../utils/constents";
import { useParams } from "react-router-dom";
import Error from './Error';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndexMenu, setShowIndexMenu] = useState(null);

    const {id} = useParams();
    const resData = useRestaurantMenu(id);
    if (resData == null) return <SimmerUIResList />;
    const restroInfo = resData?.cards[0]?.card?.card;
    const dineTypes = resData?.cards[1]?.card?.card?.tabs;
    const aboutCard = resData?.cards[2]?.card?.card.info;
    const mainMenuCategories = resData?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    const topPicks = resData?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel;
    
    const showThisItem= (e)=>{
        console.log('showThisItem');
    }
    return (
    <>
    <div className="max-w-[1000px] mx-auto px-4">
        <div className="text-left mt-4 mb-4">
            <h1 className="text-2xl">{restroInfo.text}</h1>
        </div>
        {dineTypes && 
            <div className="flex justify-around border-b">
                <button  className={`py-2 px-4 font-semibold focus:outline-none text-blue-500 border-b-2 border-blue-500`} >
                    {dineTypes[0].title}</button>
                <button className={`py-2 px-4 font-semibold focus:outline-none text-gray-500 hover:text-blue-500`} onClick={() => alert("yet to integreate")}>
                    {(dineTypes[1] !== undefined)?dineTypes[1].title:''}</button>
            </div>
        }

        <div className="mx-auto mt-5 p-4 bg-white rounded-lg shadow-lg border">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                    <span className="text-green-600 text-xl font-semibold">{aboutCard.avgRating}</span>
                    <span className="text-gray-500 ml-1 text-sm">{aboutCard.totalRatingsString}</span>
                </div>
                <span className="text-gray-700">{aboutCard.costForTwoMessage}</span>
            </div>

            <div className="text-orange-500 text-sm mb-2">
                {
                    aboutCard.cuisines.map((e, indx)=>{
                        return (<a href="#" key={'cusin'+indx} className="hover:underline"> {e} </a> )
                    })
                }
            </div>
            <div className="flex items-center mb-2">
                <span className="text-gray-700 font-semibold">Outlet</span>
                <span className="ml-2 text-gray-500">{restroInfo.areaName}</span>
            </div>
            <div className="text-gray-500 mb-4">
                
                <span>{aboutCard?.sla?.slaString}-</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 001 1h2M5 9l7 7m0 0l7-7m-7 7V3" />
                </svg>
                <span>{aboutCard?.feeDetails?.message}</span>
            </div>
        </div>

        <div className="text-center mt-4 mb-4">
            <hr/>
            <h2 className="text-lg">~ Menu ~</h2>
            <hr/>
        </div>

        <div className="w-full mt-6">
            <h2 className="text-2xl font-semibold mb-4">Top Picks</h2>
            <div className="flex space-x-4 overflow-x-scroll p-4">
                {topPicks.map((item, index) => (
                    <div key={index} className="w-64 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0" >
                        <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/'+item.creativeId} alt={item.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.dish.info.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold">Rs.{item.dish.info.price/100}/-</span>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {
            mainMenuCategories.map((cat, index)=>{
                return(
                    <RestaurantCategory 
                    key={index+1} 
                    data={cat} 
                    showItem={index == showIndexMenu && true} 
                    setShowIndexMenu={(getClicked)=> {
                        if (getClicked == showIndexMenu)
                            return setShowIndexMenu(null)
                        else 
                            return setShowIndexMenu(index)
                    }}
                    index={index}
                    />
                )
            })
        }



    {/* Main Div */}
    </div>
    </>
    )
}

export default RestaurantMenu;