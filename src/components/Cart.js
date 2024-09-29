import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className="w-6/12 m-auto">
            <div className="flex justify-between mt-4 mb-4">
                <h2 className="text-2xl font-bold">Cart</h2>
                <button onClick={handleClearCart} className="px-4 bg-gray-600 text-white rounded-xl">X Clear Cart </button>
            </div>
            <div>
                {cartItems.length == 0 ? "Cart is empty": <ItemList items={cartItems} />}
                
            </div>
        </div>
    )
}

export default Cart