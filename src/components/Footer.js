import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Company Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">MyWebsite</h4>
                        <p className="text-sm text-gray-400">
                            Building solutions for the future with passion and innovation.
                        </p>
                        <p className="mt-2 text-sm text-gray-400">&copy; 2024 MyWebsite. All rights reserved.</p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                            <li className="mb-2"><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link> </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i> Facebook
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                    <p>Made with ❤️ by MyWebsite Team</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
