import { useState } from "react";
import { ITEM_URL } from "../utils/constents";

const RestaurantCategory = ({data, showItem, setShowIndexMenu, index})=>{
    
    const items = data?.card?.card?.itemCards;
    // now we will manage state from parents aas we want to make it controlled component
    // const [showItem, setShowItem] = useState(true);
    const toggleItems = ()=>{
        // setAccordianItem(!showItem);
        setShowIndexMenu(index);
    }
    return (
        <>
        <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className="justify-between flex" onClick={toggleItems}>
                <span className="font-bold text-lg">{data.card.card.title} ({items.length})</span>
                <span> ^ </span>
            </div>
            {
            showItem && <div>
                {
                    items.map(item =>{
                        return (
                            <div key={item.card.info.name} className="p-2 m-2 border-b-2 flex justify-between">
                                <div>
                                    <h2 className="font-bold text-lg">{item.card.info.name}</h2>
                                    <p>
                                        &#8377; {item.card.info.price/100} /-
                                        | {(item.card.info.offerTags !== undefined)?item.card.info.offerTags[0]?.title:''}
                                        | {(item.card.info.offerTags !== undefined)?item.card.info.offerTags[0]?.subTitle:''}
                                    </p>
                                    <p>{item.card.info.description}</p>
                                    <h3>{item.card.info.itemAttribute.vegClassifier}</h3>
                                </div>
                                <div>
                                    {
                                        item.card.info.imageId && 
                                        <img src={ITEM_URL+item.card.info.imageId} className="w-40" />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            }       
        </div>

        
        </>
    )
}

export default RestaurantCategory;