import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <h3 className="logo">GANDHI RESTAURANT</h3>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>

        <li>
          <Link to="/offer">OFFER</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
