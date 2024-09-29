import { useState } from "react";
import { ITEM_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, setShowIndexMenu, index})=>{
    
    const items = data?.card?.card?.itemCards;
    // now we will manage state from parents aas we want to make it controlled component
    // const [showItem, setShowItem] = useState(true);
    const toggleItems = ()=>{
        // setAccordianItem(!showItem);
        setShowIndexMenu(index);
    }

    const dispatch = useDispatch(); 

    const handleAddToCardItem = (item)=>{
        // dispatch an action
        // dispatch will create payload of this like
        /*
        {
            payload: "Pizza"    
        }
            and will pass as 2nd argument in reducer 
        */
        dispatch(addItem(item));
    }
    return (
        <>
        <div className="w-full bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
            <div className="justify-between flex" onClick={toggleItems}>
                <span className="font-bold text-lg">{data.card.card.title} ({items.length})</span>
                <span> ^ </span>
            </div>
            { showItem && <ItemList items={items}/>}
            {/* {
            showItem &&  <div>
                {
                    items.map(item =>{
                        return (
                            <ItemList key={item.card.info.name} item={item} />
                            
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
                                <div className="text-right">
                                <button 
                                    onClick={()=>handleAddToCardItem(item)}
                                    className="absolute text-white bg-black p-2 -mx-14 rounded-md shadow-lg">
                                    + Add
                                </button>
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
            }        */}
        </div>

        
        </>
    )
}

export default RestaurantCategory;