import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <header className="header">
            <div className="logo">MyLogo</div>
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <a href="#" className="nav-link">Services</a>
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </header>
    )
}
export default Header;