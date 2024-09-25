import { useEffect, useState } from "react";
import SimmerUIResList from './SimmerUIResList';
import { MENU_URL } from "../utils/constents";
import { useParams } from "react-router-dom";
import Error from './Error';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {id} = useParams();
/*
    const [resInfo, setResInfo] = useState(null);
    const [menus, setMenus] = useState(null);
    const [error, setError] = useState(false);
    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+id);
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards);
        if(json.data.cards == undefined){
        // if(json.data.cards){
            setError(true);
        }else{
            setResInfo(json?.data?.cards[2]?.card?.card?.info);
            setMenus( json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            console?.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        }
        
        
    }
    if(error){
        return <Error />
    }
    useEffect(()=>{
        fetchMenu();
    },[]);
*/
    const resData = useRestaurantMenu(id);
    if (resData == null) return <SimmerUIResList />;
    const resInfo = resData?.cards[2]?.card?.card?.info;
    const menus = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return (<>
        <h1>
            {resInfo.name}
        </h1>
        <h3>{resInfo.cuisines.join(', ')}</h3>
        <h3>{resInfo.costForTwoMessage}</h3>
        <hr/>
        <div className='res-container'>
        {
            menus.map((menu, indx)=>{
                return(
                     <div className="card-container"  key={indx}>
                     <div className="card">
                        <h4>{menu.card.info.name}</h4>
                        <p>{menu.card.info.description}</p>
                        <p>Veg: {menu.card.info.isVeg == 1?"Yes":"No"}</p>
                        <p>Rs. {(menu.card.info.price||menu.card.info.defaultPrice)/100}/-</p>
                    </div></div>

                )
            })
        }
        </div>
        
    </>)
}

export default RestaurantMenu;