import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constents";


const Header = () =>{
    const onlineStatus = useOnlineStatus()
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2">
            <div>
                <img src={LOGO_URL} className="w-24" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><a href="#" className="nav-link">Online Status {onlineStatus === false ? 'N' :'Y' }</a></li>
                    <li className="px-4"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="px-4"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="px-4"><Link to="/grocery" className="nav-link">Grocery</Link></li>
                    <li className="px-4"><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;