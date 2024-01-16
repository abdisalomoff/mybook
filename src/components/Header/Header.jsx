import "./Header.scss"
import Logo from "../../assets/icons/site-logo.svg"
import ShopCart from "../../assets/icons/shopping-cart.svg"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
return (
<header>
    <div className="header-container">
        <div className="header">
            <div className="header-left">
                <Link to={"/"}> <img src={Logo} alt="mybook website logo" /></Link>
                <div className="line"></div>
                <img src={ShopCart} alt="shopping cart" />
            </div>
            <ul>
                <li>
                    <NavLink to="/">
                        Explorer
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop">
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink className="login" to="/login">
                        Log in
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
</header>
)
}

export default Header