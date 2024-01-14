import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h2>2024 MYBOOK</h2>
          <ul>
            <li>
              <Link to="/">Explorer</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
