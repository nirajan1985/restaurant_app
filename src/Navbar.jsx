import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import UserContext from "./utils/UserContext";
import logo from "../src/assets/logo.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);

  // Subscribing to store using selector

  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <nav className="flex justify-between items-center px-10 pt-1 pb-1 bg-sky-500/40 shadow-md w-[850px] md:w-[1050px] lg:w-full">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 rounded-full object-cover mr-5 "
      />

      <p className="text-lg sm:text-xl">
        Online status: {onlineStatus ? "🟢" : "🔴"}
      </p>
      <ul className="invisible md:visible flex justify-between space-x-3  lg:space-x-7">
        <li className="font-medium lg:text-xl">
          <Link to="/">HOME</Link>
        </li>
        <li className="font-medium lg:text-xl">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="font-medium lg:text-xl">
          <Link to="/contact">CONTACT</Link>
        </li>

        <li className="font-medium lg:text-xl">
          <Link to="/offer">OFFER</Link>
        </li>
        <li className="font-medium lg:text-xl">
          <Link to="/grocery">GROCERY</Link>
        </li>
      </ul>
      <FontAwesomeIcon icon={faBars} className="text-2xl md:invisible" />
      <Link to="/cart">
        <p className="font-bold">Cart ({cartItems.length})</p>
      </Link>

      <p>Logged in user : {loggedInUser}</p>

      <button
        className="px-4 py-1 m-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "Login" : "Logout"}
      </button>
    </nav>
  );
};
export default Navbar;
