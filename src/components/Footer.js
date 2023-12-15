import Logo from "../assets/little-lemon_vertical.png"
import "./Footer.css"

import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <div>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about-us'>About</Link></li>
                    <li><Link to=''>Menu</Link></li>
                    <li><Link to=''>Reservations</Link></li>
                    <li><Link to=''>Order Online</Link></li>
                    <li><Link to=''>Login</Link></li>
                    
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>Address<br />Chicago St.12 USA</li>
                    <li>Phone Number<br />+123 4567 890</li>
                    <li>Email<br />littlelemon@example.com</li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer