import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const onlineStatus = useOnlineStatus()
    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className="navbar">
            <a href="#" className="nav-link">Online Status {onlineStatus === false ? 'N' :'Y' }</a>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/grocery" className="nav-link">Grocery</Link>
                
                
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </header>
    )
}
export default Header;